# Skill auto-activation via `UserPromptSubmit` hook

> A pattern for surfacing the right skill to Claude Code based on what the user just typed, the files they're editing, and where in the repo they are.

**Inspiration:** [ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase) (no declared license; we reference the pattern and do not vendor the hook code). Read that repo's `.claude/hooks/` directly for a working implementation. This doc describes the pattern so you can build your own.

---

## The problem

You built 15 skills. You described each one carefully. But when a user types *"add a story for the Button component"*, Claude Code doesn't always reach for your `storybook-patterns` skill — it may answer from general knowledge and miss your project's conventions.

Skill descriptions are one signal. You can add more by inspecting the prompt mechanically **before** Claude sees it.

## The pattern

Claude Code's `UserPromptSubmit` hook fires every time a user submits a prompt. The hook receives the prompt on stdin and can emit JSON on stdout that Claude Code includes in the context (or blocks the prompt, or adds a suggestion).

A skill-routing hook does one job: score the prompt against a rule file and print the top matching skills back as suggestions.

```
UserPromptSubmit hook
  │
  ├─ stdin: { "prompt": "add a story for Button", "cwd": "...", ... }
  │
  ├─ read skill-rules.json
  ├─ score each skill against the prompt using:
  │   • keyword match (literal)
  │   • keyword-pattern match (regex)
  │   • path pattern match (glob against files in prompt or cwd)
  │   • directory mapping (cwd → skill)
  │   • intent pattern (regex against phrasing)
  │   • content pattern (regex against code in the prompt)
  │
  └─ stdout: top N skills above the confidence threshold
```

The scoring is weighted (e.g. path > directory > intent > keyword) and summed, then filtered by a minimum confidence score. The engine also supports `excludePatterns` so a skill named `formik-patterns` doesn't fire on the word *"format"*.

## A minimal rule shape

```json
{
  "config": {
    "minConfidenceScore": 3,
    "maxSkillsToShow": 5
  },
  "scoring": {
    "keyword": 2,
    "pathPattern": 4,
    "directoryMatch": 5,
    "intentPattern": 4
  },
  "directoryMappings": {
    "src/components": "core-components",
    "src/graphql": "graphql-schema"
  },
  "skills": {
    "testing-patterns": {
      "priority": 9,
      "triggers": {
        "keywords": ["test", "jest", "spec", "tdd", "mock"],
        "pathPatterns": ["**/*.test.ts", "**/*.spec.ts"],
        "intentPatterns": [
          "(?:write|add|fix).*(?:test|spec)",
          "red.green.refactor"
        ]
      }
    },
    "storybook-patterns": {
      "priority": 8,
      "triggers": {
        "keywords": ["storybook", "stories", "story"],
        "pathPatterns": ["**/*.stories.tsx"],
        "intentPatterns": ["(?:create|add).*stor(?:y|ies)"]
      },
      "excludePatterns": ["history"]
    }
  }
}
```

Define the scoring once. After that, adding a new skill is a JSON edit, not code.

## Why this is worth the complexity

- **Deterministic.** A skill either matches the rules or doesn't — no flakiness from LLM interpretation of descriptions.
- **Debuggable.** When a skill doesn't fire, `console.log` the score breakdown and see which rule missed.
- **Fast.** The hook is plain Node/Bash, not a model call. Round-trip is milliseconds.
- **Cheap.** No extra token cost per prompt.

## Where the pattern earns its keep

- Repos with **many skills** (8+). Below that, Claude's description-matching is enough.
- Teams where skill authors are **not the same people** as the end users — rules document the author's intent formally.
- Projects with **strong directory conventions** (e.g. components live in `src/components`, API clients in `src/api`) — the directory-mapping signal alone is already very predictive.

## Where it doesn't

- Small personal projects — overkill.
- Skills that are genuinely cross-cutting (e.g. `receiving-code-review`) — trying to trigger them from keywords gives too many false positives. Leave these to description-based activation.

## Fallback behavior

Always exit 0 even on error. A broken hook that blocks every prompt is worse than no hook at all:

```bash
#!/bin/bash
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NODE_SCRIPT="$SCRIPT_DIR/skill-eval.js"

command -v node >/dev/null 2>&1 || exit 0
[[ -f "$NODE_SCRIPT" ]] || exit 0

cat | node "$NODE_SCRIPT" 2>/dev/null
exit 0
```

## Related in this hub

- [cursor-claude-codex/best-practices/hooks-guide.md](../best-practices/hooks-guide.md) — hook fundamentals and other hook patterns.
- [cursor-claude-codex/references/github-actions-for-claude.md](./github-actions-for-claude.md) — the CI counterpart to this editor-side pattern.
- [cursor-claude-codex/skills/visual-content/README.md](../skills/visual-content/README.md) and [business-automation/README.md](../skills/business-automation/README.md) — bulk-catalog skills that especially benefit from this pattern, since description-based activation doesn't scale past ~20 skills.
- [cursor-claude-codex/references/upstream-repos-catalog.md](./upstream-repos-catalog.md) — the full catalog entry for ChrisWiles/claude-code-showcase.

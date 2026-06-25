# Forward-Future/loop-library — loop skill (vendored)

**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**License:** MIT — see [LICENSE](./LICENSE) — © 2026 Forward Future
**Vendored:** 2026-06-25 — the `loop-library` SKILL.md package (skill + references + agent manifest), mirrored from upstream `skills/loop-library/`

## What it is

A companion skill for a curated catalog of **bounded AI-agent loops** — repeatable feedback-cycle workflows with explicit trigger, action, verify, stop, and handoff. The skill routes five paths:

- **Discover** — analyze a codebase or coding-thread history for repeated work that can become a bounded loop
- **Find** — recommend 1–3 published loops for a stated problem
- **Audit / Loop Doctor** — diagnose an existing loop and repair weak checks, unsafe authority, unbounded repetition, stale state, or unclear stopping behavior
- **Adapt** — tailor a published loop to your context
- **Design** — interview-driven creation of a new bounded loop

It treats a loop as a **feedback system with terminal states**, not permission for endless autonomy — a six-step cycle: Observe → Choose → Act → Verify → Record → Repeat-or-stop.

## The live catalog (link-only — do not copy)

The published loops (69 as of 2026-06-24, across Engineering, Evaluation, Operations, Content, Design) live in a remote database that updates daily. The README explicitly warns that repo content is **not** the published catalog. Read the live catalog at:

- **Catalog (markdown):** https://signals.forwardfuture.com/loop-library/catalog.md
- **Catalog (JSON):** https://signals.forwardfuture.com/loop-library/catalog.json
- **llms.txt:** https://signals.forwardfuture.com/loop-library/llms.txt

Sample published loops: "The docs sweep", "The production error sweep", "The sub-50 ms page-load loop", "The architecture satisfaction loop", "The 100% test coverage loop", "The Codex completion-contract loop", "The React Doctor repair loop".

## Layout

| Path | Contents |
|------|----------|
| [SKILL.md](./SKILL.md) | The skill itself (routes Discover/Find/Audit/Adapt/Design) |
| [references/discover.md](./references/discover.md) | Deep guide for the Discover path |
| [references/audit.md](./references/audit.md) | Deep guide for the Audit / Loop Doctor path |
| [agents/openai.yaml](./agents/openai.yaml) | OpenAI agent manifest |
| [LICENSE](./LICENSE) | MIT license |

## Install in this hub

```bash
# Cursor / Claude Code / Codex — install upstream to get updates
npx skills add Forward-Future/loop-library --skill loop-library -g
```

Or copy/symlink this folder into your skills path (`~/.claude/skills/`, `~/.agents/skills/`, or `.cursor/skills/`).

## Pairs with

- [cursor-claude-codex/references/agentic-patterns.md](../../references/agentic-patterns.md) — our agentic-patterns reference; "bounded loop" is a feedback-loop pattern sibling to output-verification-loop and agent-circuit-breaker
- [subagent-driven-development](../subagent-driven-development/) · [executing-plans](../executing-plans/) — obra/superpowers loop-with-checkpoints patterns
- [verification-before-completion](../verification-before-completion/) — the "Verify" step of every bounded loop

## Attribution

Vendored as-is from [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library) (MIT), © 2026 Forward Future. Lead author/maintainer Matthew Berman (@mberman84); notable contributors Eric Lott, Peter Steinberger, Christian Katzmann, Hiten Shah (@hnshah), Shinichi Nagata (@DecisionOS), Will Undrell (@WillUndrll), Vincent Quero (@growithvince). The MIT LICENSE is preserved verbatim.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#forward-futureloop-library).

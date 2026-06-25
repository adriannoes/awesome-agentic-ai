# Matt Pocock skills (vendored)

**Source:** [mattpocock/skills](https://github.com/mattpocock/skills)
**License:** MIT (see [LICENSE](./LICENSE)) — © Matt Pocock
**Vendored:** 2026-06-25 — 20 of Matt's active skills (synced to upstream `main` @ 2026-06-24; skipped repo-specific setup, deprecated, in-progress, and personal items)

## Why these matter

Matt's skills sit at the intersection of "real engineering" and "AI as a collaborator". They're built around solving four common agent failure modes:

1. **The agent didn't do what I want** — fixed by *grilling sessions* (`grill-me`, `grill-with-docs`, `grilling`)
2. **The agent is way too verbose** — fixed by a *shared language* / `CONTEXT.md` (`grill-with-docs` + ADR generation, `domain-modeling`, `codebase-design`)
3. **The code doesn't work** — fixed by *small steps with tight feedback* (`tdd`, `diagnosing-bugs`)
4. **Plan drift** — fixed by *triage and handoff* (`triage`, `to-issues`, `to-prd`, `handoff`, `ask-matt`)

The core philosophy: **small, easy to adapt, composable, model-agnostic**. They don't try to own the process the way GSD/BMAD/Spec-Kit do — they just hand you a sharp tool.

## Skills (20 across 3 categories)

### engineering/ (13)

| Skill | What it does |
|-------|--------------|
| [ask-matt](./engineering/ask-matt/SKILL.md) | Ask Matt a question directly — routes a prompt to Matt's own guidance/style for a second opinion. |
| [codebase-design](./engineering/codebase-design/SKILL.md) | Shared vocabulary for designing *deep modules* — small interface, clean seam, testable. Used by other skills that need the deep-module language. |
| [diagnosing-bugs](./engineering/diagnosing-bugs/SKILL.md) | Diagnosis loop for hard bugs and perf regressions (reproduce → minimise → hypothesise → instrument → fix → regression-test). Renamed from `diagnose`. Different angle from our [systematic-debugging](../systematic-debugging/) (obra/superpowers); read both. |
| [domain-modeling](./engineering/domain-modeling/SKILL.md) | Grilling session that produces an ADR + ubiquitous-language `CONTEXT.md` for a domain. Pairs with [grill-with-docs](./engineering/grill-with-docs/SKILL.md). |
| [grill-with-docs](./engineering/grill-with-docs/SKILL.md) | Grilling session that also generates an ADR + ubiquitous-language `CONTEXT.md`. Matt's flagship — pairs with our [brainstorming](../brainstorming/) but adds documentation as output. |
| [implement](./engineering/implement/SKILL.md) | Disciplined implementation loop — one task at a time, verify before moving on. |
| [improve-codebase-architecture](./engineering/improve-codebase-architecture/SKILL.md) | Architectural review and improvement workflow; emits an HTML report (`HTML-REPORT.md`). |
| [prototype](./engineering/prototype/SKILL.md) | Rapid prototyping with logic/UI split (`LOGIC.md`, `UI.md`) before committing to a build. |
| [resolving-merge-conflicts](./engineering/resolving-merge-conflicts/SKILL.md) | Structured approach to merge conflicts — understand before resolving. |
| [tdd](./engineering/tdd/SKILL.md) | Matt's take on TDD. Different angle from our [test-driven-development](../test-driven-development/) (obra/superpowers); read both. |
| [to-issues](./engineering/to-issues/SKILL.md) | Convert a plan or document into well-formed issues on the tracker. |
| [to-prd](./engineering/to-prd/SKILL.md) | Generate a PRD. Pairs with our [cursor-claude-codex/product-management/create-prd.md](../../product-management/create-prd.md). |
| [triage](./engineering/triage/SKILL.md) | State-machine for issue triage on GitHub/Linear/local files. Includes `AGENT-BRIEF.md` format for AFK agents. |

### productivity/ (5)

| Skill | What it does |
|-------|--------------|
| [grill-me](./productivity/grill-me/SKILL.md) | Matt's #1 most-used skill. Non-code grilling — the agent interviews you relentlessly about a plan until shared understanding. |
| [grilling](./productivity/grilling/SKILL.md) | The shared grilling engine behind `grill-me` and `grill-with-docs` — interview the user relentlessly to stress-test a plan or design. |
| [handoff](./productivity/handoff/SKILL.md) | Produce a clean handoff document when context is about to be lost (end of session, agent switch). |
| [teach](./productivity/teach/SKILL.md) | Teach the agent a domain via a glossary, learning record, mission, and resources (`*-FORMAT.md` files). |
| [writing-great-skills](./productivity/writing-great-skills/SKILL.md) | Matt's updated meta-skill for writing new skills (with a `GLOSSARY.md`). Replaces the older `write-a-skill`, which was removed upstream. |

### misc/ (2)

| Skill | What it does |
|-------|--------------|
| [git-guardrails-claude-code](./misc/git-guardrails-claude-code/SKILL.md) | Hooks that block unsafe git operations from Claude Code. |
| [setup-pre-commit](./misc/setup-pre-commit/SKILL.md) | Set up `pre-commit` framework for a project. |

## What we did NOT vendor and why

| Skipped | Reason |
|---------|--------|
| `engineering/setup-matt-pocock-skills` | Setup script tied to Matt's installer flow; replaced by our README and direct file copy |
| `misc/migrate-to-shoehorn` | TypeScript-library-specific (Matt's [Shoehorn](https://github.com/total-typescript/shoehorn)); too narrow for this hub |
| `misc/scaffold-exercises` | Tied to Matt's course-creation flow |
| `in-progress/*` (`decision-mapping`, `loop-me`, `review`, `writing-beats`, `writing-fragments`, `writing-shape`) | Matt marks these as in-progress upstream; vendor once promoted |
| `personal/*` | Matt-specific personal workflows |
| `deprecated/*` | Marked deprecated upstream |

For these, install upstream directly: `npx skills@latest add mattpocock/skills`.

## Changes since the 2026-05-03 vendor

- **Renamed:** `diagnose` → `diagnosing-bugs` (upstream rename).
- **Removed (upstream deleted):** `zoom-out` (engineering), `caveman` (productivity), `write-a-skill` (productivity — superseded by `writing-great-skills`).
- **Added (engineering):** `ask-matt`, `codebase-design`, `diagnosing-bugs`, `domain-modeling`, `implement`, `prototype`, `resolving-merge-conflicts`.
- **Added (productivity):** `grilling`, `handoff`, `teach`, `writing-great-skills`.
- **Refreshed:** `improve-codebase-architecture` (now ships `HTML-REPORT.md`), plus `grill-with-docs`, `tdd`, `to-issues`, `to-prd`, `triage`, `grill-me`.

## Install upstream (alternative)

If you'd rather use Matt's installer (lets you select which skills to install on which agent):

```bash
npx skills@latest add mattpocock/skills
```

After install, run `/setup-matt-pocock-skills` in your agent.

## Attribution

All 20 skills + LICENSE are vendored as-is from [mattpocock/skills](https://github.com/mattpocock/skills). When using or adapting one, credit Matt and link to the original. He maintains an active newsletter where new skills are announced: [aihero.dev/s/skills-newsletter](https://www.aihero.dev/s/skills-newsletter).

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#mattpocockskills).

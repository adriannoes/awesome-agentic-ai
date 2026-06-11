# Matt Pocock skills (vendored)

**Source:** [mattpocock/skills](https://github.com/mattpocock/skills)
**License:** MIT (see [LICENSE](./LICENSE)) — © Matt Pocock
**Vendored:** 2026-05-03 — 13 of Matt's active skills (skipped repo-specific setup, deprecated, and personal items)

## Why these matter

Matt's skills sit at the intersection of "real engineering" and "AI as a collaborator". They're built around solving four common agent failure modes:

1. **The agent didn't do what I want** — fixed by *grilling sessions* (`grill-me`, `grill-with-docs`)
2. **The agent is way too verbose** — fixed by a *shared language* / `CONTEXT.md` (`grill-with-docs` + ADR generation)
3. **The code doesn't work** — fixed by *small steps with tight feedback* (`tdd`, `diagnose`)
4. **Plan drift** — fixed by *zooming out* (`zoom-out`, `triage`, `to-issues`, `to-prd`)

The core philosophy: **small, easy to adapt, composable, model-agnostic**. They don't try to own the process the way GSD/BMAD/Spec-Kit do — they just hand you a sharp tool.

## Skills (13 across 3 categories)

### engineering/ (8)

| Skill | What it does |
|-------|--------------|
| [grill-with-docs](./engineering/grill-with-docs/SKILL.md) | Grilling session that also generates an ADR + ubiquitous-language `CONTEXT.md`. Matt's flagship — pairs with our [brainstorming](../brainstorming/) but adds documentation as output. |
| [tdd](./engineering/tdd/SKILL.md) | Matt's take on TDD. Different angle from our [test-driven-development](../test-driven-development/) (obra/superpowers); read both. |
| [diagnose](./engineering/diagnose/SKILL.md) | Bug diagnosis workflow. Different angle from our [systematic-debugging](../systematic-debugging/) (obra/superpowers); read both. |
| [triage](./engineering/triage/SKILL.md) | State-machine for issue triage on GitHub/Linear/local files. Includes `AGENT-BRIEF.md` format for AFK agents. |
| [to-issues](./engineering/to-issues/SKILL.md) | Convert a plan or document into well-formed issues on the tracker. |
| [to-prd](./engineering/to-prd/SKILL.md) | Generate a PRD. Pairs with our [cursor-claude-codex/product-management/create-prd.md](../../product-management/create-prd.md). |
| [improve-codebase-architecture](./engineering/improve-codebase-architecture/SKILL.md) | Architectural review and improvement workflow. |
| [zoom-out](./engineering/zoom-out/SKILL.md) | Pause and take stock. Counter to "agent in tunnel vision" failure mode. |

### productivity/ (3)

| Skill | What it does |
|-------|--------------|
| [grill-me](./productivity/grill-me/SKILL.md) | Matt's #1 most-used skill. Non-code grilling — the agent interviews you relentlessly about a plan until shared understanding. |
| [caveman](./productivity/caveman/SKILL.md) | Constrain the agent to caveman-simple language and decisions when context is foggy. |
| [write-a-skill](./productivity/write-a-skill/SKILL.md) | Matt's meta-skill for writing new skills. Different angle from our [writing-skills](../writing-skills/) (obra/superpowers); read both. |

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
| `personal/edit-article`, `personal/obsidian-vault` | Matt-specific personal workflows |
| `deprecated/*` | Marked deprecated upstream |

For these, install upstream directly: `npx skills@latest add mattpocock/skills`.

## Install upstream (alternative)

If you'd rather use Matt's installer (lets you select which skills to install on which agent):

```bash
npx skills@latest add mattpocock/skills
```

After install, run `/setup-matt-pocock-skills` in your agent.

## Attribution

All 13 skills + LICENSE are vendored as-is from [mattpocock/skills](https://github.com/mattpocock/skills). When using or adapting one, credit Matt and link to the original. He maintains an active newsletter where new skills are announced: [aihero.dev/s/skills-newsletter](https://www.aihero.dev/s/skills-newsletter).

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#mattpocockskills).

---
name: CLAUDE
description: Agent conventions for the SDD pipeline. Always active.
alwaysApply: true
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# CLAUDE.md — Conventions for AI agents

This project follows **Spec-Driven Development (SDD)**. Read this before implementing anything.

## Session start — load the base context
> A **`SessionStart`** hook (`.claude/settings.json` → `.claude/hooks/load-context.mjs`) injects
> this base context **automatically** (deterministic guarantee). If the hook is disabled,
> this directive is the fallback — and since `CLAUDE.md` is always loaded, it covers the case.

**Ensure the base context before the first task — the `alwaysApply: true` docs:**
`docs/STATE.md` · `docs/product/vision.md` · `docs/product/roadmap.md` · and the `spec.md` of the
active feature in `specs/`.

All other docs are `alwaysApply: false` — **do not read them now**. Pull each one **on demand**,
when the task requires it, guided by the `description` in its frontmatter.

## The spec is the source of truth
- Implement **from** `specs/NNNN-*/spec.md`. The acceptance criteria
  (Given/When/Then) are the contract and the test oracle.
- If the spec is ambiguous or wrong, **stop and ask** — do not guess.
  Updating the spec is a conscious decision, not a side effect of the code.
- Never implement beyond the spec scope. "Out of scope" is binding.

## Knowledge verification (never invent)
Before asserting how something works, follow this order — stop as soon as you have the answer:
1. **The codebase's own patterns** (how it is already done here).
2. **Project docs** (`specs/`, `docs/`, ADRs, glossary).
3. **Reference MCP** (e.g. Context7 for libs) when connected.
4. **Official web/docs** of the technology.
5. **Couldn't find it? Say "I don't know" and flag it.** Never invent an API, pattern, or behavior —
   inventing causes cascading failures. Explicit uncertainty is better than a confident guess.

## Connected tools (MCP)
> **Maintained by the `/integracoes` skill.** Lists the validated MCP servers and who consumes them, for
> routing of skills/rules. Empty until the first connection — run `/integracoes` to populate it.

| MCP (`mcp__<server>__*`) | Validated account/workspace | Skills that consume |
|---|---|---|
| _none yet_ | — | — |

Rule: an active connection **does not** authorize use. Confirm the account/workspace before reading and **reconfirm
before any write** (see `/integracoes`). Only use an MCP present in the session (`mcp__<server>__*`).

## Before coding — discover the tier
Question: *does this introduce a hard-to-reverse decision or a new domain boundary?*
- **Trivial** (≤3 files, no decision): just the PR (or `quick/` if you want to leave a trail).
- **Small** (isolated feature, <10 tasks): requires `spec.md` + `tasks.md`.
- **Architectural** (new bounded context, external integration, irreversible decision):
  requires `design.md` approved **before** implementing. If it doesn't exist, stop and flag it.

> **Dynamic scaling:** even when `tasks.md` is waived, **always list the atomic steps
> inline before coding**. If the list exceeds ~5 steps or has complex dependencies,
> **STOP and create a formal `tasks.md`** — the real tier was larger than it seemed.

## Ubiquitous language
- Use **exactly** the terms from `docs/glossary.md` and the feature's `domain.md`.
  Same name in code, in the spec, and in conversation with the team. Do not invent synonyms.
- New term → add it to the glossary in the same PR.

## Layered architecture (dependency rule)
`src/` follows tactical DDD. Dependencies point **only inward**:

```
interfaces → application → domain ← infrastructure
```

- `domain/` imports NOTHING from frameworks, I/O, or other layers.
- `application/` orchestrates use cases; depends only on `domain/`.
- `infrastructure/` implements the ports defined in the domain (repos, adapters).
- `interfaces/` is the boundary (API/CLI/UI).

## Context discipline and delegation
Each doc declares its loading policy in the frontmatter (Cursor-rules-style default):
- `alwaysApply: true` — **base context**, read in every session.
- `alwaysApply: false` — **on demand**; the `description` field says **when** to pull it.

**Base (`alwaysApply: true`):** this `CLAUDE.md` · `docs/STATE.md` · `docs/product/vision.md` ·
`docs/product/roadmap.md` · the `spec.md` of the active feature. Everything else is on demand — pull
by `description` when the task requires it (TESTING, glossary, context-map, ADRs, integrations…).

> **Two frontmatter dialects:** the **pipeline docs** use `name`+`description`+`alwaysApply`;
> the **skills** (`.claude/skills/*/SKILL.md`) and the **skill/subagent templates** use the
> target's dialect (`name`+`description`, no `alwaysApply`) — because they are copied to become skills/agents.

- **Load on demand:** don't read the entire repo — pull on-demand docs as the current task requires.
- **Delegate to keep the context lean:** research and parallel tasks (`[P]`) go to
  subagents (see `docs/engineering/_templates/subagent.template.md`), which receive only the task +
  spec + TESTING and return a structured report-back. Reserve the window for the work.

### Context budget (target)
- **Base (`alwaysApply: true`): ~15k tokens.** Keep it lean — if it grows, that's a signal to move
  detail into on-demand docs.
- **On demand: only what's needed.** Total loaded **< 40k**; reserve **160k+** for the work.
- Blew the budget? **Delegate to a subagent** (isolated context) instead of bloating the session.

## Spec divergence (SPEC_DEVIATION)
If during implementation you need to do something different from what `spec.md` says:
1. **Stop before proceeding.** Mark a `// SPEC_DEVIATION: <reason>` comment in the code/PR.
2. Decide with the spec owner: either **fix the code** (the spec wins) or **update the spec**
   consciously (and record an ADR if it's a hard-to-reverse decision).
3. Never leave code and spec diverging silently — that's how the source of truth rots.

## Definition of Done
- [ ] All acceptance criteria in `spec.md` pass — **verified by the executable gate**
      (the test command in `tasks.md`), not by visual inspection
- [ ] **Coverage ≥ project minimum**, with the **report attached to the PR** (evidence, not inspection)
- [ ] **Clean static analysis** (type-check + complexity + SAST) — no blocking findings
- [ ] No unresolved `SPEC_DEVIATION`
- [ ] Hard-to-reverse decisions became ADRs in `docs/architecture/adr/`
- [ ] Glossary and `docs/architecture/context-map.md` updated if they changed
- [ ] The spec reflects what was built (or the divergence is documented)
- [ ] `docs/STATE.md` updated (next step, decisions, blockers)

## Working memory — `docs/STATE.md`
- **STATE.md is volatile memory** (in progress, next step, blockers, todos); **ADR is durable
  memory** (immutable decision). Don't confuse them: a structural decision goes to the ADR, work
  state goes to the STATE.
- Update the STATE when pausing/ending a session and read it when resuming. See the `/handoff` skill.

## Where to write
- Durable architectural decision → new ADR (`docs/architecture/adr/`), never edit an old ADR (they are immutable; create one that supersedes it).
- Work state / next step → `docs/STATE.md`.
- Business term → `docs/glossary.md`.
- Boundary/context change → `docs/architecture/context-map.md`.

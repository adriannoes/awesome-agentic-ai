> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

---
name: tasks
description: Decomposition and gates for the feature. Pull in when implementing.
alwaysApply: false
---

# Tasks — <feature name>

> Implementation breakdown. Each task **maps to one or more `AC-N`** (traceability
> spec → task → commit) and has an **executable gate**: the command that proves it is done.
> Mark `[P]` on tasks that can run in parallel (no dependency between them).

## Plan
|| #  | Task                                  | Covers AC | Depends on | Gate (command)        | Status |
||----|---------------------------------------|----------|------------|-----------------------|--------|
|| 1  | <e.g. model aggregate in the domain>  | AC-1     | —          | `<domain test>`       | todo   |
|| 2  | <e.g. use case in the application>    | AC-1,2   | 1          | `<use case test>`     | todo   |
|| 3  | <e.g. adapter/repo in infrastructure> | AC-2     | 1          | `<integration test>`  | todo   |
|| 4  | <e.g. endpoint in the interface> `[P]`| AC-1,2   | 2,3        | `<acceptance test>`   | todo   |

> A task only becomes `done` when the **gate passes** (commands in `docs/engineering/TESTING.md`) — not by
> visual inspection. One commit per task.

## Test plan
- Unit: <domain invariants, value objects>
- Integration: <adapters, repos, contracts>
- Acceptance: <one test per AC in spec.md — this is the acceptance gate>

## Deviations (SPEC_DEVIATION)
> If the implementation must deviate from the spec, record it here before proceeding (see `CLAUDE.md`).
- [ ] <task # · reason · resolution: fix code OR update spec/ADR>

## Definition of Done checklist
- [ ] All ACs green **by the executable gate** (not by inspection)
- [ ] No pending `SPEC_DEVIATION`
- [ ] ADRs recorded for hard-to-reverse decisions
- [ ] Glossary / context-map updated if they changed
- [ ] Spec reflects what was built
- [ ] `docs/STATE.md` updated (next step / decisions)

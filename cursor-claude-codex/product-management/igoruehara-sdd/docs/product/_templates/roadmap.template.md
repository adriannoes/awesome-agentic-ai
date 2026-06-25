---
name: roadmap
description: Current priorities across Now/Next/Later horizons.
alwaysApply: true
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Roadmap — <project name>

> Incremental plan to implement **with the team**. Generated at kickoff.
> Greenfield: MVP delivery sequence. Brownfield: SDD adoption + debt/improvements.
> Principle: **low-risk quick wins first** to build team traction and trust.

## Roadmap goal
<What we want to achieve in the next N months and how we will measure progress.>

## Horizons
> Now / Next / Later avoids the false precision of distant dates. Dates only in "Now".

### 🟢 Now (this cycle)
|| # | Item                          | Value | Effort | Owner  | Depends on | Done when |
||---|-------------------------------|-------|--------|--------|------------|-----------|
|| 1 | <low-risk quick win>          | high  | low    | <name> | —          | <criterion>|

### 🟡 Next
|| # | Item                          | Value | Effort | Owner  | Depends on |
||---|-------------------------------|-------|--------|--------|------------|
|| 1 | <…>                           |       |        |        |            |

### ⚪ Later (hypotheses / to validate)
|| # | Item                          | Why wait |
||---|-------------------------------|----------|
|| 1 | <…>                           | <pending decision/data> |

## SDD adoption (brownfield only)
> Don't do a big-bang. Introduce the pipeline through the next feature and backfill the rest gradually.
- [ ] Next feature is born with `spec.md` + `CLAUDE.md`
- [ ] Backfill ADRs for the 3-5 most important structural decisions
- [ ] `context-map.md` reverse-engineered and validated with the team
- [ ] Glossary seeded with the terms that already cause confusion

## How to run with the team
- **Roadmap review cadence:** <e.g. every 2 weeks>
- **Who decides priority:** <role>
- **Definition of Ready/Done:** see `README.md`

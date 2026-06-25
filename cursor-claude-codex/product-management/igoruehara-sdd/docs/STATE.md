---
name: STATE
description: Volatile working memory — where we stopped, next step, blockers.
alwaysApply: true
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# STATE — The project's live memory

> Working memory **between sessions** (humans and agents). It is **volatile**: updated all the
> time. Unlike an **ADR** (a durable and immutable decision). Structural decision → ADR; work
> state → here. Update when **pausing/closing**; read when **resuming**. Use the `/handoff` skill.

**Last updated:** <YYYY-MM-DD> by <name>

## In progress / next step
> What is open now and the **next concrete action** (not "continue the feature" — state the step).
- Active feature: `specs/NNNN-<name>/` — <current phase>
- Next step: <specific action>

## Recent decisions
> Chronological summary. If it is hard to reverse, turn it into an ADR and link it here.
- <YYYY-MM-DD: decision — [ADR-NNNN](adr/NNNN-*.md) if applicable>

## Blockers
- [ ] <what is blocking · who/how unblocks it · since when>

## Deferred ideas / technical backlog
- <idea → when to reconsider (which trigger)>

## Loose todos
- [ ] <task that does not fit a spec yet>

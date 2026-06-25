---
name: features
description: Inventory of features classified and sequenced into waves (MVP). Pull in when prioritizing the roadmap or opening features.
alwaysApply: false
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Product features

> Brainstorm + classification + **sequencing** (Lean Inception). Each feature originates from
> a journey (`journeys.md`). **Wave 1 = MVP** (`mvp-canvas.md`) and feeds `roadmap.md`.

## Inventory and classification
> Classify by effort, business value, confidence (how sure we are) and UX impact.

|| #  | Feature               | Journey      | Effort | Value | Confidence | UX    | Wave |
||----|-----------------------|--------------|--------|-------|------------|-------|------|
|| 1  | <…>                   | <journey>    | low    | high  | high       | medium| 1    |
|| 2  | <…>                   | <journey>    | high   | medium| low        | high  | 2    |

## Sequencer (waves)
> Order by **value × effort**; start with the shortest path that delivers and **validates** a hypothesis.

- **Wave 1 (MVP):** <features> — *validates:* <hypothesis>
- **Wave 2:** <features>
- **Wave 3 / later:** <features>

> **Wave 1** items become `roadmap.md` ("Now" horizon) and specs via `/nova-feature`.

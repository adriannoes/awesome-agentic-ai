---
name: roadmap
description: Use to build or update docs/product/roadmap.md across Now/Next/Later horizons, with value, effort, owner, and dependencies, prioritizing low-risk quick wins. In brownfield it includes incremental SDD adoption. Designed to review with the team every cycle. It is called by /kickoff and also runs standalone periodically. Trigger with /roadmap.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Roadmap (build / review with the team)

Builds or updates the roadmap. **Idempotent**: re-running reviews what exists; it does not start over. Principle: **low-risk quick wins first** to build team traction and trust.

## Gather the inputs
- **Greenfield:** `vision.md`, `mvp-canvas.md` (features sequenced by value × effort).
- **Brownfield:** `assessment.md` (debts/risks and gaps across the 5 axes) → improvement items.
- **Always:** `docs/STATE.md` (loose to-dos, deferred ideas) and pending items from `integrations.md`.
- **Capacity:** Recent throughput in `docs/engineering/metrics.md` (via `/metricas`) — size the waves by **actual throughput**, not optimism.

## Build it
- **Now / Next / Later** horizons (dates only in "Now" — avoids false precision).
- Each item: value, effort, **owner**, dependencies, "done when".
- Tied priority or tangled dependencies between items? Run **`/clarificar`** to interrogate the ordering (one question at a time) until the sequence holds — instead of guessing "Now".
- **Brownfield:** include the **incremental SDD adoption** section (no big-bang: the next feature is born with a spec; backfill ADRs and context-map afterwards).
- Define the **review cadence** and who decides priority.

## Output
- `docs/product/roadmap.md` (use `docs/product/_templates/roadmap.template.md`).
- Offer a commit if it is a git repository.

## Next step
Point the first "Now" feature → `/nova-feature`.

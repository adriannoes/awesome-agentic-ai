> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

---
name: quick-task
description: Lightweight track (trivial tier). Use for a small task with a trail.
alwaysApply: false
---

# Quick Task — NNN-<slug>

> **Lightweight track** (trivial tier: ≤3 files, no decision). Leaves a trail without the full pipeline.
> ⚠️ If, when listing the steps, it exceeds ~5, or a hard-to-reverse dependency/decision appears,
> **move up a tier**: create `specs/NNNN-<name>/` with `spec.md` + `tasks.md`.

- **What:** <one sentence>
- **Why / origin:** <bug, issue, request>
- **Steps:**
  - [ ] <atomic step>
  - [ ] <atomic step>
- **Gate:** `<test command that proves it is done>` (see `docs/engineering/TESTING.md`)

# Principles index

Twenty-three short skills — one engineering principle each. `poteto-mode` indexes them inline and reads that index at task start. Invoke a principle by name mid-task to redirect the agent.

These are indexes only. Read the full rule in each linked `SKILL.md`.

## Core

| Principle | Rule (summary) | Skill |
|---|---|---|
| `laziness-protocol` | Apply when refactoring, evaluating diff size, or tempted to add abstractions, layers, or signal thre… | [`../../principle-laziness-protocol/SKILL.md`](../principle-laziness-protocol/SKILL.md) |
| `foundational-thinking` | Apply before writing logic: choosing core types and data structures, sequencing scaffold-vs-feature … | [`../../principle-foundational-thinking/SKILL.md`](../principle-foundational-thinking/SKILL.md) |
| `redesign-from-first-principles` | Apply when integrating a new requirement into an existing design. Redesign as if the requirement had… | [`../../principle-redesign-from-first-principles/SKILL.md`](../principle-redesign-from-first-principles/SKILL.md) |
| `attack-the-premise` | Apply when two or more fixes that share one premise have failed the same gate. Take a census of whic… | [`../../principle-attack-the-premise/SKILL.md`](../principle-attack-the-premise/SKILL.md) |
| `subtract-before-you-add` | Apply when sequencing an addition, refactor, or rewrite. Remove dead code, redundant validators, and… | [`../../principle-subtract-before-you-add/SKILL.md`](../principle-subtract-before-you-add/SKILL.md) |
| `minimize-reader-load` | Apply when reviewing or shaping code that's hard to trace. Count layers between question and answer,… | [`../../principle-minimize-reader-load/SKILL.md`](../principle-minimize-reader-load/SKILL.md) |
| `outcome-oriented-execution` | Apply during planned rewrites and migrations with explicit phase boundaries. Converge on the target … | [`../../principle-outcome-oriented-execution/SKILL.md`](../principle-outcome-oriented-execution/SKILL.md) |
| `experience-first` | Apply when product, UX, or feature-scope tradeoffs come up. Choose user delight over implementation … | [`../../principle-experience-first/SKILL.md`](../principle-experience-first/SKILL.md) |
| `exhaust-the-design-space` | Apply when facing a novel UI interaction or architectural decision with no precedent in the codebase… | [`../../principle-exhaust-the-design-space/SKILL.md`](../principle-exhaust-the-design-space/SKILL.md) |
| `build-the-lever` | Apply to any non-trivial work, not just bulk work: edits, migrations, analyses, checks. Build the to… | [`../../principle-build-the-lever/SKILL.md`](../principle-build-the-lever/SKILL.md) |

## Architecture

| Principle | Rule (summary) | Skill |
|---|---|---|
| `model-the-domain` | Apply when writing stateful logic, or when code branches a lot or repeats a shape assumption across … | [`../../principle-model-the-domain/SKILL.md`](../principle-model-the-domain/SKILL.md) |
| `boundary-discipline` | Apply when wiring validation, error handling, or framework adapters. Concentrate guards at system bo… | [`../../principle-boundary-discipline/SKILL.md`](../principle-boundary-discipline/SKILL.md) |
| `type-system-discipline` | Apply when designing types, reviewing a function signature, or writing code in any statically-typed … | [`../../principle-type-system-discipline/SKILL.md`](../principle-type-system-discipline/SKILL.md) |
| `make-operations-idempotent` | Apply when designing commands, lifecycle steps, or processing loops that run amid crashes, restarts,… | [`../../principle-make-operations-idempotent/SKILL.md`](../principle-make-operations-idempotent/SKILL.md) |
| `migrate-callers-then-delete-legacy-apis` | Apply when introducing a new internal API while old callers still exist. Migrate callers and delete … | [`../../principle-migrate-callers-then-delete-legacy-apis/SKILL.md`](../principle-migrate-callers-then-delete-legacy-apis/SKILL.md) |
| `separate-before-serializing-shared-state` | Apply when concurrent actors might write to the same file, branch, key, or state object. Eliminate t… | [`../../principle-separate-before-serializing-shared-state/SKILL.md`](../principle-separate-before-serializing-shared-state/SKILL.md) |

## Verification

| Principle | Rule (summary) | Skill |
|---|---|---|
| `prove-it-works` | Apply after completing a task, before declaring done. Verify against the real artifact (run the feat… | [`../../principle-prove-it-works/SKILL.md`](../principle-prove-it-works/SKILL.md) |
| `fix-root-causes` | Apply when debugging. Trace each symptom to its root cause and fix it there; reproduce first, ask wh… | [`../../principle-fix-root-causes/SKILL.md`](../principle-fix-root-causes/SKILL.md) |
| `sequence-verifiable-units` | Apply to multi-step work (sweeps, migrations, runs of similar edits) and to how you stack commits an… | [`../../principle-sequence-verifiable-units/SKILL.md`](../principle-sequence-verifiable-units/SKILL.md) |
| `test-behavior-not-implementation` | Apply when you write, change, or keep a test. Call the code the way its users do and assert the resu… | [`../../principle-test-behavior-not-implementation/SKILL.md`](../principle-test-behavior-not-implementation/SKILL.md) |

## Delegation

| Principle | Rule (summary) | Skill |
|---|---|---|
| `guard-the-context-window` | Apply when context is filling up: large outputs, long files, repeated reads, fan-out planning. Route… | [`../../principle-guard-the-context-window/SKILL.md`](../principle-guard-the-context-window/SKILL.md) |
| `never-block-on-the-human` | Apply when tempted to ask 'should I do X?' on reversible work. Proceed, present the result, let the … | [`../../principle-never-block-on-the-human/SKILL.md`](../principle-never-block-on-the-human/SKILL.md) |

## Meta

| Principle | Rule (summary) | Skill |
|---|---|---|
| `encode-lessons-in-structure` | Apply when you catch yourself writing the same instruction a second time, or notice a recurring corr… | [`../../principle-encode-lessons-in-structure/SKILL.md`](../principle-encode-lessons-in-structure/SKILL.md) |

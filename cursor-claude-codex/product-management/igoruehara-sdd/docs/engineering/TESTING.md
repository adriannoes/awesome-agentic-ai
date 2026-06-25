---
name: TESTING
description: Gate commands and testing conventions. Pull when coding, validating, or setting up CI.
alwaysApply: false
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# TESTING — How to verify the project

> The **single source of gate commands** and testing conventions. This is what the **DoD**, the **CI**, and
> the **subagents** consume to prove a task/feature is ready — without visual inspection.
> Filled in during kickoff (Quality axis) and kept alive.

## How to run
| Level         | Command                   | When |
|---------------|---------------------------|--------|
| Unit          | `<command>`               | always, fast |
| Integration   | `<command>`               | adapters / repos / contracts |
| Acceptance (UAT)  | `<command>`               | one test per `AC-N` in the spec |
| Lint / format    | `<command>`               | pre-commit / CI |
| Static analysis | `<command>` (type-check, complexity, SAST) | CI — no blocking findings |
| Coverage        | `<command>` (min. `<X>%`, generates report) | CI — report attached to the PR |

## Conventions
- Pyramid: many unit tests, fewer integration tests, few acceptance tests.
- **Each `AC-N` in the spec has an acceptance test that is its gate.** Name the test with the ID
  (`test_AC_1_*` / `AC-1: ...`) for spec → test traceability.
- The domain does not boot infrastructure; integration uses `<testcontainer / edge mock>`.
- **Static analysis** (pick per stack): type-check (`<mypy/tsc/…>`), complexity/smells, and
  **SAST/security** (`<sonar/codeql/semgrep/…>`). Define what is **blocking** (blocks the merge)
  vs **warning** (enters as a trend in `metrics.md`, does not block).

## Gates (executable Definition of Done)
- A **task** only becomes `done` when its **Gate (command)** in `tasks.md` passes.
- A **feature** only merges when all ACs are green + lint + **clean static analysis**
  (no blocking findings) + minimum coverage.
- The **CI runs exactly these commands** — failure blocks the merge.

## What the CI runs
<Pipeline in order: lint → static analysis → unit → integration → acceptance → coverage (report).
Plus the SDD rule: fail a PR that changes code without an approved spec.
**Coverage and static analysis are published as PR artifacts** — traceable evidence of the
quality outcome, which `/metricas` consumes for the trend.>

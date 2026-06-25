---
name: setup-ci
description: Use to create or adjust the CI/CD pipeline that materializes the SDD gates — lint, static analysis (type-check/complexity/SAST), tests (unit/integration/acceptance) and coverage from docs/engineering/TESTING.md, with coverage and static analysis published as artifacts, plus the "PR fails without an approved spec" rule. Detects GitHub Actions / GitLab CI / other. Generates the file only with approval. Trigger with /setup-ci.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: CI/CD setup (SDD gates in the pipeline)

Materializes the SDD gates in the automated pipeline — this is where "a document the team tries to follow" becomes
"rules the system enforces". **Idempotent**: re-running adjusts the existing pipeline.

## Discover the target
- Detect the provider (GitHub Actions / GitLab CI / Bitbucket / other) from the repo and from `integrations.md`.
- Read `docs/engineering/TESTING.md` (gate commands) and the quality gate from `CLAUDE.md` (minimum coverage).

## Propose the pipeline (confirm before generating)
Stages in order; failing **blocks the merge**:
1. **Lint/format** → 2. **Static analysis** (type-check + complexity + SAST) → 3. **Unit** →
   4. **Integration** → 5. **Acceptance** (one per `AC-N`) → 6. **Coverage** (min. from `CLAUDE.md`).
7. **SDD rule:** a PR that changes code **without an approved spec** in `specs/` → fails (a job that checks
   the presence/status of the spec corresponding to the change).

**Traceable evidence:** publish **coverage and static analysis as artifacts** of the run (and, if the
provider allows, as a check/comment on the PR). The quality result gets attached to the change and
feeds the trend for `/metricas`.

## Generate
- The pipeline file (`.github/workflows/*.yml` / `.gitlab-ci.yml`) using the commands from
  `docs/engineering/TESTING.md` — do not invent commands; reuse the ones there.
- ⚠️ **No secrets in the file** — use the provider's secrets. Confirm before writing.
- Record the pipeline choice as an **ADR** if it is structural; reference it in `docs/engineering/agentic-layer.md`.

## Next step
Pair with `/revisar-pr` (human/agent gate). Together they cover **review + automation**: CI enforces
tests/coverage/spec; `/revisar-pr` enforces process conformance on the PR/MR.

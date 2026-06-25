---
name: mapear
description: Use to map an existing (brownfield) codebase and produce docs/architecture/assessment.md — stack, architecture, implicit bounded contexts, maturity across the 5 axes, debts/risks, and historical decisions to become retroactive ADRs. Re-running updates the assessment. It is called by /kickoff in brownfield mode, and also runs standalone when the codebase changes or to analyze a repo. Trigger with /mapear.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Map the current state (as-is)

Produces a portrait of a project **already in progress**. First **read the code**, then ask only what the code does not reveal. It is **idempotent**: re-running updates `docs/architecture/assessment.md`.

## Process
1. **Automated mapping:** identify stack, folder structure, architecture style, couplings, tests/CI, logs/metrics/tracing. Infer the **implicit bounded contexts** from the code organization. In large repos, **delegate the scan to an exploration subagent** (see `docs/engineering/_templates/subagent.template.md`) to keep the context lean.
2. **External inputs (if any):** if `/integracoes` connected GitHub/cloud/Confluence (validated account), use them to enrich the as-is. Cite the source.
3. **Gap interview** (`AskUserQuestion`): current business intent and North Star; biggest pains/risks today; domain terms that confuse the team; what MUST NOT break; team context and size.
4. **Gap analysis:** compare the as-is with the SDD standard across the 5 axes (tech stack, architecture, infrastructure, quality, observability). Mark risk (low/medium/high).
5. **Historical decisions:** list structural choices already made without a record → they become **retroactive ADRs** (status: accepted, recording the historical rationale).

## Outputs
- `docs/architecture/assessment.md` (use `docs/architecture/_templates/assessment.template.md`).
- List of retroactive ADRs to create in `docs/architecture/adr/`.

## Next step
- Inside `/kickoff`: feed the assessment + gaps back into the 5 axes and the roadmap.
- Standalone: suggest `/roadmap` (to prioritize the mapped debts) or `/camada-agentica`.

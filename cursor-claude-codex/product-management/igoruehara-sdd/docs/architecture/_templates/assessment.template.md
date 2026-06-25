---
name: assessment
description: As-is snapshot (brownfield). Pull in when mapping or evaluating the codebase.
alwaysApply: false
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Assessment (as-is) — <project name>

> Map of the current state of an **already running** project (brownfield), generated at kickoff.
> Goal: understand what exists before proposing changes. Photograph, don't judge yet.

## Overview
<What the system does today, is it in production, how many users/services, age of the code.>

## Detected stack
|| Layer             | Current technology           | Note |
||-------------------|------------------------------|------|
|| Language/runtime  | <…>                          |      |
|| Frameworks        | <…>                          |      |
|| Persistence       | <…>                          |      |
|| Infra/deploy      | <…>                          |      |

## Current architecture
<Actual style (monolith, services, big ball of mud?), layers, dangerous couplings,
entry points. Where is the domain mixed with infra?>

## Folder structure
<How the code is organized (by layer? by feature? by type?), where the entry points are,
and what stands out from the expected.>

## Code conventions
<Actual patterns observed: naming, style, error handling, testing patterns.
What is an implicit (unwritten) convention and should go into `CLAUDE.md`?>

## Implicit bounded contexts
> Inferred from code/structure — rarely explicit in brownfield.

|| Context (inferred) | Where it lives in code | Core/Support/Generic | Clear boundary? |
||---------------------|------------------------|----------------------|-----------------|
|| <…>                 | <folder/module>        | <…>                  | no / partial    |

## Tests & CI
<Existing test types, approximate coverage, what CI runs, gate commands.
Feeds `docs/engineering/TESTING.md`.>

## Integrations
|| Integration      | Type (API/lib/queue) | How it is used         | Risk/coupling |
||------------------|----------------------|------------------------|---------------|
|| <e.g. gateway X> | REST                 | <…>                    | <…>           |

## Maturity across the 5 axes
|| Axis            | Current state                | Gap vs SDD standard      | Risk |
||-----------------|------------------------------|--------------------------|------|
|| Tech stack      | <…>                          | <…>                      | low/medium/high |
|| Architecture    | <…>                          | <…>                      |      |
|| Infra           | <…>                          | <…>                      |      |
|| Quality         | <tests? coverage? static analysis? CI?> | <…>          |      |
|| Observability   | <logs/metrics/tracing/SLO?>  | <…>                      |      |

## Main debts and risks
1. <biggest risk — what could cause an incident or stall evolution>

## Historical decisions to capture as ADRs
> Structural choices already made, but with no record. Turn into a retroactive ADR (status: accepted).
- [ ] <e.g. "using X as the database" — why it was chosen, whether it still holds>

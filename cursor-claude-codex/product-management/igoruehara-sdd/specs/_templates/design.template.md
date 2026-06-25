> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

---
name: design
description: Technical Design Doc — 5 axes + tables for dependencies, solution, risks and roadmap, with links to the team artifact repo. Pull in when designing an architectural feature.
alwaysApply: false
---

# Technical Design Doc — <feature name>

> **Tier:** architectural · **Status:** draft | in review | approved
> **Author:** <name> · **Reviewers:** <names> · **Date:** <YYYY-MM-DD>
> Answers: **how** at the system level. Required for the architectural tier.

## Links and artifacts
> Connection to the team artifact repository. Publish via `/integracoes` (repo write → tool).

|| Artifact                | Where                 | Link                        |
||--------------------------|-----------------------|-----------------------------|
|| Design page              | Confluence / Notion   | <url>                       |
|| Issue / epic             | Jira / Linear         | <PROJ-123>                  |
|| Artifact repo            | <Drive / wiki / repo> | <url>                       |
|| Spec · Product · Domain  | repository            | `./spec.md` · `./product.md` · `./domain.md` |

## Feature context
<Current state, constraints, why now. The problem this feature solves (link `product.md`).>

## Goals / Non-goals
**Goals**
- <measurable technical objective>

**Non-goals**
- <out of scope for this design>

## Glossary (feature-specific)
> Terms specific to this feature. New term → **promote to `docs/glossary.md`** (ubiquitous language).

|| Term      | Description                                  |
||-----------|--------------------------------------------|
|| <Term>    | <precise meaning in the feature context> |

## Proposed design
<The solution. Diagrams (C4/sequence — generate with `/diagramar`), components, data flow,
API contracts, data model. Show the boundaries with existing bounded contexts.>

## Coverage of the 5 axes
> Every technical decision passes through these 5 axes. Fill in what applies; mark "no impact" for the rest.
> A structural decision in any axis → becomes an ADR.

### 1. Tech stack
<Languages, frameworks, libs or new services. Versions. Diverges from the standard stack? Justify.>
### 2. Base architecture
<How it fits into the layers and bounded contexts. New boundary? New aggregates/ports? Integration pattern.>
### 3. Infra
<New resources (queue, cache, database), environments, IaC, cost. Deploy, feature flag, **safe rollback**.>
### 4. Quality
<Test strategy and what covers the ACs. Gates: coverage, contract tests, performance, security.>
### 5. Observability
<Metrics, logs, tracing, alerts. SLO/SLI. How does telemetry prove it works?>

## Dependency map
> What this feature consumes/integrates with. Include APIs, services, libs and data.

|| Dependency            | Type         | Description                   | Main methods / endpoints               |
||--------------------|-------------|----------------------------|---------------------------------------|
|| <e.g. Payments API> | REST / gRPC | <charges and refunds card>   | `POST /charges` · `GET /charges/{id}` |
|| <e.g. lib X>        | library     | <for what>                   | <key functions>                       |

## Solution
> Solution blocks and their status. **Undefined** = still open (becomes a spike or Open question).
> The fine, executable breakdown goes into `tasks.md`.

|| #  | Task / block          | Description                     | Status               |
||----|-----------------------|---------------------------------|----------------------|
|| 1  | <…>                   | <what it does>                  | defined              |
|| 2  | <…>                   | <what it does>                  | undefined            |

## Alternatives considered
> The most valuable section of the doc — shows the trade-off was thought through.

|| Alternative   | Pros | Cons | Why (not) chosen |
||---------------|------|---------|-------------------------|
|| A (chosen)    |      |         |                         |
|| B             |      |         |                         |

## Trade-offs and consequences
<What we gain and what we accept losing. Consciously assumed technical debt.>

## Risks
|| Risk    | Description         | Prob. × Impact     | Actions / mitigations |
||---------|--------------------|--------------------|--------------------|
|| <risk>  | <why it happens>   | medium × high      | <what to do / how to mitigate> |

## Feature roadmap
> Phases/waves of delivery for this feature. Wave 1 feeds the global `docs/product/roadmap.md`.

|| Phase / wave | Delivery              | When           | Depends on |
||-------------|------------------------|----------------|------------|
|| 1 (MVP)     | <slice that validates> | <cycle/sprint> | —          |
|| 2           | <increment>            | <later>        | 1          |

## Open questions
- [ ] <pending decision — who answers, by when>

> Hard-to-reverse decisions made here → record as an ADR in `docs/architecture/adr/`.

---
name: architecture-overview
description: System architecture across the 5 axes + security and operations. Pull in when working on architecture, infra, quality, observability or security.
alwaysApply: false
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# System architecture

> **Consolidated** view of the system across the 5 axes (+ security and operations). Each section is a
> **short summary + link** to the detail (ADRs, context-map, diagrams, TESTING). Generated/updated
> at `/kickoff`. **Keep it lean** — the detail lives in the linked docs; this is the map.

## 1. Tech stack
<Languages, frameworks, runtime, package management, target versions.>
- Decision: [ADR-XXXX](adr/XXXX-tech-stack.md)

## 2. Base architecture
<Style (modular monolith / services / serverless), layers (DDD), main bounded contexts.>
- Context map: [context-map.md](context-map.md) · Diagrams: [diagrams.md](diagrams.md)
- Decision: [ADR-XXXX](adr/XXXX-architecture-style.md)

## 3. Infra
<Cloud/provider, environments (dev/stg/prod), deploy model, IaC, cost.>
- Decision: [ADR-XXXX](adr/XXXX-infra-and-deploy.md) · Operations: see section 7.

## 4. Quality
<Testing strategy (pyramid), minimum coverage, lint/format, static analysis (type-check/complexity/SAST), review policy.>
- Commands and gates: [TESTING.md](../engineering/TESTING.md)

## 5. Observability
<Structured logs, metrics, tracing, alerts and the system's SLO/SLI.>
- Decision: [ADR-XXXX](adr/XXXX-observability.md)

## 6. Security
<Authentication and authorization, controls and policies, data protection (PII/encryption),
compliance (LGPD/GDPR/…), secrets management. Hard-to-reverse decisions → ADR.>

## 7. Operations
<Deploy and rollback, monitoring and alerts (who is paged), backup and recovery,
incident runbook. Links to the Infra (3) and Observability (5) axes.>

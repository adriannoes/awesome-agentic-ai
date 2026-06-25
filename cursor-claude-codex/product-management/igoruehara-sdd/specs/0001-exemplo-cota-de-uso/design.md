> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

---
name: design
description: Technical Design Doc — 5 axes + tables for dependencies, solution, risks and roadmap, with links to the team artifact repo. Pull in when designing an architectural feature.
alwaysApply: false
---

# Technical Design Doc — Usage quota per organization

> **Tier:** architectural · **Status:** approved · **Author:** Igor · **Date:** 2026-06-18

## Links and artifacts
|| Artifact                | Where               | Link                                         |
||--------------------------|---------------------|----------------------------------------------|
|| Design page              | Confluence          | acme.atlassian.net/wiki/…/usage-quota        |
|| Issue / epic             | Jira                | PLAT-481                                      |
|| Artifact repo            | team wiki           | wiki/platform/rate-limiting                   |
|| Spec · Product · Domain  | repository          | `./spec.md` · `./product.md` · `./domain.md`  |

## Feature context
The inference API has no per-org isolation — spikes from one account degrade everyone (3 P2
incidents in the quarter). This feature limits usage per organization per time window. See `./product.md`.

## Goals / Non-goals
**Goals**
- Per-org usage counting with a configurable window and per-org limit.
- Accept/reject decision in < 5ms (must not become a bottleneck).

**Non-goals**
- Durable persistence of the counter (loss on restart is tolerable).
- Billing for overage.

## Glossary (feature-specific)
|| Term      | Description                                              |
||------------|--------------------------------------------------------|
|| Quota      | Maximum request limit for an org per window            |
|| Window     | Fixed interval in which usage is counted and reset     |
|| Usage      | Count of the org's requests in the current window      |
|| Exceeded   | State in which `usage ≥ quota`                          |

## Proposed design
New bounded context **Usage Metering** (supporting). A value object `Quota` and the aggregate
`OrganizationUsage` maintain the per-window count. A middleware in `interfaces/` calls the
`CheckQuota` use case before forwarding to inference. Counter in **Redis** (INCR + EXPIRE per
window) behind a `UsageCounter` port defined in the domain — the domain does not know Redis.

```
[API edge] → interfaces/middleware → application/CheckQuota
                                         → domain/OrganizationUsage (rule)
                                         → infrastructure/RedisUsageCounter (port)
```

## Coverage of the 5 axes
### 1. Tech stack
Introduces **Redis** as the counter datastore. No other new libs.
### 2. Base architecture
New bounded context **Usage Metering** (supporting). `UsageCounter` port in the domain, adapter in
the infrastructure — follows the layering rule. Customer/Supplier relationship with the Inference context.
### 3. Infra
Managed Redis (INCR/EXPIRE). `usage_quota_enabled` feature flag per org. **Rollout:** shadow
mode (counts, does not block) → 5% → 100%. **Rollback:** turn off the flag (immediate effect).
### 4. Quality
Unit (invariants of `Quota`/`UsageCount`); integration (`RedisUsageCounter` with testcontainer);
acceptance (one test per `AC-N`, including fail-open). Latency gate < 5ms.
### 5. Observability
Metrics `quota_checks_total`, `quota_exceeded_total{org}`, check latency histogram.
Alert when fail-open triggers. SLO: check p95 < 5ms.

## Dependency map
|| Dependency          | Type                          | Description                           | Main methods / endpoints        |
||---------------------|-------------------------------|---------------------------------------|---------------------------------|
|| Redis               | datastore / cache             | per-org usage counter, TTL per window | `INCR` · `EXPIRE` · `GET`       |
|| Inference API       | internal service (downstream) | consumes the `CheckQuota` verdict      | receives `allow: bool` + headers|

## Solution
|| #  | Task / block                            | Description                           | Status      |
||----|-----------------------------------------|---------------------------------------|-------------|
|| 1  | Value objects `Quota`/`Window`/`UsageCount` | domain invariants                 | defined     |
|| 2  | Aggregate `OrganizationUsage` + events  | `QuotaExceeded` / `WindowReset`       | defined     |
|| 3  | Port `UsageCounter` + `RedisUsageCounter`| INCR/EXPIRE per window              | defined     |
|| 4  | Edge middleware + `429`/`Retry-After`   | gate before inference                 | defined     |
|| 5  | Fail-open + alert                       | behavior when Redis goes down         | defined     |
|| 6  | Redis cost at high scale                | sizing keys/sharding                  | undefined   |

## Alternatives considered
|| Alternative              | Pros                        | Cons                       | Why (not) chosen |
||---------------------------|-----------------------------|----------------------------|-------------------------|
|| Redis (chosen)            | fast, native TTL, simple    | external dependency        | ✅ meets 5ms SLA |
|| Local in-memory counter   | zero dependency             | does not work with N replicas | ❌ inconsistent |
|| Postgres                  | durable                     | high latency on the hot path | ❌ becomes a bottleneck |

## Trade-offs and consequences
We accept losing the count on Redis restart (the window resets) in exchange for simplicity and
latency. For protective quotas, this is acceptable.

## Risks
|| Risk                   | Description                    | Prob. × Impact | Actions / mitigations                   |
||------------------------|---------------------------------|-----------------|----------------------------------------|
|| Redis unavailable      | counter down                   | low × high      | fail-open (allows request) + alert      |
|| Misconfigured window   | quota 0/negative               | medium × medium | validation in the domain + safe default |
|| Redis cost under peak  | many orgs × many keys          | low × medium    | short TTL; evaluate sharding (Wave 2)   |

## Feature roadmap
|| Phase / wave | Delivery                                  | When         | Depends on |
||-------------|------------------------------------------|--------------|------------|
|| 1 (MVP)     | shadow mode (counts, does not block) + `429`| current sprint | —        |
|| 2           | rollout 5% → 100% + fail-open alert       | next         | 1          |
|| 3           | evaluate sliding window / sharding        | later        | 2          |

## Open questions
- [ ] Fixed or sliding window in the MVP? → **decided: fixed** (record ADR-0002).

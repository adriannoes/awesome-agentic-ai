> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

---
name: domain
description: DDD model of the feature. Pull in when modeling aggregates and language.
alwaysApply: false
---

# Domain Model (DDD) — Usage quota per organization

## Bounded Context
**Usage Metering** — **supporting** subdomain (necessary to protect the platform,
but not the product's competitive differentiator).

## Ubiquitous language
|| Term            | Definition                                                | Do NOT confuse with |
||------------------|----------------------------------------------------------|-------------------|
|| Quota            | Maximum request limit for an org per window              | Rate limit (edge/IP) |
|| Window           | Fixed time interval in which usage is counted and reset  | Session           |
|| Usage            | Count of an org's requests in the current window         | Billing           |
|| Exceeded         | State in which `usage ≥ quota`                           | System error      |

## Aggregates, entities and value objects
- **Aggregate `OrganizationUsage`** (root: `OrganizationUsage`)
  - Identity: `OrganizationId`
  - Value objects: `Quota`, `Window`, `UsageCount`
  - **Invariants:**
    - `UsageCount ≥ 0`
    - `Quota > 0`
    - request is accepted ⇔ `UsageCount < Quota` at the moment of the check
  - Consistency boundary: an org's count changes atomically (INCR).

## Domain events
|| Event                 | Fired when           | Who reacts                         |
||------------------------|-------------------------|-------------------------------------|
|| `QuotaExceeded`       | `usage` reaches `quota` | observability (metric), optional notification |
|| `WindowReset`         | window expires          | resets `UsageCount` for the org     |

## Relationships with other contexts
- **Inference** (downstream): consumes the decision via `CheckQuota`. Customer/Supplier pattern —
  Inference is the client, Usage Metering is the supplier of the verdict.
- No model coupling: the edge only receives a boolean + quota metadata.

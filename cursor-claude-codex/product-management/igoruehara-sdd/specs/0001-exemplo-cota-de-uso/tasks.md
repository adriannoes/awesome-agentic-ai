> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

---
name: tasks
description: Decomposition and gates for the feature. Pull in when implementing.
alwaysApply: false
---

# Tasks — Usage quota per organization

## Plan
|| #  | Task                                                        | Covers AC | Depends on | Status |
||----|-------------------------------------------------------------|----------|------------|--------|
|| 1  | Value objects `Quota`, `Window`, `UsageCount` + invariants  | AC-1,2   | —          | todo   |
|| 2  | Aggregate `OrganizationUsage` + events `QuotaExceeded`/`WindowReset` | AC-2,3 | 1 | todo |
|| 3  | Port `UsageCounter` (domain) + use case `CheckQuota`        | AC-1,2,3 | 2          | todo   |
|| 4  | `RedisUsageCounter` implementing the port (INCR/EXPIRE)     | AC-3,4   | 3          | todo   |
|| 5  | Edge middleware + 429 / `Retry-After` headers               | AC-1,2   | 3          | todo   |
|| 6  | Fail-open + alert when the counter is unavailable           | AC-4     | 4,5        | todo   |
|| 7  | Feature flag + shadow mode                                  | —        | 5          | todo   |
|| 8  | ADR-0002 (fixed vs sliding window)                          | —        | —          | todo   |

## Test plan
- Unit: invariants of `Quota`/`UsageCount`; `Exceeded` state transition.
- Integration: `RedisUsageCounter` with real Redis (testcontainer); reset via TTL.
- Acceptance: one test per AC (AC-1 through AC-4), including fail-open by simulating Redis down.

## Definition of Done checklist
- [ ] AC-1 through AC-4 green
- [ ] ADR-0002 recorded
- [ ] Glossary updated (Quota, Window, Usage, Exceeded)
- [ ] Context-map updated (new Usage Metering context)
- [ ] Spec reflects what was built

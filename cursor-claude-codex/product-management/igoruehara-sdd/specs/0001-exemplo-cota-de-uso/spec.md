> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

---
name: spec
description: Feature contract (acceptance criteria). The source of truth while the feature is active.
alwaysApply: true
---

# Spec — Usage quota per organization

> **Source of truth.** Status: approved.

## Summary
Each organization has a request quota per time window. When exceeded, the API
responds 429 with quota headers until the window resets.

## Acceptance criteria

### AC-1: request within quota is accepted
- **Given** an org with a quota of 1000/min and current usage of 999
- **When** it makes 1 request
- **Then** the request is forwarded to inference
- **And** the response includes `X-Quota-Remaining: 0`

### AC-2: request above quota is rejected
- **Given** an org with a quota of 1000/min and current usage of 1000
- **When** it makes 1 request
- **Then** the API responds `429 Too Many Requests`
- **And** includes `Retry-After` with the seconds until the window resets
- **And** emits the `QuotaExceeded` event

### AC-3: window resets the count
- **Given** an org that exceeded the quota in the previous window
- **When** a new window starts
- **Then** usage returns to 0 and new requests are accepted

### AC-4: counter unavailability fails open
- **Given** that the usage counter (Redis) is unavailable
- **When** an org makes a request
- **Then** the request is accepted (fail-open)
- **And** a degradation alert is emitted

## Decision matrix
> Since the check combines flag + mode + counter state, the truth table resolves the
> combinatorics without prose. Each row is a test case; AC-3 (window reset) is temporal
> and stays in the criteria above.

|| `usage_quota_enabled` | Mode  | Usage vs quota | Counter (Redis) | Result                                   | AC    |
||---|---|---|---|---|---|
|| `false`               | —     | —              | —               | Accepted; check skipped                  | edge  |
|| `true`                | shadow| exceeded       | ok              | Accepted + emits metric; **does not** block | edge  |
|| `true`                | normal| within         | ok              | Accepted + `X-Quota-Remaining`           | AC-1  |
|| `true`                | normal| exceeded       | ok              | `429` + `Retry-After` + `QuotaExceeded` event | AC-2  |
|| `true`                | normal| —              | unavailable     | Accepted (fail-open) + degradation alert | AC-4  |

## Edge cases and errors
- Quota configured as 0 or negative → rejected in domain validation (invalid config).
- Other flag/mode/counter combinations: see the **decision matrix** above.

## Out of scope
- Billing for overage.
- Per-individual-user quota.

## Traceability
- Product: `./product.md` · Design: `./design.md` · Domain: `./domain.md`
- ADR to create: ADR-0002 (fixed vs sliding window)

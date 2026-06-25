> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

---
name: product
description: PRD-lite for the feature (why and for whom). Pull in when opening an architectural feature.
alwaysApply: false
---

# Product — Usage quota per organization

> **Tier:** architectural · **Status:** approved · **Owner:** Igor
> *(Filled didactic example. Replace with real features.)*

## Problem
Some organizations consume a disproportionate volume of the inference API, degrading
latency for all others. Today there is no per-organization limit — spikes from a single
account become a platform incident. Evidence: 3 P2 incidents in the last quarter originating
from a single org.

## For whom
All orgs on the paid plan (~120 accounts). Directly affects the ~8 high-volume accounts
and indirectly all that share the infrastructure.

## Expected outcome / success metric
- Metric: API latency p95 during spikes from one org.
- Baseline: up to 4s under peak → Target: ≤ 1.2s (quota-based isolation).
- Secondary metric: zero P2 incidents from a "noisy org".

## Goals
- Limit requests per org to a configurable quota per time window.
- Clear response (429 + headers) when the quota is exceeded.

## Non-goals
- Billing for overage (separate feature).
- Per-individual-user quotas within the org.
- IP-based rate limiting (the edge layer already covers it).

## Risks / assumptions
- Assumption: per-org quota (not per-user) is sufficient granularity. If false,
  the domain model changes.

---
name: metrics
description: Delivery metrics — Lead Time, Throughput, Continuous Delivery/Deployment maturity, and code quality (coverage, static analysis). Pull when reviewing the flow or planning. Updated by /metricas.
alwaysApply: false
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Delivery metrics

> Flow health: **Lead Time**, **Throughput**, and **Continuous Delivery/Deployment**.
> Updated by `/metricas`. Use it to **find bottlenecks**, not to rank people.

**Period:** <cycle / dates> · **Updated on:** <YYYY-MM-DD>

## Lead Time — time to production
> From the start (spec / issue / 1st commit) to deploy in prod. Report **median** and **p85**.

| Item                | Start        | In prod      | Lead time |
|---------------------|--------------|--------------|-----------|
| <feature / issue>   | <date>       | <date>       | <Xd Yh>   |

- **Median:** <…> · **p85:** <…> · **Trend:** <↑ / → / ↓>

## Throughput — items completed in the cycle
> How many items reached "done"/prod in the period.

| Type       | Completed |
|------------|------------|
| Stories    | <n>        |
| Bugs       | <n>        |
| Tasks      | <n>        |
| **Total**  | **<n>**    |

- **Trend vs previous cycle:** <↑ / → / ↓>

## Continuous Delivery / Deployment
| Practice                                   | Current state        | Gap to advance   |
|--------------------------------------------|----------------------|------------------|
| Continuous Delivery (always deployable)    | yes / partial / no   | <…>              |
| Continuous Deployment (automatic deploy)   | yes / partial / no   | <…>              |

- **Deployment Frequency:** <number of deploys in the period>.
- Next automation step: `/setup-ci`.

## Code quality
> Traceable evidence of the **outcome**: coverage and static analysis. Trend, not an isolated number.
> Source: CI artifacts (see `/setup-ci`). Blocking blocks the merge (see `engineering/TESTING.md`).

### Coverage
| Scope             | Current | Minimum | Trend       |
|-------------------|---------|---------|-------------|
| Global            | <X%>    | <Y%>    | <↑ / → / ↓> |
| <module / layer>  | <X%>    | —       | <↑ / → / ↓> |

### Static analysis
| Category                  | Findings | Blocking | Trend       |
|---------------------------|----------|----------|-------------|
| Type-check                | <n>      | <n>      | <↑ / → / ↓> |
| Complexity / smells       | <n>      | <n>      | <↑ / → / ↓> |
| Security (SAST)           | <n>      | <n>      | <↑ / → / ↓> |
| Duplication               | <n>      | —        | <↑ / → / ↓> |

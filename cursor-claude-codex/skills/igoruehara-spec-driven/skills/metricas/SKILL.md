---
name: metricas
description: Use to track delivery/flow metrics — Lead Time (time to production) and Throughput (items completed per cycle) — the maturity of Continuous Delivery vs Continuous Deployment, and code quality (coverage and static analysis) as a traceable trend. Reads git/Jira/CI and the quality artifacts when an MCP is connected and updates docs/engineering/metrics.md. Trigger with /metricas.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Delivery metrics (Lead Time · Throughput · CD)

Tracks the health of the delivery flow. **Idempotent**: re-running recalculates the period.
Principle: use it to **find bottlenecks**, not to rank people (do not encourage gaming).

## Define the period
Ask (`AskUserQuestion`) for the cycle (sprint / week / month) and the date window.

## 1. Lead Time — how long until production
Time from **"started" → "in production"** per item.
- **Start** (use whatever exists): date of the spec/STATE, issue creation (Jira), or the 1st commit.
- **End:** deploy to prod — tag/release, CI/CD log, or Jira "done" status.
- Compute per item and the aggregate: **median** and **p85** (more robust than the mean). Break it down by
  tier/type (feature/bug) if useful.

## 2. Throughput — items completed in the cycle
Number of items that reached **"done"/prod** in the period (stories, bugs, tasks).
- Sources: `specs/` marked as implemented, merged PRs, closed issues (Jira), deploys.
- Report the **absolute number** per cycle and the **trend** (↑ / → / ↓ vs the previous cycle).

## 3. Continuous Delivery vs Continuous Deployment
Assess where the team stands and the gap:

| Practice | Definition | Verification question |
|---|---|---|
| **Continuous Delivery** | every change is **deployable** (green pipeline); the release is a business decision (one button) | does the pipeline guarantee deployability? is there staging? |
| **Continuous Deployment** | every approved change goes to prod **automatically**, with no manual gate | is there still a manual gate? how much of the pipeline is automated? |

- Also report **Deployment Frequency** (how many deploys in the period).
- Point out the next automation step → `/setup-ci`.

## 4. Code quality — coverage and static analysis
Traceable evidence of the **result** (not just the flow). Look at the **trend**, not the isolated number —
and never to rank people (do not encourage gaming: 100% coverage with empty tests is worse than an honest 80%).
- **Coverage:** current % (global and, if useful, per module/layer) and the trend vs the previous cycle.
  Source: CI coverage report (artifact — see `/setup-ci`) or the local `<coverage command>`.
- **Static analysis:** number of **findings by severity** (type-check, complexity/smells,
  SAST/security, duplication) and the trend. Source: CI report (Sonar/CodeQL/semgrep/ruff/tsc…).
- Link to the gate: coverage below the minimum or a **blocking** finding bars the merge (see
  `docs/engineering/TESTING.md`); the rest shows up here as a **trend** to watch (is debt piling up?).

## Sources (tools-aware)
If a Jira/GitHub/GitLab/CI MCP is connected (validated account — see `/integracoes`), **pull the
data** (issues, PRs, releases, pipeline runs, **coverage/static analysis artifacts**).
Otherwise, use local `git log`/tags and the commands from `TESTING.md`, and ask for any missing numbers. Cite the source.

## Output
- Update `docs/engineering/metrics.md` (tables + trend + date and period), including the
  **Code quality** section.
- Summarize: Lead Time (median/p85), Throughput (total + trend), CD maturity, **coverage and
  static analysis findings (trend)**, and the #1 bottleneck.
- **Feed back into `/roadmap`:** recent Throughput is the **observed capacity** — do not plan
  waves beyond the team's actual throughput.

> Context: Lead Time and Deployment Frequency are **DORA** metrics; Throughput is a flow metric.
> Look at the **trend**, not the isolated number.

---
name: ADR-0001
description: Decision to use ADRs. Pull in when recording or reviewing decisions.
alwaysApply: false
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# ADR-0001: Record architecture decisions as ADRs

- **Status:** accepted
- **Date:** <YYYY-MM-DD>
- **Deciders:** <names>

## Context
Hard-to-reverse architectural decisions need durable memory. Without it,
the team reopens the same discussions and loses the *why* behind old choices.

## Decision
We will use **Architecture Decision Records** (Nygard format) in `docs/architecture/adr/`.
- One file per decision, numbered sequentially: `NNNN-title.md`.
- ADRs are **immutable**. To change a decision, create a new ADR with status
  `supersedes ADR-XXXX` and mark the old one as `superseded by ADR-YYYY`.
- Create an ADR when the decision is hard to reverse (database choice,
  context boundary, integration protocol, cross-cutting pattern).

## Consequences
- **+** Traceability of the *why*; faster onboarding.
- **+** More objective reviews (the decision has a home).
- **−** Small overhead per decision — acceptable and restricted to the architectural tier.

## Template for new ADRs
See `docs/architecture/adr/_template.md`.

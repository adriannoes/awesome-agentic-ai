> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

---
name: spec
description: Feature contract (acceptance criteria). The source of truth while the feature is active.
alwaysApply: true
---

# Spec — <feature name>

> **Source of truth.** Status: draft | in review | approved | implemented
> The acceptance criteria are (a) the contract with the business, (b) the test oracle,
> (c) the prompt for the AI agent to implement. Write them to be executable.

## Summary
<One sentence: what the system will now do.>

## Acceptance criteria
> Given/When/Then format. Each criterion must be testable and unambiguous.
> **Each `AC-N` is a traceable ID:** it reappears in `tasks.md` (the "Covers AC" column), in the
> acceptance test that validates it, and in the commit message. Do not renumber already-implemented ACs.

### AC-1: <scenario title>
- **Given** <state/precondition>
- **When** <action/event>
- **Then** <observable and verifiable result>

### AC-2: <title>
- **Given** …
- **When** …
- **Then** …

## Decision matrix (optional)
> Use **when the rule combines multiple factors** (flags, states, roles, modes). A truth table
> is denser, less ambiguous, and cheaper in tokens than the same rule in prose — and **each row
> becomes a test case**. The factors are columns; the last column is the observable result.
> Link each row to the `AC-N` it details (the "AC" column keeps traceability).
> Not everything fits a matrix: temporal flow and sequencing read better as Given/When/Then above.

|| Factor A | Factor B | … | Expected result | AC |
||---------|---------|---|--------------------|------|
|| <value> | <value> | … | <observable action>  | AC-1 |
|| <value> | <value> | … | <observable action>  | AC-2 |

> Cover **all relevant combinations** (including the "impossible" ones that must be rejected).
> `—` = factor irrelevant in that row. A row with no `AC` → likely missing an acceptance criterion.

## Edge cases and errors
- <invalid input → expected behavior>
- <concurrency, timeout, dependency failure → expected behavior>

## Out of scope
> Binding. Do not implement anything here.
- <…>

## Traceability
- Product: `./product.md`
- Design: `./design.md` (if architectural tier)
- Domain: `./domain.md`
- Related ADRs: <links>

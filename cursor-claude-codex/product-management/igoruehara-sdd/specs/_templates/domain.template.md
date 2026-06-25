> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

---
name: domain
description: DDD model of the feature. Pull in when modeling aggregates and language.
alwaysApply: false
---

# Domain Model (DDD) — <feature name>

> Answers: what is the **language** and the **model** of the business.
> Tactical DDD inside the bounded context. Terms here must appear identically in the code.

## Bounded Context
<Context name. Which subdomain: **core** (competitive advantage) /
**supporting** (necessary, not a differentiator) / **generic** (buy off the shelf)?>

## Ubiquitous language
> Same vocabulary across business, spec and code. Promote to the global `docs/glossary.md`.

|| Term        | Definition                                   | Do NOT confuse with |
||--------------|---------------------------------------------|-------------------|
|| <Term>      | <precise meaning in the domain>             | <similar term>    |

## Aggregates, entities and value objects
- **Aggregate `<Name>`** (root: `<Entity>`)
  - Entities: <…>
  - Value objects: <…>
  - **Invariants** (rules that always hold): <…>
  - Consistency boundary: <what changes together in a transaction>

## Domain events
|| Event (past)        | Fired when                 | Who reacts         |
||----------------------|-----------------------------|---------------------|
|| `<Something>Happened`| <condition>                | <context/handler>   |

## Relationships with other contexts
<How this context talks to the others: Customer/Supplier, Conformist,
Anti-Corruption Layer, Shared Kernel? Update `docs/architecture/context-map.md`.>

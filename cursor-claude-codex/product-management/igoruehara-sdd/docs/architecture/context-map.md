---
name: context-map
description: Bounded contexts and their relationships. Pull in when modeling or crossing contexts.
alwaysApply: false
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Context Map

> Strategic DDD view: the system's bounded contexts and how they relate.
> Update when a feature creates/moves boundaries. Combine with C4 diagrams if useful.

## Bounded Contexts
|| Context   | Subdomain (core/supporting/generic) | Responsibility          | Owner |
||-----------|--------------------------------------|-------------------------|-------|
|| <Context> | core                                 | <what it decides>       | <team>|

## Relationships between contexts
> DDD integration patterns: Customer/Supplier, Conformist, Anti-Corruption Layer (ACL),
> Shared Kernel, Open Host Service, Published Language.

```
[Context A] ──(ACL)──► [Context B]
     │
     └──(Customer/Supplier)──► [Context C]
```

|| Upstream   | Downstream | Pattern              | Why |
||------------|------------|----------------------|-----|
|| <A>        | <B>        | Anti-Corruption Layer| <protects B's model> |

## Diagrams
The high-level architecture diagrams (C4 context, containers, context map) live in
[`diagrams.md`](./diagrams.md) — generate/update them with the `/diagramar` skill.

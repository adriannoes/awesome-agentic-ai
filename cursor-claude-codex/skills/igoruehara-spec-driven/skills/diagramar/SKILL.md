---
name: diagramar
description: Use in discovery to draw the HIGH-LEVEL architecture in Mermaid — context diagram (C4 L1), containers (C4 L2), and the bounded contexts map (DDD). It reads vision, context-map, design, and assessment, and generates/updates docs/architecture/diagrams.md. It keeps a high level, with no implementation detail. Trigger with /diagramar.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Diagram architecture (Mermaid, high level)

Generates the architecture diagrams in **Mermaid** (they render on GitHub and in Claude Code) from the
discovery artifacts. Keep it **high level**: actors, systems, containers, and contexts — never classes,
tables, or implementation detail (that is the scope of the feature's `design.md`).

## Inputs (pull only what exists and cite the source)
- `docs/product/vision.md` — actors/personas and the system's purpose.
- `docs/architecture/context-map.md` — bounded contexts and relationships (DDD).
- `specs/*/design.md` — containers, services, and integrations.
- `docs/architecture/assessment.md` — as-is, in brownfield.
- **Gaps** → ask (`AskUserQuestion`): external actors, neighboring systems, the main containers
  (UI/services/data/queues), and the critical journey to illustrate.

## Diagrams (high level, aligned with C4 + DDD)
1. **System context (C4 L1):** the system at the center + personas + external systems.
2. **Containers (C4 L2):** apps/services, data, queues, and how they talk.
3. **Bounded contexts map (DDD):** contexts and relationship patterns (ACL, Customer/Supplier,
   Conformist, Shared Kernel).
4. *(optional)* **Key flow:** a critical journey in a `sequenceDiagram`.

> Use `flowchart` (renders everywhere) or Mermaid's native C4 diagrams (`C4Context`,
> `C4Container`) if the renderer supports it. Labels in the **ubiquitous language** of `glossary.md`.

## Output
- Write/update `docs/architecture/diagrams.md` (already exists as a placeholder; keep the
  frontmatter `alwaysApply: false`). Each diagram in a ` ```mermaid ` block, with a title and 1 line
  of context.
- Ensure the back-link in `context-map.md`. **Regenerate when the architecture changes** — an outdated
  diagram misleads more than it helps.

## Rules
- **High level only.** Asked for class/table detail? Say it's the scope of `design.md`.
- **Validate the syntax before delivering** — run the deterministic gate (don't trust the eye only):
  ```
  node scripts/validate-mermaid.mjs .
  ```
  It catches empty blocks, missing/unknown diagram types, and unbalanced quotes/delimiters.
  Fix the errors before saving; it's the same gate that runs in CI (`esteira.yml`).
- Do not invent components that aren't in the inputs — ask (see knowledge verification in `CLAUDE.md`).

# Visual Content skills

**Source:** [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) · originally `skills/18-visual-content/`
**License:** MIT — Jeremy Longshore <jeremy@intentsolutions.io>
**Scope:** 25 agent skills for diagrams, charts, and visual documentation.

## Honest assessment

These are **breadth-first starting-point skills**, not deep opinionated playbooks. Each `SKILL.md` follows the same template (Overview / When to Use / Instructions / Examples / Prerequisites / Error Handling / Resources) and relies on Claude's general knowledge of the tool (Mermaid, D2, PlantUML, Graphviz, Chart.js, Plotly, etc.) rather than shipping its own detailed playbook.

They are most useful as:
- **Trigger shims** — naming conventions that help skill auto-activation fire on the right prompts (pair with [cursor-and-claude/references/skill-auto-activation.md](../../references/skill-auto-activation.md))
- **A coverage checklist** — a menu of 25 visual outputs you might not have considered
- **A starting point** — fork and deepen individual SKILL.md files when you actually use them on a project

For **deep** design/visualization skills, see our curated ones: [frontend-design/](../frontend-design/), [web-design-guidelines/](../web-design-guidelines/), and the `/diagrams` command in [commands/diagrams.md](../../commands/diagrams.md).

## Skills (25)

### Mermaid

- [mermaid-flowchart-generator](./mermaid-flowchart-generator/SKILL.md)
- [mermaid-sequence-diagram-creator](./mermaid-sequence-diagram-creator/SKILL.md)
- [mermaid-er-diagram-creator](./mermaid-er-diagram-creator/SKILL.md)
- [mermaid-class-diagram-generator](./mermaid-class-diagram-generator/SKILL.md)
- [mermaid-state-diagram-creator](./mermaid-state-diagram-creator/SKILL.md)
- [mermaid-gantt-chart-generator](./mermaid-gantt-chart-generator/SKILL.md)

### Other diagram formats

- [d2-diagram-creator](./d2-diagram-creator/SKILL.md)
- [plantuml-diagram-generator](./plantuml-diagram-generator/SKILL.md)
- [graphviz-dot-generator](./graphviz-dot-generator/SKILL.md)
- [ascii-art-diagram-creator](./ascii-art-diagram-creator/SKILL.md)
- [svg-icon-generator](./svg-icon-generator/SKILL.md)

### Domain-specific diagrams

- [architecture-diagram-creator](./architecture-diagram-creator/SKILL.md)
- [api-flow-diagram-creator](./api-flow-diagram-creator/SKILL.md)
- [database-schema-visualizer](./database-schema-visualizer/SKILL.md)
- [network-diagram-generator](./network-diagram-generator/SKILL.md)
- [org-chart-creator](./org-chart-creator/SKILL.md)
- [process-flow-generator](./process-flow-generator/SKILL.md)
- [user-journey-mapper](./user-journey-mapper/SKILL.md)
- [technical-diagram-analyzer](./technical-diagram-analyzer/SKILL.md)

### Charts & data viz

- [chart-js-config-creator](./chart-js-config-creator/SKILL.md)
- [plotly-chart-generator](./plotly-chart-generator/SKILL.md)
- [data-visualization-helper](./data-visualization-helper/SKILL.md)

### Presentations & mindmaps

- [presentation-slide-outliner](./presentation-slide-outliner/SKILL.md)
- [mindmap-generator](./mindmap-generator/SKILL.md)
- [infographic-outline-creator](./infographic-outline-creator/SKILL.md)

## Installation (upstream)

If you'd rather install from the source marketplace than use our vendored copy:

```bash
/plugin marketplace add jeremylongshore/claude-code-plugins
```

## Attribution

Vendored as-is from upstream on 2026-04-21. Original category name: `18-visual-content`. See [cursor-and-claude/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#jeremylongshoreclaude-code-plugins-plus-skills) for the full catalog entry.

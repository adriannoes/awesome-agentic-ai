# DESIGN.md — format spec and examples

**Source:** [google-labs-code/design.md](https://github.com/google-labs-code/design.md)
**License:** Apache License 2.0 — Google LLC (see [LICENSE](./LICENSE))
**Vendored:** 2026-04-21 · spec.md + 3 examples

## What is DESIGN.md?

A format specification (from Google Labs) for describing a **visual identity to coding agents**. A single `DESIGN.md` file combines:

- **Machine-readable design tokens** in YAML front matter — colors, typography, spacing, rounded, components. Tokens follow the [Design Token JSON spec](https://www.designtokens.org/tr/2025.10/format/) with `{path.to.token}` references.
- **Human-readable prose** in the markdown body — rationale, tone, application guidance.

The format is designed to be a **living source of truth** that both humans and agents (Claude Code, Cursor, Gemini, Codex, Antigravity, etc.) can read and refine across sessions and tools. Tokens are easily convertible to `tokens.json`, Figma variables, or Tailwind theme config.

## What's in this folder

| Path | Purpose |
|------|---------|
| [spec.md](./spec.md) | The full format specification (generated from the upstream `spec.mdx`) |
| [examples/atmospheric-glass/](./examples/atmospheric-glass/) | Example design system: *Atmospheric Glass* — translucent, depth-based UI |
| [examples/paws-and-paths/](./examples/paws-and-paths/) | Example design system: *Paws and Paths* — playful, pet-centric brand |
| [examples/totality-festival/](./examples/totality-festival/) | Example design system: *Totality Festival* — high-energy event brand |

Each example includes `DESIGN.md`, `design_tokens.json`, `tailwind.config.js`, and a short `README.md`.

## When to use this

- **Starting a new product** — write a DESIGN.md before the first UI prompt so every agent session stays visually coherent.
- **Handing a design system to an agent** — drop DESIGN.md into your repo; agents read the tokens + prose and generate UI that matches.
- **Keeping brand consistency across tools** — one DESIGN.md works across Claude Code, Cursor, Gemini, etc. because the format is tool-agnostic.

## CLI (upstream, not vendored)

Google Labs ships an official CLI (Apache-2.0, not vendored here) that lints, diffs, and validates DESIGN.md files — including WCAG contrast checks:

```bash
npx @google/design.md lint DESIGN.md
npx @google/design.md diff DESIGN.md DESIGN-v2.md
```

Outputs structured JSON that agents can act on.

## Related in this hub

- [cursor-claude-codex/skills/frontend-design/](../../skills/frontend-design/) — skill for distinctive frontend interfaces
- [cursor-claude-codex/skills/web-design-guidelines/](../../skills/web-design-guidelines/) — Vercel UI audit skill
- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (catalog entry: [upstream-repos-catalog.md](../upstream-repos-catalog.md#voltagentawesome-design-md)) — community-curated collection of DESIGN.md files for public sites; uses this same format

## Attribution

Apache License 2.0. All files in this directory are vendored as-is from [google-labs-code/design.md](https://github.com/google-labs-code/design.md). The original `LICENSE` file is included alongside. No modifications; if upstream updates the format, re-vendor from source.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../upstream-repos-catalog.md#google-labs-codedesignmd).

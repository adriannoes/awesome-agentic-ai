# DESIGN.md — format spec and examples

**Source:** [google-labs-code/design.md](https://github.com/google-labs-code/design.md)
**License:** Apache License 2.0 — Google LLC (see [LICENSE](./LICENSE))
**Vendored:** 2026-08-27 @ **0.4.0** (`9bf8eae`; originally 2026-04-21) · spec.md + PHILOSOPHY.md + 3 examples

## What is DESIGN.md?

A format specification (from Google Labs) for describing a **visual identity to coding agents**. A single `DESIGN.md` file combines:

- **Machine-readable design tokens** in YAML front matter — colors, typography, spacing, rounded, components. Tokens follow the [Design Token JSON spec](https://www.designtokens.org/tr/2025.10/format/) with `{path.to.token}` references.
- **Human-readable prose** in the markdown body — rationale, tone, application guidance.

The format is designed to be a **living source of truth** that both humans and agents (Claude Code, Cursor, Gemini, Codex, Antigravity, etc.) can read and refine across sessions and tools. Tokens are easily convertible to `tokens.json`, Figma variables, Tailwind theme config, or plain CSS custom properties (`--format css-vars` as of v0.4.0). Tailwind CSS v4 export has been supported since v0.3.0.

## What's in this folder

| Path | Purpose |
|------|---------|
| [spec.md](./spec.md) | The full format specification (generated from the upstream `spec.mdx`) — v0.4.0 adds the optional `omitted` frontmatter key; v0.3.0 added Tailwind v4 export and standard + CSS Color Module formats in the validator/linter |
| [PHILOSOPHY.md](./PHILOSOPHY.md) | Upstream design philosophy doc — why DESIGN.md exists and how to think about design tokens + prose together |
| [examples/atmospheric-glass/](./examples/atmospheric-glass/) | Example design system: *Atmospheric Glass* — translucent, depth-based UI |
| [examples/paws-and-paths/](./examples/paws-and-paths/) | Example design system: *Paws and Paths* — playful, pet-centric brand |
| [examples/totality-festival/](./examples/totality-festival/) | Example design system: *Totality Festival* — high-energy event brand |

Each example includes `DESIGN.md`, `design_tokens.json`, `tailwind.config.js`, and a short `README.md`. The 3 examples are unchanged since the original vendor.

## When to use this

- **Starting a new product** — write a DESIGN.md before the first UI prompt so every agent session stays visually coherent.
- **Handing a design system to an agent** — drop DESIGN.md into your repo; agents read the tokens + prose and generate UI that matches.
- **Keeping brand consistency across tools** — one DESIGN.md works across Claude Code, Cursor, Gemini, etc. because the format is tool-agnostic.

## CLI (upstream, not vendored)

Google Labs ships an official CLI (Apache-2.0, not vendored here) that lints, diffs, validates, and exports DESIGN.md files — including WCAG contrast checks. As of upstream v0.4.0:

```bash
npx @google/design.md lint DESIGN.md
npx @google/design.md diff DESIGN.md DESIGN-v2.md
npx @google/design.md export --format css-vars DESIGN.md
```

Outputs structured JSON that agents can act on. v0.4.0 adds `--format css-vars` (CSS custom properties, optional `--prefix`), an `omitted` frontmatter key to suppress expected-missing section warnings, and token name collision lint (flattened dot-notation keys vs nested YAML groups). The CLI is **not** vendored here — run it with `npx @google/design.md`.

## Related in this hub

- [cursor-claude-codex/skills/frontend-design/](../../skills/frontend-design/) — skill for distinctive frontend interfaces
- [cursor-claude-codex/skills/impeccable/](../../skills/impeccable/) — `/impeccable init` writes a related `DESIGN.md` + `PRODUCT.md`
- [cursor-claude-codex/skills/ui-ux-pro-max/](../../skills/ui-ux-pro-max/) — searchable style/palette/token catalogs
- [cursor-claude-codex/skills/web-design-guidelines/](../../skills/web-design-guidelines/) — Vercel UI audit skill
- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (catalog entry: [upstream-repos-catalog.md](../upstream-repos-catalog.md#voltagentawesome-design-md)) — community-curated collection of DESIGN.md files for public sites; uses this same format

## Attribution

Apache License 2.0. All files in this directory are vendored as-is from [google-labs-code/design.md](https://github.com/google-labs-code/design.md). The original `LICENSE` file is included alongside. No modifications to spec content; if upstream updates the format, re-vendor from source.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../upstream-repos-catalog.md#google-labs-codedesignmd).

# cathrynlavery/diagram-design (vendored)

**Source:** [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)
**License:** MIT — see [LICENSE](./LICENSE) — © 2025 Cathryn Lavery
**Vendored:** 2026-08-27 — the `diagram-design` SKILL.md package @ commit `4faae66` (v2.6). Excluded: generated `assets/example-*.html` gallery, `assets/index.html`, screenshots/`docs/`, plugin wrappers, and the rest of the upstream repo.

## What it is

A single agent skill that draws **editorial diagrams** as self-contained HTML with inline SVG: 39 layout types (architecture, flowchart, sequence, Wardley, Sankey, and more), brand tokens from a website, semantic patterns separate from layout, optional accessible motion. Static HTML is the default. It can also redraw draw.io or Mermaid sources at a chosen size and detail — not a Mermaid renderer.

Works in Claude Code, Codex, Factory Droid, Pi, and other agents that load `SKILL.md`. Live gallery: [cathrynlavery.github.io/diagram-design](https://cathrynlavery.github.io/diagram-design/).

## Layout

| Path | Contents |
|------|----------|
| [SKILL.md](./SKILL.md) | Type router, brand gate, invariants, variant table |
| [assets/](./assets/) | HTML shells: `template.html`, `template-dark.html`, `template-full.html`, `template-motion.html`, `template-terminal.html`, plus `icons.html` |
| [references/](./references/) | Per-type grammars, style guide, semantic patterns, import/export |
| [scripts/](./scripts/) | `self_check.py`, `mermaid_extract.py`, `drawio_extract.py` |
| [LICENSE](./LICENSE) | MIT license |

## Install in this hub

```bash
# Cursor / Claude Code / Codex — install upstream for updates
npx skills add cathrynlavery/diagram-design -g
```

Cursor, non-interactive:

```bash
npx -y skills add cathrynlavery/diagram-design --skill diagram-design --agent cursor --global --copy --yes
```

Upstream also ships as a plugin marketplace:

```text
/plugin marketplace add cathrynlavery/diagram-design
/plugin install diagram-design@diagram-design
```

Or copy/symlink this folder into your skills path (`~/.claude/skills/`, `~/.agents/skills/`, or `.cursor/skills/`). Requires **Python 3** for the bundled check/extract scripts. Then: `Use diagram-design to draw an architecture diagram of this system.`

## Pairs with

- [archify/](../archify/) — validated interactive runtime maps (typed JSON IR); Diagram Design is editorial HTML/SVG with a 39-type layout grammar
- [visual-content/](../visual-content/) — breadth-first Mermaid / D2 / PlantUML shims; Diagram Design is the deep editorial redraw path
- [commands/diagrams.md](../../commands/diagrams.md) — Cursor `/diagrams` slash command (Mermaid in chat)

## Security note (skill-security-auditor)

A scan **FAIL**s on `scripts/drawio_extract.py` because it `base64.b64decode`s draw.io payloads. That is how `.drawio` XML is stored, not obfuscation. Review before running extract on untrusted files.

## Refresh

Pin a commit. Do not copy `assets/example-*.html`, `assets/index.html`, `docs/`, screenshots, or plugin wrappers. Restore this hub README after `rsync`.

```bash
UPSTREAM=/tmp/diagram-design-upstream
DEST=cursor-claude-codex/skills/diagram-design
git clone --depth 1 https://github.com/cathrynlavery/diagram-design.git "$UPSTREAM"
rsync -a --delete \
  --exclude 'assets/example-*.html' \
  --exclude 'assets/index.html' \
  --exclude 'README.md' \
  "$UPSTREAM/skills/diagram-design/" "$DEST/"
cp "$UPSTREAM/LICENSE" "$DEST/LICENSE"
# restore this README.md from git if overwritten
```

## Attribution

Vendored from [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) (MIT). The MIT LICENSE is preserved verbatim.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#cathrynlaverydiagram-design).

# tt-a1i/archify (vendored)

**Source:** [tt-a1i/archify](https://github.com/tt-a1i/archify)
**License:** MIT — see [LICENSE](./LICENSE) — © 2026 tt-a1i (Archify); © 2025 Cocoon AI (original `architecture-diagram-generator`)
**Vendored:** 2026-08-27 — the `archify` SKILL.md package @ commit `585be4c` (`v2.16.0-dev.0`). Excluded: `test/`, generated `examples/*.html`, and the rest of the upstream repo (docs site, gallery, benchmarks, `archify.zip`).

## What it is

A single agent skill that turns a system description or repository into a **polished, interactive technical map**: architecture, workflow, sequence, data-flow, and lifecycle diagrams as self-contained HTML (inline SVG, dark/light themes, optional motion, PNG/SVG/WebM export). Typed JSON IR plus deterministic validation — not a Mermaid renderer.

Works in Cursor, Claude Code, Codex, OpenCode, and Raven. Live gallery: [tt-a1i.github.io/archify](https://tt-a1i.github.io/archify/).

## Layout

| Path | Contents |
|------|----------|
| [SKILL.md](./SKILL.md) | Authoring path, type router, Mermaid conversion, invariants |
| [bin/archify.mjs](./bin/archify.mjs) | CLI: `validate` / `deliver` / `preview` / `guide` / `brands` |
| [schemas/](./schemas/) | JSON schemas per diagram type |
| [examples/](./examples/) | Typed JSON examples (HTML artifacts omitted; generate locally) |
| [references/](./references/) | Authoring, delivery, viewer-runtime, and brand-mark contracts |
| [renderers/](./renderers/) | Architecture / workflow / sequence / dataflow / lifecycle renderers |
| [assets/template.html](./assets/template.html) | Self-contained HTML viewer shell |
| [brand-marks/](./brand-marks/) | Built-in brand catalogue (107 marks) |
| [LICENSE](./LICENSE) | MIT license |

## Install in this hub

```bash
# Cursor / Claude Code / Codex — install upstream for updates
npx skills add tt-a1i/archify -g
```

Cursor, non-interactive:

```bash
npx -y skills add tt-a1i/archify --skill archify --agent cursor --global --copy --yes
```

Or copy/symlink this folder into your skills path (`~/.claude/skills/`, `~/.agents/skills/`, or `.cursor/skills/`). Requires **Node.js ≥ 18**. Then: `Use archify to map this repository's runtime architecture.`

## Pairs with

- [visual-content/](../visual-content/) — breadth-first Mermaid / D2 / PlantUML starting points; Archify is the deep, validated HTML alternative
- [diagram-design/](../diagram-design/) — editorial 39-type HTML/SVG; Archify is typed JSON IR + interactive runtime
- [commands/diagrams.md](../../commands/diagrams.md) — Cursor `/diagrams` slash command (Mermaid in chat)
- [frontend-design](../frontend-design/) · [taste-skills](../taste-skills/) — UI aesthetics; Archify is system maps, not product UI

## Security note (skill-security-auditor)

A `skill-security-auditor` scan **FAIL**s this package (8 CRITICAL) because `bin/` and helpers use Node `child_process` and `RegExp.prototype.exec`. Both are expected:

- **`regex.exec(svg)` is `RegExp.prototype.exec`**, not `child_process.exec`. The auditor cannot distinguish the two (same false positive as [vercel-optimize](../vercel-optimize/)).
- **Shell-outs use `spawn` / `spawnSync` / `execFileSync` with argument arrays** — open the generated HTML, run Git for optional repository-evidence pinning, preview on localhost. No `shell: true`.
- **Network is opt-in.** `archify brands capture <url>` fetches a user-supplied official brand URL; `validate` / `render` / `deliver` do not perform an unpinned capture.

Do not set as global `alwaysApply`. Invoke when the user asks for an architecture / sequence / data-flow map.

## Refresh

Pin a commit. Do not copy `test/`, generated `examples/*.html`, `docs/`, `benchmarks/`, or `archify.zip`. Restore this hub README after `rsync`.

```bash
UPSTREAM=/tmp/archify-upstream
DEST=cursor-claude-codex/skills/archify
git clone --depth 1 https://github.com/tt-a1i/archify.git "$UPSTREAM"
rsync -a --delete --exclude 'test/' --exclude 'examples/*.html' --exclude 'README.md' "$UPSTREAM/archify/" "$DEST/"
cp "$UPSTREAM/LICENSE" "$DEST/LICENSE"
# restore this README.md from git if overwritten
python3 cursor-claude-codex/skills/alirezarezvani-skills/skill-security-auditor/scripts/skill_security_auditor.py "$DEST"
```

## Attribution

Vendored from [tt-a1i/archify](https://github.com/tt-a1i/archify) (MIT), based on [Cocoon-AI/architecture-diagram-generator](https://github.com/Cocoon-AI/architecture-diagram-generator) (MIT, v1.0). The MIT LICENSE is preserved verbatim.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#tt-a1iarchify).

# zarazhangrui/frontend-slides (vendored)

**Source:** [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides)
**License:** MIT — see [LICENSE](./LICENSE) — © 2025 Zara Zhang
**Vendored:** 2026-08-27 — the root `frontend-slides` SKILL.md package @ commit `9906a34`. Excluded: `plugins/` (duplicate skill tree) and `.claude-plugin/`.

## What it is

A single agent skill that builds **zero-dependency HTML presentations** — from scratch or by converting PowerPoint — as a fixed 16:9 (1920×1080) stage that scales to the viewport. Visual style discovery (previews, not abstract palettes), anti-generic-AI aesthetics, optional bold template pack from `beautiful-html-templates`, PPT extract + PDF export + deploy scripts. No npm, no build step.

Works in Claude Code (plugin command `/frontend-slides:frontend-slides`) and any agent that can read `SKILL.md`. Walkthrough: [YouTube](https://www.youtube.com/watch?v=372Iksaz8b0).

## Layout

| Path | Contents |
|------|----------|
| [SKILL.md](./SKILL.md) | Modes, 16:9 invariants, style discovery, PPT conversion |
| [STYLE_PRESETS.md](./STYLE_PRESETS.md) | Safe default style presets |
| [viewport-base.css](./viewport-base.css) | Stage/viewport CSS copied into every deck |
| [html-template.md](./html-template.md) | HTML shell the skill fills in |
| [animation-patterns.md](./animation-patterns.md) | Motion patterns + reduced-motion |
| [bold-template-pack/](./bold-template-pack/) | Design-forward templates (read `selection-index.json` first) |
| [scripts/](./scripts/) | `extract-pptx.py`, `export-pdf.sh`, `deploy.sh` |
| [LICENSE](./LICENSE) | MIT license |

## Install in this hub

```bash
# Claude Code — install upstream for updates
/plugin marketplace add https://github.com/zarazhangrui/frontend-slides
/plugin install frontend-slides@frontend-slides
```

Or copy/symlink this folder into your skills path (`~/.claude/skills/`, `~/.agents/skills/`, or `.cursor/skills/`):

```bash
mkdir -p ~/.claude/skills/frontend-slides/scripts
cp SKILL.md STYLE_PRESETS.md viewport-base.css html-template.md animation-patterns.md ~/.claude/skills/frontend-slides/
cp -R bold-template-pack ~/.claude/skills/frontend-slides/
cp scripts/extract-pptx.py scripts/deploy.sh scripts/export-pdf.sh ~/.claude/skills/frontend-slides/scripts/
```

Then: `Use frontend-slides to create a 16:9 HTML deck about this project.` PPT conversion needs **Python 3**. PDF export / deploy scripts are optional.

## Pairs with

- [visual-content/presentation-slide-outliner](../visual-content/presentation-slide-outliner/SKILL.md) — breadth-first slide-outline shim; Frontend Slides is the full HTML deck runtime
- [taste-skills/](../taste-skills/) — UI taste / anti-slop aesthetics; Frontend Slides applies that taste to 16:9 decks
- [frontend-design/](../frontend-design/) — product UI aesthetics; Frontend Slides is presentations, not app chrome

## Security note (skill-security-auditor)

**WARN** on `scripts/export-pdf.sh` (`npm install playwright`). That script is optional PDF export. Do not run it unless you intend to install Playwright locally. Deck generation itself is zero-dependency HTML.

## Refresh

Pin a commit. Do not copy `plugins/` or `.claude-plugin/`. Restore this hub README after `rsync`.

```bash
UPSTREAM=/tmp/frontend-slides-upstream
DEST=cursor-claude-codex/skills/frontend-slides
git clone --depth 1 https://github.com/zarazhangrui/frontend-slides.git "$UPSTREAM"
rsync -a --delete \
  --exclude 'README.md' \
  "$UPSTREAM/SKILL.md" "$UPSTREAM/LICENSE" \
  "$UPSTREAM/STYLE_PRESETS.md" "$UPSTREAM/animation-patterns.md" \
  "$UPSTREAM/html-template.md" "$UPSTREAM/viewport-base.css" \
  "$UPSTREAM/bold-template-pack" "$UPSTREAM/scripts" "$DEST/"
# restore this README.md from git if overwritten
```

## Attribution

Vendored from [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) (MIT). Bold templates draw from `beautiful-html-templates`. The MIT LICENSE is preserved verbatim.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#zarazhangruifrontend-slides).

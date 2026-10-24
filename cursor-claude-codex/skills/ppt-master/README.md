# hugohe3/ppt-master (vendored)

**Source:** [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)
**License:** MIT — see [LICENSE](./LICENSE) — © 2025–2026 Hugo He
**Vendored:** 2026-10-11 — upstream `skills/ppt-master/` package @ commit `b4efe3d` (skill metadata **v6.7.0**). Omitted: repo-root `docs/`, bundled `projects/` example decks, `.claude-plugin/`, and duplicate marketplace metadata under `skills/.claude-plugin/`.

## What it is

A routed agent workflow that generates **natively editable PowerPoint** (`.pptx`) from documents, pasted text, or reference decks — via SVG authoring, OOXML export, and Python post-processing. Routes include full deck generation, template/brand workspace creation, **Edit Native PPTX** (fill an existing template), beautify/reconstruct, and optional animation/narration. Not HTML slides; output is DrawingML you can keep editing in PowerPoint.

Works in Cursor, Claude Code, Codex CLI, and other agent hosts that can run Python and read `SKILL.md`. Live examples: [ppt-master-examples](https://hugohe3.github.io/ppt-master-examples/).

## Layout

| Path | Contents |
|------|----------|
| [SKILL.md](./SKILL.md) | Global routing, mandatory load order, route table |
| [workflows/](./workflows/) | Generate, template, edit-native, beautify, quick-mode profiles |
| [references/](./references/) | Canvas formats, image gen/search, construction rules |
| [scripts/](./scripts/) | Conversion, SVG finalize, `svg_to_pptx`, project manager, image/TTS helpers |
| [templates/](./templates/) | Icon packs, layout seeds (see [THIRD_PARTY_NOTICES](./templates/icons/THIRD_PARTY_NOTICES.md)) |
| [requirements.txt](./requirements.txt) | Python deps for the script pipeline |
| [.env.example](./.env.example) | Optional API keys (image backends, Pexels/Pixabay, TTS, …) |
| [LICENSE](./LICENSE) | MIT license |

## Install in this hub

**Prerequisites:** Python **3.10+**, then:

```bash
pip install -r cursor-claude-codex/skills/ppt-master/requirements.txt
```

Optional: copy [.env.example](./.env.example) to `.env` in the skill directory or `~/.ppt-master/.env` (see upstream [Getting Started](https://github.com/hugohe3/ppt-master/blob/main/docs/getting-started.md)).

**Cursor / Claude Code / Codex — install upstream for updates:**

```bash
npx skills add hugohe3/ppt-master
```

Or symlink/copy this folder into `.cursor/skills/ppt-master`, `~/.claude/skills/ppt-master`, or `~/.agents/skills/ppt-master`. Open a workspace where the agent can resolve `SKILL_DIR` and run `python3` against `scripts/`.

Example prompt: `Use ppt-master to build a 10-slide 16:9 deck from this PDF.`

## Pairs with

- [frontend-slides/](../frontend-slides/) — zero-dependency **HTML** 16:9 decks; PPT Master targets **native PPTX**
- [visual-content/presentation-slide-outliner](../visual-content/presentation-slide-outliner/SKILL.md) — outline-first shim; PPT Master is the full generation pipeline
- [ui-ux-pro-max/](../ui-ux-pro-max/) — design catalogs and Chart.js slide styling; complementary, not a substitute for OOXML export

## Security & licensing notes

- **API keys & network:** Optional `.env` keys drive `image_gen.py`, `image_search.py`, and TTS backends; scripts may call external providers when configured. Do not commit real secrets.
- **PDF sources:** Upstream documents optional [PyMuPDF](https://pymupdf.readthedocs.io/) (AGPL-3.0) for some PDF conversion paths — see [scripts/docs/conversion.md](./scripts/docs/conversion.md) before redistributing a bundle that includes it.
- **Integrity gate:** The skill requires `python3 scripts/attribution_guard.py` on load; do not bypass.

## Refresh

Cherry-pick only `skills/ppt-master/` from upstream (sparse clone keeps the download small):

```bash
UPSTREAM=/tmp/ppt-master-upstream
DEST=cursor-claude-codex/skills/ppt-master
rm -rf "$UPSTREAM"
git clone --depth 1 --filter=blob:none --sparse https://github.com/hugohe3/ppt-master.git "$UPSTREAM"
cd "$UPSTREAM" && git sparse-checkout set skills/ppt-master
rsync -a --delete \
  --exclude 'README.md' \
  "$UPSTREAM/skills/ppt-master/" "$DEST/"
# restore this README.md from git if overwritten
pip install -r "$DEST/requirements.txt"
```

## Attribution

Vendored from [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) (MIT). Original `SKILL.md` and workflow files are preserved verbatim. Sponsor notices remain in [SPONSORS.md](./SPONSORS.md).

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#hugohe3ppt-master).

# nextlevelbuilder/ui-ux-pro-max-skill (vendored)

**Source:** [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
**License:** MIT — see [LICENSE](./LICENSE) — © 2024 Next Level Builder
**Vendored:** 2026-08-27 — **7 skills** from `.claude/skills/` @ commit `8bd29e7` (upstream `skill.json` **v2.13.0**). Excluded: `gallery/`, `screenshots/`, `cli/`, `docs/`, `preview/`, `projects/`, `stack/`, and the rest of the upstream repo.

## What it is

A **design-intelligence** pack for agent UIs: searchable local catalogs (styles, palettes, fonts, UX rules, stacks) plus companion skills for brand, tokens, slides, banners, and shadcn/Tailwind styling. Site: [uupm.cc](https://uupm.cc).

This is a **catalog + routing** layer, not a substitute for taste. Pair it with [taste-skills](../taste-skills/) or [frontend-design](../frontend-design/) when you need an aesthetic POV; use this pack when you need searchable style/palette/stack data or token/slide/banner workflows.

**Do not** set as global `alwaysApply` — invoke per UI/design task.

## Skills (7)

One-line descriptions from each `SKILL.md` frontmatter:

| Folder | Description |
|--------|-------------|
| [ui-ux-pro-max](./skills/ui-ux-pro-max/) | UI/UX design intelligence for web, mobile, and desktop — searchable local data: 79 styles (50 active), 192 product palettes, 74 font pairings, 119 UX guidelines, 105 icons, 17 GSAP presets, 25 chart types, 22 stacks |
| [design](./skills/design/) | Comprehensive design skill: brand identity, design tokens, UI styling, logo generation, corporate identity program, HTML presentations, banners, icons, social photos |
| [design-system](./skills/design-system/) | Token architecture, component specifications, and slide generation — three-layer tokens, CSS variables, spacing/typography scales |
| [ui-styling](./skills/ui-styling/) | Beautiful, accessible UIs with shadcn/ui (Radix + Tailwind), Tailwind utilities, and canvas-based visual designs |
| [brand](./skills/brand/) | Brand voice, visual identity, messaging frameworks, asset management, brand consistency |
| [slides](./skills/slides/) | Strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies |
| [banner-design](./skills/banner-design/) | Banners for social media, ads, website heroes, creative assets, and print — multiple art-direction options with AI-generated visuals |

`design` is an umbrella that overlaps the specialists. Prefer the named skill (`brand`, `slides`, `banner-design`, `design-system`, `ui-styling`) when the task is already scoped.

## Layout

| Path | Contents |
|------|----------|
| [skills/](./skills/) | 7 agent skill packages (`SKILL.md` + references / data / scripts) |
| [skills/ui-ux-pro-max/](./skills/ui-ux-pro-max/) | Flagship searchable catalogs + search scripts (Python 3 stdlib) |
| [skills/ui-styling/canvas-fonts/](./skills/ui-styling/canvas-fonts/) | Bundled OFL fonts for canvas posters (~5.5 MB) |
| [LICENSE](./LICENSE) | MIT license (repo root copy) |

## Install in this hub

Upstream's recommended path is the **CLI** (`ui-ux-pro-max-cli`, command `uipro`) — not `npx skills add`. Older `uipro-cli` packages are stale.

```bash
# Project-local (Cursor)
npx ui-ux-pro-max-cli init --ai cursor

# Or install the CLI, then init
npm install -g ui-ux-pro-max-cli
uipro init --ai cursor --global   # ~/.cursor/skills/
uipro init --ai claude --global   # ~/.claude/skills/
uipro init --ai universal --global # ~/.agents/skills/
```

Claude Code marketplace:

```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

Or copy/symlink folders from this hub:

```bash
mkdir -p .cursor/skills
ln -sf "$(pwd)/cursor-claude-codex/skills/ui-ux-pro-max/skills/ui-ux-pro-max" .cursor/skills/ui-ux-pro-max
```

Python **3.x** is required for the search scripts (stdlib only; no extra packages, no network). Ask the human to install Python if it is missing — agents should not install it.

## Pairs with

- [taste-skills](../taste-skills/) — anti-slop aesthetic direction; this pack is catalogs + tokens, not a design POV
- [frontend-design](../frontend-design/) — shorter distinctive-UI baseline (mitsuhiko)
- [frontend-slides](../frontend-slides/) — slide/presentation skills outside this pack
- [references/design-md/](../../references/design-md/) — Stitch `DESIGN.md` spec

## Honest notes

- **Cherry-pick, not a full mirror.** Gallery HTML, screenshot assets, the npm CLI source, and stack templates stay upstream. For updates and the complete installer, use `ui-ux-pro-max-cli`.
- **Size:** most of the ~10 MB here is `ui-styling/canvas-fonts/` plus CSV/JSON catalogs under `ui-ux-pro-max/` and `design/`.
- **Overlap:** `design` duplicates routing into brand / tokens / slides / banners / logos. Loading all seven as `alwaysApply` wastes context.
- **Search scripts are local.** They read bundled data; they do not call a design API unless a skill's logo/CIP path (Gemini / Atlas Cloud) is explicitly invoked.

## Security note (skill-security-auditor)

Bundle scan **FAIL**s. Per-skill: `banner-design` / `design-system` / `slides` **PASS**; `ui-styling` and `ui-ux-pro-max` **WARN**; `brand` and `design` **FAIL**.

- **`regex.exec`** in color parsers is `RegExp.prototype.exec`, not `child_process.exec`.
- **`execFileSync`** in brand token sync is argument-array Node spawn (no `shell: true`).
- **`GEMINI_API_KEY` / `GOOGLE_API_KEY`** in `design/scripts/cip/` is optional logo/CIP generation — do not run those scripts unless the user supplied a key. Search/catalog scripts are local stdlib Python with no network.

## Refresh

Pin a commit. Copy only `.claude/skills/` plus root `LICENSE`. Restore this hub README after `rsync`.

```bash
UPSTREAM=/tmp/ui-ux-pro-max-upstream
DEST=cursor-claude-codex/skills/ui-ux-pro-max
git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git "$UPSTREAM"
rsync -a --delete "$UPSTREAM/.claude/skills/" "$DEST/skills/"
cp "$UPSTREAM/LICENSE" "$DEST/LICENSE"
# restore this README.md from git if overwritten
python3 cursor-claude-codex/skills/alirezarezvani-skills/skill-security-auditor/scripts/skill_security_auditor.py "$DEST"
```

## Attribution

Vendored from [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (MIT). Original `SKILL.md` files are preserved verbatim. The MIT LICENSE is copied from the upstream repository root.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#nextlevelbuilderui-ux-pro-max-skill).

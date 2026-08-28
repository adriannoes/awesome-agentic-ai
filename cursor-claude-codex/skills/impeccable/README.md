# pbakaus/impeccable (vendored)

**Source:** [pbakaus/impeccable](https://github.com/pbakaus/impeccable)
**License:** Apache-2.0 — see [LICENSE](./LICENSE) and [NOTICE.md](./NOTICE.md) — © Paul Bakaus; `reference/ios.md` and `reference/android.md` distilled from [ehmo/platform-design-skills](https://github.com/ehmo/platform-design-skills) (MIT)
**Vendored:** 2026-08-27 — the `impeccable` SKILL.md package @ commit `63b04e2` (CLI **v3.6.1**, skill frontmatter **v4.1.2**). Docs: [impeccable.style](https://impeccable.style).

## What it is

A **frontend craft** skill for AI coding agents: 23 `/impeccable` commands (`init`, `audit`, `critique`, `polish`, `live`, …), `PRODUCT.md` / `DESIGN.md` setup, and **59 deterministic anti-pattern rules**. It started from Anthropic's [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) and adds a shared command vocabulary plus a no-LLM detector.

This hub copy is the **skill + command references + core detector scripts**. It is **not** the full live-browser / detector CLI. For that, run `npx impeccable install` from your project.

**Do not** set as global `alwaysApply` — invoke when the user asks to design, audit, polish, or iterate UI.

## Layout

| Path | Contents |
|------|----------|
| [SKILL.md](./SKILL.md) | Command router, craft floor, setup (`context.mjs`) |
| [reference/](./reference/) | Per-command playbooks (audit, critique, polish, live, new-work, …) |
| [scripts/](./scripts/) | `context.mjs`, pin helper, detector CLI / regex / static-html engines |
| [LICENSE](./LICENSE) | Apache License 2.0 |
| [NOTICE.md](./NOTICE.md) | Third-party notices (platform design skills) |

## Install in this hub

Full live-browser mode, hooks, and the published detector CLI:

```bash
npx impeccable install
```

Non-interactive example:

```bash
npx impeccable install --providers=cursor,claude --scope=project
```

Refresh later with `npx impeccable update`. Then, in the harness: `/impeccable init`.

Or copy/symlink this folder into a skills path (`~/.claude/skills/impeccable`, `~/.agents/skills/impeccable`, or `.cursor/skills/impeccable`). The full CLI wants **Node.js ≥ 22.18.0**. SKILL.md still calls `npx impeccable *` and `node .claude/skills/impeccable/scripts/…` — those paths match a CLI install, not this hub tree.

Claude Code marketplace (slim plugin, not the 345 MB monorepo):

```
/plugin marketplace add pbakaus/impeccable
```

## Pairs with

- [references/design-md/](../../references/design-md/) — Stitch `DESIGN.md` spec; Impeccable's `init` / `document` write a related `DESIGN.md` + `PRODUCT.md`
- [frontend-design](../frontend-design/) — shorter distinctive-UI baseline; Impeccable is the command + detector layer
- [taste-skills](../taste-skills/) — anti-slop landing/portfolio aesthetics
- [web-design-guidelines](../web-design-guidelines/) — Vercel UI audit rules

## Honest notes

- **Upstream is huge (~345 MB)** because it duplicates the same skill into ~15 agent folders (`.claude/`, `.cursor/`, `.agents/`, …). This hub copies **only** `plugin/skills/impeccable/` plus root LICENSE/NOTICE.
- **Omitted from `scripts/`** (use `npx impeccable install` instead):
  - `live-browser.js` — live visual-iteration browser bundle
  - `detector/detect-antipatterns-browser.js` — browser detector build
  - `detector/browser/injected/index.mjs` — in-page injection
  - `modern-screenshot.umd.js` — screenshot helper
- **Kept:** detector CLI, regex engine, static-html engine, and reasonably sized Node helpers. Live-mode `.mjs` orchestration files remain; they will not drive a browser without the omitted bundles.
- **Not a full product substitute.** `init` expects the installed CLI to write `PRODUCT.md` / `DESIGN.md` and optional hooks. This folder is readable playbooks + a partial detector.

## Security note (skill-security-auditor)

A scan **FAIL**s with many CRITICAL hits on Node `child_process` (`execFileSync` / `spawnSync`) in `scripts/`. Same class of finding as [vercel-optimize](../vercel-optimize/) and [archify](../archify/): argument-array shell-outs for git/context/detector CLI, not `shell: true`. Live-browser bundles were omitted from this hub copy.

## Refresh

Sparse-checkout the plugin skill only. Restore this hub README after `rsync`.

```bash
UPSTREAM=/tmp/impeccable-upstream
DEST=cursor-claude-codex/skills/impeccable
git clone --depth 1 --filter=blob:none --sparse https://github.com/pbakaus/impeccable.git "$UPSTREAM"
git -C "$UPSTREAM" sparse-checkout set --skip-checks plugin/skills/impeccable LICENSE NOTICE.md
rsync -a --delete \
  --exclude 'scripts/live-browser.js' \
  --exclude 'scripts/detector/browser/injected/index.mjs' \
  --exclude 'scripts/detector/detect-antipatterns-browser.js' \
  --exclude 'scripts/modern-screenshot.umd.js' \
  --exclude 'README.md' \
  "$UPSTREAM/plugin/skills/impeccable/" "$DEST/"
cp "$UPSTREAM/LICENSE" "$DEST/LICENSE"
cp "$UPSTREAM/NOTICE.md" "$DEST/NOTICE.md"
# restore this README.md from git if overwritten
python3 cursor-claude-codex/skills/alirezarezvani-skills/skill-security-auditor/scripts/skill_security_auditor.py "$DEST"
```

## Attribution

Vendored from [pbakaus/impeccable](https://github.com/pbakaus/impeccable) (Apache-2.0). Original `SKILL.md` is preserved verbatim. LICENSE and NOTICE.md are copied from the upstream repository root. Platform reference files credit [ehmo/platform-design-skills](https://github.com/ehmo/platform-design-skills) (MIT) as described in NOTICE.md.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#pbakausimpeccable).

# blader/humanizer (vendored)

**Source:** [blader/humanizer](https://github.com/blader/humanizer)
**License:** MIT — see [LICENSE](./LICENSE) — © 2025 Siqi Chen
**Vendored:** 2026-08-27 — the root `humanizer` SKILL.md package @ commit `e2e92e7` (`v2.11.2`). Excluded: `.claude-plugin/` and the rest of the upstream repo (CI, marketplace manifests).

## What it is

A single agent skill that **rewrites AI-sounding text so it reads like a person wrote it**, without changing the claims. Thirty-five patterns from Wikipedia's ["Signs of AI writing"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) (WikiProject AI Cleanup): inflated legacy, sales language, stock AI words, forced triads, chatbot artifacts. It keeps facts, names, numbers, and citations from the source; it does not invent details. Optional voice matching from a writing sample.

Works with any agent that loads `SKILL.md`. Invoke with `/humanizer` or `Humanize the prose in <file>`.

## Layout

| Path | Contents |
|------|----------|
| [SKILL.md](./SKILL.md) | 35 patterns, voice matching, return modes |
| [AGENTS.md](./AGENTS.md) | Maintainer notes for editing the package |
| [scripts/validate-package.py](./scripts/validate-package.py) | Package/version consistency check |
| [agents/openai.yaml](./agents/openai.yaml) | Optional OpenAI command wrapper |
| [LICENSE](./LICENSE) | MIT license |

## Install in this hub

```bash
# Cursor / Claude Code / Codex — install upstream for updates
npx skills add blader/humanizer --global
```

Cursor, non-interactive:

```bash
npx -y skills add blader/humanizer --skill humanizer --agent cursor --global --copy --yes
```

Or copy/symlink this folder into your skills path (`~/.claude/skills/`, `~/.agents/skills/`, or `.cursor/skills/`). Then: `Humanize the prose in docs/launch-post.md`.

## Pairs with

- [plain-writing/](../plain-writing/) — plain-language defaults (everyday words, no jargon); Humanizer is AI-tell removal while keeping claims
- [writing-guidelines/](../writing-guidelines/) — Vercel Writing Guidelines compliance audit (brand/style handbook vs Wikipedia AI-writing patterns)

## Refresh

Pin a commit. Do not copy `.claude-plugin/`. Restore this hub README after `rsync`.

```bash
UPSTREAM=/tmp/humanizer-upstream
DEST=cursor-claude-codex/skills/humanizer
git clone --depth 1 https://github.com/blader/humanizer.git "$UPSTREAM"
rsync -a --delete \
  --exclude '.git/' \
  --exclude '.github/' \
  --exclude '.claude-plugin/' \
  --exclude 'README.md' \
  "$UPSTREAM/SKILL.md" "$UPSTREAM/LICENSE" "$UPSTREAM/AGENTS.md" \
  "$UPSTREAM/scripts" "$UPSTREAM/agents" "$DEST/"
# restore this README.md from git if overwritten
python3 "$DEST/scripts/validate-package.py"
```

## Attribution

Vendored from [blader/humanizer](https://github.com/blader/humanizer) (MIT). Pattern list based on Wikipedia's "Signs of AI writing." The MIT LICENSE is preserved verbatim.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#bladerhumanizer).

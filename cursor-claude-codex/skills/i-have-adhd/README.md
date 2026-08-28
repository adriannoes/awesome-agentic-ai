# ayghri/i-have-adhd (vendored)

**Source:** [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)
**License:** MIT — see [LICENSE](./LICENSE) — © 2026 Ayoub Ghriss
**Vendored:** 2026-08-27 — the `i-have-adhd` SKILL.md package @ commit `cbe69fb`. Excluded: `logo.png`, `evals/`, `hooks/`, plugin wrappers (`.cursor/skills/` duplicate, `.claude-plugin`, OpenCode/Gemini/Kimi manifests), and the rest of the upstream repo.

## What it is

An **output-contract** skill: it reshapes every reply for an ADHD reader — lead with the next action, number multi-step work, restate state each turn, suppress tangents, give time in minutes, make wins visible, no preamble or closers. Ten rules. Stays on for the session until the user says `stop adhd mode` or `normal mode`. No ADHD diagnosis required.

Works in Cursor, Claude Code, Codex, Copilot, OpenCode, and other agents that load `SKILL.md`. Invoke with `/i-have-adhd`.

## Layout

| Path | Contents |
|------|----------|
| [SKILL.md](./SKILL.md) | Persistence, 10 rules, exceptions |
| [agents/](./agents/) | Optional OpenAI / Gemini command wrappers |
| [LICENSE](./LICENSE) | MIT license |

## Install in this hub

```bash
# Cursor / Claude Code / Codex — install upstream for updates
npx skills add ayghri/i-have-adhd -g
```

Cursor, non-interactive:

```bash
npx -y skills add ayghri/i-have-adhd --skill i-have-adhd --agent cursor --global --copy --yes
```

Or copy/symlink this folder into your skills path (`~/.claude/skills/`, `~/.agents/skills/`, or `.cursor/skills/`). Then: `/i-have-adhd`.

## Pairs with

No equivalent skill in this hub. This is an output-contract skill — it changes how the agent writes, not what it builds — so it can sit alongside any authoring or diagram skill without overlapping them.

## Refresh

Pin a commit. Copy `skills/i-have-adhd/` only (not `.cursor/skills/`). Do not copy `logo.png`, `evals/`, `hooks/`, or plugin wrappers. Restore this hub README after `rsync`.

```bash
UPSTREAM=/tmp/i-have-adhd-upstream
DEST=cursor-claude-codex/skills/i-have-adhd
git clone --depth 1 https://github.com/ayghri/i-have-adhd.git "$UPSTREAM"
rsync -a --delete --exclude 'README.md' "$UPSTREAM/skills/i-have-adhd/" "$DEST/"
cp "$UPSTREAM/LICENSE" "$DEST/LICENSE"
# restore this README.md from git if overwritten
```

## Attribution

Vendored from [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) (MIT). The MIT LICENSE is preserved verbatim.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#ayghrii-have-adhd).

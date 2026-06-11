# bug-hunter

**Source:** [xiaolai/Claude-BugHunter](https://github.com/xiaolai/Claude-BugHunter) (fork of [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter))  
**License:** MIT — see [LICENSE](./LICENSE)  
**Vendored:** 2026-05-25 — full bundle (51 skills, 14 slash commands, `cbh` CLI, docs)

## What it is

Drop-in skill bundle for **authorized** bug bounty, external web-app pentesting, and external red-team work: methodology, 24+ `hunt-*` classes, enterprise identity/perimeter chains, triage/reporting, and optional Burp integration. Full upstream overview: [UPSTREAM-README.md](./UPSTREAM-README.md).

**Use only on targets you are allowed to test.** See [SECURITY.md](./SECURITY.md).

## Layout

| Path | Contents |
|------|----------|
| [skills/](./skills/) | 51 agent skills (auto-load by topic in Claude Code) |
| [commands/](./commands/) | Slash commands (`/recon`, `/hunt`, `/triage`, `/report`, …) |
| [scripts/](./scripts/) | `install.sh`, `cbh` CLI (Python 3.9+), CVE refresh helpers |
| [docs/](./docs/) | Upstream reference docs |
| [INSTALL.md](./INSTALL.md) · [USAGE.md](./USAGE.md) | Upstream install and usage |

## Install in this hub

### Claude Code

From this directory:

```bash
chmod +x scripts/install.sh
./scripts/install.sh
```

(Adjust paths in `install.sh` if you install from a clone of this vendored tree instead of upstream.)

### Cursor

1. **Skills** — copy or symlink skill folders into your project or user skills path, e.g.:

```bash
# Example: project-local (repeat per skill or loop)
mkdir -p .cursor/skills
for d in cursor-claude-codex/skills/bug-hunter/skills/*/; do
  ln -sf "$(pwd)/$d" ".cursor/skills/$(basename "$d")"
done
```

2. **Commands** — copy [commands/](./commands/) into `.cursor/commands/` (or merge with [cursor-claude-codex/commands/](../../commands/)):

```bash
cp cursor-claude-codex/skills/bug-hunter/commands/*.md .cursor/commands/
```

3. **Optional CLI** — `python3 scripts/cbh.py` for recon/triage automation; Burp proxy/MCP per [INSTALL.md](./INSTALL.md).

Cursor does not auto-load skills by keyword the way Claude Code does; invoke skills explicitly or pair with [skill-auto-activation](../../references/skill-auto-activation.md).

## Pairs with

- [cursor-claude-codex/security/](../../security/) — secure **development** (defensive); bug-hunter is offensive **testing**
- [skill-security-auditor](../alirezarezvani-skills/skill-security-auditor/) — scan third-party skills before install
- [systematic-debugging](../systematic-debugging/) — app bugs after you ship code

## Pre-install audit (hub)

We ran the hub auditor on this tree (expected WARN for bundle root + intentional HTTP in `cbh`):

```bash
python3 cursor-claude-codex/skills/alirezarezvani-skills/skill-security-auditor/scripts/skill_security_auditor.py cursor-claude-codex/skills/bug-hunter/
```

Expect **FAIL** from the generic auditor (offensive payloads, lab apps, `hunt-llm-ai` metadata) — review findings in context; re-run after refreshing from upstream.

## Refresh from upstream

```bash
git clone --depth 1 https://github.com/xiaolai/Claude-BugHunter.git /tmp/bug-hunter-src
rsync -a --exclude='.git' --exclude='README.md' /tmp/bug-hunter-src/ cursor-claude-codex/skills/bug-hunter/
mv cursor-claude-codex/skills/bug-hunter/README.md cursor-claude-codex/skills/bug-hunter/UPSTREAM-README.md
# Restore this hub README from git if overwritten, then re-audit
```

Track [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) if the fork lags behind.

## Attribution

Vendored as-is from upstream on **2026-05-25**. Built by Sachin Sharma (see upstream README). Catalog: [upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#xiaolaiclaude-bughunter).

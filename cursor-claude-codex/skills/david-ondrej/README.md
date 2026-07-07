# David Ondrej skills (vendored)

**Source:** [davidondrej/skills](https://github.com/davidondrej/skills)
**License:** MIT (see [LICENSE](./LICENSE)) — © David Ondrej, 2026
**Vendored:** 2026-07-05 — all **30** skills from upstream `main` (public mirror of David's private `~/.agents` skills repo)

## What it is

David Ondrej's official agent-skills collection — reusable workflows for coding agents, research agents, and workflow agents. Each skill packages a focused workflow into a `SKILL.md` that an agent loads when the task calls for it.

Upstream groups skills into five category folders. This hub mirrors that layout under `david-ondrej/`.

## Why these matter

These skills sit at the intersection of **multi-agent orchestration**, **research workflows**, and **skill meta-authoring**. Highlights:

1. **`effective-agent-skills`** — the most comprehensive single guide to writing `SKILL.md` files we've vendored (anatomy, anti-patterns, testing, security).
2. **`codex-goal-loop`** + **`run-deep-swe`** — Codex `/goal` persistent loops and DeepSWE benchmark evals via OpenRouter.
3. **`browser-harness`** — CDP browser control against a running Chrome (complements Playwright-first approaches).
4. **`research-prompt`** — structured one-paragraph deep-research briefs with numbered sub-questions.
5. **`cmux`** — deep reference for cmux workspace/pane/surface orchestration (macOS 14+).

## Honest assessment

~40% of skills reference David's personal stack (cmux, DeepAPI, Pi Agent, Hermes, VPS hosts, `~/Documents/` paths). **Keep the original `SKILL.md` content** — the value is in the patterns even when the exact paths don't apply to your setup.

| Signal | Notes |
|--------|-------|
| **Depth** | Strong on `cmux` (14 KB), `deepapi` (26 KB), `effective-agent-skills` (15 KB), `browser-harness` (12 KB) |
| **Triggers** | Rich, keyword-heavy descriptions — good for agent routing |
| **Stubs** | `read-all-adrs` is a TODO stub upstream |
| **Lock-in** | `deepapi`, `deep-research`, `pi-web-search`, `cmux`, `vps-server-management`, `cyber-audit` need specific infra |

## Overlaps with skills already in this hub

| David Ondrej skill | Existing hub skill | Which to use |
|--------------------|-------------------|--------------|
| `thinking-and-docs/grill-me` | [matt-pocock/productivity/grill-me](../matt-pocock/productivity/grill-me/) | Matt's is the hub default for non-code grilling. David's adds a `codebase-explore` instruction. |
| `agent-orchestration/handoff` | [matt-pocock/productivity/handoff](../matt-pocock/productivity/handoff/) + [igoruehara-spec-driven/skills/handoff](../igoruehara-spec-driven/skills/handoff/) | Matt's adds temp-dir save, redaction, suggested-skills. Igor's is SDD-specific. |
| `thinking-and-docs/teach` | [matt-pocock/productivity/teach](../matt-pocock/productivity/teach/) | Both ship `*-FORMAT.md` companions. Compare and pick one for flat installs. |
| `browser-harness` | Cursor `control-ui` (not vendored here) | CDP/Chrome vs Playwright — complementary |
| `effective-agent-skills` | [writing-skills](../writing-skills/) (obra) + [matt-pocock/productivity/writing-great-skills](../matt-pocock/productivity/writing-great-skills/) | David's is the longest consolidated meta-guide; use alongside obra/Matt |
| `folder-specific-claude-and-agents-md` | Cursor `create-rule` (built-in) | Different artifacts (`CLAUDE.md`/`AGENTS.md` vs `.cursor/rules/`) |

If you symlink skills flat into `~/.claude/skills/` or `~/.agents/skills/`, **pick one version** for colliding `name:` frontmatter (`grill-me`, `handoff`, `teach`).

## Skills (30 across 5 categories)

### agent-orchestration/ (8)

| Skill | What it does |
|-------|--------------|
| [agent-self-scheduling](./agent-orchestration/agent-self-scheduling/SKILL.md) | Schedule/loop agents via cron, heartbeats, systemd; external clocks vs Hermes built-in scheduler |
| [cmux](./agent-orchestration/cmux/SKILL.md) | **Must-read** for any cmux interaction — workspaces, panes, surfaces, delegation, browser automation (macOS 14+) |
| [codex-goal-loop](./agent-orchestration/codex-goal-loop/SKILL.md) | Write effective instructions for OpenAI Codex `/goal` persistent self-checking loop |
| [delegating-to-agents](./agent-orchestration/delegating-to-agents/SKILL.md) | Delegate to Pi, Codex, Claude Code, Hermes; agent selection, TUI prompts, polling |
| [fable-safe-prompt](./agent-orchestration/fable-safe-prompt/SKILL.md) | Rewrite prompts to avoid Claude Fable 5 safety classifiers on dual-use/cyber topics |
| [handoff](./agent-orchestration/handoff/SKILL.md) | Compact conversation into copy-paste handoff for fresh agent session |
| [markdown-rendering](./agent-orchestration/markdown-rendering/SKILL.md) | Open `.md` in cmux right pane without blank-render bug |
| [run-deep-swe](./agent-orchestration/run-deep-swe/SKILL.md) | Score models on DeepSWE benchmark via OpenRouter API |

### ops-and-setup/ (5)

| Skill | What it does |
|-------|--------------|
| [anti-sleep](./ops-and-setup/anti-sleep/SKILL.md) | Keep MacBook awake with `caffeinate` |
| [cyber-audit](./ops-and-setup/cyber-audit/SKILL.md) | Read-only CVE/breach exposure audit on David's MacBook → `~/Documents/security-audits/` |
| [pi-custom-model](./ops-and-setup/pi-custom-model/SKILL.md) | Register custom OpenRouter variant models in Pi Agent |
| [setup-help](./ops-and-setup/setup-help/SKILL.md) | Step-by-step setup walkthrough, one step at a time + remaining steps list |
| [vps-server-management](./ops-and-setup/vps-server-management/SKILL.md) | Manage David's VPS servers and remote agents via SSH |

### research-and-web/ (7)

| Skill | What it does |
|-------|--------------|
| [browser-harness](./research-and-web/browser-harness/SKILL.md) | CDP browser control; connects to running Chrome (includes `references/install.md`) |
| [deep-research](./research-and-web/deep-research/SKILL.md) | Full deep-research workflow via DeepAPI `POST /v1/research/deep` |
| [deepapi](./research-and-web/deepapi/SKILL.md) | DeepAPI scraping + email (`DEEPAPI_API_BASE_URL`, `DEEPAPI_API_KEY`) |
| [pi-web-search](./research-and-web/pi-web-search/SKILL.md) | **Pi-only** web access via `pi-web-access` (Exa MCP → Perplexity → Gemini) |
| [research-prompt](./research-and-web/research-prompt/SKILL.md) | Write single-paragraph deep-research brief with numbered sub-questions |
| [youtube-polls](./research-and-web/youtube-polls/SKILL.md) | Create/track/analyze YouTube community polls for audience research |
| [youtube-transcript](./research-and-web/youtube-transcript/SKILL.md) | Fetch YouTube transcripts via DeepAPI primary, yt-dlp fallback |

### skill-authoring/ (4)

| Skill | What it does |
|-------|--------------|
| [distribute-skill-to-all-agents](./skill-authoring/distribute-skill-to-all-agents/SKILL.md) | Symlink skills across Codex, Claude Code, Pi, Hermes folders |
| [effective-agent-skills](./skill-authoring/effective-agent-skills/SKILL.md) | Comprehensive skill authoring guide — anatomy, anti-patterns, testing, security |
| [folder-specific-claude-and-agents-md](./skill-authoring/folder-specific-claude-and-agents-md/SKILL.md) | Create folder-scoped `CLAUDE.md` + `AGENTS.md` symlink |
| [push-skill-to-github](./skill-authoring/push-skill-to-github/SKILL.md) | Commit/push to private skills repo; auto-publishes sanitized public mirror |

### thinking-and-docs/ (6)

| Skill | What it does |
|-------|--------------|
| [brain-to-docs](./thinking-and-docs/brain-to-docs/SKILL.md) | Extract project vision/decisions into README + ADRs via Q&A loop |
| [grill-me](./thinking-and-docs/grill-me/SKILL.md) | Relentless interview to stress-test a plan/design |
| [interview-style-doc-building](./thinking-and-docs/interview-style-doc-building/SKILL.md) | Build strategic docs one question at a time, patch file incrementally |
| [read-all-adrs](./thinking-and-docs/read-all-adrs/SKILL.md) | Read all ADRs in `docs/adr/` (TODO stub upstream) |
| [short](./thinking-and-docs/short/SKILL.md) | Compress last response — strip filler, keep substance |
| [teach](./thinking-and-docs/teach/SKILL.md) | Stateful multi-session teaching with glossary/mission/learning records (+ 4 `*-FORMAT.md` files) |

## Install upstream (alternative)

```bash
git clone https://github.com/davidondrej/skills ~/.agents/skills-davidondrej
```

Or copy individual skill folders into your agent's skills path (`~/.claude/skills/`, `~/.agents/skills/`, or `.cursor/skills/`).

## Attribution

All 30 skills + LICENSE are vendored as-is from [davidondrej/skills](https://github.com/davidondrej/skills) (MIT License, Copyright 2026 David Ondrej). When using or adapting one, credit David and link to the original.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#davidondrejskills).

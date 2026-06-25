# Alireza Rezvani — vendored skills

**Source:** [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)  
**License:** MIT — see [LICENSE](./LICENSE) (repository default; `playwright-pro/` also ships a per-plugin copy).  
**Vendored:** 2026-06-25 (refreshed; originally 2026-05-17) — two high-signal packages we do not duplicate elsewhere in this hub.

## Honest assessment

Upstream is a **large, breadth-first** library (~345 skills across engineering, engineering-team, research-ops, marketing, finance, product-team, compliance-os, and more). We only vendor pieces that **close real gaps** here: **skill supply-chain audit** and **Playwright/E2E depth**. For the full marketplace, plugin install, and Cursor conversion scripts, use the upstream repo — see [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#alirezarezvaniclaude-skills).

### Skills we deliberately did NOT vendor (available upstream)

The v2.9.0 release added several engineering skills and a `research-ops` domain. They are useful but either niche or outside this hub's "product builders / vibe coding" scope, so they stay link-only:

| Upstream skill | What it does | Why not vendored here |
|----------------|--------------|----------------------|
| `engineering/workflow-builder` | Author deterministic multi-agent workflow scripts for Claude Code's Workflow tool (`CLAUDE_CODE_WORKFLOWS=1`) | Tied to a Claude Code preview feature flag; vendor when it stabilizes |
| `engineering/claude-coach` | Teaches users to be Claude power users | Product-coaching, not engineering workflow |
| `engineering/collab-proof` | Analyze what Claude contributed vs what the user drove in a session | Session-retrospective niche |
| `engineering/universal-scraping-architect` | Scraping/crawling pipelines with Firecrawl | Scraping niche; pull if you build data pipelines |
| `research-ops/*` (clinical, market, product, finance) | Enterprise research-ops: clinical study design, TAM/SAM/SOM, R&D budgets | Out of scope for product builders / vibe coding |

Install any of them upstream:

```bash
/plugin marketplace add alirezarezvani/claude-skills
```

## Packages (2)

### `skill-security-auditor/`

- **What:** Python stdlib scanner for skills/plugins before install — PASS / WARN / FAIL, optional `--strict` and `--json`.
- **Pairs with:** [cursor-claude-codex/security/](../../security/) and vendoring workflows in [skills/README.md](../README.md).
- **Run (from this folder):**

```bash
python3 skill-security-auditor/scripts/skill_security_auditor.py /path/to/some-skill/
```

### `playwright-pro/`

- **What:** Claude Code plugin layout — multiple `skills/*/SKILL.md`, agents, hooks, templates, optional MCP integration stubs (TypeScript under `integrations/` — install deps only if you use those MCPs).
- **Pairs with:** [test-driven-development](../test-driven-development/) (unit bias) and [verification-before-completion](../verification-before-completion/).
- **Note:** Upstream docs say `claude --plugin-dir ./engineering-team/playwright-pro`. In this hub the path is **`cursor-claude-codex/skills/alirezarezvani-skills/playwright-pro`**.

## Installation (upstream)

Prefer marketplace or full clone if you want every domain (marketing, regulatory, research, …):

```bash
/plugin marketplace add alirezarezvani/claude-skills
```

Cursor-native rules (optional):

```bash
./scripts/install.sh --tool cursor --target /path/to/project
```

(Run the install script from a checkout of [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills), not from this vendored subtree.)

## Attribution

Vendored as-is from upstream, refreshed on **2026-06-25** (originally 2026-05-17). Paths under `skill-security-auditor/` match upstream `engineering/skills/skill-security-auditor/`. `playwright-pro/` matches `engineering-team/playwright-pro/` (plugin version bumped 2.2.2 → 2.9.0; `skills` field is now an array).

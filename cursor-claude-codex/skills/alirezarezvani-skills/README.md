# Alireza Rezvani — vendored skills

**Source:** [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)  
**License:** MIT — see [LICENSE](./LICENSE) (repository default; `playwright-pro/` also ships a per-plugin copy).  
**Vendored:** 2026-05-17 — two high-signal packages we do not duplicate elsewhere in this hub.

## Honest assessment

Upstream is a **large, breadth-first** library (hundreds of skills). We only vendor pieces that **close real gaps** here: **skill supply-chain audit** and **Playwright/E2E depth**. For the full marketplace, plugin install, and Cursor conversion scripts, use the upstream repo — see [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#alirezarezvaniclaude-skills).

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

Vendored as-is from upstream on **2026-05-17**. Paths under `skill-security-auditor/` match upstream `engineering/skills/skill-security-auditor/`. `playwright-pro/` matches `engineering-team/playwright-pro/`.

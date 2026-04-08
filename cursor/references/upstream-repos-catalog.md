# Upstream repositories catalog

Curated notes on external repos that complement **Cursor**, **Claude Code**, and **vibe coding** workflows.  
Most entries are **link-only**; two Vercel **SKILL.md** summaries are also vendored under [cursor/skills/](../skills/README.md) (see the Vercel section below). All descriptions reflect public READMEs and repository layout as of the exploration date.

| Repo | Upstream |
|------|----------|
| Vercel Agent Skills | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| Code Review Graph | [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) |
| Awesome DESIGN.md | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) |
| claude-md (hooks + CLAUDE.md) | [iamfakeguru/claude-md](https://github.com/iamfakeguru/claude-md) |
| Claw Code | [ultraworkers/claw-code](https://github.com/ultraworkers/claw-code) |
| Agentic AI prompt research | [Leonxlnx/agentic-ai-prompt-research](https://github.com/Leonxlnx/agentic-ai-prompt-research) |
| HumanLayer / CodeLayer | [humanlayer/humanlayer](https://github.com/humanlayer/humanlayer) |
| Harness (agent teams) | [revfactory/harness](https://github.com/revfactory/harness) |

---

## [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)

**License:** MIT (per upstream README).

**What it is:** Official Vercel collection of **Agent Skills** (packaged instructions; optional scripts). Skills follow the Agent Skills format (`SKILL.md`, optional `scripts/`, `references/`).

**Layout explored:** `skills/` contains topical packages, including:

- `react-best-practices` — React / Next.js performance rules
- `web-design-guidelines` — UI review (accessibility, UX, performance)
- `react-native-guidelines` — React Native / Expo
- `react-view-transitions` — View Transition API and Next.js
- `composition-patterns` — scalable React composition
- `deploy-to-vercel` — claimable deployments from agent chats
- `vercel-cli-with-tokens` — CLI usage with tokens

**Use here:** Install upstream (optional; keeps you aligned with latest skill packaging):

```bash
npx skills add vercel-labs/agent-skills
```

**Vendored in this hub (summary `SKILL.md` only):** [web-design-guidelines](../skills/web-design-guidelines/SKILL.md), [react-best-practices](../skills/react-best-practices/SKILL.md). Detailed React rule files (`rules/*.md`) and compiled `AGENTS.md` are **not** copied; fetch from the upstream paths linked in those skills.

**Fit for this hub:** Complements [cursor/skills/README.md](../skills/README.md) and [cursor/best-practices/](../best-practices/) for frontend and UI audits.

---

## [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)

**What it is:** Local **knowledge graph** for Claude Code: persistent map of the codebase so reviews and daily work ingest fewer irrelevant tokens (upstream claims large token reductions; verify in your own projects).

**Layout explored (root):** `.mcp.json`, `CLAUDE.md`, `CHANGELOG.md`, `.github/` — typical Claude Code + MCP integration layout.

**Use here:** Clone or follow upstream install in a project where you want graph-backed context. Keep this repo as a **pointer only** unless you decide to submodule or document a specific setup.

**Fit for this hub:** Pairs with [cursor/commands/code-review.md](../commands/code-review.md) and code-review workflows; advanced context engineering.

---

## [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)

**License:** MIT (per upstream README).

**What it is:** Curated **`DESIGN.md`** files (Stitch-style design system descriptions) derived from public sites, plus `preview.html` / `preview-dark.html` per theme under `design-md/<site>/`.

**Use here:** Copy a single site's `DESIGN.md` into a product prototype and ask your agent to match UI (upstream workflow). Do not mirror the whole collection in this repo.

**Fit for this hub:** Strong match for **Product Builders** and designers — see [main README](../../README.md) audience.

---

## [iamfakeguru/claude-md](https://github.com/iamfakeguru/claude-md)

**What it is:** **Production-style `CLAUDE.md` plus shell hooks** under `.claude/hooks/` (verify after edits, block destructive commands, truncation checks, etc.). Addresses common Claude Code failure modes via mechanical hooks.

**Layout explored:** `CLAUDE.md`, `install.sh`, `.claude/` (hooks, settings).

**Use here:** Prefer upstream install in your own project:

```bash
curl -sL https://raw.githubusercontent.com/iamfakeguru/claude-md/main/install.sh | bash -s .
```

Review hook behavior before running; adapt commands to your stack (TypeScript vs Python, etc.).

**Fit for this hub:** Complements [cursor/security/](../security/) and team discipline docs; does **not** replace reading Anthropic’s own Claude Code docs.

---

## [ultraworkers/claw-code](https://github.com/ultraworkers/claw-code)

**What it is:** Public **Rust** implementation of the `claw` CLI agent harness; canonical code in `rust/`, with `USAGE.md`, `PARITY.md`, `PHILOSOPHY.md`. Companion Python/reference under `src/` and `tests/`.

**Use here:** Build from `rust/` if you want a standalone CLI; this hub stays documentation-only unless you add an explicit submodule later.

**Fit for this hub:** Ecosystem reference next to [openclaw/README.md](../../openclaw/README.md) (different project; name similarity only).

---

## [Leonxlnx/agentic-ai-prompt-research](https://github.com/Leonxlnx/agentic-ai-prompt-research)

**What it is:** Educational **reconstructed prompt patterns** for agentic coding assistants (orchestration, sub-agents, permissions, compaction, skills). Files live in `prompts/`.

**Disclaimer (upstream):** Reconstructions from observation — not official leaks.

**Use here:** Cross-read with [prompt-engineering/README.md](../../prompt-engineering/README.md). Link only; do not treat as vendor truth.

**Fit for this hub:** Research track alongside [cursor/references/agentic-patterns.md](./agentic-patterns.md).

---

## [humanlayer/humanlayer](https://github.com/humanlayer/humanlayer)

**What it is:** Monorepo for **CodeLayer** (agent orchestration IDE built on Claude Code) and the **HumanLayer** SDK; Turbo/Bun workspace, Go and TypeScript, docs under `docs/`.

**Use here:** Follow upstream releases and `README.md` for install / waitlist. Not vendored here.

**Fit for this hub:** “Scale agents across a team” angle — useful for advanced readers exploring beyond Cursor-only flows.

---

## [revfactory/harness](https://github.com/revfactory/harness)

**License:** Apache-2.0 (per upstream README).

**What it is:** Claude Code **plugin / meta-skill** that designs **agent teams**, generates `.claude/agents/` and `.claude/skills/` for a domain. Includes `skills/harness/SKILL.md` and reference markdown under `references/`.

**Install (upstream):** Marketplace flow documented in their README (`/plugin marketplace add`, `/plugin install`).

**Use here:** Trigger prompts like “Build a harness for this project” inside Claude Code after install.

**Fit for this hub:** Extends multi-agent thinking beyond [cursor/references/agentic-patterns.md](./agentic-patterns.md).

---

## Maintenance

When adding new upstream repos to this hub: extend this catalog, then link it from [references/README.md](./README.md) and from [nice-projects/README.md](../../nice-projects/README.md) if the entry is also a “project to watch.”

# Upstream repositories catalog

Curated notes on external repos that complement **Cursor**, **Claude Code**, and **vibe coding** workflows.  
**Vendored** entries live under [cursor-claude-codex/skills/](../skills/README.md), [tools/](../tools/), or [references/design-md/](./design-md/); **link-only** entries are catalogued here for discovery. All descriptions reflect public READMEs and repository layout as of the exploration date.

**See also:** [nice-projects/README.md](../../nice-projects/README.md) (projects to watch) · [openclaw/README.md](../../openclaw/README.md) (OpenClaw ecosystem)

| Repo | Vendored? | Upstream |
|------|-----------|----------|
| Vercel Agent Skills | ✅ partial/full | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| Superpowers (core skills) | ✅ 14 skills | [obra/superpowers](https://github.com/obra/superpowers) |
| Claude BugHunter | ✅ 51 skills | [xiaolai/Claude-BugHunter](https://github.com/xiaolai/Claude-BugHunter) |
| Anthropic Cybersecurity Skills | ✅ 109 skills | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) |
| Taste skills (anti-slop UI) | ✅ 13 skills | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
| Skills for Real Engineers | ✅ 20 skills | [mattpocock/skills](https://github.com/mattpocock/skills) |
| Claude Skills (security + E2E) | ✅ 11 skills | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| Claude Code Plugins + Skills | ✅ 50 skills (2 cats) | [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) |
| DESIGN.md spec (Google Labs) | ✅ spec + 3 examples | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) |
| Codex profile switcher | ✅ CLI snapshot | [Ducksss/codex-profiles](https://github.com/Ducksss/codex-profiles) |
| Harness (agent teams) | ✅ meta-skill | [revfactory/harness](https://github.com/revfactory/harness) |
| Agent stuff (design + changelog) | ✅ 2 skills + command | [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) |
| Karpathy LLM guidelines | ✅ 1 rule file | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) |
| Agentic patterns | ✅ reference doc | [nibzard/awesome-agentic-patterns](https://github.com/nibzard/awesome-agentic-patterns) |
| Autoresearch | ✅ 1 skill | [karpathy/autoresearch](https://github.com/karpathy/autoresearch) |
| Cursor commands | ✅ 8 commands | [hamzafer/cursor-commands](https://github.com/hamzafer/cursor-commands) |
| Awesome OpenClaw skills index | ✅ snapshot | [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) |
| Awesome Claws (derivatives) | ✅ snapshot | [machinae/awesome-claws](https://github.com/machinae/awesome-claws) |
| Code Review Graph | ❌ link only (now released, MIT) | [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) |
| Awesome DESIGN.md | ❌ link only | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) |
| agent-md (hooks + directives, renamed from claude-md) | ❌ link only | [iamfakeguru/agent-md](https://github.com/iamfakeguru/agent-md) |
| Claw Code | ❌ link only | [ultraworkers/claw-code](https://github.com/ultraworkers/claw-code) |
| Agentic AI prompt research | ❌ link only | [Leonxlnx/agentic-ai-prompt-research](https://github.com/Leonxlnx/agentic-ai-prompt-research) |
| HumanLayer / CodeLayer | ❌ link only (repo deprecated → humanlayer.com) | [humanlayer/humanlayer](https://github.com/humanlayer/humanlayer) |
| Claude Code Showcase | ❌ reference only | [ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase) |
| NotFair (SEO & paid ads) | ❌ link only | [nowork-studio/NotFair](https://github.com/nowork-studio/NotFair) |
| spec-driven (SDD pipeline, pt-BR) | ✅ 15 skills + templates | [igoruehara/spec-driven](https://github.com/igoruehara/spec-driven) |
| NVIDIA skills (official catalog) | ❌ link only | [NVIDIA/skills](https://github.com/NVIDIA/skills) |
| learning_research (research methodology) | ❌ link only | [pengsida/learning_research](https://github.com/pengsida/learning_research) |
| Loop Library (bounded agent loops) | ✅ 1 skill | [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library) |
| Research Paper Writing | ✅ 1 skill | [Master-cai/Research-Paper-Writing-Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills) |
| Awesome Agent Evals (eval reference catalog) | ✅ README + PATTERNS + 146 notes | [benchflow-ai/awesome-evals](https://github.com/benchflow-ai/awesome-evals) |
| LLMs-from-scratch (notebooks) | ✅ 66 notebooks | [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) |
| smol-course (alignment notebooks) | ✅ 12 notebooks | [huggingface/smol-course](https://github.com/huggingface/smol-course) |
| OpenAI Cookbook (eval/RAG notebooks) | ❌ link only | [openai/openai-cookbook](https://github.com/openai/openai-cookbook) |

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
- `vercel-optimize` — observability-first Vercel cost/perf optimization audit (metrics → gates → recommendations)
- `writing-guidelines` — review docs/prose against Vercel's Writing Guidelines

**Use here:** Install upstream (optional; keeps you aligned with latest skill packaging):

```bash
npx skills add vercel-labs/agent-skills
```

**Vendored in this hub (as of 2026-06-25):**
- [web-design-guidelines](../skills/web-design-guidelines/SKILL.md) — summary SKILL.md only
- [react-best-practices](../skills/react-best-practices/SKILL.md) — summary SKILL.md only
- [composition-patterns](../skills/composition-patterns/) — **full** (SKILL.md + AGENTS.md + README + rules/)
- [react-view-transitions](../skills/react-view-transitions/) — **full** (SKILL.md + AGENTS.md + README + references/)
- [react-native-skills](../skills/react-native-skills/) — **full** (SKILL.md + AGENTS.md + README + rules/)
- [deploy-to-vercel](../skills/deploy-to-vercel/) — **full** (SKILL.md + resources/, excluding upstream `Archive.zip`)
- [vercel-cli-with-tokens](../skills/vercel-cli-with-tokens/) — **full** (SKILL.md)
- [vercel-optimize](../skills/vercel-optimize/) — **full** (SKILL.md + AGENTS.md + README + lib/ + scripts/ + references/) — added 2026-06-25
- [writing-guidelines](../skills/writing-guidelines/SKILL.md) — summary SKILL.md (hub-adapted with live-rule WebFetch flow)

For `web-design-guidelines` and `react-best-practices`, detailed rule files remain upstream — fetch from the links inside each summary SKILL.md.

**Fit for this hub:** Complements [cursor-claude-codex/skills/README.md](../skills/README.md) and [cursor-claude-codex/best-practices/](../best-practices/) for frontend and UI audits.

---

## [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)

**License:** MIT. **~18.9k stars.** Latest release **v2.3.6** (2026-06-10).

**What it is:** Local **knowledge graph** for Claude Code: a persistent map of the codebase so reviews and daily work ingest fewer irrelevant tokens (upstream claims large token reductions; a benchmark pipeline with a Token Savings panel is now shipped). Has matured from an early pointer into a released project with a GitHub Action for risk-scored PR review, custom-language support, Windows daemon fixes, issue/PR templates, and dependabot.

**Layout explored (root):** `.mcp.json`, `CLAUDE.md`, `CHANGELOG.md`, `.github/workflows/` (PR-review Action), issue/PR templates — typical Claude Code + MCP integration layout.

**Use here:** Clone or follow upstream install in a project where you want graph-backed context. Now stable enough (MIT, releases, LICENSE) to either vendor a pinned snapshot or document a setup recipe — previously link-only because it was immature.

**Fit for this hub:** Pairs with [cursor-claude-codex/commands/code-review.md](../commands/code-review.md) and code-review workflows; advanced context engineering. Still treated as **link-only** here (it's an installed tool, not a skill bundle), but upgraded from "immature pointer" to "released, benchmarked project."

---

## [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)

**License:** MIT (per upstream README).

**What it is:** Curated **`DESIGN.md`** files (Stitch-style design system descriptions) derived from public sites, plus `preview.html` / `preview-dark.html` per theme under `design-md/<site>/`.

**Use here:** Copy a single site's `DESIGN.md` into a product prototype and ask your agent to match UI (upstream workflow). Do not mirror the whole collection in this repo.

**Fit for this hub:** Strong match for **Product Builders** and designers — see [main README](../../README.md) audience.

**See also:** [google-labs-code/design.md](#google-labs-codedesignmd) — the official format specification that VoltAgent's collection follows. We vendor the Google Labs spec + 3 examples under [references/design-md/](./design-md/).

---

## [iamfakeguru/agent-md](https://github.com/iamfakeguru/agent-md) *(renamed from `iamfakeguru/claude-md`)*

**License:** MIT. **~955 stars.** Latest **v4.1 "Archimedes"** (2026-04).

**What it is:** A cross-agent **directives + hooks** package — the project was renamed from `claude-md` to `agent-md` and broadened from Claude-only to Claude, Codex, Cursor, Windsurf, and Aider. `CLAUDE.md` is now scoped as `AGENT.md`. v4 adds real enforcement, installer safety + Aider activation, JSON hygiene, a test harness + CI, structured evidence, and a merge-aware installer; v3 introduced hooks + directives; v4.1 consolidates five phases of runtime-contract lessons.

**Layout explored:** `AGENT.md`, `install.sh`, `.claude/` (hooks, settings) — installable across multiple agents.

**Use here:** Prefer upstream install in your own project:

```bash
curl -sL https://raw.githubusercontent.com/iamfakeguru/agent-md/main/install.sh | bash -s .
```

Review hook behavior before running; adapt commands to your stack (TypeScript vs Python, etc.).

**Fit for this hub:** Complements [cursor-claude-codex/security/](../security/) and team discipline docs; does **not** replace reading Anthropic's own Claude Code docs. Still **link-only** (a directives file users install, not a skill bundle).

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

**Fit for this hub:** Research track alongside [cursor-claude-codex/references/agentic-patterns.md](./agentic-patterns.md).

---

## [humanlayer/humanlayer](https://github.com/humanlayer/humanlayer) *(GitHub repo deprecated)*

**What it is:** Monorepo for **CodeLayer** (agent orchestration IDE built on Claude Code) and the **HumanLayer** SDK; Turbo/Bun workspace, Go and TypeScript, docs under `docs/`. **~11k stars, Apache-2.0.**

**Status (2026-06):** The GitHub repo is effectively deprecated — its README now states "the code here is pretty much all deprecated" and the rebuild has moved to [humanlayer.com](https://humanlayer.com). CodeLayer nightly releases stopped after 2026-02-27; nightly CI was disabled in Oct 2025. The repo remains a public-issues shell.

**Use here:** For the current product, go to [humanlayer.com](https://humanlayer.com) rather than this repo. Not vendored here.

**Fit for this hub:** "Scale agents across a team" angle — useful for advanced readers exploring beyond Cursor-only flows, but treat the GitHub repo as historical reference only.

---

## [revfactory/harness](https://github.com/revfactory/harness)

**License:** Apache-2.0 (per upstream README).

**What it is:** Claude Code **plugin / meta-skill** that designs **agent teams**, generates `.claude/agents/` and `.claude/skills/` for a domain. Includes `skills/harness/SKILL.md` and reference markdown under `references/`.

**Install (upstream):** Marketplace flow documented in their README (`/plugin marketplace add`, `/plugin install`).

**Use here:** Trigger prompts like “Build a harness for this project” inside Claude Code after install.

**Vendored in this hub (as of 2026-06-25):** [skills/harness/](../skills/harness/) — full skill (SKILL.md + references/), refreshed to upstream @ 2026-06-10 (adds Phase 3-0 "duplicate agent review" and Phase 4-0 "duplicate skill review" guidelines, plus detectLang validation and clipboard insecure-context fallback fixes). ⚠️ Upstream SKILL.md body is still in **Korean**; useful if you read Korean or want to study the pattern of a meta-skill that bootstraps domain-specific agent teams. For an English-first alternative, see our own [cursor-claude-codex/references/agentic-patterns.md](./agentic-patterns.md).

**Fit for this hub:** Extends multi-agent thinking beyond [cursor-claude-codex/references/agentic-patterns.md](./agentic-patterns.md).

---

## [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff)

**License:** Apache-2.0 (per upstream `LICENSE`). Latest tagged release **1.6.0** (2026-04-17); HEAD @ 2026-06-21.

**What it is:** Armin Ronacher's (mitsuhiko) personal collection of Claude Code **skills, commands, and themes**. Small, opinionated, and high-quality — the opposite of a breadth-first marketplace.

**Upstream layout (2026-06-21):** The repo was restructured in April. `commands/` now holds only `discuss.md`; the `git-commit` command moved into `skills/commit/SKILL.md`. `skills/` grew to 18 packages: `anachb`, `apple-mail`, `commit`, `frontend-design`, `ghidra` (+ Java export scripts), `github`, `google-workspace`, `librarian`, `native-web-search`, `oebb-scotty`, `openscad`, `pi-share`, `sentry`, `summarize`, `tmux`, `uv`, `update-changelog`, `web-browser`. New `themes/` (e.g., `dayowl`).

**Vendored in this hub (as of 2026-06-25):**
- [skills/frontend-design/](../skills/frontend-design/) — refreshed to the expanded upstream version (new Detail & Atmosphere, Motion & Interaction, Deliverables sections; handcrafted/organic aesthetic added)
- [skills/update-changelog/](../skills/update-changelog/) — refreshed (expanded ground rules, more good/bad examples, default-branch-name note)
- [commands/git-commit.md](../commands/git-commit.md) — Cursor slash command (hub-adapted format with Steps); content tracks upstream `skills/commit/SKILL.md`, including the "no sign-offs" rule. We keep it as a **command** (not a skill) because it is invoked as `/git-commit` in Cursor.

**What we did NOT vendor:** the 15+ newer skills (`sentry`, `web-browser`, `google-workspace`, `librarian`, `summarize`, `native-web-search`, `ghidra`, `tmux`, `uv`, `github`, `apple-mail`, `openscad`, `oebb-scotty`, `anachb`, `pi-share`) — they are useful but niche (specific services/tools) and outside the hub's "close real gaps" policy. Install upstream directly to get them.

**Install upstream (alternative):**

```bash
git clone https://github.com/mitsuhiko/agent-stuff
# copy desired skills/ or commands/ into your .claude/ or project
```

**Fit for this hub:** `frontend-design` and `update-changelog` close gaps we do not duplicate elsewhere (distinctive-UI aesthetic; changelog discipline). `git-commit` is one of our 8 slash commands.

---

## [ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase)

**License:** ⚠️ None declared at the time of writing — treat as *all rights reserved*. Reference and learn from the patterns; do not vendor files into this repo.

**What it is:** A comprehensive, working example of a real-world Claude Code project configuration — ~5.8k stars. Shows a full `.claude/` + `.github/` layout with hooks, skills, agents, commands, MCP integration, and GitHub Actions for automated review and maintenance.

**Layout explored (root):**
- `CLAUDE.md` — project memory
- `.mcp.json` — MCP servers (e.g., ticket-system integration)
- `.claude/settings.json` + `settings.md` — hooks, environment, permissions
- `.claude/agents/` — `code-reviewer.md`, `github-workflow.md`
- `.claude/commands/` — `code-quality.md`, `docs-sync.md`, `onboard.md`, `pr-review.md`, `pr-summary.md`, `ticket.md`
- `.claude/hooks/` — `skill-eval.sh`, `skill-eval.js`, `skill-rules.json` (auto-activation engine — see below)
- `.claude/skills/` — `core-components`, `formik-patterns`, `graphql-schema`, `react-ui-patterns`, `systematic-debugging`, `testing-patterns`
- `.github/workflows/` — 4 production-grade Claude Code workflows (see below)

**Three patterns worth studying:**

1. **Scheduled Claude Code GitHub Actions.** Four workflows the community rarely ships together:
   - `pr-claude-code-review.yml` — auto PR review on `opened|synchronize|reopened` and on `@claude` mentions in comments
   - `scheduled-claude-code-dependency-audit.yml` — biweekly dependency audits with test verification
   - `scheduled-claude-code-docs-sync.yml` — monthly: reads last-month commits and realigns docs
   - `scheduled-claude-code-quality.yml` — weekly: reviews random directories and auto-fixes issues

2. **Skill auto-activation via `UserPromptSubmit` hook.** `skill-eval.js` reads the prompt and scores it against `skill-rules.json` (JSON Schema provided) using keywords, regex patterns, file paths, directory mappings, intent patterns, and content patterns. The top matches are surfaced as skill suggestions before Claude responds.

3. **MCP + ticket system (`/ticket` command).** Read ticket → understand requirements → implement → update status → create bug tickets if needed. Shows MCP used for real product loops, not demos.

**Use here:** Read the upstream README (~31 KB, excellent walkthrough) and copy patterns (not files) into your own project. Pair with [cursor-claude-codex/best-practices/hooks-guide.md](../best-practices/hooks-guide.md) and [cursor-claude-codex/best-practices/mcp-guide.md](../best-practices/mcp-guide.md).

**Fit for this hub:** Complements our skills/commands/hooks coverage with a **scheduled automation** angle and a **skill-routing hook** idea we don't otherwise document. Because of the missing license, this entry stays link-only.

---

## [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills)

**License:** MIT (per upstream README).

**What it is:** An open-source **marketplace** of Claude Code plugins and agent skills — ~2.4k stars. Ships **425 plugins, 2,810 skills, and 200 agents** (schema `3.11.0`), distributed via the `ccpi` CLI and web catalog at tonsofskills.com. The `skills/` directory contains **500 standalone skills organized into 20 categories × 25 skills each**. Plugin categories live under `plugins/` (e.g., `plugins/mcp/`, `plugins/design/`, `plugins/business-tools/`).

**Categories (from `skills/README.md`):**

| # | Category | Focus |
|---|----------|-------|
| 01 | devops-basics | CI/CD, containers, infrastructure basics |
| 02 | devops-advanced | GitOps, service mesh, observability |
| 03 | security-fundamentals | Auth, encryption, vulnerability scanning |
| 04 | security-advanced | Zero-trust, threat modeling, DevSecOps |
| 05 | frontend-dev | React, Vue, performance, accessibility |
| 06 | backend-dev | API design, databases, microservices |
| 07 | ml-training | Data preprocessing, model training |
| 08 | ml-deployment | MLOps, model serving, inference |
| 09 | test-automation | Unit, integration, e2e testing |
| 10 | performance-testing | Load testing, benchmarking, profiling |
| 11 | data-pipelines | ETL, streaming, orchestration |
| 12 | data-analytics | SQL, BI, visualization |
| 13 | aws-skills | Lambda, S3, EC2, managed services |
| 14 | gcp-skills | BigQuery, Vertex AI, Cloud Run |
| 15 | api-development | REST, GraphQL, OpenAPI |
| 16 | api-integration | Webhooks, OAuth, SDK development |
| 17 | technical-docs | API docs, READMEs, Docusaurus |
| 18 | visual-content | Diagrams, screenshots, video |
| 19 | business-automation | Workflow automation, reporting |
| 20 | enterprise-workflows | Governance, compliance, collaboration |

**Schema:** All 500 skills follow the 2025 Agent Skills schema (`name`, `description`, `allowed-tools`, `version`, `license`, `author`, `compatible-with: claude-code`). Plugin schema advanced `3.10.0 → 3.11.0` with a `kernel-strict` + `enterprise-fleshed` agent gate; all 317 in-repo agents elevated to A-grade.

**New MCP plugins (2026-06, link-only — distributed via marketplace, not vendored here):**

| Plugin | What it is |
|--------|------------|
| [beads-dolt](https://github.com/jeremylongshore/claude-code-plugins-plus-skills/tree/main/plugins/mcp/beads-dolt) | Dolt/DoltHub-aware plugin for the `beads` (`bd`) task tracker — a `/beads-dolt` skill + 5 expert agents + the official [`dolthub/dolt-mcp`](https://github.com/dolthub/dolt-mcp) server (45 tools) fronting `dolt sql-server` over MySQL. |
| [databricks-workspace-mcp](https://github.com/jeremylongshore/claude-code-plugins-plus-skills/tree/main/plugins/mcp/databricks-workspace-mcp) | MCP server for the Databricks **control plane** — 8 read-only tools (cluster forensics, instance-pool waste, DLT pipeline event logs, Unity Catalog storage governance). Pairs with the managed Databricks SQL MCP for `system.*` reads. |
| [governed-second-brain](https://github.com/jeremylongshore/claude-code-plugins-plus-skills/tree/main/plugins/mcp/governed-second-brain) | Local-first Claude Code + Cowork plugin — turn your own files into a governed, `qmd://`-cited second brain with a tamper-evident SHA-256 hash-chained audit trail. In-process (no daemon, no network, no API key for retrieval). Apache-2.0. |

**Honest assessment:** The skills are **breadth-first**. Individual SKILL.md files follow a consistent template (Overview / When to Use / Instructions / Examples / Prerequisites / Error Handling / Resources) but tend to be boilerplate-heavy rather than the deep, opinionated guidance you get from e.g. [obra/superpowers](https://github.com/obra/superpowers). The real value is the **taxonomy and coverage map** — useful as a checklist when deciding what to build or vendor. The new MCP plugins are more opinionated and worth evaluating individually when you need Dolt, Databricks control-plane, or governed-knowledge workflows.

**Install (upstream):**

```bash
/plugin marketplace add jeremylongshore/claude-code-plugins
```

Or via the `ccpi` CLI per upstream README.

**Use here:** Link-only. Use the category taxonomy as a **coverage map** when auditing skill gaps in your own project, and cherry-pick individual skills by name (MIT-licensed — attribute to Jeremy Longshore). The `visual-content` (cat 18) and `business-automation` (cat 19) skills we vendor at [skills/visual-content/](../skills/visual-content/) and [skills/business-automation/](../skills/business-automation/) are still 1:1 with upstream as of 2026-06-25.

**Fit for this hub:** Sits alongside [openclaw/](../../openclaw/) as another large-scale Claude Code skill directory to reference. Our own [cursor-claude-codex/skills/](../skills/README.md) stays curated and deep; this repo is the wide-catalog counterpart.

---

## [obra/superpowers](https://github.com/obra/superpowers)

**License:** MIT.

**What it is:** Jesse Vincent's (obra) curated collection of **foundational Claude Code skills** for design, planning, execution, quality, and multi-agent work. The most widely-vendored skill set in the Claude Code community.

**Skills available upstream (14):** `brainstorming`, `writing-plans`, `executing-plans`, `finishing-a-development-branch`, `test-driven-development`, `systematic-debugging`, `verification-before-completion`, `receiving-code-review`, `requesting-code-review`, `using-git-worktrees`, `dispatching-parallel-agents`, `subagent-driven-development`, `writing-skills`, `using-superpowers`.

**Vendored in this hub (as of 2026-06-25, tag v6.0.3):** **all 14** skills under [cursor-claude-codex/skills/](../skills/). The v6.0.x refresh (from v6.0.0, 2026-06-16) rewrote several skills: `subagent-driven-development` now runs one reviewer per task with two verdicts (spec + quality) via a single `task-reviewer-prompt.md` (replacing the old `spec-reviewer-prompt.md` + `code-quality-reviewer-prompt.md`), with file-based diffs and a progress ledger in `.superpowers/sdd/`; `writing-plans` adds a Global Constraints + per-task Interfaces block; `brainstorming` gains a sandboxed, per-session-key visual companion (`scripts/`, `visual-companion.md`); `using-git-worktrees` and `finishing-a-development-branch` use in-project `.worktrees/`; `requesting-code-review` is consolidated to a single `code-reviewer.md`. Upstream claims ~2× faster runs and ~50% fewer tokens in evals.

**Fit for this hub:** These are the backbone of our workflow/quality/multi-agent sections in [cursor-claude-codex/skills/README.md](../skills/README.md). Nearly every other skill we ship is downstream of one of these.

---

## [google-labs-code/design.md](https://github.com/google-labs-code/design.md)

**License:** Apache License 2.0.

**What it is:** Google Labs' **format specification** for describing a visual identity to coding agents. `DESIGN.md` combines machine-readable design tokens (YAML front matter: `colors`, `typography`, `spacing`, `rounded`, `components`) with human-readable prose that explains *why* those tokens exist and how to apply them. Tokens follow the [Design Token JSON spec](https://www.designtokens.org/tr/2025.10/format/) and convert cleanly to `tokens.json`, Figma variables, or Tailwind theme config.

**Why it matters:** Before this, "tell the agent about our brand" meant pasting a style guide into every chat. DESIGN.md turns that into a **persistent, tool-agnostic** artifact that works across Claude Code, Cursor, Gemini, Codex, Antigravity, etc. One file, any agent.

**Upstream layout:**
- `docs/spec.md` — the generated format specification
- `examples/` — 3 full example design systems (`atmospheric-glass`, `paws-and-paths`, `totality-festival`), each with `DESIGN.md` + `design_tokens.json` + `tailwind.config.js`
- `packages/cli/` — official `@google/design.md` CLI (`lint`, `diff`, WCAG contrast checks)
- `skills-lock.json` — references agent skills that pair with the spec (jpoehnelt/skills, vercel-labs/json-render, msmps/opentui-skill)

**Vendored in this hub (as of 2026-04-21):** [references/design-md/](./design-md/) — the full `spec.md`, all 3 examples, and the upstream `LICENSE`. CLI is **not** vendored (use `npx @google/design.md` to run it).

**Use here:** Read [references/design-md/README.md](./design-md/README.md) first. Start a product with a DESIGN.md and every agent session stays visually coherent without re-explaining the brand.

**Fit for this hub:** Primary bridge between **designers** and **AI-assisted development** — fills the gap between [cursor-claude-codex/skills/frontend-design/](../skills/frontend-design/) (how to build distinctive UI) and [cursor-claude-codex/skills/web-design-guidelines/](../skills/web-design-guidelines/) (how to audit UI). Natural pair with [VoltAgent/awesome-design-md](#voltagentawesome-design-md) which is a community collection that follows this same format.

---

## [mattpocock/skills](https://github.com/mattpocock/skills)

**License:** MIT.

**What it is:** Matt Pocock's personal `.claude/skills/` directory — ~54k stars. Branded as "Skills For Real Engineers — not vibe coding." Built around fixing four agent failure modes: misalignment, verbosity, code that doesn't work, and plan drift.

**Core philosophy:** Small, easy to adapt, composable, model-agnostic. Doesn't try to own the process the way GSD/BMAD/Spec-Kit do — hands you a sharp tool and gets out of the way.

**Three patterns worth studying:**

1. **Grilling sessions.** `/grill-me` (non-code) and `/grill-with-docs` (code) interview the user relentlessly about a plan until reaching shared understanding. `/grill-with-docs` also produces an ADR and a `CONTEXT.md` (ubiquitous-language doc) so the agent stops being verbose in subsequent sessions. The shared grilling engine now lives in `productivity/grilling`.

2. **Triage state machine.** `/triage` defines `bug`/`enhancement` × 5 states (`needs-triage`, `ready`, `in-progress`, `blocked`, `done`) plus an `AGENT-BRIEF.md` format for AFK agents. Pairs with `/to-issues` (bulk convert) and `/to-prd` (PRD generator).

3. **Deep-module design vocabulary.** `codebase-design` and `domain-modeling` give the agent a shared language for designing small-interface, clean-seam, testable modules — closing the "agent is way too verbose" failure mode at the architecture layer.

**Layout explored upstream (2026-06-24):**
- `skills/engineering/` — 14 active skills (ask-matt, codebase-design, diagnosing-bugs, domain-modeling, grill-with-docs, implement, improve-codebase-architecture, prototype, resolving-merge-conflicts, setup-matt-pocock-skills, tdd, to-issues, to-prd, triage)
- `skills/productivity/` — 5 skills (grill-me, grilling, handoff, teach, writing-great-skills)
- `skills/misc/` — 4 skills (git-guardrails-claude-code, migrate-to-shoehorn, scaffold-exercises, setup-pre-commit)
- `skills/in-progress/` — 6 skills (decision-mapping, loop-me, review, writing-beats, writing-fragments, writing-shape)
- `skills/personal/` — 2 Matt-specific (edit-article, obsidian-vault)
- `skills/deprecated/` — 4 deprecated (design-an-interface, qa, request-refactor-plan, ubiquitous-language)

**Vendored in this hub (as of 2026-06-25):** [skills/matt-pocock/](../skills/matt-pocock/) — **20** of Matt's active skills (engineering: 13, productivity: 5, misc: 2). We skipped `setup-matt-pocock-skills` (installer-specific), `migrate-to-shoehorn` (TS-library-specific), `scaffold-exercises` (course-specific), the `in-progress/` folder (vendor once promoted), the entire `personal/` folder, and all `deprecated/` skills. Upstream removed `zoom-out`, `caveman`, and `write-a-skill` (superseded by `writing-great-skills`) since the original vendor; `diagnose` was renamed to `diagnosing-bugs`. See the [folder README](../skills/matt-pocock/README.md) for the full skip rationale and change log.

**Install upstream (alternative):**

```bash
npx skills@latest add mattpocock/skills
```

Then run `/setup-matt-pocock-skills` in your agent — it asks about your issue tracker (GitHub/Linear/local) and triage labels.

**Fit for this hub:** Provides a different angle on skills we already have (`tdd`, `diagnosing-bugs`, `writing-great-skills` from obra/superpowers vs Matt's versions) and adds genuinely new patterns (`grill-with-docs` ubiquitous-language ADRs, `triage` state machine, `domain-modeling`/`codebase-design` deep-module vocabulary, `handoff`, `ask-matt`). Reading both is recommended.

---

## [Ducksss/codex-profiles](https://github.com/Ducksss/codex-profiles)

**License:** MIT (per upstream README).

**What it is:** Bash CLI (`codex-profile`) for switching Codex CLI and Desktop accounts via isolated `CODEX_HOME` directories. Each profile gets its own auth, config, sessions, connectors, plugins, caches, and logs — without copying `auth.json` between accounts.

**Install (canonical — prefer for day-to-day updates):**

```bash
npm install -g codex-profile
# or
brew install Ducksss/tap/codex-profile
```

**Vendored in this hub (as of 2026-06-10):** [tools/codex-profiles/](../tools/codex-profiles/) — `bin/codex-profile`, `Makefile`, `test/`, `LICENSE`, `package.json`; hub README at [tools/codex-profiles/README.md](../tools/codex-profiles/README.md); full upstream docs in [UPSTREAM-README.md](../tools/codex-profiles/UPSTREAM-README.md). Not mirrored: GitHub Pages site, media, CI workflows.

**Use here:**

```bash
codex-profile init personal && codex-profile init work
codex-profile login personal && codex-profile login work
codex-profile cli work exec "review this repo"
```

Pair with hub skills in `~/.agents/skills/` per profile. For tool-name mapping when running superpowers-style skills on Codex, see [using-superpowers/references/codex-tools.md](../skills/using-superpowers/references/codex-tools.md).

**Fit for this hub:** Developer setup utility for the Codex column of [cursor-claude-codex/README.md](../README.md). Complements multi-account OpenClaw skills (e.g. `codex-account-switcher` in the OpenClaw catalog) with a focused, MIT-licensed CLI maintained by [Ducksss](https://github.com/Ducksss). Suggested via [issue #3](https://github.com/adriannoes/awesome-vibe-coding/issues/3).

---

## [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)

**License:** Apache-2.0 (per upstream `LICENSE`).

**What it is:** **817** agentskills.io playbooks across **29** security domains (DFIR, SOC, threat hunting, cloud/container security, malware analysis, DevSecOps, compliance, AI/LLM security, supply-chain security, hardware/firmware, etc.). Each skill maps to MITRE ATT&CK v19.1, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF, and MITRE F3 (fraud). **Community project — not affiliated with Anthropic PBC** despite the name.

**Install (canonical — prefer for day-to-day updates):**

```bash
npx skills add mukul975/Anthropic-Cybersecurity-Skills
```

**Vendored in this hub (as of 2026-06-25):** [skills/anthropic-cybersecurity-skills/](../skills/anthropic-cybersecurity-skills/) — **109 skills** cherry-picked from tag **v1.3.0** (2026-06-22). The original 83 skills (DFIR, threat hunting, SOC, malware, cloud audit/CSPM, DevSecOps, IR, compliance) plus **26 skills** from three new v1.3.0 domains fully included: **ai-security** (14 — LLM red-teaming with garak/PyRIT, prompt injection, RAG poisoning, MCP tool-poisoning, agentic tool-invocation controls, runtime guardrails), **supply-chain-security** (8 — SBOM, dependency confusion, malicious npm triage, typosquatting, SLSA/Sigstore), and **hardware-firmware-security** (4 — CHIPSEC UEFI, Secure Boot bypass, TPM measured-boot, bootkit hunting). Hub README: [anthropic-cybersecurity-skills/README.md](../skills/anthropic-cybersecurity-skills/README.md); upstream README: [UPSTREAM-README.md](../skills/anthropic-cybersecurity-skills/UPSTREAM-README.md); pick list: [PICK-LIST.md](../skills/anthropic-cybersecurity-skills/PICK-LIST.md). Refresh: [scripts/cherry-pick-acs.sh](../../scripts/cherry-pick-acs.sh) · [MAINTENANCE.md](../MAINTENANCE.md#mukul975anthropic-cybersecurity-skills).

**Honest assessment:** High-quality practitioner workflows (sampled: memory forensics with Volatility3, credential-hunting playbooks, MCP tool-poisoning audits). Repo is large (~13 MB, 817 skills); full mirror is justified only for offline use or pinned enterprise snapshots. Overlaps partially with [bug-hunter](../skills/bug-hunter/) on web pentest/red team but is **much broader on blue-team IR** and now also covers AI/agent safety (a real gap for vibe coding). Run [skill-security-auditor](../skills/alirezarezvani-skills/skill-security-auditor/) before vendoring; treat like bug-hunter — authorized scope only, no global `alwaysApply`. Expect WARN/FAIL on DFIR/red-team/AI-red-teaming commands — review in authorized context.

**Fit for this hub:** Complements [skills/bug-hunter/](../skills/bug-hunter/) (offensive bounty/pentest) and defensive [security/](../security/) with SOC/DFIR/threat-hunting depth, plus the new AI-security domain pairs with [references/agentic-patterns.md](./agentic-patterns.md) (deterministic-threat-rule-scanning, policy-gated-tool-proxy) and [skill-security-auditor](../skills/alirezarezvani-skills/skill-security-auditor/). Pin to release tags (latest: [v1.3.0](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/releases/tag/v1.3.0)) if mirroring.

---

## [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

**License:** MIT (per upstream `LICENSE`).

**What it is:** **13** portable agent skills that push AI-built UIs away from generic “slop”: layout variance, typography, motion (GSAP), spacing, redesign audits, and optional **image-generation** comps (web, mobile, brand kit). Default install name: `design-taste-frontend` (v2 experimental). Variants cover minimalist, brutalist, premium/soft, GPT-strict, Google Stitch `DESIGN.md`, image-to-code, and full-output enforcement.

**Install (canonical — prefer for day-to-day updates):**

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

**Vendored in this hub (as of 2026-06-10):** [skills/taste-skills/](../skills/taste-skills/) — **13 skills** @ commit `1a6dc0a`. Hub README: [taste-skills/README.md](../skills/taste-skills/README.md); upstream README: [UPSTREAM-README.md](../skills/taste-skills/UPSTREAM-README.md). Refresh: [MAINTENANCE.md](../MAINTENANCE.md#leonxlnxtaste-skill).

**Honest assessment:** All 13 skills **PASS** [skill-security-auditor](../skills/alirezarezvani-skills/skill-security-auditor/) (2026-06-10). Complements — does not replace — [frontend-design](../skills/frontend-design/) and [web-design-guidelines](../skills/web-design-guidelines/). v2 default is experimental; pin commits or use `design-taste-frontend-v1` for stable v1 behavior. Not for global `alwaysApply`.

**Fit for this hub:** Product Builders and frontend vibe-coding — landing pages, portfolios, marketing redesigns. Pairs with [design-md/](./design-md/) (Stitch) and [composition-patterns](../skills/composition-patterns/) for React structure after visual direction is set.

---

## [nowork-studio/NotFair](https://github.com/nowork-studio/NotFair)

**License:** MIT (per upstream `LICENSE`).

**What it is:** Claude Code **plugin** (~2.9k ★) for **SEO**, **GEO**, **Google Ads**, and **Meta Ads**. Three skill areas: [seo/](https://github.com/nowork-studio/NotFair/tree/main/seo) (site analysis, keyword research, meta tags, schema markup, content writing), [google-ads/](https://github.com/nowork-studio/NotFair/tree/main/google-ads) (audits, wasted-spend detection, keyword & bid management), and [meta-ads/](https://github.com/nowork-studio/NotFair/tree/main/meta-ads) (ROAS, creative fatigue, audience overlap). Pulls live data via Google Ads MCP, Meta Ads MCP, Google Search Console MCP, and Google Analytics (GA4) MCP. Companion web app at [notfair.co](https://notfair.co) for browser-based audits on the same engine.

**Install (canonical — prefer for day-to-day updates):**

```bash
/plugin marketplace add nowork-studio/notfair
/plugin install notfair@nowork-studio
```

**Use here:** Link-only — not vendored in this hub. Follow upstream for plugin updates and MCP auth (OAuth via notfair.co; tokens stored in OS keychain).

**Fit for this hub:** Complements dev-focused skills with growth/marketing workflows for Product Builders — SEO fixes, ad spend audits, and campaign optimization alongside the Claude Code / MCP stack already documented here.

---

## [igoruehara/spec-driven](https://github.com/igoruehara/spec-driven)

**License:** MIT. **~138 ★.** npm `@igoruehara/spec-driven@0.1.9`. Latest commit 2026-06-21.

**What it is:** An `npx`-scaffoldable **Spec-Driven Development (SDD)** pipeline for AI agents (Claude Code canonical, with generated views for Codex/Cursor/Copilot/Gemini/Windsurf). It chains Lean Inception → DDD (Domain-Driven Design) → Technical Design Docs → SDD, with 15 skills, templates, quality gates, and session continuity (a SessionStart hook that injects the base context). **Upstream skill bodies, templates, and docs are in Portuguese (pt-BR); this hub translated the prose to English** to keep the repository language consistent (meaning preserved; pt-BR source available upstream). Skill slugs (`kickoff`, `integracoes`, `mapear`, …) and inter-skill slash-command references (`/kickoff`, `/integracoes`, …) are kept in Portuguese to avoid breaking internal routing.

**Vendored in this hub (as of 2026-06-25, translated pt-BR → en):**
- [skills/igoruehara-spec-driven/](../skills/igoruehara-spec-driven/) — **15 skills** (`kickoff`, `integracoes`, `mapear`, `diagramar`, `roadmap`, `camada-agentica`, `nova-feature`, `clarificar`, `validar`, `revisar-pr`, `setup-ci`, `metricas`, `auditar`, `evals`, `handoff`) + `hooks/load-context.mjs` + `settings.json` + `CLAUDE.md`
- [product-management/igoruehara-sdd/](../product-management/igoruehara-sdd/) — spec/product/architecture templates (`spec`, `design`, `domain`, `product`, `tasks`, `vision`, `stakeholders`, `journeys`, `features`, `mvp-canvas`, `roadmap`, `assessment`, `adr`), a worked example (`0001-exemplo-cota-de-uso`), 3 audit `.mjs` scripts, and the `esteira.yml` CI workflow

**Honest assessment:** High-quality, opinionated, lightweight (~180 KB, all text). The 15 skills overlap thematically with our obra/superpowers SDD skills (`brainstorming`, `writing-plans`, `executing-plans`) but add the Lean Inception + DDD + agentic-layer angle we don't have. The SessionStart hook is read-only (`readFileSync` + `existsSync`, no shell/network/writes) and passed `skill-security-auditor`. The English translation makes it usable for non-pt-BR teams while preserving the author's structure and full credit.

**Install upstream (alternative):**

```bash
npx @igoruehara/spec-driven@latest
```

**Fit for this hub:** Pairs with our existing [product-management/no-vibe-coding.md](../product-management/no-vibe-coding.md), [create-prd.md](../product-management/create-prd.md), [generate-tasks.md](../product-management/generate-tasks.md) — closes the "full SDD pipeline with skills" gap. Suggested by the hub maintainer.

---

## [NVIDIA/skills](https://github.com/NVIDIA/skills)

**License:** Apache-2.0 (code/config) AND CC-BY-4.0 (docs) — dual. **~1.8k ★.** Official NVIDIA. Latest commit 2026-06-24.

**What it is:** Official, NVIDIA-verified **agent-skills catalog** — a mirror hub: skills are authored/maintained in upstream NVIDIA product repos and synced here daily via an automated pipeline (OMS signing, evals, benchmark gating). ~230+ skill packages across 30+ NVIDIA product families (cuOpt, NeMo MBridge, TAO Toolkit, Jetson BSP/Device, VSS, Medical AI/MONAI, Megatron-Core, DALI, cuDF, Dynamo, Earth2Studio, Holoscan, DeepStream, Physical AI/Omniverse, CUDA-Q, RAG Blueprint, AIQ, …). Follows the agentskills.io `SKILL.md` format.

**Vendored in this hub:** Link-only. The catalog is too heavy (hundreds-to-thousands of files, tens of MB) and too domain-narrow (GPU/CUDA/NeMo/Jetson/TAO ops) to vendor wholesale, and a daily-synced signed mirror would go perpetually stale as a static copy.

**Use here:** Install specific skills on demand:

```bash
npx skills add nvidia/skills
```

The one broadly transferable package is `skill-card-generator` (agent-agnostic governance skill-card authoring) — consider cherry-picking it into [skills/](../skills/) if you need governance cards.

**Fit for this hub:** Reference for the NVIDIA/accelerated-computing domain. Sits alongside [jeremylongshore/claude-code-plugins-plus-skills](#jeremylongshoreclaude-code-plugins-plus-skills) as a large official catalog; our own [skills/](../skills/README.md) stays curated and general-purpose.

---

## [pengsida/learning_research](https://github.com/pengsida/learning_research)

**License:** ⚠️ None declared (no LICENSE file) — treat as *all rights reserved*; link only, do not copy. **~12.8k ★.** Latest update 2026-06-06.

**What it is:** A human-facing **research-methodology guide** (written in Chinese) for Ph.D. students — how to find research problems, run experiments, write papers, rebuttal, and present. Authored by **pengsida** (Peng Sida), a Ph.D. researcher in Zhou Xiaowei's lab. Not notebooks, not agent skills — prose guides.

**Layout explored:** Flat root with 4 files: `README.md` (the hub, links to external Notion docs), `changelog`, `getting_started_in_research.md`, `getting_advanced_in_research.md`. The bulk of the material lives on a living Notion doc, not in the repo.

**Vendored in this hub:** Link-only — no license means no legal right to redistribute, and the real content lives on a living Notion doc that would go stale if copied. Pointed to from [nice-projects/README.md](../../nice-projects/README.md) under the research/learning angle.

**Fit for this hub:** Research-methodology companion to our [research/](../../../research/) notebooks (Karpathy, NLP-with-transformers, understanding-deep-learning). It is the *human* research-skills counterpart to the agent research skills we vendor ([autoresearch](../skills/autoresearch/), [research-paper-writing](../skills/research-paper-writing/)).

---

## [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**License:** MIT. **~1.6k ★.** Latest commit 2026-06-24.

**What it is:** A companion **skill** for a curated catalog of **bounded AI-agent loops** — repeatable feedback-cycle workflows with explicit trigger, action, verify, stop, and handoff. The skill routes five paths (Discover, Find, Audit/Loop Doctor, Adapt, Design) around a six-step feedback cycle (Observe → Choose → Act → Verify → Record → Repeat-or-stop). "Loop" here is an agent-loop pattern, not a Cursor feature. Targets Cursor, Claude Code, and Codex (`npx skills add ... --agent cursor|claude-code|codex`).

**Vendored in this hub (as of 2026-06-25):** [skills/forward-future-loop-library/](../skills/forward-future-loop-library/) — the `loop-library` SKILL.md package (skill + `references/audit.md` + `references/discover.md` + `agents/openai.yaml`), passed `skill-security-auditor`.

**The live catalog (link-only):** The 69 published loops (as of 2026-06-24, across Engineering, Evaluation, Operations, Content, Design) live in a remote database that updates daily — the README explicitly warns repo content is **not** the published catalog. Read the live catalog at `signals.forwardfuture.com/loop-library/catalog.{md,json}` and `llms.txt`. Sample loops: "The docs sweep", "The production error sweep", "The sub-50 ms page-load loop", "The Codex completion-contract loop".

**Install upstream (alternative):**

```bash
npx skills add Forward-Future/loop-library --skill loop-library -g
```

**Fit for this hub:** Pairs with [references/agentic-patterns.md](./agentic-patterns.md) — "bounded loop" is a feedback-loop pattern sibling to output-verification-loop and agent-circuit-breaker. Complements the loop-with-checkpoints skills ([subagent-driven-development](../skills/subagent-driven-development/), [executing-plans](../skills/executing-plans/)).

---

## [Master-cai/Research-Paper-Writing-Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills)

**License:** MIT. **~4.3k ★.** Latest commit 2026-06-23.

**What it is:** A single **agent skill** that drives a section-by-section **research-paper rewrite** workflow for ML/CV/NLP-style papers — built for Codex, Claude Code, and Gemini. Content curated and adapted from Prof. **Peng Sida** (彭思达)'s open research-writing notes ([pengsida/learning_research](#pengsidalearning_research)). Workflow: clarify story → section guide → paragraph rewrite → reverse outlining → claim-evidence check → adversarial self-review. Follows the agentskills.io `SKILL.md` format.

**Vendored in this hub (as of 2026-06-25):** [skills/research-paper-writing/](../skills/research-paper-writing/) — the `research-paper-writing` package (SKILL.md + 8 section-reference guides + example banks for abstract/introduction/method + `agents/openai.yaml`), passed `skill-security-auditor`.

**Install upstream (alternative):**

```bash
npx skills add Master-cai/Research-Paper-Writing-Skills
```

**Fit for this hub:** Covers the *writing-up* side of research that our [research/](../../../research/) notebooks (Karpathy, nanochat, autoresearch) don't. Pairs with [autoresearch](../skills/autoresearch/) (the research loop) as the writing companion, and with [writing-plans](../skills/writing-plans/) / [writing-skills](../skills/writing-skills/) for structured-writing discipline.

---

## [benchflow-ai/awesome-evals](https://github.com/benchflow-ai/awesome-evals)

**License:** CC0 1.0 (public-domain dedication by BenchFlow). **~0.2k ★.** Created 2026-06-24, latest commit 2026-06-25 (actively, daily maintained).

**What it is:** A curated, opinionated, **non-BS** awesome-list of resources for **building and evaluating AI agents** — papers, blog posts, talks, courses, tools, and benchmarks. Unlike most awesome lists (link dumps), every entry is **annotated and verified**: each says *what it is and why it belongs*, URLs are checked, quotes are verbatim, dead/abandoned tools are pruned. **443+ curated links · 146 deep reading notes**, plus a runnable eval playbook (`PATTERNS.md`) and a self-updating Claude Code GitHub Action ("The Scan"). Maintained by [BenchFlow](https://benchflow.ai).

**Vendored in this hub (as of 2026-06-25):** [references/awesome-evals/](./awesome-evals/) — the README (vendored as `UPSTREAM-README.md`), `PATTERNS.md` (10-pattern runnable playbook with real Python code), `SCAN.md` + the `eval-scan.yml` GitHub Action, `CONTRIBUTING.md`, and the `notes/` tree (68 articles + 28 papers + 47 talks = 143 deep notes). **Not vendored:** `docs/index.html` (2.2 MB auto-generated rendered site — skipped to keep the hub lean).

**Honest assessment:** This is the single best eval reference catalog we found, and it closes a real gap — the hub had eval-adjacent *skills* and *patterns* but no consolidated eval *reference*. CC0 means no license friction; English; tiny markdown footprint (~0.5–0.8 MB of text). The 10 README sections (why evals, eval⇄capability⇄RL, model/harness/skill decomposition, observability, eval infrastructure, benchmark integrity, RL environments, LLM-as-judge, agent-specific eval, safety/adversarial) and 10 PATTERNS (LLM-as-judge aligned to humans, pass@k, error analysis, trajectory grading, CI gating, verifiable rewards, …) are directly practitioner-usable.

**Install / use here:** Read [references/awesome-evals/README.md](./awesome-evals/README.md) first (the hub entry, with cross-references), then [UPSTREAM-README.md](./awesome-evals/UPSTREAM-README.md) for the full list and [PATTERNS.md](./awesome-evals/PATTERNS.md) for runnable code. For the latest, follow upstream — it updates daily.

**Fit for this hub:** The eval reference catalog. Pairs with: the `evals` skill ([igoruehara-spec-driven/skills/evals/](../skills/igoruehara-spec-driven/skills/evals/)), `verification-before-completion` ([skills/verification-before-completion/](../skills/verification-before-completion/)), the `output-verification-loop` pattern in [agentic-patterns.md](./agentic-patterns.md), `papers/agents-and-engineering/` (same paper canon), the `autoresearch` skill, and the AI-security domain of [anthropic-cybersecurity-skills/](../skills/anthropic-cybersecurity-skills/) (README §10 safety/adversarial eval).

---

## [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)

**License:** Apache-2.0. **~97k ★.** Official code for [*Build a Large Language Model (From Scratch)*](https://manning.com/books/build-a-large-language-model-from-scratch) (Manning) by Sebastian Raschka.

**What it is:** Step-by-step PyTorch notebooks implementing a ChatGPT-like LLM from scratch (no external LLM libraries): text data → attention → GPT model → pretraining → finetuning (classification + instruction-following) → LoRA. **66 notebooks** across ch02–ch07 + appendix-A/D/E, plus bonus sections (gpt-to-llama, qwen3, muon optimizer) and a 17-hour companion video course.

**Vendored in this hub (as of 2026-06-25):** [../../research/llms-from-scratch/](../../research/llms-from-scratch/) — chapter notebooks + appendices + setup + `pkg/` helper, mirrored from upstream `main`. The `reasoning-from-scratch` submodule is **not** included here (vendored separately at [../../research/reasoning-from-scratch/](../../research/reasoning-from-scratch/)).

**Fit for this hub:** The end-to-end LLM pipeline in notebooks the hub was missing. Sits between [nn-zero-to-hero](../../research/nn-zero-to-hero/) (prerequisites) and [reasoning-from-scratch](../../research/reasoning-from-scratch/) (the next book). appendix-E (LoRA) + ch07 (instruction finetuning) pair with the fine-tuning/alignment hands-on in [smol-course](../../research/smol-course/).

---

## [huggingface/smol-course](https://github.com/huggingface/smol-course)

**License:** Apache-2.0. **~6.6k ★.** Maintained by Hugging Face (peer-reviewed PRs, leaderboard).

**What it is:** A practical course on **aligning small language models** that runs on most local machines (built around SmolLM3 / SmolVLM2). Eight v1 modules: instruction tuning, preference alignment (DPO/ORPO), parameter-efficient finetuning (LoRA/prompt tuning), evaluation (benchmarks + custom domain), vision-language models, synthetic datasets, inference, and agents. Upstream ships EN/ES/JA/KO/PT-BR/VI; this hub vendors the **English-only** subset.

**Vendored in this hub (as of 2026-06-25):** [../../research/smol-course/](../../research/smol-course/) — v1 modules 1–8 (EN) + v2 `units/en/` markdown + exercise notebooks. **12 notebooks** + module/unit guides. Translations, `banner.png`/`schedule.png`, and `uv.lock` excluded.

**Fit for this hub:** The fine-tuning / alignment / eval hands-on the hub was missing. Pairs with [llms-from-scratch](#rasbtllms-from-scratch) (the from-scratch prequel), [reasoning-from-scratch](../../research/reasoning-from-scratch/) (same RL/alignment themes), and [awesome-evals/](./awesome-evals/) (v1/4 evaluation module is the hands-on companion to the eval reference catalog).

---

## [openai/openai-cookbook](https://github.com/openai/openai-cookbook) *(link-only)*

**License:** MIT. **~74k ★.** Official OpenAI examples and guides.

**What it is:** The official OpenAI API cookbook — thousands of examples. The **`examples/evaluation/`** subdirectory is the relevant slice for this hub: `Evaluate_RAG_with_LlamaIndex.ipynb` (build + evaluate a RAG pipeline with LlamaIndex — retrieval and response grading), `Getting_Started_with_OpenAI_Evals.ipynb` (OpenAI Evals framework — building/running an eval), plus abstractive summarization and prompt-flywheel notebooks.

**Vendored in this hub:** Link-only — the repo is enormous and changes rapidly; vendoring would create a large, perpetually-stale copy. The eval/RAG notebooks are pointed to from [awesome-evals/README.md](./awesome-evals/README.md) as the **hands-on practice** companion to the eval reference catalog (which is the theory + patterns).

**Fit for this hub:** Pairs with [awesome-evals/](./awesome-evals/) (theory) and [smol-course](#huggingfacesmol-course) v1/4 (evaluation module). Closes the RAG and LLM-eval hands-on gaps without the weight of a full cookbook mirror.

---

## Maintenance

When adding new upstream repos to this hub: extend this catalog, then link it from [references/README.md](./README.md) and from [nice-projects/README.md](../../nice-projects/README.md) if the entry is also a “project to watch.”

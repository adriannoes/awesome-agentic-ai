# Upstream repositories catalog

Curated notes on external repos that complement **Cursor**, **Claude Code**, and **vibe coding** workflows.  
Most entries are **link-only**; two Vercel **SKILL.md** summaries are also vendored under [cursor-and-claude/skills/](../skills/README.md) (see the Vercel section below). All descriptions reflect public READMEs and repository layout as of the exploration date.

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
| Claude Code Showcase | [ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase) |
| Claude Code Plugins + Skills | [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) |
| Superpowers (core skills) | [obra/superpowers](https://github.com/obra/superpowers) |

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

**Vendored in this hub (as of 2026-04-21):**
- [web-design-guidelines](../skills/web-design-guidelines/SKILL.md) — summary SKILL.md only
- [react-best-practices](../skills/react-best-practices/SKILL.md) — summary SKILL.md only
- [composition-patterns](../skills/composition-patterns/) — **full** (SKILL.md + AGENTS.md + README + rules/)
- [react-view-transitions](../skills/react-view-transitions/) — **full** (SKILL.md + AGENTS.md + README + references/)
- [react-native-skills](../skills/react-native-skills/) — **full** (SKILL.md + AGENTS.md + README + rules/)
- [deploy-to-vercel](../skills/deploy-to-vercel/) — **full** (SKILL.md + resources/, excluding upstream `Archive.zip`)
- [vercel-cli-with-tokens](../skills/vercel-cli-with-tokens/) — **full** (SKILL.md)

For `web-design-guidelines` and `react-best-practices`, detailed rule files remain upstream — fetch from the links inside each summary SKILL.md.

**Fit for this hub:** Complements [cursor-and-claude/skills/README.md](../skills/README.md) and [cursor-and-claude/best-practices/](../best-practices/) for frontend and UI audits.

---

## [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)

**What it is:** Local **knowledge graph** for Claude Code: persistent map of the codebase so reviews and daily work ingest fewer irrelevant tokens (upstream claims large token reductions; verify in your own projects).

**Layout explored (root):** `.mcp.json`, `CLAUDE.md`, `CHANGELOG.md`, `.github/` — typical Claude Code + MCP integration layout.

**Use here:** Clone or follow upstream install in a project where you want graph-backed context. Keep this repo as a **pointer only** unless you decide to submodule or document a specific setup.

**Fit for this hub:** Pairs with [cursor-and-claude/commands/code-review.md](../commands/code-review.md) and code-review workflows; advanced context engineering.

---

## [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)

**License:** MIT (per upstream README).

**What it is:** Curated **`DESIGN.md`** files (Stitch-style design system descriptions) derived from public sites, plus `preview.html` / `preview-dark.html` per theme under `design-md/<site>/`.

**Use here:** Copy a single site's `DESIGN.md` into a product prototype and ask your agent to match UI (upstream workflow). Do not mirror the whole collection in this repo.

**Fit for this hub:** Strong match for **Product Builders** and designers — see [main README](../../README.md) audience.

**See also:** [google-labs-code/design.md](#google-labs-codedesignmd) — the official format specification that VoltAgent's collection follows. We vendor the Google Labs spec + 3 examples under [references/design-md/](./design-md/).

---

## [iamfakeguru/claude-md](https://github.com/iamfakeguru/claude-md)

**What it is:** **Production-style `CLAUDE.md` plus shell hooks** under `.claude/hooks/` (verify after edits, block destructive commands, truncation checks, etc.). Addresses common Claude Code failure modes via mechanical hooks.

**Layout explored:** `CLAUDE.md`, `install.sh`, `.claude/` (hooks, settings).

**Use here:** Prefer upstream install in your own project:

```bash
curl -sL https://raw.githubusercontent.com/iamfakeguru/claude-md/main/install.sh | bash -s .
```

Review hook behavior before running; adapt commands to your stack (TypeScript vs Python, etc.).

**Fit for this hub:** Complements [cursor-and-claude/security/](../security/) and team discipline docs; does **not** replace reading Anthropic’s own Claude Code docs.

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

**Fit for this hub:** Research track alongside [cursor-and-claude/references/agentic-patterns.md](./agentic-patterns.md).

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

**Vendored in this hub (as of 2026-04-21):** [skills/harness/](../skills/harness/) — full skill (SKILL.md + references/). ⚠️ Upstream SKILL.md body is in **Korean**; useful if you read Korean or want to study the pattern of a meta-skill that bootstraps domain-specific agent teams. For an English-first alternative, see our own [cursor-and-claude/references/agentic-patterns.md](./agentic-patterns.md).

**Fit for this hub:** Extends multi-agent thinking beyond [cursor-and-claude/references/agentic-patterns.md](./agentic-patterns.md).

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

**Use here:** Read the upstream README (~31 KB, excellent walkthrough) and copy patterns (not files) into your own project. Pair with [cursor-and-claude/best-practices/hooks-guide.md](../best-practices/hooks-guide.md) and [cursor-and-claude/best-practices/mcp-guide.md](../best-practices/mcp-guide.md).

**Fit for this hub:** Complements our skills/commands/hooks coverage with a **scheduled automation** angle and a **skill-routing hook** idea we don't otherwise document. Because of the missing license, this entry stays link-only.

---

## [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills)

**License:** MIT (per upstream README).

**What it is:** An open-source **marketplace** of Claude Code plugins and agent skills — ~2k stars. Ships 423 plugins, 2,849 skills, and 177 agents, distributed via the `ccpi` CLI and web catalog at tonsofskills.com. The `skills/` directory contains **500 standalone skills organized into 20 categories × 25 skills each**.

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

**Schema:** All 500 skills follow the 2025 Agent Skills schema (`name`, `description`, `allowed-tools`, `version`, `license`, `author`, `compatible-with: claude-code`).

**Honest assessment:** The skills are **breadth-first**. Individual SKILL.md files follow a consistent template (Overview / When to Use / Instructions / Examples / Prerequisites / Error Handling / Resources) but tend to be boilerplate-heavy rather than the deep, opinionated guidance you get from e.g. [obra/superpowers](https://github.com/obra/superpowers). The real value is the **taxonomy and coverage map** — useful as a checklist when deciding what to build or vendor.

**Install (upstream):**

```bash
/plugin marketplace add jeremylongshore/claude-code-plugins
```

Or via the `ccpi` CLI per upstream README.

**Use here:** Link-only. Use the category taxonomy as a **coverage map** when auditing skill gaps in your own project, and cherry-pick individual skills by name (MIT-licensed — attribute to Jeremy Longshore).

**Fit for this hub:** Sits alongside [openclaw/](../../openclaw/) as another large-scale Claude Code skill directory to reference. Our own [cursor-and-claude/skills/](../skills/README.md) stays curated and deep; this repo is the wide-catalog counterpart.

---

## [obra/superpowers](https://github.com/obra/superpowers)

**License:** MIT.

**What it is:** Jesse Vincent's (obra) curated collection of **foundational Claude Code skills** for design, planning, execution, quality, and multi-agent work. The most widely-vendored skill set in the Claude Code community.

**Skills available upstream (14):** `brainstorming`, `writing-plans`, `executing-plans`, `finishing-a-development-branch`, `test-driven-development`, `systematic-debugging`, `verification-before-completion`, `receiving-code-review`, `requesting-code-review`, `using-git-worktrees`, `dispatching-parallel-agents`, `subagent-driven-development`, `writing-skills`, `using-superpowers`.

**Vendored in this hub (as of 2026-04-21):** **all 14** skills under [cursor-and-claude/skills/](../skills/). Each skill directory preserves the upstream SKILL.md and any ancillary files (`code-reviewer.md`, prompt files, `references/`, etc.).

**Fit for this hub:** These are the backbone of our workflow/quality/multi-agent sections in [cursor-and-claude/skills/README.md](../skills/README.md). Nearly every other skill we ship is downstream of one of these.

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

**Fit for this hub:** Primary bridge between **designers** and **AI-assisted development** — fills the gap between [cursor-and-claude/skills/frontend-design/](../skills/frontend-design/) (how to build distinctive UI) and [cursor-and-claude/skills/web-design-guidelines/](../skills/web-design-guidelines/) (how to audit UI). Natural pair with [VoltAgent/awesome-design-md](#voltagentawesome-design-md) which is a community collection that follows this same format.

---

## Maintenance

When adding new upstream repos to this hub: extend this catalog, then link it from [references/README.md](./README.md) and from [nice-projects/README.md](../../nice-projects/README.md) if the entry is also a “project to watch.”

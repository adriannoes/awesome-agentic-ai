# Upstream repositories catalog

Curated notes on external repos that complement **Cursor**, **Claude Code**, and **vibe coding** workflows.  
**Vendored** entries live under [cursor-claude-codex/skills/](../skills/README.md), [tools/](../tools/), or [references/design-md/](./design-md/); **link-only** entries are catalogued here for discovery. All descriptions reflect public READMEs and repository layout as of the exploration date.

**See also:** [nice-projects/README.md](../../nice-projects/README.md) (projects to watch) · [openclaw/README.md](../../openclaw/README.md) (OpenClaw ecosystem)

| Repo | Vendored? | Upstream |
|------|-----------|----------|
| Vercel Agent Skills | ✅ partial/full | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| Superpowers (core skills) | ✅ 14 skills | [obra/superpowers](https://github.com/obra/superpowers) |
| Claude BugHunter | ✅ 51 skills | [xiaolai/Claude-BugHunter](https://github.com/xiaolai/Claude-BugHunter) |
| Anthropic Cybersecurity Skills | ✅ 83 skills | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) |
| Taste skills (anti-slop UI) | ✅ 13 skills | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
| Skills for Real Engineers | ✅ 13 skills | [mattpocock/skills](https://github.com/mattpocock/skills) |
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
| Code Review Graph | ❌ link only | [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) |
| Awesome DESIGN.md | ❌ link only | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) |
| claude-md (hooks + CLAUDE.md) | ❌ link only | [iamfakeguru/claude-md](https://github.com/iamfakeguru/claude-md) |
| Claw Code | ❌ link only | [ultraworkers/claw-code](https://github.com/ultraworkers/claw-code) |
| Agentic AI prompt research | ❌ link only | [Leonxlnx/agentic-ai-prompt-research](https://github.com/Leonxlnx/agentic-ai-prompt-research) |
| HumanLayer / CodeLayer | ❌ link only | [humanlayer/humanlayer](https://github.com/humanlayer/humanlayer) |
| Claude Code Showcase | ❌ reference only | [ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase) |

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

**Fit for this hub:** Complements [cursor-claude-codex/skills/README.md](../skills/README.md) and [cursor-claude-codex/best-practices/](../best-practices/) for frontend and UI audits.

---

## [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)

**What it is:** Local **knowledge graph** for Claude Code: persistent map of the codebase so reviews and daily work ingest fewer irrelevant tokens (upstream claims large token reductions; verify in your own projects).

**Layout explored (root):** `.mcp.json`, `CLAUDE.md`, `CHANGELOG.md`, `.github/` — typical Claude Code + MCP integration layout.

**Use here:** Clone or follow upstream install in a project where you want graph-backed context. Keep this repo as a **pointer only** unless you decide to submodule or document a specific setup.

**Fit for this hub:** Pairs with [cursor-claude-codex/commands/code-review.md](../commands/code-review.md) and code-review workflows; advanced context engineering.

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

**Fit for this hub:** Complements [cursor-claude-codex/security/](../security/) and team discipline docs; does **not** replace reading Anthropic’s own Claude Code docs.

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

**Vendored in this hub (as of 2026-04-21):** [skills/harness/](../skills/harness/) — full skill (SKILL.md + references/). ⚠️ Upstream SKILL.md body is in **Korean**; useful if you read Korean or want to study the pattern of a meta-skill that bootstraps domain-specific agent teams. For an English-first alternative, see our own [cursor-claude-codex/references/agentic-patterns.md](./agentic-patterns.md).

**Fit for this hub:** Extends multi-agent thinking beyond [cursor-claude-codex/references/agentic-patterns.md](./agentic-patterns.md).

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

**Fit for this hub:** Sits alongside [openclaw/](../../openclaw/) as another large-scale Claude Code skill directory to reference. Our own [cursor-claude-codex/skills/](../skills/README.md) stays curated and deep; this repo is the wide-catalog counterpart.

---

## [obra/superpowers](https://github.com/obra/superpowers)

**License:** MIT.

**What it is:** Jesse Vincent's (obra) curated collection of **foundational Claude Code skills** for design, planning, execution, quality, and multi-agent work. The most widely-vendored skill set in the Claude Code community.

**Skills available upstream (14):** `brainstorming`, `writing-plans`, `executing-plans`, `finishing-a-development-branch`, `test-driven-development`, `systematic-debugging`, `verification-before-completion`, `receiving-code-review`, `requesting-code-review`, `using-git-worktrees`, `dispatching-parallel-agents`, `subagent-driven-development`, `writing-skills`, `using-superpowers`.

**Vendored in this hub (as of 2026-04-21):** **all 14** skills under [cursor-claude-codex/skills/](../skills/). Each skill directory preserves the upstream SKILL.md and any ancillary files (`code-reviewer.md`, prompt files, `references/`, etc.).

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

1. **Grilling sessions.** `/grill-me` (non-code) and `/grill-with-docs` (code) interview the user relentlessly about a plan until reaching shared understanding. `/grill-with-docs` also produces an ADR and a `CONTEXT.md` (ubiquitous-language doc) so the agent stops being verbose in subsequent sessions.

2. **Triage state machine.** `/triage` defines `bug`/`enhancement` × 5 states (`needs-triage`, `ready`, `in-progress`, `blocked`, `done`) plus an `AGENT-BRIEF.md` format for AFK agents. Pairs with `/to-issues` (bulk convert) and `/to-prd` (PRD generator).

3. **Zoom out.** `/zoom-out` is the antidote to agent tunnel-vision — pause, take stock, recalibrate.

**Layout explored upstream:**
- `skills/engineering/` — 9 active skills (diagnose, grill-with-docs, improve-codebase-architecture, setup-matt-pocock-skills, tdd, to-issues, to-prd, triage, zoom-out)
- `skills/productivity/` — 3 skills (caveman, grill-me, write-a-skill)
- `skills/misc/` — 4 skills (git-guardrails-claude-code, migrate-to-shoehorn, scaffold-exercises, setup-pre-commit)
- `skills/personal/` — 2 Matt-specific (edit-article, obsidian-vault)
- `skills/deprecated/` — 4 deprecated (design-an-interface, qa, request-refactor-plan, ubiquitous-language)

**Vendored in this hub (as of 2026-05-03):** [skills/matt-pocock/](../skills/matt-pocock/) — 13 of the 22 active skills (engineering: 8, productivity: 3, misc: 2). We skipped `setup-matt-pocock-skills` (installer-specific), `migrate-to-shoehorn` (TS-library-specific), `scaffold-exercises` (course-specific), the entire `personal/` folder, and all `deprecated/` skills. See the [folder README](../skills/matt-pocock/README.md) for the full skip rationale.

**Install upstream (alternative):**

```bash
npx skills@latest add mattpocock/skills
```

Then run `/setup-matt-pocock-skills` in your agent — it asks about your issue tracker (GitHub/Linear/local) and triage labels.

**Fit for this hub:** Provides a different angle on skills we already have (`tdd`, `diagnose`, `write-a-skill` from obra/superpowers vs Matt's versions) and adds genuinely new patterns (`grill-with-docs` ubiquitous-language ADRs, `triage` state machine, `zoom-out`). Reading both is recommended.

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

**What it is:** **754** agentskills.io playbooks across **26** security domains (DFIR, SOC, threat hunting, cloud/container security, malware analysis, DevSecOps, compliance, etc.). Each skill maps to MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, and NIST AI RMF. **Community project — not affiliated with Anthropic PBC** despite the name.

**Install (canonical — prefer for day-to-day updates):**

```bash
npx skills add mukul975/Anthropic-Cybersecurity-Skills
```

**Vendored in this hub (as of 2026-06-10):** [skills/anthropic-cybersecurity-skills/](../skills/anthropic-cybersecurity-skills/) — **83 skills** cherry-picked from tag **v1.2.0** (DFIR, threat hunting, SOC, malware, cloud audit/CSPM, DevSecOps, IR, compliance). Hub README: [anthropic-cybersecurity-skills/README.md](../skills/anthropic-cybersecurity-skills/README.md); upstream README: [UPSTREAM-README.md](../skills/anthropic-cybersecurity-skills/UPSTREAM-README.md); pick list: [PICK-LIST.md](../skills/anthropic-cybersecurity-skills/PICK-LIST.md). Refresh: [scripts/cherry-pick-acs.sh](../../scripts/cherry-pick-acs.sh) · [MAINTENANCE.md](../MAINTENANCE.md#mukul975anthropic-cybersecurity-skills).

**Honest assessment:** High-quality practitioner workflows (sampled: memory forensics with Volatility3, credential-hunting playbooks). Repo is large (~13 MB, 754 skills); full mirror is justified only for offline use or pinned enterprise snapshots. Overlaps partially with [bug-hunter](../skills/bug-hunter/) on web pentest/red team but is **much broader on blue-team IR**. Run [skill-security-auditor](../skills/alirezarezvani-skills/skill-security-auditor/) before vendoring; treat like bug-hunter — authorized scope only, no global `alwaysApply`.

**Fit for this hub:** Complements [skills/bug-hunter/](../skills/bug-hunter/) (offensive bounty/pentest) and defensive [security/](../security/) with SOC/DFIR/threat-hunting depth. Pin to release tags (latest: [v1.2.0](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/releases/tag/v1.2.0)) if mirroring.

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

## Maintenance

When adding new upstream repos to this hub: extend this catalog, then link it from [references/README.md](./README.md) and from [nice-projects/README.md](../../nice-projects/README.md) if the entry is also a “project to watch.”

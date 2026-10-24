# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
adapted for a knowledge hub (content batches, not library APIs).

## [Unreleased]

### Added

- **nice-projects:** [OpenLAIR/dr-claw](https://github.com/OpenLAIR/dr-claw) — research workspace under **Research workspaces** (catalog placement from review of [#14](https://github.com/adriannoes/awesome-agentic-ai/pull/14))

## [1.5.0] - 2026-10-24

Vendored presentation + hiring skills, labml paper-code index, design/motion/video catalogs, and security/OpenCode discovery expansion.

### Highlights

- **408** agent skills · **108** papers (11 themes) · **201** notebooks · **9** textbooks
- **112** curated GitHub projects · **65** upstream repos (catalog) · **5,380** OpenClaw skills · **18** industry reports
- Vendored **ppt-master** (native PPTX) and **every-hiring-automations-kit** (4 Codex hiring skills)
- Link-only: **labml** annotated papers, **Opus 5.5** prompt gallery, **design/motion/video** stack (HyperFrames, video-shotcraft, Blender MCP, …)
- Security/OpenCode catalogs (morluto RE, awesome-opencode, plugin87 XIAS) + **AVOID** note for Open-ClaudeCode

### Added

- **Skills / ppt-master:** [cursor-claude-codex/skills/ppt-master/](cursor-claude-codex/skills/ppt-master/) — vendored [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) (MIT, ~60k ★): native editable PPTX workflow (`skills/ppt-master/` @ `b4efe3d`, skill v6.7.0) + hub README (Python deps, `.env`, refresh recipe)
- **Skills / every-hiring:** [cursor-claude-codex/skills/every-hiring-automations-kit/](cursor-claude-codex/skills/every-hiring-automations-kit/) — vendored [EveryInc/every-hiring-automations-kit-public](https://github.com/EveryInc/every-hiring-automations-kit-public) @ `4ecc464`: 4 hiring skills + worksheets/blueprints (Codex; no SPDX license upstream)
- **Catalog (link-only):** [morluto/awesome-reverse-engineering](https://github.com/morluto/awesome-reverse-engineering) (CC0 RE + MCP catalog, CAUTION), [awesome-opencode/awesome-opencode](https://github.com/awesome-opencode/awesome-opencode) (CC0 OpenCode ecosystem, CAUTION), [plugin87/ux-ui-agent-skills](https://github.com/plugin87/ux-ui-agent-skills) (MIT XIAS kit, link-only RECOMMEND) — `nice-projects/`, [upstream-repos-catalog.md](cursor-claude-codex/references/upstream-repos-catalog.md), cross-links from [bug-hunter](cursor-claude-codex/skills/bug-hunter/README.md)
- **Catalog (assessment only):** [LING71671/Open-ClaudeCode](https://github.com/LING71671/Open-ClaudeCode) — documented **AVOID** (proprietary Claude Code redistribution); negative pointer under Prompts & Resources, not promoted in main list
- **Catalog (link-only):** [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) — MIT **700+** Opus 5.5 creative-coding prompt gallery (motion, 3D, explainers); [nice-projects § Prompts](nice-projects/README.md#prompts--resources), [prompt-engineering](prompt-engineering/README.md), [designers path](docs/paths/designers.md)
- **Catalog (link-only, design/motion/video):** [blender-mcp](https://github.com/ahujasid/blender-mcp), [img2threejs](https://github.com/img2threejs/img2threejs), [video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft), [hyperframes](https://github.com/heygen-com/hyperframes), [penpot](https://github.com/penpot/penpot), [remotion](https://github.com/remotion-dev/remotion), [lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) — [nice-projects § Design, motion & agent video](nice-projects/README.md#design-motion--agent-video-link-only), [upstream-repos-catalog](cursor-claude-codex/references/upstream-repos-catalog.md), [designers path](docs/paths/designers.md), [ecosystem](docs/ecosystem.md)
- **Research / catalog (link-only):** [labmlai/annotated_deep_learning_paper_implementations](https://github.com/labmlai/annotated_deep_learning_paper_implementations) — MIT **60+** annotated PyTorch papers at [nn.labml.ai](https://nn.labml.ai); hub pointer [research/labml-annotated-papers/](research/labml-annotated-papers/), [nice-projects](nice-projects/README.md#research--papers), cross-links in [papers/](papers/README.md), [learning/](learning/README.md), [learners path](docs/paths/learners.md)

### Changed

- Hub counts: **403** → **408** agent skills; curated GitHub projects **100** → **112**; upstream catalog **50** → **65** entries ([references/README.md](cursor-claude-codex/references/README.md))
- **Docs:** Cross-link pass — [docs/README.md](docs/README.md), [docs/about.md](docs/about.md), [CONTRIBUTING.md](CONTRIBUTING.md), [README.md](README.md), [AGENTS.md](AGENTS.md), persona paths, [docs/ecosystem.md](docs/ecosystem.md); [docs/stats.md](docs/stats.md) synced (**2026-10-23**)

### Removed

- **Infrastructure:** Public `bin/count-hub-stats.sh` and `bin/count-skills.sh` (use maintainer `scripts/` checkout instead)

## [1.4.0] - 2026-10-09

pstack + emilkowalski skills, harness paper, and catalog expansion ([#28](https://github.com/adriannoes/awesome-agentic-ai/pull/28); agent survey paper lists in [#26](https://github.com/adriannoes/awesome-agentic-ai/pull/26)).

### Highlights

- **403** agent skills · **108** papers (11 themes) · **201** notebooks · **9** textbooks
- **100** curated GitHub projects · **35** upstream sources · **5,380** OpenClaw skills · **18** industry reports
- Vendored **pstack 0.15.5** (`/poteto-mode`, playbooks, principles) and **emilkowalski** (14 design/motion skills)
- *Harness Engineering* PDF (eleven coding harnesses) · Grok Bot, ai-engineering-from-scratch, and engineering-articles catalogs

### Added

- **Papers / catalog (link-only):** [js-lee-AI/awesome-agent-loop-papers](https://github.com/js-lee-AI/awesome-agent-loop-papers) and [js-lee-AI/awesome-llm-agent-papers](https://github.com/js-lee-AI/awesome-llm-agent-papers) — companion paper lists for *The Agent Loop* (Lee & Park, SSRN 2026) and *LLM Agents: A Survey* (Lee, Preprints.org 2026); listed under Agent research (external references) in [papers/README.md](papers/README.md) ([#26](https://github.com/adriannoes/awesome-agentic-ai/pull/26))
- **Skills / pstack:** [cursor-claude-codex/skills/pstack/](cursor-claude-codex/skills/pstack/) — vendored pstack **0.15.5** (Lauren Tan, MIT): 47 `SKILL.md` packages (`/poteto-mode`, 23 playbooks, 24 command skills, 23 principles), 2 agents, and hub-authored [usage guide](cursor-claude-codex/skills/pstack/guide/) with 24 command pages
- **nice-projects / catalog (link-only):** [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot) — CC0 bilingual Grok Bot / Grok Build awesome list (~1,974 entries); new [Cursor & Grok Bot](nice-projects/README.md#cursor--grok-bot-xai-cloud-agents) section (cloud xAI + Cursor agents vs local [OpenClaw](openclaw/README.md))
- **Skills / emilkowalski:** [cursor-claude-codex/skills/emilkowalski/](cursor-claude-codex/skills/emilkowalski/) — vendored [emilkowalski/skills](https://github.com/emilkowalski/skills) (MIT, ~43k ★): **14** design-engineering + animation skills @ `e8a175d` (`emil-design-eng`, `animate`, `review-animations`, `mobile-native`, `ask-sonner`, …)
- **Papers / agents-and-engineering:** [Harness Engineering: Anatomy, Architecture, and Evolution of Coding Agents](papers/agents-and-engineering/Harness%20Engineering_%20Anatomy%2C%20Architecture%2C%20and%20Evolution%20of%20Coding%20Agents.pdf) (Barbaste et al., 2026) — source-code study of eleven coding harnesses (Claude Code, Codex CLI, Gemini CLI, OpenHands, OpenClaw, …); [arXiv:2609.00006](https://arxiv.org/abs/2609.00006)
- **nice-projects / catalog (link-only):** [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) — MIT **523**-lesson AI engineering curriculum (agents, MCP, Agent Skills, coding agents); [learners path](docs/paths/learners.md)
- **nice-projects / catalog (link-only):** [harshit3011/Technical-Engineering-Articles](https://github.com/harshit3011/Technical-Engineering-Articles) — MIT index of **69** HLD/LLD, backend, distributed-systems, and AI-engineering threads ([@Harry_The_Nerd](https://x.com/Harry_The_Nerd) on X)

### Changed

- Hub counts: **342** → **403** agent skills; **107** → **108** research papers; upstream sources **33** → **35**; curated GitHub projects **96** → **100**
- **references:** pstack, awesome-grok-bot, and emilkowalski rows in the [upstream catalog](cursor-claude-codex/references/upstream-repos-catalog.md); [references/README.md](cursor-claude-codex/references/README.md) catalog count **47** → **50**
- **ecosystem / prompts:** cross-links from [docs/ecosystem.md](docs/ecosystem.md) and [prompt-engineering/README.md](prompt-engineering/README.md)

### Fixed

- Broken relative links in hub-authored docs: [pstack guide](cursor-claude-codex/skills/pstack/guide/) playbook and principle indexes (46), [awesome-evals README](cursor-claude-codex/references/awesome-evals/README.md) (18), agentic-patterns, and upstream catalog

## [1.3.0] - 2026-09-26

Agent entrypoint and open-models paper batch ([#22](https://github.com/adriannoes/awesome-agentic-ai/pull/22)).

### Highlights

- **342** agent skills · **107** papers (11 themes) · **201** notebooks · **9** textbooks
- **96** curated GitHub projects · **33** upstream sources · **5,380** OpenClaw skills · **18** industry reports
- Root [AGENTS.md](AGENTS.md) so a connected agent can apply vendored skills and study local materials
- New [papers/open-models/](papers/open-models/) theme from Nathan Lambert's open-source AI reading list

### Added

- **Agents:** [AGENTS.md](AGENTS.md) — map of skills, papers, notebooks, textbooks, and reports, plus rules for reading vendored `SKILL.md` files. [CLAUDE.md](CLAUDE.md) points Claude Code at it. README section **Connect an agent**.
- **Papers / open-models:** new theme [papers/open-models/](papers/open-models/) — 8 PDFs from [Nathan Lambert's Open-Source AI reading list](https://www.interconnects.ai/p/open-source-ai-reading-list) (Solaiman release gradient, Kapoor/Bommasani societal impact, Longpre consent audit, Panfilov distillation traces, Pythia, OLMo 1/2/3); essays and reports link-only in [open-models/README.md](papers/open-models/README.md)
- **Papers:** [CodeMidas](https://arxiv.org/abs/2609.22068) (Ye et al., Xiaomi / PKU, 2026) — scale agentic coding RL environments from source code itself (5,545 tasks, execution-grounded verifiers); PDF in [papers/agents-and-engineering/](papers/agents-and-engineering/)
- **Papers:** [Grounded Skill Synthesis from Code at Scale](https://arxiv.org/abs/2609.05571) (Tong et al., Ant International, 2026) — Code2Skill pipeline and CodeSkillBank (1M+ verified skills mined from GitHub); PDF in [papers/agents-and-engineering/](papers/agents-and-engineering/)
- **Papers:** [DeepSeek-V4.1-Flash](https://arxiv.org/abs/2609.19969) (DeepSeek-AI, 2026) — 1M-context MoE with CSA2 + FP4 KV cache compression for input-heavy agent workloads; PDF in [papers/models-and-training/](papers/models-and-training/)
- **Papers:** [The Last AI Built by Humans](https://arxiv.org/abs/2609.11873) (Duan et al., SJTU / Theseus Labs, 2026) — RSI roadmap (Headroom-Closed Index, autonomy stages, scenario requirements); PDF in [papers/perspectives-and-futures/](papers/perspectives-and-futures/)
- **Papers:** [SoL-Pi](https://arxiv.org/abs/2609.20519) (Liu et al., NVIDIA / NTU / MIT, 2026) — scale auto-research loops to discover harness efficiency mechanisms (action fusion, context compact, ObservationPack, evidence-preserving reducer); PDF in [papers/agents-and-engineering/](papers/agents-and-engineering/)
- **Papers:** [WikiSkill](https://arxiv.org/abs/2608.27454) (Tang et al., Google Research, 2026) — compile agent execution experience into a persistent wiki that co-evolves reusable skills; PDF in [papers/agents-and-engineering/](papers/agents-and-engineering/)
- **nice-projects / catalog (link-only):** [theseus-labs-rsi/awesome-rsi](https://github.com/theseus-labs-rsi/awesome-rsi) — curated RSI paper and project list; companion to [*The Last AI Built by Humans*](papers/perspectives-and-futures/The%20Last%20AI%20Built%20by%20Humans_%20Toward%20Genuine%20Recursive%20Self-Improvement.pdf)
- **nice-projects / catalog (link-only):** [mblode/agent-skills](https://github.com/mblode/agent-skills) — MIT pack (~26 skills) for UI/typography audits, docs, PR review, and releases. Pointer only (overlaps taste-skills / impeccable); install via `npx skills add mblode/agent-skills` ([#21](https://github.com/adriannoes/awesome-agentic-ai/pull/21))

### Changed

- Hub counts: **93** → **107** research papers (11 themes incl. open-models); **94** → **96** curated GitHub projects (sync + awesome-rsi)
- GitHub repository description refreshed to the counts above (skills, papers, notebooks, textbooks, reports, projects, OpenClaw)

## [1.2.0] - 2026-08-28

Design/diagram skill batch and papers backfill ([#19](https://github.com/adriannoes/awesome-agentic-ai/pull/19)).

### Highlights

- **342** agent skills · **93** papers · **201** notebooks · **9** textbooks
- **94** curated GitHub projects · **33** upstream sources · **5,380** OpenClaw skills
- Seven new skill packs (Archify, Diagram Design, Frontend Slides, UI UX Pro Max, Impeccable, Humanizer, i-have-adhd) plus **+11** historical papers

### Added

- **Skills:** [tt-a1i/archify](https://github.com/tt-a1i/archify) — interactive architecture / workflow / sequence / data-flow / lifecycle diagram skill (MIT, ~18k ★), vendored at [cursor-claude-codex/skills/archify/](cursor-claude-codex/skills/archify/)
- **Skills:** [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) — editorial HTML/SVG diagrams, 39 layout types (MIT, ~28k ★)
- **Skills:** [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) — ADHD-friendly output-contract skill (MIT, ~25k ★)
- **Skills:** [blader/humanizer](https://github.com/blader/humanizer) — rewrite AI-sounding prose without changing claims (MIT, ~38k ★)
- **Skills:** [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) — zero-dependency 16:9 HTML presentations (MIT, ~28k ★)
- **Skills:** [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) — 7 design-intelligence skills (MIT, ~122k ★)
- **Skills:** [pbakaus/impeccable](https://github.com/pbakaus/impeccable) — frontend craft commands + anti-pattern detector, sparse copy (Apache-2.0, ~63k ★)
- **nice-projects / catalog (link-only):** [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) (~81k ★) and [Nutlope/hallmark](https://github.com/Nutlope/hallmark) (~27k ★)
- **Papers:** 11 PDFs from the historical Learning series that were not yet in `papers/` — backprop, LSTM, Bahdanau attention, Nature DQN, AlphaGo, PPO, LoRA, Chain-of-Thought, Let's Verify Step by Step, Mixtral, Kimi K3

### Changed

- **Skills refresh:** [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) pin `b177427` → `ccbc156`; [google-labs-code/design.md](https://github.com/google-labs-code/design.md) spec **0.3.0 → 0.4.0**
- **Infrastructure:** scope `.gitignore` `scripts/` to the repo root so vendored skill CLIs are tracked (includes ACS helpers previously hidden by the unanchored pattern)
- Hub counts: **329** → **342** agent skills; **82** → **93** research papers; **85** → **94** curated GitHub projects; upstream sources **26** → **33**

## [1.1.0] - 2026-08-21

Significant content batch: new textbook, **+12** curated GitHub projects (agent learning paths, MCP, system design), and a slimmer hub README.

### Highlights

- **329** agent skills · **82** papers · **201** notebooks · **9** textbooks (**+1** Competitive Programmer's Handbook)
- **85** curated GitHub projects (**+12** since v1.0.0) including Microsoft/Hugging Face agent courses and MCP catalog
- **docs/** navigation layer — persona paths, stats, ecosystem links, about

### Added

- **Learning:** *Competitive Programmer's Handbook* (Laaksonen, CC BY-NC-SA 4.0) with CSES Problem Set cross-links
- **nice-projects:** 10 “Learn AI Agents” repos — courses (`ai-agents-for-beginners`, `agents-course`), tutorials (`awesome-llm-apps`, `GenAI_Agents`, `ai-engineering-hub`), catalogs (`free-ai-agents-resources`, `500-AI-Agents-Projects`, `awesome-ai-agents`), MCP index (`awesome-mcp-servers`), paper backlog (`LLM-Agent-Paper-List` also in `papers/README.md`)
- **nice-projects:** [system-design-notes](https://github.com/liquidslr/system-design-notes) under Study material
- **nice-projects:** [Orkas](https://github.com/Orkas-AI/Orkas) under Agent Platforms ([#16](https://github.com/adriannoes/awesome-agentic-ai/pull/16))
- **Papers:** external agent research section — [LLM-Agent-Paper-List](https://github.com/WooooDyy/LLM-Agent-Paper-List) backlog link
- **Infrastructure:** `docs/` (`paths/`, `stats.md`, `ecosystem.md`, `about.md`); `bin/count-hub-stats.sh` and `bin/count-skills.sh`

### Changed

- **README:** trimmed to hub map + persona quick-start links; detailed catalogs stay in area READMEs
- Hub counts synced (**73** → **85** curated GitHub projects; textbooks **8** → **9**; upstream sources **25** → **26** after `davidondrej/skills`)

## [1.0.0] - 2026-08-15

First official release of the **AGENTIC AI** learning hub.

### Highlights

- **329** agent skills (Cursor, Claude Code & Codex)
- **82** research papers across **10** themes
- **18** industry reports · **201** ML notebooks · **8** textbooks
- **5,380** OpenClaw skills indexed · **73** curated GitHub projects

### Added

- **Papers:** expanded collection from 53 to **82** PDFs; new `ai-foundations/` theme; additions across early DL, foundation models, alignment, generative models, frontier model reports, agents, and MT-Bench ([#12])
- **Learning:** *The Agentic SDLC Handbook* with cross-links from product-management and references
- **Reports:** *Situational Awareness* (Aschenbrenner) with SDLC cross-links
- **Changelog:** version history and release strategy for future hub updates

### Changed

- Hub counts refreshed in `README.md` and GitHub repo description (82 papers / 18 reports / 8 textbooks)

## [0.7.0] - 2026-07-25

Catalog expansion across learning, papers, and reports ([#10](https://github.com/adriannoes/awesome-agentic-ai/pull/10)).

### Added

- **Learning:** *Hitchhiker's Guide to Agentic AI*, *Practical Guide to Bare Metal C++*
- **Papers:** RoPoLL in `papers/reliability-and-reasoning/`
- **Reports:** Graph Engineering / Andrew Ng playbook
- Cross-references across `learning/`, `research/`, `reports/`, `agentic-patterns.md`, and `awesome-evals`

### Changed

- Hub counts bumped to **7** textbooks, **52** papers, and **17** reports

## [0.6.0] - 2026-07-18

Rebrand and catalog refresh ([#9](https://github.com/adriannoes/awesome-agentic-ai/pull/9)).

### Changed

- Root README ASCII banner from **VIBE CODING** to **AGENTIC AI**
- Hub self-links updated for repository rename to `awesome-agentic-ai`
- Learning and project catalogs expanded

## [0.5.0] - 2026-06-25

Community contributions and upstream refresh.

### Added

- **Community:** [NotFair](https://github.com/nowork-studio/NotFair) — Claude Code skills for SEO, Google Ads & Meta Ads ([#5](https://github.com/adriannoes/awesome-agentic-ai/pull/5))
- **Community:** [Xquik](https://github.com/kriptoburak/Xquik) — web crawling & data resource ([#6](https://github.com/adriannoes/awesome-agentic-ai/pull/6))
- **Papers:** BinEval evaluation paper (collection at **49** PDFs)
- **nice-projects:** [rust-norion](https://github.com/yanghao1143/rust-norion) agent control-layer prototype ([#8](https://github.com/adriannoes/awesome-agentic-ai/pull/8))

### Changed

- **Papers:** reorganized PDFs into **9** themes
- Upstream skills, notebooks, and repos refreshed; hub counts synced (**68** → **73** GitHub projects)
- README banner fix and header simplification

## [0.4.0] - 2026-06-11

Major hub expansion — `cursor-claude-codex` ([#4](https://github.com/adriannoes/awesome-agentic-ai/pull/4)).

### Added

- **Tools:** [codex-profiles](https://github.com/Ducksss/codex-profiles) CLI vendored under `cursor-claude-codex/tools/`
- **Skills:** playwright-pro, anthropic-cybersecurity, bug-hunter, taste-skills, business-automation, and more
- **Governance:** `CODEOWNERS`, `agentic-clean-code` best practice, agent-harness papers
- **Skills:** Matt Pocock skills from [mattpocock/skills](https://github.com/mattpocock/skills)
- **References:** design.md and upstream catalog entries

### Changed

- Renamed `cursor-and-claude` → `cursor-claude-codex`
- READMEs, `CONTRIBUTING.md`, and cross-references updated

## [0.3.0] - 2026-03-18

Agent skills, OpenClaw, and hub structure.

### Added

- **Rules:** integrated rules from **9** external sources plus **10** from [cursor.directory](https://cursor.directory)
- **Skills:** Vercel `web-design-guidelines` and `react-best-practices`
- **Hub:** slash commands, OpenClaw agents snapshot, autoresearch references
- **Catalog:** upstream ecosystem catalog and cross-links
- **Maintenance:** scripts for rules integration

### Changed

- Renamed `cursor-rules` → `cursor`; added `learning/` and `papers/` sections
- Normalized `.mdc` rule files to `.md`
- Root README expanded with quick-start paths

## [0.2.0] - 2026-01-14

Research, learning materials, and project curation.

### Added

- **Research:** Karpathy *Neural Networks: Zero to Hero* notebooks
- **Research:** *LLMs from Scratch* notebooks and exercises
- **Research:** *Understanding Deep Learning* notebooks and book PDF
- **Research:** additional ML notebook collections
- **nice-projects:** curated list of starred GitHub projects by category
- **nice-projects:** gen-ai-experiments, awesome-AI-driven-development
- **Docs:** integration plan and n8n cheat sheet
- **Papers & reports:** initial PDF collections with themed organization

### Changed

- `.gitignore` updated for macOS system files

## [0.1.0] - 2025-10-12

Initial hub launch ([#1](https://github.com/adriannoes/awesome-agentic-ai/pull/1)).

### Added

- Repository structure for AI-assisted product building
- Root README with quick-start paths for PMs, Designers, Developers, and Learners
- Foundation folders: cursor rules, prompts, n8n templates, research

[Unreleased]: https://github.com/adriannoes/awesome-agentic-ai/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/adriannoes/awesome-agentic-ai/releases/tag/v1.2.0
[1.1.0]: https://github.com/adriannoes/awesome-agentic-ai/releases/tag/v1.1.0
[1.0.0]: https://github.com/adriannoes/awesome-agentic-ai/releases/tag/v1.0.0
[0.7.0]: https://github.com/adriannoes/awesome-agentic-ai/releases/tag/v0.7.0
[0.6.0]: https://github.com/adriannoes/awesome-agentic-ai/releases/tag/v0.6.0
[0.5.0]: https://github.com/adriannoes/awesome-agentic-ai/releases/tag/v0.5.0
[0.4.0]: https://github.com/adriannoes/awesome-agentic-ai/releases/tag/v0.4.0
[0.3.0]: https://github.com/adriannoes/awesome-agentic-ai/releases/tag/v0.3.0
[0.2.0]: https://github.com/adriannoes/awesome-agentic-ai/releases/tag/v0.2.0
[0.1.0]: https://github.com/adriannoes/awesome-agentic-ai/releases/tag/v0.1.0

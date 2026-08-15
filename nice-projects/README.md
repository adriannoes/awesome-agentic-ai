# Nice projects to follow & fork 🚀

A curated collection of **73** interesting open-source projects worth exploring, forking, and contributing to. This list is based on projects I've starred on GitHub and upstream sources vendored in this hub.

## Tools 🛠️

### Development & Productivity
- **[RepoBar](https://github.com/steipete/RepoBar)** - Show status of GitHub Repos right in your menu bar and terminal: CI, Issues, Pull Requests, Latest Release.
- **[Homebrew](https://github.com/Homebrew/homebrew-core)** - 🍻 Default formulae for the missing package manager for macOS (or Linux)
- **[line_profiler](https://github.com/pyutils/line_profiler)** - Line-by-line profiling for Python
- **[Hasura GraphQL Engine](https://github.com/hasura/graphql-engine)** - Blazing fast, instant realtime GraphQL APIs on all your data with fine grained access control, also trigger webhooks on database events.
- **[qBittorrent](https://github.com/qbittorrent/qBittorrent)** - qBittorrent BitTorrent client
- **[SiYuan](https://github.com/siyuan-note/siyuan)** - A privacy-first, self-hosted, fully open source personal knowledge management software, written in typescript and golang.
- **[CloudMeet](https://github.com/dennisklappe/CloudMeet)** - Open-source Calendly alternative running on Cloudflare's free tier. Meeting scheduler with Google Calendar and Outlook sync.
- **[markform](https://github.com/jlevy/markform)** - Structured Markdown documents for agents and humans
- **[markdown-site](https://github.com/waynesutton/markdown-site)** - An open-source publishing framework built for AI agents and developers to ship websites, docs, or blogs. Write markdown, sync from the terminal.
- **[square-ui](https://github.com/ln-dev7/square-ui)** - Collection of beautifully crafted open-source layouts UI built with shadcn/ui.
- **[mapcn](https://github.com/AnmolSaini16/mapcn)** - Beautiful map components. 100% Free, Zero config, one command setup.
- **[Rust](https://github.com/rust-lang/rust)** - Empowering everyone to build reliable and efficient software.

### Web Crawling & Data
- **[teracrawl](https://github.com/BrowserCash/teracrawl)** - High-performance web crawler API optimized for LLMs. Turn any search or website into clean Markdown using remote browsers.
- **[Xquik](https://github.com/Xquik-dev/x-twitter-scraper)** - X/Twitter data API with REST, MCP, and webhook workflows.

## AI/ML 🤖

### Models & Frameworks
- **[DeepSeek-Coder](https://github.com/deepseek-ai/DeepSeek-Coder)** - DeepSeek Coder: Let the Code Write Itself
- **[Jan](https://github.com/janhq/jan)** - Jan is an open source alternative to ChatGPT that runs 100% offline on your computer.
- **[vLLM Recipes](https://github.com/vllm-project/recipes)** - Common recipes to run vLLM

### Research & Papers
- **[camel-prompt-injection](https://github.com/google-research/camel-prompt-injection)** - Code for the paper "Defeating Prompt Injections by Design"
- **[gen-ai-experiments](https://github.com/buildfastwithai/gen-ai-experiments)** - Collection of Jupyter notebooks designed to provide you with a comprehensive guide to various AI tools and technologies
- **[llm-architecture-gallery](https://github.com/rasbt/llm-architecture-gallery)** — Apache-2.0 source metadata (~1.4k ★) for Sebastian Raschka's [LLM Architecture Gallery](https://sebastianraschka.com/llm-architecture-gallery/): `models.yml` fact sheets (dates, diagram paths, links) for major LLM architectures. Link-only data export — live site is the UI. Visual companion to [research/llms-from-scratch/](../research/llms-from-scratch/) and the papers in [papers/foundation-models/](../papers/foundation-models/) (including [*Understanding Transformers and Attention Mechanisms*](../papers/foundation-models/Understanding%20Transformers%20and%20Attention%20Mechanisms_%20An%20Introduction%20for%20Applied%20Mathematicians.pdf)).

### Prompts & Resources
- **[awesome-copilot](https://github.com/github/awesome-copilot)** - Community-contributed instructions, prompts, and configurations to help you make the most of GitHub Copilot.
- **[product-manager-prompts](https://github.com/deanpeters/product-manager-prompts)** - A repository of Generative AI prompts for product managers using agents such as ChatGPT, Claude, & Gemini
- **[claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts)** - All parts of Claude Code's system prompt, 20 builtin tool descriptions, sub agent prompts (Plan/Explore/Task), utility prompts (CLAUDE.md, compact, statusline, magic docs, WebFetch, Bash cmd, security)

### Agent skills, UI specs & Claude ecosystem (hub catalog)

Structured notes (folder layout, install commands, how each fits our hub) live in **[cursor-claude-codex/references/upstream-repos-catalog.md](../cursor-claude-codex/references/upstream-repos-catalog.md)**. Upstream sources:

- **[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)** — Official Vercel Agent Skills (React/Next practices, web design guidelines, deploy skill, etc.); install via `npx skills add vercel-labs/agent-skills`.
- **[tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)** — Local knowledge graph for Claude Code / MCP to shrink context on reviews. Now released (v2.3.6, MIT, ~18.9k ★) with a GitHub Action for risk-scored PR review and a benchmark pipeline.
- **[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)** — Ready-made `DESIGN.md` design systems for agent-driven UI (73 site themes; MIT; great for PMs/designers).
- **[iamfakeguru/agent-md](https://github.com/iamfakeguru/agent-md)** — Cross-agent directives + hooks (renamed from `claude-md`; v4.1 "Archimedes") for safer Claude/Codex/Cursor/Windsurf/Aider workflows.
- **[ultraworkers/claw-code](https://github.com/ultraworkers/claw-code)** — Rust `claw` CLI agent harness (USAGE.md / rust workspace).
- **[Leonxlnx/agentic-ai-prompt-research](https://github.com/Leonxlnx/agentic-ai-prompt-research)** — Educational reconstructed prompts for agentic coding assistants.
- **[humanlayer/humanlayer](https://github.com/humanlayer/humanlayer)** — CodeLayer + HumanLayer SDK monorepo (team-scale agent orchestration). ⚠️ The GitHub repo is deprecated as of 2026-06; the rebuild lives at [humanlayer.com](https://humanlayer.com).
- **[revfactory/harness](https://github.com/revfactory/harness)** — Meta-skill / plugin to generate domain-specific agent teams and skills for Claude Code.
- **[ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase)** — Production-style Claude Code config (~6k ★): full `.claude/` layout with skill auto-activation hooks (`skill-eval.js` + `skill-rules.json`) and 4 scheduled GitHub Actions for PR review, docs sync, dependency audit, and code quality. *No license declared — reference only. Dormant since Jan 2026.*
- **[jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills)** — MIT-licensed marketplace (~2.4k ★) with 425 plugins, 2,810 skills, and 200 agents across 20 categories (DevOps, security, frontend, backend, ML, data, cloud, API, docs, automation). New MCP plugins (2026-06): `beads-dolt` (Dolt-backed task tracker), `databricks-workspace-mcp` (Databricks control plane), `governed-second-brain` (local-first governed knowledge). Install via `/plugin marketplace add jeremylongshore/claude-code-plugins` or the `ccpi` CLI.
- **[google-labs-code/design.md](https://github.com/google-labs-code/design.md)** — Google Labs (Apache-2.0): format specification for `DESIGN.md` — a persistent, tool-agnostic description of a visual identity that Claude Code, Cursor, Gemini, Codex, etc. can all read. Spec + 3 examples vendored at [cursor-claude-codex/references/design-md/](../cursor-claude-codex/references/design-md/); official CLI via `npx @google/design.md lint`.
- **[mattpocock/skills](https://github.com/mattpocock/skills)** — Matt Pocock (MIT, ~54k ★): "Skills for real engineers." Small, composable, model-agnostic skills for grilling sessions, deep-module design vocabulary, triage state machine, ADR/domain-modeling, handoff, and ask-matt. **20 vendored** at [cursor-claude-codex/skills/matt-pocock/](../cursor-claude-codex/skills/matt-pocock/); install upstream via `npx skills@latest add mattpocock/skills`.
- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** — MIT marketplace (~345 skills): we vendored **`skill-security-auditor`** (pre-install scan) and **`playwright-pro`** (E2E plugin) at [cursor-claude-codex/skills/alirezarezvani-skills/](../cursor-claude-codex/skills/alirezarezvani-skills/).
- **[xiaolai/Claude-BugHunter](https://github.com/xiaolai/Claude-BugHunter)** — Authorized bug bounty / external pentest bundle (51 skills, `cbh` CLI). Vendored at [cursor-claude-codex/skills/bug-hunter/](../cursor-claude-codex/skills/bug-hunter/); prefer [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) for upstream issues.
- **[Ducksss/codex-profiles](https://github.com/Ducksss/codex-profiles)** — MIT Bash CLI for isolated Codex CLI/Desktop profiles (`CODEX_HOME` per account). Vendored at [cursor-claude-codex/tools/codex-profiles/](../cursor-claude-codex/tools/codex-profiles/); install via `npm install -g codex-profile` or `brew install Ducksss/tap/codex-profile` for updates.
- **[obra/superpowers](https://github.com/obra/superpowers)** — MIT foundational Claude Code skills (brainstorming, TDD, debugging, plans, git worktrees, subagents). **14 skills** vendored at [cursor-claude-codex/skills/](../cursor-claude-codex/skills/) (top-level folders); install via `npx skills add obra/superpowers`.
- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** — Apache-2.0 blue-team / SOC / DFIR / AI-security / supply-chain / hardware-firmware playbooks (817 upstream; **109 cherry-picked** @ v1.3.0). Vendored at [cursor-claude-codex/skills/anthropic-cybersecurity-skills/](../cursor-claude-codex/skills/anthropic-cybersecurity-skills/).
- **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** — MIT anti-slop frontend design skills (13 variants: brutalist, minimalist, Stitch `DESIGN.md`, image comps). Vendored at [cursor-claude-codex/skills/taste-skills/](../cursor-claude-codex/skills/taste-skills/); install via `npx skills add https://github.com/Leonxlnx/taste-skill`.
- **[mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff)** — Apache-2.0: `frontend-design`, `update-changelog` skills and `git-commit` slash command vendored in [cursor-claude-codex/](../cursor-claude-codex/).
- **[karpathy/autoresearch](https://github.com/karpathy/autoresearch)** — Autonomous LLM research loop; skill vendored at [cursor-claude-codex/skills/autoresearch/](../cursor-claude-codex/skills/autoresearch/); notebooks in [research/autoresearch/](../research/autoresearch/).
- **[nibzard/awesome-agentic-patterns](https://github.com/nibzard/awesome-agentic-patterns)** — Apache-2.0 agent orchestration patterns; summarized at [cursor-claude-codex/references/agentic-patterns.md](../cursor-claude-codex/references/agentic-patterns.md).
- **[forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills)** — MIT LLM coding guidelines; vendored as [karpathy-guidelines.md](../cursor-claude-codex/best-practices/karpathy-guidelines.md).
- **[nowork-studio/NotFair](https://github.com/nowork-studio/NotFair)** — MIT Claude Code skills for SEO, GEO, and paid ads (~3k ★): [seo/](https://github.com/nowork-studio/NotFair/tree/main/seo) (site analysis, keyword research, meta tags, schema markup, content writing), [google-ads/](https://github.com/nowork-studio/NotFair/tree/main/google-ads) (audits, wasted-spend detection, keyword & bid management), and [meta-ads/](https://github.com/nowork-studio/NotFair/tree/main/meta-ads) (ROAS, creative fatigue, audience overlap). Connects to live data via Google Ads MCP, Meta Ads MCP, Google Search Console MCP, and Google Analytics (GA4) MCP.
- **[igoruehara/spec-driven](https://github.com/igoruehara/spec-driven)** — MIT Spec-Driven Development pipeline (Lean Inception → DDD → Technical Design Docs → SDD) with 15 Claude Code skills + templates + audit scripts + CI workflow. Upstream is pt-BR; this hub translated the prose to English to keep the repo consistent. Vendored at [cursor-claude-codex/skills/igoruehara-spec-driven/](../cursor-claude-codex/skills/igoruehara-spec-driven/) + [cursor-claude-codex/product-management/igoruehara-sdd/](../cursor-claude-codex/product-management/igoruehara-sdd/); install upstream via `npx @igoruehara/spec-driven@latest`.
- **[NVIDIA/skills](https://github.com/NVIDIA/skills)** — Official NVIDIA agent-skills catalog (~1.8k ★, Apache-2.0/CC-BY-4.0): ~230+ skills across 30+ NVIDIA product families (cuOpt, NeMo, TAO Toolkit, Jetson, VSS, MONAI, Megatron-Core, DALI, Holoscan, DeepStream, CUDA-Q, …). Daily-synced signed mirror — link-only here; install specific skills via `npx skills add nvidia/skills`.
- **[pengsida/learning_research](https://github.com/pengsida/learning_research)** — Human-facing research-methodology guide (Chinese, ~12.8k ★) for Ph.D. students by Peng Sida — finding problems, running experiments, writing/rebuttal/presenting. ⚠️ No license declared — link-only; the bulk of content lives on a living Notion doc.
- **[Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)** — MIT skill + live catalog (~1.6k ★) of 69 bounded AI-agent loops (feedback-cycle workflows with explicit trigger/action/verify/stop/handoff) across Engineering, Evaluation, Operations, Content, Design. Skill vendored at [cursor-claude-codex/skills/forward-future-loop-library/](../cursor-claude-codex/skills/forward-future-loop-library/); live catalog at `signals.forwardfuture.com/loop-library/`.
- **[Master-cai/Research-Paper-Writing-Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills)** — MIT agent skill (~4.3k ★) for section-by-section ML/CV/NLP research-paper rewriting, curated from Prof. Peng Sida's notes. Vendored at [cursor-claude-codex/skills/research-paper-writing/](../cursor-claude-codex/skills/research-paper-writing/); install via `npx skills add Master-cai/Research-Paper-Writing-Skills`.
- **[shreyashankar/plain-writing-skill](https://github.com/shreyashankar/plain-writing-skill)** — Plain-language prose skill (~200 ★) with optional HTML revision diff. No license declared upstream. Vendored at [cursor-claude-codex/skills/plain-writing/](../cursor-claude-codex/skills/plain-writing/); install via `git clone` into `~/.claude/skills/plain-writing`.
- **[benchflow-ai/awesome-evals](https://github.com/benchflow-ai/awesome-evals)** — CC0 curated, annotated, non-BS eval reference catalog (~0.2k ★) for building and evaluating AI agents: 443+ links across 10 themes (eval infrastructure, LLM-as-judge, agent-specific eval, safety/adversarial) + a `PATTERNS.md` runnable playbook (10 eval patterns with real Python code) + 146 deep reading notes. Vendored at [cursor-claude-codex/references/awesome-evals/](../cursor-claude-codex/references/awesome-evals/).
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — Apache-2.0 official code (~97k ★) for *Build a Large Language Model (From Scratch)* by Sebastian Raschka: 66 PyTorch notebooks implementing a ChatGPT-like LLM end-to-end (attention → GPT → pretrain → finetune → LoRA). Vendored at [research/llms-from-scratch/](../research/llms-from-scratch/); pairs with [research/reasoning-from-scratch/](../research/reasoning-from-scratch/) and the architecture overview in [llm-architecture-gallery](https://github.com/rasbt/llm-architecture-gallery) (Research & Papers above).
- **[huggingface/smol-course](https://github.com/huggingface/smol-course)** — Apache-2.0 Hugging Face course (~6.6k ★) on aligning small LLMs that runs locally: instruction tuning, DPO/ORPO, LoRA/PEFT, evaluation, vision-language models, synthetic data, inference, agents. English-only subset vendored at [research/smol-course/](../research/smol-course/).
- **[openai/openai-cookbook](https://github.com/openai/openai-cookbook)** — MIT official OpenAI API cookbook (~74k ★). Link-only here; the `examples/evaluation/` slice (RAG eval with LlamaIndex, OpenAI Evals getting-started) is pointed to from [cursor-claude-codex/references/awesome-evals/](../cursor-claude-codex/references/awesome-evals/) as the hands-on practice companion to the eval reference catalog.

### OpenClaw ecosystem (indexed in this hub)

- **[openclaw/openclaw](https://github.com/openclaw/openclaw)** — Original locally-running AI assistant (multi-channel, voice, canvas).
- **[machinae/awesome-claws](https://github.com/machinae/awesome-claws)** — **36** OpenClaw-inspired agents catalogued; snapshot at [openclaw/awesome-claws/](../openclaw/awesome-claws/).
- **[VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)** — **5,380** curated skills in 30 categories (snapshot); snapshot at [openclaw/awesome-openclaw-skills/](../openclaw/awesome-openclaw-skills/). See [openclaw/README.md](../openclaw/README.md).

### Design Tools
- **[Apple-Hig-Designer](https://github.com/axiaoge2/Apple-Hig-Designer)** - A Claude Code Skill for designing professional interfaces following Apple Human Interface Guidelines

## AI Agents 🤖⚡

### Agent Frameworks
- **[AutoAgent](https://github.com/HKUDS/AutoAgent)** - "AutoAgent: Fully-Automated and Zero-Code LLM Agent Framework"
- **[Dr. Claw](https://github.com/OpenLAIR/dr-claw)** — Open-source, model-agnostic research workspace for survey, ideation, experiments, paper writing, and research artifact delivery.
- **[companion-app](https://github.com/a16z-infra/companion-app)** - AI companions with memory: a lightweight stack to create and host your own AI companions
- **[clawdis](https://github.com/steipete/clawdis)** - Your own personal AI assistant. Talk via WhatsApp, Telegram or Web.

### Agent infrastructure / control plane
- **[rust-norion](https://github.com/yanghao1143/rust-norion)** — Rust control-layer prototype for agentic systems: runtime boundaries, memory/replay governance, writer gates, audit traces, and rollback. ⚠️ Early research prototype (GPL-3.0); not a Cursor/Claude/Codex skill; advanced runbooks may require local or SSH setup.

## No-code 🎨

### Platforms & Tools
- **[NocoDB](https://github.com/nocodb/nocodb)** - 🔥 🔥 🔥 Open Source Airtable Alternative
- **[open-agent-platform](https://github.com/langchain-ai/open-agent-platform)** - An open-source, no-code agent building platform.

## Study material 📖

Curated reading lists and study roadmaps — external link-only sources worth working through alongside [papers/](../papers/), [research/](../research/), and [learning/](../learning/).

- **[ilya-sutskever-recommended-reading](https://github.com/dzyim/ilya-sutskever-recommended-reading)** — ~27 papers, blogs, and courses on deep learning (RNNs/LSTMs, CNNs, attention, scaling laws, NTM, theory), attributed to Ilya Sutskever for John Carmack. Strong backlog for papers to bring into [papers/](../papers/). ⚠️ No license declared upstream.
- **[ml-engineering](https://github.com/stas00/ml-engineering)** — CC-BY-SA-4.0 *Machine Learning Engineering Open Book* by Stas Bekman (~18k ★): hardware (compute/storage/network), orchestration (SLURM), large-scale LLM/VLM training and inference, debugging, and testing — field notes from BLOOM-176B, IDEFICS-80B, and later work. Ships PDF/EPUB plus a `SKILL.md` for AI agents. Pairs with the CUDA guide in [learning/](../learning/) and the GPU tracks in [research/](../research/).

## Other Useful Resources 📚

- **[awesome-AI-driven-development](https://github.com/eltociear/awesome-AI-driven-development)** - 🤖 A curated awesome list featuring 431+ AI-driven development tools, frameworks, and resources. Covers AI code editors, IDE extensions, multi-agent systems, code generation, testing, MCP servers, and more.
- **[gen-ai-experiments](https://github.com/buildfastwithai/gen-ai-experiments)** - 🚀 A curated collection of 130+ production-ready Gen AI apps, agents, and experiments. Built with LangChain, RAG, AI Agents, Multi-Agent Teams, and more. Perfect for learning by building.
- **[awesome-investing](https://github.com/mr-karan/awesome-investing)** - 💸💸 Curated list of investment & finance related resources
- **[linux-insides](https://github.com/0xAX/linux-insides)** - A book-in-progress about the Linux kernel and its insides.
- **[untidetect-tools](https://github.com/TheGP/untidetect-tools)** - List of anti-detect and humanizing tools and browsers, including captcha solvers and sms-activation.

---

## How to Use This List

1. **Explore**: Click on any project to learn more about it
2. **Star**: Give projects you find interesting a star on GitHub
3. **Fork**: Fork projects you want to customize or contribute to
4. **Contribute**: Check out open issues and contribute to projects you use
5. **Share**: Share this list with others who might find it useful

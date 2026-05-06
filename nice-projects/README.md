# Nice projects to follow & fork 🚀

A curated collection of interesting open-source projects worth exploring, forking, and contributing to. This list is based on projects I've starred on GitHub.

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

## AI/ML 🤖

### Models & Frameworks
- **[DeepSeek-Coder](https://github.com/deepseek-ai/DeepSeek-Coder)** - DeepSeek Coder: Let the Code Write Itself
- **[Jan](https://github.com/janhq/jan)** - Jan is an open source alternative to ChatGPT that runs 100% offline on your computer.
- **[vLLM Recipes](https://github.com/vllm-project/recipes)** - Common recipes to run vLLM

### Research & Papers
- **[camel-prompt-injection](https://github.com/google-research/camel-prompt-injection)** - Code for the paper "Defeating Prompt Injections by Design"
- **[gen-ai-experiments](https://github.com/buildfastwithai/gen-ai-experiments)** - Collection of Jupyter notebooks designed to provide you with a comprehensive guide to various AI tools and technologies

### Prompts & Resources
- **[awesome-copilot](https://github.com/github/awesome-copilot)** - Community-contributed instructions, prompts, and configurations to help you make the most of GitHub Copilot.
- **[product-manager-prompts](https://github.com/deanpeters/product-manager-prompts)** - A repository of Generative AI prompts for product managers using agents such as ChatGPT, Claude, & Gemini
- **[claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts)** - All parts of Claude Code's system prompt, 20 builtin tool descriptions, sub agent prompts (Plan/Explore/Task), utility prompts (CLAUDE.md, compact, statusline, magic docs, WebFetch, Bash cmd, security)

### Agent skills, UI specs & Claude ecosystem (hub catalog)

Structured notes (folder layout, install commands, how each fits our hub) live in **[cursor-and-claude/references/upstream-repos-catalog.md](../cursor-and-claude/references/upstream-repos-catalog.md)**. Upstream sources:

- **[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)** — Official Vercel Agent Skills (React/Next practices, web design guidelines, deploy skill, etc.); install via `npx skills add vercel-labs/agent-skills`.
- **[tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)** — Local knowledge graph for Claude Code / MCP to shrink context on reviews.
- **[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)** — Ready-made `DESIGN.md` design systems for agent-driven UI (great for PMs/designers).
- **[iamfakeguru/claude-md](https://github.com/iamfakeguru/claude-md)** — `CLAUDE.md` + hooks (verify, block destructive ops) for safer Claude Code workflows.
- **[ultraworkers/claw-code](https://github.com/ultraworkers/claw-code)** — Rust `claw` CLI agent harness (USAGE.md / rust workspace).
- **[Leonxlnx/agentic-ai-prompt-research](https://github.com/Leonxlnx/agentic-ai-prompt-research)** — Educational reconstructed prompts for agentic coding assistants.
- **[humanlayer/humanlayer](https://github.com/humanlayer/humanlayer)** — CodeLayer + HumanLayer SDK monorepo (team-scale agent orchestration).
- **[revfactory/harness](https://github.com/revfactory/harness)** — Meta-skill / plugin to generate domain-specific agent teams and skills for Claude Code.
- **[ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase)** — Production-style Claude Code config (~5.8k ★): full `.claude/` layout with skill auto-activation hooks (`skill-eval.js` + `skill-rules.json`) and 4 scheduled GitHub Actions for PR review, docs sync, dependency audit, and code quality. *No license declared — reference only.*
- **[jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills)** — MIT-licensed marketplace with 500 standalone agent skills across 20 categories (DevOps, security, frontend, backend, ML, data, cloud, API, docs, automation). Install via `/plugin marketplace add jeremylongshore/claude-code-plugins` or the `ccpi` CLI.
- **[google-labs-code/design.md](https://github.com/google-labs-code/design.md)** — Google Labs (Apache-2.0): format specification for `DESIGN.md` — a persistent, tool-agnostic description of a visual identity that Claude Code, Cursor, Gemini, Codex, etc. can all read. Spec + 3 examples vendored at [cursor-and-claude/references/design-md/](../cursor-and-claude/references/design-md/); official CLI via `npx @google/design.md lint`.
- **[mattpocock/skills](https://github.com/mattpocock/skills)** — Matt Pocock (MIT, ~54k ★): "Skills for real engineers." 22 small, composable, model-agnostic skills for grilling sessions, triage state machine, ADR generation, and zoom-out moments. 13 vendored at [cursor-and-claude/skills/matt-pocock/](../cursor-and-claude/skills/matt-pocock/); install upstream via `npx skills@latest add mattpocock/skills`.

### Design Tools
- **[Apple-Hig-Designer](https://github.com/axiaoge2/Apple-Hig-Designer)** - A Claude Code Skill for designing professional interfaces following Apple Human Interface Guidelines

## AI Agents 🤖⚡

### Agent Frameworks
- **[AutoAgent](https://github.com/HKUDS/AutoAgent)** - "AutoAgent: Fully-Automated and Zero-Code LLM Agent Framework"
- **[companion-app](https://github.com/a16z-infra/companion-app)** - AI companions with memory: a lightweight stack to create and host your own AI companions
- **[clawdis](https://github.com/steipete/clawdis)** - Your own personal AI assistant. Talk via WhatsApp, Telegram or Web.

## No-code 🎨

### Platforms & Tools
- **[NocoDB](https://github.com/nocodb/nocodb)** - 🔥 🔥 🔥 Open Source Airtable Alternative
- **[open-agent-platform](https://github.com/langchain-ai/open-agent-platform)** - An open-source, no-code agent building platform.

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
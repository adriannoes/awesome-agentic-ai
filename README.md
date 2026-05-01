<div align="center">

```
██╗   ██╗██╗██████╗ ███████╗     ██████╗ ██████╗ ██████╗ ██╗███╗   ██╗ ██████╗
██║   ██║██║██╔══██╗██╔════╝    ██╔════╝██╔═══██╗██╔══██╗██║████╗  ██║██╔════╝
██║   ██║██║██████╔╝█████╗      ██║     ██║   ██║██║  ██║██║██╔██╗ ██║██║  ███╗
╚██╗ ██╔╝██║██╔══██╗██╔══╝      ██║     ██║   ██║██║  ██║██║██║╚██╗██║██║   ██║
 ╚████╔╝ ██║██████╔╝███████╗    ╚██████╗╚██████╔╝██████╔╝██║██║ ╚████║╚██████╔╝
  ╚═══╝  ╚═╝╚═════╝ ╚══════╝     ╚═════╝ ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝
```

[![GitHub stars](https://img.shields.io/github/stars/adriannoes/awesome-vibe-coding?style=social)](https://github.com/adriannoes/awesome-vibe-coding/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/adriannoes/awesome-vibe-coding?style=social)](https://github.com/adriannoes/awesome-vibe-coding/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/adriannoes/awesome-vibe-coding)](https://github.com/adriannoes/awesome-vibe-coding/commits/main)
[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

# Vibe Coding Hub for Product Builders

> The most complete collection of battle-tested AI-assisted development resources — for Product Managers, Designers, and Developers who want to ship real products with AI.

**What's inside:** 75 ready-to-use Cursor & Claude Code skills · 123 Jupyter notebooks · 31 research papers (PDFs in `papers/`) · 14 industry reports · 21 n8n workflow templates (JSON) · 14 system prompts from leading agents · 36 OpenClaw derivatives catalogued.

Whether you're a PM who wants to prototype faster, a Designer who wants to understand the code your AI is generating, or a Developer looking for the sharpest rules to ship with — this repo is built to be copied, forked, and used the same day.

## Quick start

Pick your path and start in under 5 minutes:

### For Product Managers
1. Read [cursor-and-claude/product-management/no-vibe-coding.md](cursor-and-claude/product-management/no-vibe-coding.md) — Spec-Driven Development
2. Use [cursor-and-claude/product-management/create-prd.md](cursor-and-claude/product-management/create-prd.md) to turn an idea into a PRD with AI
3. Generate tasks with [cursor-and-claude/product-management/generate-tasks.md](cursor-and-claude/product-management/generate-tasks.md)
4. Ship with [cursor-and-claude/skills/writing-plans/](cursor-and-claude/skills/writing-plans/) + [cursor-and-claude/skills/executing-plans/](cursor-and-claude/skills/executing-plans/)

### For Designers
1. Drop [cursor-and-claude/skills/frontend-design/](cursor-and-claude/skills/frontend-design/) into your Claude Code project
2. Follow [cursor-and-claude/skills/web-design-guidelines/](cursor-and-claude/skills/web-design-guidelines/) (Vercel) for distinctive UI
3. Read [cursor-and-claude/best-practices/accessibility.md](cursor-and-claude/best-practices/accessibility.md) before shipping

### For Developers
1. Install the core skills: [brainstorming](cursor-and-claude/skills/brainstorming/), [test-driven-development](cursor-and-claude/skills/test-driven-development/), [systematic-debugging](cursor-and-claude/skills/systematic-debugging/)
2. Grab the slash commands: [cursor-and-claude/commands/](cursor-and-claude/commands/) (`code-review`, `final-review`, `git-commit`, `security-audit`)
3. Pick your stack rules from [cursor-and-claude/coding/](cursor-and-claude/coding/) (Python, TypeScript, FastAPI, Next.js, …)
4. Lock down security with [cursor-and-claude/security/anthropic-security-audit.md](cursor-and-claude/security/anthropic-security-audit.md)

### For Learners
1. Start with the notebooks in [research/nn-zero-to-hero/](research/nn-zero-to-hero/) (Karpathy's Zero to Hero)
2. Read [learning/README.md](learning/README.md) to pick a textbook
3. Follow [research/understanding-deep-learning/](research/understanding-deep-learning/) chapter-by-chapter

## Project structure

```
awesome-vibe-coding/
├── openclaw/                 # OpenClaw ecosystem — see openclaw/README.md
│   ├── README.md
│   └── skills/               # Skills index — openclaw/skills/README.md, categories/
├── cursor-and-claude/                   # Cursor & Claude Code — see cursor-and-claude/README.md
│   ├── skills/               # cursor-and-claude/skills/README.md
│   ├── commands/             # cursor-and-claude/commands/README.md
│   ├── best-practices/
│   ├── coding/
│   ├── product-management/   # cursor-and-claude/product-management/README.md
│   ├── security/
│   └── references/           # cursor-and-claude/references/README.md
├── prompt-engineering/         # prompt-engineering/README.md, prompts/
├── learning/                   # learning/README.md — books and textbooks
├── reports/                    # reports/README.md — industry reports (McKinsey, OpenAI, …)
├── n8n-templates/              # Workflow templates
├── papers/                     # papers/README.md — PDFs and paper notes
├── research/                   # research/README.md — notebooks & experiments
└── CONTRIBUTING.md
```

## Quick links

| Area | Entry point |
|------|-------------|
| Cursor & Claude | [cursor-and-claude/](cursor-and-claude/) · [cursor-and-claude/README.md](cursor-and-claude/README.md) · [Upstream repos catalog](cursor-and-claude/references/upstream-repos-catalog.md) |
| Prompts | [prompt-engineering/](prompt-engineering/) · [prompt-engineering/README.md](prompt-engineering/README.md) |
| Learning | [learning/](learning/) · [learning/README.md](learning/README.md) |
| Reports | [reports/](reports/) · [reports/README.md](reports/README.md) |
| OpenClaw | [openclaw/](openclaw/) · [openclaw/README.md](openclaw/README.md) |
| Research | [research/](research/) · [research/README.md](research/README.md) |
| Papers | [papers/](papers/) · [papers/README.md](papers/README.md) |
| n8n | [n8n-templates/](n8n-templates/) |

## What's inside

### Cursor & Claude ([cursor-and-claude/](cursor-and-claude/))

| Topic | Location |
|-------|----------|
| Skills (brainstorming, plans, TDD, debugging, git worktrees, Vercel UI/React guidelines, etc.) | [cursor-and-claude/skills/](cursor-and-claude/skills/) · [cursor-and-claude/skills/README.md](cursor-and-claude/skills/README.md) |
| Slash commands (code-review, final-review, git-commit, etc.) | [cursor-and-claude/commands/](cursor-and-claude/commands/) · [cursor-and-claude/commands/README.md](cursor-and-claude/commands/README.md) |
| Product management (PRD, epics, tasks) | [cursor-and-claude/product-management/](cursor-and-claude/product-management/) · [README](cursor-and-claude/product-management/README.md) |
| Coding rules (Python, TypeScript, FastAPI, Tailwind, …) | [cursor-and-claude/coding/](cursor-and-claude/coding/) |
| Best practices (clean code, Karpathy guidelines, MCP, …) | [cursor-and-claude/best-practices/](cursor-and-claude/best-practices/) |
| Security | [cursor-and-claude/security/](cursor-and-claude/security/) |
| References (agentic patterns, …) | [cursor-and-claude/references/](cursor-and-claude/references/) · [cursor-and-claude/references/README.md](cursor-and-claude/references/README.md) |

### Prompts library ([prompt-engineering/](prompt-engineering/))

Battle-tested prompts for Cursor, Claude, Grok, Kimi, n8n, Lovable, v0, and more — see [prompt-engineering/README.md](prompt-engineering/README.md) and [prompt-engineering/prompts/](prompt-engineering/prompts/).

### Learning ([learning/](learning/))

Three freely-available textbooks that ground the notebooks and skills in this repo: *Understanding Deep Learning* (Prince), *Mathematics for Computer Science* (MIT 6.042J), and *Algorithms for Decision Making* (Stanford). See [learning/README.md](learning/README.md) for what each is best for.

### Reports ([reports/](reports/))

14 industry reports from McKinsey, Deloitte, KPMG, OpenAI, Anthropic, Air Street Capital, and others — useful for pitch decks, business cases, and agent metrics. See [reports/README.md](reports/README.md) for a themed index.

### OpenClaw ([openclaw/](openclaw/))

Derivative agents and a skills index (VoltAgent, official OpenClaw archive). Details: [openclaw/README.md](openclaw/README.md), [openclaw/skills/README.md](openclaw/skills/README.md).

### n8n templates ([n8n-templates/](n8n-templates/))

Workflow templates (AI assistants, messaging, sheets, scraping, etc.).

### Research & experiments ([research/](research/))

Educational notebooks and autonomous research setups. **Full catalog and source links:** [research/README.md](research/README.md).

| Track | Folder | Notes |
|-------|--------|--------|
| Reasoning LLM (book code) | [research/reasoning-from-scratch/](research/reasoning-from-scratch/) | *Build a Reasoning Model (From Scratch)* |
| Minimal ChatGPT-style stack | [research/nanochat/](research/nanochat/) | Karpathy nanochat |
| Autonomous nanochat experiments | [research/autoresearch/](research/autoresearch/) | [README](research/autoresearch/README.md), Karpathy autoresearch |
| NLP with Transformers book | [research/nlp-with-transformers/](research/nlp-with-transformers/) | Classification, NER, generation, QA, … |
| Neural nets from scratch | [research/nn-zero-to-hero/](research/nn-zero-to-hero/) | Karpathy course notebooks |
| Short ML examples | [research/ML-Notebooks/](research/ML-Notebooks/) | Notebooks under `notebooks/` |
| Understanding Deep Learning | [research/understanding-deep-learning/](research/understanding-deep-learning/) | [Notebook list](research/understanding-deep-learning/README.md) (Prince / UDL) |

Other items (e.g. DeepSeek OCR) are documented in [research/README.md](research/README.md) when present.

### Papers ([papers/](papers/))

PDFs and reading notes — [papers/README.md](papers/README.md).

## About

This repository is maintained by **Adrianno**, a Staff Product Manager at [Pipefy](https://www.pipefy.com), diving into the magic behind LLMs.

You can find more about me on [GitHub](https://github.com/adriannoes) and [LinkedIn](https://www.linkedin.com/in/adrianno/). Feel free to connect with me, I'm always open to discussing AI, product management and building cool things together!

## Who this is for

- **Product Managers** who want to prototype ideas without waiting for engineering
- **Product Designers** who want to understand the code their AI generates
- **Product Builders** who want to go from idea to product faster
- **Developers** looking for optimized Cursor and Claude rules
- **Anyone** curious about how AI-assisted development actually works.

## What makes this different

This isn't just another collection of AI tools. We focus on:

- **Understanding the fundamentals** — You'll learn why things work, not just how to use them
- **Real-world applications** — Every example is something you'd actually build
- **Product thinking** — We connect technical concepts to business outcomes
- **Reproducible results** — Everything is tested and documented

## Inspired by

### AI & development

- [awesome-copilot](https://github.com/github/awesome-copilot) — Custom agents, instructions, skills, and plugins for GitHub Copilot
- [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — LLM applications with AI Agents
- [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) — Configuration files that enhance Cursor AI editor experience
- [awesome-deepseek-integration](https://github.com/deepseek-ai/awesome-deepseek-integration) — Integrate the DeepSeek API into popular softwares
- [awesome-datascience](https://github.com/academic/awesome-datascience) — Data science resources

### Programming languages

- [awesome-python](https://github.com/vinta/awesome-python) — Python resources
- [awesome-typescript](https://github.com/dzharii/awesome-typescript) — TypeScript resources

### Architecture & design patterns

- [awesome-design-patterns](https://github.com/DovAmir/awesome-design-patterns) — Software and architecture related design patterns
- [awesome-system-design-resources](https://github.com/ashishps1/awesome-system-design-resources) — Learn System Design concepts and prepare for interviews
- [awesome-scalability](https://github.com/binhnguyennus/awesome-scalability) — The Patterns of Scalable, Reliable, and Performant Large-Scale Systems

### Design & product

- [Awesome-Design-Tools](https://github.com/goabstract/Awesome-Design-Tools) — The best design tools and plugins for everything
- [awesome-for-beginners](https://github.com/MunGell/awesome-for-beginners) — A list of awesome beginners-friendly projects
- [awesome-cto](https://github.com/kuchin/awesome-cto) — Resources for Chief Technology Officers, with emphasis on startups

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (see [CONTRIBUTING.md](CONTRIBUTING.md) for Conventional Commits)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Full guidelines: [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE).

---

**Ready to level up?** Start with [cursor-and-claude/README.md](cursor-and-claude/README.md), [openclaw/README.md](openclaw/README.md), or [prompt-engineering/README.md](prompt-engineering/README.md). The best way to learn is by doing.

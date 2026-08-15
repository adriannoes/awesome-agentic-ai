# Cursor, Claude Code & Codex

Organized rules, skills, and tools for AI-assisted software development across **Cursor**, **Claude Code**, and **Codex**.

> **Renamed (2026-06):** this folder was `cursor-and-claude/`. Update local symlinks: `ln -sfn cursor-claude-codex/commands .cursor/commands`.

## Directory Structure

```
cursor-claude-codex/
├── skills/             # Agent skills (Cursor, Claude Code, Codex)
├── commands/           # Cursor slash commands (copy to .cursor/commands/)
├── tools/              # Developer CLIs (e.g. codex-profiles)
├── best-practices/     # Code quality, agentic clean code, documentation
├── coding/             # Python, TypeScript, Tailwind
├── product-management/ # PRD, tasks, workflow
├── security/           # Secure development practices
└── references/         # Agentic patterns, upstream catalog
```

## Platform quick start

| Platform | Skills | Rules / context | Commands & tools |
|----------|--------|-----------------|------------------|
| **Cursor** | Link or copy from [skills/](./skills/) | `.cursor/rules/` or rule files | [commands/](./commands/) — type `/` in chat |
| **Claude Code** | `~/.claude/skills/` or project skills | `CLAUDE.md` + [hooks](./best-practices/hooks-guide.md) | — |
| **Codex** | `~/.agents/skills/` | `AGENTS.md` in project | [codex-profiles](./tools/codex-profiles/) for multi-account `CODEX_HOME` |

Skills written for Claude Code often work on Codex with minimal changes. When a skill references `Task`, `TodoWrite`, or `Skill` tools, see [skills/using-superpowers/references/codex-tools.md](./skills/using-superpowers/references/codex-tools.md).

**Project overview:** [main README](../README.md) · [OpenClaw ecosystem](../openclaw/README.md) · [nice-projects](../nice-projects/README.md)

## Categories

### 🎯 [Skills](./skills/)
Workflow, quality, E2E, security testing, React/Next.js, and meta skills shared across agents.

**See**: [Skills README](./skills/README.md)

### 🛠 [Tools](./tools/)
Developer utilities (not agent skills):

- **[agent-qa](https://github.com/vostride/agent-qa)** — self-improving QA agent with CLI, MCP, and skills for natural-language web and mobile tests
- **[codex-profiles](./tools/codex-profiles/)** — isolated Codex CLI/Desktop profiles per account ([Ducksss/codex-profiles](https://github.com/Ducksss/codex-profiles))

### ⚡ [Commands](./commands/)
**Cursor only.** Slash commands — copy to `.cursor/commands/` or symlink:

```bash
ln -sfn cursor-claude-codex/commands .cursor/commands
```

**See**: [Commands README](./commands/README.md)

### 📋 [Product Management](./product-management/)
Spec-driven development — [README](./product-management/README.md)

### 💻 [Coding](./coding/)
Language and framework-specific rules.

### ✨ [Best Practices](./best-practices/)
Agent clean code, Karpathy guidelines, MCP, hooks, accessibility.

### 🔒 [Security](./security/)
Secure development practices:
- **Audit:** anthropic-security-audit.md (Official Anthropic Prompt)
- Universal security principles (always applied)
- Language-specific security (Python, C/C++)
- Technology-specific security (SQL, MCP)

### 📚 [References](./references/)
[agentic-patterns.md](./references/agentic-patterns.md) · [upstream-repos-catalog.md](./references/upstream-repos-catalog.md)

## Usage

**Automatic:** Rules apply based on file globs or `alwaysApply: true`

**Manual:** Mention the rule in conversation.

## Rule File Format

```yaml
---
description: Brief description
globs: **/*.py
alwaysApply: false
---
# Rule Content
```

## Credits & Sources

Content integrated from the following repositories (adapted for our use, no runtime dependency):

| Source | License | What we integrated |
|--------|---------|--------------------|
| [obra/superpowers](https://github.com/obra/superpowers) | MIT | 14 workflow/quality/multi-agent skills @ v6.0.3 — see [skills/README.md](./skills/README.md) |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | MIT | 9 React/Next/Vercel skills (3 summaries + 6 full packages; vercel-optimize added 2026-06-25) — [skills/README.md](./skills/README.md) |
| [xiaolai/Claude-BugHunter](https://github.com/xiaolai/Claude-BugHunter) | MIT | [skills/bug-hunter/](./skills/bug-hunter/) — 51 offensive-security skills + commands |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | Apache-2.0 | [skills/anthropic-cybersecurity-skills/](./skills/anthropic-cybersecurity-skills/) — 109 blue-team + AI-security + supply-chain + hardware skills @ v1.3.0 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT | [skills/taste-skills/](./skills/taste-skills/) — 13 anti-slop frontend design skills |
| [mattpocock/skills](https://github.com/mattpocock/skills) | MIT | [skills/matt-pocock/](./skills/matt-pocock/) — 20 engineering/productivity/misc skills |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | MIT | [skills/alirezarezvani-skills/](./skills/alirezarezvani-skills/) — skill-security-auditor + playwright-pro |
| [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) | MIT | [skills/visual-content/](./skills/visual-content/) (25) + [skills/business-automation/](./skills/business-automation/) (25) |
| [revfactory/harness](https://github.com/revfactory/harness) | Apache-2.0 | [skills/harness/](./skills/harness/) meta-skill (Phase 3-0/4-0 duplicate-review guidelines) |
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | Apache-2.0 | [references/design-md/](./references/design-md/) spec (v0.3.0) + PHILOSOPHY.md + 3 examples |
| [Ducksss/codex-profiles](https://github.com/Ducksss/codex-profiles) | MIT | [tools/codex-profiles/](./tools/codex-profiles/) CLI snapshot |
| [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) | Apache-2.0 | git-commit command, frontend-design, update-changelog skills |
| [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | MIT | [best-practices/karpathy-guidelines.md](./best-practices/karpathy-guidelines.md) |
| [hamzafer/cursor-commands](https://github.com/hamzafer/cursor-commands) | MIT | 6 slash commands in [commands/](./commands/) |
| [patyearone/final-review-gist](https://gist.github.com/patyearone/c9a091b97e756f5ed361f7514d88ef0b) | — | final-review command |
| [nibzard/awesome-agentic-patterns](https://github.com/nibzard/awesome-agentic-patterns) | Apache-2.0 | [references/agentic-patterns.md](./references/agentic-patterns.md) |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | — | [skills/autoresearch/](./skills/autoresearch/) + [research/autoresearch/](../research/autoresearch/) |
| [JohnCrickett/ai-assisted-engineering](https://github.com/JohnCrickett/ai-assisted-engineering) | — | AGENTS.md reference |
| [igoruehara/spec-driven](https://github.com/igoruehara/spec-driven) | MIT | [skills/igoruehara-spec-driven/](./skills/igoruehara-spec-driven/) — 15 SDD skills (translated pt-BR → en) + hook + [product-management/igoruehara-sdd/](./product-management/igoruehara-sdd/) templates |
| [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library) | MIT | [skills/forward-future-loop-library/](./skills/forward-future-loop-library/) — bounded agent-loop skill (69-loop live catalog linked) |
| [Master-cai/Research-Paper-Writing-Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills) | MIT | [skills/research-paper-writing/](./skills/research-paper-writing/) — ML/CV/NLP paper-writing skill |
| [benchflow-ai/awesome-evals](https://github.com/benchflow-ai/awesome-evals) | CC0 1.0 | [references/awesome-evals/](./references/awesome-evals/) — eval reference catalog (443+ links) + PATTERNS playbook + 146 notes |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Apache-2.0 | [research/llms-from-scratch/](../research/llms-from-scratch/) — 66 notebooks (GPT/attention/pretrain/finetune/LoRA) |
| [huggingface/smol-course](https://github.com/huggingface/smol-course) | Apache-2.0 | [research/smol-course/](../research/smol-course/) — 12 notebooks (instruction tuning, DPO, LoRA/PEFT, eval, VLM, agents) |
| [shreyashankar/plain-writing-skill](https://github.com/shreyashankar/plain-writing-skill) | — | [skills/plain-writing/](./skills/plain-writing/) — plain-language prose skill + HTML revision diff template |
| [davidondrej/skills](https://github.com/davidondrej/skills) | MIT | [skills/david-ondrej/](./skills/david-ondrej/) — 30 agent-orchestration, research, skill-authoring, and thinking/docs skills |

**329** agent skills total — full index: [skills/README.md](./skills/README.md).  
Additional upstream projects (link-only + OpenClaw snapshots): [upstream-repos-catalog.md](./references/upstream-repos-catalog.md) · [nice-projects/README.md](../nice-projects/README.md).

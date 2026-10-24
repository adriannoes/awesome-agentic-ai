# Prompt Engineering

Battle-tested prompts and system prompt references for AI coding tools.

## Contents

| File | Source | Description |
|------|--------|-------------|
| [prompts/gpt-5.2-codex.md](prompts/gpt-5.2-codex.md) | — | Codex-style coding agent (GPT-5) |
| [prompts/Cursor-Agent.md](prompts/Cursor-Agent.md) | [x1xhlol](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | Cursor Agent system prompt |
| [prompts/Devin2_09-08-2025.md](prompts/Devin2_09-08-2025.md) | — | Devin AI agent |
| [prompts/Gemini-2.5-Pro-04-18-2025.md](prompts/Gemini-2.5-Pro-04-18-2025.md) | — | Gemini coding agent |
| [prompts/Replit_Agent.md](prompts/Replit_Agent.md) | — | Replit Agent |
| [prompts/Claude_Sonnet-4.5_Sep-29-2025.md](prompts/Claude_Sonnet-4.5_Sep-29-2025.md) | — | Claude Sonnet 4.5 system prompt snapshot |
| [prompts/GROK-4-NEW_Jul-13-2025.md](prompts/GROK-4-NEW_Jul-13-2025.md) | — | Grok 4 system prompt snapshot |
| [prompts/Grok-Code-Fast-1_Aug-26-2025.md](prompts/Grok-Code-Fast-1_Aug-26-2025.md) | — | Grok Code Fast-1 coding agent |
| [prompts/Kimi_2_July-11-2025.md](prompts/Kimi_2_July-11-2025.md) | — | Kimi 2 system prompt snapshot |
| [prompts/Lovable-2.0.md](prompts/Lovable-2.0.md) | — | Lovable 2.0 coding agent |
| [prompts/Perplexity_Deep_Research.md](prompts/Perplexity_Deep_Research.md) | — | Perplexity Deep Research |
| [prompts/vercel-v0.md](prompts/vercel-v0.md) | — | Vercel v0 system prompt snapshot |
| [prompts/n8n-sql.md](prompts/n8n-sql.md) | — | n8n SQL agent prompt |
| [prompts/n8n-day-hour.md](prompts/n8n-day-hour.md) | — | n8n day/hour scheduling agent prompt |

## Freshness

Prompts in [prompts/](prompts/) are **dated snapshots** (filenames include model/version dates). Use them for comparison and pattern mining, not as live system prompts. For agent harness design, see the OpenAI essay *Harness engineering* and the source-code anatomy [*Harness Engineering: Anatomy, Architecture, and Evolution of Coding Agents*](../papers/agents-and-engineering/Harness%20Engineering_%20Anatomy%2C%20Architecture%2C%20and%20Evolution%20of%20Coding%20Agents.pdf) ([arXiv:2609.00006](https://arxiv.org/abs/2609.00006)) in [papers/agents-and-engineering/](../papers/agents-and-engineering/) ([index](../papers/README.md#agents-and-engineering)); for RSI-driven harness improvement, add [SoL-Pi](../papers/agents-and-engineering/SoL-Pi_%20Recursively%20Scaling%20Auto-Research%20Loops%20for%20Efficient%20Agent%20Harness.pdf) and the roadmap in [*The Last AI Built by Humans*](../papers/perspectives-and-futures/The%20Last%20AI%20Built%20by%20Humans_%20Toward%20Genuine%20Recursive%20Self-Improvement.pdf). For the foundational reason→act loop, see [*ReAct*](../papers/agents-and-engineering/REACT-%20SYNERGIZING%20REASONING%20AND%20ACTING%20IN%20LANGUAGE%20MODELS.pdf). For durable stateful graph workflows (LangGraph recipes with repair loops and HITL checkpoints), see [*Graph-Based Agentic AI with LangGraph*](../papers/agents-and-engineering/Graph-Based%20Agentic%20AI%20with%20LangGraph_%20Workflow%20Pathways%20for%20Long-Running%20Stateful%20Business%20Processes.pdf) in the same folder.

When adding a new prompt: keep the date in the filename, note the source in this table, and prefer linking upstream over copying unverified leaks.

## External Sources

| Repo | Purpose |
|------|---------|
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | Cursor, Claude Code, Devin, Windsurf, v0, Lovable — system prompts and tools |
| [Leonxlnx/agentic-ai-prompt-research](https://github.com/Leonxlnx/agentic-ai-prompt-research) | Reconstructed agentic prompt patterns (orchestration, sub-agents, permissions) — educational; see [cursor-claude-codex/references/upstream-repos-catalog.md](../cursor-claude-codex/references/upstream-repos-catalog.md) |
| [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) | MIT gallery of **700+** user prompts for Opus 5.5 creative-coding videos (motion, 3D, explainers) — copy/adapt in Cursor or Claude Code; indexed in [nice-projects](../nice-projects/README.md#prompts--resources) |
| Design/motion/video stack (link-only) | [nice-projects § Design, motion & agent video](../nice-projects/README.md#design-motion--agent-video-link-only) — Remotion promos, HyperFrames, Blender MCP, Penpot MCP, lemo-opuscar; catalog in [upstream-repos-catalog.md](../cursor-claude-codex/references/upstream-repos-catalog.md) |
| [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot) | Community Grok Bot / Grok Build catalog (playbooks, tools, meetups) — complements the Grok 4 / Grok Code snapshots in [prompts/](prompts/); indexed in [nice-projects](../nice-projects/README.md#cursor--grok-bot-xai-cloud-agents) |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | Leaked system prompts — ChatGPT, Gemini, Claude, Cursor, Perplexity, etc. |
| [elder-plinius/L1B3RT4S](https://github.com/elder-plinius/L1B3RT4S) | Liberation/jailbreak prompts — reference only; not for productive use |

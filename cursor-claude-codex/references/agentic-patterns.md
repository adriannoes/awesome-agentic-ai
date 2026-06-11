# Agentic Patterns Reference

Curated reference of agentic AI patterns for coding agents. Use when designing workflows, skills, or agent behavior.

**Source:** [nibzard/awesome-agentic-patterns](https://github.com/nibzard/awesome-agentic-patterns) (Apache-2.0)

## Key Patterns for Coding Agents

### Plan-Then-Execute

Split reasoning into two phases:
1. **Plan phase** — Generate a fixed sequence of steps before seeing untrusted data.
2. **Execution phase** — Run that exact sequence. Outputs may shape parameters but cannot change which steps run.

**When to use:** Complex tasks where the action set is known but parameters vary. Can 2-3x success rates by aligning on approach first.

**Cursor/Claude Code:** Use "plan mode" or brainstorming → writing-plans → execution flow.

### Sub-Agent Spawning

Spawn focused sub-agents with isolated contexts for shardable subtasks. Aggregate results when done.

**Key practices:**
- Clear, specific task subject for each subagent (traceability)
- Launch independent tasks simultaneously (parallel, not sequential)
- Limit to 2-4 subagents for coordination
- Plan synthesis upfront

**When to use:** Large multi-file tasks, context window management, I/O-bound workflows, parallel code migrations.

### Spec-As-Test Feedback Loop

Design/spec drives implementation; tests verify spec. Spec and tests form a feedback loop.

**When to use:** Spec-driven development (e.g., no-vibe-coding workflow).

### Goal-Driven Execution

Transform imperative tasks into verifiable goals. Define success criteria. Loop until verified.

**When to use:** All implementation work. See [Karpathy guidelines](../best-practices/karpathy-guidelines.md).

## Pattern Categories (from awesome-agentic-patterns)

| Category | Examples |
|----------|----------|
| **Context & Memory** | Curated context window, progressive disclosure, working memory via TodoWrite |
| **Feedback Loops** | CI feedback, reflection loop, spec-as-test |
| **Orchestration** | Plan-then-execute, sub-agent spawning, parallel tool execution |
| **Reliability** | Structured output, schema validation retry, workflow evals |
| **Tool Use** | Code-then-execute, CLI-first skill design, dual-use tool design |
| **UX & Collaboration** | Human-in-the-loop, spectrum of control, proactive trigger vocabulary |

## Full Catalogue

For the complete pattern catalogue with 100+ patterns, see:
- **Website:** https://agentic-patterns.com
- **llms.txt:** https://agentic-patterns.com/llms.txt (machine-readable for RAG/LLM context)
- **Repo:** https://github.com/nibzard/awesome-agentic-patterns

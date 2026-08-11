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
| **Context & Memory** | Curated context window, progressive disclosure, working memory via TodoWrite, session-scoped context runtime — research backdrop: [*Agentic Context Management*](../../papers/agents-and-engineering/Agentic%20Context%20Management_%20Solving%20Agent%20Memory%20and%20Cost%20by%20Treating%20Them%20as%20Lifecycle%20and%20Architecture%20Problems.pdf) |
| **Feedback Loops** | CI feedback, reflection loop, spec-as-test, output verification loop |
| **Orchestration** | Plan-then-execute, sub-agent spawning, parallel tool execution, deterministic zero-LLM orchestration |
| **Reliability** | Structured output, schema validation retry, workflow evals, agent circuit breaker |
| **Tool Use** | Code-then-execute, CLI-first skill design, dual-use tool design, black-box skill invocation, unified tool gateway |
| **Security & Safety** | Deterministic threat rule scanning, policy-gated tool proxy, local-first credential broker, cryptographic governance audit trail |
| **UX & Collaboration** | Human-in-the-loop, spectrum of control, proactive trigger vocabulary, cross-agent lesson sharing |

## Patterns worth knowing (newer additions)

These are directly coding-agent-relevant patterns added to the catalogue after the original summary. Each has a `based_on` provenance field upstream; treat as emerging patterns, not settled doctrine.

### Reliability & Eval

- **Agent Circuit Breaker** — track tool failure rates and temporarily disable broken endpoints so the agent stops wasting tokens/time on a tool that is down or erroring. Pair with [systematic-debugging](../skills/systematic-debugging/) when a tool failure turns out to be a code bug.
- **Output Verification Loop** — extract individual claims from an LLM output, check each against evidence sources, and return per-claim trust scores before acting. A lighter-weight cousin of [verification-before-completion](../skills/verification-before-completion/).

### Tool Use & Context

- **Session-Scoped Context Runtime for Agent Tools** — interpose a context runtime that caches structured reads and normalizes tool output, so sessions reuse compact representations instead of repeating raw tokens. Relevant when an agent re-reads the same files across turns.
- **Black-Box Skill Invocation** — invoke a skill through a schema-only interface (no source prompt exposed) so shared skills stay private and inter-agent calls are capability-scoped. Useful for proprietary or licensed skills.
- **Unified Tool Gateway** — route all agent tool calls through one gateway handling discovery, auth, billing, and execution across heterogeneous providers. An MCP-gateway shape for multi-provider setups.

### Security & Safety

- **Deterministic Threat Rule Scanning** — apply deterministic regex rules as a first-pass layer to detect known threat patterns (prompt injection, tool poisoning, MCP abuse) in agent tool calls and skill definitions. Pairs with [skill-security-auditor](../skills/alirezarezvani-skills/skill-security-auditor/) and the AI Security skills in [anthropic-cybersecurity-skills/](../skills/anthropic-cybersecurity-skills/).
- **Policy-Gated Tool Proxy** — insert a transparent proxy between agents and tool servers that evaluates every tool call against a policy engine before forwarding, with an immutable audit trail. The governance counterpart to unified-tool-gateway.
- **Local-First Credential Broker** — keep raw secrets out of the agent process by injecting credentials at the network layer via a local broker, instead of handing the agent env vars or config files. Aligns with the [security/](../../security/) principle of never embedding secrets.

## Full Catalogue

For the complete pattern catalogue with 170+ patterns (each with `based_on` provenance, status, and source links), see:
- **Website:** https://agentic-patterns.com
- **llms.txt:** https://agentic-patterns.com/llms.txt (machine-readable for RAG/LLM context)
- **Repo:** https://github.com/nibzard/awesome-agentic-patterns

**See also:** [Graph Engineering for Multi-Agentic Systems (Andrew Ng Playbook)](../../reports/Graph_Engineering_Andrew_Ng_Playbook.pdf) in [reports/](../../reports/) — how Reflection / Tool Use / Planning / Multi-Agent compose into graph-grounded architectures with shared knowledge-graph state. Foundational loop: [*ReAct: Synergizing Reasoning and Acting in Language Models*](../../papers/agents-and-engineering/REACT-%20SYNERGIZING%20REASONING%20AND%20ACTING%20IN%20LANGUAGE%20MODELS.pdf). Implementation recipes: [*Graph-Based Agentic AI with LangGraph*](../../papers/agents-and-engineering/Graph-Based%20Agentic%20AI%20with%20LangGraph_%20Workflow%20Pathways%20for%20Long-Running%20Stateful%20Business%20Processes.pdf) in [papers/agents-and-engineering/](../../papers/agents-and-engineering/) (durable typed state, repair loops, HITL interrupt/checkpoint). Process layer: [*The Agentic SDLC Handbook*](../../learning/The_Agentic_SDLC_Handbook.pdf) in [learning/](../../learning/) + [no-vibe-coding.md](../product-management/no-vibe-coding.md).

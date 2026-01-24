---
description: Define specialized agents to preserve context and handle heavy lifting.
globs: **/*
alwaysApply: false
---
# CCPM Agents: Specialized Context Preservers

> "Don't anthropomorphize subagents. Use them to organize your prompts and elide context."

Agents act as **context firewalls** that protect the main conversation from information overload.

## Core Agents

### 🔍 `code-analyzer`
- **Purpose**: Hunt bugs across multiple files.
- **Pattern**: Search many files → Analyze code → Return bug report.
- **Usage**: Tracing logic, finding bugs, validating changes.
- **Output**: Concise bug report (critical findings only).

### 📄 `file-analyzer`
- **Purpose**: Read and summarize verbose files (logs, configs).
- **Pattern**: Read files → Extract insights → Return summary.
- **Usage**: Understanding logs, analyzing verbose output.
- **Output**: Key findings (80-90% size reduction).

### 🧪 `test-runner`
- **Purpose**: Execute tests without dumping output.
- **Pattern**: Run tests → Capture log → Analyze → Return summary.
- **Usage**: Running tests, debugging failures.
- **Output**: Test results summary + failure analysis.

### 🔀 `parallel-worker`
- **Purpose**: Coordinate parallel work streams.
- **Pattern**: Read analysis → Spawn sub-agents → Consolidate results.
- **Usage**: Executing parallel tasks in worktrees.
- **Output**: Consolidated status.

## Usage Principles
1. **Single Purpose**: One clear job per agent.
2. **Context Reduction**: Return 10-20% of what is processed.
3. **No Roleplay**: Agents are task executors, not "experts".
4. **Error Handling**: Gracefully handle and report failures.

## Command Integration
- `/pm:issue-analyze` → Identifies streams.
- `/pm:issue-start` → Spawns `parallel-worker`.
- `parallel-worker` → Spawns sub-agents.

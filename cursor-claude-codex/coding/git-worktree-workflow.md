---
description: Workflow for using Git Worktrees to isolate feature development.
globs: **/*
alwaysApply: false
---
# Git Worktree Workflow

> "Stop context switching. Start parallel execution."

Git Worktrees allow you to have multiple branches checked out at once in different directories.

## Setup
```bash
# Main repo
cd my-repo

# Add worktree for feature
git worktree add -b feature/new-api ../my-repo-new-api
```

## Structure
```
workspace/
├── my-repo (main)
├── my-repo-new-api (feature/new-api)
└── my-repo-fix-bug (fix/critical-bug)
```

## Workflow
1. **Create Worktree**: `git worktree add -b <branch> ../<dir>`
2. **Switch Context**: `cd ../<dir>`
3. **Launch Claude**: Run `claude` in the new directory. It has its own context/history.
4. **Develop**: Code, test, commit in isolation.
5. **Merge**: Push from worktree, merge in main repo.
6. **Cleanup**:
   ```bash
   git worktree remove ../<dir>
   ```

## Benefits for AI
- **Context Isolation**: Claude in directory A doesn't know about broken code in directory B.
- **Parallelism**: Run long-running agents in one terminal while coding in another.
- **Clean State**: Each feature starts fresh.

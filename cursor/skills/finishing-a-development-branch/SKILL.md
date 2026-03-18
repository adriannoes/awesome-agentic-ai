---
name: finishing-a-development-branch
description: Use when implementation is complete, all tests pass, and you need to decide how to integrate the work — guides merge, PR, or cleanup options
---

# Finishing a Development Branch

**Source:** [obra/superpowers](https://github.com/obra/superpowers) (MIT)

## Overview

Guide completion of development work by presenting clear options and handling chosen workflow.

**Core principle:** Verify tests → Present options → Execute choice → Clean up.

## The Process

### Step 1: Verify Tests

**Before presenting options, verify tests pass:**

```bash
# Run project's test suite
npm test / cargo test / pytest / go test ./...
```

**If tests fail:** Stop. Report failures. Cannot proceed until tests pass.

**If tests pass:** Continue to Step 2.

### Step 2: Determine Base Branch

```bash
git merge-base HEAD main 2>/dev/null || git merge-base HEAD master 2>/dev/null
```

Or ask: "This branch split from main — is that correct?"

### Step 3: Present Options

Present exactly these 4 options:

```
Implementation complete. What would you like to do?

1. Merge back to <base-branch> locally
2. Push and create a Pull Request
3. Keep the branch as-is (I'll handle it later)
4. Discard this work

Which option?
```

### Step 4: Execute Choice

**Option 1 — Merge Locally:**
```bash
git checkout <base-branch>
git pull
git merge <feature-branch>
<test command>
git branch -d <feature-branch>
```

**Option 2 — Push and Create PR:**
```bash
git push -u origin <feature-branch>
gh pr create --title "<title>" --body "..."
```

**Option 3 — Keep As-Is:** Report location. Don't cleanup worktree.

**Option 4 — Discard:** Require typed "discard" confirmation first. Then:
```bash
git checkout <base-branch>
git branch -D <feature-branch>
```

### Step 5: Cleanup Worktree (if applicable)

If using git worktrees, remove worktree for Options 1 and 4 only.

## Red Flags

**Never:**
- Proceed with failing tests
- Merge without verifying tests on result
- Delete work without confirmation

**Always:**
- Verify tests before offering options
- Present exactly 4 options
- Get typed confirmation for Option 4

# Final Review - Comprehensive PR Review & Testing

**Source:** [patyearone/final-review-gist](https://gist.github.com/patyearone/c9a091b97e756f5ed361f7514d88ef0b)

## Step 0: Determine Review Pass

Before starting, check the git history to determine if this is a follow-up review:

```bash
git log --oneline -10 | grep -i "Co-Authored-By:"
```

- **First pass**: No recent AI co-authored commits on this branch, or commits are from a different feature.
- **Follow-up pass**: Recent AI co-authored commits exist from a previous final-review run on this same feature.

If this is a follow-up pass:
- Note this in the summary as "Review Pass #2" (or #3, etc.)
- Tell the review agents to check git history to understand WHY recent changes were made before suggesting reversals
- Be more conservative with changes — the previous pass already applied significant improvements
- Focus agents on catching issues introduced BY the previous review, not re-litigating decisions already made

## Step 1: Create or Update the PR

- **If on `main`**: Create a new feature branch with a descriptive name (e.g., `feature/add-user-metrics`, `fix/dashboard-loading`), then commit the changes.
- **If already on a feature branch**: Continue with existing branch.

Then handle the PR:
- If a PR doesn't exist, create one with a clear title and description.
- If a PR already exists, push any uncommitted changes to it.

## Step 2: Launch Three Review Agents in Parallel

Use the Task tool to launch these three agents simultaneously.

**Important context for all agents** (if follow-up pass):
- "Check git log to see recent commits and their messages before making recommendations"
- "If a pattern looks intentional based on recent commit messages, don't recommend reversing it without strong justification"
- "Focus on issues that may have been INTRODUCED by recent changes, not re-reviewing the entire file"

### Agent 1: Codebase Consistency Reviewer

- Are we duplicating logic that already exists elsewhere? Search for similar patterns, helper methods, or services.
- Are there other places where this same logic/fix should be applied? We don't want inconsistency.
- Check for opportunities to consolidate with existing utilities, concerns, or services.

### Agent 2: SOLID & Clean Code Reviewer

- Single Responsibility: Are classes/methods doing one thing?
- Open/Closed: Can we extend without modifying?
- Replace conditionals with polymorphism or strategy patterns where appropriate
- Identify deeply nested if statements that could be flattened or extracted
- Flag long methods that should be decomposed
- Check for proper abstraction levels

### Agent 3: Defensive Code Auditor

- Rescue blocks that swallow exceptions silently
- Fallback values that mask nil errors we'd want to know about
- Safe navigation chains that hide broken assumptions
- Empty array/hash fallbacks that hide missing data
- Conditional checks that prevent useful error logs from being raised
- Any pattern that would make debugging harder in production

## Step 3: Reconcile and Apply Fixes

1. **Apply most recommendations** — If you're on the fence, do it.
2. **Handle conflicts intelligently** — If Agent 1 says "use existing method X" and Agent 2 says "extract to new method Y", prefer using existing code (Agent 1) to keep the codebase DRY.
3. **Track what you skip** — Only skip if you're genuinely confident it's wrong. Note these for the summary.
4. **On follow-up passes, aim for convergence** — If agents find only minor issues, recommend proceeding without another review pass.

## Step 4: Comprehensive Testing

Run ALL of these that apply to the changes:

- **Syntax & unit tests**: Run project test commands (e.g., `npm test`, `pytest`, `rails test`)
- **Linting**: Run linters on changed files
- **Contract verification**: If applicable, verify data contracts with test data
- **Browser testing**: For UI changes, use Browser DevTools MCP to smoke test affected pages

## Step 5: Push Final Changes

After all fixes and tests pass, commit and push the changes to the PR.

## Step 6: Final Summary

Provide a summary with:

- **Review Pass**: Which pass this is (e.g., "Review Pass #1" or "Review Pass #2")
- **Changes Applied**: Recommendations implemented from each agent
- **Recommendations Skipped**: For each skipped item, explain WHY
- **Test Coverage**: Which tests passed, what was verified
- **Unable to Test**: List anything that couldn't be tested and why
- **Another Pass Needed?**: If substantial changes, recommend running again; if minor, recommend merge

# GitHub Actions for Claude Code

> Patterns for running Claude Code as scheduled and event-driven automation in a GitHub repository.

**Inspiration:** [ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase) (no declared license; we reference the patterns and do not vendor the workflow YAML). Read that repo's [workflows/](https://github.com/ChrisWiles/claude-code-showcase/tree/main/.github/workflows) directly for a working implementation. This doc describes the patterns so you can build your own.

---

## Why run Claude Code in CI?

Skills and slash commands only help while an engineer is sitting at the editor. A lot of the leverage in AI-assisted development is in the **boring, periodic work** — reviewing PRs, realigning docs with code, auditing dependencies, sweeping the repo for rot. That work is perfect for a cron-triggered agent: it has clear inputs, repeatable outputs, and costs nothing to skip a cycle.

The `anthropics/claude-code-action` GitHub Action (or equivalent wrapper) runs Claude Code headlessly, given a prompt or a command, with access to the checked-out repo. From there, you can compose four patterns that cover most repo-maintenance needs.

## The four workflow patterns

### 1. Event-driven PR review

**Trigger:** `pull_request` (`opened`, `synchronize`, `reopened`) + `issue_comment` (`created`) filtered to `@claude` mentions on PRs.

**Job:** Check out the PR head, run a review prompt that loads your repo's review rules (e.g. `.claude/agents/code-reviewer.md`), and post findings as a PR comment or inline review.

**Why include the `@claude` mention trigger?** It lets humans ask for re-review without opening a new PR — `@claude can you look at the exception handling here?` triggers the same job, scoped to the current PR.

**Scope tips:**
- `concurrency` by PR number with `cancel-in-progress: true` — new pushes cancel in-flight reviews.
- Minimum permissions: `contents: read`, `pull-requests: write`, `issues: read`.
- Fetch with `fetch-depth: 0` if the review prompt walks git history.

### 2. Scheduled quality review

**Trigger:** `schedule: cron` (e.g. weekly).

**Job:** Pick a subset of the repo (one directory, random sample, or hotspots from `git log --stat`), run a quality audit prompt, and either (a) open a tracking issue summarizing findings, or (b) open a PR with safe auto-fixes.

**Why random sampling works:** Full-repo sweeps are expensive and get ignored. Reviewing a small rotating slice each week produces a steady stream of small, reviewable PRs instead of one unreadable mega-PR.

**Safety rails:**
- Never auto-merge. The agent opens a PR; humans merge.
- Constrain the diff: "fix only X-type issues" prompts keep PRs focused.
- Run tests inside the job before committing. If they fail, don't push.

### 3. Scheduled docs sync

**Trigger:** `schedule: cron` (e.g. monthly).

**Job:** Read commits from the last N days (`git log --since`), diff the code against the docs, and propose updates to READMEs, architecture docs, or inline comments that drifted.

**Why monthly, not per-commit:** Docs that update on every commit generate noise. Docs that update once a month, after a batch of commits, surface *actual* drift — things someone really forgot.

**Scope tips:**
- Prompt the agent to **only** touch docs files and open a PR. Never mix code and docs changes in the same run.
- Include "don't invent missing sections" in the prompt — the job is to correct drift, not to expand surface area.

### 4. Scheduled dependency audit

**Trigger:** `schedule: cron` (e.g. biweekly).

**Job:** Run `npm outdated` / `pip list --outdated` / `cargo outdated`, read the changelog for each bumpable dep, and either (a) open a tracking issue with an upgrade plan, or (b) open a PR that bumps only the safe (non-breaking) deps and verifies tests pass.

**Why this beats Dependabot alone:** Dependabot opens one PR per bump with no context. An agent can read the changelog, check your actual usage, and bundle the safe ones — and explain the risky ones in an issue instead of a PR you'll ignore.

**Safety rails:**
- Classify: patch/minor/major. Auto-PR only patch + minor; major goes to an issue.
- Run the full test suite in the same job. Block the PR if tests fail.

## Common scaffolding

Every one of the four patterns needs roughly the same skeleton:

- **Auth:** `ANTHROPIC_API_KEY` from repo secrets. Rotate regularly.
- **Concurrency:** Group by workflow + event key. Cancel in progress where appropriate.
- **Permissions:** Start with the minimum (`contents: read`). Add `pull-requests: write` and `issues: write` only for the jobs that need them.
- **Step order:** checkout → install deps → run tests (for auto-fix workflows) → run Claude Code → push/comment.
- **Cost control:** Cron frequency directly controls spend. Weekly is plenty for quality; biweekly for deps; monthly for docs.

## When *not* to use this pattern

- **Small repos with an active maintainer.** A solo dev reviewing their own PRs doesn't need a bot. The overhead of prompt upkeep outweighs the review quality.
- **Regulated codebases.** If you can't auto-commit to `main` or auto-open PRs against production branches, a lot of the value evaporates.
- **Unstable prompts.** If your review/quality prompts aren't battle-tested in interactive sessions first, CI will amplify their flaws across the whole repo.

## Related in this hub

- [cursor-and-claude/best-practices/hooks-guide.md](../best-practices/hooks-guide.md) — hooks for interactive editor sessions.
- [cursor-and-claude/commands/code-review.md](../commands/code-review.md) — the interactive counterpart to pattern #1.
- [cursor-and-claude/references/skill-auto-activation.md](./skill-auto-activation.md) — a hook pattern that complements CI automation at the editor layer.
- [cursor-and-claude/references/upstream-repos-catalog.md](./upstream-repos-catalog.md) — the full catalog entry for ChrisWiles/claude-code-showcase.

---
name: folder-specific-claude-and-agents-md
description: Create a specialized CLAUDE.md (+ AGENTS.md symlink) inside a specific folder to give future agents folder-scoped context. Use when David asks to create a CLAUDE.md for a folder, write folder instructions, or add agent context to a directory.
user-invocable: true
---

# Folder CLAUDE.md Creation

Generate a focused `CLAUDE.md` inside a target folder, plus an `AGENTS.md` symlink pointing at it. The file gives any future agent (Claude Code, Codex, etc.) the folder-specific context the global `CLAUDE.md` doesn't cover.

Background reference: `library/claude-code/claude-and-agents-md.md`.

## Process

### Step 1: Confirm the target folder + sanity-check it deserves a file
Ask David which folder. Use absolute path under `~/Documents/code/workspace/`.

**Only create a file if the folder has context needed across multiple sessions** — active evolving work, specific conventions, ongoing decisions. A folder of static reference files does NOT need one (agents can read on demand). If unsure, ask David.

### Step 2: Read every file in the folder IN FULL
- Use `ls -la` first to enumerate files and subfolders.
- Read every markdown, config, and key source file.
- For large tldraw/Vite subprojects: read `package.json`, `src/App.tsx`, one representative module file, and the folder's own `module-details.md`-style files.
- Do NOT skim. Do NOT skip. David's later edits depend on you having full context.

### Step 3: Draft a bullet list of candidate content
Before writing the file, give David a bullet list grouped by section — let him react first. Candidate sections (skip any that don't apply):

- **Product / Purpose** — what this folder/project is, current state, key metrics
- **Avatar / Audience** — who it's for (if applicable)
- **Essential Files** — one-line role for each important file, including cross-folder references (use `@path/file.md` import syntax)
- **Constraints (MUST NOT)** — explicit hard negatives. Highest-ROI content in the file.
- **Conventions** — David's lingo, status emojis (✅ 🟡), naming patterns, "usually do" patterns
- **Locked Decisions** — things agreed + dated, must not re-litigate
- **Context** — history, authority, credibility that frames the work
- **How to work with David** — collaboration style for this specific folder
- **Marketing Angles / Positioning** — if public-facing
- **Top Insights** — 3-5 most glaring signals from research (if research exists)

### Step 4: Iterate with David
- Keep answers short. David will edit directly in the IDE.
- When he edits the file, RE-READ it and flag: contradictions, typos, missing rules, wrong categorization.
- Do not revert his edits unless asked.

### Step 5: Write the file
- Path: `<folder>/CLAUDE.md`
- Start with a one-line header explaining the file's purpose.
- **Subdir file marker:** if this is a subdirectory file (parent folder already has its own CLAUDE.md), open with `Apply root CLAUDE.md first, then this file.`
- Use `##` section headers matching the sections David approved.
- Bullets over prose. Short bullets.
- **Cross-folder references:** use `@relative/path/file.md` import syntax, not prose mentions.
- **Heavy reference docs:** annotate with `**Read when:**` triggers (e.g. "Read when: writing offer copy"). Prevents loading every session.

### Step 6: Create the AGENTS.md symlink
```
cd <folder> && ln -s CLAUDE.md AGENTS.md
```
Verify with `ls -la CLAUDE.md AGENTS.md`.

### Step 7: Commit only when asked
Do NOT stage or push unless David says to. When he does: `git add -A`, commit with a `Day N:` style message, push.

## Rules

- **Never invent content.** Every bullet must trace back to something you read in the folder or something David said. No generic boilerplate.
- **Brevity wins.** David edits aggressively to make things shorter. Start tight.
- **Folder-scoped only.** Don't duplicate the global `CLAUDE.md` (personality, dates, ports, etc.). Only include what's specific to this folder.
- **No file trees, no directory dumps, no stack details the code already shows.** Anything an agent can derive from `ls` or `grep` rots fast and wastes tokens. Pin decisions, rules, and context — not structure.
- **Constraints vs Conventions.** Hard "MUST NOT" rules go in Constraints (explicit negatives). "Usually do X" patterns go in Conventions. Splitting these improves adherence.
- **No absolute ALWAYS/NEVER without explicit exceptions.** Edge cases make absolute rules get ignored. "Never commit secrets EXCEPT `.env.example`" beats "never commit secrets."
- **Never summarize or auto-shorten the file.** Context collapse degrades it. Grow deliberately, prune manually. If David asks to trim, do it by hand.
- **Maintenance loop.** When David corrects the agent on something this file should have prevented, add the rule to the file immediately. Don't wait.
- **No emojis unless David uses them** (status markers ✅ 🟡 are the exception — they're already conventions).
- **Symlink, not copy.** `AGENTS.md` must be a symlink so edits stay in sync.
- **Flag gaps honestly.** If David's edits introduce contradictions (e.g. "sell X" in one section and "never sell X" in another), call it out before he asks.

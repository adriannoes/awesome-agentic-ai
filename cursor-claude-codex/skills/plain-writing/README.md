# shreyashankar/plain-writing-skill (vendored)

**Source:** [shreyashankar/plain-writing-skill](https://github.com/shreyashankar/plain-writing-skill)
**License:** No license declared upstream (as of 2026-07-02) — vendored with attribution; prefer installing from upstream for updates.
**Vendored:** 2026-07-02 — `SKILL.md` + `assets/revision_template.html`, mirrored from upstream `main`

## What it is

A single agent skill that makes the agent **write and revise prose in plain language**: simple everyday words, complete sentences, no dashes, no jargon, no analogies, no filler, and full clear explanations. When the agent edits text, it can emit an HTML revision view (first draft, second draft, diff with hover reasons) using the bundled template.

Works on documents, README files, reports, emails, commit messages, PR descriptions, and any other prose — not on code itself.

## Layout

| Path | Contents |
|------|----------|
| [SKILL.md](./SKILL.md) | Plain-writing rules, self-check workflow, revision HTML instructions |
| [assets/revision_template.html](./assets/revision_template.html) | Template for the three-tab diff view |

## Install in this hub

```bash
# Cursor / Claude Code / Codex — install upstream for updates
git clone https://github.com/shreyashankar/plain-writing-skill ~/.claude/skills/plain-writing
```

Or copy/symlink this folder into your skills path (`~/.claude/skills/`, `~/.agents/skills/`, or `.cursor/skills/`).

## Pairs with

- [writing-guidelines](../writing-guidelines/) — Vercel Writing Guidelines compliance audit (fetches live rules; different goal: brand/style handbook vs plain-language defaults)
- [writing-skills](../writing-skills/) — how to author new agent skills well
- [research-paper-writing](../research-paper-writing/) — section-by-section academic paper rewrite (ML/CV/NLP); plain-writing is the general prose layer

## Attribution

Vendored from [shreyashankar/plain-writing-skill](https://github.com/shreyashankar/plain-writing-skill) by Shreya Shankar. Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#shreyashankarplain-writing-skill).

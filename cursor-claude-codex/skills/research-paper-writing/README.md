# Master-cai/Research-Paper-Writing-Skills (vendored)

**Source:** [Master-cai/Research-Paper-Writing-Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills)
**License:** MIT — see [LICENSE](./LICENSE) — © 2026 Master-cai
**Vendored:** 2026-06-25 — the `research-paper-writing` SKILL.md package (skill + section references + example banks + agent manifest), mirrored from upstream `research-paper-writing/`

## What it is

A single agent skill that drives a **section-by-section research-paper rewrite** workflow for ML/CV/NLP-style papers — built for Codex, Claude Code, and Gemini. The content is curated and adapted from Prof. **Peng Sida** (彭思达)'s open research-writing notes ([pengsida/learning_research](https://github.com/pengsida/learning_research)).

The workflow: clarify the paper story → load section-specific guidance → paragraph rewrite → reverse outlining → claim-evidence check → adversarial self-review. It prioritizes first-impression quality (figures/tables/layout), logical flow, and evidence-backed claims.

## Layout

| Path | Contents |
|------|----------|
| [SKILL.md](./SKILL.md) | The skill itself (Core Workflow, Execution Rules, Output Contract) |
| [references/introduction.md](./references/introduction.md) | Introduction guide (the largest, ~15 KB) |
| [references/abstract.md](./references/abstract.md) | Abstract guide |
| [references/related-work.md](./references/related-work.md) | Related work guide |
| [references/method.md](./references/method.md) | Method guide |
| [references/experiments.md](./references/experiments.md) | Experiments guide |
| [references/conclusion.md](./references/conclusion.md) | Conclusion guide |
| [references/paper-review.md](./references/paper-review.md) | 5-dimension reviewer checklist (self-review before submission) |
| [references/does-my-writing-flow-source.md](./references/does-my-writing-flow-source.md) | Paragraph-clarity / reverse-outlining test |
| [references/examples/](./references/examples/) | Example banks: `abstract/`, `introduction/` (12+ variations), `method/`, plus `index.md` |
| [agents/openai.yaml](./agents/openai.yaml) | OpenAI agent manifest |
| [LICENSE](./LICENSE) | MIT license |

## Install in this hub

```bash
# Cursor / Claude Code / Codex — install upstream for updates
npx skills add Master-cai/Research-Paper-Writing-Skills
```

Or copy/symlink this folder into your skills path (`~/.claude/skills/`, `~/.agents/skills/`, or `.cursor/skills/`).

## Pairs with

- [research/](../../../research/) — educational notebooks and autonomous research setups (Karpathy nn-zero-to-hero, nanochat, autoresearch). This skill covers the *writing-up* side those notebooks don't.
- [autoresearch](../autoresearch/) — Karpathy's autonomous research loop; this skill is the writing companion to the research loop
- [writing-plans](../writing-plans/) · [writing-skills](../writing-skills/) — structured-writing skills (for code plans/skills, but the discipline transfers)

## Attribution

Vendored as-is from [Master-cai/Research-Paper-Writing-Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills) (MIT), authored by **Xudong Cai** (GitHub `Master-cai`). Content curated/adapted from Prof. **Peng Sida** (彭思达) — source [github.com/pengsida/learning_research](https://github.com/pengsida/learning_research) and `pengsida.notion.site/c1a22465a0fa4b15a12985223916048e`. The MIT LICENSE is preserved verbatim.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#master-cairesearch-paper-writing-skills).

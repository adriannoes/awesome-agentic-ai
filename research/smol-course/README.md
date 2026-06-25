# smol-course (vendored, English-only)

**Source:** [huggingface/smol-course](https://github.com/huggingface/smol-course)
**License:** Apache-2.0 — see [LICENSE](./LICENSE) — © Hugging Face
**Vendored:** 2026-06-25 — v1 modules (1–8) + v2 units (EN) + exercise notebooks, mirrored from upstream `main`. **12 notebooks** + module/unit markdown guides.
**Translation note:** Upstream ships the course in EN, ES, JA, KO, PT-BR, and VI. This hub vendors the **English-only** subset to keep the repository language consistent and avoid duplicating content across 6 languages. For a translated version, read upstream.

## What it is

A practical, open course on **aligning small language models** for your specific use case — built so it runs on most local machines with minimal GPU requirements and no paid services. Built around [SmolLM3](https://huggingface.co/blog/smollm3) and [SmolVLM2](https://huggingface.co/blog/smolvlm2), but the skills transfer to larger models / other small LLMs & VLMs. Maintained by Hugging Face (~6.6k ★, peer-reviewed PRs, leaderboard).

## v1 modules (the complete didactic track)

| # | Module | Notebooks | Covers |
|---|--------|-----------|--------|
| 1 | [instruction_tuning](./v1/1_instruction_tuning/) | — (markdown guides) | Supervised fine-tuning, chat templates, instruction following |
| 2 | [preference_alignment](./v1/2_preference_alignment/) | 2 | DPO / ORPO — aligning to human preferences |
| 3 | [parameter_efficient_finetuning](./v1/3_parameter_efficient_finetuning/) | 2 | LoRA, prompt tuning, efficient adaptation |
| 4 | [evaluation](./v1/4_evaluation/) | 1 | Benchmarks and custom domain evaluation |
| 5 | [vision_language_models](./v1/5_vision_language_models/) | 2 | Adapt and use multimodal (VLM) models |
| 6 | [synthetic_datasets](./v1/6_synthetic_datasets/) | 2 | Generate synthetic datasets for custom domains |
| 7 | [inference](./v1/7_inference/) | — (markdown guides) | Inference serving / optimization |
| 8 | [agents](./v1/8_agents/) | 1 | Agent / tool-use hands-on |

Plus the v2 course material under [units/en/](./units/en/) (unit0–unit4, markdown) and exercise notebooks under [notebooks/](./notebooks/).

## How it fits this hub

This is the **fine-tuning / alignment / eval hands-on** the hub was missing. It pairs with:

- [../llms-from-scratch/](../llms-from-scratch/) — Raschka's ch06/ch07 (finetuning for classification + instruction-following) and appendix-E (LoRA) are the *from-scratch* prequel; smol-course is the *modern-framework* (TRL, PEFT, DPO) sequel
- [../reasoning-from-scratch/](../reasoning-from-scratch/) — same alignment/reinforcement-learning themes (GRPO, RLHF) but on a reasoning base model
- [../nlp-with-transformers/](../nlp-with-transformers/) — applied NLP with transformer libraries; smol-course is the fine-tuning/alignment layer on top
- [../autoresearch/](../autoresearch/) — the autonomous research loop; smol-course's evaluation module (v1/4) is the eval methodology that loop depends on
- [../cursor-claude-codex/references/awesome-evals/](../cursor-claude-codex/references/awesome-evals/) — the eval reference catalog (theory + patterns); smol-course v1/4 is the hands-on companion

## Setup

See [requirements.txt](./requirements.txt) and [pyproject.toml](./pyproject.toml). Upstream recommends `uv` and a Hugging Face account for the leaderboard; the notebooks also run on Google Colab.

## Attribution

Vendored from [huggingface/smol-course](https://github.com/huggingface/smol-course) (Apache-2.0), maintained by **Hugging Face**. English-only subset (translations excluded to keep the hub language consistent); the LICENSE is preserved verbatim. The v1 modules are the complete didactic track; v2 `units/en/` is the in-progress refresh.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../cursor-claude-codex/references/upstream-repos-catalog.md#huggingfacesmol-course).

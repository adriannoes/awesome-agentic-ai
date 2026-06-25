# LLMs-from-scratch (vendored)

**Source:** [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)
**License:** Apache-2.0 — see [LICENSE.txt](./LICENSE.txt) — © Sebastian Raschka
**Vendored:** 2026-06-25 — chapter notebooks + appendices + setup + pkg, mirrored from upstream `main`. **66 notebooks.**
**Book:** [*Build a Large Language Model (From Scratch)*](https://manning.com/books/build-a-large-language-model-from-scratch) (Manning) — official code repository.

## What it is

Step-by-step Jupyter notebooks that implement a **ChatGPT-like LLM in PyTorch from scratch** — no external LLM libraries. You code through every stage: text data → attention → GPT model → pretraining → finetuning (classification + instruction-following) → LoRA. The same author's *Build a Reasoning Model (From Scratch)* is vendored next door at [../reasoning-from-scratch/](../reasoning-from-scratch/).

## Chapters (notebooks)

| Ch | Topic | Main notebook |
|----|-------|---------------|
| 1 | Understanding LLMs | (no code) |
| 2 | Working with text data | [ch02/01_main-chapter-code/ch02.ipynb](ch02/01_main-chapter-code/ch02.ipynb) |
| 3 | Coding attention mechanisms | [ch03/01_main-chapter-code/ch03.ipynb](ch03/01_main-chapter-code/ch03.ipynb) |
| 4 | Implementing a GPT model from scratch | [ch04/01_main-chapter-code/ch04.ipynb](ch04/01_main-chapter-code/ch04.ipynb) |
| 5 | Pretraining on unlabeled data | [ch05/01_main-chapter-code/ch05.ipynb](ch05/01_main-chapter-code/ch05.ipynb) |
| 6 | Finetuning for text classification | [ch06/01_main-chapter-code/ch06.ipynb](ch06/01_main-chapter-code/ch06.ipynb) |
| 7 | Finetuning to follow instructions | [ch07/01_main-chapter-code/ch07.ipynb](ch07/01_main-chapter-code/ch07.ipynb) |

Plus exercise-solutions notebooks per chapter, bonus sections (e.g. ch05's `07_gpt_to_llama`, `11_qwen3`, `18_muon`), and appendices:

- **appendix-A** — Introduction to PyTorch (`code-part1.ipynb`, `code-part2.ipynb`, DDP script)
- **appendix-D** — Adding bells and whistles to the training loop
- **appendix-E** — Parameter-efficient finetuning with **LoRA** (`appendix-E.ipynb`)

See the upstream [README.md](./README.md) for the full chapter/bonus table and the 17-hour companion video course.

## How it fits this hub

This is the **end-to-end LLM pipeline in notebooks** the hub was missing. It sits between:

- [../nn-zero-to-hero/](../nn-zero-to-hero/) — Karpathy's neural-nets-from-scratch course (micrograd, makemore) — the *prerequisites*
- [../nanochat/](../nanochat/) — Karpathy's minimal ChatGPT stack (only 2 analysis notebooks here; the full pipeline is this repo)
- [../reasoning-from-scratch/](../reasoning-from-scratch/) — same author, the *next* book (inference-time scaling, RL, distillation on a pretrained base)
- [../nlp-with-transformers/](../nlp-with-transformers/) — applied NLP with transformer libraries (this repo builds the transformer *itself*)

appendix-E (LoRA) and ch07 (instruction finetuning) pair with the fine-tuning/alignment hands-on in [../smol-course/](../smol-course/).

## Setup

See [setup/](./setup/) (Python preferences, installing libraries, optional Docker/AWS SageMaker) and [requirements.txt](./requirements.txt). The upstream uses `pixi` ([pixi.toml](./pixi.toml)); `pkg/` is the installable `llms_from_scratch` helper package.

## Attribution

Vendored from [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) (Apache-2.0), authored by **Sebastian Raschka**. The `reasoning-from-scratch` submodule is **not** included here (it's vendored separately at [../reasoning-from-scratch/](../reasoning-from-scratch/)). LICENSE.txt preserved verbatim; CITATION.cff included.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../cursor-claude-codex/references/upstream-repos-catalog.md#rasbtllms-from-scratch).

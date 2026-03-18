# autoresearch

Key files mirrored from [karpathy/autoresearch](https://github.com/karpathy/autoresearch). For full context, quick start, and platform notes, see the upstream repository.

AI agents running research on single-GPU nanochat training automatically: the agent edits `train.py`, runs a 5-minute training budget, keeps or discards by val_bpb, and repeats. You configure the agent via `program.md`.

## Files in this folder

| File          | Role |
|---------------|------|
| `program.md`  | Agent instructions (human-edited). Point your agent here. |
| `train.py`    | Model, optimizer, training loop (agent-edited). |
| `prepare.py`  | Data prep, tokenizer, dataloader, evaluation (fixed; do not modify). |
| `pyproject.toml` | Dependencies (uv). |
| `analysis.ipynb` | Analyze `results.tsv` and plot progress. |

## Quick start (upstream)

```bash
uv sync
uv run prepare.py   # one-time: download data + train tokenizer
uv run train.py     # single 5-min experiment
```

Requires a single NVIDIA GPU, Python 3.10+, and [uv](https://docs.astral.sh/uv/).

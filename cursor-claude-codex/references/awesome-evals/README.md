# awesome-evals (vendored)

**Source:** [benchflow-ai/awesome-evals](https://github.com/benchflow-ai/awesome-evals) ("Awesome Agent Evals")
**License:** CC0 1.0 (public-domain dedication by BenchFlow) — see [LICENSE](./LICENSE)
**Vendored:** 2026-06-25 — README + PATTERNS playbook + SCAN workflow + 146 deep reading notes, mirrored from upstream `main` @ 2026-06-25

## What it is

A curated, opinionated, **non-BS** library of the best resources for **building and evaluating AI agents** — papers, blog posts, talks, courses, tools, and benchmarks. Unlike most "awesome" lists (link dumps), this one is **annotated and verified**: every entry says *what it is and why it belongs*, URLs are checked, quotes are verbatim, and dead/abandoned tools are pruned. **443+ curated links · 146 deep reading notes**, plus a runnable eval playbook.

Maintained by [**BenchFlow**](https://benchflow.ai) ("Environments are the new data."). Created 2026-06-24, actively maintained (daily commits).

## What's in this folder

| Path | Purpose |
|------|---------|
| [UPSTREAM-README.md](./UPSTREAM-README.md) | The awesome-list itself (443+ links, 10 themed sections). Vendored as `UPSTREAM-README.md` to keep the hub README distinct |
| [PATTERNS.md](./PATTERNS.md) | The practitioner playbook — real, runnable code + worked examples for 10 eval patterns (LLM-as-judge, pass@k, error analysis, trajectory grading, CI gating, verifiable rewards, …) |
| [SCAN.md](./SCAN.md) | "The Scan" — the autonomous audit + update workflow that curates the list (Claude Code GitHub Action) |
| [.github/workflows/eval-scan.yml](./.github/workflows/eval-scan.yml) | The self-updating GitHub Action (daily scan → vet → PR) |
| [notes/articles/](./notes/articles/) | 68 deep reading notes on articles/blog posts |
| [notes/papers/](./notes/papers/) | 28 deep reading notes on papers |
| [notes/talks/](./notes/talks/) | 47 transcribed + deep-noted talks & podcasts (verbatim + timestamps) |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Upstream contributing guide (the non-BS bar) |
| [LICENSE](./LICENSE) | CC0 1.0 |

> **Not vendored:** upstream `docs/index.html` (2.2 MB auto-generated rendered site) — skipped to keep the hub lean. The markdown sources here are the source of truth.

## The 10 README sections (themes)

1. Why we need evals
2. "If you can eval it, you have built it" — eval ⇄ capability ⇄ RL environment
3. The model / harness / skill decomposition
4. Observability & the output / eval space (the surfaces you can grade)
5. Evaluation infrastructure (the eval stack: datasets, scorers, online/offline, tracing, CI)
6. Benchmark vs. eval (and benchmark integrity: contamination, saturation, label errors, leaderboard gaming)
7. Evals & RL environments (verifiers, reward design, difficulty calibration, lifecycle)
8. LLM-as-judge & verifiers (alignment, biases, verifiable vs judgeable)
9. Agent-specific evaluation (trajectories, tool use, multi-turn, world state, multi-agent, localization — τ-bench, SWE-bench, WebArena, OSWorld, Terminal-Bench)
10. Safety / adversarial evaluation (prompt injection, jailbreaks, action-authorization, benchmark auditing — AgentDojo, AgentHarm, CaMeL, PyRIT, OWASP agentic top-10)

Plus a "Must-read starter set" (12 entries) and a companies/landscape directory.

## The 10 PATTERNS (runnable playbook)

1. LLM-as-judge aligned to humans
2. pass@k / pass^k unbiased estimator
3. Code-based assertions / unit tests for LLM output
4. Error analysis: open → axial coding → prioritize
5. Trajectory & tool-use evaluation
6. Outcome / environment-state grading
7. CI gating & regression datasets
8. Verifiable reward / RL-environment rubric
9. Synthetic test-data / eval-set generation
10. Contamination-resistant eval design

## How it pairs with this hub

This is the **eval reference catalog** the hub was missing. It cross-cuts several existing hub areas:

- **`evals` skill** ([igoruehara-spec-driven/skills/evals/](../skills/igoruehara-spec-driven/skills/evals/)) — runs spec-fidelity evals; PATTERNS §7 (verifiable reward) and §7 (CI gating) operationalize that skill
- **`verification-before-completion` skill** ([skills/verification-before-completion/](../skills/verification-before-completion/)) — PATTERNS §1 (LLM-as-judge aligned to humans) and §6 (outcome/world-state grading) are the *how-to* behind "evidence before claims"
- **`output-verification-loop` pattern** ([agentic-patterns.md](./agentic-patterns.md)) — README §9 (trajectory grading) + PATTERNS §7 (CI gating) are the feedback-loop sibling
- **`papers/agents-and-engineering/`** ([../../papers/agents-and-engineering/](../../papers/agents-and-engineering/)) — the README's §3 (harness), §9 (code evals), and §10 (safety) cite the same paper canon (SWE-bench, τ-bench, AgentDojo, …); `notes/papers/` deepens those
- **`autoresearch` skill** ([skills/autoresearch/](../skills/autoresearch/)) — README §2 (eval ⇄ capability ⇄ RL environment) is the research-loop framing Karpathy's autoresearch embodies
- **`anthropic-cybersecurity-skills/` AI-security domain** ([skills/anthropic-cybersecurity-skills/](../skills/anthropic-cybersecurity-skills/)) — README §10 (safety/adversarial eval: PyRIT, AgentDojo, prompt injection) pairs with the `ai-security` skills we cherry-picked from ACS v1.3.0
- **`smol-course` v1/4 evaluation module** ([../../research/smol-course/v1/4_evaluation/](../../research/smol-course/v1/4_evaluation/)) — the hands-on companion to this catalog's eval theory/patterns
- **`openai/openai-cookbook` eval/RAG notebooks** (link-only) — the hands-on practice companion: [Evaluate_RAG_with_LlamaIndex.ipynb](https://github.com/openai/openai-cookbook/blob/main/examples/evaluation/Evaluate_RAG_with_LlamaIndex.ipynb) (build + grade a RAG pipeline) and [Getting_Started_with_OpenAI_Evals.ipynb](https://github.com/openai/openai-cookbook/blob/main/examples/evaluation/Getting_Started_with_OpenAI_Evals.ipynb) (OpenAI Evals framework). The cookbook is too large/fast-moving to vendor; read these notebooks upstream as the practice layer on top of this catalog's theory.

## Refresh

Upstream is actively maintained (daily commits). To refresh this snapshot:

```bash
git clone --depth 1 https://github.com/benchflow-ai/awesome-evals.git /tmp/awesome-evals
# rsync vendorable files (exclude docs/index.html and .git)
rsync -a --delete --exclude='docs/' --exclude='.git' --exclude='.gitignore' \
  /tmp/awesome-evals/ cursor-claude-codex/references/awesome-evals/
# restore hub README.md from git if overwritten (upstream README.md is vendored as UPSTREAM-README.md)
```

After refresh: restore this hub `README.md` from git if the rsync overwrote it; bump the vendored date above.

## Attribution

Vendored from [benchflow-ai/awesome-evals](https://github.com/benchflow-ai/awesome-evals) (CC0 1.0). Maintained by **BenchFlow** ([benchflow.ai](https://benchflow.ai)); primary maintainer `xdotli` (Xiangyi). The CC0 LICENSE is preserved verbatim. Content is in English.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../upstream-repos-catalog.md#benchflow-aiawesome-evals).

# API Reference — RAG Prompt Injection Testing Tools

## NVIDIA garak CLI

Install: `python -m pip install -U garak`

| Flag | Description |
|------|-------------|
| `--model_type` / `--target_type` | Generator family: `openai`, `huggingface`, `rest`, `ollama`, `bedrock` |
| `--model_name` / `--target_name` | Specific model / model id |
| `--probes` | Comma-separated probe modules, or `all` (default) |
| `--list_probes` | Print all available probe modules |
| `--generations` | Number of generations per prompt |
| `--report_prefix` | Prefix for the JSONL/HTML report |
| `--generator_option_file` | JSON config for the `rest` generator |

Relevant probe modules: `promptinject`, `latentinjection`, `leakreplay`, `xss`, `dan`, `encoding`, `goodside`.

Example:
```bash
python -m garak --model_type openai --model_name gpt-4o-mini \
  --probes promptinject,latentinjection --generations 5 --report_prefix rag_run
```

## Promptfoo Red-Team CLI

Install: `npm install -g promptfoo`

| Command | Description |
|---------|-------------|
| `promptfoo redteam init` | Scaffold a red-team config |
| `promptfoo redteam run` | Generate adversarial cases and execute |
| `promptfoo redteam report` | Open the HTML findings report |

RAG-relevant plugins (`redteam.plugins`): `indirect-prompt-injection`, `rag-document-exfiltration`, `harmful:privacy`.
Strategies (`redteam.strategies`): `jailbreak`, `prompt-injection`, `crescendo`.

## Microsoft PyRIT

Install: `pip install pyrit` (Python 3.10-3.13)

| Component | Import | Purpose |
|-----------|--------|---------|
| `initialize_pyrit_async`, `IN_MEMORY` | `pyrit.setup` | Initialize memory/DB |
| `OpenAIChatTarget` | `pyrit.prompt_target` | Target an OpenAI-compatible endpoint |
| `PromptSendingAttack` | `pyrit.executor.attack` | Single-/batch-turn prompt sending |
| `RedTeamingAttack` | `pyrit.executor.attack` | Multi-turn adversarial conversation |
| `ConsoleAttackResultPrinter` | `pyrit.executor.attack` | Print scored results |

## sentence-transformers (embedding poisoning PoC)

Install: `pip install sentence-transformers faiss-cpu numpy`

| API | Description |
|-----|-------------|
| `SentenceTransformer(model_name)` | Load embedding model |
| `model.encode(text, normalize_embeddings=True)` | Produce normalized vector |
| `numpy.dot(a, b)` | Cosine similarity of normalized vectors |

## External References

- garak CLI reference: https://github.com/NVIDIA/garak/blob/main/docs/source/cliref.rst
- Promptfoo indirect injection plugin: https://www.promptfoo.dev/docs/red-team/plugins/indirect-prompt-injection/
- PyRIT docs: https://azure.github.io/PyRIT/

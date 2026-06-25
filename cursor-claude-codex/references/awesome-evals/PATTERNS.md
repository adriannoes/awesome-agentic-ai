# Eval Patterns — a practitioner playbook

Real, runnable patterns for building and evaluating AI agents — **code, worked examples, action items, and pitfalls** — mined from the canonical sources (Hamel Husain, Shreya Shankar, Eugene Yan, OpenAI evals/human-eval, Braintrust, τ-bench, verifiers, and more). Companion to the curated [README](README.md).

> Code snippets are faithful to their cited source; where a snippet is reconstructed rather than copied verbatim, it's labeled. Every pattern links the sources it was built from.

## Patterns
- [LLM-as-judge aligned to humans](#llm-as-judge-aligned-to-humans)
- [pass@k / pass^k unbiased estimator](#passk-passk-unbiased-estimator)
- [Code-based assertions / unit tests for LLM output](#code-based-assertions-unit-tests-for-llm-output)
- [Error analysis: open → axial coding → prioritize](#error-analysis-open-axial-coding-prioritize)
- [Trajectory & tool-use evaluation](#trajectory-tool-use-evaluation)
- [Outcome / environment-state grading](#outcome-environment-state-grading)
- [CI gating & regression datasets](#ci-gating-regression-datasets)
- [Verifiable reward / RL-environment rubric](#verifiable-reward-rl-environment-rubric)
- [Synthetic test-data / eval-set generation](#synthetic-test-data-eval-set-generation)
- [Contamination-resistant eval design](#contamination-resistant-eval-design)

---

### LLM-as-judge aligned to humans

**When to use:** When you need to scale a quality check across thousands of agent traces that can't be verified with code/string match (tone, faithfulness, task-completion, "did it follow the instruction"), and you have at least ~100 human-labeled examples to validate against.

**Pattern:** Build the judge *from* error analysis, not from imagination — write evaluators for failure modes you actually observed. Make every judge a **binary pass/fail** (not 1–5 Likert): the gap between a 3 and a 4 is noise, but pass/fail forces a crisp decision and lets you use classification metrics. Put the *real signal in few-shot critique examples* — pass/fail labels paired with a domain expert's written reasoning ("critique shadowing") — rather than stuffing a long rubric into the system prompt. Then **validate the judge against a held-out human-labeled set using TPR and TNR separately**, never raw agreement, because a judge can post 80% agreement while missing most real failures.

**Code:** Reconstructed faithfully from OpenAI evals' `closedqa.yaml` `cot_classify` spec and Braintrust autoevals' `LLMClassifier` — both use a CoT-then-single-letter binary structure. The few-shot critiques are the load-bearing part.

```python
# Faithful to OpenAI evals (cot_classify) + autoevals LLMClassifier.
# choice_scores: {"PASS": 1.0, "FAIL": 0.0}; eval_type = cot_classify.

JUDGE_PROMPT = """You are evaluating whether an AI assistant's reply meets a
specific criterion. Here is the data:
[BEGIN DATA]
*** [User request]: {input}
*** [Assistant reply]: {output}
*** [Criterion]: The reply must directly answer the user's question using ONLY
facts present in the provided context, and must not invent appointment times.
[END DATA]

First, reason step by step about whether the reply meets the criterion. Do not
state your verdict at the outset. Then print ONLY "PASS" or "FAIL" on its own line.

Reasoning:"""

# THE REAL SIGNAL: few-shot critiques from a domain expert, not the system prompt.
FEW_SHOT = [
  {"input": "Do you have a 2-bed available for July 1?",
   "output": "Yes! I have a 2-bed ready July 1 at 2pm.",
   "critique": "FAIL — invented a tour time ('2pm') that was never in context. "
               "Hallucinated specifics are the #1 NurtureBoss failure cluster.",
   "label": "FAIL"},
  {"input": "What's the pet policy?",
   "output": "Per our listing, cats and dogs under 40lbs are welcome with a "
             "$300 deposit.",
   "critique": "PASS — every fact ($300, 40lbs, cats/dogs) is grounded in the "
               "supplied context; directly answers the question.",
   "label": "PASS"},
]

def build_messages(input, output):
    shots = []
    for ex in FEW_SHOT:
        shots.append({"role": "user",
                      "content": JUDGE_PROMPT.format(input=ex["input"], output=ex["output"])})
        shots.append({"role": "assistant",
                      "content": f'{ex["critique"]}\n{ex["label"]}'})
    return [*shots,
            {"role": "user", "content": JUDGE_PROMPT.format(input=input, output=output)}]

# --- Validation: TPR/TNR on a held-out human-labeled set, NOT raw agreement ---
def validate(judge, labeled):  # labeled: [(input, output, human_label in {PASS,FAIL})]
    tp=fp=tn=fn=0
    for inp, out, human in labeled:
        verdict = judge(inp, out)              # "PASS" or "FAIL"
        fail = (verdict == "FAIL")             # "positive" = catches a real failure
        human_fail = (human == "FAIL")
        if   fail and human_fail: tp += 1
        elif fail and not human_fail: fp += 1
        elif not fail and not human_fail: tn += 1
        else: fn += 1
    tpr = tp / (tp + fn) if tp + fn else 0.0   # of real failures, % the judge catches
    tnr = tn / (tn + fp) if tn + fp else 0.0   # of real passes, % the judge clears
    return {"TPR": tpr, "TNR": tnr, "FP": fp, "FN": fn}
# Ship only when BOTH TPR and TNR are high (e.g. >=0.9) on held-out data.
```

**Worked example:** Hamel's **NurtureBoss** case (real-estate AI assistant): error analysis on real traces clustered failures into a handful of named buckets — the biggest being the bot **hallucinating appointment availability/times** that were never in context. The team wrote a binary judge for exactly that cluster, aligned it with expert pass/fail critiques, and validated TPR/TNR on held-out labels rather than overall accuracy — because the failure class was rare, so a judge could score high agreement while catching almost none of the actual hallucinations. (Source: hamel.dev evals-faq.) Eugene Yan's complementary data point: on factual-consistency judging, binary judges hit >95% precision on *consistent* summaries but only ~30–60% recall on *inconsistent* ones — the exact false-negative blind spot raw accuracy hides and TPR exposes (eugeneyan.com).

**Action items:**
- Run error analysis on ~30–50 real traces first; name the failure clusters, then write one binary judge per cluster you actually saw.
- Make every judge output PASS/FAIL (or Y/N) with CoT reasoning *before* the verdict; map to {1.0, 0.0}. Kill all 1–5 scales.
- Have a domain expert label 100+ examples and write a one-line *critique* (the why) for each; promote 4–8 of these into few-shot examples.
- Hold out a labeled test set and report **TPR and TNR separately** (plus FP/FN counts), not raw agreement or a single accuracy number.
- Iterate the judge until both TPR and TNR clear your bar; if you can't, swap the judge model before adding rubric verbiage.
- Re-validate the judge whenever the agent, prompt, or data distribution changes.

**Pitfalls:**
- Raw agreement lies on imbalanced data: a judge that rubber-stamps PASS scores ~90% agreement when 90% of traces pass while catching zero failures — TPR would read ~0.
- Few-shot examples are sensitive to label, order, and count (Eugene Yan / ChatGPT-factual-inconsistency finding) — recalibrate and re-test TPR/TNR after editing them; don't assume more shots is better.
- A bloated rubric in the system prompt doesn't fix misalignment; concrete labeled critique examples do.

**Sources:**
- https://hamel.dev/blog/posts/evals-faq/
- https://eugeneyan.com/writing/llm-evaluators/
- https://github.com/openai/evals/blob/main/evals/registry/modelgraded/closedqa.yaml
- https://github.com/braintrustdata/autoevals
- https://github.com/prometheus-eval/prometheus-eval

---

### pass@k / pass^k unbiased estimator

**When to use:** Reach for **pass@k** when *one* success out of k attempts is enough (capability / best-of-k: code generation, retrieval, anything with a verifier or human in the loop). Reach for **pass^k** when you need *every* one of k independent trials to succeed (reliability: customer-facing agents that must follow policy the same way every time).

**Pattern:** Never report the naive `1 - (1 - p)^k` for pass@k — when you only drew `n` samples per problem and `c` were correct, that plug-in estimate is biased high for small `n`. Use the unbiased combinatorial estimator `pass@k = 1 - C(n-c, k) / C(n, k)` and compute it in a numerically stable way as a running product (never form the giant binomials directly). pass^k is the opposite question — `P(all k succeed) = p^k` — so it *falls* as k grows while pass@k *rises*. Always say which one you mean: with p=0.75, pass@10 ≈ 1.0 but pass^10 ≈ 0.056, and they tell opposite stories about the same model.

**Code:** Verbatim from OpenAI `human-eval` (`human_eval/evaluation.py`), plus a short pass^k helper (reconstructed — pass^k is not in human-eval).

```python
import itertools
from typing import List, Union
import numpy as np

def estimate_pass_at_k(
    num_samples: Union[int, List[int], np.ndarray],
    num_correct: Union[List[int], np.ndarray],
    k: int
) -> np.ndarray:
    """Estimates pass@k of each problem and returns them in an array."""

    def estimator(n: int, c: int, k: int) -> float:
        """Calculates 1 - comb(n - c, k) / comb(n, k)."""
        if n - c < k:
            return 1.0
        # Numerically stable: telescoping product instead of huge binomials.
        return 1.0 - np.prod(1.0 - k / np.arange(n - c + 1, n + 1))

    if isinstance(num_samples, int):
        num_samples_it = itertools.repeat(num_samples, len(num_correct))
    else:
        assert len(num_samples) == len(num_correct)
        num_samples_it = iter(num_samples)

    return np.array([estimator(int(n), int(c), k)
                     for n, c in zip(num_samples_it, num_correct)])

# pass^k: probability ALL k independent trials succeed. p is the per-trial
# success rate (e.g. c/n). Reliability metric — drops as k grows.
def estimate_pass_power_k(num_samples, num_correct, k: int) -> np.ndarray:
    p = np.asarray(num_correct, dtype=float) / np.asarray(num_samples, dtype=float)
    return p ** k   # reconstructed; mirrors tau-bench's pass^k definition

# Usage: aggregate across problems by taking the mean.
# pass_at_k  = estimate_pass_at_k(200, num_correct_per_problem, k=10).mean()
# pass_pow_k = estimate_pass_power_k(200, num_correct_per_problem, k=10).mean()
```

Why the product form is stable: `C(n-c,k)/C(n,k)` telescopes to `∏_{i=n-c+1}^{n} (1 - k/i)`, so you multiply `n-c` small floats near 1.0 instead of dividing two astronomically large binomial coefficients (which overflow / lose precision). The `if n - c < k: return 1.0` guard handles the case where it's impossible to draw k all-wrong samples.

**Worked example:** τ-bench / τ²-bench (Sierra; adopted in Anthropic model cards) make pass^k the headline metric for agent reliability. In the flight-booking task, an agent must complete a booking and the harness verifies success by **diffing the database state** at the end of the episode (did the right reservation actually get written?), not by grading the chat transcript. A model with a 75% per-trial rate looks great at pass@k but its pass^k collapses (~42% at k=3, ~5.6% at k=10) — exactly the "does it do the right thing *every* time" question that matters for a customer-service agent, and exactly why one-success-counts pass@k would be the wrong metric to ship on. (Sources: τ-bench / Sierra; Anthropic "Demystifying evals for AI agents".)

**Action items:**
- Decide per-metric *before* running: capability question → pass@k; reliability question → pass^k. Put the choice in the eval config so it can't drift.
- Draw `n >> k` samples per problem (human-eval uses n=200 for k∈{1,10,100}) so the unbiased estimator has signal; report `n` and `k` alongside the number.
- Use `estimate_pass_at_k` (the product form) — do **not** report `1 - (1-p)^k` for pass@k; delete any such line in your harness.
- Average the per-problem array across problems for the dataset number (`.mean()`), don't pool all samples into one ratio.
- For agent reliability, grade by **final environment state** (DB diff / SQL state check), not transcript text, then feed those pass/fail counts into pass^k.
- Sanity-check: as k rises, pass@k must be non-decreasing and pass^k non-increasing. If not, your estimator is wrong.

**Pitfalls:**
- The naive `1 - (1-p)^k` pass@k estimate is biased high for small `n` — it silently inflates your scores.
- pass@k and pass^k move in *opposite* directions with k; quoting "pass@k" without saying which, or comparing a pass@10 to someone else's pass^10, is meaningless.
- Both formulas assume the k trials are **independent**; if your sampling is correlated (same seed, cached prefixes, temperature 0), neither estimate holds.

**Sources:**
- https://github.com/openai/human-eval/blob/master/human_eval/evaluation.py
- https://leehanchung.github.io/blogs/2025/09/08/pass-at-k/
- https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- https://www.philschmid.de/agents-pass-at-k-pass-power-k
- https://sierra.ai/blog/tau-bench-shaping-development-evaluation-agents

---

### Code-based assertions / unit tests for LLM output

**When to use:** When error analysis surfaces failure modes that a few lines of deterministic code can catch (unsent emails, unsubstituted `[placeholders]`, malformed JSON, out-of-range values, broken DB state). Reach for these *before* an LLM judge — they are nearly free to write, free to run, and have zero grader-drift.

**Pattern:** Every failure you observe during error analysis becomes a cheap, deterministic assertion that runs on every trace in CI. Hamel's cost hierarchy: simple assertions and reference-based checks are cheap to build and maintain, whereas an LLM-as-judge needs 100+ labeled examples, weekly maintenance, and cross-role coordination — so "only build expensive evaluators for problems you'll iterate on repeatedly," and "you might not even need an LLM judge for some errors (and use a code-based assertion instead)." Keep them binary (pass/fail), since binary decisions provide clarity that complex scales obscure. Fix the obvious gaps first, then assert that they stay fixed.

**Code:** Plain `pytest` assertions derived from observed failure modes (reconstructed in the spirit of Hamel's guidance — not copied verbatim, but each check maps to a documented failure mode):

```python
import json, re, pytest

PLACEHOLDER = re.compile(r"\[(?:name|first_name|property|address|date|tour_time)\]", re.I)

def test_no_unsubstituted_placeholders(agent_output):
    # ReChat/NurtureBoss-style: template vars must be filled before sending
    assert not PLACEHOLDER.search(agent_output), f"Leaked placeholder: {agent_output!r}"

def test_email_was_actually_sent(trace):
    # Failure mode: agent says "I've sent the email" but no send tool fired
    if "i've sent" in trace.final_response.lower():
        assert any(c.tool == "send_email" and c.status == "ok" for c in trace.tool_calls)

def test_output_is_valid_json_schema(agent_output):
    data = json.loads(agent_output)              # raises on malformed JSON
    assert {"latitude", "longitude"} <= data.keys()
    assert -90 <= data["latitude"] <= 90
    assert -180 <= data["longitude"] <= 180

def test_appointment_persisted_to_db(trace, db):
    # tau-bench-style DB-diff: assert real-world state changed, not just the chat text
    if trace.intent == "book_tour":
        assert db.appointments.exists(user=trace.user_id, status="confirmed")
```

The same checks expressed declaratively in **promptfoo** (`promptfooconfig.yaml`), run with `promptfoo eval` in CI:

```yaml
tests:
  - vars: { query: "Schedule a tour two weeks from now" }
    assert:
      - type: not-contains
        value: "["                 # cheap placeholder guard
      - type: is-json
        value:
          type: object
          required: [appointment_date, status]
      - type: python
        value: file://assert_date.py   # def get_assert(output, context): -> bool|float|dict
```

A promptfoo `python` assertion returns a bool, a float, or a `GradingResult` dict, e.g. `return {'pass': True, 'score': 0.6, 'reason': 'Looks good to me'}`. The equivalent in **deepeval** is a `pytest`-native test run with `deepeval test run test_file.py`:

```python
from deepeval import assert_test
from deepeval.test_case import LLMTestCase
# combine deterministic metrics (regex/JSON/custom BaseMetric) with assert_test(...)
```

**Worked example:** NurtureBoss (apartment-leasing chatbot), from Hamel's field guide. Error analysis over a dataframe of conversation traces showed the assistant was "struggling with date handling — failing 66% of the time when users said things like 'let's schedule a tour two weeks from now.'" Just three issue categories accounted for over 60% of all problems (conversation-flow, human-handoff, and rescheduling/date-handling). They wrote specific tests to catch these issues; date-handling success rose from 33% to 95%. The durable, deterministic version of that fix is an assertion: parse the relative date the agent resolved and check it equals the expected calendar date — a code check, no LLM judge required. (Source: hamel.dev field guide.)

**Action items:**
- Do error analysis on real traces first; cluster failures and label each one binary pass/fail.
- For every cluster, ask "can a regex / JSON parse / DB query catch this?" — if yes, write the assertion instead of an LLM judge.
- Assert on *world state*, not just text: did `send_email` actually fire? did the row get written? (trace/tool-call and DB-diff checks).
- Add a placeholder/template-leak guard (`[name]`, `[property]`, etc.) and a JSON-schema/format validator as standing checks.
- Wire `pytest` / `promptfoo eval` / `deepeval test run` into CI so the suite runs on every PR.
- Reserve LLM judges for the residual subjective failures that survive after these cheap checks pass.

**Pitfalls:**
- Don't skip error analysis and invent hypothetical assertions — assert against failures you actually observed.
- Checking the chat text says "done" is not the same as verifying the side effect happened; assert the underlying state.
- Over-strict string/regex matches cause false failures; scope them to the specific defect and prefer structural/semantic checks where possible.

**Sources:**
- https://hamel.dev/blog/posts/field-guide/ (NurtureBoss error analysis, 33%→95%, three failure clusters; "you might not even need an LLM judge … use a code-based assertion instead")
- https://hamel.dev/blog/posts/evals-faq/ (cost hierarchy; "only build expensive evaluators for problems you'll iterate on repeatedly")
- https://hamel.dev/blog/posts/llm-judge/ (binary pass/fail; assertions as part of the eval toolkit)
- https://www.promptfoo.dev/docs/configuration/expected-outputs/deterministic/ (deterministic assertion types: contains, regex, is-json, python, etc.)
- https://www.promptfoo.dev/docs/configuration/expected-outputs/python/ (`get_assert` signature and `GradingResult` return)
- https://deepeval.com/docs/getting-started (`assert_test`, `LLMTestCase`, `deepeval test run`)

---

### Error analysis: open → axial coding → prioritize

**When to use:** When you have a running agent but no idea what's actually breaking, or you're tempted to reach for generic metrics (helpfulness, coherence) before you've looked at a single trace. This is the first thing to do before building any eval.

**Pattern:** Sample 20–100 real traces, have one domain expert write free-text critiques of the first thing that goes wrong in each (open codes). Use an LLM to cluster those notes into a taxonomy of failure modes (axial codes), then count frequency and weight by severity/business value to prioritize. Build one narrow, binary, few-shot-grounded evaluator per top failure mode — not a generic metric suite. This is a flywheel: the open-code notes become the few-shot examples for the judges you build next.

**Code:** Reconstructed from the Iusztin/Hamel workflow (not copied verbatim — the sources show spreadsheets and prose, not a single script). Faithful to the described loop.

```python
import pandas as pd
from collections import Counter

# 1. SAMPLE — 20–100 real traces. Stratify by user/feature, or pull outliers.
traces = load_production_traces(n=50, strategy="stratified")  # group by query type

# 2. OPEN CODING — ONE domain expert annotates the FIRST/most-upstream failure.
#    Free text, informal. These notes later become few-shot examples for judges.
#    e.g. "Replied to phishing link", "Leaked ARR to external contact",
#         "No reply to urgent CEO request", "Mocked colleague's achievement"
df = pd.DataFrame(traces)
df["open_code"] = ""   # expert fills this column by hand, one row per trace

# 3. AXIAL CODING — LLM groups open codes into a taxonomy; human reviews/refines.
TAXONOMY_PROMPT = """Here are free-text failure notes from agent traces.
Group them into 4-8 specific, actionable failure categories.
Return JSON: {note_text: category_name}. Notes:\n{notes}"""

labels = llm_cluster(TAXONOMY_PROMPT.format(notes="\n".join(df.open_code)))
df["axial_code"] = df.open_code.map(labels)

# 4. PRIORITIZE — frequency × severity × business value.
freq = Counter(df.axial_code)                       # pivot-table style count
severity = {"Information Leaks": 5, "Tone Issues": 2, ...}  # expert-assigned
priority = {cat: freq[cat] * severity.get(cat, 1) for cat in freq}
top = sorted(priority, key=priority.get, reverse=True)[:5]

# 5. BUILD ONE SPECIALIZED, BINARY EVAL per top failure mode (few-shot from notes).
def info_disclosure_judge(trace) -> bool:  # pass/fail, not 1-5
    prompt = f"""Did the agent disclose confidential company info to an
    external/unverified contact? Answer PASS or FAIL.
    Examples of FAIL:\n{few_shot_from(df, 'Information Leaks')}
    Trace:\n{trace}"""
    return llm_grade(prompt) == "PASS"
```

**Worked example:** Iusztin's email-assistant case (decodingai). Open codes from failed traces included "Replied to phishing link," "Leaked ARR to external contact," and "No reply to urgent CEO request." An LLM clustered these into axial categories with counts — *Tone & Professionalism Issues* (18), *Security Awareness Failures* (14), *Information Leaks* (10), *Missing/No Response* (9). The team then built two narrow binary judges for the top modes: a Phishing/Social-Engineering judge ("Did the agent reply to a message showing signs of phishing or social engineering?") and an Information-Disclosure judge ("Did the agent disclose confidential company information to an external contact?"). Hamel's NurtureBoss apartment-leasing example is the canonical companion: domain expert (the founder) wrote open notes in a spreadsheet, an LLM built the failure taxonomy, and a pivot table surfaced that date/rescheduling handling failed 66% of the time — a single cluster that drove the highest-ROI fix (66% → 95% after building a targeted eval and fixing the prompt).

**Action items:**
- Pull 20–50 real traces today (stratify by feature/user type, or grab outliers by length/latency); 50–100 for a mature system.
- Appoint ONE domain expert (a "benevolent dictator," not a committee) to write free-text notes — only the *first/most-upstream* failure per trace.
- Feed the notes to an LLM to draft a 4–8 category taxonomy, then hand-review and tighten the categories.
- Build a frequency × severity (× business value) table; pick the top 4–7 modes.
- Write one binary pass/fail judge per top mode, seeded with few-shot examples lifted straight from your open-code notes.
- Re-run the loop periodically; the same judges become production monitors with alerts on score drops.

**Pitfalls:**
- Don't start from generic metrics or a preset 1–5 scale — "look at your data" first; binary forces a clear judgment where a 3-vs-4 does not.
- Don't try to catch every error in a trace; logging the most-upstream failure keeps clusters clean (downstream errors are usually symptoms).
- Beware criteria drift (Shankar et al.): grading the outputs is what *teaches* you the real criteria, so expect the taxonomy and judges to evolve as you look at more data — don't freeze them too early.

**Sources:**
- https://hamel.dev/blog/posts/field-guide/
- https://www.decodingai.com/p/build-an-ai-evals-dataset-with-error-analysis
- https://arxiv.org/abs/2404.12272

---

### Trajectory & tool-use evaluation

**When to use:** When you need to grade *how* an agent solved a task, not just the final answer — i.e., which tools it called, in what order, with what arguments. Reach for this any time tool selection or call sequence is part of correctness (multi-step API/DB workflows, ReAct loops, web agents).

**Pattern:** There are two complementary graders. (1) **Deterministic trajectory match** compares the agent's tool-call sequence against a reference trajectory using a configurable strictness (`strict` = same calls, same order; `unordered`; `subset`; `superset`) plus an args-match mode. It's cheap, fast, and reproducible — but it only credits the *one* path you wrote down. (2) **LLM-judge-of-trajectory** reads the whole message log and rates whether the steps were reasonable toward the goal, which credits valid alternative paths the reference didn't anticipate. Use deterministic match in CI for known-narrow workflows; layer an LLM judge (or a state-based check, à la tau-bench) on top when multiple valid solutions exist, because rule-based grading systematically *under-reports* success.

**Code:**
```python
# pip install agentevals openevals
# Reconstructed from the langchain-ai/agentevals README; faithful to the public API.
import json
from agentevals.trajectory.match import create_trajectory_match_evaluator
from agentevals.trajectory.llm import (
    create_trajectory_llm_as_judge,
    TRAJECTORY_ACCURACY_PROMPT,
)

# OpenAI-style messages: tool calls live in assistant.tool_calls[].function
outputs = [
    {"role": "user", "content": "What is the weather in SF?"},
    {"role": "assistant", "content": "", "tool_calls": [
        {"function": {"name": "get_weather",
                      "arguments": json.dumps({"city": "SF"})}}]},
    {"role": "tool", "content": "It's 80 degrees and sunny in SF."},
    {"role": "assistant", "content": "The weather in SF is 80 degrees and sunny."},
]
reference_outputs = [...]  # the gold trajectory, same shape

# (1) Deterministic match — strict order + exact args.
#     Modes: "strict" | "unordered" | "subset" | "superset"
#     tool_args_match_mode: "exact" | "ignore" | "subset" | "superset"
match = create_trajectory_match_evaluator(
    trajectory_match_mode="strict",
    tool_args_match_mode="exact",
    # only require the "city" arg to match on get_weather; ignore the rest
    tool_args_match_overrides={"get_weather": ("city",)},
)
print(match(outputs=outputs, reference_outputs=reference_outputs))
# -> {'key': 'trajectory_strict_match', 'score': True/False, 'comment': None}

# (2) LLM-judge-of-trajectory — credits valid alternative paths; no reference needed.
judge = create_trajectory_llm_as_judge(
    prompt=TRAJECTORY_ACCURACY_PROMPT,
    model="openai:o3-mini",
)
print(judge(outputs=outputs))
# -> {'key': 'trajectory_accuracy', 'score': True, 'comment': '...reasoning...'}
```

For the state-based alternative (tau-bench), grade by **DB diff** instead of trajectory shape — replay the gold actions on a fresh DB, hash the result, and compare:
```python
# Reconstructed from sierra-research/tau-bench Env.calculate_reward
self.data = self.data_load_func()                 # fresh DB
for action in self.task.actions:                  # replay gold actions
    if action.name not in self.terminate_tools:
        self.step(action)
gt_data_hash = self.get_data_hash()               # consistent_hash(to_hashable(self.data))
reward = 1.0 if self.get_data_hash() == gt_data_hash else 0.0
# plus an output check: each required output string must appear in a RESPOND action
```

**Worked example:** *tau-bench (retail/airline)* grades a flight-booking/order task not by the agent's tool order but by **final database state**: it replays the canonical action list on a clean copy of the DB, takes `consistent_hash(to_hashable(self.data))`, and sets reward to 0 unless the agent's DB hash matches — so any sequence of write actions that lands the DB in the right state passes. *AgentRewardBench (WebArena)* shows the failure mode of pure rule-based grading: for "What's the closest national park to the largest city in Maine?" the agent answers "Acadia National Park" — correct — but the rule-based check requires an exact string match against the expected output and marks it failed. Across 1,302 expert-reviewed trajectories, rule-based grading scored **83.8% precision but only 55.9% recall (67.1 F1)** — i.e., it misses ~44% of genuinely successful runs (false negatives on valid alternative paths). The best LLM judge traded the other way (higher recall ~83%, but no judge exceeded 70% precision).

**Action items:**
- Pick the grader to the task: deterministic `strict`/`unordered` match for narrow, single-path workflows; LLM judge or DB-state diff when multiple valid paths exist.
- Use `tool_args_match_overrides` to grade only the load-bearing args (e.g. `city`), so cosmetic arg differences don't fail otherwise-correct calls.
- Loosen ordering deliberately: switch `strict` → `unordered`/`subset` for independent calls (parallel lookups) where order is irrelevant.
- When feasible, grade by *outcome state* (tau-bench DB hash) rather than trajectory shape — it's path-agnostic by construction.
- Treat a failing deterministic match as a *candidate* failure: route mismatches to an LLM judge or human spot-check before reporting, since rule-based recall is ~56%.
- Track precision AND recall of your grader against a small human-labeled set; don't assume a green CI score means the grader is right.

**Pitfalls:**
- Rule-based trajectory match under-reports success (~44% false-negative rate in AgentRewardBench) by penalizing valid alternative paths and non-exact outputs — don't ship it as your only grader for open-ended tasks.
- LLM-judge-of-trajectory has the opposite bias: it over-credits (no judge >70% precision, ~30% of failures wrongly passed), so it's not safe as a sole gate either.
- Exact-args + strict-order matching is brittle to harmless variation (arg ordering, retries, equivalent tool choices); scope args and ordering intentionally or you'll chase false alarms.

**Sources:**
- https://github.com/langchain-ai/agentevals
- https://github.com/sierra-research/tau-bench
- https://arxiv.org/abs/2504.08942
- https://arxiv.org/html/2504.08942v2

---

### Outcome / environment-state grading

**When to use:** When the agent *does things* (writes a row, sends a refund, schedules a meeting) rather than just *says things* — grade what actually changed in the world, not what the transcript claims. Essential whenever a task has many valid solution paths but one correct end-state.

**Pattern:** Snapshot the environment (DB / filesystem / API state) before and after the run, then diff the final state against a golden end-state instead of inspecting the transcript. A flight-booking agent can say "Your flight has been booked" while no reservation exists — the outcome is whether the row is in the SQL database. Crucially, check *both* directions: all expected changes happened AND no *unexpected* changes happened (collateral damage). Build the golden state by replaying the reference solution's actions on a fresh copy of the data, so any equally-valid path that lands on the same state still scores.

**Code:** Reconstruction faithful to tau-bench's `calculate_reward` (`tau_bench/envs/base.py`). It builds the golden state by replaying the task's reference actions on freshly-loaded data, then compares a recursive content hash of the whole DB; it also verifies required output strings. Reward is conjunctive (state diff AND outputs must pass).

```python
from hashlib import sha256

def to_hashable(x):
    # recursively make dicts/lists/sets order-independent and hashable
    if isinstance(x, dict):
        return tuple(sorted((k, to_hashable(v)) for k, v in x.items()))
    if isinstance(x, (list, tuple)):
        return tuple(to_hashable(v) for v in x)
    if isinstance(x, set):
        return tuple(sorted(to_hashable(v) for v in x))
    return x

def consistent_hash(value) -> str:
    return sha256(str(value).encode("utf-8")).hexdigest()

def calculate_reward(env, task) -> float:
    reward = 1.0

    # 1) Final state the agent left behind
    data_hash = consistent_hash(to_hashable(env.data))

    # 2) Golden state: reload fresh data, replay the reference solution
    env.data = env.data_load_func()
    for action in task.actions:
        if action.name not in env.terminate_tools:
            env.step(action)
    gt_data_hash = consistent_hash(to_hashable(env.data))

    # 3) DB-state diff: any divergence -> hard zero
    if data_hash != gt_data_hash:
        reward = 0.0

    # 4) Required outputs must also appear in the agent's responses
    for output in task.outputs:
        seen = any(
            output.lower() in a.kwargs["content"].lower().replace(",", "")
            for a in env.actions
            if a.name == "respond"
        )
        if not seen:
            reward = 0.0
    return reward
```

For a finer ladder (AppWorld style), replace the single hash with per-assertion unit tests and report the fraction passed:

```python
# AppWorld-style state assertions (reconstruction). ~8 checks/task avg, up to 22.
def grade_task(db_before, db_after):
    checks = []
    # expected change happened
    checks.append(("venmo_paid",
                   db_after.venmo.txn(to="roommate", amount=12.50) is not None))
    # collateral-damage guard: nothing ELSE moved
    checks.append(("no_extra_payments",
                   db_after.venmo.txns_since(db_before) ==
                   [t for t in db_after.venmo.txns_since(db_before) if t.amount == 12.50]))
    checks.append(("balance_unchanged_elsewhere",
                   db_after.bank.balance == db_before.bank.balance - 12.50))
    passed = sum(ok for _, ok in checks)
    tgc = passed == len(checks)          # Task Goal Completion: ALL pass
    return {"tgc": tgc, "partial": passed / len(checks),
            "failed": [n for n, ok in checks if not ok]}
```

**Worked example:** tau-bench (τ-bench / τ²-bench, Sierra) grades a retail/airline task by reloading the seed database, replaying the human-authored reference `actions`, and SHA-256-hashing the entire data store; the agent passes only if its final hash equals the golden hash *and* every required string (e.g. a quoted price or confirmation id) appears in its responses — so a "flight booked" claim with no DB write scores 0. AppWorld (ACL 2024, `2024.acl-long.850`) compiles each task into a suite of state-based unit tests (avg 8, max 22) that snapshot the DB before/after and assert every expected change occurred and *no unexpected one did* — e.g. flagging an agent that initiates a return nobody asked for as collateral damage. It reports **Task Goal Completion** (all of a task's tests pass) and the stricter **Scenario Goal Completion** (every task in a related scenario passes). Anthropic's *Demystifying evals for AI agents* frames the principle: the transcript is what the agent said; the outcome is "whether a reservation exists in the environment's SQL database," graded by a `state_check` grader.

**Action items:**
- Snapshot environment state immediately before and after each trial; never grade from the transcript text alone.
- Generate the golden end-state by *running* the reference solution on a fresh copy of the seed data, so alternative valid paths still pass.
- Add explicit collateral-damage assertions: diff the *whole* relevant scope and assert nothing changed outside the expected set.
- Make trials isolated — start every run from a clean DB/filesystem so leftover state can't leak between cases.
- Offer a partial-credit ladder (fraction of unit tests passed) for analysis, but keep a strict all-or-nothing pass bar (TGC/SGC) for the headline metric.
- Combine state checks with required-output checks when the task also demands the agent *report* a value back to the user.

**Pitfalls:**
- Hashing the entire store is brittle to benign noise (timestamps, autoincrement ids, run-order). Normalize/exclude volatile fields before hashing, or assert on specific rows.
- Only checking "did the expected thing happen" misses side effects — without negative/collateral-damage assertions an agent can pass while wrecking unrelated data.
- A single golden state via reference-action replay can under-credit a genuinely valid alternate path that lands in an equivalent-but-not-identical state; prefer targeted assertions when multiple correct end-states exist.

**Sources:**
- https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- https://aclanthology.org/2024.acl-long.850/ (AppWorld, ACL 2024; arXiv https://arxiv.org/abs/2407.18901)
- https://github.com/sierra-research/tau-bench (reward logic: `tau_bench/envs/base.py`)

---

### CI gating & regression datasets

**When to use:** When you want every fixed bug to stay fixed and every deploy to be blocked automatically if eval scores regress. Adopt this once you have more than a handful of test cases and a real CI pipeline (PRs, merges, deploys).

**Pattern:** Keep eval cases as version-controlled, git-diffable config/data files so adding a regression case is a reviewable code change. Each time you fix a bug, add the failing input as a new case with its expected behavior — the dataset grows monotonically and never re-fails silently. Run the suite in CI on every PR, compute a pass-rate or per-scorer score, and exit non-zero when it drops below a threshold so a regressing change cannot merge or deploy. Split *offline* evals (curated golden/regression set, run in CI as a gate) from *online* evals (production traffic sampled and scored continuously for monitoring), since they answer different questions.

**Code:** Two faithful representative forms from the canonical sources.

promptfoo — git-diffable config + CI gate (config reconstructed from the configuration guide; CI block from the CI/CD docs):

```yaml
# promptfooconfig.yaml  — checked into git; PRs diff this file
prompts:
  - file://prompts/agent_system_prompt.txt
providers:
  - openai:gpt-5-mini
defaultTest:
  assert:
    - type: llm-rubric
      value: "does not describe self as an AI, model, or chatbot"
tests:
  # regression case: ticket #412 — agent used to hallucinate a refund
  - vars:
      input: "Cancel my order and refund $0"
    assert:
      - type: not-contains
        value: "refund processed"
      - type: javascript
        value: "output.toLowerCase().includes('no charge to refund')"
  - vars:
      input: "What's the capital of France?"
    assert:
      - type: contains
        value: "Paris"
```

```yaml
# .github/workflows/eval.yml — gate on every PR touching prompts
name: LLM Eval
on:
  pull_request:
    paths: ['prompts/**', 'promptfooconfig.yaml']
jobs:
  evaluate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '22' }
      - run: npx promptfoo@latest eval -c promptfooconfig.yaml -o results.json
      - name: Gate on pass rate
        run: |
          PASS_RATE=$(jq '.results.stats.successes / (.results.stats.successes + .results.stats.failures) * 100' results.json)
          if (( $(echo "$PASS_RATE < 95" | bc -l) )); then
            echo "Quality gate failed: ${PASS_RATE}% < 95%"; exit 1
          fi
```

MLflow — offline regression suite as code (verbatim from the genai eval guide), each fixed bug appended to `dataset`:

```python
import mlflow
from mlflow.genai.scorers import Correctness, Guidelines

dataset = [
    {"inputs": {"question": "Can MLflow manage prompts?"},
     "expectations": {"expected_response": "Yes!"}},
    # regression case appended after bug fix:
    {"inputs": {"question": "Can MLflow create a taco for my lunch?"},
     "expectations": {"expected_response": "No, unfortunately, MLflow is not a taco maker."}},
]

def predict_fn(question: str) -> str:
    ...  # your agent

results = mlflow.genai.evaluate(
    data=dataset,
    predict_fn=predict_fn,
    scorers=[
        Correctness(),
        Guidelines(name="is_english", guidelines="The answer must be in English"),
    ],
)
# In CI: read results.metrics and exit non-zero if a scorer drops below threshold.
```

Braintrust — `Eval()` defined in a `.eval.ts` file run by `bt eval` in CI; data/task/scores live in git, and the platform compares each run against the prior experiment to surface regressions (verbatim shape from the eval SDK guide):

```typescript
import { Eval } from "braintrust";
import { ExactMatch } from "autoevals";

Eval("Project Name", {
  data: [{ input: "...", expected: "..." }],   // golden + regression cases, version-controlled
  task: async (input) => { /* call your agent */ return output; },
  scores: [ExactMatch],
});
// CI: `bt eval agent.eval.ts` → records an experiment; diff vs. baseline catches regressions.
```

**Worked example:** The MLflow genai guide ships a tiny regression set where the *negative* case — "Can MLflow create a taco for my lunch?" expecting "No, unfortunately, MLflow is not a taco maker." — is exactly the shape of a captured bug: a known bad/edge input pinned with its correct expected behavior, scored by `Correctness()` plus a `Guidelines(name="is_english", ...)` LLM scorer. promptfoo's CI/CD docs give the matching gate: parse `results.json` with `jq` for the success/failure counts and `exit 1` when pass rate falls under 95%, blocking the merge. (Sources: MLflow genai eval guide; promptfoo CI/CD docs.)

**Action items:**
- Store eval cases as flat files in the repo (`promptfooconfig.yaml`, a JSONL dataset, or a `*.eval.ts`) so adding a case is a reviewable diff, not a console click.
- Make a rule: every bug fix PR must add the triggering input as a new regression case with its expected/asserted behavior in the same PR.
- Wire `promptfoo eval`, `bt eval`, or `mlflow.genai.evaluate` into CI on PRs that touch prompts/agent code; emit machine-readable output (`-o results.json`, JUnit XML, or `results.metrics`).
- Compute a pass rate or per-scorer score and `exit 1` below threshold (e.g. < 95%) so deploys are gated, not advisory.
- Keep two suites: an offline golden/regression set as the CI gate, and online scoring on sampled production traffic for monitoring/drift.
- Tag CI runs with git SHA and run-id (`promptfoo eval --tag git.sha="$CI_COMMIT_SHA"`) to trace any regression back to a commit.

**Pitfalls:**
- A single global pass-rate threshold can hide a critical regression averaged out by many easy cases — also assert per-case (or weight safety-critical cases) so one fixed bug re-breaking fails the build.
- LLM-judge scorers (`llm-rubric`, `Correctness`, `Guidelines`) are non-deterministic; flaky thresholds cause spurious CI failures — pin judge model/temperature, set margins, and prefer deterministic asserts (`equals`, `contains`, `is-json`, SQL/DB state checks) for hard regression gates.
- Don't gate on the same data you tune prompts against — a regression set you keep editing to pass stops catching regressions.

**Sources:**
- https://www.braintrust.dev/docs/start/eval-sdk
- https://www.promptfoo.dev/docs/integrations/ci-cd/
- https://www.promptfoo.dev/docs/configuration/guide/
- https://mlflow.org/docs/latest/genai/eval-monitor/

---

### Verifiable reward / RL-environment rubric

**When to use:** When you can express "did the agent succeed?" as a programmatic check over the final state (test results, DB diff, parsed answer) rather than a vibe — and you want the *same* artifact to serve as both your eval and your RL reward signal. Reach for an LLM-judge rubric (RULER) only when the goal is fuzzy and you can't write a deterministic verifier.

**Pattern:** An evaluation IS an RL environment: `Environment = dataset (tasks) + harness (the rollout/tool loop) + rubric (the scorer)`. The rubric is a set of weighted functions that each take a completion and return a float (typically 0.0–1.0); their weighted sum is the reward. A *verifiable* reward is a rubric function that runs real code against ground truth (unit tests, a SQL state check, a τ-bench DB diff) instead of asking a model. When no labels exist, RULER swaps the deterministic verifier for a *relative* LLM judge that ranks N trajectories against each other in [0,1] — relying on GRPO's within-group normalization, so only the ranking has to be right, not absolute calibration. Score an eval set today; flip the same rubric into a training reward tomorrow with no rewrite.

**Code:**
```python
# Verifiers (PrimeIntellect): the eval and the RL env are the same object.
# Faithful to the documented API; trimmed for brevity.
import verifiers as vf

async def correct_answer(completion, answer) -> float:
    # Deterministic, programmatic verifier — no model in the loop.
    completion_ans = completion[-1]["content"]
    return 1.0 if completion_ans == answer else 0.0

def load_environment(dataset_name: str = "gsm8k") -> vf.Environment:
    dataset = vf.load_example_dataset(dataset_name)          # tasks
    rubric  = vf.Rubric(funcs=[correct_answer])              # reward (weighted funcs)
    return vf.SingleTurnEnv(dataset=dataset, rubric=rubric)  # harness
# Same env: env.evaluate(model) for scoring, or feed rollouts to a GRPO trainer.
```

```python
# RULER (ART): label-free reward — drop-in where a deterministic verifier doesn't exist.
# Verbatim from art.openpipe.ai/fundamentals/ruler.
import art
from art.rewards import ruler_score_group

groups = await art.gather_trajectory_groups(
    (
        art.TrajectoryGroup(
            rollout(model, scenario) for _ in range(4)   # 4 trajectories / scenario
        )
        for scenario in batch_scenarios
    ),
    after_each=lambda group: ruler_score_group(
        group,
        "openai/o3",                 # judge model ranks the 4 relative to each other
        swallow_exceptions=True,     # None on error -> group filtered out
    ),
)
result = await backend.train(model, groups)
# Custom rubric (otherwise the default works for most tasks):
#   ruler_score_group(group, "openai/o3", rubric="- Reward concise answers\n- Penalize emojis")
```

**Worked example:** SWE-bench's `grading.py` is a pure programmatic verifier. Each task ships two test sets: **FAIL_TO_PASS** (tests broken before the patch that must now pass — resolution) and **PASS_TO_PASS** (tests already passing that must stay green — no regressions). `get_resolution_status()` applies the rule: if fail-to-pass rate = 1 **and** pass-to-pass rate = 1 → `FULL`; if 0 < fail-to-pass < 1 **and** pass-to-pass = 1 → `PARTIAL`; otherwise → `NO`. "Resolved" requires *perfect* PASS_TO_PASS — a patch that fixes the bug but breaks an existing test scores NO. This binary, label-free-once-the-tests-exist check is exactly the kind of `correct_answer`-style rubric function you'd plug into a Verifiers `Rubric`. (Source: SWE-bench `swebench/harness/grading.py`.) For the no-clean-verifier case, RULER's own doc shows the relative mechanism: of 4 trajectories asked for a computer joke, one "fails to deliver a joke about computers, instead providing an unrelated fact" → 0.1, while a real joke → 0.9 — ranked against siblings, no gold label. (Source: art.openpipe.ai/fundamentals/ruler.)

**Action items:**
- Write your eval scorer as a function `(completion, answer) -> float`, not a one-off script — that single shape is reusable as an RL reward.
- For code/tool tasks, define a FAIL_TO_PASS-style set (proves the fix) **and** a PASS_TO_PASS-style set (catches regressions); require the regression set to be 100% green for "resolved."
- Bundle the three pieces explicitly: dataset of tasks, the harness/rollout loop, and the rubric — store them together so the eval and any future training env stay in sync.
- Use weighted multi-function rubrics (`vf.Rubric(funcs=[...])`) to combine partial-credit signals (format, intermediate state, final answer) rather than one all-or-nothing check.
- Where ground truth is unwriteable, run RULER over N≈4 sibling trajectories per scenario and use the relative [0,1] ranks; keep N small and dedup common prefixes.
- Log each score with its justification (RULER returns one per trajectory) so failures are debuggable, not just numeric.

**Pitfalls:**
- Relative LLM-judge rewards (RULER) are only valid *within a group*; the absolute numbers don't transfer across scenarios, so don't average them as if they were calibrated accuracies.
- A verifier that checks only the final answer (or only FAIL_TO_PASS) misses regressions and reward-hacking — pair it with a maintenance/PASS_TO_PASS check and prefer state diffs (DB, files) over string matches.
- Reusing an eval as an RL reward exposes every verifier loophole to gradient pressure: any gap the metric ignores will be exploited, so harden the rubric before training on it.

**Sources:**
- https://github.com/PrimeIntellect-ai/verifiers
- https://art.openpipe.ai/fundamentals/ruler
- https://github.com/SWE-bench/SWE-bench/blob/main/swebench/harness/grading.py

---

### Synthetic test-data / eval-set generation
**When to use:** You have a new agent/feature and no production traffic (or too little) to build an eval set, and you need realistic, diverse inputs that exercise every feature, tool, and edge case before you ship.

**Pattern:** Don't wait for users — have an LLM role-play them. Define *dimensions* of variation (features/tools × scenarios × personas), take the cartesian product to get structured tuples, then ask an LLM to turn each tuple into one realistic natural-language query. Generate queries **one at a time** (not "give me 50") to avoid mode collapse, and **ground** each query in real system state (actual listing IDs, real DB rows, real tool schemas) so the input genuinely triggers the scenario you intended. Pair this with assertion-based checks per scenario (e.g. `len(results)==0` for the "no matches" case). For RAG, the dual approach (ARES) is the reverse: sample real documents and generate a question each could answer, producing query–document–answer triples to train and statistically calibrate a judge.

**Code:** Reconstructed from Hamel Husain's "dimensions" framework (the field guide gives the dimension lists and `generate_search_query` shape; the loop/grounding below is a faithful reconstruction, not a verbatim copy).
```python
import itertools, json, random
from openai import OpenAI
client = OpenAI()

# 1. Define dimensions = the axes of variation in real user behavior
features  = ["property_search", "market_analysis", "scheduling", "follow_up"]
scenarios = ["exact_match", "multiple_matches", "no_matches", "invalid_criteria"]
personas  = ["first_time_buyer", "investor", "luxury_client", "relocating_family"]

# 2. Real system state to GROUND generation (avoid fictional, untriggerable inputs)
real_listings = load_listings_from_db()   # actual IDs, prices, neighborhoods

def generate_query(feature, scenario, persona, listings):
    # Generate ONE query per call -> diversity, no bulk repetition / mode collapse
    prompt = f"""You are a {persona.replace('_',' ')} using a real-estate assistant.
Write ONE realistic message that exercises the '{feature}' feature in the
'{scenario}' case. Ground it in this real inventory so it is actually triggerable:
{json.dumps(random.sample(listings, 5))}
For 'no_matches', craft criteria that truly match NOTHING in the inventory.
Return only the user's message."""
    r = client.chat.completions.create(
        model="gpt-4o", temperature=0.9,
        messages=[{"role": "user", "content": prompt}])
    return r.choices[0].message.content.strip()

# 3. Cartesian product of dimensions -> structured, evenly-distributed coverage
dataset = []
for feature, scenario, persona in itertools.product(features, scenarios, personas):
    q = generate_query(feature, scenario, persona, real_listings)
    dataset.append({"feature": feature, "scenario": scenario,
                    "persona": persona, "query": q})

# 4. Bind each scenario to a programmatic assertion (state-based, not vibes)
ASSERTIONS = {
    "exact_match":      lambda res: len(res) == 1,
    "multiple_matches": lambda res: len(res) > 1,
    "no_matches":       lambda res: len(res) == 0,
}
# Verify the SYNTHETIC input really triggers its scenario before trusting it:
for row in dataset:
    res = run_agent(row["query"])
    check = ASSERTIONS.get(row["scenario"])
    row["valid_trigger"] = check(res) if check else None  # drop rows that don't trigger
```

**Worked example:** *NurtureBoss* (apartment-industry AI assistant, via Hamel Husain). With no eval set, they generated synthetic instructions a real-estate agent would give the assistant ("Create a contact for John Smith (johndoe@apple.com), phone 123-456-7890") and paired actions for assertion checks (create → then "What's John Smith's email?"). The listing-finder used scenario-bound assertions: single match → `len(listing_array)==1`, multiple → `>1`, none → `==0`. Hamel's key line: *"You don't need to wait for production data... You can make educated guesses about how users will use your product and generate synthetic data."* For RAG, *ARES* inverts this: it sampled ~6,189 documents from the corpus and used few-shot prompts to generate synthetic query–answer pairs (`synthetic_queries_1.tsv`), trained relevance/faithfulness classifiers on them, then used Prediction-Powered Inference (PPI) over a small human-labeled set to give statistically confident scores. *EvalGen* (Shankar et al., "Who Validates the Validators") shows the limit: it auto-generates candidate assertions/judge prompts but requires the human to grade a sample, because of *criteria drift* — "users need criteria to grade outputs, but grading outputs helps users define criteria."

**Action items:**
- List your agent's features/tools, then for each enumerate scenarios (happy path, empty, ambiguous, invalid, multi-step) and 3–4 personas; these are your dimensions.
- Take the cartesian product and generate **one query per tuple** at temperature ~0.8–1.0 — never ask for "50 queries" in a single call.
- Ground every prompt in real system state (real IDs/rows/schemas) so inputs are actually triggerable, not fictional.
- Attach a programmatic assertion to each scenario and **run the synthetic input** to confirm it triggers the intended scenario; discard ones that don't.
- Start with ~tens-to-100 grounded cases per feature; do error analysis on the failures (open-code notes → cluster into a failure taxonomy) before scaling the set.
- Reuse the same generation pipeline later to curate fine-tuning data once you have signal.

**Pitfalls:**
- **Mode collapse / unrealistic distribution:** bulk "generate N at once" prompts produce near-duplicates and a distribution nothing like real users — generate one-at-a-time across explicit dimensions instead.
- **Ungrounded inputs:** queries referencing fake IDs or impossible criteria pass through the agent without ever exercising the target scenario; always verify the assertion fires.
- **Trusting an unvalidated judge:** synthetic data can train an LLM-judge, but per EvalGen you must align it to a sample of human grades — criteria drift means you can't define good criteria without looking at real outputs first.

**Sources:**
- https://hamel.dev/blog/posts/field-guide/
- https://hamel.dev/blog/posts/evals/
- https://github.com/stanford-futuredata/ARES
- https://arxiv.org/abs/2404.12272

---

### Contamination-resistant eval design

**When to use:** Whenever your benchmark is built from public data (GitHub, LeetCode, web text) that may already be in a model's pretraining set, and you need a score that reflects reasoning rather than memorization. Essential for leaderboards comparing models with different training cutoffs.

**Pattern:** Stamp every task with a verifiable *release/creation date*, then score each model only on tasks dated *after* that model's training cutoff ("scrolling through time"). Keep the benchmark alive by continuously appending fresh tasks (LiveBench refreshes monthly; SWE-rebench runs an automated GitHub-mining pipeline) so memorization never catches up. Use objective ground-truth scoring (unit tests, exact-match answers) so the freshness signal isn't muddied by an LLM judge. To *quantify* contamination on a static benchmark you can't re-date, build a matched holdout (GSM1k-style) of new items with identical difficulty/answer statistics and measure the accuracy drop.

**Code:** Reconstructed (faithful to LiveCodeBench's "scrolling through time" and SWE-rebench's date filtering — not copied verbatim). The core move is a date filter keyed to each model's cutoff.

```python
from datetime import date

# Each task carries a verifiable timestamp (contest release date,
# or GitHub issue/PR creation date for SWE tasks).
# LiveCodeBench tags every problem with its contest release_date;
# SWE-rebench tracks issue creation + PR merge dates.
MODEL_CUTOFFS = {
    "gpt-4o":        date(2023, 11, 1),   # vendor-stated cutoff
    "deepseek-v3":   date(2024, 7, 1),
    "gpt-4.1":       date(2024, 6, 1),
}

def uncontaminated(tasks, model):
    """Keep only tasks released strictly AFTER the model's training cutoff."""
    cutoff = MODEL_CUTOFFS[model]
    return [t for t in tasks if t["release_date"] > cutoff]

def windowed_passrate(tasks, model, run_one, lo=None, hi=None):
    """Pass@1 over a [lo, hi) release-date window, post-cutoff only.
    Mirrors LiveCodeBench: compare models on identical time windows so
    none has seen the exact problem in training."""
    pool = uncontaminated(tasks, model)
    if lo: pool = [t for t in pool if t["release_date"] >= lo]
    if hi: pool = [t for t in pool if t["release_date"] <  hi]
    if not pool:
        raise ValueError("empty window — collect fresher tasks")
    passed = sum(run_one(model, t) == t["expected"] for t in pool)
    return passed / len(pool), len(pool)

# Contamination probe: same model, two adjacent windows.
# A large drop in the LATER window is a memorization red flag.
early, _ = windowed_passrate(tasks, "gpt-4.1", run_one,
                             lo=date(2025,1,1), hi=date(2025,2,1))
late,  _ = windowed_passrate(tasks, "gpt-4.1", run_one,
                             lo=date(2025,3,1), hi=date(2025,5,1))
print(f"contamination signal (early-late drop): {early - late:+.3f}")
```

For a static benchmark you can't re-date, the GSM1k matched-holdout estimator:

```python
# Build a NEW holdout with matched difficulty/answer distribution (human-authored,
# no LLM/synthetic generation). Contamination ~ accuracy gap.
gap = acc(model, GSM8k) - acc(model, GSM1k)   # >~5% => suspect overfit/leakage
```

**Worked example:** *LiveCodeBench* — DeepSeek's DS-Base-33B scored ~Pass@1 60 on LeetCode problems from May 2023 but ~Pass@1 0 on September 2023 problems (released just after its August 2023 data window), a near-total collapse that exposes memorization rather than coding skill; GPT-4o similarly drops on LeetCode problems released after its stated November 2023 cutoff. *SWE-rebench* — splitting fresh GitHub tasks into January 2025 vs March–April 2025 windows, GPT-4.1's resolved rate fell from 31.1% to 26.7% across the split while DeepSeek-V3 stayed flat, and their scores diverge on the older SWE-bench Verified — a contamination tell on the static benchmark. *GSM1k (Scale AI)* — a human-authored holdout matched to GSM8k showed accuracy drops up to ~13% (Phi-3 ~10%), with a model's GSM8k-generation probability correlating with its GSM8k→GSM1k gap (Spearman r²≈0.36), while Gemini/Claude dropped <5%.

**Action items:**
- Attach a verifiable, immutable `release_date` (or GitHub issue/PR creation date) to every task; never trust filenames — pull dates from the source platform.
- Look up each model's training cutoff and score it *only* on post-cutoff tasks; when comparing models, restrict everyone to the same date window.
- Stand up a refresh pipeline (monthly like LiveBench, or automated mining like SWE-rebench) so the post-cutoff pool stays non-empty as new models ship.
- Use objective ground-truth scoring (unit tests / exact-match), not an LLM judge, so freshness is the only thing moving the number.
- Run the two-window probe (early vs late post-release) per model; flag any model whose later-window score drops sharply.
- For un-redateable static benchmarks, build a small human-authored matched holdout and report the accuracy gap as your contamination estimate.

**Pitfalls:**
- A clean date filter still leaks if your refresh source itself was scraped into training (e.g., problems re-posted to forums); prefer freshly-created items over merely freshly-discovered ones.
- "Matched" holdouts must match difficulty *and* answer statistics — an easier or harder holdout makes the gap meaningless; GSM1k validated this with human solve rates and step counts.
- Vendor-stated cutoffs are approximate and sometimes optimistic; leave a safety margin past the stated date and don't treat a single window as definitive.

**Sources:**
- https://arxiv.org/abs/2403.07974 — LiveCodeBench (https://arxiv.org/html/2403.07974v2)
- https://github.com/LiveBench/LiveBench
- https://arxiv.org/abs/2505.20411 — SWE-rebench (https://arxiv.org/html/2505.20411)
- https://arxiv.org/html/2405.00332v1 — GSM1k (Scale AI); https://github.com/scaleapi/gsm1k_eval

# Research Papers

This directory contains research papers and resources on Large Language Models (LLMs), AI agents, code generation, and related topics (ethics, scaling, hallucinations, and automation).

## Overview

The collection includes: (1) **foundation models for code** (external references to key code-LLM papers); (2) **agent research** (external paper lists and surveys); (3) **107 PDFs** in `papers/`, organized into thematic subfolders — from classic AI foundations through contemporary agent and alignment research.

## Directory structure

```
papers/
├── ai-foundations/                # 5 — Turing, McCulloch–Pitts, Hebb, Perceptron, Dartmouth (1943–1956)
├── early-deep-learning/           # 12 — backprop, LSTM, LeNet, AlexNet, DQN, Word2Vec, attention, ResNet, AlphaGo (1986–2016)
├── foundation-models/             # 11 — Transformers, BERT, GPT, MoE, CLIP, scaling laws (2017–2022)
├── alignment-and-post-training/   # 3 — PPO, RLHF / InstructGPT, DPO
├── generative-models/             # 2 — GANs, diffusion models
├── agents-and-engineering/        # 26 — agents, harnesses, ReAct, context/memory, code evaluation, skill evolution
├── reliability-and-reasoning/     # 11 — CoT, process supervision, hallucinations, reasoning, LLM-as-judge
├── models-and-training/           # 17 — frontier reports, LoRA, Mixtral, world models, fine-tuning, DeepSeek, Kimi K3
├── open-models/                   # 8 — release gradient, societal impact, OLMo/Pythia, distillation; essays via [Nathan Lambert reading list](open-models/README.md#external-reading-link-only)
├── ethics-risks-and-society/      # 7 — risks, work, autonomy
└── perspectives-and-futures/      # 5 — long-term visions of AI, RSI roadmaps
```

## Papers by folder

### [ai-foundations/](ai-foundations/)

- **A Logical Calculus of the Ideas Immanent in Nervous Activity** (McCulloch & Pitts, 1943)
- **The Organization of Behavior** (Hebb, 1949)
- **Computing Machinery and Intelligence** (Turing, 1950)
- **A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence** (McCarthy et al., 1955)
- **The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain** (Rosenblatt, 1958)

### [early-deep-learning/](early-deep-learning/)

- **Learning representations by back-propagating errors** (Rumelhart, Hinton & Williams, *Nature*, 1986)
- **Long Short-Term Memory** (Hochreiter & Schmidhuber, 1997)
- **Gradient-based learning applied to document recognition** (LeNet, 1998)
- **A fast learning algorithm for deep belief nets** (Hinton et al., 2006)
- **ImageNet Classification with Deep Convolutional Neural Networks** (AlexNet, 2012)
- **Playing Atari with Deep Reinforcement Learning** (DQN workshop paper, 2013)
- **Efficient Estimation of Word Representations in Vector Space** (Word2Vec, 2013)
- **Sequence to Sequence Learning with Neural Networks** (Sutskever et al., 2014)
- **Neural Machine Translation by Jointly Learning to Align and Translate** (Bahdanau, Cho & Bengio, ICLR 2015) — additive attention; [arXiv:1409.0473](https://arxiv.org/abs/1409.0473)
- **Human-level control through deep reinforcement learning** (Mnih et al., *Nature*, 2015) — journal DQN; pairs with the 2013 Atari workshop paper in this folder
- **Deep Residual Learning for Image Recognition** (ResNet, 2015)
- **Mastering the game of Go with deep neural networks and tree search** (Silver et al. — AlphaGo, *Nature*, 2016)

### [foundation-models/](foundation-models/)

- **Attention Is All You Need** (Transformers, 2017)
- **Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer** (Shazeer et al., 2017)
- **BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding** (2018)
- **Improving Language Understanding by Generative Pre-Training** (GPT-1, 2018)
- **Language Models are Unsupervised Multitask Learners** (GPT-2, 2019)
- **Language Models are Few-Shot Learners** (GPT-3, 2020)
- **Scaling Laws for Neural Language Models** (2020)
- **Learning Transferable Visual Models From Natural Language Supervision** (CLIP, 2021)
- **Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity** (Fedus et al., 2021)
- **Training Compute-Optimal Large Language Models** (Chinchilla, 2022)
- **Understanding Transformers and Attention Mechanisms: An Introduction for Applied Mathematicians** — math-first primer on attention and Transformer architecture; pairs with [Attention Is All You Need](foundation-models/) and the notebooks in [research/llms-from-scratch/](../research/llms-from-scratch/).

Visual companion (architectures across the foundation-model era): Sebastian Raschka's [LLM Architecture Gallery](https://sebastianraschka.com/llm-architecture-gallery/) — source metadata at [rasbt/llm-architecture-gallery](https://github.com/rasbt/llm-architecture-gallery), indexed in [nice-projects/](../nice-projects/README.md#research--papers).

### [alignment-and-post-training/](alignment-and-post-training/)

- **Proximal Policy Optimization Algorithms** (Schulman et al., 2017) — the on-policy RL algorithm later used in RLHF; [arXiv:1707.06347](https://arxiv.org/abs/1707.06347)
- **Training language models to follow instructions with human feedback** (InstructGPT / RLHF, 2022)
- **Direct Preference Optimization: Your Language Model is Secretly a Reward Model** (DPO, 2023)

### [generative-models/](generative-models/)

- **Generative Adversarial Nets** (Goodfellow et al., 2014)
- **Denoising Diffusion Probabilistic Models** (2020)

### [agents-and-engineering/](agents-and-engineering/)

- **AI Agents vs. Agentic AI: A Conceptual Taxonomy, Applications and Challenges**
- **A Technical Taxonomy of LLM Agent Communication Protocols** (Sander et al., TU Munich) — five-dimension taxonomy of LLM agent protocols (counterparty, payload, state, discovery, schema flexibility); [arXiv:2606.19135](https://arxiv.org/abs/2606.19135) (2026.06).
- **Agent Harness Engineering: A Survey** — survey of agent harness design, tooling, and evaluation patterns for long-running LLM agents.
- **Agentic Auto-Scheduling: An Experimental Study of LLM-Guided Loop Optimization** (Merouani et al., PACT 2025) — ComPilot uses off-the-shelf LLMs in a compiler feedback loop for loop-nest optimization; [arXiv:2511.00592](https://arxiv.org/abs/2511.00592) (2025.11).
- **Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models**
- **Agentic Context Management: Solving Agent Memory and Cost by Treating Them as Lifecycle and Architecture Problems** — frames agent memory and token cost as lifecycle/architecture concerns rather than prompt tricks; pairs with [agentic-patterns.md](../cursor-claude-codex/references/agentic-patterns.md) (Context & Memory), *Everything is Context* in this folder, and [DeepSeek-V4.1-Flash](../models-and-training/DeepSeek-V4.1-Flash_%20Pushing%20the%20Limits%20of%20KV%20Cache%20Compression.pdf) (KV cache compression for input-heavy agent workloads).
- **Autodata: An agentic data scientist to create high quality synthetic data** (Kulikov et al., Meta) — agentic framework for iterative synthetic training and benchmark data creation with meta-optimized data-scientist agents (Agentic Self-Instruct); [arXiv:2606.25996](https://arxiv.org/abs/2606.25996) (2026.06).
- **Agents of Chaos**
- **Beyond Synthetic Benchmarks: Evaluating LLM Performance on Real-World Class-Level Code Generation**
- **[CodeMidas: Scaling Agentic Coding RL Environments from Code Itself](agents-and-engineering/CodeMidas_%20Scaling%20Agentic%20Coding%20RL%20Environments%20from%20Code%20Itself.pdf)** (Ye et al., Xiaomi / PKU / HKU) — agentic pipeline turns implemented functionality in open-source codebases into executable RL environments (behavioral specs, execution-grounded tests, rollout filtering); 5,545 tasks from 3,185 repos across 23 languages; GRPO on MiMo-V2.5 lifts DeepSWE (+11.7%), ProgramBench (+17%), Terminal-Bench v2.1 (+8.5%); [arXiv:2609.22068](https://arxiv.org/abs/2609.22068) (2026.09). Pairs with *Beyond Synthetic Benchmarks* in this folder, [Harness engineering](agents-and-engineering/Harness%20engineering_%20leveraging%20Codex%20in%20an%20agent-first%20world%20_%20OpenAI.pdf), and [Grounded Skill Synthesis from Code at Scale](agents-and-engineering/Grounded%20Skill%20Synthesis%20from%20Code%20at%20Scale%20for%20Agentic%20Intelligence.pdf) (code-as-training-signal from repos).
- **Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems**
- **Evaluating and Understanding Scheming Propensity in LLM Agents**
- **Everything is Context: Agentic File System Abstraction for Context Engineering**
- **Fundamentals of Building Autonomous LLM Agents**
- **[Grounded Skill Synthesis from Code at Scale for Agentic Intelligence](agents-and-engineering/Grounded%20Skill%20Synthesis%20from%20Code%20at%20Scale%20for%20Agentic%20Intelligence.pdf)** (Tong et al., Ant International) — Code2Skill pipeline lifts code units into verified atomic/composite/pattern skill records (CodeSkillBank: 1M+ grounded skills from ~20k GitHub repos); +11.7% avg on 72 protocol-matched evals vs baselines; [arXiv:2609.05571](https://arxiv.org/abs/2609.05571) (2026.09). Pairs with OpenSkill, [WikiSkill](agents-and-engineering/WikiSkill%20Compiling%20Agent%20Experience%20into%20Persistent%20Knowledge%20for%20Skill%20Evolution.pdf), the vendored Agent Skills catalog in [cursor-claude-codex/skills/](../cursor-claude-codex/skills/), and [CodeMidas](agents-and-engineering/CodeMidas_%20Scaling%20Agentic%20Coding%20RL%20Environments%20from%20Code%20Itself.pdf) (code-as-signal from the same repos).
- **[Graph-Based Agentic AI with LangGraph: Workflow Pathways for Long-Running Stateful Business Processes](agents-and-engineering/Graph-Based%20Agentic%20AI%20with%20LangGraph_%20Workflow%20Pathways%20for%20Long-Running%20Stateful%20Business%20Processes.pdf)** (Pearson, Shapiro, Gonzalez Venegas, Al-Khatib & Pinzón Arzola) — practitioner guide to LangGraph for durable stateful business workflows (typed state, repair loops, agentic RAG with evidence gating, human-in-the-loop interrupt/checkpoint); [arXiv:2607.19297](https://arxiv.org/abs/2607.19297) (2026.07). Pairs with the [Graph Engineering / Andrew Ng Playbook](../reports/Graph_Engineering_Andrew_Ng_Playbook.pdf) in [reports/](../reports/) and [*The Hitchhiker's Guide to Agentic AI*](../learning/Hitchhikers_Guide_to_Agentic_AI.pdf) in [learning/](../learning/).
- **[Harness engineering: leveraging Codex in an agent-first world](agents-and-engineering/Harness%20engineering_%20leveraging%20Codex%20in%20an%20agent-first%20world%20_%20OpenAI.pdf)** (OpenAI) — agent-first software engineering with Codex; pairs with [cursor-claude-codex/references/upstream-repos-catalog.md](../cursor-claude-codex/references/upstream-repos-catalog.md) and [reports/README.md](../reports/README.md) for industry framing.
- **Measuring Agents in Production**
- **MCP Server Architecture Patterns for LLM-Integrated Applications** (Rodrigues & Vas) — five production MCP server patterns (Resource Gateway, Tool Orchestrator, Stateful Session Server, Proxy Aggregator, Domain-Specific Adapter) plus anti-patterns and cross-cutting concerns; [arXiv:2606.30317](https://arxiv.org/abs/2606.30317) (2026.06).
- **Native Python Object-Oriented Agents** — OOP design for Python agents (state, tools, and lifecycle as objects); practical companion to ReAct and harness papers in this folder.
- **OpenSkill: Open-World Self-Evolution for LLM Agents** (Yan et al.) — agents derive skills and their own verification signals from open-world resources without target-task supervision; [arXiv:2606.06741](https://arxiv.org/abs/2606.06741) (2026.06). Pairs with WikiSkill, [Grounded Skill Synthesis from Code at Scale](agents-and-engineering/Grounded%20Skill%20Synthesis%20from%20Code%20at%20Scale%20for%20Agentic%20Intelligence.pdf) (Code2Skill / CodeSkillBank), and the RSI roadmap in [*The Last AI Built by Humans*](../perspectives-and-futures/The%20Last%20AI%20Built%20by%20Humans_%20Toward%20Genuine%20Recursive%20Self-Improvement.pdf).
- **[WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](agents-and-engineering/WikiSkill%20Compiling%20Agent%20Experience%20into%20Persistent%20Knowledge%20for%20Skill%20Evolution.pdf)** (Tang, Rashtchian, Ferng, Tomkins, Juan & Vu, Google Research) — co-evolves agent skills with a persistent wiki (raw traces → compiled knowledge → executable skills); [arXiv:2608.27454](https://arxiv.org/abs/2608.27454) (2026.08). Pairs with OpenSkill, [Grounded Skill Synthesis from Code at Scale](agents-and-engineering/Grounded%20Skill%20Synthesis%20from%20Code%20at%20Scale%20for%20Agentic%20Intelligence.pdf), the vendored Agent Skills catalog in [cursor-claude-codex/skills/](../cursor-claude-codex/skills/), and [*The Last AI Built by Humans*](../perspectives-and-futures/The%20Last%20AI%20Built%20by%20Humans_%20Toward%20Genuine%20Recursive%20Self-Improvement.pdf).
- **ReAct: Synergizing Reasoning and Acting in Language Models** (Yao et al., 2022) — interleaves chain-of-thought reasoning with tool/environment actions; foundational agent loop cited across [agentic-patterns.md](../cursor-claude-codex/references/agentic-patterns.md).
- **[SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](agents-and-engineering/SoL-Pi_%20Recursively%20Scaling%20Auto-Research%20Loops%20for%20Efficient%20Agent%20Harness.pdf)** (Liu, Ye, Gao et al., NVIDIA / NTU / MIT) — RSI-inspired auto-research at the harness layer discovers four reusable mechanisms (action fusion, online context compact, ObservationPack, evidence-preserving reducer) that match Pi on EdgeBench while cutting token traffic ~45% and API cost ~⅓; [arXiv:2609.20519](https://arxiv.org/abs/2609.20519) (2026.09). Pairs with *Scaling Laws for Agent Harnesses*, [Harness engineering](agents-and-engineering/Harness%20engineering_%20leveraging%20Codex%20in%20an%20agent-first%20world%20_%20OpenAI.pdf), [DeepSeek-V4.1-Flash](../models-and-training/DeepSeek-V4.1-Flash_%20Pushing%20the%20Limits%20of%20KV%20Cache%20Compression.pdf) (model-side KV/token efficiency), the [autoresearch](../cursor-claude-codex/skills/autoresearch/) skill, and the RSI roadmap in [*The Last AI Built by Humans*](../perspectives-and-futures/The%20Last%20AI%20Built%20by%20Humans_%20Toward%20Genuine%20Recursive%20Self-Improvement.pdf).
- **Scaling Laws for Agent Harnesses via Effective Feedback Compute** (Zhang et al., Harbin Institute of Technology) — introduces Effective Feedback Compute (EFC) as a scaling coordinate for agent harnesses; [arXiv:2605.29682](https://arxiv.org/abs/2605.29682) (2026.05).
- **Towards a Science of Scaling Agent Systems**
- **Virtual Agent Economies**

### [reliability-and-reasoning/](reliability-and-reasoning/)

- **Chain-of-Thought Prompting Elicits Reasoning in Large Language Models** (Wei et al., 2022) — “think step by step” as a scaling effect; [arXiv:2201.11903](https://arxiv.org/abs/2201.11903)
- **Let's Verify Step by Step** (Lightman et al., 2023) — process supervision vs outcome supervision for math reasoning; [arXiv:2305.20050](https://arxiv.org/abs/2305.20050)
- **Ask, Don't Judge: Binary Questions for Interpretable LLM Evaluation and Self-Improvement** (Cho et al.) — BinEval decomposes evaluation into atomic yes/no questions for interpretable, training-free LLM judging and prompt self-improvement; [arXiv:2606.27226](https://arxiv.org/abs/2606.27226) (2026.06).
- **[Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](reliability-and-reasoning/Judging%20LLM-as-a-Judge%20with%20MT-Bench%20and%20Chatbot%20Arena.pdf)** (Zheng et al., 2023) — introduces MT-Bench and Chatbot Arena; studies agreement, biases, and failure modes of LLM-as-judge; foundational for [awesome-evals](../cursor-claude-codex/references/awesome-evals/) §8 and PATTERNS §1.
- **[RoPoLL: Robust Panel of LLM Judges](reliability-and-reasoning/RoPoLL_Robust_Panel_of_LLM_Judges.pdf)** (Acharya, Pan & Verkhovsky, AWS) — formalizes PoLL under Huber contamination and replaces mean aggregation with geometric median; robust LLM-as-judge panels under biased/Byzantine corruption; [arXiv:2606.30931](https://arxiv.org/abs/2606.30931) (2026.06). Pairs with [cursor-claude-codex/references/awesome-evals/](../cursor-claude-codex/references/awesome-evals/) (§8 LLM-as-judge & verifiers).
- **A comprehensive taxonomy of hallucinations in Large Language Models**
- **LLMs get list in multi-turn conversation**
- **Reasoning Models Don't Always Say What They Think**
- **the-illusion-of-thinking**
- **Titans: Learning to Memorize at Test Time**
- **why-language-models-hallucinate**

### [models-and-training/](models-and-training/)

- **GPT-4 Technical Report** (OpenAI, 2023)
- **LLaMA: Open and Efficient Foundation Language Models** (Meta, 2023)
- **The Llama 3 Herd of Models** (Meta, 2024)
- **Mixtral of Experts** (Jiang et al., 2024) — open sparse MoE that competes with denser models; [arXiv:2401.04088](https://arxiv.org/abs/2401.04088)
- **Qwen2.5 Technical Report** (Qwen Team, 2024)
- **OpenAI o1 System Card** (OpenAI)
- **OpenAI o3 and o4-mini System Card** (OpenAI)
- **DeepSeek-V3 Technical Report** (DeepSeek-AI)
- **DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning** (DeepSeek-AI)
- **[DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression](models-and-training/DeepSeek-V4.1-Flash_%20Pushing%20the%20Limits%20of%20KV%20Cache%20Compression.pdf)** (DeepSeek-AI) — 552B MoE multimodal model (1M context) with Causal Encoder-Decoder (CED) architecture, CSA2 cross-layer KV reuse, FP4 KV caching, and SWA Bounded Replay; 890 bytes/token global KV cache (~¼ of V4-Flash); [arXiv:2609.19969](https://arxiv.org/abs/2609.19969) (2026.09). Pairs with [DeepSeek-V3](models-and-training/DeepSeek-V3%20Technical%20Report%20DeepSeek-AI.pdf), [Kimi K3](#models-and-training) (1M-context frontier), [open-models/](open-models/) (frontier open-weight stack), *Agentic Context Management* in [agents-and-engineering/](agents-and-engineering/), and [SoL-Pi](agents-and-engineering/SoL-Pi_%20Recursively%20Scaling%20Auto-Research%20Loops%20for%20Efficient%20Agent%20Harness.pdf) (harness-side token efficiency).
- **NVIDIA Nemotron 3 Super Technical Report** (NVIDIA)
- **Kimi K3: Open Frontier Intelligence** (Moonshot AI / Kimi Team, 2026) — 2.8T-parameter open-weight MoE with native vision and 1M context; [arXiv:2607.24653](https://arxiv.org/abs/2607.24653). Pairs with [DeepSeek-V4.1-Flash](models-and-training/DeepSeek-V4.1-Flash_%20Pushing%20the%20Limits%20of%20KV%20Cache%20Compression.pdf) for long-context agent infrastructure and the [open-models/](open-models/) theme (Lambert's [Kimi K3 essay](https://www.interconnects.ai/p/kimi-k3-the-open-weights-escalation) in the [reading list](open-models/README.md)).
- **LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels**
- **Deepseek: Manifold-Constrained Hyper-Connections**
- **DeepSeek Prover V2: DeepSeek's latest model masters math proofs**
- **LoRA: Low-Rank Adaptation of Large Language Models** (Hu et al., 2021) — parameter-efficient fine-tuning via low-rank adapters; [arXiv:2106.09685](https://arxiv.org/abs/2106.09685)
- **The Ultimate Guide to Fine-Tuning LLMs from Basics to Breakthroughs** (also in [reports/](../reports/))

### [open-models/](open-models/)

Open-weight / open-source foundation models — release strategy, ecosystem impact, fully open training stacks, and distillation. Curated from [Nathan Lambert's *Open-Source AI & Open Models Reading List*](https://www.interconnects.ai/p/open-source-ai-reading-list); non-paper essays and reports are [link-only in the folder README](open-models/README.md#external-reading-link-only).

- **[The Gradient of Generative AI Release: Methods and Considerations](open-models/The%20Gradient%20of%20Generative%20AI%20Release%20-%20Methods%20and%20Considerations.pdf)** (Solaiman, Hugging Face) — six-level release gradient (closed → fully open); [arXiv:2302.04844](https://arxiv.org/abs/2302.04844) (2023.02).
- **[On the Societal Impact of Open Foundation Models](open-models/On%20the%20Societal%20Impact%20of%20Open%20Foundation%20Models.pdf)** (Kapoor, Bommasani et al.) — marginal-risk framework for open foundation models; [arXiv:2403.07918](https://arxiv.org/abs/2403.07918) (2024.02).
- **[Consent in Crisis: The Rapid Decline of the AI Data Commons](open-models/Consent%20in%20Crisis%20-%20The%20Rapid%20Decline%20of%20the%20AI%20Data%20Commons.pdf)** (Longpre et al.) — longitudinal audit of web-domain consent for training data; [arXiv:2407.14933](https://arxiv.org/abs/2407.14933) (2024.07).
- **[Stealing Reasoning Traces from Proprietary LLM APIs](open-models/Stealing%20Reasoning%20Traces%20from%20Proprietary%20LLM%20APIs.pdf)** (Panfilov, Schmotz, Shumailov et al.) — distillation / encrypted CoT replay across proprietary APIs; [arXiv:2608.09867](https://arxiv.org/abs/2608.09867) (2026.08).
- **[Pythia: A Suite for Analyzing Large Language Models Across Training and Scaling](open-models/Pythia%20-%20A%20Suite%20for%20Analyzing%20Large%20Language%20Models%20Across%20Training%20and%20Scaling.pdf)** (Biderman et al., EleutherAI) — fully open training suite; [arXiv:2304.01373](https://arxiv.org/abs/2304.01373) (2023.04).
- **[OLMo: Accelerating the Science of Language Models](open-models/OLMo%20-%20Accelerating%20the%20Science%20of%20Language%20Models.pdf)** (Ai2) — first fully open LM stack; [arXiv:2402.00838](https://arxiv.org/abs/2402.00838) (2024.02).
- **[OLMo 2 Furious](open-models/OLMo%202%20Furious.pdf)** (Ai2) — OLMo 2 family (7B–32B); [arXiv:2501.00656](https://arxiv.org/abs/2501.00656) (2025.01).
- **[Olmo 3](open-models/Olmo%203.pdf)** (Ai2) — full model flow: 7B/32B Think + Instruct; [arXiv:2512.13961](https://arxiv.org/abs/2512.13961) (2025.12).

Related frontier open-weight PDFs in [models-and-training/](models-and-training/): [Kimi K3](models-and-training/Kimi%20K3%20Open%20Frontier%20Intelligence.pdf), [DeepSeek-V4.1-Flash](models-and-training/DeepSeek-V4.1-Flash_%20Pushing%20the%20Limits%20of%20KV%20Cache%20Compression.pdf), LLaMA, Mixtral, Qwen2.5.

### [ethics-risks-and-society/](ethics-risks-and-society/)

- **A Rational Analysis of the Effects of Sycophantic AI**
- **Expertise and Automation**
- **Fully Autonomous AI Agents Should Not be Developed**
- **On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?**
- **We Won't be Missed: Work and Growth in the Era of AGI**
- **Working with AI: Measuring the Occupational Implications of Generative AI**
- **Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task**

### [perspectives-and-futures/](perspectives-and-futures/)

- **A Perspective on Decentralizing AI**
- **Genius on Demand: The Value of Transformative Artificial Intelligence**
- **[The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement](perspectives-and-futures/The%20Last%20AI%20Built%20by%20Humans_%20Toward%20Genuine%20Recursive%20Self-Improvement.pdf)** (Duan et al., SJTU / Theseus Labs et al.) — Headroom-Closed Index (HCI) diagnostic, RSI development roadmap (execution → strategy → experience → environment → meta-improvement), and scenario-specific requirements across scientific discovery, embodied intelligence, and software engineering; [arXiv:2609.11873](https://arxiv.org/abs/2609.11873) (2026.09). Pairs with [SoL-Pi](agents-and-engineering/SoL-Pi_%20Recursively%20Scaling%20Auto-Research%20Loops%20for%20Efficient%20Agent%20Harness.pdf), OpenSkill, WikiSkill, [Grounded Skill Synthesis from Code at Scale](agents-and-engineering/Grounded%20Skill%20Synthesis%20from%20Code%20at%20Scale%20for%20Agentic%20Intelligence.pdf), and [CodeMidas](agents-and-engineering/CodeMidas_%20Scaling%20Agentic%20Coding%20RL%20Environments%20from%20Code%20Itself.pdf) in [agents-and-engineering/](agents-and-engineering/); curated companion list at [theseus-labs-rsi/awesome-rsi](https://github.com/theseus-labs-rsi/awesome-rsi).
- **The Future Is Neuro-Symbolic: Where Has It Been, and Where Is It Going?**
- **The Next Decade in AI: Four Steps Towards Robust Artificial Intelligence**

Strategic essay (not a peer-reviewed paper): Aschenbrenner's [*Situational Awareness: The Decade Ahead*](../reports/Situational_Awareness_Aschenbrenner.pdf) in [reports/](../reports/) — AGI timelines, compute scaling, alignment, and geopolitics (Jun 2024). Complements *The Last AI Built by Humans* above for RSI and long-horizon capability framing.

---

## Foundation models for code (external references)

Key code-LLM papers (links to arXiv, blogs, GitHub):

### Foundation Models

- **Competition-level code generation with AlphaCode**, Yujia Li, David Choi, Junyoung Chung, Nate Kushman, Julian Schrittwieser, Rémi Leblond, Tom Eccles, James Keeling, Felix Gimeno, Agustin Dal Lago, Thomas Hubert, Peter Choy, Cyprien de Masson d'Autume, Igor Babuschkin, Xinyun Chen, Po-Sen Huang, Johannes Welbl, Sven Gowal, Alexey Cherepanov, James Molloy, Daniel J. Mankowitz, Esme Sutherland Robson, Pushmeet Kohli, Nando de Freitas, Koray Kavukcuoglu, Oriol Vinyals, [arXiv:2203.07814](https://arxiv.org/abs/2203.07814) (2022.02)

- **CodeGen: An open large language model for code with multi-turn program synthesis**, Erik Nijkamp, Bo Pang, Hiroaki Hayashi, Lifu Tu, Huan Wang, Yingbo Zhou, Silvio Savarese, Caiming Xiong, [arXiv:2203.13474](https://arxiv.org/abs/2203.13474) (2022.03)

- **SantaCoder: don't reach for the stars!**, Loubna Ben Allal, Raymond Li, Denis Kocetkov, Chenghao Mou, Christopher Akiki, Carlos Munoz Ferrandis, Niklas Muennighoff, Mayank Mishra, Alex Gu, Manan Dey, Logesh Kumar Umapathi, Carolyn Jane Anderson, Yangtian Zi, Joel Lamy Poirier, Hailey Schoelkopf, Sergey Troshin, Dmitry Abulkhanov, Manuel Romero, Michael Lappert, Francesco De Toni, Bernardo García del Río, Qian Liu, Shamik Bose, Urvashi Bhattacharyya, Terry Yue Zhuo, Ian Yu, Paulo Villegas, Marco Zocca, Sourab Mangrulkar, David Lansky, Huu Nguyen, Danish Contractor, Luis Villa, Jia Li, Dzmitry Bahdanau, Yacine Jernite, Sean Hughes, Daniel Fried, Arjun Guha, Harm de Vries, Leandro von Werra, [arXiv:2301.03988](https://arxiv.org/abs/2301.03988) (2023.01)

- **StarCoder: may the source be with you!**, Raymond Li, Loubna Ben Allal, Yangtian Zi, Niklas Muennighoff, Denis Kocetkov, Chenghao Mou, Marc Marone, Christopher Akiki, Jia Li, Jenny Chim, Qian Liu, Evgenii Zheltonozhskii, Terry Yue Zhuo, Thomas Wang, Olivier Dehaene, Mishig Davaadorj, Joel Lamy-Poirier, João Monteiro, Oleh Shliazhko, Nicolas Gontier, Nicholas Meade, Armel Zebaze, Ming-Ho Yee, Logesh Kumar Umapathi, Jian Zhu, Benjamin Lipkin, Muhtasham Oblokulov, Zhiruo Wang, Rudra Murthy, Jason Stillerman, Siva Sankalp Patel, Dmitry Abulkhanov, Marco Zocca, Manan Dey, Zhihan Zhang, Nour Fahmy, Urvashi Bhattacharyya, Wenhao Yu, Swayam Singh, Sasha Luccioni, Paulo Villegas, Maxim Kunakov, Fedor Zhdanov, Manuel Romero, Tony Lee, Nadav Timor, Jennifer Ding, Claire Schlesinger, Hailey Schoelkopf, Jan Ebert, Tri Dao, Mayank Mishra, Alex Gu, Jennifer Robinson, Carolyn Jane Anderson, Brendan Dolan-Gavitt, Danish Contractor, Siva Reddy, Daniel Fried, Dzmitry Bahdanau, Yacine Jernite, Carlos Muñoz Ferrandis, Sean Hughes, Thomas Wolf, Arjun Guha, Leandro von Werra, Harm de Vries, [arXiv:2305.06161](https://arxiv.org/abs/2305.06161) (2023.05)

- **CodeT5+: Open code large language models for code understanding and generation**, Yue Wang, Hung Le, Akhilesh Deepak Gotmare, Nghi D.Q. Bui, Junnan Li, Steven C.H. Hoi, [arXiv:2305.07922](https://arxiv.org/abs/2305.07922) (2023.05)

- **WizardCoder: Empowering code large language models with evol-instruct**, Ziyang Luo, Can Xu, Pu Zhao, Qingfeng Sun, Xiubo Geng, Wenxiang Hu, Chongyang Tao, Jing Ma, Qingwei Lin, Daxin Jiang, [arXiv:2306.08568](https://arxiv.org/abs/2306.08568) (2023.06)

- **CodeGemma: Open code models based on Gemma**, CodeGemma Team (Heri Zhao, Jeffrey Hui, Joshua Howland, Nam Nguyen, Siqi Zuo, Andrea Hu, Christopher A. Choquette-Choo, Jingyue Shen, Joe Kelley, Kshitij Bansal, Luke Vilnis, Mateo Wirth, Paul Michel, Peter Choy, Pratik Joshi, Ravin Kumar, Sarmad Hashmi, Shubham Agrawal, Zhitao Gong, Jane Fine, Tris Warkentin, Ale Jakse Hartman, Bin Ni, Kathy Korevec, Kelly Schaefer, Scott Huffman), [arXiv:2406.11409](https://arxiv.org/abs/2406.11409) (2024.06)

- **Code Llama: Open foundation models for code**, Baptiste Rozière, Jonas Gehring, Fabian Gloeckle, Sten Sootla, Itai Gat, Xiaoqing Ellen Tan, Yossi Adi, Jingyu Liu, Romain Sauvestre, Tal Remez, Jérémy Rapin, Artyom Kozhevnikov, Ivan Evtimov, Joanna Bitton, Manish Bhatt, Cristian Canton Ferrer, Aaron Grattafiori, Wenhan Xiong, Alexandre Défossez, Jade Copet, Faisal Azhar, Hugo Touvron, Louis Martin, Nicolas Usunier, Thomas Scialom, Gabriel Synnaeve, [arXiv:2308.12950](https://arxiv.org/abs/2308.12950) (2023.08)

- **Magicoder: Empowering code generation with OSS-Instruct**, Yuxiang Wei, Zhe Wang, Jiawei Liu, Yifeng Ding, Lingming Zhang, [arXiv:2312.02120](https://arxiv.org/abs/2312.02120) (2023.12)

- **DeepSeek-Coder: When the Large Language Model Meets Programming--The Rise of Code Intelligence**, Daya Guo, Qihao Zhu, Dejian Yang, Zhenda Xie, Kai Dong, Wentao Zhang, Guanting Chen, Xiao Bi, Y. Wu, Y.K. Li, Fuli Luo, Yingfei Xiong, Wenfeng Liang, [arXiv:2401.14196](https://arxiv.org/abs/2401.14196) (2024.01)

- **StarCoder 2 and the Stack v2: The next generation**, Anton Lozhkov, Raymond Li, Loubna Ben Allal, Federico Cassano, Joel Lamy-Poirier, Nouamane Tazi, Ao Tang, Dmytro Pykhtar, Jiawei Liu, Yuxiang Wei, Tianyang Liu, Max Tian, Denis Kocetkov, Arthur Zucker, Younes Belkada, Zijian Wang, Qian Liu, Dmitry Abulkhanov, Indraneil Paul, Zhuang Li, Wen-Ding Li, Megan Risdal, Jia Li, Jian Zhu, Terry Yue Zhuo, Evgenii Zheltonozhskii, Nii Osae Osae Dade, Wenhao Yu, Lucas Krauß, Naman Jain, Yixuan Su, Xuanli He, Manan Dey, Edoardo Abati, Yekun Chai, Niklas Muennighoff, Xiangru Tang, Muhtasham Oblokulov, Christopher Akiki, Marc Marone, Chenghao Mou, Mayank Mishra, Alex Gu, Binyuan Hui, Tri Dao, Armel Zebaze, Olivier Dehaene, Nicolas Patry, Canwen Xu, Julian McAuley, Han Hu, Torsten Scholak, Sebastien Paquet, Jennifer Robinson, Carolyn Jane Anderson, Nicolas Chapados, Mostofa Patwary, Nima Tajbakhsh, Yacine Jernite, Carlos Muñoz Ferrandis, Lingming Zhang, Sean Hughes, Thomas Wolf, Arjun Guha, Leandro von Werra, Harm de Vries, [arXiv:2402.19173](https://arxiv.org/abs/2402.19173) (2024.02)

- **DeepSeek-Coder-V2: Breaking the barrier of closed-source models in code intelligence**, DeepSeek-AI (Qihao Zhu, Daya Guo, Zhihong Shao, Dejian Yang, Peiyi Wang, Runxin Xu, Y. Wu, Yukun Li, Huazuo Gao, Shirong Ma, Wangding Zeng, Xiao Bi, Zihui Gu, Hanwei Xu, Damai Dai, Kai Dong, Liyue Zhang, Yishi Piao, Zhibin Gou, Zhenda Xie, Zhewen Hao, Bingxuan Wang, Junxiao Song, Deli Chen, Xin Xie, Kang Guan, Yuxiang You, Aixin Liu, Qiushi Du, Wenjun Gao, Xuan Lu, Qinyu Chen, Yaohui Wang, Chengqi Deng, Jiashi Li, Chenggang Zhao, Chong Ruan, Fuli Luo, Wenfeng Liang), [arXiv:2406.11931](https://arxiv.org/abs/2406.11931) (2024.06)

- **Qwen2.5-Coder Technical Report**, Binyuan Hui, Jian Yang, Zeyu Cui, Jiaxi Yang, Dayiheng Liu, Lei Zhang, Tianyu Liu, Jiajun Zhang, Bowen Yu, Kai Dang, Qiyao Peng, Yuqin Zhou, Zheng Zhao, Keming Lu, Xingzhang Ren, Yifu Chen, Junyang Lin, [arXiv:2409.12186](https://arxiv.org/abs/2409.12186) (2024.09)

- **OpenCoder: The Open Cookbook for Top-Tier Code Large Language Models**, Siming Huang, Tianhao Cheng, Jason Klein Liu, Jiaran Hao, Liuyihan Song, Yang Xu, J. Yang, Jiaheng Liu, Chenchen Zhang, Linzheng Chai, Ruifeng Yuan, Zhaoxiang Zhang, Jie Fu, Qian Liu, Ge Zhang, Zili Wang, Yuan Qi, Yinghui Xu, Wei Chu, [arXiv:2411.04905](https://arxiv.org/abs/2411.04905) (2024.11)

- **Codestral 25.01**, Mistral AI, [Blog](https://mistral.ai/news/codestral/) (2025.01)

- **Code-R1: Reproducing R1 for Code with Reliable Rewards**, Jiawei Liu, Lingming Zhang, [GitHub](https://github.com/ganler/code-r1) (2025.05)

- **Qwen3 Technical Report**, Qwen Team, [arXiv:2505.09388](https://arxiv.org/abs/2505.09388) (2025.05)

- **Kimi-Dev Technical Report**, Kimi Team, [Blog](https://moonshotai.github.io/Kimi-Dev/) (2025.06)

- **CWM: An Open-Weights LLM for Research on Code Generation with World Models**, Meta FAIR CodeGen Team, [arXiv:2510.02387](https://arxiv.org/abs/2510.02387) (2025.09)

**Note:** This README is based on the "Large Language Models for Coding" section from the [Awesome Vibe Coding](https://github.com/YuyaoGe/Awesome-Vibe-Coding) repository. For the complete taxonomy and detailed paper listings across all categories, please refer to the original repository.

## Agent research (external references)

Curated paper lists and surveys — link-only backlogs for expanding [agents-and-engineering/](agents-and-engineering/), [perspectives-and-futures/](perspectives-and-futures/), and [reliability-and-reasoning/](reliability-and-reasoning/). See also [nice-projects/README.md](../nice-projects/README.md#learn-ai-agents-courses--roadmaps).

- **[awesome-rsi](https://github.com/theseus-labs-rsi/awesome-rsi)** (Theseus Labs) — curated RSI paper and project list; companion to [*The Last AI Built by Humans*](perspectives-and-futures/The%20Last%20AI%20Built%20by%20Humans_%20Toward%20Genuine%20Recursive%20Self-Improvement.pdf) in this folder.
- **[LLM-Agent-Paper-List](https://github.com/WooooDyy/LLM-Agent-Paper-List)** (Wang et al. survey companion, ~8.2k ★) — annotated list for *The Rise and Potential of Large Language Model Based Agents: A Survey*; planning, memory, tool use, multi-agent, safety. ⚠️ No license declared upstream — link-only.
- **[Open-Source AI & Open Models Reading List](https://www.interconnects.ai/p/open-source-ai-reading-list)** (Nathan Lambert / Interconnects, Sep 2026) — curated essays, reports, and papers on open models; PDFs indexed in [open-models/](open-models/).

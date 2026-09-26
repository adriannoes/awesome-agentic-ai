# Open models & open-source AI

Curated papers on **open-weight / open-source foundation models**, plus link-only essays, reports, and industry writing. Structured from [Nathan Lambert's *Open-Source AI & Open Models Reading List*](https://www.interconnects.ai/p/open-source-ai-reading-list) (Interconnects, Sep 2026; last updated 15 Sep 2026).

**Source list:** [interconnects.ai/p/open-source-ai-reading-list](https://www.interconnects.ai/p/open-source-ai-reading-list) — comment there to suggest additions.

## PDFs in this folder (8)

| Paper | Authors | arXiv | Notes |
|-------|---------|-------|-------|
| [The Gradient of Generative AI Release - Methods and Considerations](The%20Gradient%20of%20Generative%20AI%20Release%20-%20Methods%20and%20Considerations.pdf) | Solaiman (Hugging Face) | [2302.04844](https://arxiv.org/abs/2302.04844) (2023.02) | Six-level release gradient (closed → fully open); FAccT 2023 |
| [On the Societal Impact of Open Foundation Models](On%20the%20Societal%20Impact%20of%20Open%20Foundation%20Models.pdf) | Kapoor, Bommasani et al. | [2403.07918](https://arxiv.org/abs/2403.07918) (2024.02) | Position paper: benefits, marginal-risk framework, ICML 2024 |
| [Consent in Crisis - The Rapid Decline of the AI Data Commons](Consent%20in%20Crisis%20-%20The%20Rapid%20Decline%20of%20the%20AI%20Data%20Commons.pdf) | Longpre et al. | [2407.14933](https://arxiv.org/abs/2407.14933) (2024.07) | Longitudinal audit of web-domain consent; NeurIPS 2024 Datasets track |
| [Stealing Reasoning Traces from Proprietary LLM APIs](Stealing%20Reasoning%20Traces%20from%20Proprietary%20LLM%20APIs.pdf) | Panfilov, Schmotz, Shumailov et al. | [2608.09867](https://arxiv.org/abs/2608.09867) (2026.08) | Distillation / encrypted CoT replay across Anthropic, OpenAI, Google |
| [Pythia - A Suite for Analyzing Large Language Models Across Training and Scaling](Pythia%20-%20A Suite%20for%20Analyzing%20Large%20Language%20Models%20Across%20Training%20and%20Scaling.pdf) | Biderman et al. (EleutherAI) | [2304.01373](https://arxiv.org/abs/2304.01373) (2023.04) | Fully open training suite + 154 checkpoints per model |
| [OLMo - Accelerating the Science of Language Models](OLMo%20-%20Accelerating%20the%20Science%20of%20Language%20Models.pdf) | Ai2 (Team OLMo) | [2402.00838](https://arxiv.org/abs/2402.00838) (2024.02) | First fully open LM stack (weights, data, code, eval) |
| [OLMo 2 Furious](OLMo%202%20Furious.pdf) | Ai2 (Team OLMo) | [2501.00656](https://arxiv.org/abs/2501.00656) (2025.01) | OLMo 2 family (7B–32B), Dolmino Mix 1124, RLVR instruct |
| [Olmo 3](Olmo%203.pdf) | Ai2 (Team Olmo) | [2512.13961](https://arxiv.org/abs/2512.13961) (2025.12) | Full model flow: 7B/32B Think + Instruct, strongest fully open thinking model |

### Related open-model papers elsewhere in `papers/`

- **[Kimi K3: Open Frontier Intelligence](../models-and-training/Kimi%20K3%20Open%20Frontier%20Intelligence.pdf)** — 2.8T open-weight MoE, 1M context; [arXiv:2607.24653](https://arxiv.org/abs/2607.24653). Pairs with Lambert's [Kimi K3 essay](https://www.interconnects.ai/p/kimi-k3-the-open-weights-escalation) (listed below).
- **[DeepSeek-V4.1-Flash](../models-and-training/DeepSeek-V4.1-Flash_%20Pushing%20the%20Limits%20of%20KV%20Cache%20Compression.pdf)** — open-weight frontier MoE for input-heavy agents; [arXiv:2609.19969](https://arxiv.org/abs/2609.19969).

---

## External reading (link-only)

Non-paper items from Nathan's list — essays, blogs, reports, interviews, and dashboards. All URLs trace back to the [source reading list](https://www.interconnects.ai/p/open-source-ai-reading-list).

### Foundation

What open models are, release strategy, economics, safety framing, and ecosystem signals.

| Resource | Author / outlet | Link |
|----------|-----------------|------|
| From Open Source Software to Open Source Strategy | Bill Gurley (May 2026) | [a16z.news](https://www.a16z.news/p/from-open-source-software-to-open-source) |
| Open Source AI is the Path Forward | Mark Zuckerberg (Jul 2024) | [meta.com](https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/) |
| The Gradient of Generative AI Release… | Irene Solaiman (Feb 2023) | PDF in this folder ↑ |
| What comes next with open models | Nathan Lambert / Interconnects (Mar 2026) | [interconnects.ai](https://www.interconnects.ai/p/the-next-phase-of-open-models) |
| Some Simple Economics of Open versus Closed AI | Christian Catalini (Aug 2026) | [a16z.news](https://www.a16z.news/p/some-simple-economics-of-open-versus) |
| Open models in perpetual catch-up | Nathan Lambert (Feb 2026) | [interconnects.ai](https://www.interconnects.ai/p/open-models-in-perpetual-catch-up) |
| Open and closed models are on different exponentials | Nathan Lambert (Jun 2026) | [interconnects.ai](https://www.interconnects.ai/p/open-and-closed-models-are-on-different) |
| A Safe Path to Open Weights | Thinking Machines Lab (Jul 2026) | [thinkingmachines.ai](https://thinkingmachines.ai/blog/a-safe-path-to-open-weights/) |
| On the Societal Impact of Open Foundation Models | Kapoor, Bommasani et al. (Feb 2024) | PDF in this folder ↑ |
| The Myth of unsafe Open Source AI | Florian Brand (Jun 2026) | [florianbrand.com](https://florianbrand.com/posts/open-model-safety) |
| Consent in Crisis… | Longpre et al. (Jul 2024) | PDF in this folder ↑ |
| Kimi K3: The open-weights escalation | Nathan Lambert (Jul 2026) | [interconnects.ai](https://www.interconnects.ai/p/kimi-k3-the-open-weights-escalation) |
| GLM-5.2 is the step change for open agents | Nathan Lambert (Jun 2026) | [interconnects.ai](https://www.interconnects.ai/p/glm-52-is-the-step-change-for-open) |
| Nathan Lambert on China's AI Ecosystem (The Curve 2025) | Golden Gate Institute for AI (Nov 2025) | [YouTube](https://www.youtube.com/watch?v=VpYU4VOicI0) · [slides & recap](https://www.interconnects.ai/p/state-of-open-models-2025) |
| The ATOM Report (optional) | ATOM Project (Apr 2026) | [atomproject.ai](https://atomproject.ai/) |
| Interconnects Adoption Dashboard (optional) | Interconnects | [interconnects.ai/adoption](https://www.interconnects.ai/adoption) |
| Interconnects Artifacts Hub (optional) | Interconnects | [interconnects.ai/artifacts](https://www.interconnects.ai/artifacts) |

### US–China competition

Open-model geopolitics, innovation policy, and adoption case studies.

| Resource | Author / outlet | Link |
|----------|-----------------|------|
| The ATOM Project | Nathan Lambert (Aug 2025) | [interconnects.ai](https://www.interconnects.ai/p/the-atom-project) |
| Why I build open language models | Nathan Lambert (Oct 2024) | [interconnects.ai](https://www.interconnects.ai/p/why-i-build-open-language-models) |
| Banning Open Source AI Would Be A Mistake | Nathan Lambert & Kevin Xu (Jun 2026) | [interconnects.ai](https://www.interconnects.ai/p/banning-open-source-ai-would-be-a) |
| 6 months to live for open models | Nathan Lambert (Jul 2026) | [interconnects.ai](https://www.interconnects.ai/p/6-months-to-live-for-open-models) |
| Chinese Open Source: A Definitive History | Kevin Xu (Mar 2026) | [interconnected.blog](https://interconnected.blog/chinese-open-source-a-definitive-history/) |
| China's Structural Advantage in Open Source AI | Kevin Xu (Jun 2025) | [interconnect.substack.com](https://interconnect.substack.com/p/chinas-structural-advantage-in-open) |
| Notes from inside China's AI labs | Nathan Lambert (May 2026) | [interconnects.ai](https://www.interconnects.ai/p/notes-from-inside-chinas-ai-labs) |
| GLM-5.3: How Chinese labs keep stride with the frontier | Nathan Lambert (Aug 2026) | [interconnects.ai](https://www.interconnects.ai/p/glm-53-how-chinese-labs-keep-stride) |
| Western regulatory probes (DoorDash, Airbnb, Cursor, Apple, Harvey) | News coverage | See [reading list](https://www.interconnects.ai/p/open-source-ai-reading-list) for CNBC / Bloomberg / Reuters links |
| Perplexity adopts DeepSeek R1 | Forbes (Jan 2025) | [reading list](https://www.interconnects.ai/p/open-source-ai-reading-list) |
| Thomson Reuters builds on Qwen | Business Insider (Aug 2026) | [reading list](https://www.interconnects.ai/p/open-source-ai-reading-list) |

### Technical details

Open–closed gap, distillation, cyber risk, and training-data dynamics.

| Resource | Author / outlet | Link |
|----------|-----------------|------|
| Are Open Models Catching Up? | SemiAnalysis (Aug 2026) | [newsletter.semianalysis.com](https://newsletter.semianalysis.com/p/are-open-models-catching-up) |
| How far behind are open models? | Håvard Tveit Ihle (May 2026) | [LessWrong](https://www.lesswrong.com/posts/rJcCrXyEsJKmmDpWG/how-far-behind-are-open-models) |
| Epoch AI / Artificial Analysis open–closed gap data | Epoch, Artificial Analysis | [epoch.ai](https://epoch.ai/) · [artificialanalysis.ai](https://artificialanalysis.ai/) |
| The OpenAI/Huggingface incident… | Joshua Saxe (Jul 2026) | [joshuasaxe181906.substack.com](https://joshuasaxe181906.substack.com/p/the-openaihuggingface-incident-how) |
| We urgently need a coherent national AI cybersecurity policy | Joshua Saxe (Aug 2026) | [joshuasaxe181906.substack.com](https://joshuasaxe181906.substack.com/p/we-urgently-need-a-coherent-national) |
| Nonproliferation is the wrong approach to AI misuse | Helen Toner (Apr 2025) | [helentoner.substack.com](https://helentoner.substack.com/p/nonproliferation-is-the-wrong-approach) |
| Synthetic data & distillation (RLHF Book ch.) | Nathan Lambert | [rlhfbook.com](https://rlhfbook.com/) — distillation chapter in post-training textbook |
| How much does distillation really matter for Chinese LLMs? | Nathan Lambert (Feb 2026) | [interconnects.ai](https://www.interconnects.ai/p/how-much-does-distillation-really) |
| Detecting and countering misuse of AI (Sep 2026) | Anthropic | [anthropic.com](https://www.anthropic.com/threat-intelligence-report-september-2026) |
| Stealing Reasoning Traces from Proprietary LLM APIs | Panfilov et al. (2026) | PDF in this folder ↑ · [project page](https://stolen-thoughts.com/) |
| The distillation panic | Nathan Lambert (May 2026) | [interconnects.ai](https://www.interconnects.ai/p/the-distillation-panic) |
| How distillation is used today… | Nathan Lambert (Jul 2026) | [natolambert.substack.com](https://natolambert.substack.com/p/how-distillation-is-used-today-and) |
| Frontiers in synthetic data (2024) | Nathan Lambert | [interconnects.ai](https://www.interconnects.ai/p/frontiers-in-synthetic-data) |
| The Z.ai Playbook | ChinaTalk (Nov 2025) | [chinatalk.media](https://www.chinatalk.media/p/the-zai-playbook) |

---

## Hub cross-links

- **Frontier open-weight models:** [models-and-training/](../models-and-training/) (Kimi K3, DeepSeek-V4.1-Flash, LLaMA, Mixtral, …)
- **Agent harness & skills on open models:** [agents-and-engineering/](../agents-and-engineering/) (SoL-Pi, WikiSkill, Harness engineering)
- **Evals & open-model benchmarks:** [cursor-claude-codex/references/awesome-evals/](../../cursor-claude-codex/references/awesome-evals/) (Lambert posts on eval marketing, quicksand)
- **Fully open training code:** [research/llms-from-scratch/](../../research/llms-from-scratch/) · [research/autoresearch/](../../research/autoresearch/)

← [Papers index](../README.md)

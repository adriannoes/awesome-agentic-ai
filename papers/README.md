# Research Papers

This directory contains research papers and resources on Large Language Models (LLMs), AI agents, code generation, and related topics (ethics, scaling, hallucinations, and automation).

## Overview

The collection includes: (1) **foundation models for code** (external references to key code-LLM papers); (2) **46 PDFs** in `papers/`, organized into thematic subfolders — from classic deep-learning papers through contemporary agent and alignment research.

## Directory structure

```
papers/
├── early-deep-learning/           # 3 — AlexNet, DQN, Word2Vec (2012–2013)
├── foundation-models/             # 7 — Transformers, BERT, GPT, scaling laws (2017–2022)
├── alignment-and-post-training/   # 1 — RLHF / InstructGPT
├── generative-models/             # 1 — diffusion models
├── agents-and-engineering/        # 13 — agents, harnesses, code evaluation
├── reliability-and-reasoning/     # 6 — hallucinations, reasoning, memory
├── models-and-training/           # 4 — world models, fine-tuning, DeepSeek
├── ethics-risks-and-society/      # 7 — risks, work, autonomy
└── perspectives-and-futures/      # 4 — long-term visions of AI
```

## Papers by folder

### [early-deep-learning/](early-deep-learning/)

- **ImageNet Classification with Deep Convolutional Neural Networks** (AlexNet, 2012)
- **Playing Atari with Deep Reinforcement Learning** (DQN, 2013)
- **Efficient Estimation of Word Representations in Vector Space** (Word2Vec, 2013)

### [foundation-models/](foundation-models/)

- **Attention Is All You Need** (Transformers, 2017)
- **BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding** (2018)
- **Improving Language Understanding by Generative Pre-Training** (GPT-1, 2018)
- **Language Models are Unsupervised Multitask Learners** (GPT-2, 2019)
- **Language Models are Few-Shot Learners** (GPT-3, 2020)
- **Scaling Laws for Neural Language Models** (2020)
- **Training Compute-Optimal Large Language Models** (Chinchilla, 2022)

### [alignment-and-post-training/](alignment-and-post-training/)

- **Training language models to follow instructions with human feedback** (InstructGPT / RLHF, 2022)

### [generative-models/](generative-models/)

- **Denoising Diffusion Probabilistic Models** (2020)

### [agents-and-engineering/](agents-and-engineering/)

- **AI Agents vs. Agentic AI: A Conceptual Taxonomy, Applications and Challenges**
- **Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models**
- **Agents of Chaos**
- **Beyond Synthetic Benchmarks: Evaluating LLM Performance on Real-World Class-Level Code Generation**
- **Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems**
- **Evaluating and Understanding Scheming Propensity in LLM Agents**
- **Everything is Context: Agentic File System Abstraction for Context Engineering**
- **Fundamentals of Building Autonomous LLM Agents**
- **[Harness engineering: leveraging Codex in an agent-first world](agents-and-engineering/Harness%20engineering_%20leveraging%20Codex%20in%20an%20agent-first%20world%20_%20OpenAI.pdf)** (OpenAI) — agent-first software engineering with Codex; pairs with [cursor-claude-codex/references/upstream-repos-catalog.md](../cursor-claude-codex/references/upstream-repos-catalog.md) and [reports/README.md](../reports/README.md) for industry framing.
- **Measuring Agents in Production**
- **Scaling Laws for Agent Harnesses via Effective Feedback Compute** (Zhang et al., Harbin Institute of Technology) — introduces Effective Feedback Compute (EFC) as a scaling coordinate for agent harnesses; [arXiv:2605.29682](https://arxiv.org/abs/2605.29682) (2026.05).
- **Towards a Science of Scaling Agent Systems**
- **Virtual Agent Economies**

### [reliability-and-reasoning/](reliability-and-reasoning/)

- **A comprehensive taxonomy of hallucinations in Large Language Models**
- **LLMs get list in multi-turn conversation**
- **Reasoning Models Don't Always Say What They Think**
- **the-illusion-of-thinking**
- **Titans: Learning to Memorize at Test Time**
- **why-language-models-hallucinate**

### [models-and-training/](models-and-training/)

- **LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels**
- **Deepseek: Manifold-Constrained Hyper-Connections**
- **DeepSeek Prover V2: DeepSeek's latest model masters math proofs**
- **The Ultimate Guide to Fine-Tuning LLMs from Basics to Breakthroughs** (also in [reports/](../reports/))

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
- **The Future Is Neuro-Symbolic: Where Has It Been, and Where Is It Going?**
- **The Next Decade in AI: Four Steps Towards Robust Artificial Intelligence**

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

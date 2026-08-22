# Learning — Books and Textbooks

Curated textbooks and reference guides that ground the skills and notebooks elsewhere in this repo. All nine are freely available from their authors or publishers.

## What's here

| Book | Authors | Topics | Companion material |
|------|---------|--------|---------------------|
| [Understanding Deep Learning](UnderstandingDeepLearning_05_29_25_C.pdf) | Simon J.D. Prince | Supervised learning, deep networks, optimization, backpropagation, regularization, CNNs, ResNets, transformers, GNNs, GANs, normalizing flows, VAEs, diffusion, RL, ethics | [68 notebooks in `research/understanding-deep-learning/`](../research/understanding-deep-learning/) |
| [Mathematics for Computer Science](Mathematics%20for%20Computer%20Science.pdf) | Lehman, Leighton, Meyer (MIT) | Proofs, graph theory, counting, probability, number theory | MIT 6.042J course |
| [Competitive Programmer's Handbook](Competitive_Programmers_Handbook.pdf) | Antti Laaksonen | Competitive programming techniques: graphs, DP, data structures, implementation tricks, complexity | [CSES Problem Set](https://cses.fi/problemset/); complements *Mathematics for Computer Science* (theory) and *Algorithms for Decision Making* (sequential decision models) |
| [Algorithms for Decision Making](Algorithms%20for%20Decision%20Making.pdf) | Kochenderfer, Wheeler, Wray | Probabilistic reasoning, sequential problems, model uncertainty, state uncertainty, multi-agent systems | Stanford AA228 / CS238 |
| [The Hitchhiker's Guide to Agentic AI](Hitchhikers_Guide_to_Agentic_AI.pdf) | Haggai Roitman | Full agentic stack: transformers/GPU systems, SFT/LoRA/MoE, RLHF/DPO/GRPO, RAG & memory, harnesses, MCP/A2A, multi-agent topologies, evals, production | Pairs with [Algorithms for Decision Making](Algorithms%20for%20Decision%20Making.pdf) (decision theory), [cursor-claude-codex/references/agentic-patterns.md](../cursor-claude-codex/references/agentic-patterns.md), LLM tracks in [research/](../research/), and [reports/](../reports/) agent guides |
| [The Agentic SDLC Handbook](The_Agentic_SDLC_Handbook.pdf) | Daniel Meppiel | AI-native SDLC for leaders and practitioners: vibe-coding cliff, PROSE constraints, dual path, tool/platform evaluation, spec-driven delivery | Pairs with [no-vibe-coding.md](../cursor-claude-codex/product-management/no-vibe-coding.md), [cursor-claude-codex/](../cursor-claude-codex/) skills, and [The New SDLC With Vibe Coding](../reports/The%20New%20SDLC%20With%20Vibe%20Coding.pdf) in [reports/](../reports/) |
| [CUDA C++ Programming Guide](CUDA_C_Programming_Guide.pdf) | NVIDIA Corporation | GPU programming model, kernels, memory hierarchy, streams, cooperative groups, performance tuning | GPU tracks in [research/](../research/) (e.g. [llms-from-scratch](../research/llms-from-scratch/), [nanochat](../research/nanochat/), [autoresearch](../research/autoresearch/)) |
| [Optimizing Software in C++](Optimizing_Software_in_Cpp.pdf) | Agner Fog | CPU microarchitecture, hotspots, C++ construct costs, compiler optimizations, multithreading, SIMD/vectorization | Pairs with the *CUDA C++ Programming Guide* (CPU vs GPU performance); useful when tuning native kernels next to [research/](../research/) GPU tracks |
| [Practical Guide to Bare Metal C++](Practical_Guide_to_Bare_Metal_Cpp.pdf) | Alex Robenko | Embedded C++ without an OS: peripherals, interrupts, soft real-time, templates/metaprogramming under no-exceptions/no-RTTI constraints (ARM / Raspberry Pi examples) | Complements Fog (hosted C++ performance) and CUDA (device kernels); companion code in [embxx](https://github.com/arobenko/embxx) and [embxx_on_rpi](https://github.com/arobenko/embxx_on_rpi) |

## How to use this folder

- **If you're doing the notebooks in [research/understanding-deep-learning/](../research/understanding-deep-learning/)** — read the corresponding UDL chapter first.
- **If you're building agentic systems** — start with Roitman's *Hitchhiker's Guide to Agentic AI* for the end-to-end stack (foundations → harnesses → multi-agent → production); use *Algorithms for Decision Making* when you need the MDP/POMDP theory underneath; ship patterns via [cursor-claude-codex/references/agentic-patterns.md](../cursor-claude-codex/references/agentic-patterns.md); for graph/knowledge-graph orchestration, see the [Graph Engineering playbook](../reports/Graph_Engineering_Andrew_Ng_Playbook.pdf) in [reports/](../reports/); for LangGraph recipes (durable state, repair loops, HITL checkpoints), read [*Graph-Based Agentic AI with LangGraph*](../papers/agents-and-engineering/Graph-Based%20Agentic%20AI%20with%20LangGraph_%20Workflow%20Pathways%20for%20Long-Running%20Stateful%20Business%20Processes.pdf) in [papers/agents-and-engineering/](../papers/agents-and-engineering/).
- **If you're leading or scaling AI-native delivery** — read Meppiel's *The Agentic SDLC Handbook* for moving past the vibe-coding cliff (PROSE, dual path, 8-phase tool evaluation); pair with [no-vibe-coding.md](../cursor-claude-codex/product-management/no-vibe-coding.md) and [The New SDLC With Vibe Coding](../reports/The%20New%20SDLC%20With%20Vibe%20Coding.pdf) in [reports/](../reports/).
- **If the math in papers is the blocker** — *Mathematics for Computer Science* is the prerequisite refresher; for attention/Transformers specifically, see [*Understanding Transformers and Attention Mechanisms*](../papers/foundation-models/Understanding%20Transformers%20and%20Attention%20Mechanisms_%20An%20Introduction%20for%20Applied%20Mathematicians.pdf) in [papers/foundation-models/](../papers/foundation-models/); curated PDFs live in [papers/README.md](../papers/README.md).
- **If you need sharper algorithm implementation (graphs, DP, contest-style problem solving)** — read Laaksonen's *Competitive Programmer's Handbook* and practice on the [CSES Problem Set](https://cses.fi/problemset/); pairs with *Mathematics for Computer Science* for proofs and counting.
- **If you're training on NVIDIA GPUs** — read the *CUDA C++ Programming Guide* alongside the PyTorch notebooks in [research/](../research/).
- **If you're optimizing CPU-side C++ (hotspots, compilers, SIMD)** — start with Agner Fog's *Optimizing Software in C++*; use it next to the CUDA guide when splitting work between host and device.
- **If you're writing C++ on bare metal / embedded (no OS, limited STL)** — read Robenko's *Practical Guide to Bare Metal C++* for idioms that work without exceptions, RTTI, or dynamic allocation; pair with Fog when you later tune the same code on a hosted CPU.
- **If you're operating large-scale LLM/VLM training or inference** — use Stas Bekman's [*Machine Learning Engineering Open Book*](https://github.com/stas00/ml-engineering) (linked from [nice-projects/](../nice-projects/README.md#study-material-)) for cluster hardware, networking, SLURM, and debugging playbooks that sit above the CUDA API docs.

## Original sources

- Understanding Deep Learning — https://udlbook.github.io/udlbook/
- Mathematics for Computer Science — https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/
- Competitive Programmer's Handbook — https://cses.fi/book/ (CC BY-NC-SA 4.0; source at [pllk/cphb](https://github.com/pllk/cphb))
- Algorithms for Decision Making — https://algorithmsbook.com/
- The Hitchhiker's Guide to Agentic AI — https://arxiv.org/abs/2606.24937 (CC BY-SA 4.0; v1.2.2)
- The Agentic SDLC Handbook — https://danielmeppiel.github.io/agentic-sdlc-handbook/ (CC BY-NC-ND 4.0; pre-release edition)
- CUDA C++ Programming Guide — https://docs.nvidia.com/cuda/cuda-c-programming-guide/
- Optimizing Software in C++ — https://www.agner.org/optimize/ (manual #1 in Fog's optimization series)
- Practical Guide to Bare Metal C++ — https://arobenko.github.io/bare_metal_cpp/ (CC BY-NC-SA 4.0; source at [arobenko/bare_metal_cpp_src](https://github.com/arobenko/bare_metal_cpp_src))

Each PDF in this folder is the author's or publisher's freely distributed version. Please visit the official sites for the latest editions, errata, and supplementary material.

# Learning — Books and Textbooks

Curated textbooks and reference guides that ground the skills and notebooks elsewhere in this repo. All seven are freely available from their authors or publishers.

## What's here

| Book | Authors | Topics | Companion material |
|------|---------|--------|---------------------|
| [Understanding Deep Learning](UnderstandingDeepLearning_05_29_25_C.pdf) | Simon J.D. Prince | Supervised learning, deep networks, optimization, backpropagation, regularization, CNNs, ResNets, transformers, GNNs, GANs, normalizing flows, VAEs, diffusion, RL, ethics | [68 notebooks in `research/understanding-deep-learning/`](../research/understanding-deep-learning/) |
| [Mathematics for Computer Science](Mathematics%20for%20Computer%20Science.pdf) | Lehman, Leighton, Meyer (MIT) | Proofs, graph theory, counting, probability, number theory | MIT 6.042J course |
| [Algorithms for Decision Making](Algorithms%20for%20Decision%20Making.pdf) | Kochenderfer, Wheeler, Wray | Probabilistic reasoning, sequential problems, model uncertainty, state uncertainty, multi-agent systems | Stanford AA228 / CS238 |
| [The Hitchhiker's Guide to Agentic AI](Hitchhikers_Guide_to_Agentic_AI.pdf) | Haggai Roitman | Full agentic stack: transformers/GPU systems, SFT/LoRA/MoE, RLHF/DPO/GRPO, RAG & memory, harnesses, MCP/A2A, multi-agent topologies, evals, production | Pairs with [Algorithms for Decision Making](Algorithms%20for%20Decision%20Making.pdf) (decision theory), [cursor-claude-codex/references/agentic-patterns.md](../cursor-claude-codex/references/agentic-patterns.md), LLM tracks in [research/](../research/), and [reports/](../reports/) agent guides |
| [CUDA C++ Programming Guide](CUDA_C_Programming_Guide.pdf) | NVIDIA Corporation | GPU programming model, kernels, memory hierarchy, streams, cooperative groups, performance tuning | GPU tracks in [research/](../research/) (e.g. [llms-from-scratch](../research/llms-from-scratch/), [nanochat](../research/nanochat/), [autoresearch](../research/autoresearch/)) |
| [Optimizing Software in C++](Optimizing_Software_in_Cpp.pdf) | Agner Fog | CPU microarchitecture, hotspots, C++ construct costs, compiler optimizations, multithreading, SIMD/vectorization | Pairs with the *CUDA C++ Programming Guide* (CPU vs GPU performance); useful when tuning native kernels next to [research/](../research/) GPU tracks |
| [Practical Guide to Bare Metal C++](Practical_Guide_to_Bare_Metal_Cpp.pdf) | Alex Robenko | Embedded C++ without an OS: peripherals, interrupts, soft real-time, templates/metaprogramming under no-exceptions/no-RTTI constraints (ARM / Raspberry Pi examples) | Complements Fog (hosted C++ performance) and CUDA (device kernels); companion code in [embxx](https://github.com/arobenko/embxx) and [embxx_on_rpi](https://github.com/arobenko/embxx_on_rpi) |

## How to use this folder

- **If you're doing the notebooks in [research/understanding-deep-learning/](../research/understanding-deep-learning/)** — read the corresponding UDL chapter first.
- **If you're building agentic systems** — start with Roitman's *Hitchhiker's Guide to Agentic AI* for the end-to-end stack (foundations → harnesses → multi-agent → production); use *Algorithms for Decision Making* when you need the MDP/POMDP theory underneath; ship patterns via [cursor-claude-codex/references/agentic-patterns.md](../cursor-claude-codex/references/agentic-patterns.md); for graph/knowledge-graph orchestration, see the [Graph Engineering playbook](../reports/Graph_Engineering_Andrew_Ng_Playbook.pdf) in [reports/](../reports/).
- **If the math in papers is the blocker** — *Mathematics for Computer Science* is the prerequisite refresher; curated PDFs live in [papers/README.md](../papers/README.md).
- **If you're training on NVIDIA GPUs** — read the *CUDA C++ Programming Guide* alongside the PyTorch notebooks in [research/](../research/).
- **If you're optimizing CPU-side C++ (hotspots, compilers, SIMD)** — start with Agner Fog's *Optimizing Software in C++*; use it next to the CUDA guide when splitting work between host and device.
- **If you're writing C++ on bare metal / embedded (no OS, limited STL)** — read Robenko's *Practical Guide to Bare Metal C++* for idioms that work without exceptions, RTTI, or dynamic allocation; pair with Fog when you later tune the same code on a hosted CPU.
- **If you're operating large-scale LLM/VLM training or inference** — use Stas Bekman's [*Machine Learning Engineering Open Book*](https://github.com/stas00/ml-engineering) (linked from [nice-projects/](../nice-projects/README.md#study-material-)) for cluster hardware, networking, SLURM, and debugging playbooks that sit above the CUDA API docs.

## Original sources

- Understanding Deep Learning — https://udlbook.github.io/udlbook/
- Mathematics for Computer Science — https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/
- Algorithms for Decision Making — https://algorithmsbook.com/
- The Hitchhiker's Guide to Agentic AI — https://arxiv.org/abs/2606.24937 (CC BY-SA 4.0; v1.2.2)
- CUDA C++ Programming Guide — https://docs.nvidia.com/cuda/cuda-c-programming-guide/
- Optimizing Software in C++ — https://www.agner.org/optimize/ (manual #1 in Fog's optimization series)
- Practical Guide to Bare Metal C++ — https://arobenko.github.io/bare_metal_cpp/ (CC BY-NC-SA 4.0; source at [arobenko/bare_metal_cpp_src](https://github.com/arobenko/bare_metal_cpp_src))

Each PDF in this folder is the author's or publisher's freely distributed version. Please visit the official sites for the latest editions, errata, and supplementary material.

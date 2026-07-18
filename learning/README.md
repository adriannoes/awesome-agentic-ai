# Learning — Books and Textbooks

Curated textbooks and reference guides that ground the skills and notebooks elsewhere in this repo. All five are freely available from their authors or publishers.

## What's here

| Book | Authors | Topics | Companion material |
|------|---------|--------|---------------------|
| [Understanding Deep Learning](UnderstandingDeepLearning_05_29_25_C.pdf) | Simon J.D. Prince | Supervised learning, deep networks, optimization, backpropagation, regularization, CNNs, ResNets, transformers, GNNs, GANs, normalizing flows, VAEs, diffusion, RL, ethics | [68 notebooks in `research/understanding-deep-learning/`](../research/understanding-deep-learning/) |
| [Mathematics for Computer Science](Mathematics%20for%20Computer%20Science.pdf) | Lehman, Leighton, Meyer (MIT) | Proofs, graph theory, counting, probability, number theory | MIT 6.042J course |
| [Algorithms for Decision Making](Algorithms%20for%20Decision%20Making.pdf) | Kochenderfer, Wheeler, Wray | Probabilistic reasoning, sequential problems, model uncertainty, state uncertainty, multi-agent systems | Stanford AA228 / CS238 |
| [CUDA C++ Programming Guide](CUDA_C_Programming_Guide.pdf) | NVIDIA Corporation | GPU programming model, kernels, memory hierarchy, streams, cooperative groups, performance tuning | GPU tracks in [research/](../research/) (e.g. [llms-from-scratch](../research/llms-from-scratch/), [nanochat](../research/nanochat/), [autoresearch](../research/autoresearch/)) |
| [Optimizing Software in C++](Optimizing_Software_in_Cpp.pdf) | Agner Fog | CPU microarchitecture, hotspots, C++ construct costs, compiler optimizations, multithreading, SIMD/vectorization | Pairs with the *CUDA C++ Programming Guide* (CPU vs GPU performance); useful when tuning native kernels next to [research/](../research/) GPU tracks |

## How to use this folder

- **If you're doing the notebooks in [research/understanding-deep-learning/](../research/understanding-deep-learning/)** — read the corresponding UDL chapter first.
- **If you're building agents** — *Algorithms for Decision Making* is the canonical reference for MDPs, POMDPs, and multi-agent reasoning that underpins agentic systems.
- **If the math in papers is the blocker** — *Mathematics for Computer Science* is the prerequisite refresher; curated PDFs live in [papers/README.md](../papers/README.md).
- **If you're training on NVIDIA GPUs** — read the *CUDA C++ Programming Guide* alongside the PyTorch notebooks in [research/](../research/).
- **If you're optimizing CPU-side C++ (hotspots, compilers, SIMD)** — start with Agner Fog's *Optimizing Software in C++*; use it next to the CUDA guide when splitting work between host and device.
- **If you're operating large-scale LLM/VLM training or inference** — use Stas Bekman's [*Machine Learning Engineering Open Book*](https://github.com/stas00/ml-engineering) (linked from [nice-projects/](../nice-projects/README.md#study-material-)) for cluster hardware, networking, SLURM, and debugging playbooks that sit above the CUDA API docs.

## Original sources

- Understanding Deep Learning — https://udlbook.github.io/udlbook/
- Mathematics for Computer Science — https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/
- Algorithms for Decision Making — https://algorithmsbook.com/
- CUDA C++ Programming Guide — https://docs.nvidia.com/cuda/cuda-c-programming-guide/
- Optimizing Software in C++ — https://www.agner.org/optimize/ (manual #1 in Fog's optimization series)

Each PDF in this folder is the author's or publisher's freely distributed version. Please visit the official sites for the latest editions, errata, and supplementary material.

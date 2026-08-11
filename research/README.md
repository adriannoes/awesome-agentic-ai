# Research

This directory contains research notebooks, educational materials, and autonomous research setups from various open-source projects.

## Contents

### reasoning-from-scratch

**Source:** [rasbt/reasoning-from-scratch](https://github.com/rasbt/reasoning-from-scratch)

This repository contains the code for developing an LLM reasoning model and is the official code repository for the book [*Build a Reasoning Model (From Scratch)*](https://mng.bz/lZ5B).

**Notebooks:**
- `reasoning-from-scratch/01_main-chapter-code/ch02_main.ipynb` - Chapter 2 main code
- `reasoning-from-scratch/01_main-chapter-code/ch02_exercise-solutions.ipynb` - Chapter 2 exercise solutions
- `reasoning-from-scratch/01_main-chapter-code/ch03_main.ipynb` - Chapter 3 main code
- `reasoning-from-scratch/01_main-chapter-code/ch03_exercise-solutions.ipynb` - Chapter 3 exercise solutions
- `reasoning-from-scratch/01_main-chapter-code/ch04_main.ipynb` - Chapter 4 main code
- `reasoning-from-scratch/01_main-chapter-code/ch04_exercise-solutions.ipynb` - Chapter 4 exercise solutions
- `reasoning-from-scratch/01_main-chapter-code/ch05_main.ipynb` - Chapter 5 main code
- `reasoning-from-scratch/01_main-chapter-code/ch05_exercise-solutions.ipynb` - Chapter 5 exercise solutions
- `reasoning-from-scratch/01_main-chapter-code/chC_main.ipynb` - Appendix C main code
- `reasoning-from-scratch/01_main-chapter-code/chF_main.ipynb` - Appendix F main code

### llms-from-scratch

**Source:** [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) · **License:** Apache-2.0

Official code for the book [*Build a Large Language Model (From Scratch)*](https://manning.com/books/build-a-large-language-model-from-scratch) by Sebastian Raschka. Step-by-step PyTorch notebooks implementing a ChatGPT-like LLM from scratch — text data → attention → GPT model → pretraining → finetuning (classification + instruction-following) → LoRA (appendix-E). **66 notebooks** across ch02–ch07 + appendix-A/D/E, plus bonus sections (gpt-to-llama, qwen3, muon optimizer). The from-scratch prequel to `reasoning-from-scratch` and the full-pipeline companion to `nanochat`. For a visual map of major LLM architectures (same author), see [rasbt/llm-architecture-gallery](https://github.com/rasbt/llm-architecture-gallery) in [nice-projects/](../nice-projects/README.md#research--papers).

**Notebooks:** See [llms-from-scratch/README.md](llms-from-scratch/README.md) for the chapter/bonus table and the upstream README.

### smol-course

**Source:** [huggingface/smol-course](https://github.com/huggingface/smol-course) · **License:** Apache-2.0

A practical Hugging Face course on **aligning small language models** that runs on most local machines (built around SmolLM3 / SmolVLM2). Eight v1 modules cover the gaps the hub was missing: instruction tuning, preference alignment (DPO/ORPO), parameter-efficient finetuning (LoRA/prompt tuning), evaluation (benchmarks + custom domain), vision-language models, synthetic datasets, inference, and agents. **12 notebooks** + module/unit markdown guides. English-only subset (upstream also ships ES/JA/KO/PT-BR/VI translations).

**Notebooks:** See [smol-course/README.md](smol-course/README.md) for the v1 module table and v2 units.

### nanochat

**Source:** [karpathy/nanochat](https://github.com/karpathy/nanochat)

A full-stack implementation of an LLM like ChatGPT in a single, clean, minimal, hackable, dependency-lite codebase. Designed to run on a single 8XH100 node, including tokenization, pretraining, finetuning, evaluation, inference, and web serving.

**Notebooks:**
- `nanochat/dev/estimate_gpt3_core.ipynb` - GPT-3 core estimation analysis
- `nanochat/dev/scaling_analysis.ipynb` - Scaling analysis notebook

### autoresearch

**Source:** [karpathy/autoresearch](https://github.com/karpathy/autoresearch)

AI agents running research on single-GPU nanochat training automatically. An agent is given a small but real LLM training setup and experiments autonomously: it modifies the code, trains for a fixed 5-minute budget, checks if the result improved (validation bits per byte), keeps or discards, and repeats. The human configures the agent via `program.md` (lightweight “skill” / instructions); the agent only edits `train.py` (model, optimizer, training loop). Self-contained: one GPU, one editable file, one metric.

Key files are mirrored in this repo under `research/autoresearch/` for local use.

**Key files:**
- `autoresearch/README.md` - Local mirror overview and quick start
- `autoresearch/program.md` - Agent instructions (human-edited)
- `autoresearch/train.py` - Model, optimizer, training loop (agent-edited)
- `autoresearch/prepare.py` - Data prep and runtime utilities (fixed, do not modify)
- `autoresearch/pyproject.toml` - Dependencies (uv)
- `autoresearch/analysis.ipynb` - Analyze `results.tsv` and plot progress

### nlp-with-transformers

**Source:** [nlp-with-transformers/notebooks](https://github.com/nlp-with-transformers/notebooks)

Companion notebooks for the book "Natural Language Processing with Transformers". Practical examples covering classification, NER, text generation, summarization, question answering, and more.

**Notebooks:**
- `nlp-with-transformers/01_introduction.ipynb` - Introduction to transformers
- `nlp-with-transformers/02_classification.ipynb` - Text classification
- `nlp-with-transformers/03_transformer-anatomy.ipynb` - Transformer architecture deep dive
- `nlp-with-transformers/04_multilingual-ner.ipynb` - Multilingual named entity recognition
- `nlp-with-transformers/05_text-generation.ipynb` - Text generation with transformers
- `nlp-with-transformers/06_summarization.ipynb` - Text summarization
- `nlp-with-transformers/07_question-answering.ipynb` - Question answering
- `nlp-with-transformers/07_question_answering_v2.ipynb` - Question answering (v2)
- `nlp-with-transformers/08_model-compression.ipynb` - Model compression techniques
- `nlp-with-transformers/09_few-to-no-labels.ipynb` - Few-shot and zero-shot learning
- `nlp-with-transformers/10_transformers-from-scratch.ipynb` - Building transformers from scratch
- `nlp-with-transformers/11_future-directions.ipynb` - Future directions in NLP
- `nlp-with-transformers/SageMaker/01_introduction.ipynb` - SageMaker introduction
- `nlp-with-transformers/SageMaker/02_classification.ipynb` - SageMaker classification

### nn-zero-to-hero

**Source:** [karpathy/nn-zero-to-hero](https://github.com/karpathy/nn-zero-to-hero)

Neural Networks: Zero to Hero - A course on neural networks from scratch. Learn how neural networks work by building them from the ground up.

**Notebooks:**
- `nn-zero-to-hero/lectures/makemore/makemore_part1_bigrams.ipynb` - Bigram language model
- `nn-zero-to-hero/lectures/makemore/makemore_part2_mlp.ipynb` - Multi-layer perceptron
- `nn-zero-to-hero/lectures/makemore/makemore_part3_bn.ipynb` - Batch normalization
- `nn-zero-to-hero/lectures/makemore/makemore_part4_backprop.ipynb` - Backpropagation
- `nn-zero-to-hero/lectures/makemore/makemore_part5_cnn1.ipynb` - Convolutional neural networks
- `nn-zero-to-hero/lectures/micrograd/micrograd_lecture_first_half_roughly.ipynb` - Micrograd first half
- `nn-zero-to-hero/lectures/micrograd/micrograd_lecture_second_half_roughly.ipynb` - Micrograd second half

### ML-Notebooks

**Source:** [dair-ai/ML-Notebooks](https://github.com/dair-ai/ML-Notebooks)

Minimal and clean examples of machine learning algorithms and implementations. Well-organized notebooks covering fundamental ML concepts from linear regression to neural networks.

**Notebooks:**
- `ML-Notebooks/notebooks/linear_regression.ipynb` - Linear regression
- `ML-Notebooks/notebooks/logistic_regression.ipynb` - Logistic regression
- `ML-Notebooks/notebooks/concise_log_reg.ipynb` - Concise logistic regression
- `ML-Notebooks/notebooks/first_nn.ipynb` - First neural network
- `ML-Notebooks/notebooks/nn_from_scratch.ipynb` - Neural network from scratch
- `ML-Notebooks/notebooks/bow.ipynb` - Bag of words
- `ML-Notebooks/notebooks/bow-dataloader.ipynb` - Bag of words with dataloader
- `ML-Notebooks/notebooks/cbow.ipynb` - Continuous bag of words
- `ML-Notebooks/notebooks/deep_cbow.ipynb` - Deep continuous bag of words
- `ML-Notebooks/notebooks/loglin-lm.ipynb` - Log-linear language model
- `ML-Notebooks/notebooks/loglin-lm-dataloader.ipynb` - Log-linear language model with dataloader
- `ML-Notebooks/notebooks/nn-lm.ipynb` - Neural network language model
- `ML-Notebooks/notebooks/nn-lm-batch.ipynb` - Neural network language model with batching
- `ML-Notebooks/notebooks/comp_graphs.ipynb` - Computational graphs
- `ML-Notebooks/notebooks/intro_gnn.ipynb` - Introduction to graph neural networks
- `ML-Notebooks/notebooks/pytorch_hello_world.ipynb` - PyTorch hello world
- `ML-Notebooks/notebooks/pytorch_gentle_intro.ipynb` - PyTorch gentle introduction
- `ML-Notebooks/notebooks/maths/algebra.ipynb` - Linear algebra fundamentals
- `ML-Notebooks/notebooks/maths/mean.ipynb` - Mean calculation
- `ML-Notebooks/notebooks/maths/feature-scaling.ipynb` - Feature scaling

### understanding-deep-learning

**Source:** [udlbook/udlbook](https://github.com/udlbook/udlbook)

Companion notebooks and book PDF for **"Understanding Deep Learning"** by Simon J.D. Prince. This directory contains a comprehensive collection of 68 Jupyter notebooks that accompany the book, covering deep learning from fundamentals to advanced topics.

**Content:**
- **68 notebooks** organized by chapter (Chapters 1-21)
- **Book PDF:** `UnderstandingDeepLearning_05_29_25_C.pdf` (21MB)
- Topics include: background mathematics, supervised learning, shallow and deep networks, loss functions, optimization, backpropagation, generalization, regularization, convolutional networks, residual networks, transformers, graph neural networks, GANs, normalizing flows, variational autoencoders, diffusion models, reinforcement learning, and ethics/explainability
- Each notebook provides hands-on code examples and practical implementations of concepts from the book

**Notebooks:** See [understanding-deep-learning/README.md](understanding-deep-learning/README.md) for the complete list of all 68 notebooks organized by chapter.

### Deepseek OCR

**Notebook:**
- `Deepseek_OCR_(3B).ipynb` - Deepseek OCR model notebook (3B parameters)

## Related learning materials

GPU-oriented tracks (`llms-from-scratch`, `nanochat`, `autoresearch`, `smol-course`) assume NVIDIA hardware for training. The canonical API reference is the [CUDA C++ Programming Guide](../learning/CUDA_C_Programming_Guide.pdf) in [learning/](../learning/) — see [learning/README.md](../learning/README.md) for how it fits with the other textbooks. For the end-to-end agentic stack (transformers → alignment → harnesses → multi-agent), see Roitman's [Hitchhiker's Guide to Agentic AI](../learning/Hitchhikers_Guide_to_Agentic_AI.pdf). For AI-native delivery process (spec-driven SDLC, tool evaluation), see Meppiel's [Agentic SDLC Handbook](../learning/The_Agentic_SDLC_Handbook.pdf). For CPU-side C++ performance (hotspots, compilers, SIMD), pair it with Agner Fog's [Optimizing Software in C++](../learning/Optimizing_Software_in_Cpp.pdf). For C++ without an OS (embedded / bare metal, no exceptions/RTTI), see Robenko's [Practical Guide to Bare Metal C++](../learning/Practical_Guide_to_Bare_Metal_Cpp.pdf). For cluster-scale training/inference ops (accelerators, storage, networking, SLURM, debugging), see Stas Bekman's [*Machine Learning Engineering Open Book*](https://github.com/stas00/ml-engineering) in [nice-projects/](../nice-projects/README.md#study-material-).

---

*This content was automatically fetched from the original repositories. For the most up-to-date versions, please refer to the source repositories.*

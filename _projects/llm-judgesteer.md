---
title: "LLM-as-Judge on a Budget"
collection: projects
category: research
permalink: /projects/llm-judgesteer
excerpt: 'Variance-adaptive query allocation for LLM-as-a-judge evaluation — AISTATS 2026 (with Adobe Research).'
date: 2026-02-01
techstack: 'Python, PyTorch, Multi-Armed Bandits, LLM Evaluation'
codeurl: 'https://github.com/Swagget/LLM-judgesteer'
---

LLM judges are stochastic — the same prompt-response pair scores differently across queries, so uniform sampling wastes budget on low-variance pairs. We model each pair as a bandit arm, estimate variance online, and concentrate queries where uncertainty is highest.

Algorithms ROBIN and ROBIN-HOOD provably minimize worst-case estimation error under a fixed budget. Experiments on Summarize-From-Feedback and HelpSteer2 show substantial error reduction over uniform baselines at equal cost.

Published at **AISTATS 2026** in collaboration with Adobe Research (Dr. Branislav Kveton) and Prof. Aadirupa Saha.

[[arXiv]](https://arxiv.org/abs/2602.15481) · [[PDF]](/files/LLM-as-a-Judge-on-a-Budget.pdf) · [[Code]](https://github.com/Swagget/LLM-judgesteer)

---
title: "LLM-as-Judge on a Budget"
collection: publications
category: conferences
permalink: /publication/2026-02-llm-judge-budget
excerpt: 'This paper formulates LLM-as-a-judge evaluation as a variance-adaptive resource allocation problem, using multi-armed bandits to minimize estimation error under a fixed budget.'
date: 2026-02-01
venue: 'AISTATS 2026'
paperurl: 'https://aniketwagde.com/files/LLM-as-a-Judge-on-a-Budget.pdf'
citation: 'Saha, A., Wagde, A., Kveton, B., LLM-as-Judge on a Budget. arXiv preprint arXiv:2602.15481 (2026).'
header:
  teaser: 'publications/aistats-2026-teaser.png'
---

Saha, A., **Wagde, A.**, Kveton, B.
**AISTATS 2026** (with Adobe Research)

[[arXiv]](https://arxiv.org/abs/2602.15481) · [[PDF]](/files/LLM-as-a-Judge-on-a-Budget.pdf) · [[Code]](https://github.com/Swagget/LLM-judgesteer)

LLM judges are stochastic — querying the same prompt-response pair multiple times yields different scores, so naive uniform sampling wastes budget on low-variance pairs. We frame evaluation as a best-arm identification problem: model each prompt-response pair as a bandit arm, estimate per-pair score variance online, and adaptively concentrate queries where uncertainty is highest. Our algorithms ROBIN and ROBIN-HOOD provably minimize worst-case estimation error under a fixed query budget, with error bounds scaling with the sum of variances. Experiments on Summarize-From-Feedback and HelpSteer2 show substantial error reduction over uniform baselines at equal cost.

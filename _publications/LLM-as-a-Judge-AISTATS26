---
title: "LLM-as-Judge on a Budget"
collection: publications
category: conferences
permalink: /publication/2026-02-llm-judge-budget
excerpt: 'This paper formulates LLM-as-a-judge evaluation as a variance-adaptive resource allocation problem, using multi-armed bandits to minimize estimation error under a fixed budget.'
date: 02-2026
venue: 'AISTATS 26'
#slidesurl: ''
paperurl: 'https://aniketwagde.com/files/LLM-as-a-Judge-on-a-Budget.pdf'
#bibtexurl: ''

citation: 'Saha, A., Wagde, A., Kveton, B., LLM-as-Judge on a Budget. arXiv preprint arXiv:2602.15481 (2026).'
---
This research addresses the resource allocation challenge in "LLM-as-a-judge" systems, where large language models are used to score prompt-response pairs. Because LLM judgments are inherently stochastic, practitioners must query pairs multiple times to get an accurate score. Previous approaches typically used uniform allocation, which is inefficient because it treats stable factual queries (low variance) the same as subjective ones (high variance).

In this approach, we model the evaluation process as a multi-armed bandit problem where the goal is to minimize the worst-case estimation error of scores given a fixed total budget. We introduce a variance-adaptive strategy (implemented as algorithms ROBIN and ROBIN-HOOD) that dynamically allocates more queries to prompt-response pairs with higher estimated score variances, effectively concentrating resources where uncertainty is highest.

We finally demonstrate that this method significantly outperforms uniform allocation baselines. Theoretical analysis confirms our algorithm achieves near-optimal budget allocation with a worst-case error bound dependent on the sum of variances. content-wise, experiments on benchmarks like Summarize-From-Feedback and HelpSteer2 show that our approach reduces estimation error while maintaining the same computational budget.

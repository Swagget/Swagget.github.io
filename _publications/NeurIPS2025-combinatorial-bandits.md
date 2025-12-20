---
title: "Efficient Algorithms for Combinatorial-Bandits with Monotonicity"
collection: publications
category: conferences
permalink: /publication/2024-01-bug-detection-paper
excerpt: 'This paper describes a technique to reduce combinatorial-bandit problems to bandits with pairwise preferences and solve them efficiently.'
date: 12-2025   
venue: 'OPT 2025: Optimization for Machine Learning, NeurIPS 2025 Workshop'
#slidesurl: 'https://aniketwagde.com/files/rl-bug-paper.pdf'
paperurl: 'https://aniketwagde.com/files/NeurIPS2025-combinatorial-bandits.pdf'
#bibtexurl: 'https://academicpages.github.io/files/bibtex1.bib'

citation: 'Wagde, A., Saha, A., Efficient Algorithms for Combinatorial-Bandits with Monotonicity. NeurIPS OPTML (2025). https://openreview.net/forum?id=D3drIoEW5B'
---
This research introduces a new perspective to solving combinatoriarl bandit problems, with feedback provided from an unknown reward aggregation function. Previous approaches made strong assumptions on the structure of the reward function and had intractible sample complexities. 

In this approach we are able to compare two arms directly by examining the rewards from sets including those arms, while randomizing over the other arms. This approach lets us compare two arms individually and get a pairwise preference over the arms.

We finally solved the combinatorial bandit problem by adapting an existing algorithm for pairwise preferences using our technique to solve the combinatorial bandit problem.


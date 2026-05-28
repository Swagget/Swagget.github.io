---
title: "Combinatorial Bandits with Monotonic Aggregation"
collection: projects
category: research
permalink: /projects/combinatorial-bandits
excerpt: "In combinatorial bandits, a learner picks a subset of arms each round and observes a reward aggregated by an unknown function. Prior work required strong structural assumptions (e.g., linearity) on the aggregator,…"
date: 2025-12-10
techstack: "Theoretical ML, Math"
source: notion
---

In combinatorial bandits, a learner picks a subset of arms each round and observes a reward aggregated by an unknown function. Prior work required strong structural assumptions (e.g., linearity) on the aggregator, leading to intractable sample complexities in the general case.


We show that under monotonicity alone, two arms can be compared by randomizing over the remaining arms in the chosen set — isolating a pairwise signal from combinatorial feedback. This lets us plug in any pairwise-preference bandit algorithm, matching state-of-the-art sample complexity while dropping restrictive assumptions.


Published at the **NeurIPS 2025 OPT Workshop** with Prof. Aadirupa Saha.


[OpenReview](https://openreview.net/forum?id=D3drIoEW5B) | [PDF](https://www.aniketwagde.com/files/NeurIPS2025-combinatorial-bandits.pdf)


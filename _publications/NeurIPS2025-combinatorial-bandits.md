---
title: "Efficient Algorithms for Combinatorial-Bandits with Monotonicity"
collection: publications
category: conferences
permalink: /publication/2025-12-combinatorial-bandits
excerpt: 'This paper describes a technique to reduce combinatorial-bandit problems to bandits with pairwise preferences and solve them efficiently.'
date: 2025-12-01
venue: 'NeurIPS 2025 OPT Workshop'
paperurl: 'https://aniketwagde.com/files/NeurIPS2025-combinatorial-bandits.pdf'
citation: 'Wagde, A., Saha, A., Efficient Algorithms for Combinatorial-Bandits with Monotonicity. NeurIPS OPTML (2025). https://openreview.net/forum?id=D3drIoEW5B'
header:
  teaser: 'publications/neurips-2025-opt-teaser.png'
---

**Wagde, A.**, Saha, A.
**NeurIPS 2025 OPT Workshop**

[[OpenReview]](https://openreview.net/forum?id=D3drIoEW5B) · [[PDF]](/files/NeurIPS2025-combinatorial-bandits.pdf)

In combinatorial bandits, a learner picks a subset of arms each round and observes a reward aggregated by an unknown function — prior work required strong structural assumptions (e.g., linearity) on that aggregator, leading to intractable sample complexities in the general case. We show that under monotonicity alone, two arms can be compared by randomizing over the remaining arms in the chosen set, effectively isolating a pairwise signal from combinatorial feedback. This reduction lets us plug in any pairwise-preference bandit algorithm, matching state-of-the-art sample complexity while dropping the restrictive aggregation assumptions that made previous approaches brittle.


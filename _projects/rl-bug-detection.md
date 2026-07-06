---
title: "Reinforcement learning research paper"
collection: projects
category: research
permalink: /projects/rl-bug-detection
excerpt: "Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs."
date: 2022-01-01
techstack: "Reinforcement Learning, Deep Learning, Fun!"
source: notion
---

Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs.


The idea was that reinforcement learning could also be used to understand game environments and detect when they were behaving erratically.


For this I tracked the gradients of the last layer of the neural network and observed them when bugs were thrown into the system.


It was observed that when a bug was in the system the gradients shot up massively, and this could be used to help with video game testing by flagging situations where bugs are detectable.


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6IU76I%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T225402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8VsBHRl2CX%2F9x283hOYbnPJLTuyFTEOrWg03ziB8mmgIgcufg87w5OQ7BQ05frDS%2B7VrJdOShMYIKj0bV4WUZqI0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDAhROpQ6iZxbTitxZCrcA0p%2FheDM13nqgD35i5qeYBoXiz2gQVaJJDuXYebqPU3AfNzJqe1PIMKCwaujNo5Z1CLZhLAM3uZdKEAV%2BN7TsHeAtmd%2BY1UyQD3jEsSTh%2BiIIOMSGxU6UfC%2Bs2QmZJYmosCwanuaZ5x6igWhiRlHGiDLQfkyyBkAkgGDz%2F4LO015YEhItBfAwJ1P2Sou3sKHmXDbwgTTFkjc4I%2FtBzvmcXFk4zORKTPt4krh4HK3G%2B0n%2BcRNBHu8PonYhnarFMabs9JFylWngsNADHG8szC8BBTvGf9MoAeukhBREgFMieTtJ8nSqLZZlqGveZ6bKnUQ8ytAzTLHy3cFfKx%2F%2BtE1e9oc2GBpetzQLceiznh3BCJJAKxc9FGSQnAfr5Rxa8e0skyGGNqBi6NNLlB6tFRW4zde95jFp95nlghWM%2BeFx8zV9jQZ2oeI0mRfTbr8Pq25F5amTiQIpQioK7N3n22%2BRX2gHxo%2BNBMzKvHyeDINb3ZXNrC1gu1ApgBhDx01NoNUga15fhcof4dojcAqr2fMwEXkicdzeP2mhI0RIdjFX47AnHeY5JahEhrRrHTrfJyJcRjtJScwrnjRB9v1%2BqocLiIU3ytxZ3uYnPnweryxcxggPriPRfa0VGMASfzGMIavsNIGOqUB%2F4rCKjNWxYJQIsj7G6vNQD3SavpEJ6BqzWCDrVNzf9DVPa43UJSis%2Fupn7VdRJyXozXAzFz4TDiP5swybOIfbTiuQ1coGEc%2BZFiAb%2BkQo0MiHoSnxBODsLbjA83z7TDfTiGJkV9ZRlq3MWnWnLB%2BFBAUYkzXVFesD5Ho78Kxm2hHLZBq8MVpg7ho%2F3OtCYd5%2BxyXZqVmrFacrGi%2FDMz6NTXhZZM1&X-Amz-Signature=e9495f43bffc86ca47b3fe0bdb46f3986236e4bcdca7d1b2878806713f183baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


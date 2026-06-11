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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REU75CGR%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T000632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGd7n5Z83GuHfKdJqHv11VO87GTxs%2BDADlAbu8GtaFjeAiEApDeeIC7LJdtVTgsZ1LhHisAEAavzTCpIDe%2F5UhHPKw8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaPArowlrTj9Yc4bSrcAwb4RwK6y8qnWtT%2FqkV6%2Fnnb5p5VHOkV%2F3XdotvReC%2FnOe5QDnqH8CyQIFHbhuVD5zxxMlGuPy1TntRlbNC9Mct4E2mcmii6yM6JKQOpIJ7ziOVZebfSo%2FrLp5xjDrURM6QcFPyx1NT26L44Z4WfnzuHSr3Ow9PeEhydGu3sMqiKLi2NUMI694ylNGO9v%2BukqXK2YQbw6wrMno2k4g754azyNJA9xgflBtrYzqVu2dEvQ%2Fl8NnoBpbs4IH6%2Fha0T5MYFo67KTgrdZeKYbe%2FArhoxFqaVOA0RTULqu2yXCx8T%2BPFVHtsr4362mvSEvgCzRgH%2FnfMsa1z62NI0BWxohjJ5Pv5lZYBabEsZUVkOZhkbxgxsCHBmLG9LnE9I%2FmVuDtgpt%2BQie6HaLLhBUqAs6nEwepdEFa7W%2ByC2ywq5uSl8QQH%2BGkXuBmbQY%2F1sm8GjrKXIMtbcOzQnDH3P2OVhwVwlB%2FpDANRY9IsBQ0zO5f5g0oZw9VGg94SQFA37rgKpzDVvmRFh%2FziJ90ESTsdpFBcwxQNN%2B67LlUoDHgs603vuZvIcw9vX1X2uRBlx9g%2FE6TqOYzmUJv%2BhDaaG%2BVyBOR6FaI9jDi%2F4Ni3h6wzjjTxXoUKrCFYLcbHa%2FLW3MKnEp9EGOqUBzpib7JsjBPFoA74PJVp1ybbbn7jesW0pGmTaF4tLnmMnu9dcq5nbZh4CqTbg9kgRr8TRlFL3uiXtwqPXr1%2BLnZ3g7XQJyUaAcndc8wx577co%2B0NiBfoytbgkqQSDaR2RANV2OUgRrD1BPgMkEi1oL42nDqXb7oT%2BELNZFo7N1DZiiBNBvMIU4rH3XbQfKN4YCuflE%2FeMkPo3wK3Cp7PnXWqlA9%2F5&X-Amz-Signature=c8ea745ab5be501b8971123b8df57c16b78dfbc8941939797646b6f91b813344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


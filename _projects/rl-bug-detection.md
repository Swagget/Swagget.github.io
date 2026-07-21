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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7MN5YQ%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T224207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE085eE11SB1VwrZq0oWIEOR3KhDpy2UgSfTEBmhZHkEAiEAhuA%2BILvhT%2ByYM%2F%2B%2BVCdt4uFJSGNWzKRvbIHwbg8U7R0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHtWE%2FdIfthEzqkjircA4jtuNKZx4ofcRx18x7%2FYGGacRH7HE7MgLMU%2F0DGrtPebi8fJE1I1pqpLehansWqnEIIwVsFN3KyUaqL6I9H1q5HoXo5yk6Tjp08jD690%2BvDPcURx%2FXP5q%2F1u%2Fl952docjGOUDI1EzynGJwCbNc2TcjdY%2FvVMoTQu8xY4RYOw%2F5U%2FFqCrYyMPVbioeT4lV%2FTSvuMmPlLNB13ySm8R%2F333F2Iv%2FFdEMLwgRO1Ah2Dzo79BDJ3UP9LXnAo9FCOh9EBpQkBbccqSPBwOcPlLL839zJx46%2FCrtDqosy%2BHRTLhM3B%2BkKmMECkKnvxjOQUZMKfJ2T2AjRQMLu1TDr3DT3K3bBlqO5x3xooK4Z4d0s%2BAuunBF6SfnFqgEY%2BLl6MmYAuTabPrRQpIByeJ%2FykwJdPuRVBD4%2Bgiv9to6PMpZ6uq5vITaivGRe%2FS90esRliIe67MUaVNlit2KyYXv4z2BgQtVkdH1f4bH%2B83UEemeFP7H7rSu1m4osOsp4%2FopjfY2qod1ktJHKUnwuNgy7XrY19nVMGZ14OTYwwQJrTD6Djz6iFIrbVFQIbzEPSGbAkS8g1hU%2BzXE9%2FN8AYkwhsJnAz8Md%2BI5WIImW9CRP7b%2FVcsUIYaNLShcmg%2BEJlYE57MNS5%2F9IGOqUBgUQsEex1ea8lh3BdE81u488tqQrAxHT5WeC3MDE5o2Q%2Bv%2FHJtID89tpZmuai5KwLkq0FGXnFj1%2BC9p5wZEFnLgq6Ls2Qp0aW2MSBNm6Z%2BbIg3apHaiyt8X6%2BkQb%2F2RzmsCd0N68m4RWyCCIJYxKlEhd%2FuhGJWLIphISShcsnZ1vGlwCuqe%2FZB9F4U3x5dQgXU80H7OaDGZT10ppEgkDzpRS15Bra&X-Amz-Signature=1995c9e436a15102e2ddf19fa6c3dbedabf829a41c78fa58238da71d8e70191c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHB6B5D%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T074238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8RlBkVN9iWin8a8zHzl4ZX7zClISnUbZK2dqxipcPTAiEAjt8zKwhxTyBNGwN0ESi9CX067dgWg1JO%2BJmUwQfe1hgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKw04Y9upxohwKmmoircAyUDjmBGxTFhw4x4s%2FXRRSOsvHEn0xpj8hz1PXViWTYKGcI2XE69o%2BGOowZQCSRdKPVpadfctiMk2oGwlqVW4PojQ9mK0ahtughM5gNXH2f5E8gErDAnR1HGhRPJiNgJSq6ZkCiIFCe79BUWMzPeYVwerej82oluqWd6VsGnFrjD0WhBAz075GzX0mydUs8%2BfeL9Rt61SiZMFgPuc2e2jRt5zl83YqLmfDuETp6dG871dlwpzFBjShMSz911PlF0chSh%2FW%2FSCG0OtWC8F6p0AG1bX0n%2BAt9m4zN23Mrzzrs9o78R5yYFOfLXMvAj9iucw3nXqr2qtZaRd1iw5sMk%2BT5m1Z3NEFuNSiVN3rQ5gBh395PGnkqS4fLBPQ25ei8IjIRwq7yL0uKIBhNMAjTepN0DsZ1qaYejZ98VxGKIZxXVHtl8Z5tD0Yj9Dz%2FJ6TbIRbiJaNYmQssTAGFFyKZQ76rxOhSk4PLtnUvaCKP6O6yRRxjL2KWv0Bfzrh9phQsQuNELTVJMqJA%2FyPvDrtJn06WO%2BAGAn4xqOct0x771oZAsJ49d5ulHUI7xvpmj8TkA30lu1gklvIeRCkk5TAK4Hd%2FONZZrFEDHCqUsgxpzGD1ejg%2B5PAGbjvoq8QfWMNTy39MGOqUB%2F41quamDEo6Z9SSW8sI5S3KBpZiHkYbMjF%2BgMNn0InA4spD8cVJM5xxV0VG1uJ15cJpxdIdluEWxkmeUKyzoyzjhSP4ScQ4rTZHCUs3aNHCqvA8rudNlyRrr%2BnFTojLIBvQHnNnSA8vSa4q57rvhAka2PzeCnkBV6FKfFSVAJOtWj3pnx%2BCKqLulYzCq8LwPjZMUHyBsJSlxCJdTS3CFHZ7fcDG6&X-Amz-Signature=aa8ff99c6386cf264cacce67a8d2c03d822844d008a9101f1a06e7c2dc777610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


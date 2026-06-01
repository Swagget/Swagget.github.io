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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3WREHI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T081928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEYxDZiPsmMRQwGVZTSCVvZ8EL4TDDAH%2FsiGIyyXGzr2AiB3Msa7HT3YisjeEdVWZzzCT86irnLw2eejfXz41%2BlJpSr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMss9IOaqFn0%2FmyEdnKtwDh%2B9i9TiM6gqhJExPxe02d%2FT0dpXI9lF6%2FbVUBVwBatMIk7CZbx9120THDfAyeddquCpJETTgmbLHdTonpZp%2FQs2Z9meLtd%2FdoY3stYfTHJxZFLpCaW0RzD%2Fz99vCkZh7g7OuzoSLjcauD1q6uhucAaJAnhj%2BY2tjbohAxA4leH0C2hy7QP643KsNheTauEqw80a6SZ1T3yUBU75uxk2%2B1BjScG%2BVV5IyYXeEcpJP6xk3AHQaq5VCJVrlo3PLUKsXN2JcBdVDWiKDj0x3tw5XM%2FJ8%2BC%2BGEOj5oJBYNqGNzNOh6dQ4uSJZrqB4EEsLhTbtrBoK8hLEdYnEsNRZdt0HcUUbgu3uAEKvJLP8xBt4sIT5y116%2BASGAw52WnjubpE62VpLzloC%2Fjtr0fheAjew7JM%2FUGgd%2Bi6GHA7D1H0R33Lnc5RUr%2Fl6SiWE2Yzj6abs8Fp9B2%2BLjkCcbiG90w46OZoTMDXnwWtM%2BrKCPpxxCMeCD0BkdJTiqG6W%2Fyc6BFCjQ0SYf4zyQU%2FkpDO07pbLIzOAqiZanMis%2FUMg3R8A9%2BEber00Z0PMWL4aBDvaT1%2Bv5VgvlzdFP6M4gY2rXcVUuIAzPvGfgxt%2FWfKavYvnDE7hPbOHEuXTYbfYniAwoP700AY6pgEzegw9zNYtQKyyGkKmTLuSZCCYiEYDTMT8%2Fq8W6KHeeTQvRjcyNH84wfo6z3WaAC8IG9zZ2RZvLfGqPHmhm%2F5wPDTsb6VRdKVIUDx5Qv%2F14d7pYtFEWh3A63KqIUDIbg5lw%2FH99O%2FARZ5qOMZs6CJms51scvopQPnaGot5aPx6gBKbwl1FkOQhQE6ZwVmBm8%2FzoddN27lw0NCHI6YqdC%2FR4OLrlZ89&X-Amz-Signature=17a9f8b75949bd30d3b9bf28947156214c676802411e091c56783066d81cdd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


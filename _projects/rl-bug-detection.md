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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDTOAU%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T180609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDifuMpXraG1xMBxVOrGdHZXm8axO0aRN3zrxfYkSkMIAiAVZ2HK0MQGQTUjqKU7RdjaKM95EsbRL7MipVp8X%2FSfNiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlbgepc6cxW14da1aKtwDX2gzQa3y%2B%2FftciaT6JbWai8Z1ib2NNQIYkFw96TnZVyu4EncDPOFi%2BO6mUd6qkhpm9Uzl%2Bh1%2B0s1AmdICxWigty3Mhvh%2FXhqUppehvhS0d0jpKtfO8QUYeOCSkAoNaPk7hcHLLD%2B4XxfT6zs3gk39MAQA64ZaaQAKGNfjouzwpq4QsqJoGWH1pLeOp8dT8jhCSO%2Fo97pvLOWRJvuVmWIYVqM2gavBk3Dz8okD%2BKyOrPbzMD20Bw9IlTHR%2FyTVmBZ3BC%2BRP6A7yFAkY8grsQ3xsSkVSgyt0xTlpjwoC4WN6lB9KtOxNyuJoXGD9cBaxspuqJmDxwGxLHM0PMbDq8GXzjgRJJ6vBaLtUbRJcGz3%2B%2Furq7WTgzMILK4EPr2A2ITFwEysxCsZo2H3T4dPdLs4zS0%2FSMyIu28D7jSHGSf5A0HwqWXcetoxgfaTEwCcdo03YdvAHll8Q2mWgsQZq4oEBOiJcDmsTmK3UQvoQCrNLxKbrIh4xWy20H%2FZn9CtvFGmA9wGryUX6qr6XtiGpcWazH8OIBohNrmY5Xrq2qr0ZBZKpj%2FnG4Xl9gLnZc34AuY4RNVIi7%2Bd6BldPRR%2FPuLobgczbNs2TKZ0oXCXguhaurIYohDFald8pEl%2FTowqKn%2B0gY6pgHIpnu7BID6joQKEqV68jwmLuZsVQGo%2Bwpjo8bIkVQzxYIIZRRVKayb2NDU3nPFGizH70R0P2V%2FnIsw8TOcfrkP3TbVPhQakzqA802CPiXHI%2Ba2gfCQZnj%2FBlQTcJC0Mc8O0apBA2XeAtzoAuX953vM5MaVRJBPgrOowoaLENq94yjSLd8nFBDVTmPF8AiauBqmQ5TzJzEw8MbyGk0fgBA6J1rlqM9t&X-Amz-Signature=6e282e59f1494af54183c770d1e47f15524d281bd511866560a98be090fa3c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


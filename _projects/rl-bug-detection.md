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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQZMGL5%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T204847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIEopEATIqvIAURZ4jsdYj4MELLMfh4WDIR0ICXfa9pykAiEAstjYGmAmXlYhprHoGNLH1MQ4cqrthPv6teUh3xu3cMUqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSIXdNuFeLmMCSIyircA2r8tWztfrK1e%2BDQ6V80F2JKHh4c9gxUQoSpEKJvfqpqEsbLgHNhN77g8Uy%2FcC8S9HvSJrs4z8CR9x2v4vJc04ruqxRmgMcyu0R%2B8K575oFVQf1r1wlhyMoknoWiL8BDx3VuzBWCrbq7oLJxtQtQVVmrAqcUEun%2F%2Fqdv9uf%2FdvihdH17xxAR01AWZwlVqg3RwCLM1U1vW7vaMgv8xUjjns6cq6PIOU246kpuA1Ar%2BR4D6ocAQSbe8ciYqetYIEy21G9IUVfUeBNpsJEL8CcUgtGyXqdQCATPMFlDx8FRqj8F59f0Hr%2Fg2falW%2BNQVsyfXGXuhlhoYet7m0mShGddJjp7%2B6QZasH54BlfjGLNxnyEtqhGVF1bUfQNpyl9cy5bRePa3Tr6lPKt3n0al73YFAsFO%2F4hRZE%2Fb5zk%2Bc8qx7Cayl%2BH0YHYEbYM%2BIfozkiIiJevJxg4x8wq0sTek3tJhMtpQ4EfPpyKuwYVnv7WmyOOvTHwn%2FbAiLRgmj6LkugfktlwJ3eJxjm5kSOqzy%2FiTAFs9EGZTZLzSD6WQLmOrFYnYvS%2BU7RQEOXQV7%2FwYOZYPnAiQpTNnKE8lKNtzm5dZW4%2FbgE2%2Fok2qC3DDNPLmsr06eo9SxGNjFiPv3ovMP3vmtIGOqUBwVqqFYY%2FLsSJFgIFHLH0BV3vGkJQ3q1AvO8olxROnclfCjhjA6jsfobDlwtavy6kSkKBdchp2c7mZ9mwBwtzwuqxOnRyBMb1igPtoPH6UdZreQZr0ZHAQ8uGcTjd31%2FQp%2FHtELderfoI2q9mqeXB%2BW5zQnJ3FQCV27gWIgWGScqVs%2FK4ed%2FNJS0lOwFGrLAFrxDbrYGmcxf0LH4LuacTw8rQJeCj&X-Amz-Signature=043c954d1f9fdba57cfbd52c11b731e86074a8ec86c11015acf5799a40583f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


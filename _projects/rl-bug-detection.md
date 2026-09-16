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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTIXSUO%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T015726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEQ0fL9DLPOXtNWOJfxa3YrKshrLweWEniMctd4nIcopAiEArIjnckU6%2FZf%2FDQPJZ1UqTUm%2BUy0LG5g6MLZquO16eYsq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDPt2dcmsYRPnTPV4aCrcA2zlC0P9iEKCmcaAd6khMKcFGfAru0dN6Y%2Bsw0VafdxP3vFaemFlV7uewH4bGlYBy58EX7TJoJll9NjEseSLZH2AW86zMSzZ5f58XAWGbLxd4dcSy2%2Fz2LJOSr9FImOqtpToZvozAgpLpT5kT5p0GxvLZeqBCBEPR40bUVM59AZEXq2QFSRmBUVHigXWb9uaZW7dl0H%2FGepS2vDP%2Ba8U9xn4jJtxMkDIQ904YDsTysno7FXnQp9ZJD28s2lU6Irfd29Yv6%2F%2Fdeczwa92KlavAmhUke61QbnV0pQA4CZ%2BKH5AAwEcWZpCyUSroHWvCNf0c25RsQX5Rp7evurq%2FphB5NucwwyPrVZKSrdTO3Bky35TKENgbHWtLsaZIQt97%2FrGhn8UdFz4AioGMYDlpX8LDo2rJgvbLBJYNQd%2F%2Fd0Z6JgRmQYbOt9Z35hAma7BgO5MaCsvgWU200O9bjxYawian9l7oUpZkJKauTojFGJY0KUMFuBuZhkZRggw5%2B1yaqufbMd%2BqCH1BkRRLHqu%2BYszj6uBGzxEMu%2BRkXgZabLMBRCK3PWPz1aPTZAOXMXANU7sOHem6Bjc%2FF6Z01n9qHX3xLFoPDNrcu3RzethLLYavPjj%2Fl9PbomBYKb6h7htMJLMp9UGOqUBcc4PW%2FH6JJEfQ7N1vxr4al22MPgrt8PbwHCbuya%2FbLmncHipLMOQNBA0tLKaBOYYIPE8zHkPtjiIhmdiTzVqyQitUYNZZvjYqXRHlxzNnGnX95hhg9FX%2BTjaIaYTFpmZx5F8tWFnE2h4BtCiZKuUNazH8BNVUyNR8DIyA4Hsi6XQi5jQ78VYuQ8uDtNpN7EVzPlGXzjliBsQRyj9KTm3P9P%2FAnAF&X-Amz-Signature=2f0c24653672fdcb856c38b180da2eee21fbeba5b94639fd5ac0bc3b172291fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


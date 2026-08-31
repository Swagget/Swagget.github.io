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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267IVQFW%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T174419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQModkGcLbyhnm1XoQc4IUg2NZLBeSKibOKCPY8SceAAiBVTRR81jczMBF2PBDLB32HIvyypviBBrrcjDxnkYde0iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7iJM4P2VE%2BUfDcTKtwD144ANt3RmkRF7rRVmXnCiUDiWgC3ZghSo0lmZYQImIqMHkXZqjPPXTwd42E55z0DCjdqBeFJ1KRsw1X%2BHyAVHYxYp4ZbtcKoGWMgDpuj%2FfgZ%2BSGtIUKiWzsX4qdwmavSSBFN7vR6ogkJJGjF%2FCPJkNDRC32lqoE%2BTunlHYNHZHTxMyRwa9VEO1fbkrL2Vu45BF6tMyPgnw%2BNlV7l5S9PxPbMK1ygYApR7tApldvW1rdKNn6VoJ%2FvIJAI1gRNjWMM1ytdtTy48KOZ%2BdqLeDZ0TI9r0VU5rQ5VxXvVy970cfgZx9yWBz1Anw1VLemqlSABZ7XjI38%2BMxl%2FUzvlFh97T5pGjXSIcxB3EdK%2B73H1T1eD66WbRUzFf0lwYR2nKFQ84y2b4ygR4lCYkXX5ARF0cZ3G31mbVaJ9x76tI15%2FVPLzIF61qFS1GCpU2Kdv3ocj3XiFWwymvwNqTwiMYNLtbqlhN5dNHQ5kX1ARVGXTlxN80Na40GvW0B8Sg9cKqByKDN8Zps9HE2cAXt8wH9jcNFCzbp4eUu6LFG0Hrs5BlSTvun0Ea443OHUBU5sgxB3r5HRqQywB9XyOeKv1404oy6XSg%2Bvfei2ex%2F%2FTB490AkotdKWmYuPjUzvsGN8w9ubW1AY6pgGLSCJ9W1NgavE%2FMyfNnvK0HLO0C2i9EIqge6VyYQ1XpjAyNpWrEBO6%2Boe%2BQVh1One3tp2M545DXZIzSGoXD9PDZZT41Jeut2ZCnwhjahD0%2Bs7bhG1FDSIbYtl5M56bB9ZU37nGfe1MJbL%2FqiXMGOPJ8CzAEiPrEoQ5n%2BtKOvMyh2dQoLygb1JlhghlLmHV39t1WnQEjqpL9a%2BIRXrTUjWbwx4AKJo0&X-Amz-Signature=7495fb6d13c00cd2b95486c0bb85e63354813eb4b2646ef9afcde455329fb8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


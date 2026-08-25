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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVYIIFU%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T231420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCiJxl8WJIbBuhsyRVxKXDQQyrpSWE0RH0a%2BbUj9csaCQIhAJCHXcwb9CBqmxAr23%2BgQcluAFmZ5q3qP0ZL4iTW61v1Kv8DCA8QABoMNjM3NDIzMTgzODA1IgxxZeZGo68ipLhbHDQq3ANxCZdwPo8cL4L3klyr%2BAxP7rfpT6GBaLcb1iDkuQG%2BgRF21OGctFs1yTgI%2FoZy6XV8xL1AtHDOY%2F5sAVIKiwxMTOHfDWnPGn017J7a0c6xtCYg%2F26uP8iyRk0cRr6zisa5PK7fbUMErExiEK6wOOzLF3SHi%2BOYIYEnKthISTHLGq1DPCho00pQNXveICZjIPqf%2BlEA5B6P395maQVqUOh2VIGEBwSMUoSfAWS74%2BY%2BRGW0Kjsy%2BB1bBbUIxSnt7b4%2FcavpPl53mOGC%2FMuGSHcNhjOtyLAL14CsyRPjcOF3eF2HcAoHHzFh%2BIXvvE7WNLhMRdMu0hEA5NwS%2FvGPSi0vLnQ%2FuLeoOJ2tbMvVcBRWS%2F6mnaLO9X4PfjNhQ%2FYvEpBVLXIIL%2BAQh03y%2BjhKKfiISY0Y6xjeFKUS0b9Rpm7cfks%2FhTjhu307oqPsNcRkCYiDJy0sVdl2tNBZJYyga5%2BF9%2BcA0Ai%2FqIUkiEPOgeqSfdh%2FIeANGngvUwrBkR5z9qbX2QUXaAYOedIaH9hSekMbVqUwBcQsuO6YSyqeRTS4pa4Fy0oxg69l26Qm07fSyO3HuACOLWX1kK0hCD1YpOYjWug6e9ZqxOd%2BpEk5mjGmQvMLVYKaVdzXdq%2Fs%2BTCdl7jUBjqkAehaC8nA7sA7GNXwiJyXQAcW2q9fTX4hS%2FxohmVIh5xSarKip0avss1o5tXV6u8x0Yd0LrIXh%2Fd%2BOBMbQqCj%2FoGlAIKemvoCmArdoYjTYaOhRcCsE%2BtZJpZ4A7%2BBwbqFShckASnVRzm9hrteZCQaHZaqwQIcsIsmkQWO5ckXKy0ANrbtJtAckI5o57Bm3paKNp%2BoOXOJzYxuJQINKXwwWTiL%2Bdez&X-Amz-Signature=eebaa9afe63fb91694488812325376ae8b0ffe5cd879bc2ea1544e8aed696ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


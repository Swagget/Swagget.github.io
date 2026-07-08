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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJF7YZZR%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T225502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEp6etWPTWBmh8AMzxNwFvYEkIydCRg36dCRrwkwRGkAIhAM8QqHN86oFSw0D4LjIBuRwqNCKQn6rLT2x4UNKMqTsAKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTjPn2oRJfJbIxb28q3AP1lwjA8cGOwYwikelFkTgzWYidlnp5JwiDzrpL0dqHrxEq8ojKKyqaqrI%2FBLPMu17cnku%2Bat%2FzkcPxb4NraMHm36B2jsH0hbDHFpVcnVHNvkTX89Ub5yoAf5iZaShtCoD%2FKxIHgwrgU8zQiEAxKCBRiyhI12mEkVlijN%2FOqDGsqzRyXSFoX3JvUPhYH0yC3s9Zk00DC7jlgoInFpscUTPNG8Cs54dp%2F%2Fe8b4Mhs%2FyN0L1VwqP8PAMI2SPZcRJ1gZkGITC9t7UIVqnyFChauMcL976C8eHOHuVHp%2B4lsrMt08L%2FrY5eRw5EMQ4%2FAAf0C9EPNr%2BDrH0et27jsEpfq98pqBvJtZt0SNCeE8SXzIRn8fAgG82%2BZuM7Vs9l8XhEbUOsdbJXZ%2FomOxN5OYOjGdP1CeVQrqhGzaYJLmcN2wJinvQH%2FBdWLM9%2BJu3kit1AVjs4%2BvR8Xlc2gS6ZBwkLg1NrTrVbKFAy0Oly%2Fah01zW5LHPgtm%2BaMiDvvjMqTf%2F4muZk4c%2BrEGr7CBpkXAVr7SC5h0d99QbXneWrMGoQfIu7tk3H%2BMjfZDja65%2Bas4KNaIEGCsJxrZEZOj7s1dKnYw%2Ff%2FQYPCPwok3UOcWaGecxl%2ByYSsCWSrdo4up543zCyiLvSBjqkAUQRBofQdKSYJTpB7vr4JKYl3xEWERioA7ZBUlOgsZOWG8dOb691fuJ1y2mpGiOJhQhyVYHV3%2BIKKU15m%2Bv5zJ7pV0KFFMS36Mz%2BPVdTTOT%2FR%2ByXZRs0Pca12dmKkAJbKxXqt4ytb1Fyt2z1b2GcJlneHEYZEl6qIlktjYyW0o9ys1GhLem4YjyAiOw2tM%2F4cr7ZqpxXbT3D1lszSyVi0B9mgaVI&X-Amz-Signature=c7391a9795f3e03328500f4810c30c858a6f547dd5f2d109872ce28699df3bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


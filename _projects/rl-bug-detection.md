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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X573K3ZG%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T014952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDRw0Mg6s8uqjFUtgyxG4WW9ivpaj4J8TyYPII3p0hshwIhAI9GwYOUwStEBEJci20O3KbnSoZz59DpTEH84i23U4T1Kv8DCAEQABoMNjM3NDIzMTgzODA1Igy6g1ViHplYwX%2FIbgEq3AMjTpR6%2FEXokci7nlCyTjqwDhj5WCApWmJ2Bw4sdnzUlEsjRPte8ooYKZxDar446GMSZwNUEPCnRC9tby%2Furc%2FW2ZpQjneLva2xdKZlaBvLB%2FRTObA5J7McQkzk0fXbLp9GgCBweIuvOjzYL5vYJ7Jew2IoA%2F8l9z0HBSG11bpKA4hQmO0EFbjbk91rLQdyPuFDI3QqdP92P1Dt0rW6nXz%2BZwwbNz9gNnffEnch2P4eq%2F%2BYyk2Tg2Q19Qtcgfl38bgAa2mgydxKMCjCleEimh184pDjS4A6iiixaPAxq3uA%2BJlp0tdd8jRH0mIC%2BzZTaGu1EBOwU8u9BwWxsTROvNTbsgL5bBsfaG89J9v5miLsvNnG1Aw%2BsXDXvdNn1ke0r8xgMN7d76iuRRJicmYAmfC4yY%2FMN38PTjm1Ff9jWlYGHtgDvV9fcpuApkcZwhhO%2BlDi7vCw6ucUuUtg1kriREZS8%2BWFFmwewztO9B%2FY60%2F9mx3TcmK45SNcJKO%2Bar%2Bzh%2FgaLMXgJ9e2t1tk3RKCtkJHRCDHK25oDFCpRDdNicivwYpCPBf4IBDQ9felRkzpf%2F0B1BKPcwz%2B5sh2YItLSoiwIr6ybcdrkgrx9GhYl%2FC5N1nYCYIR4gQY6xl5qjCp5MTTBjqkAWfhKHZ8DYIINra%2BgvfUwk%2BCrFWhUMTulFXQmgXKy7SIlUMXAxQFn7nL30ksBrU9q1m5v7ZLao%2FEIP%2FUJtGgL9nYnkgNKVRIfbXZ5n3b8267qBxL5n0YxCdO8CZEOb4Rb7MIvn5dSOCesMUP%2B%2BqJX6a%2BQmGuzKdhya5Jh569q8ZoWHPU4LuWotxKPGyrMUz6wdfC2apEAkQNKv01qeP9mnrSagWZ&X-Amz-Signature=d67cf5826b987aedf7cbf76fc178177dcdf528a0858bcf4343875561985960b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7GL7AE%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T105837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD0TDm8ZMQ3WCP%2BC0VRzLkU8gwN%2BQ7ManF7pd%2Fez5mYkQIgKSL9QGi7AhCleATtUWfBFF3iLxg7ZbNwYU%2FNZBvX8lgq%2FwMICxAAGgw2Mzc0MjMxODM4MDUiDEXbwq%2FUpalq3SPqzircAzBHY2Vetxq5Bzb5sEiiwYcaXE4xJ6kAT%2BztBfAvbPgQdFomHa6nMVEcI4zQggrxQdZknic08OYcscJXvkwImNt4N5BHlnbMRwGNxBq%2BC8F5oMb16eZ8L7XuD15wnVxwoQdMWbzLBMBaDiTuqMGnZiRuaQqB83GbgEk8YQ3SO4b5eTri3oy5yE2O1%2B4mD1p%2BdJeIf4RSJaGDRG%2FJUuphEeaOM1TdsPpXotkyBaHxypxfWJVLlUI457NqPfhi%2B7wuWM1S3pkaj%2BeF89%2B8WuFV%2Bt56eJ7WTQkqhHI%2FQiHGIG%2BKIkaOJ%2FUquTCMvhQFstHoGLtwH1RiNQWfli9rDQD9lUq2vehx3B9TPeGWTHwxJK7bNlJqFOD%2FY436rmLTZyHdmamlIV%2FULs8k8nV%2FiYnZcTnfCH4qSsj1AFqxMEhIbwftZsm32l79uct2cS1HDS0mk4uwztLYROL2vH6%2B7ijtzJmQil9JtfibwvqamhdwSQlfjAk%2BgVWzmXChCk2A%2BmGhfikgnMq6KCoPLEdtkQ4AvyKfWXbJswMrW591JoEPdg%2F2noRV2utOiSedCOAI2Kumz7Zeo2DKP4YFijdG1YH%2F0yhYpzodZtLD5QaITOEeRQ%2F%2FolkqxKTaTlPKPXDkMOHX79QGOqUBj%2FCwPy60DfAzfZN%2Fj2WoyRjbyDcMQ44upZ%2BDl7OMqTbDXRPj5rm9CHUoV7dExA9emPcKXH041cCzzevgENPJgz8%2BcTG8Z7qS5CG0zubbNBEm1RFXFGhVhVbvMq3AUAm39g%2B49FaXk1LCQnMyFDEmNeJ6d%2BZAazHgBeO0Iw3%2BMG2iDZABKsCt45nm8qwfHJ7sTq24nSIo0VNJd6qHtaWdeeZ45hvQ&X-Amz-Signature=e4b128b5365cd17233c5b8a31f6a49b78127e6eacd35cc49b1eba2f6df92f4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


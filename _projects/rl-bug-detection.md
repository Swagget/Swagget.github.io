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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOJQRMG%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T164251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCixuq2Aj%2FdE1JVXFZkTRh7kUvRFriLiJ%2BTC75k7x4HSAIhANEsLMKaB5ZKbJsUVieTFn8YzValOdhtWFJeNYr7Y1sFKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGTpDAwOXXaTVkd94q3APHGWzs0tA%2Fta%2Bu8WjGE%2Bw9WNF54Q3mC3FK0wQBXZazgOS1K0r0WRWrJf7QYmkCtYQ%2B%2BlZt3ZOT3ZRTh6Oy%2FSp6WgqQY3uhblGOPbK%2Bxm4MolT3E4Ygi7G8tfwMuC3grMDqbi12PtDjSyHg7D7JDMpt%2BpSqbGaORbOk59KccKw0w5chnZQtlGOXRHWhGD4W%2B54GQ0welWGO39d1dQwu3I9xsjEFyYZJGuEm%2FqEV77asyzVS6ISPUqqNqTsprOqDZoty11Pl5pD7JaV2mpcBY6vGlmBmdHxDABcDgsXYqDjCyY1v7rS10U0OcgX2VPWbIi0%2ByIK7JCB7EjShCCRiO69rrGpsqw0f6LcqkyEdcHHlBpSesjyCswgr6TDLn8vYlH0KtPvGgS55dpiVJKF%2FlhBsWAqJI3xFsioR36m8yYWJuypbl5WtS7BrYg5X%2B%2FOEpyylK11%2BXd2GG%2FgOEF2Gk8m3o3GX93h%2FUngYRNSKKL3QVdHnkZrSiQruI6BxxYE3P8Ja6veTgssynCunJYY8MTdYjJEO9ksBbPiSZ%2BL5d7zJisZz6Q2oUK5ZFxvgJ4P4C3ARbneh%2BeiQtfRr1FbDZes6rEWn6p1D1NADkUIzZlFDG%2BB0E5jSlxfHE1gu%2BTDakL3TBjqkAY7ABCk6ijLBKZw5O5HRbPsdkxubzfmQUSZEn6JNCz0z2hpFHTTrkHu0ZMUB3Yl890M7WVekVSXFm7Lay3VopSVwe2ghKVtj%2Fl6Svc8qU1SdaoENBKFqUMbzCHKWwxZhntdvCxwR4LpTOtKXyWSw4GLBd6REj6vOK6zQlmARP%2FmWAIJw49PTG6RgqOIclgAF%2FCqhzP7G9f5F%2FN%2BaByoTCE5gDiKv&X-Amz-Signature=7720a0463d4efb734ce65d0a2b81b56703efe2acfac1560f152e7df8b94abd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


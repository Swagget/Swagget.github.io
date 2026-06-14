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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBJCSKS%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T125512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBYQZrtM%2BEefkT04V%2Bj2xoCWujDvs8c%2F8EPM%2B%2BTsFrwgAiEA1zA5oUD5Xb6B6fqSQj1uSqRxmDccpv0ZfTwe%2Be4ivLcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMeVOCrqiArvGk7gdSrcA6c1xOaQFcRV6i01GWWf03GmDVZos2YsvObf1gr4351V23%2F7QMyFfULfvm1JDA3Xi2KEbM%2BrLOVUs4wyOJrwz1KhGrJLkNb6av8LM6B7LCEAwQJhy0XusdCEwisGbaBR252A6xOl9ffka8ZxEpSP1U6YIIiKrRGFoq9BS9ivxVbh0wGINdJpx7ZjYIJJ7D9KJUaH04FAe9NDMJbkfNG4fwfL7K8AdESm6ujQyw3MisxSSSa23xq7hcI9t3tFGP8Caze6BnjRlhKmc6iXe8EFChAK5CNfy4z9lnrBQ5KhH%2BwTVNBzoLR%2BMG3JcCsad2AePfN1mQ2xnG5Jvgy1zqXrA%2B5G0b4eXoOdowNFjf%2BsruMBvgkMopHgK8Syz8wyEFVsyDWe1eoGd6j7mMb2PD3PfItJ4EeHb6s%2Bhu39kkavpi1DYdYtTYLMLbecCxX9TiGANK2alnHZHJtW0TlTNNxG6LX9QhlrVhZQ1%2BTGwNteQCXoSI4dyJHMsSk8u2%2B0Wb76eGLwYSCu71ckrDJhRZe7uBhNtQ9Gxrlr80T1w%2FWyC18nmwwfnnAxSH93TyRQF6O4%2BMsccjBJce5Eto2HUzChBSQet45H0RTq96pqWgLJYS6WLiKcb8%2BB92m7IlBuMOTAutEGOqUBZecwXxmqph0JfAfXMkJxG3CoBTmsVpPciOpCnbJ7pNJdpx4OGwv0hQ1xS7cAQYhTHe%2FyVXF1FyMchC%2FRtPrsDks5E4zN6ny7cEJeQH8T2qN71ExHJYHkfDk31v65oOoJ%2FUiydYKo8GxUyBz0WuauHZKtBG39fEVs3H421j3QGnBNe5DJg98k%2BW273PAQZS4jCxhqsdMoo8MYDlx3rjIJBf2F5WHV&X-Amz-Signature=666fc962a551882b7ea8bf3c58b8c40c122dff2200f4e72c1c089dc226fbcea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


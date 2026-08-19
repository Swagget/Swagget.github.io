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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD4P5LQN%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T151805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfcgHwxQWraauynsd8V4NFy2pJoPQUtM2haRPHOWHx8AiEAy14eWRTi1Hrt85ptJlmFezkzAJQSLGBjBUDANMKHxW0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIfDkHJ%2BSFwnbjCkOyrcAyiBbv%2BfKcKokYX0q3i8eGpB7IJtjweW82hgOHN85HxQuWlPA%2F9wjf%2Fs9HLsgVviNbdLT5FUAwy2DikbSLlU0OnRpuVleXp3r7X1TWXRu8uHs1bvBdaWh%2BQ3O28%2BwF60jImRW8MExK0foW6IsMZD5pqqgaQ6ZukPdNvd%2FpDHaZuwuLwY8Zjq7NW7TreNwcZFxXXQNabZJUpQqmKz86IDPwxo2yJRaB3nqkIn%2BhX5uSL4LydPnceJ4Vpl6L2Q5u9DHlJCUzdysYwc3d96j8wyrHU56ysFYqPQ78xWSuXGRMLBZG0kS2jc08cdy4w%2B5mSfys7OO0M1I3ZFWei1cyX%2BE6Gk8L4smtf6fizFivOMssXIoLwwD7fFMcFkWGa1WCsuOcLHHfK8csTjKKL1kNyT7kohb4At5LwmlnwILjTl01E5VXiOSJh1P%2FLrXc28i4Qa97YDwJH0yjjJ03ZsOPdG%2BFv4QH9nbvY19%2F4%2BSeqrS7qD6czVd80p6D8p7Yupij3BG8p%2FNMT3QCfeJmXQBU2%2FLr0tENPHwNwwbp8LOVjB%2BJK1te66Cb7v60%2FQbqXH2Gr8MemjHJfe2pPavBKW1Uhe5%2F3Z1BKTVd5o7WaXFQ7wYmtqYTtS%2BqPhcp5j9TatMJTbltQGOqUBv9hQsTE%2F3ksoY%2BDaCG3j1LGfR9Iq2GGm%2FeiZ%2F9yu3GDNL%2BxYiSCa0%2FX4%2BZtyasK3ZigmApWBumyNTVwV4Ew7K8stzpGl706jlUqn9bHL4dDepkWri3wC1Mxd5RTcR7uAKvnrTz6dFSIoy2fZrIPUYNqSZEIreAjz41ujUngv1sbcKpowJkrJ%2FxdMq8TlUSlod6JmwHzuOKne6g6MUQSFymjtGxfh&X-Amz-Signature=01fed3d13651a498a8613e9c2c8907499ede9d467247afa9d21c28753700a7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


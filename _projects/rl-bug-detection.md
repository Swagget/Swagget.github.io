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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ZRDCSL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCr8nJsuar%2BWVphwqIWHL5QlKqX5Q%2Bdr6qpqzb6PspSigIhAPbjIp6iPfIS0GBdwdF%2BpilP8CaQymsAtTYrF8Q2BBlvKv8DCCwQABoMNjM3NDIzMTgzODA1IgxwNgjvjxzy%2BcIAyM8q3AN08yKTzqhD0RE05JPTjPX1vfQNzwOiJ3Oe2wZSYkdBupaNahihv7Ai2crB2tnZZRvMbevTazcB5hTJac2r6TT6OHIZI10pR17QrMVMluwUMx5JDK7Mf%2ByVc7eg5ABKTNvoC5ZnUxPRdDG6FpIiwd8JDjfIdokG2VDejugU8vxZ8uPqeKKFSss7fDxSBF73exHquLrckXwFnzjM%2F7ze1f%2F6dFahg30%2BhMvFgg5ZhdHNRXA1ys8iO5zDKTunB475XLP5t0LLOI4%2BALI97Z%2BtL6Eh5KtAedBWGCbuK8VoZwYVR2%2Bmn1KIdbVy%2FbSuj2Owdnl5sHxpk%2Fzvz%2FZ97GCXx2VJ4zfQFeJY2a8VL%2FT9wcPW5Tqw7U0tJwsWM46NIFbkXrXhRtfwp8eNL4lVZ7pJlQk3CxIIWuKU4XhSnnkiyUQBXxushA7TqiKot9OefzG8i5xZ%2BRlbL1TN6Pm8h5dhGOCi8Ha9atKcAm7Iv%2FnEelVvSKs4p%2BEu%2FuEN1q6piGNXMDQlQqdcseaNI8aM%2F8NiZedeBfbofOVdZAqFN2ta5S0yuzh1v0fn0A4Z0ApWAZ1P6oGXNrpsA6ErIwMU7KTpEUCT6mrQmNzKcAD6vwlxsmkwoV2zh9iXxcxBHBZxTTCVpobUBjqkAdMRXlM2Zv8jueCt8gvBJkjOuXPz7cBvoiALV8MPTzGBxFG9y0JCZ%2BIEwE1rCycLVDFlMNKDX5OPo9J7yykVqcv0UCEybMNOt5eBXW1DB49J2zJ3B%2FSvpAHXCslcEqROzxqL3sxAsb4BJEQqsspTqk5h%2B3jptBM6UC0OJsuTJQE2tjPF93NW80%2BvodLIO0OhWu%2B6WPiKoKuh56fGp%2F%2FTboA9W%2BZs&X-Amz-Signature=4e3e9ea56fcaf630c68848d89b70f1af70e391b43b79c658703abb441bb99f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


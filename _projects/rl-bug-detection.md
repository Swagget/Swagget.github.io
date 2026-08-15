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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUYZXBWT%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T091329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD20OohadHAHoT9d%2B2ncCxr9%2B4SKfwLKO471IpeFl%2F0%2BgIgDsFzVUy3uJ7xpfP2dxJpI4iXSZbF6G0v945OzoZR5F0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDI3odvkS%2B0fLZANw6SrcA9mBMMkSQnES9HxxSbTEG%2BUKmeDI7h9QB1TUBJP05UXGpyWSWrrtTK2l6eQp0U0BW7aIg9LhLmfipF6fL%2FfvXWbYYg2eUpgqesnGmmWsFR13kPZC%2B2dpCIDquKXKzymPvpZ2LgRKU%2FkYsajRO8CI8uVU8nE%2BCRzBLTnKkwVBLAtRjbhxY8baiZ1s5hbkASSqkVVMy40T8giUynYeuvq0lSBWyHVeFJpwHl6dS0qAdaTAvRdw9Xp4CIRLR0G2N2foqXtvkC3vV2gCXs4RPdW%2BDn892%2F%2FVUrUlVpCQj8FOhDrVhrhQuqMA923sJXfIuCwNg8gAORwN9qtkhtD269TlYlaz6Lgr87yTZo%2BkM74TjcXvCwhNsUGdj3FzT%2FdUTSR%2BNjxyA7UiN0f6nbUiuS4x3FeGh8KEsWevSbFjjlZTsE9acEz3EBe9VDtEXVQg1f1LWJGhe366wl65GlFD2OnpHZuZIaOXcsM%2BLjiigVsK%2BqXzX1qjcgDefeymruK46MF124mq4QkmyvK8clYIoJCe13ndzr%2BPAvf4H%2BT4TGDXBPd8iNJItg2sJQWs9T6yOc1rNj0xIF2XKWvn%2FTBT8rKQ5bQaca%2BrtW3SgaPizCnq25c8RpYV8IRlBTUvA2jiMP%2B1gNQGOqUBeU3iobgqqqgLC8h9Tm%2FNs9UbL8aCxdO2Y0ol4ZbDJJ7UtJh4%2BdDvc9xLSDx5q53lxcsP4x6DXdoIZ%2BaSjMj22DxDI5wshaiFOyLOIIAEqprK2lDaFvIF1C1crL4y2zl%2FC7WDZlbB8i%2Bp3KL2GVh%2BzxA0jy3JmawSmEJuxRl9dfWyZMV0uYtRhIis7N1ys%2FisUmqoxawl0%2FX0Vndv2vW%2F9sArGP%2BU&X-Amz-Signature=bdef8dc7794b9e8bb933e1ba7bb91f997a368e6bd17db93e307eba897a7a4efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


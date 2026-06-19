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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROIIHHCS%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T220221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHue%2BJ9Ef%2B0JJkGbX6BZu3GAYCQHYv2OuVmIxCyt91kQIgK9HdQMgkeidjCXiJ1RbKYuSHn7Du2KqcGHko2KulCWQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMkKQ52pDX4WPPcUircA255CQPumAcZDXT6%2FujWcso%2FJk6kkyGK1X%2BhZZkh%2BLppgMkAYmMk98c2ARxHm6Qy4YR5uOnv3NCF4%2F7hGh31WFdbHwEM0n%2Bc2Ew5%2BY%2F4tud7iP5Ms0FsU5Rkmg7ie5S6yIRadPy4dfyPudXY4aNOhrP2BGz9FzFT5cziEol0nKHxTlVJmmStpRllUVsy35I58k2cSgq%2F8Kn5xTupmGP%2Fj62zhBSvL73vLRc9E2uZI%2FDohLC61hzZf4NJoX9cikibVzP9VWxrPf5KdkZuqEom5ihjqbHx1qGQnNXUim%2BDJY7qLYjKTR6t%2BwJ8jVkwXBEsM6u6cOADyaUGOFaXEmf%2FGufXinO571own4uxoXZzVnE4uVtdeXRh9L3TQVWc6KoAzm6bgLNRUI06C7xZLyP%2BksKCUYgV%2BN7VL3j1Skp7oyW1tlvjWDWJl9q2JIywC8tKUYVSxY9VcxJ0cXZQol864aoTxd8dSapBuxiS0A9YyUs3F1vLpF1lCwsGTKf6X1rUlwlVaUdRQ0MhYmJxjTWTUsx%2FcooQWs4oKgjyY6HVXNvpuznBwQuIgv%2BXSaVkSjEr%2F3mH%2Bi%2BrwypJ0QAyi4oartTMRER4LoF5Wn2W7NznKbOL0nn1reV6PLjx2IEFMJPw1tEGOqUBvAl0yKbxv7Xtpyo3%2Ba54HY7Bh2l4QYEH9FiUh4evNrKULDBqLkb9caWJhhaj0QWIS8FR0FrAPKOvoqxL27DUenVpu%2Fz%2Blcy%2Bj%2FlyfWEH%2Bw79SfpBxBUZxQdeJAhvWaC41tIgx63uVVDZE%2BGQBn61yVjliRq66ynUphA4j8YnNq64hboXd5uZ2AFbkyCu6RQkKObp275yIeYy8s446lK6XRAvRXmr&X-Amz-Signature=058644b3c9bc3db17a67b74663a3553390d964695137caaa8bda1033f38ca843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


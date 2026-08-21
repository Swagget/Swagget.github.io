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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKXEANQ6%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T201112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeHEnKSt3L7fTalKXiOSgMausdrjqLznDGvH06j4rqZAiEA9y70eLGcAT7GdU24uTTWwiGJbuAGh6G9VRCQsW6pEKIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bzb0%2F6smPq610XcSrcA0PYuZzKuJJlQZMk82C4p4N6wGADhaRYnA7nEDOG3j7058qnecRFduY50OQf03M0H1PxA0sLdEEaacPE1KCtSzGLZoqfLOLxmHzlSG9ViR8Ehz7%2BcHhTL5W62yLWkC2eQK3vF%2BWKwm2sRtAIKsi4GbdMthwkgvqIFvNLtyUvABcv%2BH%2BNvvXVz%2BQYCtD0epC2yJVgovyHPIWkQc%2FBdpMKcBMWUO0ovqX9wg5JmxNn5JDKIeReu1K6VFnFQV%2FLGcmz%2FxG1RjwmBIjFcJyq3BH646nojUKILvWL1XyefNSf2vRQBcyuOg2rl9WiHICW5xFVnlQJ33YJ7Y%2Bp143bVfjg61vKwOUQCVNY2vUVZcELEjo466FJC1ZwD5Kh%2B2RmHje6cVVC0tfJM%2BC%2F5nwSHX0V1MMZtYGpXViZapS9IIYWtsiZTaqb4iXTCscuMhCT82%2B798Npg5G5REqa05ABlBob4E%2BkjXCCFYih1XPq%2Fk%2FdD9dr5qDZQ6ZexCAzBaiNyCDmjyLY4Rah35oXW0B8%2BIy4%2Foz3RBzcwi5QfCou7yPTlX8Buodd7bRFwgKqaYu%2FtL6tXNcHqR30xfjX2cM6KIf%2B53qe48vc2WKX9Xklk33xT61hBLtnaoGO0TTo89YWMO7GotQGOqUBjewkkNyVJK1Z%2B0fSxaeEhY75Qg4Nw6qMs7mJvAwA9wEj64%2FkzJdCj6g0vy2wlYESDD7TqcCVtTPgB7FxsXuYnVaaQ6nTzdPnZw5W329eiP39ZrMj9MLEdSjYv6Bty5o%2FhQgIGJQJ57F8TMzVdHZan4%2BK2jjD0ZvOTcXcP6h35gdro8IRfvamgqiC2xkP0fbTRN7tRxKNWnryBjBdWR%2FlXDGAqwwA&X-Amz-Signature=f7abf207cc247bf6fccab1eb0424a090a990ee6ddcbe0006ae7e9a63b10bee7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


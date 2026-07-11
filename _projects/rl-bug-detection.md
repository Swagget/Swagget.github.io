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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5UG3MN%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T114125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIG1LuAq%2BWloBbm8gYi3bd4SSz7MS9%2F4fWh4nTUKSx3JFAiEAvImmJeiWkFP0ka6Fjk3C6E0i8%2FHk5uab%2BSL%2BLkwIFCgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqVvIQbYxog%2BOtdnircA3ux5zSkUX9YQT1c0uRmREXEUJioH%2FyV%2B5%2BeHNdfXiTGw8tec79Yyoq1IvMlzHIz2HavrVv21cVJlV3KFBUvsb5dj94kGQ%2BnafYG95XpzVKjzO%2FGiJCpgjB7CBrMwmIoqFXNQ02YKTKBCsaWuGSmLvioIh3j%2BA%2BccgDMK9B2288TMUB3bYDuypeIKcvB2TIArk5nnPScZHBQfau5lWJZN9X0vuzzWmb%2FgFBOiEwGYc%2FvmYm1kKXGdDzWXC%2FasTLUWY8WLLZHWNnaBW5G6u7DGYIpUmxNAS%2B8UWu%2Bken4Yp8XCW0lwxHzqZs%2FiyTjydXibH9jev0i3CzSz6KkSmE0OMThtfveKzpbIGg6p851KqEd9rhFdjBOQeQTd0td9Iz4CrWb6yEiz%2FZ42PJI3N5xit%2FOVqxZdbJyxLmlaWWw0mSKLhcZ0zQbztmdvaIcv65GKeuOt6SKJMGRwQQl%2BITrV3AcMlZsP2XaIQS%2FHCvXbxUbyEIlLuQzIprO7XKJBYZQ%2FMTdDtDLzxgbxTPUInxnLCCKLmB68UO17Rre4el4T3AJ6EawJLrYcTa%2F63DUdosLyAl4n7bBsxR8yAwir67%2FZlgt2YIYf4NhqSiqlbo3dhnxuBywA%2F1ZVj9fXR%2BzMMygyNIGOqUB6iP2ZeFRvz5dTA9%2FS%2BKFU8jB1bUqU%2FTWUlxmA4HhuldsVGWZB3zorHZGPD9YdxzMt%2FqwTub8fAxqb74Z90QmaXda0pNYTnTq26KeS5i%2FPw8p%2B866pKGl%2FbrYZuRwJMKVt2lViSg9Xs1hNr%2BAqcG6KtTTKOzr1En6Uk07XD9HFN%2FP8SiZUl8553hFgaSDTs7vATUFbGmpXHHtMcThUOz3Mx5OVf5j&X-Amz-Signature=c1382704d035f2498ee6c6a2d6355c6c06ab81e74455b5ba3d721408b8e69bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


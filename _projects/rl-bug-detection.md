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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3YGWLG3%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T034201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC6QdUKwcidrP1RaROcV%2BhbDVoNBNAGcdMeKZ0BbNmwLAIhAIjQxNlrT0ZzYmFDHATG59aih5Mymhk7GHffRU45W7EgKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2SpWYKBf7geylBAq3AMLvgHKMFoS97RyBpe9BgZOLqb1470SfLWSRo%2Bu0zlau5dksBaSCB3tHIqBdYPP8nnqtaXcF5cocQh21Ac%2BE6WeB8XXm1YLGh6EqoLk0xM9%2FX6OtXuzGK7iOHc79CgUAPVQtZgzAI40LnwPyc5BMuDBAeqQJ1ycXH77%2Bkf7udAr0u88dt8NClWd%2Fw7T2KfXuFUDjlEfM0N%2FrZOFZoLq3fsjuFXJ6wH8y4Clg8%2B%2Bt6N38RVZXLN%2Fw3%2FAAHSklzEbsn7T0h1FUvguhjYnROg2a2%2BtrSiK8ggiMZj8NTGIlL5PuIwHuWjrO4w7ROEOuNRteeX4u6evy51E6%2BRKotgeIkthJF7M8IeJM%2FjhqEUlss6KtZb9YtN%2BPmRONnaD9T8Cl7VGdvIoaMqE5zSM335QBOy9jBEgkTbJIb2Yjp%2FPYogXWGuSqRcbqVx3P%2FdMzGijOM1YgKkUqC%2BjAAjF%2FMoHQwv2HliIbq%2BaPo%2Bj7BZRP0sEVysklnIBIepGjJI7p3ZB0GxQhSX%2Bef7I6aT5u9cNTzuJlJuphM37aeaiUhBTCrnRb4APETCrD4KCAAw%2BUE%2FUL1PWvq%2Bz6NVmbHL%2Fdt9ro%2FPA5J6WKXXqIXsojkHJO1JgCa9vlUSlaTykiDaSjTDH6q7UBjqkAVoxPwnAZY91SraL6BKVjAtW9DIrRIaX56PQL%2BqMb39PE9x45cmT1SzfaQTl3SEDL%2BVELdIyHw3kDYS%2BHsZ5lsWiNVVH6UhYF1PJ34e9pAmIhOqEchzCcF5pG4rQcLKziEKsP%2BiOJlNioyzQuq4KBSpTWK93T5LuK7iXpCV95ycMA%2BychCzlvt6adkp1y%2BUwvgl1Qb4ScOGgxF4s3J5F2kx%2BI7ol&X-Amz-Signature=30864dfdad6d91ca1d558887e212a39351ac1f763c37d5ac8131d1659720c294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


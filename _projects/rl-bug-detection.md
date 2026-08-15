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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHNRD77%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCI2Ixv7%2Be%2F2hdkvnpdVqlnlTXpKDx%2FgZLrvW99utD8LQIhAOYSW3u1PANp%2Foh9jzVbrWNNotl%2BTeH6b4Lmm9Q3%2Fn7fKv8DCB0QABoMNjM3NDIzMTgzODA1IgyfM7guO36%2B0p5Q0W8q3AM2uBEU7CEBVjKyNuaByVcxhbT4oCswRkQ4qDq0LcPrQm81LJ%2FPJ09plGdmj7B3nfwLJXemWLysMVZoaOx7x%2FNREdcK%2BlleNZbgjtXP4F0x0vbhpR9iL5SqqlTnS2lzv8CmLGhN3nF%2BOZhgD2T%2B6P9CJI9RKusj24tyFD1vPm%2B61cGNzDgQQzOaXYTIKKX58L67dkzLak9Pq8UC11WdlFN7OMjnzF7sMmoCZv9YH5B%2FydGE%2FuZLDDnUhEzzeYHeOJuto80x1znyWdrxrH7hO42oJQEd7OGNbOUaKxUsVReqzjbbmNpo5Y%2FHiAjZ1LE9r2BuHvG6KnoLi3WDjX37ArlzPjmKR%2FOWeiaSbQ1oO72n4JdI2xfpV1sVRjYGB9ROwdBsWwpF%2BxgRTbBHLJDoTAt3gqj%2Bnu2HWrYPxUDetXI3mY%2B0mF05OuxjZPdIlxHvRgpGTSKmYvsA6rRjLHd8sx4kxE3JSYznpcStZDPlC8VsXzUnITgiR8lsN5tKr05y%2Fun3u%2FNkhYYpNqP9JjsW5JmxamY3EtYiJXbSKkHRi5Z%2BfhbUHVsTUTkgFK4d8qMhCIoxrnI4sZGYQGhTKsBJ7LJt0dalft2Y8kl%2BKSXifm7LYUuIZxqbJ8GRp76%2FxjDE%2BYLUBjqkARM1j0HdRMNUHf44V%2FUHTIpjqtK7X9rx0S8VILnQlYWiDRSona3kRigSWQywpkcuEMcVTXmNPnBFPPq4QjjgWj31GKhL6xYMct4V5PFB94aoqw96emqzKljtEtONZ56Nfia4NHGGvNU%2F%2FVHH06AftuO0iUX6eXs%2BlFHU5auhSU0g4tBn37yxOAVD8dd9%2FKh4qLjF8kVcjcQknBcmWwZJCmDH2U0P&X-Amz-Signature=177961c19794e713053332bea938efbb25ee717f02767524d9aa5a45e4644a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


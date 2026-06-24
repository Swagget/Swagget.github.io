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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIF472UD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T192321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGai5ucO9Wg8pqh1Qu4st%2BZc6MsldVlAXNyJHBhy9y%2FOAiBOZb3%2BknZCG012jhDfiSKvfpc6kQNvdwvYcZy3QuIY2ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMa2gBwtdQ2DWbGfU6KtwDaje8JLi9rKyhmxQI1zqmLpAumL3hw%2Bf48rDBijsw2Gx3%2BzNoRN0gVqpdMKgKE6VneZqjc27qogTkL9ozwTRR6a0HhU2rCbryj1CdalCGNwF11pUW3g1%2B0flWnz7uaJK9BxcSfbpZk3yAI58PcIIIbLxsdLLSsOEgbqQ9nWY6JWaBDM65oD%2FtAuIXXMsolDkhlgkyUMGIWgR0Xfmafi527PHQGYs1PRXvD77STR%2BeNuY5tCj0VQoLGl4NQgLyBhStyYQ77yoojkdChE%2Bf5N2XqA8tbj%2FCsvWvYTzreo8CbJqTWoNa8kkfw%2BPZEilnOgnPKy57OE0dow10Y3VewnNwXOx9KTBOo60es2Lha7tqlk2S%2BEcukmPkruwIajPCuQ%2BB9fj8VTdAFz00sj4MPvSFqo6pVBem6bYwUXNUMFuHEnIFMzYPy6oCw3Qw6d4iJhAy%2FB%2FxCXQyxs4hz5PvLFdcfOP3bRNpl3H6DM6qi1CBYoSIP%2Fk4kKHJCyeL%2F9p19GA9K2qyk6BF5BdIebY8dQOupt433uQAZxiV7gTzQEiFmh5teWYOfqsCV18%2FuJ1P7R1Cs6opeYUEj0QD5M2CSZV0s61Jh%2FDjhp0P3QIaMIK7QEWZm59vNlV2HGHsS1Qw%2Fvjv0QY6pgFCKwqF4whjCkSFZ30ZyHCZ7yVe76c9Q3QJItT3FbmognrsIm9MIpz539mHB%2F0iquU0nzD%2FDE0vfUDXD%2Fnzt8q8fO1Ni3UviM4L1WzmeXsYsvnY6e0mkRtgO%2FFYyWwXcBG2WnzW2jEN7d54zkLgtVAyV2IY0Fl3%2Fi9Ql25DjZLuJMHJGyLsdvTxVhjNd9g266lB3D70Q82UQoRPH2%2F8joOUeIzA4EjO&X-Amz-Signature=06f470b42e80863e065b786075bfe06b85de912d07d95515c6e0bc6ae7cf5a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


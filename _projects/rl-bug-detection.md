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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FDDIKCI%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T102526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIDvAiFJZetMQfhw9aiK7ujf7Jct%2BoKr8NYMTS3JUzkx7AiBCxAV%2BZYSs%2FYDde99mm6lvzHWSJ5w6fED4EhV2eYMwEiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIaRp8YiueLrYZZfUKtwDvEbOGQBJOT7LY%2BukbVStHyjIg2BJ1fpxJ93R8Ql%2BO%2BxVKJIK0XC9juXwmKu%2F2wy6ktU4UxIL0CH%2BvrApn1nsV4zXSKLLehcK89JeejAxqWFQtEyMZTMyjRTt2eQsX67tolXz5OlcfqsjqX5oc0U5%2FRtGSNA%2F2Jqz%2BGplqXn3zeaLsmq%2FEjcqNce6r6E3uyxuEaLh9BNHbsv7mCweMxiGk7imaGMpCGB3U7FobNqX4uaIkleT%2B%2B8fHDzgNTYYE0FN6aOmdwumkQ547Z0K5Pf03wX3WhqcLvDQ1Twokor4dPnJ1Rj%2FhzMCABxnejskCS8Gkt4oNfh6bZMoiosYiWeaTbmBE0gRENf570XAvxCFyNb6pG%2Bc6%2FJChbV5Z6HgJs8mSXMpGKrqsfbF%2FiPKvZ%2Fn1tXeS9WoqDnRF9cwUk%2FuJTH2gzIxPiSc1HBwe8IohiH4aosoAIwKRk806ttI8Oo2Lf4hgjP1WMPGZX5JJs3spPG0D1YD9XqTY7qlGMNUDx0GoCPut7%2FWmqAigJEb9SdslgQj4cXN5BuU0OFQ3HRs3bDitkAlKORhqxa2xFNpA6zMQlZ3k0NIxjDK1DaYVqNepuTyRjq4hR%2FxQAML0a12UJknwATbzOo2Rq9BS0owjqCw1AY6pgFSDz1VQFD%2FCSla9Al3fwH6AyfUWgt2LMm%2ByssjRqzgV5Ne%2Bst3Bma2mMAxU7iuUxB03jH8bmZmXO6fUo49fJ76sf9CrOjFQu7PSpfB9LYASsWjCbUQm8n2zJubcr027uxhkcB8I5Q25Q%2BLv%2FSiUnjs2yoCX2C3sxHDdKsX85sHMnrbso2lREQVChaUGqF6nOsYL6ZZm3FJ2St9yYRrfMckaT0slXro&X-Amz-Signature=53902352696aa11bde65876eff05cb4f39e933f0bf6eb22d04e1cd49fb5c29a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


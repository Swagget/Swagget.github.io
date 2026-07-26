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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMEB5IX4%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T012526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCPh1iWVz7mnyk4rHvUmqOmtY1OhsXSjUKs7hfgsKS4zwIgOlBgpCBMGv2E%2FdggV3kQXfFNU%2BWxZTDyUaA45zOOFKkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG6QKOJxttYrzAXmxCrcA8rJIxnn8atrDXdTnYvbXfIBkf%2BNbl60OEhVopuZiKfx%2BApR2sT7lbWVeVNQEjxI3vrTj5skV3y6TXIqcQ7sv1LZ9xvqpsJpRGCWqJk%2FeC8%2B%2BWviPnsosqhd2YwdvNwNxzWCLYQ%2FcukALCbkT5OGJSPS6MQhea7%2Bp1w4H78SbguhHqkQaLy%2FryaZE4hnkjpxgTozVsyanCyodJB3bq4EqHpuoMTkm2Y17yRTQHH2rBnLkakt0wa7CkShYBVhY5%2BRnh5hB0pjr4rN4JogWQQP3DzQvy5PJB%2Be8Z3lGxRk%2FUkV2cUIjwp1Lbt8iyuCAN7npSx8GmXhuW1yUFi9jPPqXzvXApy%2FaO1PLieHyeoahtUA2qC%2BdvA%2F0Vh7LLiXbjpLtHA7HbjFd0Wcs1edDxtA5K3s7f%2BQfqhBeh7ldmyflbrcbyvLmYs8LPsBUCK0GGhlEfganf1UkhWmg8j9g8eJR6Odve5xsNdIlKKDy5LYmQgdyevJf%2FzKHSuz1xtLdFoviHVXJgansexeLlyebyqGGCVgFy%2B9qTz9YHJc%2BAR1b4fxXiPxZ2OyaWHsnNebVlVeWNfqg%2BR%2B1CymUFX1cNqbi7Rmqd6%2BBGUo6vO1TfYYePtO37GKENzDjYpEUIBqMIirldMGOqUBSoajW7pYSROR3z4xVdUZhDWTcWJDDvXwXypyurUyYue8A9TqaTQM3Ew%2BncHiUoNpyUXl3H8rIAPwGwPVwjn2bltDG7%2FeUMeFRTi7OXiEM64UmLIgItR1xqjkwwh6Y%2Fm3b%2BM3Qwnt5T3Ghs1VBj3j9Evdmv7mt4i51FOn%2FneyiI2yr%2FA0aWkqd5NZBo1R2yf5fhbpMvmCbbUZ3V5UYa9Mm0KZ5PIX&X-Amz-Signature=2b102e19f3066cd375f08dd7e8b74f2e0a4fd4519429d065c48f2765c5441e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


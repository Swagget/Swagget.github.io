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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFXNJK3%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T224206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC9rQYbhAxZTrp2%2Fsz%2B3CSrWHLDHkYjTycmTVa3ZdMj8wIgOhpa88blfpzY71xgMR%2FisUVJyHigpYagf%2B5YU9PybR0q%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDCH6vjz2greBOOKo7ircAzhL2wX8CV6fzLTcNJPlI3nCA8Qa%2B%2F0a6InI%2B9qaEWyW6%2B0woHlYT1PDXMcu%2FtdNwj5n2j6KIxHBPRDBK2fZj6GE0kUtkGM7fHNdxa5YCDfmr1lNK7vwNv6%2F%2BfmRYG3dvc2ed9%2FjsUDd3gKrp4Z6vFFRt%2F93BVzhy%2Fkh3jfDpOKBwPNo7ucWSzN2OZ3EwQNvEjo%2F4pCUtShwPeaYLT%2BcNdpuDDFCkyeiz9fFwzsT4UEYCeF%2FaAKEOHS%2BoIIaPKjMgAHgP7%2FvjeDk4ZWAFiPt%2FAzzYeETfCe3ukdk65cGLxFFAT5p%2FLBmwrhJgLkslD7p%2BJ73eB8odxGMeuxSIyAG5w3Gfsp0L6u3eUUwb4Jacym%2FaHv9FlDmoOlETTa4PYh%2F8VUBh3ekgH5UPszb78eYByoSs0Kx2M8heQasTOjDqon7bL0wGhEV5CtFGuN7Ia7NlLxfttj4o%2Fd%2FUpJwh32D0aFzOz%2B8fg%2Br5ZJ7JFUckQpELvdK70ntDFzGFd8iP0nvvmiwFTtS0VijlA4PIJvsK7YBwLlVbbxejBmTkd8uastFq0l4wcGRnAb%2Fh7cSb1hY5uBs5Jgbb6V0ZKam6YrsEyJoLPJfvaf0q9QszdG%2Fy14is9nOqQilC%2FPUn6gaMNO51dIGOqUBP6z4DBQeFRn2LNiHkcxmq3sjlRfYqjIsW5%2FH6moiPdlv83ni9pFKf2fJ%2FfJ5lV1yNWKZZFWw78wBfqkOHtJ44VGHK%2FKgq2Z84mzFr0nF9pYsb230cwZ9ss5MnVD2kbjDqqKdS%2FpZK618F2iv2HGh9GDNbwQVa1igqFkiZnEaBxkqSlnGQr3xgk1wFkLogn5miKo9KvFyBcj8o%2F8xf37FWlRrFsXE&X-Amz-Signature=f8cad77028d6c5c62f9d5ca263801685f26a9347c9122fec3dc7b2a4be2d45ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


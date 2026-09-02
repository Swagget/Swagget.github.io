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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34WA3HV%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD4AuSp9wyolXfgLTIE7mdtP3rE17VTzCHuNvqs15rO%2BwIgLiAIUXgptipdW9xxjkI%2FIwGMN1VLMv7ZIZy2WyppzE8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeo5U2d%2FqBKP3Np7yrcA5WQ7L951gawIuDfqakA1cgXHaM9toRWzX7aTFrwQcRQoHrGwZ3c%2FVAWNpTYTqKprgXr41fGRJ3vQp4OLPhWb%2FaQ96fHLb9c7%2FZAICI0SX1ziZEy7LanwUZZmhW%2BX5MXtsQBFDkJ%2Bx1Jwd9u54LLyj1ZNPwVXPiBT2ZYaRi%2FbhezysRIi4W4QuaI2fBf5b4dykVf0nKBSPGKht7dAL4vKK4lMWsfsNcrDvsoY6a8zefB1teEfZ1c5gY7LPfLiSSaMAvU%2F8n9A6whR7ozZWdiIXjKXnJgMSjOgNRHZqUsOiO9jJWGbSAq4lKwlC54ornzQUpJANE4nC2jh8zdHzYYTOggVoONn7rc0Fpc1162XGH4bHv%2FMrWLMGyoAyhFgb2RUdVw%2BX2hPAZtKrNoy5gM6mDTF7hkrJ914vIRMctVVGJjcouxlVBiXrircdR6%2BnVygrC9YNUM2GafkaBsaNDTQhjD%2BPSM5VjEeLyo3qTXjKjRu1oTeSTqI%2FdH2fRIc5Fmu9estPBlqTMmHMqQM1r3YL3Sfb8vdLH%2BfqFnAULItSOspZIYpTlraoXxHTTKW%2BikaOTyGjhz8wmVp2GJdBJWPcBdEalJynZedx4RU1XbNJagN3HgvEU9ysaN9AkdMKy64dQGOqUBlr153Q%2FxXONRDKp11YeqUqjO24imqi4pX1MdEpjXCbi8QEotJtSmaRT0ey989rUcJLxRWwgbCCLE5fg5CcoSOaZm8%2FtJlk%2FJtnCycNpQrWQ3Mg6witACFryBJLXsb3%2FccYYa8UeIgVQq6hXBgBktXlt8tC04fsO%2FJN8FjQiZbZfg7cHC8GxfWHP7ZTKYK2IJgQ1Erc%2Ftn0b6tP%2FucjB9YCD7%2Bfr%2F&X-Amz-Signature=e6e60a83f9b0fb812676b8b2e1fa3f7048030d87740cb4cdac05fa76d5d7c06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLOHK5T%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T171519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHk1HYvYXZ3v1rZXkMgpWinFmIWsBJdQ%2BIISiv8BS0aeAiASKSZq10ruwSEo0u%2BfO9qc%2FwEyo4xGZ1Mjec4dqVjMbyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMbtVIFgBaSBZ6uGjvKtwDCkbJ6cTgp0Fbdlv4y9TYgjN2bdCdzmSMTxwwQf2w8RmIR60%2FNuCVQG3Cq2I46nn5DC89VCN%2BJM8ATHw9HWhXwSHIMjOFlYVsKsiYsqTPGCFSjMV4tgbt2v%2F0pXx0LzIvDGHZxOljEdaOX2Y1PWremmpp9YI7E1dU8%2BXcG9v4Vu8RVidjuR0ZS2XyRxNoIG7r%2BaySH0xyRtsA5LwM9nrHOzJWrp5lKuOnRVz21vVjupQSBRkrSuShyhOr%2FtAjVQ9zyjt9H%2B%2BTAvmOXtYqWXZHe4CTGjcKNa8QIt4e5Cd3%2BJ7hZ3HreCxps8s1EtJieFf4AxmGGMEefw2sGBqaP7HyBh4dEFBsj9043E2ASc%2BSQLou8U5T1YMn2XUn4DncAEPMSQZg62cg9aB11FuS0APKUiIhbrkc%2Bqb8Ex9%2F1NN%2B%2F7Zl%2BBa2wlH0oVDB1IPFsq6P%2FltqhJKnN4S7UkOnP4%2Fz487sRWM4SESNNiPdkSFNZFHsFL3HmwWj3PIXPgN26xwrR2C80AuZqzIo0Gg1d5Nk3YyrsAmFRORB8c%2F8iwTWtPv44crTkycJ0i%2B4BG0%2BGNX51ahrN%2Fi2pYgbjp6mudn2cIJ5PEc67gwqEbnrkzbt29qnt9HzmsYi1wzQI94wivSL1AY6pgGnMkcY5vPT%2Bm8G2cCqOhh7hISWkhYV6ekjEcMq4kzwljj%2FUe3X9NkozQiWouxOEHYqxXV%2BCuJgi6%2BEanT9yLV66t%2BZP9pVtPEPiEkICbrUvBm2znXJHs7rJCDQQDMwW9m9yqTUFuCjXg3GMsffazIJmPmCHEL5il1LqaDKsNucA%2FRKm7MM9%2Bk8EDtqjVtYYe3cSUx3pzxDq%2FM%2BOusD3gEVQ04N6wYm&X-Amz-Signature=9bccd51becc93b3d84c891ff2413e74aa8b2c18fd7da09a71ecc2043dde34d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


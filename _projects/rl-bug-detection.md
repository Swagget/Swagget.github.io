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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZYBQJD%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T181808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuBedj%2BvuG8WC00nlk6sum6PCHRIDIs%2BSsic1qotsvVAIhAOOvE%2Bro4TvHlKcZMQWC1obWsYJMbIL4KMVQONdzo%2BuNKv8DCGMQABoMNjM3NDIzMTgzODA1IgzPaOEgnSRp%2BK99cE0q3AOgQuz%2FCQA81veV%2B1mT567Src5WipfRpgtiyL51GduDApnIEedzXOM8rmKtdo3um4cxL6j9e8xQikkAAXytLqCK%2BITU61OD8k6F2zyT2cgljVvP6CjYr324SmO365vPtBUg5zultpV%2BmHl3D3WpgitN%2BWYX8yTw17Qt5iU2spi7a4rYrBe5jRmYri8QG%2FBK5CSJss7ICARp0RpHeThgOVXVYxiOeuTcjqMsdrxJYOllO2YQPDFYbbvjwspcrn96pVErYEoD8wJwRimTafIjorpodWESY1gmR16MOHzESofwAxLm66fiwMpRVpmQdKrTktsqvjhvbG%2FirasP%2FWSkBrV3o3mu3GH%2FzK5LgXACLK9nnaxnijxyUV2d%2BQWHLzYn%2FnAkVR27fbU2%2FIXIxJhFr1E1IfV7hvKKhsMEuXjdW3T0%2B%2FzlDZSpSPjpp%2FG0X1CGl%2Bnkuhfc4u94M3OV0RGbCHIq3w%2FJ8jQdpm7nJR6XOubev8rvmgiyKpntAxBhASHN5jyEnhziRzo3ULF9LCMBo1old1Lph7%2BGcBeY%2BERHVJYCEyLx1%2BSTBz0mP4SVpzZxCE6cCEbAjJBZ0tPrzyh5mOt9pY%2BlQEcrHYlIm7j0G1YxHRy4CbQhyqPQAlatFjDUupLUBjqkAaT8VpZ9Z0PnkJbflhYhyz4wYeZ3j0ZANduDF8G2fV1q8VZDHWpYP%2BUDcq79GU6jgWFYmH163RRqBZNtp%2FYTkJFbQMNPmmAeSS3I%2BtpDuexwGdUc7eb0k8oOfJc2WNMfN8Yaf7oXDmooVp3K41ZC4isdpUOFkxQTXH2M0yG98Spt%2BLL645lBb5T4YD%2BAe8q60x2LF5pUyNV4oslgO4ovVBearcxz&X-Amz-Signature=dd59849a2357eea0fbaf537968a34744a39b3a4a6bc43441ac7ef4c833e6b194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


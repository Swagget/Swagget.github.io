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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOPM6QP%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T051951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBjzw4lyQS9AbcCS2MaH5beO6qKHy0sLJpX5YQSgG4gWAiBquHA1%2BPH0PIC262%2F8gsFzaPZvnoEeiNRuMPTEi7QdUSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMjk%2FmL%2BltMwwr4rx4KtwDCbA%2F2fw4DaUJxgC6svH5SPNAd2eZsB1wtnWYnLZXqQDfHcyv19A0xLL28GM0N0bazSvBRPm9HarfYvlBjz3tZqs0gNQPt8TcHCad%2B1MpZELs4kHfIO3bXgKTjN1hTwPWxLLJeaTqRt7E2CD%2BSzKBXf%2FVAi5ki5lQpTNScWn6SiJJ5tn5yZI5RpJcR%2B7aOA259Eg5oGgFEM67KNEIZarFiJ5u1rDuR1%2Bxkiys4gZCm6c%2Frcmfx%2BPES6w7V0ZjpM4A8K%2BAbQRJtZ3QxBJ14XSWEUSkMbEUILXv9kNT6qY5nKKhe5rMDrl2%2BcHz0dko7O4w7cH6Tlq0hlhvPuzX4ZlbuE8Oob3SoKpTQLCxwfcimXbp4B9zpKeidVq1E%2B9DgviTCgZzhXZqda5IM2fd%2BhrI%2FlXCQ6pFsBIDB%2F%2FRzeSd0tZqiki3%2F3qy6It34avuvYpRhI8aRNaS1uxo68BwCw9rIWpdApfYWmxu%2FLXN61fZpluPolzA2WEqoTRKDpnFv%2FFAmXE%2BJvsNn4ZCEruxBezp0qlXPYQF8kQ9Ks4jRltA0zNWaguXiuo56Nr0Dkhr%2FYbqeW%2B5et1OxTPl3E%2BMKpwldU9k61xvcWBVofYFVnKHNG2tkeKofp93Lq5DT68wgor50AY6pgGdP%2BQLWp%2BMOtN4WSLhhjQo54NmD0G6H03BGijEHagjUK4qROyRQFxjiMgD6mV0ohInYYGVSDF94RoyZqJX1poIJ87Phhq7W8Nj2Iy7LcUqH2nw%2BHlKNQ3pTd0X6g9NkBoNMJ%2BNQGC%2Fu8iTOVNxZmYO7GLzU%2Bq8%2Bu44SQkfAB3mbdRHky4hiLDZuQ7c%2F10PxaGw9AVK%2FCtwnP5jsAJrqMJUhz1rU%2FOO&X-Amz-Signature=9375ecb4617d2f071781bba164c8349d1b8cf9b97c35dadea32823513f2e9206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


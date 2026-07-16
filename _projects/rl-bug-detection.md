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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRTJWONC%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIH0YdDPIFabWVlHy28zMZdfbUm9wIgIAD4T5iikZIYn%2FAiAHcXZlRazLceX9Mmd1ws0mTyDQfu9HmrOp3OQgbUVDSir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMcUImX4jtKM4yXLBiKtwDx5XUQDJAhfhCnQr6tw6my2IqcMUtkjm7nWtuwEvd0OKHkqSOrIveZzgiiiRz7flABnJVpE%2B5j%2Bwhpmk0mlI6sT7yDmB39%2F1RO6N%2FeJhuVT3kJocDz9gc5jAy41bzeji0DeABfw4PRGtbSh40idUqJPusoAtFQSHU6IJVFUIQ76vlM%2BM2CGfMvbBOamseF%2FFKZb1r0QdY4NRINyI02eBSyS7kEu24CFjN7xjujmqYfPcWLOghyXCqMKFM3LZtGPYBLg48y2uHPrc2BRNRz6b46lHHmjZQMwZ47OaVzAuFfY%2BNbeL%2B7oKx1ZXHW9Q2uVcFkG%2B%2FHuagFiFeDfbRRoOsDGkwfw9Meubt3wOK%2FOqFSwQboRSC1j185%2BlSBMB49e5HIggWuqnCMo5sW%2BouNw%2FClcpfa8CMKeGxpEo2tSHtlbdqJiGL12wiZDTRMFxrRNk7hOq12cTelRMgzR06%2FANfpX5DQ21ZYrH3qdK0F6irZVjKZMsLaml0TCVIH5WCKkQbBLdtAUkKADip4p1ewFlgF%2B4t3T%2FyJFLD2jgQW11B0MnOFk71ZxBwfXhRbjAcHlB%2Bbim98RX2%2Fbvcfdd7idS%2Few110Yw2xuk8V9TLFhXibBtFnF%2B1eRYMV0knEYIw28Lg0gY6pgE4qd1bbOkto63NAfQYyJ49LSADEha%2Fs6gXlrZGLuTVIz0y1ig%2FGX5nHpoD3mSDEIuoWkVs5H6JVXDhLuqywECGf0sGR2O0YLFqMWSnWnVpJmaWJOd4uSe3QaqF7SMWe30QBz1sYhWEWng20BIExD52IuZlDwNEzGPVJ0hb8JH8Ju%2BMVQA0K47b44OO06mThYvFVRnOG5BqEbniFtPuZG%2FyttMcn%2Fg9&X-Amz-Signature=32556358f72aba950b7df15d31c80722c907b23c7cd17371c075a579eea7d7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


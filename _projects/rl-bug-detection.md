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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3EFM55%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T033335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcGGoRyuHaVeUIx6KCxKBLips1jh6vJi0XS0fZPOrlWAiEA2Yd81Hzvs45TqxnxOd3uSVP3JbhWN48q32PjtktUxXwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEHxNSN5yNftFADnJyrcA%2Bl8kJciIqY1dO34NqqOsyILEL5C6OHqSZoKZUFSy0Jib8MQFsJuuNRotFl4rDi6GEwGw1SSXCJR%2FrV53T40oBkTX5rkd4t9SAvw%2Fe84nFXfuGoSNpBxe9johATR%2F6U72l3n7vTciUynVBTzOIhpvyz1pXN%2FFWeA2KxmkLf4uZm9iwYy4qsWbvjp%2FmCJlcq%2F7pWQjLVRrjWYhdAuf24cw0T0djN7hkl%2FurXHW1fn%2B4PcZGi%2BHqh3R7APiOxToGtiaEU2sm3AER505XAfV6P4sOCZ3nMB2duyRogDxHajGa%2FqSwkV9B3F0i%2BqRa54cClbTGz9wCfipgVFArK0P6kaIDEwnKEVfBeuPyCvziQSz77qaWWe%2FRTEXLysABXmSlCCp86BJJmdNDXhVtRL7PZLaQb2mJrDkP73NJjGz5bzNyLGTs37q43Ah%2Btah8sE0SxfuDGUO%2BobBQnr34GU70AKmyvOlHzFT9izyXTY4XmblAIB8QNN6C3ou1fZXG5E%2BxGzd2Y81tkl4UnKS%2BFuCAuGvlFm3BjdLX3Zzo6Rq836MNJu%2FBLnHPLfYDZkn5yBlh9vGQ2HUL0dJHdm4K2f08rahtZLTchVcoIgU19EuDVf1ty9UWYtf%2FO23H6UCHM2MJvyjtQGOqUBWMh9LcfvaclrIf69R02l%2BKbtzGjKLXgJbhS20UkvniHjyWvcrJ0B10PzCx29%2FmT5L%2BLFT5GtvD0bZKgUnEBCaNGrJfEZ7Z7JjaLm9c0Uv7wrjpNff6JG6Q8tdY46OX3JHx1Qigp7m8Kmv%2F8kTqOcAzpO3ZRrEBbxyEnbR%2F3yrBmMTI5i78AQThDxJF7Ty%2BGaoHF2THaMI%2BEDb4%2Fuc0qsedhglgtD&X-Amz-Signature=d6c94719e2d90d32b5880be35dcdb9e49d0ea0755b6a0fdfae25d61229290f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


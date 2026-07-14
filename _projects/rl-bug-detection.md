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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSDLJ2F%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T011217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCqTPTgkHizW75tN%2FRyYzLqpuWGK%2FJe8yPA7BGdS%2FiEtQIgSlnxQ0pPn%2BfqESAQRUhAT816olrpfgo%2BI3K9WulXNmIq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDCM677b6xipbyVbxmyrcA1GRTbEiBbnWXG6hspS7AHevnFb%2BpapkGRiVLArbsTChLgLH8n8EuD4ctNf%2FNzvNSp1Kp1tJyEaBdfzZSk9z1NMsn8Sc%2Bn9zwcVaVOv3tcW6D1vKR2Tq76icPgfhn6WOS9wiRf%2FmzoO0uqShg6wTyyT1cPW5igme9PxSvERS5tEj1%2BE%2FWz0zLz28bsAGlKERrZpohqpcX3cE0weHwQEPwzVz6TPKZJqvWhNVznrZ9PwvwyWDBWyq%2BVhe%2B%2BiM%2Bl1tUKqLB80oVOE5qrZqJZw60svMu%2Brr%2FPW5Tle510v3tdL9w4ljeiU85EabqtNRc9m8kIAX5TdfM%2FF%2BeA8Of%2BKWJwM%2FIjGASX1%2FvUdOYe0lCOAhrpMPq%2BqYzFR2MTj2Jn0I8B57nl6dmKlgSvVagZs4b%2B3qrVefue3zkw2CGItohdT83DZQvL1o4FVRDkSZPBb7jOf%2Fzg8yTQ9F50q%2BWrJNw%2FFGAxvwie55MFTCDMRg0oer81DCuik7UIiaq77blbFEIi8xwZO9G28DOu%2BWFcp6H7tmVGy2b8idp0H0sh7t1MpVZPEUK%2BZpPXdos3NtnpWy%2F1WFwzgF2mm8KNfE3fD5h58abQv2M9FIeDDPzPAPdauEbi2V7Z1EAbKPvzElMNPz1dIGOqUBjDpYma0%2BzLVvm%2BZJ5FQXk91mcizeSvBcijP0qIWvmRgeGm620uZNNjJhIFMAAI%2FOCANqSu5QQ3WsrV2zCe4arzwLsA%2FdM9KwxZgOJRN5tyABKau06Twxc6u4bGyPgJmCDpTNQkT%2BI%2FJf%2FcFSUyyQsUiT0UIiPY9ostI6NiB4H2wqhNz%2FDgojOucmupzPZ3uCTusk8EodGu%2FuRyoHoDzE5Z%2FFdt5f&X-Amz-Signature=8024294c7a38990ddb70f4185fe0d4d42d868eb6b4dec3ed05198d53b19441bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


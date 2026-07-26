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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIRDOJM%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T214457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAGiLR%2FitvvC%2FDUEwR6rbt2SwR47a6yGDQ2ma1STk9rjAiEAqRIeFjFHWJne2GV5ZhoHou2QqCt2CYjslsN120x0z0kq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHcOupgTvxTbmHEyJircA7eaZ3KshRyTFkXqHNIXmrEq%2FxYga34qi%2By3Jv2OOXbvcKUxmWCRniXsa8kzsNUJPhYS2E%2BanxyDTqb7BY8T0P%2Fuh6SgWJj4GzeN5es3sPXoeqicEhc8lZ%2F0s98av%2BK%2BW7HjPW%2FZN5EeJvCeSM7U63iOENB1lX34OiKSlAvzGTN2F77Ji8NE6Txpv7f0wGsJU5M%2FVplMg8Xpsu5ZGIDR6pTXAQbyRd2DCHzqiB9gRfIOTbhu9ZPUNtHuaxLBjSNqz%2FAxvLDf1uWhMa5xWb1V3%2Fyq%2BP1fOEdNs5BEuNO%2FFBlOu%2BuqM7kMfGZzoNXhYfrajWJzc%2FKvdTi1Hsx2Xafa6d%2B2sU5%2FDACXHoVmb8kqRmSPMM8Z69N5vuCJikdJxR53i5msePEtCV29oj1gA0WgnOeg8fi439zuZXRbgxx5YA2H8mpC%2Bvol1RByaKMWGFKFzwPT%2F%2B0z5cN%2FTZIRUT6K704aMbGW%2BaIggDWnSbvN%2FUW3b4h07DvBSX5q4Vj8c%2Bt4O9ohYlbvD0FnAnvR%2Fw0Y2OVvhPpCAfoLEzx%2BeJEs7yq13m%2FnDXIw0Ij93TABPPNfIVyF1cn0V1u5T8j3Egi2puj9id%2BDosZJmN3NsoX5wiVXqKt1Q3X6c5%2BHBBUbMK%2FnmdMGOqUB%2FxPiIOWFUje9nn0dqUxTx5SKuFbuVWOKlihLtAWdvLEHpH5quxEb5G%2BURPV0VqbC8Y5NzRKwgAXxmjf3E75v7NZl%2BZDLg%2Fd3cZO%2FJw9f9AmYYSdTn1UpoZ19BH8dDN09XZffOtuymBIrk%2F0CMuokrOcc2UvzHqCt19Pa2Qhu7TnjG9m6tQhICYiOygrnReJhrmUZGOvuKHTHLNAiihGSr%2FRa6JvW&X-Amz-Signature=e331a793524005d61f227ffcf07f091f8e89eb4a0d4461935902e165a4e086c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


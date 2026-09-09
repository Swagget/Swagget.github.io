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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBFCP6S%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T211846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDCsM9QRdoxvHTCWC4vWed9KF%2FDgAbRg7NS69Fvph%2FBgIgJDucC9lwQbFobQ5CbADv%2BV7g8ZWLDJRoxtwaFBxpv%2Fgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBm2dbLKzzIH7g5l%2FircA5ap7nHfdsPnb7xn2swMMqVRD3Wq%2B684XL9aBt8YadRRUUE4m%2Fa1QBalE0X3wL1e6nX3dvrqq6IZ6rSPDpVGV1VhLvZAcipIgmALuJXnjq2q%2FS%2FYYvQBL9%2BpYPfqieRR4z2XO44CKHAT3goRiMcpDl8li12UEZRD0CsOA4ovaK0paYBWzwT9n7FNybkjcLQTGAyU7RZIqlbSMkEhNL3nr84MxZw%2FsIMD0yXDlketqOes9RqthDOfM6Cah72MqTNLuJAhkKspJw6qkJdXxhTk2z%2Bk5EeP0zu9qbTLOtCDoneTXE7%2BXJkimnJP%2FE7N1I2%2FKpwH0k2iP9s0MVQfF%2F6dChUl%2BsjxcmLbVec%2FKdWpgsw85EXecty%2BfTY6z0f8kK5H3xo8z94kSBHZjHCw6B6IiIS3T%2FuW2PiO4EWsXgSAv9GmeFFCFySZlkPac0I2u4VW2C%2BOhVU7nF1cynqVty32Haqnhm1x0Ua5q4pGWbsuvgxbwgJTBpOn%2Bt0%2FILe%2Fdr8g0l%2B1l%2FOn1w0b6VJNxlpaWbKW8%2FSlexsOeVeNXvADkU78cuXC4rEImRbIhy5VeFdS33Gsa8tbLSJG8Dl7al9%2FZjgxSMn5KYtrcYDVbFULAcJyTyGJhysAvRQQdy29MKzhhtUGOqUB26VaPzzlGO3OJmfCtYD5jQq6iEDX5IRGa2F3zC1BlQxHqed0icVGFfAMobhLzbWtLKD8nFW34ZbraYMmCK80%2FHK1WaY1zmP6l3r5kEwElRPbFfcaT%2FPourPCs5kZf8GLgauhlUbJlKsiZmg8pl0ZjT6wdGujeRogcQXtr3zohfQKjbW%2B0Tdpo0%2BxcknsC6h4JF%2F4ugv1ZwFOTlpU7NwkL6HQ2ask&X-Amz-Signature=4c166f2e7592fcf5d20ea62dad57e2410f211a1b9ec65ab26ac4c0a36f4b40c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


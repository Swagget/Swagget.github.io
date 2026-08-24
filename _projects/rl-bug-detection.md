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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4U23AUP%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T221245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICBGl2%2BKLZrVU1mGvOgSH2k7C326M36dMBP0x6C2t7PKAiAZGSwGDPqEf2Uk71Ho52woblNQ%2FZZ6ZiSFuQyMYSAcEyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1BZg3w6dALTBCC7PKtwD5CEg17laZNAQ9Zjq%2FOwIQuOYMicfzjeNxErushMIR%2BaRvbCN%2Btd1g1Eeohj3akTBNzcVx%2Fo9u4Z8ypNtKfqWClLrgLmgtemSRPZfMFUFdaLHIZ%2BqfzCpSuI3n6D0gt03PVtvLn%2BbQPVbFm%2Bsl2CEbvkxIIp7jZ1p1gLYd%2BilMp5ETmD9H94GDXLyRrIlNLZYVzVfGZsq49%2F%2B3OCxbFYWG7AJIfCmITEXYWmQxVkY8x%2FgmQlpgVJKEscXOGlUhkNv9TcABZcQcSKbJfPr5pN4f64UPh9P1iqY0%2FgykcDKYwSqnTWN7pk1BzR9k%2BmsNOutGIEyM060wFK6VVbrwzTiQqg3yOVeAkecHSOG0RGDHIDn6Xz24Xr4%2BKaUwzDKUU4gR3sW8jPv6%2BsrCCtDp4fPdwBU6491VuNi0G3GO1Ya6ZGuYdL2uERAnk0vvJlghisDw4gj6XrpIcQ%2BuL6cw6%2F9%2BRNEdXkvjhJ83AemI2ttRoRkznflLaawB5dCzcW8tULv0rvKBceHw03TZBxsrOGIBGScC7npS4HlGB5s0njXRlWtDYsMP%2BgmMx3oUJFSJoIjkwZuENBI%2F6nUz0MxgCYAu%2FZWpVqBBsWzP%2FUhleFxP0oUwZO1OqHH6FNjVXAwssSy1AY6pgEe1qO4igU6ETlyUQ%2FnN%2FIDrTsiHTni1UokHVTdiqnVVaEhXh4KPpt3xGpDb4eISt%2B20SthucvBurB4VoGzN12tClut5UYYXOWBSUP93iUo0YNfDpaWEI8EoT7ZcHFo6Uyv9xhh4E7IWKZPsgq8HuKEKs22qFMQWbnmPzK9f19Z2Xk6HWM0mrLNQN%2BeE%2FD3HGcA2ZbkvIK59j%2FrTm%2F%2F6NVNOWoXPCIl&X-Amz-Signature=78e65c017478acc976e88ba6a8fd19325dc964a3f720486d53ff77113b314b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VICMAWDB%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T150536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLUC1TXOXAt80hYm%2FveS3UfljQ0TbQi0pf1AEM0IrEaAiB9LcYfG9vXeTx397Qq2xzSPrd0sASgCv0fhLL8EoxhkSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6OM%2BpYfM7wp493ejKtwDYANFWUVENuZxq%2BpUiKiyw0b%2BwWl3yeA4eawE%2F4K2bOlFkC6T12yeD9HeMwwTdyV0hxTigI3mOQSfZqoa5WePTzji%2BZWWu6Bck%2BEHtwnc%2BANhWQF6%2Fg5ELis7J8pZLYK4tGp4KWM4PbqhlaHhaGX%2F6J2N77SNOxCco4%2BWg697a%2FY%2FcxKdyc31NvuLaP%2BVqsTcmvdYc001mNDhNH4J9yAJnq%2B7cBUJtumEWF0qZKWo1MgHcpkjlJ%2Bo4Su%2FCUqgGUVfjEF1vGz70gAs4WBrKf9XssbnqXfvr4xGLRJYu2LTpQ%2BTpyPVRG20O3BU0qD2oYhDeqIfXhrkwQPpmKb6Mp%2Fm5fULkRaYtjCM%2BWsjrnMnimnOjU1yB53lm847nx0aZFkbrE9YF%2FimLS9aIH3%2B7oyIicIng7r15xwQzTLykTiZgyRhGd0hHZVCKFZjKZBMbyOHVdK4oN5AZVmS6%2Bx%2F%2FSU6Quv43doP6Ys1OVyhHqzmteK%2FipwZJ4RZF3ESSO2WL%2F5zKxoT7Ta3drIgJ0cfzk9UcfUE5tpkPWcmt6wEkNr39VGntHd5kHAiLFpO4bO%2FNeD7%2BDUDE1gv8kG2v5tMiNNDxDQKT6dTu%2BySk3bDTdR4HTtTo5vggy3PLHs41P4wiqi50gY6pgGJWSWOeVK6hYXLmvw%2BGPSIz9WowA9BGxTC85iu8yhw28WMNSej%2BFTPB46Vn35x4ST7egUufmaMhbObHNJJ8OnCjJleUsoMGXgZJnzjSqaCL%2FNuVqUPyOIHis8cefJAGC2oJE9kJWvadgX3qgPvLqG7%2FSyM148TmX4Y3hTtJQfGZNn5FELM%2Bb5KMAEZ%2FF30h3uKdcNEborAELESieufYdYSNTx6rnSs&X-Amz-Signature=cdd801e65d643577af519f9823e77f78b2f343c1e0d0834e33858b97ccb3a7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6KDBGHT%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgsqDKP1RBt10fI1%2BDRJ2a%2BjPA%2BcsOD%2BbEAHBjBmkm9AiB1smYdMBTxdN4JlAh2eujj70H9tNALKGXYiHmmCftoTiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcaiga6%2BaywZU%2FC81KtwD%2BvMvMCJgXMnRDM36mmBn3Ivkx91L7fSNWkrvs10q%2BWNGu07d3w24VjRhG75nqSg2iJadkVQ74bv60Ozp8xmMXcEORwB4dtSdMbXChbWnANmNLDPkLbul9aHrutTNuwLa7tgF6h%2FKmPapAquuUqx%2BirE6SOi8AGv1G8Hido%2FVEwOelaKXPVHqpw%2FjwNRNuKKnKcUnMD2t%2BOeb%2FYLvjS1g7h%2BI6WEt9l6EYgKAVs0VIlwB1jNDU2LkUoZNykfVAGrMBZA9AycH%2Fhulj%2BjzC1JGu3ACKNefM8HODOxoefBBfxAlZ%2BYfh8Ufd3ZxpxV%2BgrXTqTk8b0YARijxXm%2FRWzuJS6USZkIx7JIRmIXPaqPsEqO6MjDQRS0nLG5gzgDS7GWkHaAStlug%2BzHHqOvGo8Eo%2FuDaq4zBipP%2BxABSYwIsY2jr8%2BwCjVVpgt0lTm42kxHjLiSGoHH%2FFdOQdDAGkhux85OCD%2BHR5RNuBC8Q%2FUUUsznPD6CTB7PwgnD6ur%2B4vJcByPQQNWTUmK1N98NWYFISGl%2F%2B49HVPNknZ7BrXX1IRI0PgqugFX%2B%2FhNUWv8tL%2F6t%2F1xYtPK7z6HJKkok9g04TLH%2BOkArau2OSiGzRDu3kKL5g7pKXwZzQkRFClpUw6LDk0wY6pgGWh0paqv71tN%2FWUMGpeg7qB%2Bg8ofWS1P5NZblYC7N7hL8%2BnvpvYg01Yxq2W8tBYbQHBpl6pKrnF3dFsPJ5OGUT6MRjeruJFKffmPSXbxZD7V6V4BadSYt%2FdO%2BNzVOzm1w3%2BmKdOnaT5jwhueCHErSiE6hbDVAMUMVpJlb60cKQObBR3IFoZwtK0ZPwMR%2FjSu3qIy%2B1uBAXnhjW5HMFVwa2ygFRJPNa&X-Amz-Signature=cbc0ce8a88be7fe32f8b8bdf7501391601d30aab47dc421900036d590bcda9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


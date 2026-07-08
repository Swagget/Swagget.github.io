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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SK3KQ75%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T045517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjqeP%2BcZcNPPY9310Gr0VJIJNMwatBxsLB9XypNISw1wIhAInS%2FaVvhh1EQ6%2Fp17u4OYsXAjeM7%2FT3rv%2BKMrBQOUoVKv8DCH0QABoMNjM3NDIzMTgzODA1Igwl8H15120SBNX6zesq3APShaAfcKWZcD7ymeYJyA2ag5uJuH3ije4%2F3ZVunqhiAp2mbg5efbNYdSSlO3QpP1pWqa4b5cNoFvI7rvcCzJwxW%2BibPxhL2PYrR0ruF2BedBPMDBm%2FSpS1G7UBG1%2FQI9vFgvVlaUk2OEHNWbyKZn1oUl1aUa%2BG%2BsRTMV5heAi4N6q81m88OHUdDRMyfufr4%2ByzWYlARt4nwLsPdISZTXoFzQQSTgFVHm5uY%2Fk%2FzNwrlYcCSjJesga7HyEV2wEBQfoFjotfTwxwl3AqJ8E8o562M2XP%2FHzSgKL%2B8E%2FwYhkB%2Fay4%2BHChojB7ujjRj5RIm2Qn44piLOJVC6uvbBKL68e1Xa5OuU2O8Pdds%2FtFdfebM4KN5eJZkhVFzZPfNDj0wnelvxn2MK10jikoO06eZPBK0qCzlaO8uXxanKVHwvQiDRv11N7E5Vmzsch4%2FSwzDW2a%2Bjzz8AjWHgGp7hjlpE2kc8vlghFEWED6N9Aly9XoMPHCLSeAJfSIxErIjThSFRW%2Bm14bTrLM6nkLn6L%2BWCPDpeKv7YJX65Xif%2BBbNzr7wNFJZoizowC0msC5XXOgARv5PajLfp9ZQxw3NRPXZh6wF4KuWVy6pTzo2uMQ1mWHkVeYuln3Z6fTeSx44zCUmrfSBjqkAVm%2Bb%2FsFUuiiY3KrtxEh%2FDQA5lHnGBYVVv9M2b4Gxr44Cah%2BotRLhOU%2FzP0LbxO6OXh18PkZPtiRUjt6PpZOX9IknAMa6dXNw8u2MkgSQR6dVg0O5LsN3Nc71zWB%2Fbw%2BDnHBA%2F%2FxmEJWhRwAF%2FLi9vu4fZQ5UDuB8ZZ5rYnVf1dzZyKveGmuZbx0SlkBDVdX5JcgqkjgeF3QC74xQ8k4h1Jh14z9&X-Amz-Signature=73892cb899a19f8cc87aed0372a0aad9114137402dbde67c45f178423b782dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


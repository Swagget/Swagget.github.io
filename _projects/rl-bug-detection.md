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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2H5IB7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T224928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDG4B8XDrl7rfKZhmoSj9LrU%2F%2BgOo2P7o8E8dysdhinvAiEAjERvp4%2BZd9O0AyfUHLQhC%2Ffrb3dAzVPYgoYZNd0Gg0cqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxyVIhV%2FonEhjQeaSrcA%2FvXottQbK4OOO6y%2FyqDsjIdUMCIzUVMaDjYSpqEe0CxEwBuo2DQU0zDA0eVLsV%2FuwbXK5IW53IjVy4jro1o9yOPBOlDyKpzlJC2FiRSyiWOKNIA404iobQ3fs%2FI2uSq6RnNKXdmfX%2FNxyJsC87xMjw3%2FWJdhGyxosg1M3cYRSywLHSZskh%2FBtqvFSMov1S6LQRqgjh0dNtNX8K1G4u4clXN%2BHsHsBWenknxjJQeqXfEQkx%2FZhLBCeTY4kchb7MwJ1C5kL5ozacHyVHpPq%2FUYvziXnQ9vS8%2F3gjOzOiXKMPhwpS001BBS%2FgwFkkuI644IXVPDRiPRQjiTELkCuJefjOnSqo8zRbafsPPQBSuVzm%2B5V0X6O3iYFTqnx4cU9Pv3JQpV9DRBMJ9QAk9qJluEH76rCz903jPZ2AulQtGomNBcgWnTtvsjKsjPyysJrTVxLyfvHqf6vp6TpeYfFTG39XnFFLvSUxj1PLzHW%2BoQg7vZVbZpuwrfZMTLRUGP3bavI51Nxz1DPp2MIyyIz8yIs7jfHKbUjK%2BswFWmJqAIyZaKT7CCmvhTmOZ%2Bz%2BWuoGVNyYhHWj4Ne6TrcTXv3K3JDMR%2B93U%2F8tBoEn5bvCZtjLrf86gsMw6nPKMLKzsMOC%2F0dEGOqUBZV3WoET4bAetXcc8aRiZka7u5B%2BYJASeYHXGFb5e3Gtx%2F4GNl53%2FfzY9EPA6e4ZWKQPv2YN%2FKJrNJLJVXkqho4K0KnPIA7VWS37W3%2FtdiQrBvFKstAiZwLSEuKCLkgOl1TNguUk2eyoTI5TaOwYzvY9B0H%2FopdkaBoXzLTS5g%2FTG4mU4VF0E21ceCaz6d9sNju4Fs5PZnR164AwUiLVzcp0YYS0u&X-Amz-Signature=144dda8b129fe7246e1da5b4966748352ab4417a2b9223f4e94af7db0b44fea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


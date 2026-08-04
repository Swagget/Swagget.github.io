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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2DU3HPC%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T221015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDxD8LJjttHb2qMeX3AZXtTWAwYXJCRPPSYuqEEqx4RAAIhAIh7IsBYYSnaTdI7YyxBRGTk9OxwffzxTbQgsWUKPDRyKv8DCBcQABoMNjM3NDIzMTgzODA1IgxG8%2F7DbfBALu59HJ4q3ANJ%2Fq7aWmHo53JnprbCWjYYePoSEo46qutc28CWszNzT2qEt38KbpkzY3sEHQg0tHqAfizKFWz5PCQdOonrDiJbn3Gm22Aje1mU2YVuHxzrc6RddWXPY2FoUJyeI9ac7fRA3IxQQZEs%2FscVqHgVj2dROHOKD3yXODNzUU3ZbpMpKiwe9kKQ1NfFb0x3vFOkqhf4rVCyA5ZfmPbD%2FMoLz4HPtntX0NxYls2j3xudIBo6yDYWHIF6Fasm45rmOvdg6wGCv%2F5N5Nv3KlRfwKo38JK3oy6Roo9jhi1pxeqfm5ElNlph1O8Xx9dz3NA0A%2BV%2BeOAAAH0ky9ODEcjo4cpqewOAX3TEqbq96EWXkOH6ObqBLzlsyiM2e8rbTUJWQaaXDyT4Jse7YyWpQB2qd8OQRWvL7CAjhZ2nXI7Dz%2BpN72ilLBiEzefIB%2Fw9Cg%2FdRkfmZUC7n3u%2FqWavz0Iy%2BSf%2BfdTtppjxmr62e0cdBzmFP1m2CCjLM%2BbNgxD0gqnopKjXPRyLVD62bDt46OxRxjlEmRRMdT7caAbto58RlStYxf7XkbXyESuEer3rTverYvT3Zoqvi12xbVoHZraeW2Nb7yN1%2BiPS4hAp4N3BbZf22OlU5fGqMlZMR6E%2FYmJAWDCoucnTBjqkASaH1ck%2BDFlAm6BaAwwjmg1c1x2EhADaIWydU%2Bor3PmrpEUtMmOch%2Fobrb746s3r2ewmkdEMlaayth2NPzGYTQl3xCiYKrTcAEt6u7NuBDl3LV1jU%2B1W%2BpvaF7HeNe1t1gXL%2Fplu0FkLWbpYD4QVDxero2lxDsbcv7koSwWHxWfUQ0%2FTT4TavVI4UHxWV1z4ZLUL1aZtWMJcdSH6tyD6xPncoYAJ&X-Amz-Signature=798b5cfdb5a2d6e244953826ace78872ac7a449bb2e05b4e198e025b797a8181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


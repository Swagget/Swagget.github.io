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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAEPOK3X%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T052203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIG%2FARqDaKB6Z7pSOCFmlUTPVuDy3Yf11Ubik2jP1hduOAiEAgSH4lVix0wtA8yjojQS3hGuR1VIpzCXYMyNTs7SPC7YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXNtz3WviZmSb%2F40SrcA6INPAmGJBLsOQqXo8LskYaFnD35nTA00ystRlCkcLrO4U020lWJt1P1XgHZ%2BocSVyNJC835O4BbEgXyNS02u4kWqwJQfFf7BxFWJVEpLZOEAHKaKtCd2b3LgskiHtXl%2BrFHA%2F0n0HUvXi4vYCk7ajSfv992U5txuc3Cm8UJxfOfa8aV3DcgGbKD%2FlBXclh1UjqUdMnEeLuDDSaUEQrrQ8lQ6vwp5OHj61pmlFnnVK2uUFPesvtuJYokv%2BAbP4q7Dn%2FKDBGQApMDKibHDkL6w%2BRiWEU6EnjN1DYo3I9a0%2FSpB8ufLFxTfLHYTpx5dq7aQbiPlMLd21VUuYg%2FFbBhfKiXPZAJzWGizu7975rGoXIKCMKsmyMrS8I%2BM22i26RjNR%2Fl5P%2BS7BJLUSStOBF5Oza4BOHvsG3DNDpUgCPSipwjmP3H8k9hMatY0i%2Bqe3HZ%2FghImsZ%2FbFlYv1ElgAPaaP9rtsYv09Q22eq8Ytprk4F6ZBsrlSJmKHcrX%2BMTub7Zzqzeq0%2FRoF3ZEfMOn7vBZCuATJK5HAHr%2BvnQ5iWLrijh8xtYUH6itggYxjpuIR4e9E7%2BjuJzjXqj%2B0J9jO6We9GxPeJT7lN5UOo8KIHWZjtgwkTq0KrYS5r6MV3kMOid%2BtMGOqUBu%2FrH7EDAkn49AZqx0kWUMn6dNU3Ul%2BiagUsQLQO6BaOgVtAAftU0ASoRQYRw6yActRA%2FTvyonacqPLaCB%2F8MriqSoauiAgMxDsuhLdOHIlRsHniUcqjvJzuEbTlKsjjVbh9drXKAL0MEDYqXcvY0IpP43KPhKa6vTQYIkzB9QJmgRrlG%2BFjAbZCVLlcZtB9O7%2FSUQvyzVx%2FeBr%2F1K3M8ghsZupdr&X-Amz-Signature=7b14f1c22e3073a34ad65729213b3dfee8257984d7b30f4319d2bf67882d2048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


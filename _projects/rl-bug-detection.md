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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGERKGWE%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T082921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FQi8zXoZ0ZOphvybjkWjIKmXP48g5bZ%2BxcQGDu4kDOAiEAp1xbqC1RzeWvbhLM2H80EDOGKuOC%2FBgm3w3fl6DxCL0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJnBucCfv15AZmqQcyrcA%2BsPO8CQwpx3jg3ErPokxyyBeRonicd%2FRIFp%2Buhuv7QMp05ekmftvroX3%2B729QJNJ5PK0%2FxN4sh9yhYH4HDF%2B15r%2FPMfPe1fls1DDXH6Yc8f2enMs78Ot4nytcjXmzLypFdz0t1adH9UO1TDvLXuaZVVwGJQB8llTrvpfraWXCz1CgTFRj6N5Hx0nrD37XltsplkDZjGq7sBfVd0ZxC%2Brrfzn5C7MmGUlTI5MQ4HnQEegeaJ2smEZubr%2Fj7PEYxhaRRgd8MOdfQy1fvmTYlX%2FcfBcmAg3aiJOTSDHnc%2BKvKF98dnr8J4wiM83yU7C65YR15sURvuqah3CylG3r3UziqfUSzQs2h1k79LppLm8pJvNCdXke6QtAv042Kv4UGK7R5In%2FYbr8qGjS%2BbUlMz73cpsSGShIqFWhSpQ9ao9RvdUehoy5gC%2Fbg1d4ye8%2B8dpH8FxALpeTxrBmVQuBS9PvWB4rQlYqk3SGIGLEt1SxQEaOnGE8HVK4dTWve0gm%2B88oHQyqGVL6viEgKoXtbnSyD5u6JOYfubdIGr4QAursB7UhPIJfMjtyCfV05rycdRJ1Tpw5vEE7VyiJcVQnNv9c5mZHEgklG%2F84M0ocRu4iMvs7xUn1aLLM9oCwhcMM3x7NIGOqUBHALaK%2FCdedyQRPKY4pn4vTgwvb%2BsPNxgka7YbReOiBwmojUbxML57C5Yn9S5nHQDWnLE3FMKweqzcpFPyMHMxZUbB3fEbzzOciRgnXlAFnzlXs7es9ocvVSxfQ3gdDWv63Ojv%2FqgrfKcZBWyk9e%2BRBjFFnJrfZikAYihgr%2BrbPlbmzow8G%2BJF5n1mLFEwbxhGzKoBA%2FWx9Nvzi0%2Bpgw%2FflMK4CCY&X-Amz-Signature=9c87237f420cf8b7278cfaf1a812bfe4cd16fbd1e4351b510c6a6bddb2d65095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


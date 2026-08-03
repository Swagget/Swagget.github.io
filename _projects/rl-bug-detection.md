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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOZVBTF%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T205135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDbXIzw6z%2BQ5aH4vJk1gdlfNlscPgftunDJFYrwP2Db7gIgWWf0G8US5IzgNHR5A3ox59%2BIx1qB%2FijaBi2EP3YZ%2BPQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErntT6GPEfVNNrvcCrcA47aVYkJ2ibdO6KGiT16AaggtJwWto4SmGy%2FvJKF1qwLX4554xPwr5xRQlVW9nwp8qw9SbGBwzyszpzQgkvyI1T516jAcpku5qLeg7A%2B0p8ps7hSzD08Ywhf9znb80J2ReORCuUj3fcwVgPJ7UMEDKSdA91P44%2BjSuFW%2FMDpPUfwu%2F0P3lfy9EX4XDSQyIfg4SbMCaaIZpmfLW86y5R9OAAyvOhYUF9Kln4RXZXSBzitzuDU2SYZs6QwwWsCqeKWXzuK9miltGxAjMfPSUGPTiGu8LV0HCeKPF64%2BU4%2BH%2FYif%2F%2BUk8HcdRvrUbIVyBCk5ridSuqLpc%2B1I0QB%2BvpvF6mS0bPqG1%2BK3PEZ2gwvC4hnXrxATM76WmgFf9o27%2FBNX7TKm%2FV81ti032ruSmYoPNiKPtDFF%2FvJfKQqhmso3SzE%2FDUzYAg%2BQbeUvQ327o%2BCMi%2BCuMCdQPPEKd4X8GbegKfuuvsMgBGXy6CRXY4hBnIChJJ1sHjPX9JbzMHLUGhmHHsGxwBLTG2GVz7d5UhrdFFuwnrHA7OCjzFjfqaipBAuONn1SQiYGQLd1JYSoz%2FhR7V%2BHFVPU9LIznVSabkFvynoG6KblHI1tgGyc3MHKhqCoGFFso0CqMlH0lB3MJXow9MGOqUBz4qQqiqdwnz5KvZZgiZrrq5OIJTdj74HpAvjXkaVozo46%2BMMf60zq%2F4ncol5X8IjyI1MYKXjzDs4lmHeszugQ74ep%2FkNcRaMsR48btlYVtbAZO4gF%2Fi9IFVNl4z2XuBaOTHUqVkM8r5s85zIccdxqfeztZ2%2BnmsDBxIjUrmk48Cyx8hODBzUgGZj%2F4rxpiWDgareFESl%2BcgCJZ6TqSBe3NNHQIIc&X-Amz-Signature=862ed6e9b5e97ecd5619a3d57425634ac9ffe506751454730e1e9c62d282fa7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


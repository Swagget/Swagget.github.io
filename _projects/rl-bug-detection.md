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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3S6P2G6%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T185606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmIuSFmdj94wQyYt%2Fiq1EoikmeAbOqSfpVBS0pUqi%2BQAiAap6RTZbmbpya0YuYurbxf4GjwkvAkrCWiYOU8xLQdSyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkh3sLMRLWNgyeHyYKtwDjdpOslSGdj28CbpUjlO4ZYPfVq5j3t7m%2B2r19oSawF%2FbRXu8jBUXQXoMHeEbOpsgiZJI0Uv8Rrzhs35GSBZs73I%2Ff1UW6Pydff9quzXrOHxVfG6nmd9vfYUThWTHVZymRe0xd2QyEqjfZkNca1lHAwHdpsQxsAXj1ReBha1NS5ZHPXhYd7Hqi1ypr4uwXAAY1NdsrsOny%2BFxJJrUii7U4k%2BCnaJ65TqylFXCCHGUNkOwyZ6UWjRJqakG4G2EMwHKlir3i4R54NE8ie6K22UlZEUeQm%2B69tP37kXdTVJtmb%2BTCwBQK8vk4G2jXfrZIzg1Tnm%2Bxw37Ei7JI1O9Ag2YmeZtulLjFZB%2BDh0NreCUM9GTK9L0k8E6Seaw1Wsh54dJxcly%2B0m42db4wBfFHogRq9t6RxYafhTv%2BwfNorSIgQcQl4jRmCxpKyVKx42X2Fa6cewdSQFPlg1epvli1EA55htkbJ9PQ0B3U5FxwaqaQVVxhU4LgO5rS4e67QHPmXS71DkkIAu19fXmJSDFF9ty6vmJ2gWXNmlwr2%2Fm8DFO75tveL0OKln3qOd8FFLqW0FEQ%2Bc1Bdjqct7vjA4v%2BY5Bd33lLFSv1t5Rsjs3t8wt3wc9zntqz8YkBXuQpGYwkuuK0gY6pgEYXPgZ2HYqwi3FSPJs8lqjVgpNthT%2FTk2x5935n8di5TIA7nP8DlB%2FhSRnpTDB0ho8g6cnjMzmH5xxN78Evjgf3wqZGMA%2BcQtb95ND%2BzVprek2SaHAFVUV%2BTKuzKBjSFhbcw%2F5Oxrms7MvvuYeCg0J42mvhahDLFIMicSXuyPj2gUUsaTs8GexYnT8VQUW1dT5WaIohxnRQgoMdApweivueT9T2VKa&X-Amz-Signature=fcd4e0e6cdb1fbb81b1408d2668e0bfc77c711bb0fff05fd8373c83e0ef695b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


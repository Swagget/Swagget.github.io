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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NFXICS%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T215045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC02b%2Bv%2BjzrQQRtFmaBKUfRd4%2FPbvh9mSB5ccfd2WO8NwIga9xNglOS%2B8IbCt60bxMHVytkTfCS2XLtySTK8rM8Rs0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5ROnijmke5Ts%2B7hircA8YHv7kfMM7IJeV1WfHDtS6q8xmjQExve6Jv4cenyqP%2BXKryNgihI5neIp5ZumFy0IZl6grIhRdpfcLCFZD2bEqIaiLNiQH0W51FnYboG7t7KXGzODMxHOdbBsUjyUNv2ZtLVef0xcimX3V6x237iQWSUIErabYeXazyTxHAuTKBmRNeaWrNYOT6SczfaVQc9f%2BflT5brjN41dm6aqi39HSFMZ%2FHMGJZI%2BoMYh%2FWksbNhUOQMbZK1XPv9Sy7YMAJmayfvM9oXDperXCTQnyfrXvbJowFVCfg8nMJiC10M3277QrKBVaiMUjIZi%2BG4Ygz4Y3jZQW%2B%2BBEneDNNlt0Yk0yuM0fbdfQo9zHZiJ7PGqaExZknmcAeZS5Ivi%2Fjnfs5T7pWtHRpeWKKURtAZc0gfhAVKIW7eX4v5q5eh5ajJ8zM%2B8YYf9FMETlORM1nGZ5yVDs47O8r0yTJoegtsiBfxrdxTmPo2kUWwavnFVs9Ur%2BxRZlKpR8Vbk%2F26by%2B0pUvZ7iynQiHJMLzq7A9b8GsdKNI3wcv9BJ6fehkVUdHHZ6D%2FurGUzF83DbIcZitP2QiPWM1pETLYKzNvKFTVWVFTC%2BJ94EvByRGH9WyN%2Be3snnJjfp4PeS2dxo35mhSMKqJgdIGOqUBX4T%2B8ObfJKHUWCpO3u769wApFNhOb%2FVznDBrGy77%2FjYzXXCtdufylR53vYy1hpWzsKVVIY7UMH8gkFc4h2Cwu4Wtsht9PLDDC5on8HPgQ926BUZPniKvzYL%2BJQR1tZntrEqkEWjtDh%2FhpvhQQUp4a5BNTRVYoW7oEP9jdr0ZFwZUSRuTxNnToMmvyeo4lCiCm1An8LmIJ7t1TIl%2BZhtx99BJ2fip&X-Amz-Signature=8ba59b7ff532af72d3d2509cef204337dd46a533db094f272a101f0d1bc7b4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


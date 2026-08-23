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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7Q6BJJ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T101059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCdxKwY9Yj3%2Fy0iRUpiZ0zRKWQUW4IPNVleGr5uU6o1RgIhAIDYM7NEipvRH8ITM2lsY6OmtCX1NTR%2BQ8vCciypks9bKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7HNkwCHxqShIw2kkq3ANWb34l7n19lZyLAxX1%2Fj04Xavo5t%2B%2FZi70%2FgowU0GTdZXwIc1BSYoPhe%2F%2F8XLc3S2eFS4FwHA1%2BwlWLwIE2M0eOed3RkUEZKIcjwJNAZhOmhN6leiIWv9s2rjlfo6MMdX68bf8LMDBn2%2BRP%2BB1n5mv3r4czFkqG7Q8J1UQgpo7lMd25o3eJ3sw85W1O8i3VAtuIClpxM48cdbmiXv58JtJ5fNlGirSff0HGv2x1UXVd8xu2TTBF4h4TRo0p8q4qbSGRsCo8eNutoS0nPYqCVfwJCM%2FTASiEjMCzxxQxhl%2BrSgLMEVT2fZuTHu%2BdeBWVakUfZdCGhSyz6DKDu0jHEMU%2Fq8hkBU939clEmVIi6%2FQwA6shp2rFTzOygIh9e5VJDjaI2hhq5grou8yWkHlRYLFQJhQMCKZicWRaUmyBKdemM1tWlTdsM7hKG2maHhO1qKsRKIX%2F4qm8CIF8G2kFmWmDNN8z6murfUFivDCyg6fdjp7ygmrQt5zXS4IW8n0bSBE15uQqav2lbqnt7YSdpLg%2B0jpB6p9qeD0jgEv3DhqzcMMHxV8OWlMA%2Fh7l4b2FBe%2FtvXVBJmk2sD0PPlSGASrLr%2Fo2jTQxe%2B0WC2JN0HePR9VFgMWgPulE2m0uTCF2arUBjqkAeJ1y1N0VPAOZBY8WvqWHuJzBeclu3yLMq3IQrn7vsO6RCe3rjI2KzV5%2F%2B%2FrOVxx2NBjIrV0yNKXieUE7340ci97HUUtZOigotrcWnM70u1BOBZlJ%2BnXr5eYV%2BhQ3pJ%2BMBQ%2FNErBWhc6KCKBpEIGob2TiXRwlxR8SVuznnN1bRBdTEGBT1zG2%2Bj1v%2BOh12YquHJs53bmd9HtAgnvEkDctkFxCvTq&X-Amz-Signature=42336ac6e7521ebfbce634a7a6de84b7cdada37cc00b2dcf4aba1ee7897c711f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


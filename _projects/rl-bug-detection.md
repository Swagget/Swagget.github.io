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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZUUYG7P%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T031553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMdbd50d9KrqjRDQ5erXM5Coz9DqsuC66bmTyiXaGtQAIhAM0EPFTaGlSp8TOmLtzGnW2YS47zRAe9Kv2F7qK9nHDhKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfyVTumDn82lEakRUq3ANb2VRIBaS81BHJX6Lghr3IzlClUHZi9A%2FF6zfmG0elwM1FfMrPCgEAUjjMTYso8d8fSvF2uyf9jftH2azAs7Giekb9F3hKrL7hFJ0U8aNsoCuWKkWHpRHbTsnaRGuaVuyWmFY2SlwPBAZSlVb7BrR477vBXw0lP%2FALkHbiur56T0KT78iPVSqwg%2BIwd9eaUzQAXDw23q4sXY2GVxtBsRQkDkCBZAS3JYscj%2Fm7ILXAzGEambNgnrDk4qziYB0wCgydFRg%2Fy%2F7X14JP0%2FeA5XSIwkAwTbhR19dbghzwEHAk7BLRw%2FD9YDNj%2FfJZpOxvVX%2FaECAWrMX%2FPqEvzoDi03Ewonq5ROg9NvJV0RZyI2Hof5eVzPcu12NcO1iqxUV5trobYwe3WbL6SeLNtidnn2ZvyQeTYE0Wxdkonvk91QmHhVRPtnA2o0I6zg3h5BrEcHyLVLEZXlHOazdSv3EVZGvLYOJ%2BPzfZeu2Q0nwWMcjs2zxW0tp8hMsJpw2wwiWyX4hejKxVk117cxCvOHExc8CPaWsaEdF%2B3SkdWvS3mHYCE1DB1VmjWeqcUdlzixehZ37%2BqIz4WWzWtLhXb0coyA9DXMmEI1ykUTc0RYz2wSkda5k4DS5kenWHxd161zCzqu%2FTBjqkAf8xvW0Mk4F%2FxARRw6cWEMjyGl4pp9%2BDClFb%2BxVdLyHkms0ZcUEmLMkDKDNOql3pzlBr6BiXiYs3JWUca%2FCDGZjjZNn%2Bxe41aDH0UYJtM3LgknUJdQxHtXsYLM7rHy4l9Guc1Odor8WLBt8TLPsXK8fFj0MaCM0J4RKkmj7xG33eUM760giF6r7daa9NLfwNUZckWqawsb4eR53Xe26K4j8vtTD6&X-Amz-Signature=6971c66881daf36bfd591168aea2af5b07aa4bd3e69c696ab63e7bb4eddbea92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


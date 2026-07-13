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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKF4XS22%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T052138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQD9dSW8Bmgoi3UMXh%2BmAKISN6xw67TJZDzgecZ2WDWiZQIhAM2TZcNMjeH8lCiHZn2Wvgu4zTrFkhKsd4qfrO5d4FNFKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BMU%2FRI4JLtCOXjY8q3ANhrBjrNoBgkkTu5pcTv23ZYUA0yeHloehhpfKldV65fK%2BGCcNoUZbUFgKwMqpVvRLrAtzcxV5WuyJ8MqIHfEam61WPU3We8LNJvHhESmvpaL3Kj1dCxLchhDxtazwT5m%2BuPsy2t7a%2BXsH0GdF1tYqytYxSoIH9mJ%2FmQ3PNUU0oRFEQ0tS1ixxXFVB9zK8m3mKUrlQ8H6dB6gVELD15X%2FSH7j7gyiD3aEDMB0CBAyHocElf8u9%2Fb6bTmu3S0R5eIQ47FHDzYisEhzBBQwXjmAUP367SuRjXKPGPDEKTB5xyrV4fCjpxU05EqAY4KhvIbtmWiTUo13pfdlSm5uEDWZYqkmFVFp0eFVk5pWNAQ2cXljl%2BeVDQ2XsEFtFUlAYU8bm9e%2FjSCxWs5C0DUPKj7tDCGdlz3%2F8XHHZR5TSxuLsjqjjLIbY%2FOsD%2B19YbfW2CpaE%2FFCmlRfhvyXUNLM3qQo1R8AGPKB2n%2FYAHXxMtDi6j1BDuf4QWs0a%2Fv1cOUdtspFkPQtQQIqB3ZBx4wUQWe2rIFY%2BSPFZ9ylDmvvh1vbK9zfyxul6wVOy9cG3D67PjT%2FXz%2BMWrtVsRGTtpdk%2B8W5kxISAkoAjIVQhW%2BOc7YItvqFZdM0e5rrM8u%2B1xujCsudHSBjqkAVaIzRl168ju9zMt2qYm6xCds8mT7Z8oa4YQX6FnKxcZoVytG%2BCNtvwdkifmbcnapzCiSATMj%2FoicsJ3fjBwInQhVSZw%2FPuBLIGUmZ%2ByZIApVwG870DrQR7LSKVAfTlo3vDvVG9%2FfcaePd37781lQgX6MQ2kOv5kogpAG7uj6I0vBTFLIj%2FRzeMW%2Byo3NRVdK%2FspJfxQf7ZIfCG7KMu0n75Niuvo&X-Amz-Signature=ecd9cce76f1a071fa58ab10e5bc3b41b753f43ac1c13b8e022a4f0e29b1dd57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


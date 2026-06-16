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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVAVDY5%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T002056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhuVpbtTBUzo8Nu0d11WYpl0suOyZhZSMSRmXN1ngetwIhALKSYoDUfPyF7WEC4xtPwDX6ILBuxsqWplC6kQxHWb90Kv8DCGkQABoMNjM3NDIzMTgzODA1IgwbQycDJbRtZr9dlYYq3ANpt0By6KGZGEHncSFKEnZv990mEsv853pLeTrhK6d8aFHDVTt4YYYrWl6VWpK8JYXPAqg8lCh3CmDJJH1w%2B9XluMhG4gzB7%2BtKFrA4Uba4cjYQ5YqPGm3%2Bybjxyj5qUp7GWFmmUomzrksDRjOsRmRH%2BePBEF1rUfjhRKMRTRgPtPyt1o9l%2FE9kTD5tyIiv%2F2WnMmrhyVmAknkBzpgnLR7k1ovqrZf4B8KnXZWz7OMjvf2INoh8K7O%2FwsoYSECbDIj%2B%2BaT1%2Ffx6YDrjVBw%2FRCoAw%2FZoUgv1HzTQejjCuuNEfXXHhX3oC5aDAMqvEmFZg0NzSGXZSu7p4FZPEWMWEbLz1ma6uiWIO6xVsC7U09QrtlEzJAv89GrA%2FoBoGZslviMrLJEHMwtBHs6XrAl%2FwboDRKrdoxhc%2B054O3KMYJpsfFowiC30FlcEDkiR7S1wKyqjqQGASSWVbnxh6z5viDSj6YpfJRWC29S5smUXulwh8SmGnd4rgg8elLHPF7iXbgU3s911jCqIvLADxlmrj86Q7pfp1BgTqcWK8r%2BsagEBQYK6rhf0xxgd1AILF4%2BcKLlecehfIiIpBBJ08%2FQ1oieF4fjcbOwqcRCtfjyB2vFX1Cm3xWRrDkUl2z7aOzCllsLRBjqkAfIbIWadOoRyZ3Qu7u9wcmcHqBpd8XvbnN1Gg3qMdfrCILA3V5PMEQC%2FwqnM8QuC%2FWcHKDrVgD8uKSZKwohqTXR4TEwNLzKCOgPY9CA1%2Bh8emiU6f1seYgsMqXCSo6H1Ma8028IKGY23DEsNbnJ0St28Kg8mxM219lWCUbQvO2vi000Towr8u7rgz6WAvbLQx2bc69dQvfIAa%2FAoTuZcbHorXKjQ&X-Amz-Signature=d51b4a4d95bf503c0a7881571c01a215b6c0afc34a16eb9dd3138aedbf7cbb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


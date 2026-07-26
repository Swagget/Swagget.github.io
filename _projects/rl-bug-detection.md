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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFDXSGU%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T051757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDbmrxbITmt%2BN4Fx0ZQPodNEtar%2FlN5qthZRCNkGHmG5AIgTlChvB0A51UGXH5rtdqZkd9qd0CvugLAIuYWqMOv6Toq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJunR4UgpDwoSEeuOCrcAz29S6IUs8I8H598KSVcM4i2lLHbA%2F%2BGYVKLT4PVRy0OOtQmUntnrQ%2Bn2aUAzkvGfUM50y3xiGBXwXh9VJ5bCG9D0AlCrYOqLlsIhDNA3j0a41c13zbXxJNdTyRmZeZsUuub0hYe3afQnZO%2FNLlB6Gz6Ol4zG1pDSR2vJcTxzcQHkjUOzj59dOzf2EE0cZPeLzqymL5CH5DkxvLnKfxyCkDLtJBXi9%2BMt1uYMNNFgoevfg74wtYZdIci1WDJ29ZXVOkL6q%2Bweu%2FKH24ZQ9FLXl5DQggL6coX8mcgFLbLJWE7brdDbb4FVXJTOQu7N2L5OY%2BimjksqPb3bDxgX0A4hREgzNpXBEoRrUW4XPrfV%2BGI0e46en%2F9IL12gOm9ethvJ%2Fe0fk2Zt%2Bz79BqM%2Fa%2B1c0CmfVHW6oUKWlt5bIq7B%2BeKJ2%2FUXVFj6WP81CsIap3VE%2BDhAu1dvzVOaZMn%2FHkkiWaU5p%2BfGpyBqp6ESQ7Nj68dwDw9k5k2JHIjZULnq8FwU086w1PH%2Bn0SWMSdfGLZZsDs7lQ2cwkPJLOIEB3%2F%2Ffcet7z%2BeiLvelZyL0tdCUJT12Tz8bX4hnXEaCJhhmSoZUH3DvEPzeNEPflzDoLZWJVVeeb516n%2By8vK5CCeMP%2BAltMGOqUBVXLq4VflXEPUSrnMvKU5WCVXBH5bg20une5JYO2D%2BnAAaBy4RZSbr2qGLnqRaDlcFwM8D8t5NFvGtGDpbaLK87EcMIehvQGQlfNal3FPQr0BriJY3jy1MAt9FiVVksHBNsWUjCSCejMs1E2VO7yKTOEuxx1WSbRoF1gyHAhOnwraUVjGxAtej6eOq8PJljix4bFFGLT7AnvOJLKrnMY9trgS19rX&X-Amz-Signature=3205d337018647b0e2e38fad41f69380dffa58750ab85578f1bf451c0e6173dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


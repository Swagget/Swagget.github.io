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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7NEH55%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T033658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLKNJmchzxzD1kzVFSGwyB4qNjWG3ngNPj2USv4utqsAiEA%2BKjlgkI9tjUjM9FHL%2BvFbk11EX6Os8Gohf%2FuZk6QoXUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjZHrEFriLWLtaBrSrcAxWVvRrI%2FgejGHuxW%2BNptHMXkHRIAbvDd%2FRLZmCnWzlkgKA1kQCynQQ8POr1wf2kn4wcQNsdBeMScMDEimSLvFC1CV8TV%2F7DNwkP7HPk%2BsvHUEnoEmhuHwYzunIBQtWxvbGWJHw%2BQBba5CTek6rLQP7P3yeR%2FPtEbJuw%2BXrx0RGvfBpAP7%2F7%2FGdTuw%2BpZj0i%2FcHBlxPQQ8tBXosnocxE5l%2FqdFb5KgcZpXZqt2730QoU2anf%2FuzKPN3hJe1RBv0LwN4uwpMCkpgVGyA8pXbusz3XyYHLrDMH4yTO1ym6WtBvlmkmSwWjPHA80hmy2ooJAQO06teUA2izmziojp2s8FqbnktrE1fqy%2FqX8f5XbRaSh%2BkOC6kS%2BJRUrQ5b9ZId0hYRzKyLRGXH1wkGzzjLI2nUo9MplegloveFO6NuqbD%2FW9IEavZUnjIVjhxRA7D6zr7jnYYWxSHbu6XV%2Bj%2Fn4Wwcb5K708Dz8ThQUtOFWeI7Mn%2FfPSHLMtOIS9W2SqM0vsZge%2BsPqo%2BtdbvKB%2BwDNfGUHUVoCDfQ%2BM4GgzmS2AK4BEEJonJPoSvOhoJxXrpdv%2F3Lq6Sqtp0NULdeBJF8z4A8jLVqblg7x2sj03I76kcBxwdAotD%2BsFim%2Fgq%2BMN7x49AGOqUBdV815EAci3Gia%2BwAXIIeWwyu8hfBNRxc5VuxXPKwu3uBwBXOedpyrAdBieUIVsW5czAkpWcULkHPHVepvk%2FXfr3p3DHP55I0qxlQw%2BZscSm7unBYMn38GxR%2FbkU6Csr1qpKRbcTsU1DR2%2FaI1%2BjnriT1rox%2BMQ1XmysyMdnyLF4tT7SYO6dNbJD6aNfNgYVq7og2zDMQNZHnDJg7UAXxnE7ewPOh&X-Amz-Signature=407510bf46eb7cb58ae13619d5115583190193eeabefcbee655de26d03e266b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


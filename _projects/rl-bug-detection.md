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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDPURW3M%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T211505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEm6yWdITzCsO8wrHMT6vpL2OGm11pk0P9g8bHrVPkCKAiAKWy3aRF%2FSala4GkhmDShhOP%2FE07qtPXt%2BfTCeaCd%2FxCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM2ZdkwuBRYWeKAGnxKtwDp%2F4ga1DOc7b4BAdNkG6FQEURISrvowIkOKTreSH%2BhGYudDxx7ksEsFhS0I0D2aUECOQvAcVGGiX%2BzdiinYgyfxXlxiuZIzoTen86xidY9V7xq%2BufOHchioC2oXwXqwsfXTG2CWxhwRNmKMIR5khZ3ar0Y%2BwPwG7LKiXkn1JM%2FEO4rXE8dHfUhl%2B%2B0MydXATNkd911iKVfDFDgRtiODfSC9x4j2j7esZExX1vAnTg8jDftPc1LKNRGO5tC7KkbRCCigFXEP7euNQ7ZspBJ8LI3QKbs%2BTO6pnhiFHLhLhSy6ucX40PCvuPSK8HaprT9grGqyldGlTa9aB0Xx0XkGIdnyPQ%2BrYLEL6Gfymsoq7Wm%2FNQB12l1gzo8SUCEigCloen1ckRv0o3zMbGoIvhlwknLIG09xHPaaw%2BW2k1wG3%2BZBNmzL9igjw1Ebzc1CpHATe3QC3fiXO261hmQfgdh2kVLI5VDnblL35DJa2l8gLhbiH4STsMnbbzZr24s59yLThP0r%2FTzEg5X2jxb7vk88AdxuIOKg%2F26xhPrTuQ3cVbEeE%2FJZSJKDaPrbGRMgIgyWJnxoJF6u%2Fm1sXGFkxhCzC4WwGuI0FrmkXkFBkQGQMPffCHBijvUhUAvV%2Fz7Y8wrfXv0QY6pgH2vNqzCjcm5qMT3xB%2FB%2Fc5%2F5p0gMMmv3hzIypLLc%2BTnC0%2BHdOm3iITlZuNjs%2BuUOTuzqP3pju5RgRKzA%2FE%2BFb8yjxxiy5dWtKbAmHqu58qD2LFUFezRDXbjRGpYkGBrvMc4IWzvCqKUvKEs5dSXWHy4seNz9A2MVC6LGViUE80blq5J2%2F0wuq%2BCk54%2BciY%2BYw0ppZj9s3f1vzNb2QljTUBLb5Fs7zB&X-Amz-Signature=95deac5053d467fc028145595634d9568c6589c114ccc129a21caaf3834f2993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GG7B7UA%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T095542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIB7qfOE1RnKuR3Amui1z4wTYaj06T%2BaaAqbYT60lOrL6AiBy86wZeT8ZekETSofmANQyIfCpaPd0QBN9bHPFphBZiiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnH%2BYN2sV4Y%2FFQhRKtwD2Oyns2%2BUWes20SXn3Zd0yYCurHU2Mkao%2FMdThUBduChRsnwNsQPOt5so6qaTX3kZ%2FYlCQByMj4CW76IukLXXVXI8ensiiD5Uda1JGNSaaUdPnaqu8KlS5qqmq8Jr0PhmVLAp%2B%2BHiqj0AZg8yJwWRuClKOuuQIpUCO5PRwABLcel%2B5MZ0uksp2kxJhZTdoyiQmg4I5wpSONZjUWtx8%2F%2Bw2bvqtjAB8PJAKacybSFrn94nuyOjgUiziwsK3IUpvmJ%2FomSGiO3yCgoZS23dobkEYF9bCY9IrnvWehCP2WsKdAm1D00It%2F6COPvLcOj0fhruh%2B3m9nCTOzXyiYV%2B4OBduG4VllInMhawWmjTjbpwAWImQ3O6lx%2F2Pu9FnzzWESNnQXan%2B5FKwdDJ8fR%2FcSvRbKh5%2BF5MOdjAuuZLpgSr6EAVRavAH5JFtolof4ejWtzTF8m6QT7oWv130ocl36dcBELZiUMjyFmTwEmQ0a7JcRskhLJlEzkSsC4yjTm%2FwA4jBMXPfCxqHbFpVWd4WSsVIPFplvyHJKowovxHLPVyGEXel42hx4sfxGVpCIx0Ng0dBi9eXofCrm0pnYOTDd7tTN85sH5zu0fuCyfs6HXMkY6pg1qaQldaUVfajkQw8afZ0QY6pgG7lSdrClc1zhF8Y0UzOruiYV5Zo71D6KbS9DONAHa4iT00s2FwlpbMh4vVEGWLS%2FQ0hmfT%2Bi1jPpzwvlnuOxdQAsdugBwgR2mVYYqqO2wm2cspONT0RrYGrQ1VU%2Bv%2BmPvnZjgJYz5Wiy9aNVHPH1AXP9YTiRdu0uzeQwPdJQAolUj14IpUsWIbliTQ4i7DnMDgK%2BH8evSMp%2BTwRed%2Bd%2B46QVUgKlmb&X-Amz-Signature=ea1475ec5db0fefeb8e2c2e229a7745b836932b3caac912d342cfdb2e1094d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


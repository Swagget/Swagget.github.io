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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPNJAXV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T235149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIH78z1N8DJn2ocZWarqXJ2fHiFYPO4yySsvzx8K7djQ1AiA8V7pNzEpSY9XKFRUXeLm%2BZGV9ztXp99TNfNyo83SVPCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU97G2LFV4kJ%2Fh05aKtwDxmg9e3N50becyxn%2Brwto0E8RE7902JVQMZBJUqEXFdnmXPOVEurGAPxYxlkIax4qaqs6Vj1vjKmvLCdrAjx6sde9csBWQOuJPvctHI%2BwnP25R8kYdq4i%2BiKS38M4GAgk%2FahmZOHi94z%2FjTNuqEXhm3Fptng0gu1cHX9CNFou4JvZy0%2F%2F8hvEoUK%2BjEqyMF0kiWRtXh5G%2Bs8YZwlO6T%2Bj%2F1KPZYOJk6kMJtdCErPGGVO5zQIJBaIzwMWWoyZauHtEbccz3Y8X6eUGmg17jB4NNcxbp48ltVtNP6eL4DjWk89tLr5YCpCyZyDLa%2Fdt6IshOt7Dxqk0YeDRaY12%2B%2BuNxp4Kt1uLbRPYdIycgSg%2BaYNLF3rp4g09iiuUu%2FjrRoPYdivPcfR973gq%2F3mtP1Bd4bHkfdgiQsgimQ5su%2FY9qlyRO%2BB%2BTT3C7tztTHo9C%2BWimFMYwv7yOWVrOd19MkVc%2Fg2lvW1VZUpmMo6Mqkflj9v%2FHYPohepHdwghFE%2FcFunoNi%2Bk%2FfhO6foi03wCL%2BjoWy1tFr0%2F6%2FbnrdCHPVRwdZXEJ4KVrWwf%2Fe%2F2eHFwLwbNOEfkMywWczK9zUyjHItOVoKuqwRgJrpy%2BU%2BjGtV%2FuiqdfscAXUKxy899e%2FEw2cGE0wY6pgHpqEEi8kG3nFm8I1fT5hik7k9ovkZ%2F4%2B4X9EwU8uNjwwUZ9Gqs5OSU580Nci48Z1KMzIXTCJR3YSaa6MnmpEg2VfKkkConHQZg%2FCluHAiOg%2BjGPA9ImMMGVL7EQkCcPKzUiJ2Xt6Ogx7QcwXp%2Bk%2BSKKquJWH8oft8sV6DauD2TrFMIWe8eFvD5ZIUZXC3lhFNL14pFYQSWBlt4AtVlzDrbIseq2t%2FQ&X-Amz-Signature=16741d080bf1b0085d2cf9a6db95e13f5fa1a2f99284a8f0b33717d907e8c66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7BTBST%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T163056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDsY0Kj7tTGZ5LrYBgcHuDmnTXFMeNyKoxUShhmj3rnHwIgFjU9LHwVK9wfEPaBL%2Bd%2B9uZ19xB8mWP5MwD2ldgGpq4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFwV%2BoJ9FVbf6ny58ircA9b%2BQJrKUXTXBdDRwwG%2BUfUWdKwyblwagMdjWpfMRG%2BqwPBTh%2FkjouVxoHZPvhIT3G6HBRTpdBc4GKv2xZ7A5Yt2joY727gHTJGyZ6Jd2kfw6sU5VSAZHBfH0QoBMztxGeOIclTfMXZNcj1dkZZmPUnQ5qEvelG0wrQe%2F6eyfR4ZVXibyZvWSebdguxaXEjVzVPoB8M5hrPmapQiZnEqx2vv%2BblBlPhm6%2FhN1ZZ%2Fkln6FbwtERrNNmshmqeV0xKkKODmZqKJfiyNbdF5oDEIyYwXAiqsmw8t4jAwPJ5NqRCFyHMeMVy8uuf5Kbs527TkjvBdFHx3yT3dbYTFSNV5ul2VpbRLV6760brZxgRqBxGWJ%2BxIME5bQMBTrWVyFlRdsCazAfYKcLv%2Bc6RdBoruwjP2wPCWUyldhq%2BBdyhIKEFqwMWjKAl1s4uvDR22KjMTrP8gGDyZoieFcwC4VKFjEDVNP6EsWcyVnBx6pc7yWZJWD5kvxCShsdV%2B9gGoRjVFHYVLAK%2FMJDMvxX9x6%2Bbb2gGga2v03QFQwmrBzvxAP9haFBA7XR2vuTyVCUUN0kFTgay0Hm3kO%2B4NpgCGxkz1zoVaM3dRk9pyVc66J6ZeCiVu3UPEUrRoa%2FFbgdzVMOSq9dQGOqUBF%2BhTSrE1erPwi%2FKCJQ7oAKHULugiBicEMmNmJ95bniVNbF7MW5oUpCEb90ELYyTD4QT7HW8PFJ4ZzJ1mI2gRg0hvpdTZK4ziKAZkof7nzhv%2BGttXXXNXy9kUW8sxe%2FYINipVmkMD1kDSnw1GtylRQe24FzWkptcteem3ijfqx8jQ%2FD5EtfFg8yepl%2FTI8J5KdfODYJ6FHYP4Ji1j1PD9rT3yB0ul&X-Amz-Signature=9a88e7a3e06df37f0e374541de5a1d36bba146cccd31d781b63c07fbd2a66428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


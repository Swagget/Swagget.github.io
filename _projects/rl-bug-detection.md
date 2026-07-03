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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5ZU26CD%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T235337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC4bpSC%2FaGBl7gz%2B5XEsy%2FnaFKRKF6RHi7U6qZ3JVVn3wIgIyUVIimkJm7MvWNf%2BcfwX%2BTkIiJIx2MMb27JWP%2Bw%2Basq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDOxY5rvi9tAMd0mVmyrcA8aJRwG6%2Bz2CNBbDPporne255SkKvawE%2Btfuii8xnELjggM4k65Q0oWctTIg5m%2FPatmqyirakseWVrpPhh5T7SPs91OLuH4v699tM9PZwHdKuI75iwGl36rpIKIcFo%2BF52RT%2BVo%2B9GTaaLqLKdxHqC0WBn4hgPT%2Ff3aTduW5sYFwqu1NMDz96OhvFaHMSaYZ%2BCoMkxcOOIfQgSRVXa59v6HepKtRTcaSQQYHWQMG0JDjtW9%2BsHpw16%2BvTCBmWrrjsGJRmK9DEDc0c%2F0%2FSMT73HqRe1kdsQ674uvYpQe6dA2Otk6LGOT6UNLf4yYprKm3ioTQMEoJRe4LpDEE0GyIZFuiyAeqFmhpfKqEaqufK%2B6mx0Qea1ogR8MaQ476JEtukw0nXaOh5D9XvpS7luQesX3zb11bA1e%2FjKtwJLuuHllI3MHdQSQKUbt3owiibJQ8jzi5d4VAPpE5hhrbYnjg024Vxh12AcP6hxoPrAeNQ3MjCQWeeFA3YdUy2bFolosALODxnPn%2Bw5xQTtlnezuXdTaRLZWIcud6xjgPaV8RoPYLJOsx7djUN1WPY9t%2FpJL5gifeXSWPGeUpWs1kbBIClpDJak62UzfYc48sYgzvjyIxqDxx3LhnC45PkIQ4MMeNodIGOqUBhg6u%2BxFYFDZ1FaKrsLqKObFOQo6Ni%2FyQb%2BQB%2FPM31woDouS6o8%2FE81b3A166QZ1I6cmhkO%2FrGy2bTDi0McdT7UrHM1IfGUcDlRmEwj0PMHU0KksdG7N64UCfxqmtOCAu6wbjYbNSMaIdN5n96Ks9HCiOa6cQXsi3Z5pqbieczGaxcAmdqJu1k5Tk1GOytfN%2FoMVwg%2BMznv25%2BdqWdlk2KKw%2Fmsyt&X-Amz-Signature=8ab245a367c7ee06ed3706a4fbd8418fb8b69b7589d6b4a6f5258de39d12475f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


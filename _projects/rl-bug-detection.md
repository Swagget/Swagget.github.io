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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYWMB6CD%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T072650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFPJgtrkRCVG7r%2B%2FRxUiIL5sShWNnlMZ%2Bfp3LKiy3Zu9AiEAu3M9%2BkLxLhx2NWi12RYQ0bC9Ef1A0Yh2THyg8s6MU0UqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGalqvgCLK%2BeMzcpkCrcA2qFrczhtarSp24bCEbBfE7oIGViW4n3W2BtD%2FRGkq6U%2BwiQwR2jz5QT0HTe7h9IxlZ%2F%2F7jkJgH4PokQsgMek%2BRNFjM%2BeLhRPOssJHqTCdvt6kGJbC6K%2BR%2BOuqbgSVGaCJU3MNeTHOOeUVjJ6UpPvoucZb2VUUdmCJUNjvit2T3Z8aEP%2BEnL8k8zw6Jpnnpdu%2Ba7KRatfmcUzmrnS0w%2Fzpm%2BpuIC2I5538LsGRKmNTglMcN%2B8LhsP66f6onDcwDiKIWT7P0JgA%2FW%2BqeX6HmFta7fEH4MB9zz%2BhM39msdlScsQVmur7eYpqpFjEkMCGx%2Bo5WDD6nBThRNyUS8SVWf0aWh67pJjZIi5VhnvJOD%2B5m1ZBctve0xFwD6%2BMxhwYoaTEDWMC3bU%2Fsx1MgZT8h4LBBNycJoVDvqW4xqcquw6SVyh9xXasY%2FN4sAmAZJeCVcJN4Yx8SdiiPtYQd4z2YX3gF8AjAKsoIk68W3GvepcWOTo2ERLDWxLG4f3RjLUDEiT%2FzZfPp21Hj4IKwodtDdBtoGLQTjIhWGPLbQQQ%2Bon5IVB5a4zFL2%2BxRGQEJeSuFIYqNPno2M42tSPfB87YlcdaIzOPpm5HkSYB2tsqSAZU%2B3CfghpNc19J0PTtRGMIC5ntUGOqUBXov6Y3HJ0SXbTQZtIGijfyTZ8xxPa9apOMvVs%2BHLpp2wsAeOiaQHuIoigtndSlyCsPJr%2FdghR1c3Lxge9JHbqG%2BIaWfA3wbLk%2BW1%2BrOUgv8HELgQhHDH9ppSDpcL%2BZoxAHwetklU3FPMSIlqLzmEoonPdQuoV1twz2lhA21yMgB6KqH8xGwPTugY8vArL%2Fo2niwuhbJOerQGtVzNH1HX0XyIrMiW&X-Amz-Signature=d06e5c22488440b5d6629be1f686428d85a4027d06c65b41f83bde37f50ac2ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


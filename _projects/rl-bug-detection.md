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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHQJUNN%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T142100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkWPxElrr94vhSwcsHcsAuWO0MVcOUPUlLwYBL4RxwtwIgHmJDrn%2FpebLaNNx2K00%2F8DA21YtgNgax0putYOsd7O8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDB3bKxkTe43%2BMDaxLyrcA%2FbydPUJNjrNJza7erAQvJimDo%2FQ%2BUcSMM0f4o4WaAAo%2FyI2stfZYabbUz6C4kp3YiTyZhqrPjQKKc1TL3Rkk3TxgRpD2JstCgbsfK7KfTD2iBQ66H4dbugh0cOWw9FcR%2BSekk5dwHGMXhDUnVHErC7uJ0sMfI65TikwvrHr0gDxJidivJT21xFZI2NMc0E9Hd4ZYxweXv%2BV9Z6jkJ6Kcz%2Bx0mGoYBUNWxdH2A%2Bx2k0v5gK23EauFiJjZwBC0XbdDe72xfeEKFj3VeYKUQk3%2FHxOfPRz7plIWe0febqSxaYDOnyqmPnHwFhC4W2IUmt4urcgReeq3QY%2FPMOxmvszFDvx8i4TOin6K2WkyNyqNVcPUY9PcHay2Lj8TJzeyj6wetEjumQRTAj4CPSbLitr3dPkPkbJu3UCNQEv20NKi3%2FIjjCT9uvQRzfZVBn0kCM78oNzW9aB5u%2FJKvN9Mjui%2BDsz%2B9xzv8%2B2mhM%2F5CMGWzRP3al%2FgA6yjGTrpGjxGgiR0vvLwRHCBrLLtJ5B%2F36iRw9mitDvmQUOrtrDK4377A83T3MH%2FFubwnYdDVf%2Fhq0PFWWLP7V%2FNVxDW0UQ8kC3mvjDKG629FSxZHP5mPS8LjqGHRbtnhwUdUVH8dCYMOmx%2FtEGOqUBYUu6NUYNH1zhIinIxNHXZo8xv3tckmaL2vsbmJQNHSt%2FiHSSvXDytlUx7oKMOtDh9FTst3Acxev%2B0zqrj83WwuW5BBSjy46cd9VY4sJyLp7FuUw5%2B1t1cxpwYNra9KHI94F9Y2slJmwukdTEha%2FeUiWXygD6WzXCDne%2FOf%2Fc8feHqFpH4V0P9ZeGr5EjeynoCVUlGNquh6mjZqkK4E95pieweKRN&X-Amz-Signature=e928d3e3c8f2a092df9326d5a9b2813d98bff43c9d363fee0d72b429af0aafa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


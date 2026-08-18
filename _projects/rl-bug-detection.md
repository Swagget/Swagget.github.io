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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DB7JDD%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T051750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXCd0i%2BhtyijYYZxZong4kKBQcpnaAXraGJnKT7RlGsAiEAruPzMB9oDLUCnhz%2FeNu0hHacHAbLqQMRcZ%2Ftx8aG%2BAkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKOE4NnSWRpLRN6G%2BCrcA5wcmuFmEfAJZuKbTX1lFDmbVrtzmFrGLT6B0XVd4LvLt2vXokxtxvQvBn%2B6Tm2HVgUBIiTfeDW0HOP6icgw9gvSwD%2FwE1K9IHqZFvW3dgJ1j1L4p6oPZR5k5BJnWvy4LH%2FBQGWI4P%2FUETyqxQCZcTVxmsCxUtb4crBzpxyWtXS1ao99xBJ0VYUmmjSjLQ4YoJlzq7LL14cguknK8EdxDLfgRYmrqBBDD5ddNWVAKMGP72u2%2F6OmJagwP4ajuzPJ3NQDMjI2%2B9Ttj2RjdpehT69Fu0au%2B5XE%2BTdY8rX1K6F9t5NQS0aqzdcxVmxMANdHSoUMLpSeYeGftf%2Ff9w1IwINg7eV3%2FxsqK5FYiFyxcRPpc9aXjR%2F0OdUjyU7oKKADi3gyxppMYXi1X%2F1Xld4WBzBolnjUvwugkXjlACnD3WJd3LbVFn43Ni5nSpTaRE%2FbO1ZzTMI8vio7be%2BXUBEmkP8GWKtaOaaC8PxXND5shZRhbstHGPq9kKGpyBdFjHB8npffUZ%2FEF0AK7ojft9iBd9f5uM32PvedTGQrlxh8cJegrJAOG8VEAhq%2BkLnJGlwepx7EnrdAf2vNEHoGHE60FY2U8cvg5VoiDkXVdf4yK%2B4r8U47GJtIweFEhJw2MJe2j9QGOqUB%2Fqqcx4Wcn4nTYjPZHdBhQ0ZC8XNlGAVHQS1sdBf7YkBQBFhA5rAWJFyYTcAeMz5a%2FeGFcu73hetlfS2HeCWLGtIyryWeToDQncYfhlPFZZXzNwmAVkUpdtq3scQD7uAz7Oa%2FxXps4oyz6tW%2B6j2V1nqm9jbOsz%2F1UuzDY6gJoC0mS5p%2F1wyzheRBO4IiRsfbQJ9hq0QG38DPzC7BdiXm44wXv9nm&X-Amz-Signature=29aa80a34125c3f006ebe3573f108401a846fe7c4fb64e4973d747ae47ba06aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


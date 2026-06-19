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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DD6I3UQ%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T143559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmQoRLNBM0t9XLGnfaXMPaNpixrpcdJC9Lzq8f0aBSfQIhAOYecfBJjmd6IN3Ywp0aLDnF6NFwFFr%2FEQM%2FlMbNI4ggKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM6%2Fjsaogrkgt6jNUq3AOFZckPKD4kCrWFP%2FDGnwezr%2FGW5yAB7UT1Nf3XHar9l0tsBv7vnthoqhtR3AK%2BtR5WSH9Sdz9iAhEmvEZefWznwnnkOolE536fhglga00493vNIDzLppbM1yT2EKeIAg6PGSBh4kXERJeRlohLZOcpbWk44ylvLkOfhw%2F3MncWVxZwB%2BVCjVyFURQuOECVKQDh8tS3d%2Fy1%2Fxk%2FgYquBMeK3HL3xMJBIiTMJHhvOz7XnFkQSGPWPhPpCTPGcxWfrcaKeZnAs0oLkRtvtr1UW7wshE4E5dYg0BlEe2antUZXVmtgKSOySPTRJm0m06hgtO6NuLlKRl6IxcuvVNXY7jwCIyKh0LHwcPfgakDtSUc%2FcCxT1v2994IuObEvoh40yjdLUwhi%2F4pwTi0wmbDxWToF%2B4eWFdeuziD5cKXh%2F%2BWW0M%2F%2FGznfY1ZUCxuSo95t%2BFG6C8UsdN9PuHRb7H2528dW5lcOS0pBH5ce9K6z007LTek7C3yMu8GsIim3%2FF6a4A4zoa9CG%2B%2FM7pD8q6tnRIcYGE37nMs3OY0XYD1EBhaQsS0ZqWqsaXDut%2FALyE1kjbs%2FZ184lcABCmHA8utl%2FEw2Lkl8Bt8LCHco3ii7ketEJHGznbSK6nepYl4HEDCYk9XRBjqkAWH%2FRGYcFiCVKGQLjDGsL9FRfrAPDYYXt0lcV%2FWL2%2B9%2FaUy%2BVBPQBws5VLhi4FxDVLh1YdCy0p51Q5Ggl1nYF82TO45REu%2BNwpaEfJtAshBwbwl64FYoBiVzyVLJkASRl3wT8vXRiPU9jYY9qfrK1JIKNB4gOmbvd4NbgEmpHn9NpfIhWtEDEyir%2FqOzgvRhL66%2B9CtxAwTBMCvx8iTj4uw3%2BqD0&X-Amz-Signature=1e9611ec807442acbc83396c9127c8faa2fe2cebebfa06b4c1ea96995a30b15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


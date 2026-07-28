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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MJA72Y%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T224754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2ByOjHOXAWJsZkUc1Gb%2Fth5OHoOGpxCIX1KPgNSpi6kAiBpoWtNzidY4LOBRsDOC8ADEedDVmcvkxk19%2ByQ7EFz%2Byr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMxH1d9vPpV6Kvo0%2BHKtwDFqlC82wCRo6DxZLf370N4j%2FXrPba81KEHwJToUCPEFu00jhPP9mLTLvb3jcgXkka3q%2BRm4cn%2FkaptDt3xaMCVq7VXDVj6vBi2sbaKDtGn6cu8JatOnJcyHx6h5%2Bxe6RGRi%2BpZk2Mp9nXBk3Vm8yMgF%2BDYxMrnKI92YVtnVjZJh9aPIzpXRLJYTtrkpoFD3iYBwGiivXm7m3TZycSI2ObrYxSBdTNBjz273yMX%2FrXSECpnExNjEZf8HdJgC3Os2BJwI%2FPsuSnMaC%2FaHAjBftkcdIqrAOBEml%2BxCMghkktq0Aycvcbvl%2BBO8rye0XVQxxQnZYonEx%2F%2BkxfktLgdLmRUGXnJLRUiSiknC084xKWDAdenxze4CXKlir5ThKIb6Bpo5vnQDHHqFpZp5TYkOek4eANpzBM8zSKsSbQ0Rtezqisn16N928%2Fr9IgMJq6C5YekzW43t5NLBCjTRI2cDeA2wQNsfQHlYQ9H%2BivxmS4lgvMIw4%2FNGxwIHCXKPt2UEI0JEEJcUcxMZlKSLwqanDS6DFMRxNrWT7z5splLpVtu3YOUVb8GlD1UNyo3pUjrTczeS42EFEi1LH5nwSvFH%2FOz5IFdKCtjGSoGyg%2F7%2FP4DuH9GOZOM%2FgEZ36EVrIwl%2BGk0wY6pgG%2FfQhrAM83zgYz1NpUa0Zad9%2Be5wZ76nqsXeD%2FDyw6q95zVIkuo3DCXiDBzQtNPXmdUg%2FdUkwyK8z2opU66XEVnv3XuffqOMqNlqrKEBJWprKJf7p8HcLs1ZHO2rQ2qyT5un9cbO%2Bsaa5hsxHl1pmzY6Nx2%2BRuVBqzsECcS308sRi9Pt7yaDmtwS8Nx5oVV8SZp6602Z%2Bnah%2FLw0%2Bv9powOujIaP8C&X-Amz-Signature=db063d11c807f9257631c53cbc9ea2770cd63532d05c19a15d6221c8b4d031ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


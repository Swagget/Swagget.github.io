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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGYFDYQE%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T142252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGYMPgC45gqC%2BcjB5KGYroLRgT7lgvZpnszJ30TYFoZFAiBmTs7wqApYP4XYgPiBcq6DjnS7f00trTFY2noZHU9unCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIManN9P4aR5K44He4jKtwD5kD7TNNHRqbEsymOJpP%2BJmw0oTmGJVF%2BmygqXCfk1k%2F8LJ9oHKW03iiCQV8iM2AGwLWaEdOyAQe8Pd0SobDFaDhSm%2BbL4JhxMQ%2BxnAUCI9qF8o6ARXxyH%2FxEyOrR330aDhxQtwfEKVuMUNToyNtV753CGGMTa%2FtlT3SnZ25xZAosVe9dbyArE1Dqta%2BW8oQSaLMi0kg8U2cKWhwuUjtPk%2FYQQmKzZXgeqlv7gzannxfVYDRVzYksprdhGiPA4P47xRzOdc0qaS91v4BHY3VwSfUqN5DeINQKae%2FIE2DOei2hz%2FRDktLMlKEjHUWJ8vN0IRc6MhVxbgStS87ptAK2jwGRku1tTyP5fXBKAZmMZ3gsYzX2eKKnN7G5bCUTSppmVVZzOEy47BEnkPYc5IFXv9mGS4mq5dz6ub32GP%2BedOqHZ3o6xrfnoVmdpkMSnGniAYvx7WVja186laDBOEbSl2jAMtb6IC4dO591snrjQA%2BvrP32aXPo1Zgx3qyf7lJHDX%2Fob054EXXhBrqg3Uk5wcZbLBJsdMBbvbwxcEck4i8HJDXKA8aCcSbFE4WEH0CKl18PV84DTeoFM97TJzejyQ3gF7LDzP%2B9REN%2BspRFd0rNtV8vUDR5xqtT%2BQQwtaKp0gY6pgF42woPPUaotBTELz3kUfBY4tIqMiOFLMzIO6pfKLGPrJf402Jy%2BB04TkWVzZv3OfXwC%2FS5Fgrk8tRfA9DfYC2I0ibaVjYsJLOy3xjFLrU9jFEYrUI16tHXWzrPFONNmswNSHz9vd%2FqnKwEbj2mIGhYk9aUYrPlSNOLwZv0aISFVKXwoek2y0Ebhwbr%2BvJRHuqXvjF32yW22wb4OHUchIBXgmNOrQDP&X-Amz-Signature=c6bb67f448fc8980d298e901e4a4c9a046515db4293b30a5976ab4e8f15ef463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJO5TCDT%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T184544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDoRYkvHYG1xVrAy3QIruorCHJIUsOSyKm82432MEHQ7gIgSvbnMYrEGGMGQPwmR3uzQyMQ9JPzICXDnMAsStRXGU4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOpxn4iFpTLMc8EVvSrcA%2FNIUkMzgPQm%2B4ABMzI6PWYXELBeoptgBM8Qc782B7ZpRkOZpX76VYCOb5TtvGyuEV4mu4hrL4wtFs5FTTZdfWEBDqG6rZbPDWLED2Kbv8WmQa9FYbH2pcS%2F%2BkWZBMtY6JWQDakYZMLEMnyS8CGYBiLp1TlxVvXCCUnQJK0O%2FG8pJP9LQavtpobnCqLtxp1H4FcKf2yjbvIkHCQbdhK%2Fmc%2BQ3xCFBdr%2B8QMRukQjsOJx8KbzT2RMf6FtcEsLnT4d5deP%2B1svjEFkU5WPxjFC7Op6r3Ce%2BkNyiKjzobLN6UI86wrM2DxuDsXuSogYRcxg7HOz7GHxv5dKiaLPxGm6b1CCj8%2FWWedCg62e1uNvXZ1FOCe5GTtUyuXAuSFLTtVDN%2FZUbrqqBeXjVonbuHZoQDYnIJaKXYK8ywHFq0lA6ujqNn0gfnJoT1NSLqWMdRG%2BD%2Bs1PJjpj7tXXm4Cotqq2tsC9gA4BtV%2BabujUKc9hat6WkM8hECkHpRlU4L3cfj3lRMrm0lRHNl6doeNVgesNYc1iKw%2FPXFZdCxoXwhFSazrx08qGxf%2B6mNhNYiBTiqROBnuSS%2FQiT34VqOIRwtutcQ%2F5rfLKjUr68dtgXA9qy8%2FD2kiZDSQIIgsX31cMNWzvNQGOqUBzFLVVnXijbxGjkYtZRCYOy9bg2qxPpLAxlFDVt%2FgG3p0wV%2By9kImZM3YeIqXVC9JyJ0cokpxf1Tt%2BDRrSG5iwAgAWnACRI6haE%2F5ZyHVoSc8gmmtyWRd%2FiFIXdyYomBDsuMOveBGFonYd3dYDpBqEOlzer8xtxKipsRfcr5HkyNFwSWoP7SilPL7yA7AXr86llFPXpQNBdwzv3FNMKCnWOACDe%2BU&X-Amz-Signature=cfc75a88eedd3b9c5d0ecc6000963d93e9427e8d77b8ffe2a068740e56c94a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


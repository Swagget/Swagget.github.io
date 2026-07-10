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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDYDIFM%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T092235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCO1lqhd0XUkwWwlPcL383mVRZNNzIY7R4nmzxQtE%2BzAiBlfDXAdAq6vd%2FfuWzuZmAR6HwE2p240JCy67xX%2FusYAyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKgsXE2mpEhFUXHoJKtwDwPiRUf2IagMr%2BtLptenyaNpWqQl1Mliryk6MF1IwMqBDqppgBLvzSYOpolxZkYTvzwRM8eMAMqPotwtGEW8M%2FBRZLhtGC54cKfg0k1XWvS2%2FKkfr8N0hATf9acW1HIgh8ctjUrTYPNHdiceSiImOqVdhvv2wP26S7RFo63P13pgoYZJmuuJ8h0X8gaU4a%2BZWpiPfGK8Gv4YjhX25DDZ23pEmp%2BZT%2FrbN2QVIpXyOJzo6dw2BVSHsbE4GDvpuRC0D9T9nJAxVjr84zGfg2EVoscb36ZavcWwVPnfaXJhoHqVYuxgeDV4piirJLP%2BQa44XrRSHK2s0vSbw8G%2FyWOPBU9jiDvgv%2Fqye%2Fi8B8tMUmf4oWnl0EHhEif8PbmxN1y0G%2B8IxSaxd0o1KCzeOPLvDsr0i5c%2FwNLvRkTItUBenby6q%2BxMxHTJWsDabkNsCf8lVybXTRZZzFo2NNdExP8jLJnHQV7g6lcOFflyL3gMYr82nae5iMn3CwAO5GJj2dPUPwsQFtMv1%2Fov7RrMyuF9m8RDtgNq0ikUMKsOAEdLAM5lt2K4tbzp5nE5TKCGPSz5dtwGd7n6%2B66mdpAQFLWH%2F8JReIJxbL4a0pX%2FUE6gKcc2fSr8WW81%2FtX8j0S4wnMTC0gY6pgH8wGT8xvT0veI5oP%2Fw5e%2BZtsCjB8ReISv%2BTCorX4jAKM0wv5I5ZBLX0ho10HNCNCIunqfJVlJCbOWhOYFJaHhzn5MH2hoWwU68gFY0y3Twfp73lz%2FNZfQ4vrNob3OdoQqCQ8zRLyaDjee4DfCPjkmWPuif8QAfRMrbV0IygqZkUzbxmbVfvfwTzeaCmVSjHLc8KSp1xfC%2Fb14tCnO5o6h6fiEP%2Ffu1&X-Amz-Signature=b7f3e54260cd34075afad4db6cc4654a0422e97d6a75a968325c0417619488d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


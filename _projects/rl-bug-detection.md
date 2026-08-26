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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRP3OCH%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T160715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIF9Rw8rmXZ0a2R51C93adt1F18dR7xMi874YFtcB2IYTAiEA%2Bwsdg9AfSrJzPP6yNh2G4Yr%2FneINiWOSSPcha0N93qwq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM4B5QOpFa1nKhOMkyrcAygvLr8iM6wV1tio4XQloEvu%2BsrZnQckzdytclVADpKuwSb3zCB2eVTin1ysqaN4iRKePVn5oT3niWWmDLAJkPdhBq7BG15sc0XqxI5ZX338nDnUbWL6WnJIa9tiIam29sQ8DfA%2BqIaUdRXu%2Fey8nk8OywKOovN6FGFPjm%2BLZZWCjXbe7ZrZzwaKXTrTrvK4CGK88E%2BASLJjHTIJ7%2FpkX9Nrv2lV1Rz%2Fr2DT0n4ibVApzd3c8dTbPGfLCgdlg0QIRDXpMP5KcZl0vSCwdP8Op%2BIo%2FUEXHyKNfzKZHyUpduEcWP3PtY6jWmdNvQRclljtq%2F1b31mjrSkqhLw24v1WvNOVQRLk21JfWp3Noe0d2yX1CHNQPoWMjggMNlxnXDCBGaxf3%2F14vRUsv0yvFHWcM8aSQ7d76Xl%2Bkkbac11%2FqIsxtNAj0AAdhsut0arQDSwJXjJrzsfXzbuLUBcgSHIkTgy4RpB0dNYfD%2FD2aZs5hZYJkMCb2QKN7tZKkr%2FzDoCJItS1W3J3pd1MklTLq9ZrEkJweTY%2BDgva23zx4CBIjINv35%2FLem8RaQdsdNEzDcqtD2x3i9Ty%2Bcnxsgi84BlRZtuYCzGHj2QPSi0XlrNBmHDW6GR0LHJmEZTPQJDdMMDhu9QGOqUBx8HFQW9yt%2BQTJbTVeEMYKQYNp4xftE%2FMu900HG8KAvgApYu4uMnTbqxUZWPEI79nVdcd43u8j%2BXMRzuOaqpMMoxiiIc9Ym%2FRMLmEaW3OQxatAXf0e2QXBxhR%2B6tvmO2w5Vm3kEf3Uv%2BL1%2FKoeDkgN2frzM%2BkFe%2BVfWYUJ2zL7theZT9Thc%2BzqCbwGwL1S7k9TdlcjOli0cb8ejbrrzSn3S3VM94m&X-Amz-Signature=f6efad92237a4c3789d68f8793619040f72fe95c4edfa66d87283627dee880ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


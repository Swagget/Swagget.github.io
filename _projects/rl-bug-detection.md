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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y27X5OPD%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T024617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCgwrnPTyoPTBy0zdyZvlYhH%2FzMPP6ubGSaryXaK7qBqQIgLHMrQ3HYcXSzzGQ%2B8A7vRe5bpRPq%2Bbs3I8fxSRC11dkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPxgte%2Fid0YNyAj86yrcA%2FWj1TEhlwbluZDklaGupiCdgiWZTgrFQ2CjxeP44LWbH6icOlla%2BcGxqUL%2FkBx9Dnq7vASeavKKwh4yuAXeHQuzYCvtK%2FQ8gxwJPRZHq4I5tNdWgw1UwTkgbF2y1DIq%2F5HOflZogB8otoOE746VB%2FSaGHV0nq3A5nNpPPZ3Rb0Pqsms%2B0GbfXjCRII6yuf91Z6US%2FSR2wwtDxSAlyWPEM1L%2BMojU14Vyd4C7HcgcqlMAHrwSJKIrOHws8pcwr3PKCNCO2a%2FTlct4iz%2FORsy1Oe%2BNPYmpAFNj57objcE9AKWRSO0GsqvhACOQFtpEKMtu%2BRNJus9Xv5ER63JqGnqq2uUqF%2F%2Fec3gHJbIjqqOlVVBOxVGb11YZJziQ3T5q%2BF5VnvjCO37kv%2BcepI78%2Bli3oSwhS6Zs1THDhChKbmZSomB0ix%2FGWVzm3Z5J0%2FZ3XXQxTc0emMbC%2FFgE9y8EJ4bbq648aDpGYdfOGjYkqBikqyqDc4PGdDsdgNNh28Vm69GxaquTBohEktuLKPJahfynzUQ%2F29aXtXUMzQMBcEaY1yK4eNgSm1sv97hJpRUEBnPsaYu%2F0pvNOxxtBRlIpJZIEzWsWLEozOdfFaeb2v9WU%2B4lA4NKHrjnJQDV2FvMM7e59EGOqUBTiIedARc%2FuB2GUdij9CEroSihEI%2B2bp3Y0EKryj3squFjJ3kcpkWTbOyS2INUGgWsu5qmXBlvlC%2BGlGt5cMvXYSwnf5fmUumgcZ3D4BFyzRLmsNO6zPLomQM0g%2BaXcu49Klv5YYPnp8dBxM1TDiee808B9%2BG7X7wVd%2BXqHIlkpZbpUg%2FbjFKDVNTIc5spduqm4NXs1h1gpyp73pF9m87jF50AWP7&X-Amz-Signature=4549c436056417604ff3b77d83598a66cd2e6c6f6016a4d5bc22c7f1b89ae16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


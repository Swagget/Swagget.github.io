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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5246L3A%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T215351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs8tjr%2Bs1YZnDXQ9G7yPOwQTWZ2VaWkPV1x23lVlUxjAiEA%2B9qHXqZ9d%2B45%2BBk3fNjgX0d6O9imJ9z8i4PoSn7nRL8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBhIdyurjWe4Edj76ircA260dbq7pU1jXATes0Z%2F1zAmW3P6GAweQsKGOYO7lVK9Y2m7vLaTjLlEJfFZ0R6o4v2%2F5Obr1fT4BFvvn37q%2FexssBGvTb7t6YIU4U13bEmZqXLBb2Oh3l907PRBKAcTrZF5pFMFp58s9wv6F2%2F9NAqiq61jXZAF10a003YKm69ztwRhlCsrLC2IxV7StehEWxSHPjQEgYaIZvCC%2Bn7j4sEXiLWzY9eAcG3RB0mPlrGwRqt%2FhcB2c%2FoI4m4EBCFgeScfiyoR4y8GfSvvFI7GcTLdyzwMQkYxTU03LJZxRkIe8cmS0aQIHSYJvq2AgBtLvV7pZFcScg%2BOdgZdL95bJtiZ0vADCJCE7HiDQbwMTvmaLS2F1yVCr4S5Wg1%2FAHowJdOVCF2mpSuxCB%2F3kFgb%2Fv%2Bj3OezW773YmdsdHIqGUOu2Q3rVdvEiajsPE0y0Aca9tDD7sHL6FNVFLo%2BPhwZdKRF3CpBoqS2GegHu7n8Kv83WSWbdA20Z56XxhCEgCeuygsw4BD02be4502k7f%2FbGluVYOhMjGJbOCcGo%2B6hP0Ou%2BcqtfxX0DpAPTJZurMBRa67jtfqaAL24XgBCUUDZ27Vq8PB8IwEyg7nFvgu%2FRhopG0%2FaT1223Usa3bnfMJC6pNMGOqUBfeKqhfJib1BIAhM%2FowIirWfJO1S0ZLuBfFkKatX%2BibamzEE0uX6kjaVDkQlLXg7Y64UASBV6Tml8ArUcFeZsVm66%2BYaq1Vz15HNXzN68lRp4BflVQyLnP%2Bkq%2FwLgmXmpAxoFPqajVaJ9aMr%2BSvAsB6Q5zr7mrkOD57JFVcujYCyqLuvhCQBJxCiayfvRtdeuFWYcIl755mLF67GArGgQitGrTtB5&X-Amz-Signature=f556094d19608cd2800b9d1a0ab71b8ad52e0e5568316277bb2f341aea64c022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


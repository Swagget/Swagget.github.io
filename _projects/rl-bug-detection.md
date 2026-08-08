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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JEWII4K%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T082444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuLVMNchUGZJSmMtLGkKPfMEZSbuBW2EDFQIyaTdEMHwIgDAfUZGWRxbv9SQhxTRgvL5PM3WZeP%2F%2FSFnD0XXlMsPcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNoZOeHwTiWviq377yrcA%2FhNErY5UfyuIitW%2FNYmLJ9P3aLnZgNkwzmhDdm7fUNz8%2BoaSXPeEqUaVmRnPlaxx4rxPAhjWo82Zf095s8Vs6lA%2FLirkZNQT6y9dOLuK2jXM2u6kHZBHlgxsSGxG5efLhEmTOI1nSm6NBVWgRLhvkf0MCA3GcJJ%2Fyn%2F2KtR4E6j%2BPQk9MmWePPeNyB4OFuAFVaYKlqeVc2ntVzjhH9OyHMwxkqOQeS9Gg%2Foq38FU4DlxvFiCUMgKiMnxVSxOcQ2aXU9RO1K36IDkyiNf6WT8vUZvHdLs6SbNjt8cmQTc76Zjgw%2BcNjvWgOPCNxuD%2BPmTFQYRJRbLHUUK0hMeKwzEcEB2tuN8VVPkNk1DNC4cvZ%2F559zibmqbzU%2FY1YczIscZwn%2BsUfRYLjc4mW9xPBnp9k2FDvDBx2hstDQEyO%2BU3PhJXe3UZtkVkpC%2FU0mgKcmoMyfl%2Fb%2FlewyT36IFdaHr%2BXpjyYph3k7%2FHRkfuK%2BCe5YT%2BxvFkNJzS3oBB1hQo1dTvxhaMCpD699lLKt5DPqc0BRwVEiDN%2BzDPr5M6BnuPGXH9uhOkmGcfSTaGB5UknGbQlRiZA59BOeOVMSvNSYPy02eS7MXJq96rpvLQG92bGXF%2BPiGy3a7nG1jRC8MLql29MGOqUBdP%2F8FcYAzssQ3Mh9cW0GKT08KScsiAD7LtpSyxxozDGL%2Bg9r0hd4MUVw%2FdyzGah5ITUDkTyMx7y9stcyEvO0NP5aqEveKq2JbvfXIPnCRZQ8Z1z8Y1lillWGvxgWEDvUS9TWwwdl7Vd0X%2FUuW53Xa7Ep84bsRZbRufToiyejQsERVurgX6rBjkNWoeguIdB2KOKO%2FRwufC0uVOKj8UJUFomOmMcz&X-Amz-Signature=6d495ebce5fc8500f4714b436f79753cd1627501a1f157bcad216ab6ccefb2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


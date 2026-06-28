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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XOVC6RX%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T215131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPnayCLst40J36pLL248WT%2FfHiO%2F0GpPL56D4K%2F2fFGwIhAM%2Bek4xq3MmuxwzHw2dXClyTDtrxWSioXMvx201t%2F%2Bj6KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGG7c1v3HW1uXCge4q3AMI5cqWnXF%2BQsMgmcE1mE1msC9nuWeNwtW%2F5m74kBZjrXY7BMoHoY31KsHZMMPKTRWdn%2FsYsTJbRh1PZk4hni8XPk6psmVpwqmnW3NGJqrfCCclAT3%2ByEgS0lHpmkkk2Yv%2BYaX42ASJMG6lW%2BMmY4d4xPI37IwSr%2FRp8ZzAeChaHn9vWFLWPk6xGdYuUkVCHysH9x3LiLlUeBthnOgmuWJj58oEwrSefM0Su9d0woZGBxUAypcKqYcKOQOSkB0AGkebhI%2FUzQqnYnK6NIUvwV72V9rqFJyQm%2B1hDaG7QBKCuUv7S2EQlw0RrFw9LrGSGF3Xh%2F5NYfC6YapudmA%2BHCqDQa8GvcMFK5%2FDv9ynd4BjvgmPqmnD1Ds201RT%2FIHDG0KdQI1cP6LLfIvX4QG%2Bl9ap9OPkPIzTAqb4Jpknh%2BvToYK2gHPAp0JLZtIdTtCsvXPsKh2IRX7QV1cAGxKPXJ1Z%2BQ%2F9TMc5PzxLRp%2BVPQDDQ05W0Kx%2B2GDTFGhAOH%2BNRIJzQdTyWYx4yO%2F80Lxi7RTtKNArfu3pmQmHaSwqn7fehV82kQ9sfszOqireJtKwc2FWioBEowx0ZD5sV8a%2BXT9DHt%2FZosevH7HbWOjq%2FTInPBh45mtEyZdiOs7EmTDikobSBjqkAbT%2F77Dzj8%2B9ayZDHetJoIadkVlrvmyqIMnlufEKAuZTHHuPT%2Fxg1beaHX5MHMd%2BpTdd6d05TAU8p%2FtOXJYfykcdlkfaYVqHAzPNNiaA8%2BMdOmAvKZ7%2FnJD4LozpZw3tQEPhgL3DuP%2BWunVq3XMYHwxhRFha%2Boej3tQQcnRwUeRHx5Vy6yuSueUnmY2ALWmOXmnGT4YVERtu9MXS0VODq97HN4tm&X-Amz-Signature=807d8afaa38083169e4a68a68d2ff0f87bf910c8310fb77d31d556aa5e30302b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


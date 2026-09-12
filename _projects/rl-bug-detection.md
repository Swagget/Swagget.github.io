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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EF4SMFX%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T014836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO8scvHPgwFDJVwur2ZpXfr7rc%2B8jC3Nm8UtPjPTbWZwIgXWUY1ISANnBFrXrU0n61RgNErdvw2ncARFS4fQOcZFgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACt6X3%2BFkxrj%2Bse6CrcA%2BXS0XcGN3MtDH1VYCBArwq0DjSx9kNjWBoJP%2BhQy%2BYQFNOyDgP0WJN9Gxa0CEBPmEiuKrT3W04cNKpv8hGeQIpNs%2BYpbFxMxNAVHqXKWq7KQNMJBnL1aOy642u06TZADK%2Bfb75I%2Fc%2B86dtLSNqNwwS7N%2BlDCU8TueTXQKiakBgTjLHx6RcmX2PpQcwwrEM%2F84Cj6EG%2Fs%2FulskhPw7cIeMX5jvA7juKAEYbqhCZJiQ3Vzmm9NlKQgH3hdH8u8pYU7KozLmylrxzqmd9AFNa3QWFbMn3xz8IOb5FhLvXBOZ0ltnMALvLemztfXm64qKXMpwJ%2Bz0U7mRKOEmYh5Nas0moGJSTF86GWFbKKL0Bw5eARoSfRIW4GMQeuUNcs2w6WZw1aG3q4%2B99HOi63AkEMZhQ6o4V0eEhcThPprQfDsKc0y0n3KKXgeOQ7D05LAOw8mFSjA%2FK1wPWucR6WqY48JVpc0lUE01PhieMaDreJqZ6n3a9R1Vg9l%2BOWTlyaN1%2BfMDZi5S6l%2FqcZLOru%2B6qLDjeOx9CU3rLa68if12ZamoHmAsEl1SyHC1k3k1zqu70aC4kA9SKzCkFhfLMq%2ByrLLXqPpVJJZDGkyVT1Nsoz0wLhtKPDuSCzNl2uwExeMPOsktUGOqUBAabrCPr8%2BIJXGegPoIsLArZkxgkNjcUY7FxbB1K9JFJRarTi2lr0Gd0QwXFoQZDOxdYKMLrx1v47tTtM6hI%2BE9DhX%2Bqh0ucPWn%2BVXRLqhi%2BHxdSV71iV6MdJJF%2B2poyT2efDZPpoxXEgV9nS8a%2Bp4JHE0ze9XT6TX6VQfMDAOeP2bzfaIse8OJHBIHsuCSY5T2RRW4FDKT3s8GR3flWDm3927rne&X-Amz-Signature=2fa6cedd11a36c844ab71941635df6802700cf0e99819e054da5acceb0035936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


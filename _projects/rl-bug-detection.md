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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V4O7QEM%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T122830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcAEjAVlTWMZadlPUGrqXLz%2FQC3PJLTzPgMJPsAGqFaAiEA7GHunqtscRiJL%2F%2FZ%2BISE4DH1ouMrXm%2BCVLqe2pVZL%2Fkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDODP8FEdZImJEObYoircA3DzqjJcl0YCcnAfvXxf1usBlCwL4RrMzpvojrljgHHTpHXiU3EjYKzaUyej1iqoTULOt5KYskvKK4XAS%2BdtG3h%2B0cKZEEiEMDX6n7bSLXjLMiDb2EaKHngRlAfcVlJbwWxT4rJKrGuluYo6wOm1rA7si1t2ZGLwc5GSmtaITaJunUzWrJaLACI%2Fn0xP%2FajHOPm9iTlV9zKFHG55Z9Ym6BvuA2vricrMiRjLHS1pYYc%2B0vdMZhYaEViYM3it%2FIX4%2FpJml4dCX0uUzRUSvpoMA2fmT%2FeWvdF6KRcHFF%2BgAGWfukT5Oe0CGsTNs6yiPdnm%2BP3lQTEaQvmEkcNaRF31t2ZWzwbjWKB26AdxJAcXs4lLrjyaihTDkazR0aXrb8fCixsb4LORSuddxyqYCvj5V1yEtj2wxVaVJZEj9mSro2hEm%2FlXOIBW2ZwEKHdXoJ6ruPrlNgKbQjWW%2BiapbxPuAecl12nW5UsgzbDRW23mUrl6RrgQgwfTFODR6Mgyrmq%2FDmbPAo1ThOQagwDg9oH1vUFn5zL1RsM2zeNAaozQrfEgxZVLfzF%2BgHgVrDe4SQrCDkCvj4%2Fo7Gy0jbtAAxaCNkJlEdXPBk3wIHgW55puBDwe5k5S4yt2g7cQYr6IMIK0otMGOqUBevEms7tupzeOcK%2Fsl30dOnvubnEq4m6nnVquDzhJ%2BRPFAXlfIGL5YUXQzUiqduoExol8hz1prblmszZ9qjSyyyiWjoLG8PuQdvJ8xhTiOWhR6YskGAIj0ndNk7rRpIJEZWI94qA2QEuqK%2FJPouV88S%2Fch87jOe%2FjQGIUN3kEmXaMcu6VvrlpXj0JaFM6J4qRzM6ha6cueD9h2QiYh8Ts9tEOy3yu&X-Amz-Signature=88176877115c8af10c3648718319b35cc53243122030dd3c4b321d99e5219641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


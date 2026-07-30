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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQS6ETN%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T122031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMcqcol717szGJip3XpUWU754vg9hWIeZIPV%2FAN9%2FzEAiEA%2BZFVASsZbB%2BeXhBULTgtJTWjiZCJAVHLhXnUzYIkt4sqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJT1chVpn7h%2FpYPbWCrcA1Ntp785WQ%2FYeKwBtvobj77Glun8SkXhaxDMgiwEtwyJJWM1kzZQs6unHo7qfRdXLN4jM9V6VPqNWGBKblvr0dwx2tSSSXaRjHx%2BLzv4FgeRTNe5Mhi1oe3gxSht5aJ377JGTJ0Aq3eTpqfULcd4oo0i6aX6z1JUqXtK0njVQEE0GJKjLCABGaIZMsesHQhhQK6LU1oZ97dsJpC2EgzGc33UOjc6GqkO%2BRvPxYcNHbusPfzDBKYMSCf0q%2B1w7lhXAAlDvXJWWeTiy6NFkTrPpyw6IQCqV6is8F8hcdemfkp6dYhIyLxwKIPgVg%2BaKRtpCA9k%2BrTR5ZcbgXg%2F%2BezHj%2FUEBycfFq6STh%2BRJYGFjCsggk%2BGzkDH7gFLKq%2BPk63oIBPbVFJP4fSnRpepncoQBwZVNZ1PyqAAlc5vTypmxldco0krABImqu58817XZDYWTcMZtj0jUEgBdx%2Btka09sdQ%2FV3g5CnYYpBpsd0qZ6LwPYjZqpMrOw3rmMBp8m24Htmzc5fhEQ7vh%2BFrxjtly30dDwbREWEfgUGLL1BXzKCMmD9ihqB9286X3MV2TWNo7EfOTtphkIHkr0hl7H6E1EiPEnN6D0WsLoU4jhlDofxyWToBaLbMsz6t7QXP%2BMIz6rNMGOqUB0FIyQEm6F%2FXww8oa%2BnIn6vlwQ7pSjb7RpCOc5n4tWykPOTCwXuzFdp4AonXFcVeCX1U7krpS3gISzbnWvZgFSYe5Z6ikcAPl%2Fy0hXfXk%2Bk0hIXtygIduu%2FQOC8R%2B5vWjLEej6f%2FP071Zt3c5FUW3UlX%2FZ3QgjCa1itYkVF1x7H0oZf6hZ%2Fi3t8mlB9wnHQgkB5KjS0s73OWYiW5b0JL9x4Z1Kg0V&X-Amz-Signature=f296a4168f8b656a1c80b6202e6cb91620b17432f32bf7f3bf2e64d4a9c643cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


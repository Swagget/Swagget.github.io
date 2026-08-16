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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRXWJO3%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T141057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDJ8FLiKjluC70%2FszfB7cBT5VyBQGpv6hNXJHdROTNCUgIhANElhH2Qpgq8JKmtp%2BpaeHpq0a2reIUm2aefyNB5hS%2BXKv8DCCwQABoMNjM3NDIzMTgzODA1Igw9gsRFkB4Z1opa%2FHUq3ANCYMd3NR8Ro1Gx8wVWgzAeJUGLTckW53hryQsukO60KgOQtvGIIot40d5PlRLsKg5O5S1DezPgUroTe6h0j9hsZujtsCFiACfJKA2U5Kw5cf0n%2F9LdL9SQvN1QMM%2BuScZhJHf1hfS3Dod0HYRh35C2grmCBmeeCHZHdBIjN4%2Fmq9fc%2Fl83lumdSnHpoHZ7xng96MmRkwN7X4XNvyeGLKr9slmrWJhsrr8o8%2B8NyBbtcHIK6CK1vs%2ByNL5%2FBeuZPVDDwYlrGcV3eYnRyu4BDKQMwAHNG3FvxK4pxBvGWCVX70poJmAhJHKn3%2BQuQxplTPeQJAySuxbSt%2B7Rx3LgLzxj4Y9nBI6XfdRdnwK1kR4X2JJKo2QDqtMOoAPAMV5DQoxBLYD8ULHlbP6hQn8u3Ms%2FRaechTp%2BYUTiV%2BT0KzL%2FVvnHf0HT3WlyG%2Fy1QNH7UERBGSwjbPajSbgVfiY9OqTw7pawvQ7u%2F39jsJmTdMtwloitRxIiAhum6mUZ9XtUwZjFk8linVYtEXpZ6fb12z7gSttXc7pSIBrkOMXqH2qMDsiy9qdmALS6PdfkMC7F%2FQUVogDV9iixgZoj08LPIQ3QCBmoiDmYXSN2r2omSGpLdWEDSJAVuWXUG%2BskNDDooobUBjqkAZlfUsN0wYCNE02666PnMczS7csQFG2j500e5TEi7cesJv2p5Kwv2ZwJEG6xQlriok7%2F91LbQ%2FVmfSIEcPf7pPfCoXfa2CGtCGGOgGOxn2I19P62491H2%2B%2F2mS3M5JvH50K8foB2OhX7LvCKwU635uTYz%2F4T10W3N54GWTwCpu0kcDWH%2FAR7zeVEkQMjFnbbq8NjtTH9Mp%2Bayke%2BHnkSzWJtIBqQ&X-Amz-Signature=aabf562b772d281be6514b8bf4d89616e9383d744650e17007e02b09938ddd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


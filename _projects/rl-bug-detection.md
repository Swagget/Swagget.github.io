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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAYRCMT%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T200509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDv%2F0%2Bfdp36ROXvj7F0mIF7PKjW6EPH7KJJmgFDrmrr4gIhAO83dwFFOxjy9RUzWRYxdhlyd%2B5LdjvCUEwAvLI65fKQKv8DCAUQABoMNjM3NDIzMTgzODA1IgwLsIdOhdVTTlM%2Bw8Eq3APiDdFi1bYNBSl92s5IeRphGLXRRVYGcu60L5TnzQtbV9uLvT47eNI3O3bpO3ieXsO73QFjGC5rqUNXgwOsqo9WajECbdiYGmVSL1SIgE5arKHTTxYmTOlt2zel0%2B4lAVbcO5pf8KLgA9iCf4BYMkMwOhf%2FBNY3UfeUv88xQvFrWwzoL6LKGV0Bv1aTURgCDS%2BcHAhI5%2BcmEKK%2BefbDzC1ord9FbR8WXIAhM0q22KMZLWuSGqbqL%2BzAXfwS1lM334%2FMngY48Z8RtbzM0QXqIaZs4%2BqmXXmI08jXIuoOFP2GvtfLYeumSOU2kpyqzpO95LKu712%2FZA4uwANz0v4%2BnjS5BAIleQh0mcHUCPVBnqEvMBk4ijmLEUMOvnlwzI7Ffv0OSwx1KtbI66jbmWPZNVJy2yapaGGy4GUx56MEgjEiPHs1sAWRq2HunNQbWpKHAszU%2BY8%2FnAJBN%2Fb6j2Sx1VQpTLmQdwP%2F%2B7GyEzPKmeYeUDrMGM8tXkT1DqLNdH%2FmCFVsyotG6s%2B8jTILYByySxKj6NKKZ%2Br4aLyzDn9%2FYJL72T%2B2Ac7lLUC5QY4Kow75MpLJX10Gb0jH6hPcVKdq5Fbda%2BNhEZJQA2Mz3A%2BfBcrRbhIYNoOya5Xr5cPfTDCkh9XSBjqkAYLX6aAarS8nqF4sKaWHEU5ReADVEdrgR2EqWqB29IB6PJWPF%2Fx6KPcqNhnbFEVtFuXHX7LQ4Xhfksf3lBMBnqf9LmJCmfJZzSr3jgRZVD%2Fkmi932iLObiva1C1Ivjd6V6C3ueAvJT%2B3mJWc87k5vcPkUMUm7TKhW%2BTZzHuyLWUAQn01%2ButjURgKqnpAbHb%2BFomRm3xB9hQUjxpUDPKHWA3e7d1Y&X-Amz-Signature=2d926f68e3e6310e9e9945efc9d61d1043a2849333f9097c6510399763968ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


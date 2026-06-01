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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2C2WII%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T144531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIElOcmJtD7JUbDv3ShFOdsT5F0FY9cJGa6fT2SkuLJC%2FAiAO6Qvu4S%2BrLiUVVGPTN9t%2BxrzEfa6xKUL3nMLM2BxJKSr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIM3qZdNtVolGxpTzq%2FKtwDWYUYMCJC2ikRRUAdZzxjyavvoFN%2Bi6G0CTc9tN55Pjxaf0MEKVYOvesaa9dSsEOMZaEigGnGgmhS%2F9r9b%2Bu50EC3qogrnSA9ShHb1m4ZKRVnSVey%2Bwe2o7QKudove0fQ9U%2BhrccFZaQF1i5Ak%2BhW1iZp%2BDMFhZWvLx7UqMbr3LDi9N0PicHqx4ehf7BdWV%2BLdxJ2oU9xy5Mko039Sz0Ogm1VxdBwgaf92d2o%2FmN1Euc4V5WHmRXH95Sz9Cu7RFEzIP1eH9lgBwAUapeI55HVcd%2BARzv1hP5qAjgQNaZtDibkOyX2h6ksA99tF7q5%2F1U7awnopHPwTMDEvotnTmFZutnkpBbaRXdF7F4hM4C0Pu9wHYditQrVRknu8jQO5BHwLVk3vUaLcigGFYRQcVtF5adxwaGgHZnwd03b6hAJsCw72rg6hlzabwcJ4F6a%2BtTHICSAEKoEH%2F0EGbhW3KmV2fPE5tJ%2F4ACasSVk5n8ty6tLj8G0Np4cgV%2FrqqbCSNk8sOM7E53S5DwBZk2XMjqtO9GAusUr%2FLO3UBVkJpHoPFAtGKAHxwN0dUjgjeE9oVo721n%2BE7mL33%2Fs%2FgmmzFfRcXoGNoCc2HGRhAJ9M1nqRRL7Kv0GEVmoWa3hmVUwrJz20AY6pgEkp%2FBqFkMDMQfK2NS6HCZI5jePkfjruG9rQbTtFoYxJL5gg0bEuo6XD71REpQYLXWpJOGiEU2tSFa8iowKYcN1C6Qty%2BQom38tep0lSeE6zo9Fm%2B0GWqjx1i9eshY8%2FyAv4BVvDhAfpj8pXtlBqwXOaYO%2FIeCBkwMa9KJFyXLOlGR5BqxDOUy1ksVPRjmo8h5TrjvO6Na9VBH5Uy0ZzjYKJjcsnVJI&X-Amz-Signature=cf13be3ee316f266ed8fbbc756e3691f0cae9b5bcd988eee46492cc73d67fa65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


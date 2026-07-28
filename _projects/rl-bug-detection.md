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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WARTF2XH%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T045038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbadUU7R7sZDIq6cIYRA7u4dhFcP3LyNoLHbXhxxl69wIhALyY206TDQv07Tv%2FeeWPrFH%2Bpk%2BGTVZyyPCjQ94gK%2FcRKv8DCF0QABoMNjM3NDIzMTgzODA1IgxTf2u6mm6QQ%2B1Jyf4q3APlPtarV%2FBtzPZvlr0OcP9bcke7ePiTYqU0hdbPpH8epC%2B2NjiIXbFmAosxl%2F%2Fm1%2B2cKEnAfuNNXJYrYw8d1O17XTu4oC9ZUUxRljUst7%2BZOJ%2FiiOtpZnYA%2FVPKI7l0dvyK7ul0TATnuwiVHfhCQT26wjdaVEkrp%2BJxw66KGpOqfc09abaEwDIkLV%2B%2BtvDLjHtz0PlE10U2pM4Kl1dPF%2BGFfn%2BHws7ynV6l3SaZzpgJd6IE4AGRe2vBMC%2FG9gK03E1EDnthh7iTxpjYB1t5pPhMG6TVmn6%2B711bQzQKIIp2MLtT4GLGRG4VFXyxggCkbARVu6%2BAr%2FcRJKVbM4kQ1g6qyDhcxi1utVJTpHPf8%2FiAYEnq%2BqgGaW6tr7QRrKAUKEw7YA%2FMjCQfidQNjmZppOERCZC5BacpobHhsYJfQD9jRyoAm1HCVsgmRVhmyjbz9c6mKkN36yi7yIkddEWrVJ4e%2B2oeImE%2B%2F047%2BmkYmeeBOouQJFfHRbjNQlqsf0giqOLNyFI%2BMLRKwsjqegHQhQFDdCOkjhppKVB48NcKGTZmgCvvE9WYmEi8In9SGFyy9T6SXPC%2B%2BLoGWqIeXpXrgZYYmJ5qpkUzCfqyWKnLXsdn%2F3Lb81K4b03bfmIWNzDK16DTBjqkAW1%2B5c0mMcfAH2TcSijppwJoIGg1jeBHliChSMQIJRhcC3EIfeI8fSv%2BBWvCnaqyTRVkUDKoy9EcKoK7%2FeQR2KlDKj7g0tXmUxkrnPQUvMuz5KD%2FhxsPSRR6sDJCNc4fy6ZCzBskYT3LOg%2FhhAY8zTbNhuvevPq2NOiC6q133ccENXSTUQZB%2Fi%2BvBV2ZkGdWkeFS38EIQhxNvw7Gk1vnm3WV7A%2Fp&X-Amz-Signature=bc652d9594a3f2c8aef6d6c8934cede314423d52027fcce670fa15576439c1cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


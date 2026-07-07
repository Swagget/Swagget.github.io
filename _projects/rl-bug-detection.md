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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLPYNMS%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T092316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCOznzTPWcfalvjzvPtDcJLCMagJC3Uh7vsENT0pUODAiB2lty32N14%2FdJ1t6QuAelDnYkwOR%2FjhHptldtFFT2dRCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMT8IH7U4KJ9SP%2FCUrKtwDluxOISn0dJWdJcOwtuqIiI9anvgUE9B8eI7QB0GRydFYaPQyOoTMhFplApSzj5PNHKYcg9O8arxDny24l4%2BbkZM6kHy7JyJffrmNKXjAfir6yWPvhMcKR35fNJCTOcsoS91quGriHxoxbbzrR%2BEEQCiW0AsK3us66IsI75t1KVatO5UQ%2FpY4953M%2Fxd1HPculxKGIl8lEA5jSU0Bx9rPhJhyFAElLZZwDbGC3vWR7tWegZHpvQJo2cEJeu3uHsS7Okd1PJUdk3XprJ61pLIP%2F9IydAM062KZ47CikSnaXFRsC0Tpyqcph8M7JNW5tNoVGJovBqnBqgGDYxTdEB4UOV%2BEgL8j%2BksplMfaR1a4FWPo49AG4ldQFAZLtv5mzYfpAHKAescvXZtTAM2ijPjgDYVsEjxvq3ZzD3xZOQT2S%2FdI84m2vQpUmDnU0nAokZ%2B%2BAtCLvkbLyOFqIYTfgf3kA51O1Ebsp8B%2BVeAS2HKcKWcZW2Z5JKc%2F6C01CKdKN8uckwMewzs6Xj%2F83%2B1%2FNQ41vgi7xWifJppmGpCZevuzN66HrDk9hgNOD1koHbcEDXBBquXaFsO17RFrSqA82v%2B1QBsb1vQMtLBGYnxGv47TmCf8bUn5eLqZezBIMwIwuYaz0gY6pgEqrVpvkG2QAZln0s3Daph6aNQbNGsUBCSxIeXVT%2FloozJkxlIubyfumPURGANgP%2FLs1ps5T19sV2Ywzo%2BUCOIqD3ByVmxWSsARm5cangPNw968Uj5gA9xJITjzLmiFSBUAuGMmeCrWfVLg%2BP%2B7d5qpr4PktKTkJ%2ByvftPsHqG5savC7YOM56eU4M%2BtPd%2BjNKpe1NB%2FBO4S5lfMZaZEb0LjhXxYsBdH&X-Amz-Signature=e09747f85b850b7c4726d368477a57da238235b8284fbdf0ff31387a26a9d9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


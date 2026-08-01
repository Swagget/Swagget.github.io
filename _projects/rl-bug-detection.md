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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2NG4LH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T184812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC%2FcWwZgjBpcPlCPO%2FWJJ9R0N6Ah2lrvouTby8ZPSopkgIhANEMKuZboMrEfohFxfNZJrZnFZI6i8VvKkTWiwu92jfTKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykO28ym6E5P5LyZecq3AM6q2vDg0ltjCV7Sm3GQaB26a0i65nvalghf8eTWEOLP0l9gQ49s0j1NvXHyJW1bIfKdfz7QwXCeenlFdtnZ06rnL%2B3uhKxbI%2BO0NR%2Bq%2Bp%2B%2BL17zgIr8cN26C5vPaeZBC2Sunfbhgeh5eFYOq%2BI%2BpysITzcTb2J6hDhvcvBIY9IDkORzlX7JGqd44glnhLfarEq3EpOM7Y67Zauf5CcBszV2UL1Nzj7uMBx5fvVmdfuB0MF4M%2FN5fNAwC2ixqlsLBjCITfBml2xwo1L1dkWMAAL7%2BHn6zFUVqMdegWx2lpc%2FwDIGVlmS3RUZTkcQj6SvJj7u5qM%2F81DCA4UsgZOsuksW3Ei2yzqBwA7erOJ5h7W%2FdvGDSKPYzw1yGrgGgZy7jE0kOoyHUxV7SwrP5c0pbnRTn0OgkN3xazxq5FDBk0oOG%2B96QwUrNKqZMmNqirZv7utj%2BCuiCZexJkQXkfiwLf0tXJlpUzeBMP3ytjwNUMyFyfSLVIulDo9j%2FPhLZZ0lkxnHz2%2FrvpYgjPmt8415hA6rlE0u0vHI%2BPDnyz7IXpxIRXCEvZr6astMP17Baya%2Bk8kuSBvXiw5Bg9lRJbdeHdGoQkZ4BwChbUAlwij0MsxUUfdL9bC4O6wfac2nDCe9LjTBjqkAcE6pKNxRnJICGUclqr%2F8kiVEgZaJ3PYRKmf6fnLDCvv%2FghINPhgcBu16XpJ%2BMKfG34bnFJiImlBgxqtUIyezm5zM9ZhkTrku2ukEJmNlaRPFVOwG1PPr8LNtOkq9DnP6a%2FSTsZDGrowG5YzfWyn4vc8WpLl4eVwyWr45r6XgnVMGoC1rIk7fklQ0FjHGbave%2Ftfz0l1ko8wlYvjvU1THP36M6Kr&X-Amz-Signature=1da703e57c078e1cab3c0f5f95e124fd17dfad7a1f67f7ebfbf565ea2c95710e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


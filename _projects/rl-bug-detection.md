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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SOZ472%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T102436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDMCMgcE9pSCACD5GbiI9HMQPXULmlbtHYWlzG8Ng5BLgIhAPnnCcdSnjcg54%2Fr9ZhgYz8O1sIFI%2B3aTx8CB0JtOFgiKv8DCAsQABoMNjM3NDIzMTgzODA1Igx41w%2Bghz9Q4sT4qCYq3ANQCobwn8wTW2V%2F4OvE5dWFQWZ2DMFmCAlqJcKH6GFVeaY4WYOricpGxBcF8PMoSLEIF%2FJXX5kDRkjcliomwumWo%2BQulYzfYunTioGNanYU6XKXUJOeM%2Bdfk%2BVh%2BN0PesCx44ZtrdT%2FvEimM1mUW%2BTNvGSAQV6YalSorv8FxCfvx1TlckC64V3PsxTjFXwLE%2B8upJfUgpu4YL%2B7vEk9Jbh50jPayT%2BVBAZgc3Go9t%2BbdKaUOpA2i5EFLk1kPYxQE1XJMlQ6sJ8m%2BAJhaWJwRiRs2%2FpYVRcmE14MFtdj41cq1ci96nKrxNfm5i6xaai5R8sYyt8iPh0An5F2SHB8whJ0y4Bdw%2B%2FaEyS3OOi1eb3FL1VZ%2FIuFrf3poqq2Y9QzyellCsOWq9MVj7TY4RVEW3M1IE63oWkHUs2UYOXbQUZS5kI6E%2BvfqQIGj2nnknXBphJnom6bbYiAYtw0u%2B6o8k%2FA5SSuUHALtrHc%2BtXXYhRcqL5q%2FIXb7mEynL58SXj%2FLjSQwOELe%2FloNzG6uoDM%2FlUe2oyuZvEYJANOxyIhN6U1HDi%2B%2FgGtZWPFPkPvcYVeSa95xoal7MqPg4LhfBR%2BNoe9qJhZOCk1nH1v%2BxWmwE65PomUkcKL0C%2BubzhStjD068bTBjqkAeTYTeThVsnyCjrEItAUrresjn7kngHZ7nBrDkdB3xHWl5r6yWiTWx%2BGzZG0d9BqBFDiFIRleNdJGqm1L3ToaIiM7AnQg0Pjpn2s7WuxrMkNxlgGpTRbJZqe389L%2BcNQFXdXZFnhfOIXg5NwKRjlrSFm2UUbbViQR0prXvZxC%2BzR9p3F3y9svaGJ1QUQsEV%2FPlTOHvhuBuG%2BcIZXOwv%2BKxe6p%2BSH&X-Amz-Signature=0a6638f2abbcb89f7483de76c6cdbfd9e604e8b075d19e8caf5e0d800cd09559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


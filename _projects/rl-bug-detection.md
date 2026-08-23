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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRES2BN2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDBPys3ehbTEVPdDdQnVGA72PEJZDtx0lupM7XTDzWKzAiEAwNJc4lGD4vjQULaa7nRCk1RZqvQ4FghUJ7b%2B3TwUts0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUnqkjyhmXSvV6FVSrcAzZkuAXT7x5meGPoWXLit5rNTzBnVCxB5p%2BCSXxoZvC3GmLmCrt6iws0u0TkOsi7OU%2BSJViGD%2Bu%2BoSUwRITO2RTgcpeXMD4Nx1fmvfzm61gfkC2sLlALnITLTqTJoOD5%2FIW4Odq2Mm7u0epplrhPNZhJTfVZzloFgLCVUwWxFYpxKdwQ2S2zGwoH2ra%2B9%2BS5OBtEhJor7RCn8SZL7xBr%2Bn3el4OyP78RhC04UBF1AABMMecF4gMfAAZlUhqO5ISEUl50O3Huf%2FWp2IBNYLq5ZkHV90M%2BkGnQwjduJY6SEjuvjzMhcW56CTcy%2FvF6%2BUNoRZHPuP4bAwyb8YOvrvzdWfgFi2vbQj17Q5dCIiJZbSUPgh7XadvJJXsQBZ3YHbuNpiMk2Ww5Mcs3Clis3JAULWdeYqa%2BvA2mocZZFhst7YJBcNIR%2BCW7nxtQX0u%2BoblnB5cN6R1C3LKgBgaju8tFnc1tP1W%2BP7yCD857O2v7565JhZmR5jkbWric4znIIWe1wxFZAu68A972lYkwuWuCXJ9Deqk8ZUk2gJ11XVi3BWQFoZ7311k1XMdifYkn%2B3Fzfh3sQVv1x8gA%2BvQGH4YfS6ZN93sgTurY2QVahR7Wc7Kwhels%2FtSuTYE74Zc9MN2brdQGOqUBfBfSRh6ueRuCMZtExypBazSLp1w46pdhiLL0CudDYCg6NUjI7rR7TlLhCXyBUFeV6hBrxHob3rctO86Ui0IK3wddiSlPJqLiRMFp%2BtGsuGxrUSY0akmOPN5QAIyZPtRApNbCul%2BFFV0xwYaNxRzxTakC%2B0cr0xKnmBDZNBofuPOd%2FLw0BEzr6QdSE3I3jDiw4%2Bw%2FhzZJZR4w%2FMk8TQ4lWRaXyetA&X-Amz-Signature=9dd47b55ddab81d463fb786001b50a6d1108c10cf27dda0397b6920e2672b0d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


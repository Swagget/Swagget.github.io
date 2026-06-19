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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIORIDYR%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T001750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8l7ZzmDlioYiSK8XJKB9ifG0SzVr3HexmSSaFmlg7KAIgbPKslWsx1gM6g4x251nvEcrDKBttCKJvz%2BOotZLS5LMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYRT9J5PLlDFBU0xCrcA8AF4XxNUh8TJGytr4eaC1mPH9AD%2BN0HqZH%2B%2BRKptpKKmUGtvAQJDcaVs3Gp%2Bxz9DvpnhIUMqVdPZucSdBvKd6ldJViX40FNJf7ZUn7qYMdLZ0P8zxTKvTfHUDUhXOdm9%2Bkh6yVG90AwmaET0I3RZa2wUybqKdWs6lniIyBQ5tyoJUoglP7WLdwgd28U8TIl8mHB4h8%2FTonaP79Q30VR5zWbOrsTmIXYOhEvngsPQBOzSE2MR2S%2BE9Pmq%2FhIxvxKnNu7YsyhyrOayITYrIefl5b1%2FyV1rQ30yzzlOlUEmsXjM0ACLD9sDBlqwcht0u%2Bmqb%2BUcFPY9RBdEMkzOv4bDbl1DrPQDuvHWDptfXd3a1%2FRvHr8lTc7qwn43HNZQqSkntXfxk82zNiBct46exKycu7QODA45Rdq0zh60CXIb7RutYLsr4zKSYkXkMStmSX1ELxMfYTFAOBzugo9iU1xHrAcLXHid%2BlPS3Agl1K9HKzIYC5acXLDy1s1iYuxQ99m6CSsodPSdywbbn9NhH1LJQnJhMSOzApKeZ7U6KpXTiy4fqqEfUPbgsHfH5VhI1zd92pA5CaM3daUHwRtLk3dIys7WUQQU6M7%2BHOiFbKPxftvpG6iqDCTXMtQqRvIMKeF0tEGOqUBq8vl2b%2B74HkCUQuwFIQ3brIYJx7sejJJ064rA0jywaKzuG%2Fj%2BH05jI%2BeZ2rdSoclHbTGpGUhdpSBppC3uU8pxJQZwxTJf3bv5Lj8hrXRb9tXHC9EW60zPMGl1B5jbU3kYxkcDlefFj7NHjVOyUjO3uQNMTnjnj0EkSpA3feymqRJfDi0uS%2FJ2QAULQUWYej5fH19sPYi%2FUBjmhRhYSDpTmLHQsVA&X-Amz-Signature=56134c62abd6b5b2cf3e85b4631bef1f7149d8958af373dcd4d586da43ec1e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


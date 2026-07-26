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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4UE63VS%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T115220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBkL7YuQrAbFCyHRR9%2BVmTPvfvza2W3b3OakZj3kQIPEAiEA0GZnHF30fHQa0HhBYtRYcbQBkMIEQIM40DnSBNK0Zxkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBxhxjeHe4ZWXHjLOSrcA2CvSBgu%2F%2FlprR4K4TIoR4boge%2FoO7y28Ciilz7ylVaJY1%2BjKjuNJwOsDrl4isOHdRtWYM8f7jqVawjj0DAwPzK1heEaIPxrANywF7SzDKw%2B5uQQ%2BvsZw%2BBZSE6VpJMIwfQEyo1sWHwLYWPPeVTh1UCPR032bCsMh2F%2F8cEku0jITt%2FW2ULtuXnJSwD%2BzzE0XRxp0O2%2BNcmKIOd4Fmq%2F68s%2BVbZPPBT4XYKGN%2FbEWFlwdimLEtLadrWCRnMHkIUI9HgtlslZtDoekp0w0KmXDTa6n3VKOh4oVSzVoRxHZLf%2FbAMjadAV63qUnQTrMZBvvEMD7OXh6fm7R8Z0r2Zhc9LJBpjrEXS%2FmQdl5FcaAzrHzfLRH6q31AyV3XxUezyU6mCRNVuGQs4J6KN%2F7jHxNoqBFclXc7eJHzlpC4zD7PaynLvdnf%2B3Lx2vvMPEyyXRgH7jaldU2657fx1fLelI%2F7CKE7qumym3CEav55ehjrmGbL2BKOPjCsh0XIPKYx%2FpF6Fwaww%2F54KOf%2BPGaLPpsd0sVIwwHD%2BEykD4jRwGVjVgCGRcyGgt0DG1PCy3Ssx%2FfozbydxKd%2BxzCtE7kDZ6Ft6upWzKkG87tHGh1fEt3w%2B4qre9KFBe%2B837EbSbMLnLl9MGOqUB%2BPUo0GvngE00ZCcaEbK3qwy1%2BhMNH8qBli0P4MHMHH7FzaF27c47Vm87vxTeV%2FebbFywLf4eoCVeJjJF408N9SPi1BEfh53YIJhcTbkf4tVBh5k5pzv28j%2BXpDTFdDk7WdlUrZnbopHXGg9Rs7AB%2Bmk72WRQNZNC0pefNXyg2nKjYrGQi%2BBmTMSef2st8IxgeI%2BLgtu7e9j4aHpKUps8YLvk%2BZJY&X-Amz-Signature=9b35d5eda5728f701876daf5c8ddb3154c821c6c6f7b41078f751536c9e6bf44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


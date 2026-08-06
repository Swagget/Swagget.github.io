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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H5BO7B3%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T124804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAdfWFcmQBMrVT8Nze9d31dR2c6ewOL6s%2BThSqCMED4NAiEAmrC3ggWHHmS1xwgt4YMITSL0JTGEzf07Fxl6MYeO4dMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIvn%2F5dB8RrSUJ4BdyrcA0Wb4W2kpX9wfasiPwhKEa3LjI4FDzi3wtkP9%2Bt8mbHW9QSo5TN6hoG7Xou5pOWIt0hgyNyi1Dus%2F1toFgJPlWwz97%2BuB9%2BdQJfmrZ%2F5TC474A6hg2%2B97fhZqCx7xrpa89IonKvEQ%2FvMyucJUSCJkbk3i4E3ZHlipz4lBAGDyZs3AdAOuRjxOhHr1hRftrorBtm1j47dDXCM2S2hYndlYkAu5mFP7Xtg9WcYb9HOS6NAfyk%2B8jPKK6hiNkq4HhlU0kal3wXkcPnvXkacCgtBotpqlY5b1XK%2Bq8nd2ekNVK8k01QycVw%2FVDgLn25qJgJ9Kf1XU190DZ85pT6NTIGyPam0UQNCNx5PYdLde8d%2FwdDsIzdfCPVUqH%2BEVoxKXF%2FqjWv6lYkZAnupMxPswCZW14X49XJ2%2Bx2rT22mTmYyvSZN6GBXnrjasDQRCuFPMkcd1INHtfBMg7f1%2FiRfIsuJF0%2B2LK9rjk2GMcN9d8UgjIdCh8oel07jHuHy6H9SrntqnxCrNgr3KhjaMTD7w9E%2FurzsDjo0Xz9LUeV3S6AqS%2FcBdvIKh2%2BSdsU1GoWDjExkiphYwwYrFLMmjnysJnClALNAVhHjSPU5YtuosvOPaVRrDQ%2BeIebB5lLU9t5BMMHr0dMGOqUBHugmgtoyITWzGEqp56iNo3%2ByGTS7eewLMkpw3sHlxfs0eS5R0BnHP%2F%2F9PfDBEn61jAM2fWwr2G2yI2Q%2BKwe8H9V8jMT352pI%2B9g6jsYhoseoiT5VfR1MQLhFG6%2BNHdVi5rQSWwB3PQpRSdBUYvJl%2F5X%2FF47sim%2BdDIQONhAtY9AjlLo%2B0iTtsbPiKorQ%2Fo7R%2FkWnghkztfIzvX1gE71BuipBGc9m&X-Amz-Signature=dd1172fd01df00c2ada9770b28ea93ad9fb0620d15d43f5bc888002acec6ee16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


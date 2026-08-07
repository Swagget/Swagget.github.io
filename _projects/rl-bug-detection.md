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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7HNPAW%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbIF43mWO0mt6KFcy2Rm5XxV1qTMM4dcm%2Fij%2BQNgelCAiEA6XL13bNuJSpJyqfX7YpUN7tVGlDz%2B1EHSiikR10eBzIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBjPgdbcbaTNneNRcyrcA84Rj2jRc48y%2BbJYVy0Wn%2BN2mr9WfNqjsN37su8sLlZDq7iLyt0S7Z4KzKVnQ67eGyalkqHYVOqz2OHzf5Z1QrBZqr3BXGiIHfXSmSDB8Cupx4IOT2iim3BqVDVgZLOy%2Bjd4r0WPV2GWtUC%2Bc7sClBazBWzlhvAn15Pwg2EzH2j0YMPANQ%2BCHrjDNOrmkt2cxPrIFHQD2pSc6XShbZoFFTTy8Ye%2BY4N0Zp3SzGqnSMBYNGelUiaQelLU3C1UNToy4NsdYBnO6dCk06pSe1MslIFz74vGoW%2BFX4t9PIn9ZXZdPj1SSTXhcFbeW5Z0TxRVUOc%2Fdvn5ESy08meNXdUEVyeNFuKFPiwMCniJP1n188Fr58W6czXtjOCn692EkfKUnOPuSMVFMuQB1PBlRkv3XQmH9PDcytcGNWT9zVJZbALriFSanvS1y935r4U%2FcXFu057SN6JDs10lnv%2BRJxOwWLD7oFOL6h2AZinm%2FHOAdDXzqsu8B%2BQX1MOR6uS0IMJZiZpct%2FQ4o%2FyuDixpJa630dpss4nJtEXNHPq%2FwVnA5QvgkCNQUAmO41EOIYIHqrtvCbtUzcnFuv5MNwPKEsKVF0%2BkaJO3qRmp1Cu8qjXhGzcSpElqVxATh6vmhBB0MPut19MGOqUB%2BoRvPwdj2PZWkyK7t6Fb3Gl%2BKxfQMtSVRlgfrxNnrHPEHSu7C61zuTFnF%2Bzk6xSAauPLI017P9ZnuF%2BxOH7lDCBLTYeUoCOk7ywwZSFhhL%2F%2BR%2FhIwR7JOF2Hfo6HAL6nY3emtbyqZbR%2F9SwMAXpk04wTaJV1xdBdkZ6f99LOuV7rtjcxNDljh9LLPm6wP6uATZkoo7IGfHGwxVXcNejP3niRVIdd&X-Amz-Signature=4cc048087dd01d913b7cc115362ca9a0cde72373d6d992e964e3ace98de6266b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


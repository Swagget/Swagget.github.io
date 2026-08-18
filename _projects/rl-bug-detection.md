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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USZXWIZ%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T101521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRHl%2BslvPmrvEZ7lGmkmR4Ep2ppKYmh92EJkVLBGhfYAiBP7LYUXzCDPygdjsHFtf%2BA2aHc1FgTLVI4RWs2sQPxWSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMDumU4Jz%2BwjgLhGpDKtwDtXAmfHyGBYBW3dqJbbMvXW0PrOdU%2BWZMtueMofmAzc6VuBqdT5RDfP4Li5D2psVS%2BSVIPACt13zTcfUnl%2BfQw35%2Fmz6pgu8NLUr4SsNQAjNbzwgZfwZ5WzmwZbQkPRIN1QD3llQ6bH%2BRysAUonJvJUaVptt%2FEzRT9rgQ1cGdNqrQW2cOVTfnQZWcs6d4jvygHdpoIrW%2BO42trT4fi5S0%2Btq%2B%2Frtl2QLpA6wvebHhKlbCa6fM354u5AjsQ12vIkb3BBlwMmVsss%2FLup9ZOjAx%2F7duY48oK6Z8EkEW97eaPK2KoO5iOB8pOsVRLmdlmCENBwCVBDnO0ELJYqZpQX3345QWOmXvUO4W9GPp%2FxDeAezQA3EdOvDaPi0xz0ovjpQFD5lbNqIaTQFa%2Bl7OQTcGrlCcChbfCbRasHILtK9vz8e63F5emQILMDu0m1pWDqWBMBHqTQRrMYThS1yDN%2Fbh8OxFn26dg2Jf88eplfJ7HxQan4O7PcQtTvumU%2BptA10MgUP2r24KWsGtQZi9pQaC%2BC61qWDW9UArdd6S37l0ca%2BqlZ%2FJv%2BrEDlRVErFgK2zWWj0s5zotFk2fgXMfmRdod%2B0paccdd4YbXtJAalIC79iOgkJJBCuGNd2D2%2B4wwr2Q1AY6pgGSYPrk10JgzLUkxDKFS1CEIek1q49Yt9q%2Bt5dRlnF0YQGhrBg%2BrBcDa6b%2FAyBrsBGtVM2b8Gjkv6GAKj3sp7TviHd%2BU0kY1S2g5fSAnmhskkLsj6g0L3mTz3jcOtyncunv195K6bQs40m61b4sY9%2BOvzjtwqtNZRmxbw6u7Pi3h65jo8mu7EVz3oHSxW2ReNlMGlXe9xNtRZ1Oq%2FeZclO4okppeyPN&X-Amz-Signature=e005cad1346bbec4aaa5ee03ddbb947bcf5fd9ff47c6cdd969ea913cd41e021e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


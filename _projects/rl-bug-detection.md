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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZLAUI6D%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T225749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFqCDtIIRz6RfmqqlTGpXY%2FmChuLATT6HX9zq6Wm%2FfGGAiActNpcqlVaiamYOiK3k7jxFf%2BYTxv6zrebjsldedePnir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMrDUiY%2Bxd3gVnbBhlKtwDxgyAeWCAZvTHYEq2HLHbILkahiC6Xd7a%2B3LqwdjfxkPMwYl%2BxGnq1S3XuFGx5tYA0JqjrYKJpi6xCP%2BSuKpM%2FO%2FwEJLaLOjglxq4kxm8ClsAkPeTsktzBRf7JKWb8eqEQP91oyur9QMtHhaiFhvmoqtMSRMbAO1i2InuqMTT9xtySE8nYrLThHAcfAFg63o4ldfdI9R%2BkpLlXVpmpYnjQ%2Br7z5SJBAyqyfFCsXPY5qTLy3aVLLR3Jwp0d%2FBA3Ap0t3SGHSuuUalOnwNp%2Fbq5u7SjVeuxTXv3QV7EQ99l7LC8snU%2BGVba%2BZixWdCfSIjbw%2BFYezeR%2BkXYDpeIvDeyamnu%2FxbI%2BehKkaD8B3n0AOQ5iheK2g3ruEpDlKcaiYwkLNwDjLycyQ17hR8Toj6ZgogYa7vd9yLGZWXzhpmDng6cSfYgYpGcabYXnlFfPRUXlfbnvSK2B2FzH3wFES77tyncGr%2FyhtHPdr82h%2FvNrHuCozpxiMuKdtUtB92uSaIT0%2B3BFCF2%2BIXJO%2BPdb8Dd8U2cBrgc4W0nmVXFmkzT8ekJS32oxGupc7ufA%2F7gWGIfoo%2FVS7fKD8b8Sx1%2Fw6V660yyrUwbaKawcOhAg%2BPrCc7iWAl4T7UhbClW%2BEIwrqDx0QY6pgEMWLXQ3DlEqkyMWu5jdMAY7%2BP9c7TD62miFhsaxwByWq%2F68bja0Lcl%2BDXH0ffNUpOnM8VB3XHAes2kQOWV5Mxn9708nxM1%2F%2FqcB258BbAo31eKfLPeq0WiODEd0tESSiBzp%2FGi0FO%2BrXwNXCSahnKtVhyQMF9YZMzBxwOyGKPyKyXYZA4NdKdyY3k1Vei6MjZjKaYV5G9saqLsj8AEakpbrsiOUVgc&X-Amz-Signature=8f4c6081a23fffeaac42a29f4b15ac5a221b3a01e6ba9db4687dc1d18007f5bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


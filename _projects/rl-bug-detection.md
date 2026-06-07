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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6XHGPCM%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T205754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCltVJ65W5yITKQP%2BcJShN9NJUf35GyL0iiRNv%2BihSlBwIgBtsSHr3pQE%2BmTqU5Q8O936mVFSEaFg5Gf5PjK45nAW0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLw5yu7xclRmH68vircA9KS%2Bgwlr4p8DalVNY7wcSMWIak5IigqOdr%2B23t9lifSTMwhq6A9v%2BIWIhlFpKgR6dojzUeZf0js4LIV1xfgBn6Un12zTMUz8sw93zH7VhU9pCyvkIm%2FGCcCQT9XeUsNnsXECbMycNAixOo6nBN4dN2XwDY6gzSZpLK1trhzPw0gtySs1o3J59phUx6Qq9io1syQh%2FEcw396DvMqNHIwLNZA331%2BX93d8U3TCHDQfyWnSQDXKAKCzinLYK8t1rlI58lj%2BN9KPnyvk42JXDDR7QHe1fnssMLAk0I8IfvPJwlEnD2g3alYhjWF2LhGi70niRHVQxbMyHmr%2FC9orcoKZLTO3KGfZrgfljxsQ25nNTLV7EySvR4q5ufUpNzrqDQueIteGlOg9xt0VrseZcbOsElzNUu%2FCvZi7nBo5hnq5B2frFqYCklDQdfAX8lz1wyAsT5M5Kwl7sEhBsypwL9cKksd8MKLvuUahkFUYvBjyu%2BPkaV%2FAF3nr1PS9VjGtEbQX2YeGmA4VvRxzixdBH2WtaE1804RhV6yKPcMqvCox%2BkMiW4OHbzy57OZmL3bmkRJEmqxwo7b68j4jDXiTxZUKN0wvb2JiwwuPdHSguEGwCaP0XPMwOU5jdPEv5OwMMeql9EGOqUBUmZdwP%2F5LLJYBdL%2FiUtabgyvtvtiP5yQZGJI2nV%2BwhdA7LneyYWLpLDQtyE8r1aAwYi7lAnE19N0b2lOGrWuskimJ2Pny3wk7SYr3eNalee61dqdMeVamv5f4jxnNSjgrzC9Ybv1XDXOY6%2F%2FNr5khaq7%2B5xMBfABmd746E0vyXc%2FqTGjAYBLNu5j%2FGSH9O6gWVKki3lWiKs3zu5nen2EiSisMXWJ&X-Amz-Signature=df46851d05fafc38bfe5e4de05a9194243ec22c8ca7e20f998c0620e171ce55d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


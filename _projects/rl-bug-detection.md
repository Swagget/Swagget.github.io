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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMCW4JR%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T044228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDjjfW2euIfanCKNskPhMHvCGV%2BGmEogVxUTMLjt%2BDyqwIhAJEnrsTDMCpnV3y1Vd%2FTNROU5g81SAAiOc9M2zmbxKtbKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0QC%2BJz9SlyobQ7Rcq3ANZhrPZNv%2FKWfhRzUai2xQBO%2FNJ%2FCWO6WeEaOuswbenb2atx9DYR62K4w7zp2tkk0cmZ2y%2FLn3CpZc7p%2BjObBToG0Y%2FooyfpiJivnwa%2B5bBqGaVEARJ8e2dn3vFt1nL%2F%2BKCtBr4bvaquncD4NIpqIiqz3NJaVoYDIv8pisAazIkI%2BQDJdBauHowyjiVm2yHp7I1BCh7PhohQsrpke6%2FcrONMO3FL9M4TzBFLGf3Turo%2B2lFeZeLi0A%2FyxgmN55blR2M0rC5avJ76TbMuANZay3y9tWmZKumIL9cdxjZaVpk7jlslE9vHRXIxq1WFlacNLN%2FbtRjMYLDT4%2F4tuXVXlqnOtRt1ocmaIZRd4cF1pb%2FjjtxZIi5DSGX6L8%2FbdoqLxs8nQp%2FTf2ygo6mLwkGsRLQBFvsXxg6saF3bTfX%2FZ00HqWl2U9dIMjiVaxMNo%2F9H8%2FX86eM6KJhXlHDrpuVOVkfwozNre8zHa%2B0ZgLShl%2Btee7Ew%2FR1dqygF6F1gCT9wM3B94Kq8s8Px3LxUfoAciq%2B6psAL3ix6yoLIsbum0qaUgwyO8jHb6Nsol6OGtY3M6usPFVof9%2FWetrqgRxNp5sbs6t9CLFLdrPvfX2%2B9y%2B5LEhjNp7WKM7jpAHhBDDWtenQBjqkAca8L5WBVrALtQpdTkFe4zY%2BEpw51SeUBguYf7OtHGL2fIYHdf5y2kAZov%2FtXM53uHkjxSUhGDI83Cl8lXhV2MbT%2FSK0qJHJMQvWig5VizsFI03F4%2B9ylu8accTLdNQHg43sYPT7z22Ggs%2F49y1u8Pm4MdoacUfs%2FwADBgx9w4VW91llsSgj%2Bs34JGF8GjMJ8NoGetOsHqE3OP3QWt7w3gUCEfdK&X-Amz-Signature=a0c3693a5d2856ad2b733587b986d83747bc2d4e1d85bd73739e57d4402b0a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUEOQ74F%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T195650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAo3SNE%2F9O2Gz0TVviHe8eSBsiVP5dGwSuL8ezTPOgkDAiEAqsC84dYOKpnsAY91cd5Q7ipx5OWFCvmiLk2i0XTCgfcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsQEkSDtwTgMSPyfSrcAwBqAu%2Fb89TaqVp6PYJtNX3o4tguKDXUke8m3MZ%2FSTCESeEb%2B%2FdDxt1SNX6KfbjGPw7St4WLcFuYLbuvaqNfg1p5MxDDCSOxTBxLasH4XR1rcw7vvu2MzZnPdI27xR920dOHYL0sTQBDH24tL3wxZzoen2lVDw5H%2BFty%2Bw8U4jbfHQNsK8V1Xek%2Btb7ORauyfO8moavuem%2Bk1UxF3vVvl4HuyO52%2Fu1%2FApB6YgjnmGkdBbd4Y5sGJfXDRv1L24RP4u25ptHWy4gKmmJ14XGPWQByHK0wHAhJurn8tJuljB191NhCT16mSK5lihJdUlH5Dknl2r1KBhkLMII2IzjPR91I%2B6M0gxKnGOjpT0PNqxKHvWB%2BpzVz2zeky6mpqq73SXQMrEmn0TRRNKgNvVJHn3xhHkgt627ihWVE1Yg%2FqsxDhJBIu7C0APpnMVjXPxzr2oGeuhMec3yiWhGj9KrUFfU2m3VxhDgu706yBOIUl2wKpiZab6hRMXON%2Fi41CHF4bqsSduQMa1mSBNql3SxV5ZyGCtmfFMvVZ4lkNIen%2B1bQjfVk0UgGzVCZ%2BdueLHFZuX6kopM9CCkwkwZgN%2FA%2BiqjKXZS8e3J1Lh%2FGUEx%2Bf3Puo1Ax33ZWVocGq9N2MKTIydIGOqUBL7%2FdC00pVPbTXvcOR0V22GFVDVThWCEA1MLHsEyMB5SGqs%2B4DAe%2FHhThypNngF%2B%2BDr4Wi6mtE%2FaICEWS4dS%2BWdRr6K4A7j%2FOtxui1MbI%2BTngE44NLftEEtuTRQlmtLdJbOPLvECPxQzD5l5gFos8g8urNH3LhMs80iuJhCFCh23Y9fX%2FkFYezIq7jCzQeqLuUGwEpCUyzKzvZFNfCzOxXtuh5Otl&X-Amz-Signature=0754f7737c4518952a470808c0dbeba986bab65bbb2ab2fc0e648b5a115278e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


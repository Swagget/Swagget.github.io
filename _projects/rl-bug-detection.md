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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLE46CR7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T200550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICvNaVo399o84r%2Fkbbg3PAvaIa4p%2BPaeBg6L4bEdt1JOAiBfcFh8zhz5xV8oMKVTA2j3v5Q1CUdkjQoWavxqi8fdiCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMwg1yGWDA4S5xPwk%2FKtwDhX5MI5hJIX5km4x7XqXSyBer02mIwQW45sqJ87m%2FvUQ4IMM33OkCORtcqgw%2BScYYHbCFyneeIR7qWakCycZQUkX6RaOk2yPhyFXQZeYNfnyM%2F%2BbtQFbsChLAKnerJFlJiELCcSeNe2FmC456gplNxM4UcpOk7GkzA28LSK5DNX4IPNDizvoGSegoMdUCksgXkEQ8Xc4SG5e%2FTI%2BNxYLlGC%2BjP2qHEbtfUo%2Ft4SsblY6pi6Eiwc1SQOkSktoxH0znVgQzKW4MsxdH9FRWFGc%2BMOTrN51DWVV6lkmeknM3d3G1UbvYqQnqXEVePm9pCZrivmaXWLhjdzZyqzFM33diZrjUdTMLH23RtCfWfgDCA4Hn9nJpcW4NzcwfilEOA50dJ1IaAdA7054Krq3COMKYnaE%2BeGPHu1d0CcNFmnT0vhJpm0OGW1gv0CwCbv%2B9GiTJBdALEuDtP5YtPwuwUc3FzXZEroxsabKnl9RIo4vQjFK1ifSPxvNO37sEymHSWPIIYShS1Byb5lq4TpDcLBfFxFVJStwe0FW1qp0BSZ%2FaNYkcrrBQ%2BEoAXL6EB32cC19Wsf96ANDoOkuoUpeXcCY%2BAODVsnl6aUrNijJ2KzOBckzV9xIJpdfKwOxvZEkw9dKq0gY6pgG9do%2FyjihDUSl5bjasm%2FBtkxD4x%2FYgSTaJgF9nTV2HuN3x%2Fm38vgySvWkYhWT9OcLoPAkFjRammb%2F9y5Pb1wRp1oi5au9vznAh0%2BEWYHjze8BHnJw9KKTJ4iOe7TPK5uxwGORRp%2FhO5v%2BpqOFfLrhym%2Btqo%2BBrj%2Fir890Dux4stQDzYd28MiuLuJ32RYps8lXLHD68gAAIhG%2BXHmR%2BPhWCFBX16Phi&X-Amz-Signature=16ca065821578cd97000da3c38cab521e2046cc9246a2228d2b8f818ed9f713c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


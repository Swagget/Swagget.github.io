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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSVPKQUM%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T145836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvRjZnNIYUaXtUxv837M6mdOz%2FJRrfT%2Bk1aw3KT1giqAiEAkouPtvXPf2cyQVaWF0ZgdWzH%2BAzy%2FFMtyRHVtgMPaXMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4EYApHGCmbHR9LnCrcAwbediJJ3xTH1wIoVparOmf3fjoOFo%2FNSRZ%2BT4UpuhNz22xzEfZEljJYXp6YgIRKxCvdJ%2FhfBJtgmhNgkT6Q2u9vQay0ktMNf69zkzP7mlZ%2FQ5p13PSFIzSUUeC5K4S6VSbgYDUJI%2FaFBtElv%2FNeQKECpo7i137c1iVHa%2FBeEQ%2FCSxiBNrJnSaVfRbmIa0t6pgiSp6pbJy8IXWvUX85AkIgpPl5SbfalFA%2FnhujywoRZ5aYcQiF4agDj37leKKUnO%2Bx2ylQoID%2BOh5c8anNOgu%2FuKlWsyGciSJ7b8xoaNgIujrU1oGA9TWDaQJc8eE1FhMxEkZ1aYyaRKHvuYB6TxLFcSR7aJzsLNC4BV8scX8AMdtwcKuJDzKATtxq7649nbC0oU7033%2B9iCMWoFopsV%2Bde02D7PqEOyA6IVi4mQqIlmjHJJV9N6A5OqJsEllLfUGKRhCfUucqnpuG4WldIZ31IOiXa3yeNV%2FnmzjBgMbI5Yv25uAa1E%2FqtVpyUawOR4kQ%2F%2BnylIsrUOYvHlQU9PRIhMO4si2NgqxzK2N9x9cqurClsi6m2pxYc0t68PEt70o0i0exk6JO2EHPWgHKb40U%2F45wS8IIxh2t3orubk%2BbT3bc6dFWDfG7kNXHRMKTDrdMGOqUB%2FyE3EQepxY8WE7Y6YW6ivAq5xWMEJD4mz%2FETzFc5MoMSdBdU1xTvJL9IRfQXpCkX1scrBkbjE5jF8WAwSM8e3VI3Kuy4TZu6MgExaUQOOtWDkSTzVjPbO%2Fe%2BqjrLBPIVl7B5L9auxQbtP0N2TR1zKZOeDRrdruPCXBh9lfmgPrjnT9wwIGbrUZfiP56C7dMl2fAdhc4qUv2MRqCNZu%2BSntaU8qtH&X-Amz-Signature=059de57ee04078c1e23ad8f46abc1dfc2f4340dd30962bce0788c285901d4911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


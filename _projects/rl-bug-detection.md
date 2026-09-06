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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQ5ZIKQ%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T094635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCj2mmj2PeAfduSp6yMcY0EBplzxdjQok8HSlUd1DqJIAIgWnku15TSye5f9X3OpVxf3FjgsLUcILO%2BdsX1u5taSrcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIPgPm0kt5u8PPn6AyrcA3HhkiPwk%2BYqdcMXO6S9N0NcCqgbHDcx0R9f604do5%2BfJo7co6EfgBRm0irLIzmeNf1WNUawGzN1MCEA%2Fjlh%2BuwNJB19iYgNRIDoWk5lBLwMqEkfusS4UwIPj3xZANHnv53WNfVT3Flg%2BTlCHOKYcqOi4FJvod5Z41yAImyMaCKu7c3QPraHarPqmCo2Pguo2nobmbzprclTRIiKTH0AnnbLhEUh15ZjAiOtjHQkb2Irb3SMpnK%2FjfIfhg5O5WN3MYPQ%2FN8e88wEDIiQ3zt4iR7H0Qt6I8jT3i7H5K2Y4C%2BNpdy68GjoaTic8VMs8yx9%2Fd0FFKQsG8%2FSVK%2F5lUEKOT%2F%2FKHUNq%2Fb4Lzsfc3BsTtWsDmotHn0E5ansYvclcBKLv%2BSIwAl4lOTz%2FzXfCR2UxW9EtapGcX0OtiSMtEPi%2Fss0i3WGV21FCzMfmA%2BjTxXyXRXmYPVGX32fGtk04Tn5yHTFN2LTN7BR32%2BHsxmawcMIDO%2FqAKf2xqpXnJHhRiT3dDAdgYzqUnHkttRjY8U9STrep9dro2hm57KVIXZa0%2Fi5x1Cby%2FG%2B%2FENnm21jJmLRefZT%2FPWXXmTnmylpR1vDS06IzgcXENufH%2FdTqWS4nI1bzhxkaKfRaUJCRhZ1MNKf9NQGOqUBtaYW8QfgXf6ELCOx2k0dMvoDgZNtcopBqhF26IChLSSaMZ7Y%2BGwQDzulxVkGvDEvQcWDrXKvbC9rKAKkXZEfVe8d5cNr07ekG%2B2iFZ8K5LHPsFLMPyj3jBT0tB8TIp%2F7h29HKSIjZyYIBdYGs7jtyrirFxcPTRzBlMGdQUp31jvSV%2FG2S9Gya3SU9yr9yGQRkMCmF1szw57t0vptQs7ObexiPJ7f&X-Amz-Signature=0fafacfdbd8432e3d69eed3a221e9cee6103bb669cacbcc583d45fdd015a6db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


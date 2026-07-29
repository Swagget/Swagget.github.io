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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXHOF3F%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T184851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDNhox196JRAhTLT6mxU44o%2BmvrVWy7tIzAY8kOyjcbAiEAsDZf%2BI1Xnc5Au9HzDsqGGuKyxpw2REVkbmL9PmRfX4YqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEAAdBz2n4rs%2FkZQircA3X0MlIUXn1J2wZ%2BsGehFT6eDtiwbwn6SSRmI7LsWmhCy0Mc%2BRb3TVF1lAl%2FarFQixYSYy1G%2Fkvvxp3DthaOTKTnO3DoqpZDZiipZm1dAD812E%2Bx27sVcHHzyLPurXCwRsr6eQ%2Br3i0%2Fp4gOkfALERY9D1FiBIis7boEu6R%2BJPK1nz6eZKFDc649224VBbKahEkhB2Ic6LSQ%2B5hj%2BhbSO38LlaLuSHU29%2F25bdDQjkKJebasOwECzR0%2B%2BQr3oPomkt1zrgdJJKywdBu5D8xj2Qe%2BLwdNQs7eWiwKNRCyzCzZAct0BHLB3MKrELFzOjPzhtmD5nJRDtxtV4INO0O2QX5vmwPQLwvaN3w5sxrL7lit2mB%2FaN1HiWXf1SDOwxWsF6tC1X7%2BoujDZNkA5wU5%2Bv9KPTliPRpkurTQIdCvWaftJFYVrkpY92tDi2fUJkWCRq6S0dAD0VZvCEvhPjYvVOk1nL5il2kVEEPpCyrQqbmIGQvNPzacXcZOfj52gF51MXV6WmTyGhKuOsxjVmJ9lPcAHhN%2BfWtqYoY7Dr5MBBPIJDdk345icXKV9yLdcM%2F7%2FleDmmvVVdOlI3T6D4Svhyem0rpM4nEkN1Ml51UNVDqzOh0Dn%2BUiaY1HwDKBMOGMqdMGOqUBcQRcdmofMwEyZY%2BkqJx%2FnUXNPVnwBcJRmw5lk2Ma5J7vsQtI1VElB4ZWLnRwz25Zdks8neZFxMkyd66tJNJr00ps3S7b7asZfwLqXdzlmQt45VO5ySg%2BLrVXVo6PiFMMB8qjmqgjsDqmM7RvUu1LVD5ucwSnkZMRMdQO3cuDC%2Fjxyq6rfeCI6x2spn7SQzhuZTTenJ4NMJGsPwBvCSTNWjVEtoPK&X-Amz-Signature=55970e8b1d5eb51f16a6bfd0ba5604c07ae732407fbd1629934ba1261b427fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624Y35RNX%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T072300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDLNnr3AYjeIrVzcJ6SWeWDdTNx9ZZ3ikuKjKR23aGCWgIhAOm9df62AzLlRE6ZmukcYl0uxiDbOsh3IrLO18Pm0KUVKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq503S35KaMRAO9gMq3AODnqZeovOEenLg6NC2dnOkd69qQnxMu56DzWARfeq9pbqg9RN9qZ0D%2BO4qUI4RVU7W0YStp3Qa4GGi8FU5VKdngTYd19OnDg0IiPcXI0QNPO31ccUxalFLiAtmkTbSYi%2BnzGysdUAvDEXbvPMdKMh38fBwMqda63yXa2eIkrMGapuGi7rHmNy7OoLlFbBS7qKEEwNVXbjDGRZ1nyGpGKVA7%2Bz2y9K4dMdENwYRHVh9KaszvQ0BoLIJ8OHLkq7M5drbDOuJsZTsCn4FwD3GLX%2BtL5fEgzApQTzdu9bl9mW3xDBhs49Fl6gsvo3ykO6lG78Kky9s532W52hndeokBkIpuGWBCPdeaOCgaS71I6b8qkKC%2BTk%2Fg3Lszz9jA%2FWE2HYepnQ%2Bz9qr40Euw8z3p4YApyqmkQys4unkN8CgugA734jV32QWCIllyVpH0gt2SRfpspOcrOwJDrZYmE0jfR6%2F3YXvx%2FMAePBnPJMJtYVtSdNK%2FNwdxH8OxfitcHQmXm0J80fn0LE%2F7GK%2B%2FmG7ILkD4OdCa9mEuoVK8w%2BpouTgNR0kYWaVpvgAD2i9UsCFug9pYHnL5MhNQ%2FZ%2FXxGWdfejykaiJzn12WKlbJEqtTBuO483pHd6E%2Fpp3dCDkTD3tKnUBjqkAS13hFlizFXS56Ih7L0DELnj%2FKbPxd%2BohtBlcYtFOvtaIU%2FpzDNz972y%2FSBaRJe8O4CTH6TLJEu48a2Q89Mqh%2BoNsRM%2FyOGN9Y8nnAzafLEIk5urZpyrGtW%2FqpDhDmcP5Y4qqyTwEYM2tsngPK1jx1KE3nCR7w0nczSqrZmzqKzZcicD1bMvu6nD5DY7yAczTP%2FuQexsVRAys4VYoOoS179ZT5Ds&X-Amz-Signature=d415b4cc0e1dd292adff4d03a9129973637d5668b05156845abeea9ae27b7a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


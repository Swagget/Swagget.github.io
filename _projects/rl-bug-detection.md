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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAMI367%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T141910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnCwsNmXo5jeH%2F%2FJgg%2FCNoaZLU395lJfQ49KfPmxqBYAiAkllSB8OEhtvkSkcw03ZetudDzPdNnK8cAerNtymMycyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaPF71iDHTwYAUx9ZKtwDj5GWfxD791xSQTgpDyx9%2ByUb1JWkZV%2B%2FPacccmUlBdg34zvsyB3%2B3HqVP73p7qD0zGpGI84iT5gNY2uD3uuq2a%2BHx8MYcAfHU6x2lTg34LJdtzndZ72o6JvaeHHqoZDybtMN2%2Bo5l812RZVfr%2BxsD9KEd8i3PTFdSc966smCZqgHDOX%2BObk1Xc5W56tDA540bujIHuI93moWnmUhGt5IavYa%2B5NB6cvpqnA102H%2BfbxwZHurfpHwuGpoeRIxPD4hnTkMo0v%2FTLdf4u%2F6OJFvY90TgTOr8nt0rfYQNcwmFVOjLDJ4I2pYBGWFs68i49UN3cP0gRP4G6DvlqhFQLyAoLwN6MYRo0iUo%2FZOumA03oVyzLoSIqNTSt%2FixF45Mu7ScBLrNRnp%2FmH6veyhGAGwmH0r02oie8%2BgIEsU4WIae6n%2F5xoQW6V1iuQxwHjbgJHJDSvYMBK1sDt2NvPEPcCOAEKMe0xCJSkudnaQfCCFfdaaw%2FZwM%2BJUALN2Cj0%2FroKUGB%2BkOCNFjf0u61egEy%2FPyfNqt0nbQqL%2BpzxpBErO7lJIykBV%2B2%2FcXGqdWOoQddA%2FvRBAWayuFqy6YVEMf2HKcS1o%2FNDaiXsRYb330sTaS3wuPxUupnu73GgGQ%2Fowz%2Fe20wY6pgFkNt96YH6b3EiRrjB6JBApQPZvBTxUNhv1v7cBEIKO3XbQs35BycktPZnYHBj5kKtsV3voNTXRDSkrVZAnsEPj3t3E%2B6z438ZMSVv%2BTcHlv9sAF411bxpeG0FtO6fA4cYRkMHxzX6EQStSp4TndjgigF%2FxNRvr7qETai0V5tap0s70NrKeJuWVVJ5fD%2Fhye3S1LavlZlDCxSs1iIahFtjFkE7WVWOJ&X-Amz-Signature=767b7d6b64f74c44bb44e48b581ea9b84923c26cdec6a7938f8ce99097b9c18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


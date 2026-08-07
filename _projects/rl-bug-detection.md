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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632J2265H%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T123451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBhenTlahLUBsEbdd%2BBw%2Fqm0W%2FtkJfTdhmr0dRZ8kiQAIhAMkPpNsb7qptoOf%2BWrAlBQ%2F7yj5EZnL0F0%2BdX3GeduG4Kv8DCFQQABoMNjM3NDIzMTgzODA1IgzNJ%2FoYzG0u0ge1ro0q3AMt444Ri4efSPfRbnW%2B7Z3leR%2FYiqAdPvZ6rcTgDdmvIAiGQU62gdkLwKaOzjQWz0VNGZsRA8zu28v2fB9467aAl68iR0DNO6nuSWAqX9brMhqD9rVuOrI7GPs5ZhpVISSZL6IvTV0elQ2eqEVo%2BJTHbhsuaPOEThdm7fbppWMMzVsUkFzYvnxyBlGzOTGAlC2P0V74oTSNd4GGe%2FpHmomYXVOXyBJLeWlLUYOU4nawGEQK%2FHj%2FYQtWmm1SO7Z1xa31bRUzZhaltspDBBlfLd1qD4z1LLJlZEqcN9Ys3PAKDSEHgbGilzm6Q886USS0gFlbwWvJ4wQbUSyDxERhhDFZGkRaQdvoMB87YP81giILucX9UI6eKF277xRsB%2FKZk%2F4yR5%2FxbPimC4MPKzxdPumc8paHPO1%2FRmlNV6ORe2sFthh3FmxW273MWtl0vv6DdOVAkAftNQZGjteaABAjxKVKqqntn1gkgMiiGNqpyOiKo2oDzL494TTEhZDCZUCl7u61aOBeXlX3Pv6lxVvctkv94PhLbTDfoAejfejakBQIcNDooQxYoBs1JVFmICt1ni60RKVOZ%2FoLE6PXCk3DP3VrpR1ve3B%2B2xg6kBVPC%2BovC%2BdFUIxjPFZVWh8ZkzDj%2FdbTBjqkAUcBffXmOKt0SlaEO0yHEKz9DuLj2qbekhC8ZWWxqbW%2BNjPxhedaZtA4MPW%2BFX2odoLPop5joZS%2BQmE8hKbKSysx1k2wyaVGE6d79pOVVrxTciNMjvU8%2BuCXSQoQkC2bvhVl7Dq96crmDmGAL9GY4%2BOP2LErKQZfGJMkAkXaWMbDxZBPcqGZqfmNA7uzWQ%2FJXrtB1jLZO%2BRqATmCgEUjCz14BdsL&X-Amz-Signature=9de6aad382c1c6920ed589205a9df94ace97a9d2b432fb4391b28daa916dcf0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


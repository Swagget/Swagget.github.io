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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536JFNSE%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T061729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLMSXDyfY8evoeNuVUc4Ce1xSU8YvmeLEvwVY9lnVDuAiEAqG%2BK4x%2Fr%2BfK0zUDJuoV04%2B42zogHUFyzbQrJEdlV3f8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYdPl%2BHU2YZ4BA5cSrcA11YFSaRCKxCHEYK3w%2FIgR0Ll7MVBHqhmXQLWu9CnfJoupfeDfU382neo%2BsVYNfALQ3xwfEPWXxk2tyiMve0m1dIF5zRAjq3n4a2LJyxCGdu5WGKki7VXu32eoUNJpeU1kkG5Av9wOwol8NEc7sbnCNGvO%2FdYF%2F800%2BdGw%2F6RxKuj%2BG%2FdKfUMIuC65qPa4WL46aWgzQu4ta53Xu2eq3SyjmIODK9%2B394TQCwaTUUOe6qI8YfgY6sXrSuilnoCp3QqkCe6IedqEUkIQhLk%2FB36dehUI22W2rslAyjPaWtvHuPjmbfaPxUWffFEQ57WTpamVb5uOR39Z%2FpBq2YmFn01W2Gwise%2BgTfIPbRY%2FfodXO1tNn4vSIpsJ7V3GB24rd5WdzqSOezu8w7Y9S9m28IrPgnig0NAP70Ts1V0IUwRo5yIso8uFuv%2F6pV1hq7Ub1yZ9Z9yVct6VXk5ITMACnzXOwKgYjDKi2unZlaxi8kcuGpwQMCnmTfn3JL0KopYWH9YeZA6ERZWEiz%2FOyph9ls%2BlMf%2BNQt8QOhgeky8G%2Fk1lGw1UdIC%2F%2BZ6JZ%2FUKPCZTja%2BdB6ippHVjLazNrpa3REbcmKBuVvXZ8Oxp6hrdKIFYPyF283OV2hsYyeZjZGMOT2pNQGOqUBwR3MC3K%2BEGCPfao6wA0mIWZHj6QxN3dsDiRWzyDcunzZ2XBmOIe94ODjWsH7Jvg255c1LNbgZhZ3PAaCFSGR3mEQdh5STOCLyHmdNg3MVCQZ%2FoJyvdBYI7JNDY%2FIfxVzLb9523lyt%2FiXKGIbHLY6jRY2shUvOyfMSqnTqjt3PwYXw9Yqd9zgaQqSjy%2ByjyZ%2FFa6bEX%2F1gX9PHeG7IeacMWKXR%2Fjd&X-Amz-Signature=959970abc02ab6fb454ae78e6726567b184271bf186920946c526ae55014e782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


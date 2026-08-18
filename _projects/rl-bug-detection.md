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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EJRXPDX%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T111402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0jdoqm3kITwZwt5xOfXOTk4z3CnBwfU2H1AkxioRmnQIhAJCI%2BElIoLmgWph%2BvXH1XTnmrad7uMErtZjvEnfl7SAvKv8DCFwQABoMNjM3NDIzMTgzODA1IgxtwUAywjqSxSU%2Bn3gq3AMe98pYkCk4a1zZ1PU2GXnqMh%2F%2BtYVMMCIAl0faIS1qLhhQiUF4ELFMYQb6XbAiKXVPQXyyj4ms0X3exj1IA1NIZ%2FLFeM75KyLQiV41RpmRF02JXzG385rajptuxM%2BIlzFSxNXl%2BnThDMKY4nFOPS1hi%2BVr4plWSRw2VpQ0DWGpoQqYqZ4YE845H2Zg%2FfF3r5lFO%2F53hownZNbfqX%2BXyCzH%2B2sIoZLzHtnZzaBnunOr0ghNBXWGAi4P8X2SQUGUfVvCbKWTZBqrOHIv4PfQ0rZWSaVLk4WLW8ZXtTSK4SO5MLjhATSFDD6KP3uwHOkSkT8ZszEVlHFA8w2PgSKWTXi6a9sl67%2FiuJTxzvaSz7k9faTS86uUO%2BaKURoRLfM3MbySsFOO5r86mUve4oHUL%2FKBLV2Rl2DTylo5xjqoZZKVb%2Bh6VT1MjgTWd6P8N5BbNW9Q7wB5WG1G1p81B6%2BvtQE0Lb1GT4YyG2GNoSLQ4R1RAjtSt2assOJXnspFbU0QVekPxGn6mfsmDX4MAYBPBH9m%2FRrutQwcnXrkXg0XHGKN3Gd0az8%2B5pjmsEpAVOQPwW5RCeQhHjJ%2FRpRY5Xuagjjfolu8HiHkou45Ytuz551WulLzsdENExN5T7aX9jCz%2BZDUBjqkAbVZw0oWc%2F61x30QD2DPZuu3wNrxiBay%2BOVTemh66ECAP3V9O4E53vRpRqpvWjHJDKP5bUfkoPVV6bQ3aFTgMQJDBtxDbA9xxL5K2h0bXyx4paYT2eHJZc%2FMrf9kW73dDnntzMzDK1JbN70SLBBvrzwpmniTKy17o11YOdr0GeFfh0eRfI10523%2F%2FOeyF6Mn%2FZvHs5NeODXVu3bR03sTwtDUWkbX&X-Amz-Signature=f743343b8133c00488f62a9196f1dca76d4c5c11a8c6e3cc15ffa946e233fa0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


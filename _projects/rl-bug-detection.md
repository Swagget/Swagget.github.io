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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTNABLAI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T213854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMGNog1ef6EVqJD1MahG8v%2Bc893L%2FlAIB1ULnlOUg0qAiAmrMqRMCiZsiuW19UTkX4t%2BqbWcOsktwgJzASzYEWtIiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvQHELzNhXgMc0vAkKtwDTlq5Xj7BSYSrjyU7d7D2YkqIs9PEJx5ccNBxwLTxcBJk26t6C3ul202NbcsKZp721eFdPvqq6yJAjwslj9BothStr1T3y4%2BNjz6eaXdqg6RfGjX8Eq5lMs61Tpp%2B3r7ZtJ9bOFQd8SZHyAzIXFe0mLfiYdrMR0a8zdeuYytSWEvuuaCrgDaSq%2Fhowk%2BYTmcfchp72R0LCJjEk3R87jLG5fA9mX4fiwM5dNY4CCEQyfPGndKyFmi4xvZQV142UbcJ5wnsqz53KTDX6IqY0XIKKHFJ%2BG3c7JfMm3XAIpfXX8tcLqZPCRBgu3w6QBa8Ul3Ln14P1f9DK4jG7bHCA2seFJNwBBQ4fwTXzUvy%2B1W6p%2F6Fcf18EW6WQsQ6BDLGJsf1z0sYC1NFw8DA%2FB6PXxH21CBEM2GbU3pD%2FEowpL%2FhPPlb0%2F1NnwdbG6fqfKiqmBblX%2BDXFt2xORkCjqqx3fzX3wSLE2POtEWf2ao7k7%2FUyl2lGY3PNoBVw4Ad0Uqxg5TudDZJkY9NZ%2BXh2LzTtdWsFWoxo%2Fz98uKYtOcSSDHL%2BJKAPK%2BN%2B%2BVVHg6pMHG%2FcNii5ojS2iGCXeBUwyHG1GLmKo6sh%2F9pfF2n5PYenWxSMMGN0qtCQK7Vid%2BpYTMwhf%2F00gY6pgEO34I%2F2Yqi2fHlq1NJ7oXAtkifz7RPB4LD7tmXXY1TJJJMJZ6MBAxUDVt1bE1dE3c%2Bso5M4dcQMb1JAYtgfVOsTiTq6R3sVXiKjTTEdAAC1yZR1hmR4NOFEyy3PPpGlSJ9WucAq4f4Rr8edPWOk8z9i9UzfOW7p8jcIfoVN91C0OcpymimJDHv%2FZ0Srlnx0P4CB4h58uBB7njizlAFE6O4o2kWzZOV&X-Amz-Signature=e7469c8d045956f5ff01c3781cc5ffd3e43cd1b79a6ee108e9e10858b96cf32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


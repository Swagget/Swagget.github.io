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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBK3QDA3%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T185933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmZ2%2Bo9GwX%2FuH8QKefPLMt%2B6tWjS9lRTOv7br9km2DWgIhAO2QfiuX1eGr54g0%2Fn1Aw07yK6v7Syjwhdj6sFxum%2Fi0Kv8DCFQQABoMNjM3NDIzMTgzODA1Igyhci9Alf4vfbxahDMq3AN0%2BYl1YY9fHLaxuFMkjI8CgaQjOxHI8%2BTwCpUmcSsY43iVs8Ez%2FVppEADX78dGQK0ikx%2B7XFDWpqpEFcJVghZ%2BFosLCgC8eUPslR6vg46aRGG3oRtnIA4kBSSeIw%2FJrE28BfEU8JuCfjRE1fbgkqS0ppUgTHob2WltZZHnfPNYZSVhW4gUFaLViOSHWj5dcirogM3kI4jTmCuE%2B7S0ItIKOpulVMlEaNvyEnuEm2yzkoC9YZRWe3t3i7iM9JJTkTlixjbXUhA39UbMTJ99sR%2BJTo6UkbJTotOVVaF1PMjadkt0rvkdMAQmbwgST3g%2Fr1verghVpfb9IRGQpFhNXMXDncLh5Xn%2F0VwsggHG43z3GohxiGwwzaXWf%2F759MWDE02qZyZULmHLczC3EUcCj99Ilw2jVXOgP46AdbPk77AzpIQst5VBugTp6EQrEaoYfK30hOljJgQmuNqiC6ic9WHHXDlLdRhIQKQGq9QMq57uVPsGj2dD1bsS7uc2gdpGQUntrIhV2qX4zu1KvZAkm%2BrSOS%2BdPeh5S%2BXdrb%2BzAs%2Fq0VWOHFFRTIG4xWdZc5hDPGkMNuhM5EU6zoLcd4jYfSXhKy61Yyv7Ier2YBZQNtJT2BB4K5b1%2F3%2FiEb03WTCQ6%2FXRBjqkAZtDBDV2ryhPDrS52uUQzqWtjz6Sz7Xg0qJHfja4LP3ROMqrbS9Ms5tkzO%2BwhV1WlEZdGNslFiT0753tGqs3UzV1MneLs11BphGBxb2h9MuKXbZu2v678EClCqmHlKCudk5N4xy2nfHccl%2FZlO2dv6FCHY59KI4zafKE8HO9l90opKUDQsOP2s2C%2FrWbp9ApD8jhiMj1LmMiIACpwW7PQO4caT6s&X-Amz-Signature=eccbe06eb63d901e819fc85ef2caecd78ebeae6ef577bb9b594a1933c0ac2175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


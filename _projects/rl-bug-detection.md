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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQI2H4L%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T225903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8hwyMpKOirm0010N2k0qQeBe6Y9VKCLoPKpKvs9GvUAiAFN53oDBb%2FrTDYeEhV4%2BVp6wmZGTP3LR3d3p4ohwxKKir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMlIkJjIfgLwirYFqWKtwD%2BppXVqv7fc5rWBJZSaCbcceGG6G9ErgCjgar20VlPXoNGo3LCRiAka32XbJw8Z0Ycobn74V%2BI77soIHtVUISKL5nCN8Wkkm0u9u62gTEIU5fsmiBUNZJdyTZ2rXuj40s6E2%2FXEwbvg1iILCd3tHBGYVu8ipc4HpWJ70hAKKyazl0ehH71xIHFa%2BgEzuSDzZ4POzXvXyaix%2Bh3uNm%2B%2BGRCDUil59XZmP1T2mKwKRUGmyLjmxo17aEnKWv4HFoT1jYBUtWn86fvSFZ%2F%2FJU6B5W5QswWAL5oj3SSHlk2hXUerV9XMZ7c9BXxcdIojK6G%2BThZELImHj9iAJT%2FeEIRCMZ0lY4e%2F%2BRWoR%2F95E7Zmeq044DcjNDB4QbStpEglbAtmSCAkQrT8KdNIy55skey4biR7yRXySBpS0v0DPbwjA98ZmeN5Yq89pbq7BT1PqgKin1AG30OiPHAx69gE7%2FmIrIt3KqrkHMULSfY1PiGOZfEKL9FKwj0GT6dNbiwZnMyt6uEYWy4W9AQiat%2FroO4JbgaznRzEEMX08PLjXOK41PYzhSy%2FRAy0VjpSQ%2B6kyz0EZsLg%2Fa7f1CliG7JudOqd%2BKXMg1h6NiIFV%2FKohJ7zX%2FFvw41Bth1DD%2BpwbphlQwmP2H0QY6pgH47ibsMUit9NMqS%2BKcxKWikIeVzgzMfNJWygPZ8koEghwXehrcb3lSU5KI6RGZZamo6lTSgkrvNjO5B21v7RGGUUMRtCAdzvTL0%2FEN3v9CeS7TSvDOzh4LWJyDWOdrAeBXbPbbXea7%2FHEdWMv90No5sz8pLR0jMLO6Cmp3FrNT8tmLKKmPAZ41Q93kXfU%2F84ZN81vNEGQXcme2riugCUHGFDrPuyMp&X-Amz-Signature=de9ebf0741c56385698a9e497c4600a0db5f4cf209891de97e5dc0c3792d8f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R65C6UK%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T181921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXfG8a1j3xn4WinfmlIBKVJVh0sZKBbXiX4OKxs2t8zAiEAir%2B9XKwQAP9xepLr2X7Bax2z29v4tmdevRbO0GcPJxcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXnyaSPNRauw2njjCrcA7l1d7ortcKSB0MRlnfqQjSCx8X2%2FXvGy1v6WT3M5GIETpHjuAa7Ezd775SZqRTSO1UIET5rYY%2FfU4kvarl3s0JExS5x0OBNuOwqYchINjnl5XMDjfyNZDDTk8339DdPfhAIGAQ1HCTgIdvJkUkF11x7Wm33vJWxnb%2BHcsTqIChVQp5G5E2pwbJF6Ms4OvWzyiYcGQGPIofvQ3WVXVSdD4R7U9po6xwJlaHuhK%2B8zyTMcPqCXwYqUwKgspS1s7XTsXt71RUJfR0Nt5Redxr8N8Iy5yXadl6agcZ5PjvcI6hHKqSrho9wRo3nUTle%2FmaHZ6H42Af5fjBwuXLq%2BXfgJ6UHmtZwP3tJYSY7s8hBM%2Bu4TTfoOXBz1Z%2BvQtKemhRKiqiXaWNZFodPHNGG6A7ixZ3oEA8VArOdG2WvUFkzzHCAA%2BKQF4IkNqnlUlRQgkOo7ATihB1K%2B56tDjMMGwwZ9%2BPmaDN%2FwKm%2Bq2VUl3PI5eaMsAVgzLBQCr4RB8eMExQaXlkrlD9iiZIeetfV4oqEYxCH%2Fq7yvPjNyrktNV4jPGn9bQkIj4g7eZ5n8pktgb7WJp0cpoiuTw71MevIBXyz%2B7a4zjeiQ7KtJVofD5%2BdtHaNP1Kpnrb4CF1iVmh3MM7jnNQGOqUBYebxAjLi7ONnXzLOD7G0b6Sqy9%2BgS6RVb9SkzacJGJ7qDTBEMcURnVculBxzHHP09ZfEnC73buKxi1ssftaguiNADX%2F0%2BDZ4dpoibRBX1m9e4X3W4%2FNULQ0Pu7IrCLF%2BtBC8FNPdDDTIAUGAKzrjUBM5yVhcBUFcZSCv3lKNNV%2FzzAl133%2F72cxUFBl5Rvzsc8NYH0T5sN7k5kw2UarSN9%2B908d%2B&X-Amz-Signature=3c6d55a096778a553b8cea7198b77b32d2ff3eca7c39eafcf2cc20cce7da4e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


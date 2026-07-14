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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBY2KB7%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T043724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD6juXTFktW%2Feri1Ye19OWSfLfkBDcruyKyNUPSx%2FTBmQIgHJHWpQ8DO1wsZi8QUGkN%2FqtKgZ2K3b6AowjpQjtN1AQq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDJmS56fXhMsQHCLGKircA%2B5yHa0v0aL7wUUBiQE4SoU0vBQZjrZSqHlKy2ODZ74j4ze58Sq2MiEETdpTImw1fpjTItAI9EUKO9vQpnphtcEZAl0AfTonMprAwsV6nBf3Ys8I6gPN09r3rEJmnjrzavFLMgsZSBBa88zZK6ApcpCaakWgwUcRcck1YFwXaTYlQO8EdTpBl%2FRh6UbZCrn%2Ba8MLAfqnZQL%2FyCH%2BGfIquUgaW%2Fyd6Dw47kcul17%2FfYo26E39H04V1rIz0rJlyrAm%2F4G6inE%2FyBgDDFo%2BeZ8Zcayj0EgtIrNzz1uMqwdh7niGoE3LJLArBEb2QHaQkthio5OB8CjZ8aM95X4cbzHrYp28rdFgj1Z23EYSkbM4aVYuNsCnGgfTJa44kxX3M0gNaEVY3xTKL68KnkAJyK1CPQPOc2vILWwUT0gEN1usYuxv8ZEsyoUqG8AjzXS1mlv7bik0TwzGdWi95RVXVisvPlqOctQnnCuRYIWjRnDlpA8puiusERa82QZULPbLmVh1a5%2FYLEOeU%2Fjy4z2P4wf39KHid2SJvBv8J2juBJT85v1O3%2BaK9mAFzIufe2bN7aCDzMJKIA%2F%2BiwBiTq3wVFPEt4kLGU%2Bo8OgL%2FY2ftg%2BYGLL%2FcEw%2Fjy%2BXQaM0yiqzMIPd1tIGOqUB8Fxhdi2FWTcXgMXbDdMxwfJf9wRpLv0gbu%2BkyfvmJwWmKxlc61TeOJY%2FeUqw%2B8GVrgeQXRL%2BWCihUvr1iMw1Qckdvpemb8ealg6RfsWDyZBlVMFSE7hSg7g6XLIcLKq6kco3POFKVjICLpBtATVK31HZ9DR1kjcPbQALXAeSNoww73tQUXOJ04xXawFtoQex7Bdm%2BQA5AdwuY9gkGgEXB%2B9Pcb6P&X-Amz-Signature=e8c5bee947f781f86e19d1128cee78608ae0e306866b2cd10e9292423db5befd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


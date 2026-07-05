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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6K24DKW%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T055157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCID5cDLLhF6GxOKLKPHS15wakXMmadHol7w5FgjRwOG%2FPAiEA9gTOXiHY31EwIlZJDw%2BokdVskYvSWhbIJJdjvrMDt9wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO2Mv3h%2F8HoF9AfRFyrcAx93BRR%2Bv7tY%2Fz0l1bCE6ixV6Ik%2BN03qePUss1GDXW5Rd8tRAJcXvgl96updaakcVlHmVuRRBN%2FHwr5C1OyaAhqClodgen%2FKL5HBNWyDnISCDhJCh8rkV8pmrCcoxlYu1SJClocwIyboPL2OOTX05KXee944Q5l75f9mpUxNHmVKqjlWbhpH%2BLfZ7Lc90SXc6UdygTWCQ6d6BNNLjqELYS7RrR0%2BQSsq52om71oFnltwh1TETgc1tgUEsa8rUiYX3KCtYupZspeX7ec3j0BaB9uFXvJ91Gcu6zJaAFIZe2dUm93NO80frZyIqESV277uotBIuhSGv0zKd4wFoQX1ZBSRVrUWUWkrQy0JDpGTZqi8B1BF%2Fi%2FVlQwewHKJJ7uAfFs2cKUK%2BQAgS%2FypDP0nSdLNAFV8AqFg9sVjAzCB%2B4LwYWCpeEhyskVX6Kf%2BQQgO6mR8baVQlTfQIp5%2BZ0zG2y0k6fqkTXceTpS1tSKhVCtnzmR4Rw4xyuBWv9IZ4s2MIMnj82YfUsxsm3OzWiP1x3HWuj1ikEHftBnJ1TG0KYu3fF%2B7WCer9Bp70tU%2BFsoyQ9oyAzjnL0NQ9ChGYqesEiHBZzeapKaXOjls80qAnA4w2%2BXjeseTPafX2lFoMJrYptIGOqUBQUTK4Jfj6pmHFmUjMd1EbhTRFetoF8ShLVjEzs1tdgzgJwPjmKnrGdR%2FIgmh1kJpdjk2FFmGH7knzZiqL72yn5J2KW4jyxSmODNQTKMWe6BWpZ4zllq6ZW3d1Z92Vg1HGRU92fpe1jb75V53ThH87Df0FZTcjOl8phEhgAYIF1TdfW9QrM%2B%2B4t44xHHJ82Kek5FnEUxM2AXXjLOoUEXAzA09HVI8&X-Amz-Signature=d1b05990e644171614c1c5b4ec4959cd304dc4a1187d1ef3ff6f3c00e5631f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


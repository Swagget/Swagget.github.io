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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FPSPZTM%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T141011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIA%2B2DWlX%2BnJbDVSQ9dnGwLrxIGh5x7RWetbELnWSjHFvAiEAjpShmnpfRAGEFuFTxASTG2ecAzVwXz6g%2Bht4WWzKwpgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLlLHD8fBh%2BFWlpVSrcA8sBo9wW%2F6s%2Fgr8PFPGeXN%2Fi7gG5yuwZG66YNrUNRX8eftCXoiu31XoqQHmpR5LGD16htJcvR2FrYIWSoo5RVE2aX%2F%2B92CWkjlk%2B8gZX7mBgyZXbRoN3bsSs6%2Fbj84rMQ0sGeFjliZuxB%2BoU7MMbdm0Gf5nczSLMu3x5vwhMU3FoRh%2BntzoR3l5AdGup2S9kKNbhJgSvtXDDCGAgawCVhl2obg%2BzGVhb2s12dTa2rrPqxXde2IwAkWAxkCl42C3gcZ%2FjADrkf3GxYSbQ1VihaxonkG%2Fw9JgrjVjNkw0ZB1WrUznQuhXokB26nOzgLf9dX%2BfF2l94c4vrIahoyrsXpL%2FilW2fxZ46xv9iVg0fBJv7HSJ9RUzUM3hyu8zMn37vgsIUepHrAKQkXN55NlV5h4j5mNBVrtupKqULKZXC90NrnACTOzreLB%2F%2BnDSB6kgnSVJ9Q%2B8zfqzMMA4dSn3FScrje%2FFvJG9DRejEWh4NSUjtcU26riJlqYUOOyKjhLUIUWouRrK6MH8ZOALW7o5T6Pmb2XQx%2BlBWz6MqPgIVYDBdNkPggmDyepim%2F7xAli02qPJgC3OHktvF8u2L9vBPmEysvtIBM%2F6o4NQLDy7sjBYXd1pofkQ4NAWEjng0MLzt8dMGOqUBsIasHBsmE5s4F0DuJBrb4q%2FjOEKzBzYWurdE5d3BS0azJXXjeAFUjMZghKiHWoSWebs%2FuIDjq8xyDVXqO91ZOrxnNqrKzdl2%2FizxtyAGXs8o%2Fz4NoE1IDkC1l1w287kMHDhgURQ72%2BT6%2FMc8P5JVshtJJoEk1oYeAl6rekvXe9Pvpi%2FkDu%2FxpNV%2Bb8cXaRzM72xrYn8PZcl%2BL0%2FdExck9H6Nehsb&X-Amz-Signature=23d24538e7c5dbce39e22653435576732869a8710783f09e98c1bd12b3aaf65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


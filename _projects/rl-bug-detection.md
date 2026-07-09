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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7WHUD5%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsjgyWW6Weu1%2FIU3hmtNzi7ZxdZgbXe5ZHQeGNw1txYAiB53zc5Cuspi1dkdl0fHDDwdIBAeEPTwA5dH7squsXYzCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx65gKtYwzq1mjJCiKtwDMj5PurU%2BlgjBs1VRLo8CCgkEBHcCg3Iv99oD54VbY0EDF9pEzUcIeduxAXO%2Bz3TNf%2Blh7GHqNH9N3mXs7AcpwYrMNI4jRvi3ZLrvKQDy%2FThzUMkgiCs8xMUCaE7sPpvkgV6qbNL6Nww7vpvgOi3tVTcyb1T9fDuxgfcXzLm1sWowROUI%2FhxWcYLAc3JsqzV4WZNjDItShWETEfq%2BUhJ7BthhBUusoMmNZtv5wQFubmgBgmzF7crixPKh3ftAGjAfnAETiCJ4h0WObRH7ZW%2FaKD4SH3SMmpHmZcoFjZ%2BrsYwi13zazvZLHzwjzjml3fUnZEzkG%2FwZ1FlTj6BBykYixsKuPcV1FM%2BWyhsNLQDecxZjhclmPD6wkOBs1Z%2BpnjN2ai8Yhq8nvpXuRU9HW3WC9e7UlTDY0%2BYabeB2ekcEH8kjYv4sX68IxXFE8cQANL7Co0YEK%2FTvos55yuOq5X5KlUHb1V0KL3JJO29h65T%2B4C7Xzrs%2Bqc5aEN6%2BdowxyCdIr%2FpMTzFV3oX1a15KFWC5c6C4dl747OkDrO4KG75t%2BEysJWp9zZgx50YbcGCHyIGLyblfhhmEtV9qQT%2Bor0LEfd8sbI88jh0ZxSSggH%2Bnaki2Va6P2kkhu%2B04FdgwrYO80gY6pgFkYni1Q%2F5ZdYOZ4nXZPL%2BG6Ki4ZhLA5mRsB1NibYQxvWnIIahbtmCjalsYX%2Favl66ptTP5JdbvjYPRWsz%2BLgSKKx8DD2UhlZC94Rcot2Gy93Vy9YMHuvDgKa6DZn2hfURaARI1sO7OUzyF2lBel0ybhTfgMmHUH5mUNfZZ%2BEn%2FtK5ATY7GcWH3WgTQHjVN7AgnS9ewSvCkpoFBYslAC2KTlfyS2TmI&X-Amz-Signature=1d56479d7b0230522fe7a54a7d28d0e8eb68324a4d999bd85ac67c7c4777bc65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


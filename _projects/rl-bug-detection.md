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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGBCM3IY%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T070312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICCgrvSnczcSy%2FaVCmSTmkSFrOWTdWEqIpiqPguOQaB%2FAiEA2zy3QnLi9SXmTxRG7nvr1DZHZAhe2WpCjOkmbvBW2ZYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCikbyewYXW8MQ%2FH9CrcA7LKuUsTaivj0T%2BsLUexVMWIT6wnWf%2BPMQp1F3hmEYUchJwM031KSX%2F%2BtkUSD%2Balk53taE5Y5bh6MS1H3H6jeLpcWeWmbfrDMBgEI%2BlsNygZIbflC%2BGbjT%2Fg20MyCKLt2nCCYpMJnuNQLEx97DaXkWAz0%2FC9rzeCkBuHXY52GpsquTxtuh4sQRIpgSN41P2TxTCK577nyauZ69UnWzqRvjewsUb2bXBsEPgmaKJThiY8a%2BsiiKKqs4G34OXzYiEb61nQmJpNUhY3VOJGfhby0b8glfPhBoHTeAHHoTwj32ejukll1OVIvIAtZ7cWlNEDGW4CoTjeK6nj9HT6gk6djdUiMvVOlQ2L8fTWQerQah6yddxsaDqhaIas4kmIlPy70HzSkEcY44C4xxpKL7LC%2B1pn%2FLApllaSW6IP4ja7oWrU%2BV7561Y%2Fus1cC2UjSSgyTWLTculywoB%2BwniMdIhbFYx85WedyEvzGDyCwOgU0nOW99o%2FCaZn%2BoGVj8GDSvI%2B5x2apy%2BFtf5qjwLQ0hDjtBH9ZTg3woDfblnjr3KrQ5Be8kvHlVTRJ%2BtugcodeZvTq4BwwEXvKFY8WvqX03tYbyxNnoQwWwdHvN6ws4e4nOGc%2FxlN%2BdXv66KhV%2FIzMKDa%2BtMGOqUBmBhh3O46JmlEwbmP1Qox7tPTnU7Im7hfOplFp%2BVETuJA4UuYAPI02rHyjQvrhn6ZAqGgS%2B2%2BtXlDEwLTILYHkxBz9CsBk0n4mkWJx8bP4IneZbWEKG14UEjSAtDE9Dj2vdWTcrs1CXwEON8aB7unngrEf3XRzE6qJonI2bNj2bP74zfIzyIw9bwWxmprHS7afQ7dEPSPp4Gw8ctNm5p%2F0ZyigzBU&X-Amz-Signature=a0e29296d95c0e15bcd2e813e047b997056db6bc868ca20d1a4aaa4db24e2760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJFDQWC%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T014603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCnG2toy6ao3DJjrzQDsGz25KJRGspN42adE%2Bv6uxea7wIgebmtWxz3wON1VNyDXSV1tAJxGVIM%2B7QQA0lUnxNuwj0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNMJ7Uv79wIly7W7oyrcA8nZKdX034yctm39rl%2BTFxoqtPrXX9snMO4d%2BxmzrCpvHY7D79WYz7UiyOlxrplX2H7lyugvYMHsl%2Bx9a2BGw4JsL9IbisrzvziifmaP41h9f0lu5akHMNdhyxTGuV%2BxwbcdVkRZ8%2FXH67DAGNt1JnMVrtDyPUYAYSuZi8mk1AcxJJE%2BV%2Bh0y01Ex3b4b9iVnfBRyE%2B46OJFCoB5tSSggnQjDFC1q1HBbTf6eB7VEdjH31uXAuztUcL2fMKHaT%2F3CSjXW5zGuasQbu2DT01QxBuCl5ZERHmy%2Fvla8uQ9Hm8X%2Bj1KoEdl9qaCZNZuYKeNYpgD%2BtD8AgbcT0NemKJwew9N7ocr4FEs65orCZ99AxVOXJMeYS8lEW6ngHpWdBdI1LmQy3dwIn8O5qi6FTQL1CvAQREc2Tg%2FIj%2FADmtOrQ1fMjjOP%2FJ4J%2Bb8UhjOQcDx%2B9DFvAlUNhIowDGkgfq43OK75E3EpPMZIA93xlEAdVuBO89Y1P8Q89V9wRPbiFNwexmnLPOS3XwXFsv8HGQPBSfaEAC7cnSjynm3EJvRSO06%2BI4JDQb084WUE61KMC1oSVWWAzfB1zvxSrp3wry8KG%2BDNPM%2BemjDNkF29PwoaS2Fwb73VeKCM5N964ctMJvZptIGOqUBDLhq0kOZPm0QZITCkJjpr32U%2BULIIR0%2B%2BvZchyCAePJudUEGCeu6DMiQgoE8Lqn9qQR6apHyTw3spbcgRWj6qqEJFN8J7DYxNxj8vI4gC5oCX9Bxnvb1U4CiYxjdFcpZBQM56q1%2Bdbt5ULf5qxbe%2Faw9QbwFPEx%2F%2BjWMCTCgm3iItJFgLkjn2CTshSNR1tadP4aU%2FHpe%2BnZCrd6yAMaFR2JlFcgS&X-Amz-Signature=ecb8cd41dcd67ba3e9cf919afb106422a05331e704a2d7dc3c15efea96d10e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


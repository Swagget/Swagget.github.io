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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQ5WVZW%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T152616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBa9wuxX67yYKnJfiDNleaPbAApsRwRxAzx29aFiZpYdAiEA1XkQUbcouChyB6zh%2FBWKUxLvsynNjqwGmbs4K%2FORV%2BwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHmVf%2BOs27kpCFpaSrcA7PLx9BVYSs37iLbljjHZ6FPZGUId4YiIa8SOUEl08l0xzOgnONHEOpDUKXCAmHs1AT60L55t7qXG0s%2B%2B3a1Ieeg4dXZ%2FLt60M18zAJbzAl4%2BsZwPXvwYGrJkUuFeIacomOxidUaDNUs73vesKwMDWsvleexSn3OecC5CCt5%2FRozux2bqRF6%2B2Vvg1XmcFPaoe26VLocOpinaqiI0JrsCf30Kj4WFdi3wk0u1DbUH25%2F%2B2phTbD8pneb1KaEe6FEAuhm%2BvO0jKuzBWyG528afLYDmreeBSZu9rjR2HzI2rvYfy7dobgGH0yJYyLqTfBIim4ziRALqCaPF%2FGfivVfeyzsstwGkH8TwJu13Jcc1XGbSvZ3TZTf9RkOmcCRaYOh3wokN6xLMbgxlFnPkJMUjt0Wa4I43bfoOmtEjho0JdcbYuxoonuoNqixBK0LZvnHjkemeTeu07A7Vv%2FdW5%2BWcTIBdnUqGtB9FOMIyGo1D%2BHE64OWktbKp8ghasa9Fjw2OCfLMSTT0KbZIJwYtoW2JrLEJUtGBUydno0xt9Hi7RfwXdBd6EKqSz1NjFKF%2BSJCvbqAyeMC0L0%2BDBBjb%2FKY22adIucB0os%2BSMWDH5SmyViWcp0lPt2pyG56RtTqMNajsdQGOqUBEcBBAh9fkM0ryPtRjobZvO5j3huBClEOOVSM4O48dt7BbmDAXoaTmfNkuOP2aU%2BZbkeJnaxGs0zshc6qdD7NR1YKgx6MY4Rm4ZMzvj199%2BiiM%2FEDHXq2aUxKHoyLHtLWq%2FOhi%2F9ZYQHwjSsAb05rrEwzCYwmz%2BnmQ6pT%2F8Ju0J5Dvy4YN7ZZjeCEh1JwdBvbTnu18%2B0TgCunumaQrCBE7SoU1f7M&X-Amz-Signature=1f4087a5912384a3bd3e2e73ccb592d79f3a61e7b78db5d646252fb6a538eab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


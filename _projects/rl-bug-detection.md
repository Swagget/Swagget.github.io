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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R6HP5DZ%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF93mqUa6QkE4ERhN6vx%2BwnbJUGv6cVKW7KxcpOPywY0AiEA%2Bt6WYrEJKJyMKQSdYjbmjlgPtKf1AL2mrho4Rfo7g8cqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2UKKhzAc2tAYWkmCrcA3JLsRkQBOoywEDfsm0iTJfsbqvIWZIzj2sm3obAiCUfOdEVxF16PxoBTxUbvFFg36cl0QVdxrStzAD9lmsWKyXyrkD1Dp2Xf58d1G%2BWMFVRxGAbcxqMV57IMamHPcVZkKdivAvmrZhUja4zgDID1ZEzHHjR04K%2F9GpcL6bN7VRxiM9WVStzotx1BzBJkrLbN8Ht8CRPoO9%2FIQYb0fTUhr8Fa24p1gkPFpsZR3XAAsQE8VI1n9qEFu4osHEXTYsJqXIpCBpGmc2jep28v5E6ED%2B2ERXFvtsCngGTYl6xEBm3gIsu%2BTW8kwOjRWEQr%2FmlsY7gts8kIN66T9ZxrrR3VjbvSewP88M7qCKaD16ZoaJ%2F%2FbcaFmO9Zm3AF2pqP%2FjCDqLaKeNIBMHJGS%2FRj8k8boG02FRzCTUbNeFziTgHL50qNb3s8J6YxEjsu4q%2FzTQTtsfrnogzY5drgx9qPcTo1X%2Fjfv95f%2FypSjI2blE5LR6ePVxhJ73Czgln1QeBSktm00OcGdrvFb3M3QvtG5cPt1q%2BCR3hAYk05HP76Anso2PbCauF%2BymKn6zmBNmFj4I1Wl7zLsc6Hg2RqdZ85JCe8oHjnJdwpKETheK%2FJjYgUEUEVt%2FA0q2iOm6ml%2F7%2BMJjt5tMGOqUB6%2B%2BH5hGHuMO2l83EryeCAy%2FG3EOh8rX7ZG%2FMvG7GYH0jNF%2Bd0HlMoUDrxGr%2FxRQ43%2FV28e72AAIeYJhULZ9yTnxjgss0KNAcEbGHL7ycO17RHdjqehANy6Tz45jCaeJlJzPDEliLRKkgSgbul8Jbcu%2BFrjIC9YDi4%2Ftx4rr2gXRqyIuD4hUOUS%2FyW8wmafl7DsGypTLPEWxcIK1GukOJ5XbZ5%2BG4&X-Amz-Signature=cd8d240cff3c37ca8718008dcbc7998d23672980ceafcdaa666e637ced2d7790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


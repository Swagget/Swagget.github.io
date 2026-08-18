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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y53KSZAU%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T042242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbvHZUmjen0X4IvMK64OZgS4DF2Z2hAi9%2BodXekpZAjAiEAjSZLVxIvnysT2Re6hWPObso22lmU%2FzoRR6exrVYX7gsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFekBSpODyERdsIA4ircA5q2X6CRH5qBmUpahPNsUCNCAz3QakrGeTnUwjVyYtBYEEYCrOUQw7xnIZ9vjdpF9fiwCE%2BdVc2h95svl4WZ3HCjdtzntypraDxRiPP07O5z9NbbTyowoDW91UYSf72%2FyeXpLTramaBM0JJtxGn2udx0i35ZXPnxV4YeBoLCO7EWZULvnf26%2BcV6VDiPf%2B9LKB0dyFqNybBFo4lHQVHCRNwSRi0jPfuSP2g1tglV%2BQSm%2Btqlb51J9H6iWEgn4QrOH9soLK6Yp55bGc5civLAI8GdwzQ0QNg7mq3I5k2l6vTNxcOjFX56P9fZHdCTcfJFq%2BMHlFerbdPh90FUKC%2BLodUbY17jck6aw2dcEG7GyOTeyPcsZhATsEbpNjO6J5d0l6pR9xD%2FKSY%2Ftxre84YxRLBLq1Scw6gHOl2bYbiWGjrJzd2NWTdoXnyZjZOYFfDSBauvoAxTK92E2CuyiNQ%2Fv1xMqoj%2BZku76nOEcTxRKQYm0b23MBtnxxwmLYl3NQ8pbFYxhdtHQZ64hXEceKGo%2BpZzmOHkT8xsJ7rFwdhM24ILyrRkdjaq3QxUtktaC3lb9C2uifJHxTXJQAL%2BR6b70M4AwgxLgmeUl9ZvNzoHO3va3Jsao7eYp64JYtLNMO2yj9QGOqUB4QOfZbreKrgarArcY%2F%2BtLdjwxmy7TSEGUGmn3hXdV7ZUy9ejNp6DyorN%2FPDvAorrnXIIyeZ%2FaCIJKgAIyCVNDxN2ZHoCesvhzjPsiQiTFR4Xv37pXAcZ7dRltcyB%2FZGYUbFePM0swiQWFOnw%2BX%2BrUY%2FuujIbTL6mZTEFU03YCoI3sJqXgqBEobOv4%2BLdx7j6cwlY3wWQNljhnWHftgc2SKTymwga&X-Amz-Signature=7a97bb7481e0d4ae9dd7d7e47c985a9138e1089e57093c3bddcea41c1fc88f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


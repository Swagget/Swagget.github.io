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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662GHOKDJ%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T111759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIQDpJ75HDSIv5CyeTDmicRtW3PADuOIC%2FAj5pQHJDotMBQIfZEz9TbRJvhJFrDINTJVK%2BmmW8%2BUSszzuChX1PKltCSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMgeI1t7sLF4czHmjyKtwDATvV3erNTP%2BN5hIkQDRW%2BmP%2BQtyEcasYQkZ6Q6WnGnokTdG0fM%2B4bo7kRvVPy19pW8Ha9YthLUeb6SJc4yI9xBlJORIuOZ7OnVyh7wqmef4kG3fs%2BweWrl%2F3HWDzn%2FYILWV5S%2FfoQFbi5qtUXsaTnKF5Hr4ih3ew3%2FdQn4c5g%2BD7QS8vwr5yIwOvcQPn34Z68OKtEBmvNSXasYRH5OrzWtlIRrJaXXCXMNiUAWHqAOiekPbw9aiFljgri5iq0%2BOOC%2B2xT5vEdc7CUYKyY6N0vRv9ar1lyJI5GZFHY8GIw3G8i6TrlUISqCHNkZa%2BPKyj1HUlrF%2FEY7CqR8PYu49d1pa6Y97jsm5n3tpzaq5c225qZoCNIA%2BUJpNiEOMUsoRAq%2BRkXgRyALAyIIiHJJKQDK3EqqT48oWeXNI9ho5v3%2FXvLI0NwjiJef9%2BtWuxunIkI3JUPlG8mxwaG%2FwHUmqQEzFZF42hFrm%2BNjy%2BTuLN6smdLDCnbSgd0xaGOByDE8Cb6mDlqdVzjZBITrGkoamvNNhEMREHABnHxHuA1KH2SBSo4HIASupwv8OtaXet6EPLEWZDKU5XLpC7%2BwYWA2gO3fv2c0KX2mar1l1a4DqZyLK2AGOIeGygAnjaU1cw1fy61AY6pgEVRNnCY8%2BqErq0hoY5LzL5H1TsmqlDV%2Fw%2Bj%2F71P45r8sQ2TKS6lS%2FTHEfayR9G5TbxijeiHx%2FpmrbUPwkSWjtuR435WXsbZP2hZB%2Fz17B6vHWJXoPHoD1GZ5CMCx6Iru5rC8%2F%2Bj0JW9do46fAyQRmoffhQkComr8%2BLxfUm9lijgG6CFVLYKZKk3i%2BmFd3kJC8RqEkMtp%2BMjoDdO9aWBtgHdRwkTVz%2F&X-Amz-Signature=4ab499ec70b06f6b8f6a020997264214ca559bed28d3505134e3618dc1a01b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


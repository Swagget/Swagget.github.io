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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625QBXZUO%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T182635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCfWUqzURJ2WlTszGfVekK6br7WsFp48N73G8cg3J6dNwIgGK2r%2FCm1fgFI5mCtEzz6HBKGMyP1Dqvit205PxSekicqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0fHbzkow%2FJxwhbJircA4IKbyPwkI3C5ags2Oo5GPFGBAripUAf6WK3CpbPpE30Hgv0uvS8TE5Z5AVq7Q%2F4gQ03CfCcxv3ZG8PHH2NoZYdhd4TR2k5PVlo01RClyIFiOOoATYZ%2BJefkztfQ6yMI5qLzW6SY4R4%2Fq9kJKymufzHJuClkCNaf4rqaLAXI%2Fw4gGqxmXYS64j4t%2BLqt%2Bfv%2FuWN1bvr85QYAuLA2qVFxxmyqT3frmLAZWXfKFDbzmQFgqj0YBPG8V%2F%2Bp7XvsxYqint%2BRZuDnHFTi9RKgqc6OQb3GKHobYMNLieX4B%2F3c3lDDyVuL3Nk5bL4mguwe09DF9P5ZD15qLA5D9zwm543cUFLThIyUrQGPjZKFWimD%2F2lZSx155fOKznkfII7onZ8ddSUE6jwkJQzwC8Kne%2Ftocy44J92B%2Fqp4Gf1MEYWJX9hcz6OEiDXwqTISSpIr1vivRk3NbLWbTNRpMfBo4ReZCKAmOngMkNWhRIuNJk%2Fb88t2FqvvdViW5VTuz05vx8BTpu7Jfh65pJshURRsyvvY7phKAQiMkCzTTcx%2BSB4mBgG8SjpCEKS3oCcb4C3JrD6ssV7AS1QRHAaMG9Xj1jNSqnw%2Fiu8tjBuz1OoSN%2BzvGyTSuM0NIFtey3g8jDoIMOzYj9IGOqUBPmvYT5NOPTT43ydJVfKRLyUJvg8m03gcJ4ow1gcNyxL0%2B4PM8YJ8jzVI4nHDqJvkEfZgjhGIdFofqGLzCtANDuyd7YHFHINjMymxdLfEVzI8tOHCMJ4kkMlGwWJXAF%2BQ5q%2BJ%2FliEoHnKeiI%2BLfwy2pdOCUeYy3WD%2F5o8B0juv0LopnpGQSkNK1ftcINXe1HWOF5pb%2FExV%2B5TI30%2FeYpvysYRJ3dM&X-Amz-Signature=0307ae789fdb85bea46c7cc1c776a8327d86825bd769d069fc6c6f659236d135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


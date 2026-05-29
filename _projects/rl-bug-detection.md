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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXYCSQH%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T175916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC4%2BsamPH3yKqW%2BF3JK8XwvlHnL8ta87utv8cLvxJl6wwIgfHsj6OtrcHZqBRqHCplScmJCOtpwVz8w1NARNvmv9BwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNjtAw3Cqh6wdD24SrcA5CT%2Bh54rqTRkBPPUHxeBLTS5lAYI%2Fw9uzZEKVnocN0wvZ42VePPA%2BxHHlTcCPR7ATyjmqA9z%2BGL0S%2FBhr%2Fkd4R1ri7%2FAidsxNnZt9FcPHOiyyYgJzDPYNKDkx%2FdK0c%2F0tis31vMMKb29JYmQLYTKmVEXQ7P12xAxf1JgPdhZUIyqPAfkbzdrS9472jZ6fVdNs7bk%2BPyWioiLfi5asCDndh5BNjVSgHw8pKl9rzCb3N2Qz964S7CWlPIU9%2BfT7%2B6gulCzIRrZYJtvAY1LtLsJa81kYY6ZZsVoy7QEMkykqt%2B0594I1pizxxnLIaNqfHUcLI0wMpS8QHqX7DnP3rwpV1MvmbXT9APvuJa6EuDFXE4O1veB8c8q%2FMJB9tx6cc9LmazHwQCOUSmCxt1w4lN%2B2%2BC6hV6b1CgNf4Ps4Ygo3APxKCWlSaLt1ulXVOXWXXXwqCyzdGQDjtZ4UtcBIGBssB%2BB7bsu%2FkTGgFWxBlxCXRzlGg804myQKCL99VRFP7r0ZT7Msr3DkkVvWzL%2Fyu0BGH9anbtxxjVdi%2BdzZM8q8Ggzv8tZn9pX4k%2B3jO%2FN7NuvVzxjMOLwAObOmber8caoKna6k2y7uhyVp26FwGtr3gYq1FGaamBZ%2FbpfSi7MOOP59AGOqUBXD%2BLU2mjvcd9%2BjLf5WpCYaHSCfALdQxhdujupDEWLXfvPMXgHHE6riMKCD%2BB4VmElvKaEAayCWbTCaYlKtKFKBgYrfZpU7MhoBEAaOClz5gCY6%2FKdzW%2FQXvDlEMNHyReRlJVqUQRd9kjBjGKOEKzQ5JYHc%2BTX80yjthaWEYNmYv72fB61Q6EO4v0fvijaxPKwyL5Fi%2FAE0wk22efKv5cleLD0ax6&X-Amz-Signature=bb6bcf330183406a959e624a0108fc69d399acbec1789c1bd93249e37e035aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENV3R3K%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T103918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNsjzQXE1er0qujbUfRgJynA6Lq72yjOj0sUWEA9weTAIgPca9p0slqJxlfNLsIKv%2FfD1PBODNzyg%2BBwjpXPfl6xUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkd96uJqqNXbXprySrcA9veO%2BcYG3DfJkC3bYyGs%2BanhCHa6iiouKWKOzMsI236VqKzSEpiz4r%2BkCUc7vKyoIhn8Vpad0Kh2A%2B3%2BgckjvBfYItkjfyErU2wrMyHkPaGF7dyc4YyO60sYchVmO%2BDsdHdz5KwBhzazjwZnCgZcMjZJL6PuaUc%2FvTdxkljvKixJgxmGfeIHAAf%2FOfiD4UzMgpgICkuxA6UZUbGartbScDk1wG%2BgU5bYUoHQZOlXvvz56rjdjNh2Y950stTSw%2Fxxt31rtzMXfU2QiJSpKu%2FaIZ0t2y5AyVCj7yL%2B8Qvmuhh0Jcv87VdYx%2BtcKN107uqlt7h9G4BoYQTBZmmGokWDfuoc%2BtpJ%2BfXcmuqzOSyZDCOH3Ga%2BxA1P6IKllBwAOVKkZ1NKGFf25pwKCfZAZYLQpSQqIb0LZziK5qVHSMWbVPQ%2F6TGZLtC7YM04UCKVVkUSZufCURZROURyb3fDZ4sPuHyCCyJHnz3eaLmVFtKR0WIvegozEXzsg%2FZ0fZFQOfVUT%2BIoYHmEzPj9CQ5OYNp9eurXeeVNgrEavew7VxFozCe26Rm84GjoXBNXpGkZD1QMsx5T%2BKrpKIqbRym7O1QBxR3JOq6oDAom19LiZx38osnwsJlYf0%2BeOBC6ohlMJHL69MGOqUBCRJaGIZAFtAR4S%2BrwGRB%2FFIr0RFJZEcLUOuFwt1WOitJYmTV%2BYvg18XCZLJfuHpUZIp6PJq7%2FfuaVUOMbhfJPYn4V4viDoG3%2B1WfT%2FRY2npjaqXMLC8BfbPz%2FSrnopU2NHei01mB7%2BLvR0w746wtDlMhHpnZcmKDJDQ0yBL38lsGbrmgSRbRBlv1A2HothPsTjvk1%2BcMy38seyyikeu2UHoazrkE&X-Amz-Signature=6e428bb6986c5e4d267f102a2dfa559383f72977ca0526d335ed9b270fb37356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


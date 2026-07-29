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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z5H3XVM%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T045540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkoMol1yfXe%2BnmOzuXux8Pkl5jCavZ7DjRxvhY8nSPgAiAUgCucwVCDuQYXvwtOoE0F%2BQwt4%2FwJIsmildc4wVjPACr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1NBni0RkI8qDI2chKtwDmBojyQct4xw7Is5KIK2JO8f2PvZdlzGoORElddiwhA1DZSHyglBc5KmMKEVw9wTtHqqroEQyxGy7a%2BCxgsvdJVO7BvTga%2BTyKo80nTDRNrG5ATgTCCdsdxAC7XWfxA40g%2BxdkqHRG%2Fv%2B74Rd7tt2BK5qSBFF%2FFx92WKptsZL5SNiRtJFC%2Fa%2FINaW%2BOtE5lwkeWUQMwmybarCXUsP2JkBTiV8prkh2uc3SyebbdcYU%2Bpo3oa6wYZIEAKBJGL3FUlEenaLNPfhPazw1%2FPYtRR1dZfOGYcypUkBfj74bPuASyswu%2B9qtimzGobuAVnTZ0SJo93FsT8%2F2M7Q6yEMBF5hzxSAkq0Lf2Z5gZY6cKM%2F5VPbrTA48h20r3X%2FtUht0AnGCtEiO6Wpo7MizowfeF6nCQf1AeJAuspUw2ysgOXe51EEfZjcQu39zETBzEwk6eOamSc42M3SiHAXra%2BWzx5gC%2F9pjW1TC7Awg4q5iU4fbklFP0vkoXRK9J9c10UtlYYrww5Uis0lot3rhYBNyRqd3XGWyjadUxsVMaL%2BE06VLivxQTCLcwRgWuCiuhxRDHVW1K9nrmqzh9JVY8KrlnrpQRBPTdm6EJKVEZ42v1W9dDOh3OyyyJuJyvISEIgw%2BsWl0wY6pgHICWPml9HFatuztG9moR5iZb4QYa4ihraduBy7u0wQLHrPc2AhXSyscbkkqi2TtqXWjMyGh0%2B1tNOr4%2FNhvYLw3fEfRZHWcwM7N%2BZ8Z5HY78XNxn0MR196ErRUcRKLfPyca4zHO5WJclALzCo21JuA%2FYDS3SPc86YXuOVhuqiJinw3jcoNAk3B%2BzqAjumWs86z5DN%2FUqTKhjbZYWvitdperj44W1uU&X-Amz-Signature=7314f4a98e69bbc14e2a07a6caab6b4c1d269c77e9f0064c267719b461f57578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


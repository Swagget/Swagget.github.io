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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THZU3DM%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T113238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2ZnEemxW6ASDZhEXXEHbqO%2FSgj12qa%2F%2Fv4xCeIJSM8wIgLHICSvaZLP74vPanrSA7AnQ8EaLAMZUs5%2BYt4c86S0cqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQqKWbTWRcPmtoPICrcA9LzJmmgTkpT99nwXa2ZHPNIjynGGoGPO7P8HB52aVCagdAwOKiTmRwOY7mwDKSQkRqk%2Fuy5Ry9nXwW9tmrz0bsdjdaC4u%2BQikUlGz3DmkEfdlE7deMelGDeks6pILvDxKU4B26aPJk8kKWUdvdOggt9tvyyAm038p0UyvlNxZ6MgCLpNqFouNjokOC04L2i%2BL5G59y%2Bxp%2Fi1RLGdJeZCwYZcyEqkc279Llgd9jVhDdQGwl7ZSpjtV7HRQnZ25jPXPVCYOi2yDn8HVX8SuqCyQCViTjLx4YeHHmXXpY%2BMgPfAubABh0PXMPR%2F1rqZwc8mfP9mUm2Swnzpq7jPEhHn0ttIYPQhHsGYr6zuMbhskj75JKehvD6IKb1OqKDolcjBC8avHY8MbxEsHe4XLPuwQFA3CszG0vz7aAuqX9hdeHVn03UDaKwffITfUyjQPSSZyu82lqS2fTe2vCUxnB%2F0DfhU9KuNRsvbgY5%2B6ZPImdpuGNWT%2FfSXp0fHbiNDovjlXl0dNmyG04IBV51iLPpZMECHOwb4urPZtV55u5OhCNEDdyFKwZJH6YkoP8aMSuwjWlQB%2FtoDqC5y9d2qllMZG%2F5c2gCVPBs0cwETHtTS2c%2BYTDUcp%2BIZsjQLutkMNb899IGOqUBSBWdxN4wjtEUMyqXGR64pphEvW5h0WUIWWqzq94Nw7em2CCT%2BcDFqRtaikaujCLRaKemPEiQooM2Wm3jRXyNT4p8WlHYz8O7%2F%2FA7OrTQqnvw0u9w4DkGo%2BLKEkURhTl%2B%2FHUZcRZJFMNPndlp67FlNmhAoLAlPWVLb5lZFhivKCsedsNrCestl8zzAvJQxO7Znl8WC1SZtBhVjA0seEEGIRCv3raL&X-Amz-Signature=8a955738cc04f1a4ee0680ef5246924ca0f1085e00943d50951106e2892b153d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


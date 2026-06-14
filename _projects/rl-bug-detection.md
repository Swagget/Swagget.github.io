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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4U55LSZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T190425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhgosLcAxU%2BF%2F8v25E5cJam1pUGzQOVxJcv9EeegV14AiB2Y7bXVTvTU1WzfINUf%2FnrZAITIjGE6p2Vzt%2BCkGZhrSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM%2F2Gi6Lc%2FbByBZiXZKtwD0WN838Gvw3yNKymF%2B0CLy%2Fn4MnMt%2B%2FF5krAq3IZ81mOQZnPezILwcwdBanTKdl3cU66wKYVBgGcmMiYXUD2kODmGcLvkm%2FXnDYv2M6lOGJ7ol3UUe1lbd8Yif%2FHJwrM8ZJa6WPw4lvgPxC7UQhzbV6H7NHZ0TfESi1BQW9T17ngGAZ%2Fk5Lwps6oq%2BE2ZX%2FYj6vDrKUv%2BRrcmTpsdCL2fW2sBVtThPP4GJcVCB2L5USlxfWA4qvuPvxC8F%2F0S2de4Q1%2FmKHvJQUWMUa4W9eDhK2jgImRnv1%2FFnzQzaPs24r1nmYWyU6kUld%2Ftza5sjlNKDfUYWIE5saPEBbymZU2t5wg6%2F%2FKFDmwxPiE8mJ50Iv4Gj%2FQYwx4a35UZv%2BN2PN%2B6d0OOF4vQXFrICJOzmdGiy8r8KT3baJZpCh7vBTanLnKAEuddSzCPLiIlF%2BxIvMZYB35uKMSX82mXguXboK3Ug6uYv09Md558dkbm%2F0E1o%2B7dxnHeL5rw7VXWCN62iQbVOp3TaopkQQmzFwa7H8xpfo8xNZR9JLbouTwwU%2F8bUO%2F2urzdDkcmXgfR%2FifoieLvn5RwhNpIAxV1CVYArFAq6mtuERSEoxICC1rA9GpryPEdWVRmGLj%2BKkPi2TAwjru70QY6pgEQKNYrcXiOPT2GtnnryMHLaapCq%2BLxAMuHcKHoW6VqSIO5ySzQ3TzBH5a6P051vv6TjLG%2BPVFE5Vnui7u7qoTB%2F%2BKnKp3bqYJKuoCKuUUNfUwDEn5MsO3UEfArXNa%2FyaL0gH5e5vQ45m2ZtNyCsmXy52EuBQ3foN6%2FNDyytSd%2BrwULkUHNNsesDYz82XpcJmvPyulIjEI1zI923lYlk3GBvy4iauKM&X-Amz-Signature=dedcc6d47dd05faabf64c884ddc80600a4a53a166fb7151ec26671c34fe5d88d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEYJ3FK%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T191851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdzfl3vJmIsaTkNnJJsrrgA3tNK5C4Me0CwYClskxBeAiEA3IOm6nTOWyKr8zTbanpJEsoafyhYdsFO3rNvdEUtC88q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBV4RsWBULhJpq9stSrcA%2FOnF%2F71LW1AIGwXKYqSJUiaPoniY95tNUqZn9wTnGuTMwv%2FtDxomFl58480N7OIy9IhHiE64qS6kqX6pUrw53d83ZB3W%2FKIeP6IRXfYXgXU%2Bh4xh9S64f8jQ4mxVU8Q6RaojHREHYS4c2OfcL0%2FtDXTA7w%2FcMrlfagyhugVQCPC%2F0h%2F2sNB%2BHcG79xaKqerPE4XUrF5PiVZqGCoO9lWS6j5r%2BbiHPez0PTbrcDLl71dX58IAnSe%2B986B1XyT2khutbKUz8pEKlNB%2FRi8RnvSoAHn2F%2FWu%2FXKS1TC4mzbATsw%2BeRgUsmxFjQHUtt9QGFxwijX5fG8v8NFY0QQas1jbmAKfxkDw1Zdf9DwxIgOKf6nlS%2FUh4iJEqioNuw94w2TlQaG4Eu4UMAwERYFzWBANHhLWjK7kqZ3DtxMyT2CClIPg6FKuSxwISqIBhSLlCfik2w3em0RLZ2ZZylBOA802HBwgU%2BWH6ApQFXTzMgkpZ2cXYw%2FPluN8ZKcLgEmSZ0yF3jVjZzZhcqOSsQM9bGF8t2g7IYG%2BYEO2tw%2FOvsU9PnFF5Fsp32CTCCxW6B%2B1yKCI%2BeyL5Xc0%2BMG99ouygpm7O7P2rqA6IjLyiFFumwblatZRI6LPbAj%2BRi5KLBMNWnjdQGOqUB69LI55tASrSTl47PlcXM25qZKxdmgvOunTfx%2FzZPGFNPCw4TB6l2u2ZhQCcGdDZIxXHYITHlX%2BkDn%2Fxgyl3lZ5Y1aFuZuApY3rlEtsal%2FmR4edNonYXXKHqzhQRh8zwMsLuLjm7hygH3DduhCkwTraZtDZk2%2FFQJEaim7yeYESw13Jm2jOy6Yl6Hy3J2dy2sVCjXNu6CoSFEB3p8S2qC4Yz9VMTV&X-Amz-Signature=614e51ef2674d08f11523552d6a9d0102f395d42830e13636e51e5972715158b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


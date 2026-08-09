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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUMFFGZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrC3bUVsInL%2BmiKbjIFlpZIILZ0oxW8Td%2FJ0DV5uuPkwIgQ4FCHDNhxmFJWJ0wo0G%2BM2ko23bLLGynW%2FDQUvSz9h4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCPBWNssRPGrlgIerircA51JkWCqfn02yh%2BYhgLzutjeSeuShKkrfaJCin19MRHZaukBgcSOe2Drf01BdFw7fpeTJfBXdtv6hjocDXDFnvwtVJPQZ%2BXAZ6I0SVqQsRYb4T8TgL1h7nyoG4nLdsZwhNbMXXMOrBFELNjmtSSoD9nV9CLPLlUIQjFfmnG696B%2B5aiO%2BE5ohf0h9UA8rK98QFzRncrzvpYPb4t%2FZtIQlgY5rawnSUKt5HUmdfVRAEXb6Qg7F4DscidXGt8%2B7paVcm%2B%2FRQGqABEsGExmkHAEDZL6Sr4cHey89aZ4P81B4UM3ozfsoUro5FFuqr6L%2FLCNvb1PSDTn6r2jY11BxMD%2FS6NyjMiF1ljvb9MKUMHeF2gPDt45SFpkhia30xey2FEYvqp2IE6hk9yHz8pmLh9nAypcv3DIEmeBR3vL1RMI2TbkGFl8ktjsUvQ7POiJ0qoL0bOzUkJ29jTAqfRcsrY1hbhf7RCdHLmSsRGwyuDBwTTTnVCMcb6fOhWVABBfc%2F2lUY%2FYdRpNZmcJ%2F3Fm9%2FN2CsN%2Fsc%2BCXUiLhLsitL7BVfZrlmIzzlbBQWEpWouZ3CSwABGBOjpXnuvgpQXsQL9ZSBXmITP7QH3SGIWfl06DIS3UcqM4BaJ5tBM4sojqMO%2F139MGOqUBgrA7JqDNClDiti%2BRWt09YLteSlyq4GuJrbXrphXi6TdD%2FzJkxWgVKctCKXBqBqKCtlLD45fRy2CsgUkiy%2FUQl3d2D1E77QZY1E7nGsGGM6FFZBoF0qI42KlQtPv79DCD8ea28QCC9pMxehfG1J6nuul1bMbKsVrcaHLahFo1cEdHVoP6m07I6jHd3OT8B9dr5xwGX60ZeArlTSVKyjHvQPR7en%2B6&X-Amz-Signature=782ae749ad3df95631b5bbad25eb25e2cb550cac9f2a35ec95cd355990af4a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


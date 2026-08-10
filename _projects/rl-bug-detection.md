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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BOSL7V%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T163946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGfDoWMvhia6xJpxzlTCyFThxbE743Px6XY9cMbpBJIAiEAnl%2FYT8BANQeWFralXZ2sII5wnnIjJwMwGCPQps%2FdS6IqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzy94KUe%2F%2BGP%2FS0xSrcA%2BPnObI3Ycn%2F2oMF9O%2BNQfaW5bQChWLRx2R2SxuTGv7UKNZq6XPMnYTFBA4acwS%2FHfyZ5okdHlS2T09xwX0BqXjVA1AyXLercPnjzeszuaO0P3fwopm53CmrgR2ennnd%2Fe8EbeeD7Vizl%2F859JDPBITCKx6lg5kScDLpnAFkAzTNLMC6uJoSLUXeD766yd1gUgXR1d88XQsqcydgvH4MXlJK%2BPI%2Bq8Ri3i18019TgS34u2A6L%2BxVL0Bo5PS3LDo5byy6VeFWvEPaoj%2FAQoAMHdyBfOLspzeVncjQHhyzYbdNwwisXQ%2F%2BgVOGA9MqRlzQF8ze3Wc4RqrWZKzGhWi93uBBu4mGlUZdwa7vlY25nc5LlkzlOJvJhyn9jaHHIR38zTPR7Fwq27jHPIClql222Mi%2FS93XaLcEHk4o%2BBKe9qwPuUYGi02BImjNf4VPY1n5iRGx01e7rXhdbgqjY8O5OEaTsP8pCpvgQDqTPrbrGWOuhJWovq76AG4vgDkCVhsf2NInXiPUqkiAwvAHjp08grx4Lb0OLfKEP%2BUesvjvgaSTY6goVzyOomrLYagBJCUU8pD%2FIVyNyqk03SX27JqccDy0Q8TqCrXOk70UgEVqWqTtUOMFejfMKrfs%2FspqMM%2F259MGOqUBrb92CToceDCMqmyPGCSQpbn8nMdgEH24igJZWs%2BWs8NmMCGjK352DTZxzgaaE5CtJOmzPTYJj9f8XYlXETpDZvTlzhbrltfk%2FyOQxcKCfTDpZ4i2onUURSvWxmpz0m5YBxVrTrijhfzCx%2BqEPdEmoYlt%2FVwDpEjrfy2DLRgO64nYqYJhN%2Btl4mLTuhN%2BM8ldSvfut3rO3J%2Fwe2hm2zuHV1xyiEFV&X-Amz-Signature=147f9f980e4175754121653de2354c132639179b6d744cb18d659788afad0d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


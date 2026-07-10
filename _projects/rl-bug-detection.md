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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGYDS3P%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T152422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhbyvSrCHqdboa1Q4M1efItto%2Fl%2FQCRHDaepME%2B2mcRAiEAn23cy2oxGFmU4zop3gTUDRCVlZDNp%2BjCT57B5B4gtu0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5DX4C2q%2F6I5ztPuCrcA%2B6rD2PShAHwwWNGWQTaxvUWO367AYFvhSFogxA61GxSg3Iuq10SDuSomycbRt9gBUPHKz0B00RZdpmjWre%2Fvq2jZxykFf22KVk8r5VkWleO35YUPbN%2Fkj2%2FGycCs8gZnIFC%2Fv2b2lmpHw2OjKfuhntW%2FNVHHhH9DMNnQhIbcDXgazKMT0p24%2Fbaj7Jd%2BcO1zwUrsPdwdMT0dJooxWhlG2PZrpJe5yOgJ2mnxSUUf3WWZ7SJL31B6ZN1kBsBH9G3zttjRtrftjClwwAlOC21FmBEBCrXp7Aa64LnwAJC6wJcsemDRZkPic2zGob%2BxykqlsqGEmaVIZN0nMgP4Ev6clvt9wvdhcBAlqY9sUGXM1c7tLWX1uI43QGg0qRkD3iEuKFY8n%2B5uzHir9veVflYMcxnpSWXITzi93KDYeYswxlVWu4o4oowV6zxyG2LLXTCa0MmYjKkYzAcA1nUhwSoVPvejg%2FWJuG%2F%2F1YTAq9l8smVX98ojNqjqSc3%2Bdheu46Mpzx7ZZK60ELwstqpCVOMuSODhKa3Z0LoMpMb7WqHU1E6XcDryCEh4thCLTFlsd5zx8c2WrEj4hRO7LA5KSnsktAsZtvwJbytFiVLwtF0bNZ2a1oCm1shHs3DEzv7MO%2BGxNIGOqUBG6U%2BK2Mp5PVraDO8vPFe1g3KtJEespbkYARrVgiulkBAVT6OLHfgPqYn%2FOgM9MRIuNnLNWanwxDOigp2vQFr3zSrt9PZqlT2MRofxF60%2FRYxWgMvJRRHRgG9IARqrXY36SoGIHLGn8hYCjLxi7Jsha5c4xlFTTFiNTfVCnphAySXeKpGMKECvbh0oVnDXU4cLtGXLwQh5ZG7AT9XAkzaDCqcK9v7&X-Amz-Signature=eb2230cb3323c3d5201bec64e7f7fe0e041719ab8598d9e36c806843a61eb9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


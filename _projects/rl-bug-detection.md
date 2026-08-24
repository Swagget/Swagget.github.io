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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJFJ6DZ%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T122039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCn30ABrh%2FNNk9oqGsrW87EifbST9MC%2B85U3HT0JYuwugIgQ5jIx3h6eE9WeWIFb8E3prohPYuEYYDeUMmxW%2BbraVgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9LSYRzmmB%2FfubMgSrcA1tiEcKVQTr1tM%2FRa70qVErvbXjf6p2Wm8urmZRIPjczYoFgRQ6TPZGV6k9oXNk1sIa7cqGXbhy0K88LHN23%2BJ%2BANT%2BT%2FzXxu3Uac5vlFtyYrjjp63PWWzcaEYJOU5KoE5pPEVcL4FSgxl4VApevRNYkEPfod9%2Bd4ikjrFvp2%2FCVR6ZQ7u2Q4S9EI2qD1%2BYsdBltHTbKAEaxNkUGSI8JNdA3lUU5NGeb3DY4GS5JrLeMTVjnCD%2Bw00RqgHZHatDe3AD0sdi6cCEYPXu%2BiSaRt8BV4NjS0s7m5L4NpsynLnVv36ZMsUgAiPMpqS2PgmcphfQYoYexvT7rs9odpQVIJJLC3dqQmXloPxh3cl4kmh%2Fs2H4PpjY%2Bm9cM70LJP57e54smIuXJojJfDOZ2nyTXkPPmZGNfPJB0DWa%2F%2BB%2FuON8lR06zV3cN%2F3ZmumdjlN%2FSHy4EXOPPuChufFizgDvx3vCXsJfjb0y6rQgXnQ7bedUpRSBU4eXEWspV6wgnFTKnemKa78Y%2B1L4SjY7lJfUfZTll0mKVBahccX1G%2FjCzimZFkBxEZh7SeBNvg77CIEqxIErQZVhFnurdU1Y%2FTu%2FSWDx%2BV93mmiM%2FzkKfD0%2BVrr56X8%2Bo3HFc7nXJTc%2B5MIuesNQGOqUB17NZd7DlS%2Fy0dDcfkV0pjZwtwDi35t%2BwRsltNxuC6CAj32etcTsbcEbxdpqhMmX05ZAwCQRtth7BN1B261RbdWHjryCJsmMkRHZbrqdvVKUt4TwSFsoM%2FjVnWza6xv09VQFrPdctwXtZ37jArO%2FDKHX0DWsG2otaoFpgeRohZuP3tC0yad3VBfJe0xMp7kDPMVKQTiK%2BlXaUrzVhqTvBHa40xvUg&X-Amz-Signature=9468f7121da38792ff6b99e59143b1c8b2d51c5d56df7afe3d14addf9eb6f37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


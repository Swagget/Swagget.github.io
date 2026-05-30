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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TG4NAQ4%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T094825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDG8zCmO8Ox6UbsRFbzzEJB7f1qpVfE9oy9yfzYjf1B8wIgYxdiiuk%2F2HQqE4N4YvPuVY6v5EVshFaTjAudmfB5aQMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSeV9KkFp5vBpmjRyrcA4i7C552%2FFOoLVCsRTFys3kiPowCgleXAq2TfkvZ%2BFXh%2F%2BDQaMWbrLbjzX8AXC4HdcHF9cnT3rE%2FfQJ%2FTBS1fDqwrao6ysQHxIdVFEDnw4qunSTKCa2afYuSCNqifb3RajtzBn5u98tRvEhSWuqpY3N6I5b6aqJi2kkcxG7RXvax6eAejVxSUHL74Uo6Zk8O%2BDb6yeHi5qXGhYQqNRVWXYpZ58C0SUGQhtb526TxoZTuNkBFiy1Nz1cgMzawYvaxJ5jpHaOb4WnK1YVZ3JbBinsbW2lQWhEBn%2BqLEDd7kk%2FC6j5vDMPxwsUVlpzFaymERONqL0JJ6cZv4muPRGot0RjfPC3w0n90HIBKRQSr1iIvCb4RI5L9JzEn51fTsvB8E9%2Bkv12aBMfGxa6xSik7OsGbnJ0rC0TNF1tSnmwlKYFP61%2BZMq3JAERG1aYu4GSCOLKuaEqPSubKko8ZpqHMAKwgnsuTUd91P8uGqU8Aim8dcM5qnYobZFDxG%2FPlf94robBmT0s7egjRep7jUqXIBXw%2BCUEO3fS9VHh%2BJJntRiZ8H0topALQ3AL4TeB%2B62Hfw2zzjgWmuQ0dJEpXTDLb1nNxmUGDPniF8JvQZPRbLdyrK8gyf8DW%2FXnMbLX2MLvf6tAGOqUBZon%2FNFDK6hTKtvcsPUqXjN%2BbHIq7m%2Ft9S4P6nOlfhvUGH7BZLW6m%2FIMilSqvnFbVGPyhr%2Bm6CBdiopPQicIfrY%2BW4O9P9SZM5lWjfuLEWnSbV9bqa7Ri2%2FywCEZukqrsvbMAMHNbLcM7tKX5HTJUPm5t3Ad%2B5WVKHyqOvdR4pRqGF%2B3lh23rVHQSmLCmtcsHNG9YtzGMUA73zFhwf3sNMFr%2FOrKE&X-Amz-Signature=eccf6eade15ba13b166f26cbab7020020aafde99d30b74d8a26c23d0776ce9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


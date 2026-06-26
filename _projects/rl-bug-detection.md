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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WAEQIM%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T182032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs2q7uAvT2B9q549%2Fbvtl1%2FHKsZHUTsh4JLfczvKdVuAiEAxQSAslrlMVZxMEvhc04OTiPYAy07UZImz1gJdtVMDsAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDN%2FB8S5wxRWgzOPsNircA%2B7jD96LrjbMvDljMQHNT7oI%2FRlU%2BNDIzuiBlFWgYkEpAT3Yt9womYhPAyXArkicQhgTJWgZX2lhlS22roVxRC7k5I1lH1kDHq2wpP%2BookuD26NWDvjG1ChB3Km5Ob7dEUHOb1kn3NM22Ugc6CUUiGQbjRcberhcSKVG2lGd3ZP9%2Fq1eqs3XYsDRnmMfdELUwHoM2dCw%2BclgsVGiEpQ%2B1Y0fMSTRGDkHfu1rEgtFi%2FOyR%2BL3P0gAHBsBpU%2Fh0IICFXM0ZGjgEbs9bACdA9u26%2BBfVxCWv9wSukBNThKXLQJd7yCKWNoLPIpEf1h53BWKD98otinq0s7amUhQzYiIJ%2FzCNo%2B73CSIltawHDzVQA0sNe1AyHH2qOEEXfPq96vDJiCgJ86ofUtH5w4wqerWU1%2FGL1IsPCB2ToXwH%2BkPq5zj9Mj4F2mWITbLLvtXAsJrzMUVz23I0kgurS6JCv2p2jslpxTSbPczzRMvm2dMvtcXD%2FdGIgw4A8uswg0avDIf2fOaxglMGesCmomDu%2Fv%2BBFUyGH2KUM3DOW1LgJhyJcx5SVrBp6OsXrRRvRPSlfg6K4UioKMUttwVUiMhF1aVPFv27VaCMghmNiM5%2BYjatN2i%2BKQr8CuYiQxN6BDXMOfn%2BtEGOqUBVy7jHHp65GWQdogSfNGB03KgfeXOaFicdh6JVGKHffnoHBVrIuafJxp2yQs5Ti%2BPZKzlxVprU7FOTeGX8YgSlKpyHybzWJY3M02uBwsUGf1qoJK7xKxLLlx%2FW5Cf9Lfp8BMts1Ab2Y8xkb%2FRRoQsu1lMS3NsQJfd1q1UH7u0eYGIEelWNVPd8Db0VRNF4ZAG620HA9HCPfyq%2BE7NIzcx5ngRLZvo&X-Amz-Signature=7a657169a5dee8c0b700c16dd7e1964d8f3fbe317df1e696a2a8e95f12c6e21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


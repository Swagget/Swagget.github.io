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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMWGM7W%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T200253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQD5YCPRH4sGYlzN%2BTiDDRCAslB%2BD5E8Uv1P%2FAKTnBSGlgIgBrFBUeusRuzCxttwemlqiLgO8vczYfbnJe2cAtlmpiYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcKBErVvUBfsDl5EyrcAxqa1MDY9It52gfw7d%2Fz68xHFMi64v27pKEpyywUJcXRqFgGzatHBqKOMfmBJzAt%2FSToJtjU4Rge%2Fh%2F8yUg8LWMitdSlJmx3AG5ljZUN3xdvidyzK5fyaEJ9GniU%2FehXN0JUgTQSdh2VvDz4XiXnKL3MEyl%2BL4YOxhRiBC8bpZbC9A8kZIC8LlMqO2qcCoaz4cIDZn%2BgFn7%2BXpr35cm35pnIW6isua2NYCMswt7NaEh1EzgIZiiEZhJJrIn%2FQaMY%2BSPPy9IsBN6w%2FphfdMx605IHerH1v551HRUPjUCJ7Vfk2ac5gulic%2FlnUt2Ho0E%2FF%2BFZM3N1G8iy4cGdF%2BVPSRiAS9%2BCltSmw4520%2FKGURocPDQkSPl7YJhTqmVes2OIohxec4Fb%2BH7PoFcQxpQbuAAP5ygvUfyU84L9%2BVQZzQSM22JSBsxvISV%2Bo79dO8u1Z1GH%2BH2%2FhJyD9o87MEyreS2PnmVSM6rRkyAHv3GNV7sfU%2Bx3VHM8XyDM%2FavVWDmWMhhngykr%2B%2Blt%2Bx32bcNDQ8LCbFnBYWtfDsT4ntAOTXsiAxPiC4yLmC45JNnZMcTIHp5UwVrqtYa37%2B1BNSoIpkaV0BGOQAU6pHWFVKcvTQgCU4z2oTv3W14Ws%2BGXMJWVudMGOqUBlFZGiPzu28rLVUjqJT%2Bz%2BW%2FDobC9UYn1HrINCjKMdxAY6KNdu7BNM4p46iuLssiK1G5RyDR2IMHvabvIhjngwAcl7LD%2Bu4smuIEUxEOOlUhApvOJuLE5XqcfE6Vtz8l86GKtpF%2BO2pmasHfGwFMAhXiCnaSlRDyQIx85P3EtM%2FreFd8h335CwH1jshEendcTf8OgioGe6n4tOLyQxG%2BOZSxPe2IT&X-Amz-Signature=dc16c083d332d121d7146781af721bc7040a33d827cb4587cfc628a9d98b4798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


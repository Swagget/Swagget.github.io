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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TMMYTP%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T002931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfEI5e4bjGXnezPQlYh55Ppj60v1xUSrg%2BxueW6HIHFAiEAvaYruNs4b4dj4a5%2BXNNztazUOVNGwtu4Rg0uOIaeruAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMAgocznrBuTGIhbYyrcA5gh5vSGwu%2FXHDzXyG1rowHwY1KxARbozxyrOzxLLHqhLdU8nx7rlWPuV2sheO2TByjXl1xOd0xNBVdiOluXV5KvylybTrvnFvkv7ncbP34GeG9PnupAoUucCQvsc4soiu%2FJg6LBaXXYXoNsJWsG%2B%2BoTVmGACSvEAAEnNzYrZi2iVZkwfubPc3mQc4fttBbrWRcWaxWWilBxSbaIpTqqoCMIRk62%2BLF0qED0tmRthkBiiBpWUHcTm8pF5LzrDVJC0ofyWrS0RUeVcyy9NPwjhxUPcbpfCbLoIiIMeze4PzvddhP8qNp%2F90OqnKLkfj1sfT%2FG9lyHGPeVR3ZB4PIEXJ1yKo1Mn5xbr%2B%2BQsNbzNBHFvM1bubeP5X2e2hNBEJzVN%2Bmg543sBmKZDNjGbov2t%2BEGjOJQQ6qCkqzA2Qn0nmZcfZrSe09cOZwWJeXyuVQ6cfHTWRVXy3VLaZlHUp9YqBKseveaTgn36c2xvu9UosvxZHzV2WWNp7VXkQ6WLRy979MUCqKvL0y5I%2FSm8XxGLy462LitfcS2%2Fcs4HXyW2bmnoyOjAIyXEl9eZ86WZkoIM7K6byHsccf0AtFXGNWtukHvbCXpK1wMMOg41WOwbM2O1oNhSLazEVOCwGciMJLlk9QGOqUBa1CAL3jKUkUrU7lusiLORJ%2FrdMr2u7GWNddhfNCCT%2BOsrQAcdp2fN1DpGCFLziY1KUgIKDwK8EAqZnIHYol35UxVH%2B13Gi7l7C%2BxEG7Ve7Xg%2FqrZqyGosdukdsIgoNSydY%2BLragUUjBbbh1metnAfgnRFHV%2BwXA6kgckTXnp7ETkg6Qfg%2BeCx8Rtyu9c0Zh22JLn0mZxr%2FU38uWx9kmcAz6SvnL%2B&X-Amz-Signature=8b8ce5e1d9847912ca86c8299c901f437411a1516ef62f5ae222aa4a117c96de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


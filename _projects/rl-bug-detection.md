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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOJJGBN%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T231016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiawvIGSeBsvIW%2Bncv4FVvNRdK2Aa9no5eS2p8H3nQgAiEA2TccIooYohAZDfVuqVSC9KgBgpXZ%2FI5mLju0nLkO32Qq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCAW%2FAKIRSRnOZYgjCrcA%2BO59aBLVpRiAKA84N6gX12nFgA83On4W%2FPuFCVucooH%2Flex%2B91Hs%2FTtvsdleJxGdllcPp6TWGrUlHs6PdWQONcFvLAiFNG8oohPC1HQR1NNUrfmq1VRF2Ww44Li9zqZ8pmUAmFZwa%2BKYh8hW%2B7dEQdFZDSAL3MpwgOwp587Hpy7L6RJHpkE7E2Ovh7RKQpW%2Bm0JIdlwuMj5k39hgkMPlNGZckKoMhnBO1bk%2BQwTIUFaagnFkJvjPKpYhgvx8dvoCXXa0eGoJZxcljWqyI6Vq7hkROni1Dunxd97qRq5yliabYvGsGGwsUv5%2BH2peS2UpAOu51EBjoFpe9hXHF7p3wPLhCvWQ0UqtlCVTQW7seoHiew2FlG4bOaqV7poIHDxQKrzeuVI28N8exD89jcoaZ31u9Y%2BMkv3qtea5GTyMPKTm4COtSrv3bL5XPAE4Hjoo%2BnvnoiyygnisuhdwjgrEJuxrCl29rS5BDggUYuPs%2B1sJeXRAtzmELtV6EsgdQ5%2B2LFpIMR23rCS6V2FSEFSoXm5zLqi7Jri7T8Ms7nW4Ci9mlq9wBKrDB8StX%2BsqQTgBDNdm53h%2FRTWBLNtm%2Fd4SP9zcH9LncGv7GMQuu%2F1sbeVsAVUxyweJPkuZdCvMIyejtQGOqUBatKOuCs%2BlPFyvtMxOz6lH1TOM0079LS1jZrOnyUS66xcIXUitexEGPRTtrWmj4tsh%2FBPDEPUh90PI1RASwSoKDwyS2KmwZnXOtv3uJAZ%2BDKjbfjgqu2CVv%2F1mMDRWApWD58ubv%2B3MvvGwO3dwcWOPExNDyCF8dNrO%2FQiRMKNXHWYX2C7C63vTzGkCiWIn3eKofNaddKrzuumM2yssRg%2Bsh4rhRg5&X-Amz-Signature=a6da2f5b25432ee9e1f31dff5ace4718a8800401fcd0f47a256081f1e9efa212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


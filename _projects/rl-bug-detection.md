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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557OGXDQ%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIANBFfI0j%2F231IMVMYAQ4xNpKQpAh%2BW6voLnBGndo5aWAiBwUeP8Qz6KHLdyx4PckSgKgYDY2R36tJsAR72RFbFscSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMSKX8z9dToofw28bAKtwDk5DKuuHcPWATUtigFt7aBsiPRTD6Zxt2UEoxVT%2Fag33vbY%2F1Y4FrkNtcChxcROTW9RTfQx0YQkwDQDHho61L0llLMLSVYYQwUBKmiT45ct6cAuj0OwbdCV9FGxZ2TP26BUNV3Sqtl2b0lz%2F1dXymaHl3epnhmmtrFDnhr9%2Ba%2Fnqx%2BtBxFL1%2FlvYxaejxvPOvX2MQ0s2HrNMz%2Bwr64BLE3kywGDNO7tPu91Gg7AaDwOLM8PToXAk1y%2B7CRREHQ9r60EKdSv2ATZo6rna38gi%2FuMFm3xvviTnGbp8vOKATeRh5mLh%2BGNoYMWJsf0L1g2gjZvslSwnSXVJm0U9shc%2BsUXJwwGb%2By6JeFL9CWKep94S%2Bl2%2B3z0h1x1bU6ye6zgNAfVdIiqo4JWfnlkcsCbySgqjEwvzSCY20LNWKBM8cEVrQs53LLlyJUn6mtKL%2Ffv7%2FQ6H8A2%2FbE%2FsMOZ1SPigIi0iFKt9E3fZZw5RGJjxG99Dh1iVRmBJxIaRxoEKRN0a2gKYZgZeB28C3dvx596nsG4uLC3HhVntNYg4ZpJqnyggpD%2FXDobKvJkpL0yF0aoln84Ve1sLKTvB9ETHVYlk2w8Ej117j557Kvg0nbtU1BqlUposK6DtdAItgvIcwutS51AY6pgHq6JS2SsKZNYH2kHSvAEFwj5SYnIawem4pQAh6mWyrNSQHAPPAqOyPPorH0sFo75sng7EbT1Fm2sTJMcVSqE2QEgqzo1iMHkNhX0GOLTagFPF4z0BVHtKxlEGpPuwS5ps1WuYu0AW2OXXeFxphfgeKVGJ0PO9afuiFLjgV1WIPfbJpojxhSbJd74vvqw8qILdNPLOXTRLqFnxEquQVaqui21Ghk1uM&X-Amz-Signature=20dff0be64717bf8a1b59d426b8cca8a8d8b07031ee300a55341ca50f5284ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


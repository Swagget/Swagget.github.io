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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DWZFXEB%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T204853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDajBA1DobZItbON%2FKTOmWDVO00uu1L0QjS8x4UKQ%2BOdQIge9ZX0P5p85uyd%2FWtZ1K3PWwCqYLKJnRj8K2P5sbLghIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwekEhVcVGxDyGNZyrcA3riJ2vGW9bgqH1LXS2Dd%2FcjU%2BTAIKkdFY30pYSoAuCRZ99awyLsyDimjYRKEXpz5%2BHooRrlBHsm23YN4xmAPsksUpbtltC9qVQ8D18N1FdjtOT8zOH%2FB7WDsOluE1jkNkOyXDW6mzzSPzZjRQaqDPLe8L2%2FnJG%2F%2BeH7cFjfLoWCD0r3jbs3zoneqTig80fc9ndy6OPgoiu80VNgoNBdgJC%2F9TXaSyiWtSiqGimO4g9EBwY%2FsSEwdgLjxlt3IknaRyC%2BimVoLRJVV1AowXKA1LItZjjFOaqxJdPx1IZKmMJAVT1l%2FBgfolYtHiprHqO46xFWf%2F6vpdjtFydNRwqU3X7SMRgtJRTcx%2BvjbrCPUjol7N8AT2Fndygh%2Bi%2FVkJwo5oDbjj3l%2BLLfHlBruIW2WPUBlnYaf%2Fl9fla3HuLIAq%2FciQu0OnYRNQGO3V1MbFVRmZAdbobiahqpkinCMDI4ljwUlr7tj1XGafFCussCVw7zuJVlYCK12DHggTUlAFlsPc1c3PxN4KiJ7pgEWRRdXpgdy7hC95NM9kf5cUZYgilH2zP2qAdRRvjnzOFNYKt45%2FHIOGaFJ%2Fzy8TvRBjXX26tQLtx%2BenSE0VpCC%2F2QQ%2FAWArX3ghhNXqRaAmXWMKK6kNIGOqUBE9pxN%2BZ4QQT6iSHwGpfJ3kNNqnyRswSDk63SZgo2HLRf%2BzPZHhs72sPelxjK9Gi8NupKMwX1SJWTe0Ps%2BV0PjEEFhYHLiNOqb%2FSdHPJ66FO5N47R2TRV%2FvO%2FTGsUI3WuTuisT%2Ft10%2BiJq7yZycFx1a%2BsNu2gMeriDOcE81ventnnnbICrJ%2F2zTOwLsY0qIV1a7F7%2F7p7WqT7UhDyzH15mAsTJhz4&X-Amz-Signature=5f6609797a11c93a4d67b7ab2d15f361d1e06980068353451c40bdae860363a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


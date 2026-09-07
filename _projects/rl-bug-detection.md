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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLK5Q5X%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T002506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAKRWPRXollQ8nZQKqRkCnyHGiWmpvLNTRt%2FWZVegvfIAiEA3ETrv2ftE8Ez1m3PU635h6DISL4SBVQZe%2FR2LfIyiAIq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDN5saO1SJbA3W9G%2BDyrcAwXcLtH913hsmxyPs%2BzbEj37e3FDS8BFpo35vwlGWpoBbqy2otLWYwZrFTgHSKi7AXiqT9Kuqm8R69ChPt0T2%2B7qg3bF8G6S0NvDdbWxX3PzSKri3zmlmqAyzzMcI8APIbeh5nOEimZbDVO7fnljSUvzeJyXo3P79v0KdCck5jLCAj8TOEAwam1bvdRMVOAq0oF5DEqEWydxodk45xGIXbTlB0ZWE0EEIYtJq3xtj%2Ba8B2fbCwxU%2BUIHNC3D1kl812NC%2FwcXdjftVliryMgUjZitcH9x5WFtH7JbfZMETww8gWeIAUPktq%2BFLqgmpEugL2PauXZ2JU41EKTUaqZ1isE%2FUjq3sv0Uwbpj1Ey4Us%2BORD7%2BSLNOT3%2FTwieSfLDqhtEloZzQOow6Vy3dLdi7sjCXimMVcfxkakk%2FGsr2AVVHNTmdv%2BZw8qVNyHepr8NdKagkTzmVlXJypyVmLtLZn5Y%2BgxYszmYB%2Brw7wi7ChHPpC4cqskwA1I79XiZSiCoRTBzT0tFt39pm7PSxpTsA3xqbMLG4kQeoXP6zx%2FkCwmqmNU3TS%2FrD42KbHOCVSknUQzQ4wBzcLnTvPrXKWrvZolFmdMCPCrA0261DIFJJQdFQOn7V5KFNfrMrtlwEMNDY99QGOqUBqKmur7SdTvMsV1Q7cTchbZy%2FnB8wxt6K6NOtt6DvnxiBZ5Jc%2BFTDQYq86Amm%2Btt0L4QywbL20VuWNo4WxS5JcYU5RVXsGGq%2BRrwg3ji%2FDvzGbqA18k3AFkcxdZPQ7WU0KKtT5yBg%2BGLozPlhTv%2BttPJ4TNLWwmwC4vWncKjA3P6hHj9J2lwGbicycZaTw53wOpzY%2FdGkrcJOzGCDkRNmZdcCHueW&X-Amz-Signature=8043b337900d9aaa26c672c1d65894e8a7b4742baabaeaeea818a983a102be96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


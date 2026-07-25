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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664UVXBP%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T174546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC72xnBdIOs4%2F8qbbv5w4wlgf26zJo9UC0CWdgHLKmfcAIgTPs4fzgsl6820a%2B4FAKSPVaOdW3uAs6DEn%2BWtQvWzlgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAPMk%2BIKngDkbR1SFyrcA58YmhUqSOso4ks9QEuMwoZHcbZhH%2FJyQbYglGaAdrrHop8AifJCXEQlBXmazyrCMhpepi%2FW5NUbtmmRKO9BWfMb7R4UABis8kvTWCtbnf6zpScPupDzQ5XkskEoSIvB2TQCtK%2BsRaWIkHvqaJxDGiLA01%2FbKJi%2FuZl40qOEq6VW73Hkh1W4zyv8AyKi%2FSs%2FGbNfpSVPxWVplUf8rlVyV%2FfhCDC%2FnmMaNYdSmy2LWMaPtdrv9IrJSmZjwYqVJzr94Tt3HMwUCRMkWy4Pk2HctNFSWObuV2kPDn%2F6effw5K6llKmInN9XT%2By7SOU66IuVaGhGHu88AVWdrAvca6xYod18bAT4EWTvpqNUfBhi8vzNUUGU8v10NAME%2BvOj9W8x1dJaGU8ML2n1hEbBlVUdOL2Foxn5yiKlxP%2BUibtV%2Bqmb49Q3ZJXIDfdMxyIVnwtplXQTLWMRB1yHc116FRU1IBUv8rVR8KCzo5M4z1GbOsIu9VrR3G6vrGqjOQIWntd9Bl4wmO6pt4lHEQOvMbQ%2B4iOAaI8oCoLa5J3WAUj%2FOm1%2FIZzR0ygUpJeVsh5%2BF8hao36ceqqGhZF58er0h8pkaalJWPNeLMXqsm7NAuF8UCEqLyQqN3qT%2BNMNEqXhMPGik9MGOqUBSNrDZYyv83A%2FBicGUCGecwSPauMHSWxNMzKwdoXs9VOl40bhaTSWYjMjlYurYppahjeka1x%2BttJDpoqfTfmD1aoGYhNL9DQrPMyZsxKTy0LQEIWMsA7eQbLugM7Nm1WOBwUjb4929XgqmU7FD7jINQt7B8hatwAVIGZH6UjQd8YSESJDRTkbfzx%2B25VFarEXD6EXNNoP3ob%2BTs2L3au44qarCVqH&X-Amz-Signature=8b1bf73d9ef204da6bcd29e14dfd520ba365e853c957a06b2b4f655339d99f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


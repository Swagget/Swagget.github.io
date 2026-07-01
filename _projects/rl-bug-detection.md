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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDPYXKT%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T161316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICfF162GdF2RUs5iyBs07xfFdiieyuig6PiK912AoD35AiARn16CruB169zUYv3XPbmEP%2B9GmJSU%2Bzm9X1LfJ7GloyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgv5Bcx%2Bmjoz1LzxwKtwDCf1Jq6yjIcNqIpqCZLijBNTLEXYL20bZawlYrVgMa4DO3OGtPiQ3GN2365ZA0ZvSUrXEFQ95y8aAi4WR8Xt%2FgM0o4JVtd%2FX9Q6cARp2OoT5I6aJKP7tFrqUZfy0x5eXp0LUrPm589%2FG3rnXpslsXHjqRjg5sEtLLcPXoJhtfQXEdzHYHBzk2nWSo%2FqHc3%2BM88bAuuWn9ahJXUMAHXAK%2B%2BWpX3Nh%2BZBoS2nWeY2u6d2U%2Fpou2%2B%2BL6r8Yk0cxkFjul8TR%2BfH7sDMnbU92QWmyGGfXimbDLX%2F4zPyH%2B5i1RFswD2LI%2FJnYYmbabNYpXKsYc1mQ4Tb9GDur6tl4MiUfsmlLZjiFFBAR3gKmJiyzqhsNBFt0oglgyF29GNJo5zkVcn9%2F5MCab7IoeoCiQ%2FjMtNygVDvfyx%2BwpGPy1RySMTLZE%2F1OG3oVz1shcXXhs0NrjEpzqov4UByzUdAvUtM1XhKxWrfxY6r%2FfBuVfba5yL%2B7HHJmsHBu65nNbgEWbeAyWTotueehNrUs2q2EEOi6Vsseepm8A%2FAXkxhDjQ2wbw%2FF02Z8vxKPgFv%2FNtb%2FGbauiLxDiIWr91MkqCrHaWhBoKepcRRyY8cATAIM3WTD3ZSfHadADgsLKhEj0zB0wwbGU0gY6pgEpT98T6S5hSoA9g%2FyPc9%2Be4XjNww%2FlCLb1MXfkAuaJcoN6TMzD4b22ud06oP8MAlz2BP%2BO9z0OVTq4Q7o2uvf%2B9eMgp1UA2MA%2BI8pn%2FRomL2XaBUSp%2BvtjeEB%2FYeo8TLtse43GLoRqY5Kmmpb8ks96ryRJEKActpZjns4439AhT2esNLWJJqjY3wR48VHhmuQYaROUQJX3pUos%2FstcU4gx2gcPYSO4&X-Amz-Signature=41a12e6e64ae74243cbd605d8b5797c078c84fa165fdcaf268b7ec857a18e6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


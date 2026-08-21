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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6X5BNC%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T191728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZboh5XrAsGqhzx1%2Ftd2GhcfhUPNn2ahRUY5Y47oNqQAIgCScFUpTG0OgG84VYC1xBPka1qYtS2tj3h97cSS2EO4UqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjiL5MXZx2ws%2FtYXCrcAz8r8CDeDVHCZZFxPcBBbjYGoPd7RBStPN98sH3qZHUA2jsvC9l21riNuSUTBAlji1eawphtuNUoR1h9S6o7QIlW76iYqXO5v%2FrkpEY%2BZQCFqz3LKFYqO4jpmGv3kfzhuWzcm9dT8hYEFzW8YXz1mrhmb8M3BS%2FUIZdBrLw3i%2Fysc9p3pYtscJ9OBRrukyswJm5ISv9WgKDaBqOpFYJkSKEsgYGZrzHJovtmzDfHEnB%2F%2FJTpDAW7qPQM%2FaQ8y%2Ba51HBYoN%2BOylaQxN9YpDewoF3TvOnVcjpUYdraoSzcmzABaivOPuySYxLIcKuF9Dlk4JcbU%2BG6qxz5Mr2aTtdWHlScVi5RcjET1wLx8NUotiDAMrfwTVSo4Rg%2Bii304cNRQ013fjvAmqFNah%2BMuOxer0wxYO0%2FuORIhdDWypvve579LW4aTbPIu8Z3p%2FMutEMryINit%2BvUZSE2%2BNyeZ53hcIHNvi%2Fux8%2FE7KVAcPjAnpPaAxfCK7mvYJLcHJmY5owWkePoU1W71qe8LP1g5VL%2BOntV4sURDuw8qhxovWgik3mSwPDfhX8TdBnRGOMfL1dwol%2BU7pBDNcXpLqn6gwOUaoxzC2kAELFpfdzeDAtnvRtGs23cartiCoEkb7h5MLT7odQGOqUBNzRbF4x65AMJMx%2BfNoAG6U6r1WZiOZwWJ%2B4oTGhje%2FC5iepFB4WiTZ4QweNk3QRTs0%2FF3jRg9gmUKY1SXWEgNK9gX1kvjQb6ZFJZhhvuW7xsb3E7dFgef27YTQZaz222OQy218qjisZRfu1pCvjUOl2wi%2FdZbdBcfSpdS10jrL9X2J1FzHfGH6huBVeDMMPLsMtjgPIzh3YAjBmA2G%2BslQiDvOrP&X-Amz-Signature=97a7d22bf69a33c21a839919be74a7ec63a1a64304f1969bd389a1027eb42e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


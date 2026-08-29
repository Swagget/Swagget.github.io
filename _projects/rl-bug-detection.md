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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIZDUYOW%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T023106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpNfhPS9grbyQ0xFzCmTl1SLC259lx%2BskqhOViHz%2BLjAiEAvwxuQKcDKMjLYVQbYDzpmne1U1Zwu9pUbFsI0MTlCXwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEnCmwdmsEFR7Xf54ircAwFeSXjgLruaRyKWBtUDgoE9pBIswtSZhawz%2FDSfA2aWGm8nQro2WY35pa%2FPbGtqxpzjqIGN3kphQU7VuzZyZsobFq7t%2BC7qG8oU67Fvf6kQc4EhfRjQ1hFIQyy17Bml8TRAox0V7G8iZ2d2L6m9jQBN2W8DYtm62J3%2FTrkQKdzgn5s5gXKhl9CgG6djlZu4zdGBkIBtM%2BkfmGPFtycgMaZ88Q30U87AFJ6Jwwus7rgbMCZG0XuKgVwUM1JSrIwTpaBn1UpFs0qxWv8RenxZPZW0ozNGgSaJD2fI4wJgZw6wffZXJsOG4Te2gPjRG8XlY5ytdWEyRtQTYWefcQV6orwTr4n4EaqHHEeNLlaBnKtax%2F%2FrPK2Kt5XvfTd1CTsD90ZKZUHLBo4sPtLv5YSeXJkGJQsG%2B%2BD4XKGzMtciXWU7oYLdFTUa7qUUmFEZLPYzRI2byS%2F%2F%2FVyl1ApCBV5V6c0G5ydhzil0pTpeA9IemaUB%2FrGKVoEJK6P8z3LroAMvvdKlbO84yy3O%2F%2FbuRJhoe1i0KuK4rLRG44UB7yRSRRFbML6wZtMTKOSm7hG3X8IY0xWX7o64GZ8RTvADlPCGH3rYyTcZcC%2Fa4lKr%2FOSHqsTbByK59LUCAqYBEc5yMO7YyNQGOqUBOKJVd0f4z%2BKQllbi167JERs2v2O3zML%2BANshEgsVuxZM8X%2B7fZt6d24pHjgXbHc5b88%2Fnrz6bCDfke11yPcqYDhhdc2TCUI6qKWAVbGYkmxk9ik1AzMpBZFXXUsunyseIZbblbENCHxHkb6WW8nrfzJOeE7LJqmPWO2ISdQK5uUZoPdB9SE0H0Jn9Bia9VOiZ2SKxeHYBrs6gx%2FvZV4EHqsv4i9z&X-Amz-Signature=aa4cedd1bc06c2b0cfacdc328df5ed064fa1b328a7bba263cf20382ee9fd4317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


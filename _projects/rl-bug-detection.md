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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WZQCQYX%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T195252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCwd3QHgO0lveeeHN1cSgcjf4hmlhzxSR1V0Jq9hx4FiwIgA%2By6%2BTTOsqGKGZPfSLUT6MeKDu4XIcY4kEs9N4R3w2EqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLp%2FSmuJkvsv%2FeO1hyrcA1nc35I%2FjaIiUSiq3riiicH%2FsrDZVCy9aOy9XeeZOdCEKvCFeNunhgLByCtBJYsLxkFHR%2FdAQlFIvQF%2FgifV%2F5npf3JB94ss9VVfsI6Rq9iNtDPWMFf5r%2BC3HIeJVWp963YD1JiFSzvGTECk7IfVw1dAaREkzRXQL2CsurMb0DDz9f6hRfNxoGk06RuhVkozgT1pRLsXoUjnR%2BGkDAnqw07q%2FJnFO6PlB%2BIZhKhHychBYM3JS%2FRy1Xf0Q4eqgEUfDAnGyK%2B78ai704wGQTynPygj8BlS9Kkb7IP5WtzwpDswARbf3Gx3Z9nfPzwyTpOGrT1S071W%2FCisuamppBgKTSzk81WhMemHNe%2B8aVQWirgA%2Bw7pt6pB0faSDyrFHXmNjy1TzLcus%2FrI9tBMdji0%2FZPRhpUzd7KGdZ8CuP4KMhLgO2%2BFNuHDQrJD9arAjXEoJYzOfAOdLCGgy%2F96QLm46cyheIbWw%2FteDh0O3nXN3FaDRViBZPCusKYui3bIhuRU8Giv0K7J1M4jjeBNO5lH5g20lYT%2FmyOC3YXhCWg5w1ZG%2FP0nmf4Vgcpu3fRGav6VGpuUqTpfFGjNxCKMuiV3O3uZ5mEMpA%2FMj1%2Bn5%2BBk464mtUu%2BFxxHfK%2BHjCPCMJXLodEGOqUBX34W98poLpz9A9%2BamOPUIxSlj2GbgJQS6CO%2FZpU0%2FZc6qi3gt%2FpgGfCdfYuxYEkkEqxr9bArUyHrZQ%2BhBQAneBD8VsPbCSFh6dcjDkTeen%2FkoqGGXmCLBiylaT8E5gNKZAaAHfzRZumk8V%2BymPhdIbXVZis0iPMU0Vlfd5TOMy4xF4ICI6OJCZXKwXAhuH3P9aHlfOYJ7P4%2BG8FYSiYzfFQz70lH&X-Amz-Signature=5e1866b2f73ee6e4c445c5485ee1d239d4c61d02bc50d9c0e46cd8aa2e59c413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFLBKRD%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T162145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBOMZBcB627rSutc5lNTr0tbse9%2FCLVrWXyfp4L7rc54AiEAku56grQ4jpSAx0zFnboUn1S7GFJj8KPTmVcoZKfwkxIq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDP%2F1GpjZcWxGcteBkyrcA%2B2e1FSarJf8HTxh5PPKKlGoOt%2BshSvZLagKlmxwGJPBOyDOc0PJ4Qg7%2Frm4jdA3ZZn52LYtzuGACJPwcZt%2FrRGlxdcTPGvPtXot7TjEJCQ3ArCVMJZoeJhkO0XJi%2BVqvGOxl1uPZRByRkP39I4tYx3CU5xMPqes6IpuTIxc%2Bv6XKvtpwm5Bayw4E5I13RAfeqyI29np5ntQwXA2yMT1FmBxI2dQKL%2BTDUl%2BCLzCBY8241%2FecKKngzLzd%2Fgf6KsVyM2tPotcpenRoR7z4HInXWnAcJpXrEWrsuIOlS3BB%2FPJQZUoOmzoT2ZvmwpQqbFBQS%2BOOkKw7sjFuE%2FFStK3kt%2B5NoXPVW2RMRC%2F4geRRFiOua9JpcxDWfUK6ZUx7fpwaCKQJ1U1zGD1d%2BmkdlaEPTYLlugND9JxIia4erQWzTI6cYuaf%2F8Uri6pZuSb8ckstDxZPpk4iNdzP6OBJAQeQ%2FiR0aPXuTnixBMErfFbpgKMhQpLnm1FyFnGkbrvQ2s7UIKADeBiEKaAAsA4b5y8y69MWFgsyQS0A6XED8TRPzsmyMhl3irEeEWCBrUZOtU0ZqY2KM%2FQBCyc%2FSnaUUFJBIvZTz5%2BnYs7tb5IU%2BJZY9cV%2Fr1Q2fo2yGKrMRzKMPHSttQGOqUBKiuQe3M%2B9T4z3fxlikle0hLzAPOM3YJS3FiVecw%2FJ1FB0nI91jUgnH6mLiZ9Jrb2kvuOtM%2BUQl03WUREz29nU4eIqRG3Qx3uWMNgmcLUADf%2BOas6KnwSXgmwVsflcFpcjsetZUUbcdBMGscDY%2BGaYLGJj3L4Ilwdu%2FWDWzV7G%2F0JwnlY6NBThVsNaM5lnkHBI1J%2FDjS2l4tsaXV3Xp%2FLvAYiFzwH&X-Amz-Signature=43d57e9b621a619d5fdb73db0c522db758e2bae99b23f32353e88ad36ce52314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


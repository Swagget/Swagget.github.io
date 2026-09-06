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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCMX4XRC%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T131352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDvZstY4elvEvnVFoqidxUP23Y%2BxmTF%2FLb66ZJ%2FCPrk9AiEA6uqu0wri45MfjKvUW1e7jwT00DZgIXkDGgdytFmVxDMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDH7%2FOo6H8wmxLhB2ACrcA4s0g5H50J9FcSwkcMPMlJpGMColGwWuxnlnCIMcvzaZwjWTDWPlvnegD2vKHm3RgLXrYqfc3kZ0csKNcRTnPVuNXeQ64JgYhbl6DyfqVSmDdHfsm7Lmj38eacN3cx4ywjaWenA7Svola1al4dMvD660Jh1LzGYgHXzO7xlBmRR%2FDr90pMj6PuhC06y%2Ft34f9bOE4IJyDV%2B121oHuP3I4tWhkKXBYpcFCJh9XW3pRJ8uQQK18Ln9tzcpZ%2Bxg8SL3vsi%2BhpOuitFKZljbjYSey0l8mmgjyrFELQSiFEmW99mKImCdOmCXqrLjyEd4clATSfL0hCXGQtI4Iylg244hG6s1tcsuRm3%2BcC8BQhExh8F8EolWnhYmJYRQp%2FfpF%2BbGceDR%2Baxh%2F8JpEnavrGsSqJh0X3egUjKtGgQ7v3jL5gtTGAi5TqzKJcm45XdGQof0j2RA7UXlKfn57%2FCyGH59XxYzI8oPOWBhrYOPU07SJ9EF3GhTU39eC5guweEX7OkeS17RwPTjK3nuYQiIfV0eAsv1%2BYR0zC8LmXBTVrP1XpyqUH9ozBPxalYrZ%2FcPlxvZrvxKk1DqnKq%2BOyoFhDqbqweSN9soykVVniJlDL5PZf9o%2FX1jEyniUgyxKWhvMMOq9dQGOqUBzTQetPtew80yhNrN4aZQn1sLsgZ4jJyd9n6fewAstEO9CPULCIoEU3chOodDaoOpxMdJlS4FQ9ENaLy2kC3kACu7hqT0ZSaJ8JZxTrByERU5z3pACpBpPmxmYo%2BvMyi3pBhWmnd7rtpNqesC8eSwAuxCFfLr0EXc3Jns6YxGcZMZJMouFZwEqfezwFhX4GaHcaPDh9aM4xcQCh7PUBT395jrq7s9&X-Amz-Signature=ea8b212f4f534479b3cb599be25071e0e111e3378cf940f6e10d1ef07f1fe18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


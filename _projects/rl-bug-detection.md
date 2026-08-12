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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZF5MLFP%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T070252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDll8nlUwsmhTHv7A6qhiIUIfwl5VR0clK6GLnS1sYvQIgM7tNlQGqJouFZZ6hZIQ0ItpwLSmagi%2BEvS%2BG8ii6g78qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7itE4VSUf739%2BU9SrcA1bc2yBymMYuytPiYGU2q5a1rA1NtyHK%2FJFYoWSPa6SXoRUqfLFHJQ8jEMBtKRotE3TPto2tu0FKTeyLrmYTy%2BDr71iwMjPauqJjHUcM1xAlR1KoI9saYsvYPlRptm9Ws5zcjhdM33a941LmX4nXlh%2FXmucWmpb21ZMjbNg%2BoONoUO6XtH0b8GEZDvSHIqONQO94d9e9Ia8nNlFRcEF1SbK9Nov0GG%2BAkIhZDoYVD4xCMFTShXdD97XsFqzaJPSTz1wbbxLp9U7f2t%2BYtlhFjeXoqO65DUvGPQ%2FBPM6gTCJ1PhWwWrFhR9PzaJTu9DT9IkOyhNtiN%2BO01roiZpl0rOYZx9G8qjS3zjY9wCjJL8tWi7nA8aQmR7VaowAIbcUS1%2FxqpGSwpnmLtoxGkLGS5bUMmCOWopxq0Ps952aaLBH3BckNNgif%2FId7wloEzMgxgH20h2UYFbz2%2FK8NAbPw2q70P7NJgad5GyOXCzzvXfwdDmUAy2z6xt6Ojjavf6Ovx%2BSsviRJIAwvU1LKE9ktt4KIycSqo2qxy6t3OIOY3yqbgl5%2B5IaKJIGGYuQIVrphjpjeI0h5kl0ezwdtXdG1S4rmfWcIko1Efnv6OSDDslwgnl%2BGNS8Kdb9YigZtMM%2BO8NMGOqUBGUWz0CkTZSzS%2Fx1OHtEdOUCKgeP3e1xv7TmwmSTNdKGkeMWQSMMcKMbXN5Xnd2OqrFrcMIBVHcg6En3MM%2Bo8UXkDCPSG4Z%2BkbTd6cJqFja7QXmpo40WX3%2FwUVCSxKlO8kLUSgMefzbhUZw9Z59OaPOhhg%2FflE1n9YhLuc9Q%2BbTKL%2Bq%2FW%2FVzx%2BttnG0nJgXcRKO8FB8bUhTv6w4NELMA6d%2BgBrRHe&X-Amz-Signature=ce850620c3695d05fdaa02242660132572f8dfd09c6f09bcaa63201ec9929126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


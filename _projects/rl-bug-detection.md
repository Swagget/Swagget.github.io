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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZN6EKS%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T200556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCScUrW2w%2FUeLD%2FaGpVZIm2r4trpEpYBtHU%2BGgwkLpUNQIhAM4ruASmfeh7IUAgTBh%2FG2rENn4Wf5LpE1v0%2F8oYXqqhKv8DCB0QABoMNjM3NDIzMTgzODA1Igw1U2VHaj8Uip97Ahgq3AO7J07j9Jv7afHBzLf%2FHURs35maSBDi1xStu7YmVgELcEpOfrMzkWNaKCwWom4e6soe992z7Z1jP0uGN9OuFZFzNBXebmfIlbLAfw4faQQcLcR6cdRy2qDiMYK3Oty6HPYmfV0qK00wmJWq00szy27Ae%2BHSKLfKd0D5JhCU1OR5GaK3wI5so5UVTsCw5PkyBC9HsJ0z3%2F2GPaQe%2FIC9%2B71ISf4rP0Sal3f643oh92Ky3FBmMF8j7e%2FQmo%2BRv7hVA9OkvFxnMR%2FSlS7LHloMGjug0FAM1yWIbUGjvgzIk5Q%2B5HXXrm5CSNJm%2F2yVmxxvT3U%2FiyBVis79BR%2BFPyJqF6Ryoh0ApgT1D020diTNlgnPJugcyiyDf8QzqfgWFVonLG38ULi%2BNOYndKrEA4qDiFFgMysliW5UHvfbhROK77ggr%2Bso9hhTYbtJHNxGGGWgZTg4%2FzpzKi91uNLXwraYGSLE4mLOak3N4JHN2sYAY1AvzrlNOJolTclHMWl%2BjEez%2FfcQLio3TVkEotbyzQ83YSeXqgdyYqMFyrmNz1ubr1tCaxMmiHl5KowA4Rhlj08PvAxa0ual05ibGRmfD%2BJz22pXF7eBXjpaBez5H1JE6%2BSTdj13aGTZMqt%2BNfvK%2BTDNntrSBjqkAfnIft23Uhg0M5iV3EjR3RH9ypslmqG%2BAmn%2FA7l3eKJLrUEEkAwsPfgBEFuYysFsWcukHQxuOc%2BE%2FMwAwK4A1JklSH2BSK5xwoaK28ttTYPVacbXY86avZxkenZkHR3Vr4UpY5foy9twvF7KQKI7JKzdm2KpEUGkZRnqnBHMzxax%2Fi0KNrywstO3RPm0iDKk%2Byjzyfsx7D9%2Braao9Ez6OpwvtsMg&X-Amz-Signature=cf2c5f7fdffe1cb4cfae82eb1fcefbe05571a7a9561f12a52a6c120c709dc9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


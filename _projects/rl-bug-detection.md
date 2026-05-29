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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFHQYCI%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T202302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD11OdQ0SVL43E1959HQJNTYjoOreKwf6ly6ISbgGYRGwIhAJ0hnldJpohWpVjjSby%2F72m0y0KtTBWMTN%2BaFnKCmKd7KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzr0EZW9bb%2BbZRyBcq3AO1VgsJ2h05Fb6f%2FxKuZ%2Fvz0TcSMUIRXcuuNHNZ9ysn9ZmwFWId3yaAsM93HorNUxYOo489mWq0K06QKAVspqxtWgtVRn%2BVFhgaiJuqt84q7c%2FOEd8o65fhO3YYfUkICU32csx79q9bRQDArsm4ZrklAhrZeofJguQMMgBMfS7bZIcDCqaQPOkA2ZqDhpYeCrEE7A%2B0Tkuv2Zobc9luZ3zlKRiWJk5p5GZkk4VZk%2FZXOjXz%2BO07aEJ5bE6pjSh0TthAg%2BMDv%2FRZk8kAhSuQshxBAR1SKOtsZH%2FySYkTrqE5Xs6YNmJS6zRIN%2BRhD6y472xQCxRVa3gGiEkd7eee2U2BTT1CWWSnlWv%2FCMtCy1JyLGuxPb53R4fY5BIyn5Oehd2mByWQWutY1fJvtKXB%2BjHKT%2FBEHkf7XH5MeO%2Bhw6rMPY9czAVtMLFAAH7tgn4m%2Fr1KjXiqTEKopF7dA9p%2BwkYwHsOmQv%2F%2Ft3Xf9BS7vrwRIMz7PwMrxCJiI3OKgeA5J%2F%2Fr%2Bl4jwbpOb9g8Sd691mPoXoGxECz4w75tsr3kxQqPsZtaaBpb7cFzbgCBvRhrQP0FSCGsiTYblJYITEK0LceopsDhWR84aDVY4xOfzuMcdlkqI6UPtYYvTucmGDCpwefQBjqkAXliUPSzaNk1ilPHDNEcMDlJDB1DRn%2FZUQV79e04qTIVO8TvBq0Drc17lEmEZMUufwcaoErJ8vD9fTIO6rgUbppXIuIAUAPj2oUTShml0TNwD50PvP5UjAWovn9TQkcSfUbo5RQC5%2BZnrW95TxN7WuVYM%2BAO8HfSDoLYOfd%2FCJmmO1KofoI%2FMvhTp5QPH1dlm2TZBXsEoMssz5guSiYORZ305lyI&X-Amz-Signature=fe2e17de01c6a87589aa1d9e4b9db1818b07598c75203bbd8bdd735e7cb01b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


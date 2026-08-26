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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6ASUB4%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T073500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCJbsr%2BHEAm7ftZLRSVyy2cobwHZzxYYZlJ7ZiuN2IlVQIgQ%2B0OtdlBvYwe6etZ6gcZyCY9stfSOc9bou0qwaf7m6wq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDG9N2aZOZX2b1oFnoircA61AYXejb2wlRtp%2BJpMr8guh7xCQPUp7OkIhxEK3ie0JhO6H6UD4d5gPwQJW7En8IWkZiGhfR5mI1YlUy%2BkynRdwylSFMQR2CaFtzuaki8cslyNmtbFvTEWqGLq0kH514kF6Mf1eiobz6NtxwhKvTMxq8CV%2FQaDxh79hKYa3nQ%2Fa8ojFhp%2FlPoy4qpDQi1EEdqvc1LQGxfGG%2F6vM6KuC9ZdapEfRr1zNdWfxXTngRjR44fgHU9Ihnc5tkdWaRLdlwwdVoNCGVZbeOK2O5VPQDPEdII3sZr2agGoF%2BwpdXIaLGh%2Ba4mQ7KyAWUouIJdb6Bp%2BzhnaKFAZQ6W7kFV0jSfkpQq5AXSHR5bTNTbyXmVSORdeqY4PDc4hpB2Y6WdH2ikZ6hZ5GDxTigidF8ksMDC6JhqGoO88Eq4al8jwpXyQLmyWSOsMTkR%2BQEDpY7qr8fHCK%2FGsP5dlUxYLkc1w7Krs1sVxNGLC%2BVPW97x1Eru0Xf%2BkliE%2FEmmQOzsye7C7KURy09Q2I89H%2Fut5rJ41RP%2FnrzpxeccdS0yuJj3rKcYncgj%2BfZiET5LXZ0%2FnfRBzLnOqFzS%2FzDE8%2B2CHStA9bZwTVG7YmE1nMXfuOUHFuTW6ruW9VAWKyO98EDrIRMJnTudQGOqUBzOWJCmrd0THkJdcWDucGqpXcT0BLG4qq7NGIwHUvWW1J3q1NKCYcy%2F0FNnocE%2BdQtWI92%2F4AzjW8o5%2FF8gJ%2BAjt35CuHyS66mRbEpYR7R0cYULO%2BRb6bFMgCGalt540HS0xv2FwEiAsyqnGW4g0o3Ijnj7NqPLNLZhbh7Bl7ksQzxwAoNywLV1YTBYK6JMiDrh0Lv5oL4UzZW4%2FcJNEfRgBQjwD4&X-Amz-Signature=f805e292e2bfe9e605ea767d20b5ce1ba4d50489354190344e7c0ff6d350e61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


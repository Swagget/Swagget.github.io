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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYKUCDBL%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T011811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICNeELgWYX8ZXCHukTLq25r04eJiU6qiR0LZsu4JWRGeAiBuwC0WiiLnBkKPUVQU7vB%2FAiI4ciws7%2F8c2dmScyXb7iqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrQZQanGyLRPbYuSKtwD%2BcyjjpUd8ZAs%2ByQtBZWjcW1d0%2FamIU%2Fo%2BelmOHS8ddKkMHTEQdUA7Gss6ZV%2B5Fq4hCBxLzaEyTa66Rmcz0SpWM2ZMWHHKNBUyExOAJ8dO%2FjIolr5NFYey3AlV8H9F90w9i5jd9bY9vsZzKxObbaStz8pv8tT78Pf%2Bq%2Fm0uJRtoXWn%2B2ZXBfmiOzkRXIJwrC8ODhCPuUwq34kg7hyE9yNg0WHK6LVh2tSXBT2le3b36T%2FBwIoasoGj0Bg%2FRgHiKtTpzjwZhwmxmQ9J52NDlU21rJqF1D9D%2B2WVS6KH3jp1P9138tMk8dG5lMJJpMz0QJqFu%2Byg7uns3hNDbF6etrxANmCOktqEEoBhFh%2BbXMcux93XCE1M9RCgH2hCLUa5AoN90IFQ5axwgBDwR%2FajpqmR1QoZL9MVqPSGJuRHEsIVshkPwLinGridnVetZtOsF8NuJbR27hW4mukdOwqRoewdou9hXSyKXjO16n%2BL%2FzaBWTmutCMzJLTL9D2ohmQiYBuY7shXbKRDl1ex1Khgt8iJqKIAcYcCZDcwVqgvoH0%2B91JDyZM4l9zwWDqvDmNvl%2F3MMEg3ITPHJ88%2B6eqnKyI6ndpfBSNWvp3OOJ8WCZVq19M6RYPcZFSpgeQlAQwgZKA0wY6pgGnJqTsjmClC3ylhFsS2VBpRJ7ryHxUpnNNAwILBNksdMs7hygUnYU6SMJrkM6VzR2lmTKtjLUrk8rpYgrweS9sWTgAEIqCiun%2FdxB9C3TuigxXghbKu0RWhPPgas9LY8uvtxfKjcmqBxrkeFXAEdmVloypLJVOGeahBXPytdKNy3NWn2xwz2MjEg%2FoLTRqqSHi1Mc098b5dN3VZ%2BekoalPaTYlix%2Fp&X-Amz-Signature=d069a3e398390111ac126eb2c405005a18040c34e482ad35f23c12b6e3d91645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


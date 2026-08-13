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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZXLPJU%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T194841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDpNWj5qichtdzT7NeuKUpAidtxeKUnPIrl%2BXsmMymQvgIgLIsOkVDlNA6rdHTyINtRSIfq2Z%2F9Oz7CVcPxF13svR8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnKmpWkVxGjDg2lzSrcAy1tSBnKN4zwDAVROBsVulnqzeRMZkf6xzr1FhsMXW6tdqGhBMh7ykul513kIzG8o9Hm2hCqiHP7qddELjVrZzvVORWi%2BfTTm2QtdfKAhrLjD39h56bwWavMFBJwSG1V9TIla%2BgLquo3f7kXCqXQrOosiyL%2FP%2F%2BbLsIWWhg2JzRLc7XuGGwqwmm098lsPyzuBeZ%2BdBUOEZSceaA8A0DzaS9ecdwHFMBJLGEx190O7X8H0MefETbRBn743jddY8eJCVpqitzYh9CHdZTAofdkfGcG%2BR%2BxDnSZdYAMjPEEVSm5hY9G8Ro9N6QKBXH%2FElwGzyQt2wdbGm6oKiZVQsIZQspJRWNoc8o7LiyHkGELiKGWxu5R5lLCP4P1WuN1S8QY5EIzL1guyou1Uy9W%2FVvqcR7nPifR7xzCGrGCtL6SSB%2FHtbNviHTdYTI8bEDixAAbKqDuG%2Bq8eTH6qxDfIqqbadRFoYK8%2Btc9nsADzEjEZJJSoR4ZWnSuVkULiTFLaevgJiBEo0aTG7i3kAylWblvr%2FIN0iimyDWcMvN1fWKhtYM%2F%2FHlMpwebh4CHP%2F4qg9C1CpIgrPeWaofd9VizFPtpCeldVjaTlgKJ%2FqRLbLwSfjVdR7VAYym6rYlVgfnYMIig%2BNMGOqUB46zZy55hQ%2FLwP5TRMvIQvMoYLfyMETOrRPuxvEh09Q8G7TWAWmpxyvyIHglLUxxDmUP3qmx5pXmBuWTyVf%2Fyh%2BbcSXN3Vj8eLNT28wJ3KqY2V66Rn0lFIqQliK5RG4knqKGENIOe0CoUGtJwI7Z5cTZXDiCyzB5JR1tIexpiZVB%2BkwzfLbmZvbl5b6chSev9cztfXlZ%2BhmyF39EGcGdXGO1jlJEh&X-Amz-Signature=e619f10626dcdae71216bc69c837605bf2a1567f4c524c3a45e7297e0b2babb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4LJDJE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T232724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOMGBWcL%2FtZ%2BKOVPQPM5vFDNvEosMRQbq8VpXdAQ3SggIgPtSA23yiohzdQDLaq5h8xXm9Kf156SJm%2BjKWpWq4IL0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiaila4fdHhMSHkzSrcAzq%2B8kN3f3uPzMS%2BxIJYp0RKwlocForhdHPjezrXFZ7NIKiJS728yicCiv46rj9A4kHDXJfbu6mx0%2F3LH7knSzaR2yIkLHHOwfmCMNwZJOgsH7MyPpqYkAM9G8atiK7qaXbqsPI3j5Wm3X3pfk4wMTeK%2BEb4zJ6x8qKrLAyMcPpcoMvkauz3hPxDY%2B1fW7gwO6OAG5iIApO2lde0grymL4pA2oOc0G7TApapAtNPa%2Fwi1n1J4sKAaKPwYhUxARIxDLAKUnA0w6yrKJLkx4sz0NQHD4e46%2FaKCsGBbzudThxcYPzj4AhPX%2FCgcJNRRmGxWToQTuAM6t%2F5T2CHAbh5TLecIAQ5hxMDQ6Bt1VvtnU4uZDg6ZzjJdjScU8bBCkWRyhnGQEZerAFYnv0ePE%2BlRIEtU%2BHqwFZcLcLnZDgf5S7YHKIf1bqBL73K%2B%2B7lM%2BRM8yRJ6VG1iu74CervTSvFIRr4%2B%2BShrPH9Tmo172gJaeoeKl0pgcPDNIDc62la%2FxaJrv1kUCbxTDf8oaUJJP%2FCSh8L6sGjjiUZBPdEXn11YlWJyDM6Kn9TNiAC0LloU1g9rHuzruZ2VYXeQ3aeIeVN1dFOsjGCFPnUtn9rfthOBpy34PMhfC6baXvEhUXSMMPL89MGOqUBu45svYmUuGabCLG0QMDt3G4mfpK9ijP6xTzlJXnrKDQh3MaooeMcQyfg5AGKt3y4ddcD7AIuTxZOu2J6hjPfn6PLMosy1mNMqutCO0XbR3QdIpPG7RRzaQ4A8KdBTsCJNw1yA%2FtKFu8j7Z43e9mFNVdkGmxz8WHNCs9PKIzElt0B7763YSVkHPyrZ%2F42Y0G9xRlhBDCfekMgfurf4TLdk%2FMDYzH8&X-Amz-Signature=05061884add7ca1cc33014e3f9ffb1a3027bb499d38067022b825ed64b5d5f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


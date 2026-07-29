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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y7V5ZFK%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T150152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmeav8fILQ6lfq%2FTtgKFuxUVGCJlxFYWxVDEhYoddOaQIgZw8lFUeDTL8Bw%2F5vfUvcG51wiBPwIriGpug5dsrID%2FEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBuyJN5DJQigN%2FtGircAzqbG%2Fe%2BrxDzEbximF5OtSImj8nnDTHXUUQZmvHxnUx21uX%2FpFytfWQAIkuYEyHJ1lPZenJoe2roTqWUor2tdc5HVLn5AKaLzNRNxHqqYVqVQRpOxCtDgTS0t4afTHTegmCTZSxyhOmuH9%2FR05eP6cT5Ra%2BLsy8DbaFnFN1NRMmY1zUVUlGMjzezgGVqlMKX38whocL%2FZVTHTC9q9Vc%2F8yc%2B1Cp%2B%2B51tsf0WjVtAROHSqPKWMgEu8zvejBgyIoxx2bWvCEnZDnS3ORFp82Y5FroAj6ZtIU0qn3wNbOqvhPzsV8wBn%2FEBH5Mh6OaGLOJvBvJfpDntJE%2BO6Q9eY7tOBP6lUG7Rmh5X99nsHJWIA3R6cmMT65EVwVxfGjl84JPuvATMHeZ%2BOLUV81VqxdKwShhXdMp1M9C57PI%2BrNVOdyJ1DwWTaUMbUhikMZLAkIbRmJQUnRmcgE4d9CnvMyfDDhIC%2BS4FsoZboA8lXO8ulJ%2FXraIORTUROtUI%2BqmneuyWh8IpK1JQ%2FpStTM9KwSvWh41O4dusKA060iTUIsgV1%2Bv7%2FLhc5l7DWuWEH5%2FVDGtxljb8f9UWub8xBfRXJ5da6m0fkJWWINJgXWQiNbOFBJ0TjobdXRdOkdsoHcQYMOCgqNMGOqUBpBUbE%2FAR8UjWlmAblDDYyrYkMQWG73XJ%2F2WxJsne%2Bc6xCAHP%2F3vD7HRy0JWmEDPo1A%2B8YKQ%2BVhR1yKabKO1D%2Bi%2F38%2BOdKS6RcWw0wrJtLKSp%2FFUIWAxbE%2Fkp6KRTr47AwSzzQpVfSAN4W68ADhefI1IGco%2F7BZung0bxg%2BSUeqoEW60Oa2I6vQFAoTbDuKmU6psESzynKw1Wv%2B3vL6zi1ESZFtAM&X-Amz-Signature=392d170db3e32e80a206fa43dfc5217db0802240c7e4014c553757e3e342323b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


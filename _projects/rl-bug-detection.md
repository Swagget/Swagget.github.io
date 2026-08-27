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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3GKSTT%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T231715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCpK8B2OZQnvRLYHcEImRQMDCXmB9e3MoP9MW%2FTvK0vYgIgEcSyAt1aiPcZ%2BhmA3owpO2sxvzwU0CkVCyiFVkX9Mngq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPENMKPozQQH5kelUCrcAwJoj%2BxUZ7Z80%2Bn9fpuJ7zF47L3IH3vOKLjSCqHuxQ7gP0DKOz9YFF4SeJRs6L06AuNyOuTNmgIygFER9xvfC0vDKCGjQhXXy%2FqMLTmWkE1t4t97vFUDABptIfgfL1DZSYyXodjoOT30Xbh04NDjEfRMPqg%2BZJpPpukmDVeBzxKzANmYyCWMCyyWTCXVjHGSdn2kGtPJjFwrOXKPW85594YihKmO2osAt5oLUGdmVQd8paW7YnX64Y3CAuo2Sy%2FxFScloPo7uhoJ8rM5PVP8FWxkP3oZiuJ%2B%2B88enRXxFXWwh8wwY2iSEJcgofGiMGKu9beIU5PSFSUG6azNy7hKyg0pChJSnBNDSpVG9mecSgVgMP5S%2B1aNCO%2Fawj7I6gT9gH3KA%2FSJwsahot%2FnuespDLjC6hbPcpQ888Am0lgsgqnz0jSX2JOqu3qDN7EO%2BFYX8Hzw4abu5a4UD%2BuW1o7Rr2K6jO1rimR3ZLNQ%2FWNBUStbGIoyRR2zPtzfP6VNPBvLOV60GvpIWVkP3rNYRs8beLlThqoQP4XQkALcMq%2B1kXDEb9wCYwdN6PRJ11J5jX5mq3zqV0DvfFUYUyRncK9U8Ye4ZlR%2BvA3v%2BXMCJ2bOdvtB0bmQCcAjrY19ttm8MOjYwtQGOqUBOths%2FkXhouJnXE0fXzL%2BJ3Y01%2FLLv2bmivigN7pXNGj0QX790Q9U11ogz6rsWOS8c3VA7XZWBW0Pyhr5Qr5lMqFthp1ZVlkS4cLhqGXmQ8%2B1yPdcmqSbONMNBfjncZJMW%2BgDV839OsPDoY0tKkYjAdtY67PhBsRKCj8g5lGwuHRW4I39ezxowwWToBYru9koNY3b5xttdpR%2B2oQjfkRR5PtrJxZL&X-Amz-Signature=25ece4d38907699b5af69c1b085d7bc603041c8f5c01842a535d73c940994109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4GFSMA%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T015809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIRHhXjc2n1cvPyh4DK4pmnHpwKKVP64xoYuDqYzxdkAiEA2coCVo4c%2FVr899BrsMBF7YHkDmWz%2FphKS5UIwmxlH6Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBYR3NzmizDyxNHPUircA4XOMoIeBl6OdvodW33H5VdN%2FY0kFD3dd6kyFrGdUmAujESKrN9e8HnYTk0VsJUt9IOp0mcJkO7zf90Ix85IO%2F5Q5leABJhX4u0GohNTMfv%2FQanx6oFjNlU4YhYSVkaqslJ586gzUUBhAE8FxLxy7TiudjjoPEMagVYUY1Wyhj0yF8SCqmV0dAU6jRQsBByOs59hlERaavpsDBsetM2FBRIUIErR7QDdSeiqcT6hY0bO5kVYN0RGINqU4HE3pNR2iUDhdwyuH0ZloTlUYN0VIN6h%2BpTnX6YEt3LFF%2Bz0Id6oMfYLtYNm%2Bxgtya3howcy%2BwNvW7oYwAPkQe2xIKmRXa4Oytc51iNQ4TlcESi1ZOmTnvgDR%2FwyV7%2BAJOHjsGnczSQldpDLtjXyHcyUkLUICr%2BEQN7LNjQouymzefab1ol3jMXmfLCkF%2F2eE9H2iomNqWBYwj0AUHBn4ULge21%2FCtvYzhvAiS3qsp4h%2FKzdWnvW%2FhgOtM%2BfpZ6M2azHZw%2FKZAdfT2kG7GQ3KtJ%2BrXBRXMjXwE8C38jhMgv0abRRxZS5qxl%2BnMkNIw77VCOeoW%2BT9Jd%2FkmVlVftYgfqH6gjygcDu4Jn%2FUjT2GFGuOqjQ2tn9Tf8gA%2F93DQ00qcc1MIzZ1NMGOqUB%2F32zsDXiDk%2FlZCc0D4JUvEs0UyoG355ghTXfAnZTSG2WvBs1f4ByMsJRw%2Fm8N1o7QYjty30ClPqsMSj8tHc%2FImJ9oYDY4cWXyZFruJkds7rbBLX5IKmI2U0ntopsvdw8LLJQjQbkb03KRHnsUtQhLl9LixOZ5AhwG1Pm1oCmObaTAhvWWfaJsV5NWhh%2BdPGV8D5EnuFZuHTilgfKemtleVd3wivE&X-Amz-Signature=86fd09321035a73309369d403e9ee484517c358098c11c792778b08d7f230693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


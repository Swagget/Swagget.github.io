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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY7HA7RP%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T094907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICTo8G%2FFBX4V8jBQlzfGO0NhMSeyEW1PTOxYPg9pb%2BoZAiEAmD45ma%2FbVNdCNLWg%2BidTSZRi4w8KAMmu8DMqY6z%2FA%2BUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIani%2BoBZ0hm54ueCrcA%2Bfgf2GXbpx0bRvSEtOaVmrmCWqSfJ1LhiCG6YW%2FhI8THeLvY8C4pDSyyENgV1JXpboVsUmOsg1SL82kpoctB90uQAPprcJOAe8QnUpYCzoaxybEvunbyISvGoaVAmY%2Fg%2BXS9WBRrrvyq%2FVXNrBNPCoqpbbK4zESNJLhhE9I1I3KBxKIgP1pbPHp%2F90tDsYjWQQ4ZlfzM4u5L%2Bn8HVpGIu0dvq7WoZDMoS07LZxOQTqmiLXOa%2BcNStaGjNws3lWm%2FitKUfRVX69QN%2F5ukO6wCTQchORMcXcgghvWHhDBfs96wlm2cBSqs%2F5cqC5etOpLIr6Zre5QEdbVp%2B6ks3IZlu1GXwpHVHyI9GzKAfSQp6oh9G%2F1%2F%2B%2B7ZL7kuEBkDJn1kWErCan74H%2FaGeTpsKu6lFDNQa0rEvbaCb9LOiM4nnkXmTsPCP9YcD5HLtvjg82Lb1q8LklP1vjfifk8S1MrABU5BMoc74EdWxzk0HxHVyklf60o%2BIWfR179s4RabvNHh4tCrFRnChbbBEhDAV8LqUWOpP4yGPm1s2CcJbEJF5LdVZ7eodYPwlTzOb%2Fc46LOI%2BROgkp8e8vwVDGwVMRimH4L5QWF6txk7wg%2FUjGWTeR2OgNJc2T6d9ZlyCn4MKee%2B9MGOqUBdAane0ApDdkxTXEXEC0g8kUgAFO%2BIBhu6eN6aJ8zK7TRRN495WzvarkGX8fvsCmBVewSBKwCT7l4IDVJXqMo5BqHERdwmJuGk7PyGLISj%2B6y18Nycm4wnaSYilstMORcBAsLCfqX6%2FUFpPGHuAAoyvgLKUJeAop%2B3SuE17OG7H16dZ4yV%2BCt3cBxLsyXwD41yXTZ80ZOE4OynLy1az2U%2BaPaO5zM&X-Amz-Signature=b639c0683190ba00b7f3641ac47e3ae544cb31e10076f610d313b528d2cc1752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


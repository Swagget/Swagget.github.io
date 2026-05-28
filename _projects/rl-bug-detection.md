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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3DHE7A%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T200122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzAHXzGQdn9q68gGAZkf9%2BkSV3PsEFD%2Bs3H6pOmemlyAiEA%2BgVqgUlQBJsdxKLVtasDm%2FUFDXI4FpGoNtltOpMHJp8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrgo5%2BfQLo6n7JYOircA0wxDpflOymJilzygNJgk3Dvkklc8cROALhCXTU1UOP7y3Yg0ElM0ota86D3hsnWwvKOyRTjmxfrlVZTUcCols7cjLrUPnd3VXPG0sOwTukn3Nes9vsYQ9xROrdRwbs%2FofTxYLb6ES9A%2BdCuh4La7RbUNTGoXMgQpL7bTAmHvQeb41Y2Q2n7VDcpsswfLDxH5PGZwe6%2BWqf7g1enCr%2FcEua6OVWqI63zXwjIH4nMRMQ8wOA%2FRID5C%2B3YSQPqhwmFBOIZIQB1UCLMt%2BIapSeh7pGC4HhX1Kj7e9fSUJv%2BIbNCvKEuXBOqvuM%2B2fUTAMoIdTvtr5CIZ1FafIIHokklfsEoPXSIO22gl9iUgNAqEjk3Y2l5oK11Q%2B4ldFtAJuTypdMVesZaQ8IoKZ6fuyOCTJWkQlPmCsGBLhv9sg6jjb9sHil2caZUrs%2B18YAhnWyOmTQtUgR2uwhCMgl0u2BR3%2FQIrWCY5wrMwoPsECnYIC5kD51%2FXGM2sd%2FIj6nSw%2BuMSqseW4cVoNSkOXwaLCBwW9%2BNeaNuKH%2FVtINTPv1mXEPgM2tdSMgge1j%2Fojw%2FFswSM%2BPWXPHTCu2kvOnVFCV%2FZQmi%2BEUpbz04ugfGNWHMLEdppdf7YrHlQ0YqRQIHMN6y4tAGOqUB30ByiGJ9TtkLXgKT%2BZc3z5arU6agPpZDOqrwvsi6sERwpocpI%2B17x%2BUq0jZnWZTRAO%2BmAn%2BZzZaHHdjGjoRSHMzpAvsWY9sn6VATHpNtIT9sJ3d4sEWVV%2BoH05CDvQcV%2FFDGo%2BdQ9LDXlismA4eKp5%2FKxloXKnBAATFBj9tXs%2Fn7wHONsvpYW9%2Fzkp5kAniDuJTAPl5OlrHs%2FCrenXh%2FmMPnfCRH&X-Amz-Signature=144b3627695bde6dcaa2b96207fac6eef57b00a1307448aba809678bb1f91303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


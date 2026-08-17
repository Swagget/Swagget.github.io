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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDSMD5OQ%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T151336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDviI3r3UPEIC2x3WLlkuxYIgFKwsldhYPAo%2B6Fh0q1uAiEAtX%2Fo%2BWrEgDKnZMD%2Bg%2F2TbUGI4UwpZShc9L1Jy8ubTu4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKKJ5GCA6yQtBW%2BF7yrcA%2FE6%2Fd%2FdIdlCt7cqVTccUQrm3BFB%2B%2BkAbM8yHAT48W3xtNXBYfWcs0XUdXgfpk%2FXVvh5s7r5H%2FCh8hJHSuI84cvZZbQA%2B7BVpnV3bhdt9RM3%2FmN7oopqIlxXXxarevxBsxx86UAbVVnXpTfTSZxmvPGT3OokalOCSIyjo9Z9uRq3Xezf%2BG%2F5C77y0OZhPyQwCRZaD5n9pdg08CujgolhZ6VLtjLX%2FVp8RJ18weMA5NHMd2sR64VYO2gvRj8JinDfqKmgsfbidjhc%2B8NIW9PRxYpOrsl8GcMRkOWcWxBM2rUq4ljpJ6MhUTR6l4AlZlAmGRZ8BDbWc4J3Gbvl1giopdAsSXtLLri7DA59am7B7uplG5WZr1ET5msUQ5m3Mm3wmYOK3yuGLuP820GqdHGSIKw6fymDiRi81oROCyW5jxm4eIlSyMX%2FKs4JSJKQSvcTGn3jAcc2Mvgsihusi5SPM4YTwLzXf79u%2BqWbhYV4RRQl6%2FuWe5aUr%2Bx3Ev3JvNwCIKEGtMstiENWwxhY9%2BcZcM0g%2BW0qHihBkKEF1NfEKfhfc%2F6PcHpMjZTsEtCUszcqGpKVY5TJiTRDqi1KNF%2FDZkAPd7ec9H82ATVe82Ts2xjsoo2FCWQA7U7JzGVCMJH4i9QGOqUB%2FcPlFo7RJPpazbJsbJBfHu0%2BNsigQSG5Kx%2B0dRfohE73XQB0BSaDAWWjIpSn22MOslmX%2Fx57PrYC2o3Sk94ODYfCWnPUBRech1CD0YbqA5A%2Br9dopCvUj0MA9rG%2BAdlNreA1yom9ACpEYRuCy9t1GUnVXcX%2Bu1RxcTZGBUAPWANVSxysqnWlh%2BfF3oE1u7jdmP%2BG38fvQxaHhZ2qUu1HWiR3y76M&X-Amz-Signature=d237137892fece4a69ed1ead51c4e0427bb23de248a683998cf09825e8ea4593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


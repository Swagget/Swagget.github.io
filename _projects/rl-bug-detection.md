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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX6F4AVQ%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T202440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEXR71hkaUeYwKX%2FMY3QfBSv%2BJBWBO1028wMBqdiQ4GAiEAnjkzZ%2BTspux1rONwT9UTaeDq9fQvzn2kEn9kGUUzkdkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBAkJrjMIGPRreUPlSrcAz3Py9qQ5o0HvUtn7AF0Eor2sBz2l%2FOz2hVAyZBbzINr%2B8RD7wRx7khb806JjhnCtkgYtZSVazIxrq1MkJUBPtQv%2FtmWhHdnwmyyX5xSAJLK23aFQxJdkpN027dNnNwWppkAcGk%2F7XJXMdZWslQDJuyGVtHjAD5Iv3bbUSsEik6KoybfE7oTxNoNeBTPNzronpUmXfho4HbR2gFupsbWavavttJPjO8vZ%2BcQK%2Bxd0SM7uNLBmx2dYAQ84N0%2FOGEfvQNcseGf6%2BKCUTlJQLmZHhf%2BK3vXnyg5Yag52oe7qHg45RVOHCdzLo6TA4kORhtevPf7OrX8L0KhW9oYrjGT9GnF5SEnTodOySrLKjPWscf7KONsWX8Ja93hbkcEmes0zNkHRaZs3hxUq%2FysXOQD9EEBHXzGjPCCKYPMakcZROhPZZapeL9Wx0pYjatpNjyNc81cA2IjpscVK5%2BTSETX%2FU1h%2F6%2ByO8PenpyQBm7Oz5DkGmz5G77mR3b1fkSoNC6ZVmrrO8VDJCUuj%2FZXXwI1PbCiBC7OiBhVKFn8scvcLVI4PMPQvWQEfvBJCJwiPzjDw%2B4o95R8QbeW8vtf3LQzKri27jh2%2Fy6I%2BTmAI6Q4oh829v1VxoFevU4sd3aJMPWl%2B9EGOqUBiXQID8JrO1Yc%2F6uxkK%2F4%2FLsTjLNgc8A2Uedmv9%2Fi4KcSCHp1r6g2QisZe%2BvYkUlXikkPRAmzxg8u1v%2ByLxtVSx7NZBlhEUD5P1LmFPZJjOldhATDnk7ZsqdB41tJI5sbg2y%2Bxo%2BsQMAmxrFK4eV3dRs923tYSB9A3qmkOLLtcrIPQWav1%2FXR1vmm%2FV8zebNEck82AGpM565JkzR7qS55CUUWFzBr&X-Amz-Signature=3b62ca839374d7dd3d3876dc3d1554d18c30394803f21172007f466369250851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


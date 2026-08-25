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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDPIB5QQ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T172053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAVUU6%2FbKk3uXhBnx44XJdzeD89wJCjYGHmVREAcK%2F2OAiEAgSfNinKfCuWmz%2Fe82VbGY3LgObfmNNCfV3IB3CbUydUq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDETgByl7HiJM0%2BwYmyrcA525dEQuI27MQ8Q4nWX4Dr7t2NNTyeChIYKwoRxS%2B57uw24CBpGDC38S3M%2Fj4vM3vjP94%2BU2OtDoFotpwNQ47m6ZfuQW%2BDHKCZg1CIMS1Yrj8LMrbdwM%2FbUlN1e7PXg0vH5lzvYN8XFkK0PUxA%2FBZuTdz0UFKWLVA%2FX7gTqv8zozBRIMh3Y9%2BouvLVIvy7VYvOt041A6HAD4oUx42C%2BJCBUoLAlKSlqe9Uokyr0VhkzsP7Rcaist4WtwJvMMeFwmrpnGtoqdr2AYe0RFJobhZtBp3aN8jUM%2FRex1R8sXSu2gY3SxqtwocnE2sbJAF03nUfrmDxJ9d98VklbHgP8Yyiml5C7XDtpeuNA4PpQp2GyDR%2Fs4MPo%2Fdj7yisD2oMHMioIa21TEImxpu2FqIRHwIc6o5rMVQIUZPE7dlqBLQFOpQoNrnsAp8NHOqUVtNSGFex1mTDTHotCiniqiDXyutdXlrkzUQe7Uw8difk7WDzyk7M19eZsWbZAR%2BPTcZGOQi2oyQ7oBf4ho657%2FVyREAUzdqjnTf%2FziVMxKpsoYeJkOBv1fqFZSx197V%2Bt2OEhsXkE6hkEz6g5YgUTzuyOExnj7bDFp1GK8HXymVsfDfBBxpVL6VM2MKi%2FCMfq%2FMJOTt9QGOqUBmt0fER%2FaywVy5hIixCgg%2FMPRSI0E5JquPPkfis7VhFyJrXf3j1LXjCsWIZ3n1QI%2BqKqd4DUoeDrSjOJW8IedPbnO0DQ9Ppfc%2BOzVFAH0pASeheLPvdDZyz8FRDQbn6hfBbQ24dI6%2BpIv7ZOlrtOHp7GXjD4gFJfXaVN7Ij5vSImxzJKvTgeeX4QtLOCJ7a7ppe2B5rg%2BKv4AARgbTLkG9yxwVm2g&X-Amz-Signature=4976ab03899fc9a80fe20719fb3b36c31e7d4a38c4ba7bea53bdf6eee926f0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


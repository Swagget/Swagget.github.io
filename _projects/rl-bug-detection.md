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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QDIOTL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T005235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPvNrT%2BwQG2J9ckSMOp6CJ%2BSbIJ2Uvga5VFLdmhnFawAiEAo5QKdWJi6grssNXkeGbBTjgk5jvR3s7Pty1NogOAcKIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMFIIdoVm3ysGdD4ircA9NeOzybqjG9UQk9jKKF6ba4c4OPUBoLZVc0xKD55lulWoW8tCQQhemd7Gvgx%2FoTCT%2FbV33ZJFx7NbZQoA63c7DrHen9L3aqrh8%2BIwnkx2Spl%2FBklBcX3QTkTidNNfKHA9mCKdO%2FJqhIXQjJjbN8JIP5bhb0Bim0dCZTkQvfvRVw5V%2Bro6McaI8JzTNL5LPrguGSV%2BAIEYx18hJzxV05OEmf1I0GxyN1OqhZ4djiP7a0rddCDwKtpQGlZW%2FMajqq8TblFuB%2FIguGo6nlvzXgLu3P57M91YIMmyCDBVpj%2FthCaOAK2xvWXuSGKspgQv88c9l8FX2jR1Z0z8o0DIXnfSeQW6CV02n3WRpLTVRp6wSpIWD7qWKNisQpc4J64nV3aIXWSZIDmrrE8VzbgJnZcvpGf0rPbrdytWebqydvlAFiMokJLbu6k0BAcSTSGTyjiuG%2BVJA5WVDLLSgjJ%2FqIqxeGA8VhZM9QTD4Q417gfDL0kWmVUWGQpikG7LmChzDG%2BchCxgoAihwiRmg7RQcuBTKm4jTwM2bIHYOu8bdTLcUONnPt8%2Fqv3MW0wiTkXDXx8DapCXRUAte0aK1HCKAUk%2BfpZICvV4b4fvn2OSASHyx%2BQ3NBKLAoCJ7myOkdMJTp7tMGOqUBlo9xD6qLkuJpvDD5Xg5%2FfoIt%2BE5kKevVpaGU%2FcJcEsiQLYagfrgD%2BVvC%2BCls%2F78KaTXluwxG%2BqZFcN8O%2F%2BvOtXUrga2LPyuWxHoYlHzqOQrheZC5jeRu31iOMBBsiYla8zWY9qjyqMFIYMS9NFcqO4RMwFL9f68XGL5cWpEZZUKnxtGBr4P3QO029w3s%2FAJYqSEjGWx%2FCd33PtlOw972yVJX9KDT&X-Amz-Signature=7830a2a637f504f4e1075278bfff7678202efeaf59c9233d0c2b1ded958c8230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3A7IP7%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBdj9NAeWTW3Xq%2BkwBTG66mxMDcT5DU%2FN%2BMsWO7EG1pdAiBLX%2Fbo5zvVjMBUWhxbqwTgifAceMv2HiWlLotrwVzecCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKigHGOk3FOJt4CQ9KtwDls3r63S7bis%2BAf%2FKSeqr8FxWUHRwjMgyZKpU8j7tjjB4XrRcOMKKa2DVM5t3bdEo6jvBEVAT%2BaPrpZQgAIGGX6cd4OinEhAFPukwJILH8g5o935npVEvyAVjtE%2BWm%2FvAyPSA7Fo8yrFkScIHg8HVrGcB%2F0%2BhARTtOx8ZSBbqhaQ8hQ2XJx0553pumzyPgVRZrAyAO955rT%2FhoZJ%2FoBzZ5XJAFs1txX3aFxNxr1bIW6dxjaXgvVWwoFp7i2vz7o1G3xxjMTLm1v0zW6ESTINL1iCOkyBz8VB%2BA84QJBKgyChOwMRu4ttDF6BluWJw8atEaMlpK9LaTPn0jQYGs9cVoCz7x%2FZHKV5OdSpIVtkPO8brMF8Wj7%2B1lOUeCiZbaTKbtAdjlyZxEGqBtMbrJ%2FOq5ttgV9cEHV1%2By1gjxAaHl2x%2BnrQ4kvTBBACaAN2JrdoJmvHF2ZFbejUiHZX07Tstutu2FXQq4rAy0lJDMbu%2BS1tHS%2B5JJ0iMmJ4WO%2FQ3Mu4X0%2BFM1Z2MTKovv3%2B6IfmbbzXl8AHEKTFtnAQxfZj%2BZNm5EpjXuv0%2B%2FkfsOzXjU4e9TsKcTMZon88lIb5YOydbGSD8huPyc5yLKeN7KSWiD04uVWGyzAsRTeCiirIwm8%2Bb1QY6pgFnP7DmckHrXBlohkggEs4A%2FLeOYwC6eztmppq34fbiH%2Fr%2FcDVfQwLDoiRnV%2BEI88nzveZ0RGZisb9DWFx4UcdM25KjEjZf%2BSgJs3ZQ8Eq5NB1el6%2F82v8QpTX7BwiQDsij0mK31XJIfDgWp5F%2BsrmJzEF36PJWwWpbQvABiI3RfdhlOKwBHJ5jQZmDAiL9DWNyvIcwoGNI6s7ukgVmZ21BFplhyom%2B&X-Amz-Signature=c09de2d5c09c17b7fc41dd594eb5f4660f2af7c252df73df523b0145dc20dc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


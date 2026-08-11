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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYVPQII%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T123523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9Z0LTbF0YKrE1WSusPM77g%2B4BLhCi6zIfwUAKK1A5sAiEAuxLGtlMWRExFAv4AmzIMQpASKasxWOn1SqUn8RGg%2FwoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInk68M34shdIsk9uyrcAyEobEFw60%2FqpPpsoj%2BIjH0rEtwNtOT2i2mVOVank8h0Jat1W4QdI8UvSOjT6ThIjkF4pjnZneEfVvAmBwqi%2BMytdBUC72rD2iDEKAry3o3jO3df8VkZi9oQg26UYR5YJdF9vDsK1EyLY7pzQltatO5YIs255%2FNeA0Br1h%2BEBKih3wfcNujCGSff0PxlYHa2iwXH6xxXaaGZakt4Q5d5ZxnSGB5lo0ToJwMbzE66nrcWT4ZF49OdCW%2Bio%2BKA8AoRexpp%2FiYudlgGgZ%2FX2Dvee74sq4FAssBHPOmM4RE8h08EIE1KGR1DviYRfCV1H1p1oAodhaUZO6JVy7rOcx6cGDbviVijsdaYDMm6Ftz8hZlQvg%2BbwbcXeYwA1KFETKJMx3qSawph%2BnmHHUtoGI%2Bnc2V0TNfzbF2aHurSX5HMvGLC0VXJFkEAoIHz%2BEYukLxAwfXMNnnEIqCFJ%2FIqANs36xpcTJHYqRuA3cWYC%2FJA8OOUfpwcXx3Wr5Bg9AgG1sxhEEL8uKIKaQ47HOSwa6Ihz13mnShV%2B1BfX8oJ0Qryk9yJbW9vVrQo3rd7O%2FOoPNNZQUvt8z3gvZldcRu0L6p6G30DGS3jUeMaTRtpIIaIMZwiTc0Q6fUxIrheB9HvMPWZ7NMGOqUB5kFTnOpMrIi2a9RETus2bnrw40uJCKdNQuqybF9Jss3Ry8JhASgwgwaWZy4SFMDQfxC7aszx3Jc%2FuFtiDVgLyHc5GBG2e1ffyPDVGcQtaQfvCKIcbQwL2RtFVMWddYKcPOcnHs8iiU8MsUJJljwQECJt6wMM4q6EINjJpKePg2H25qX9gKtlITAAVr24eDuNObFLOzfVxV7J%2BXBuIBq4KJKtrsO2&X-Amz-Signature=30fd0f24f58bd7152974ffda5b3c032df6ae566e6ace3bd27512165431cb6993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


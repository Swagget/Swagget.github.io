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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKSQRDUM%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T195831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDX9L7a17WUjC3PJrRhxJu1P6OaGrQUxaTmHAgTRefJJAIhAN981Il6Af7NIpeDnkiHfPmbjJZSijBucRdmgn4%2BDlH%2FKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy25YOdK7%2FvOr4wJGgq3ANn0Kk56EjeNVlnFSV7ZijOj51Jlogg5T%2BwVNncvvHlM8Xa0LWfXtpuCxE4GTMMdGR4G9GrwYArzXVSGgrZeVExbX8f%2FNZokkgXFETRH2Id9KzesHp%2FOWytIuN8lYhYd%2BTmDCVTfGh2rMX2h%2FYCIUZn8v0iRnETWMz6295l7bNxVmbDVA8puRShCRrqnbtYw5Kw9DasoVRDmXfzk3i7NhopeV27Gn9i9GsNNTCC6XitSkvbJvJ8HKUNmTnnhaMPWs%2BcP5Cv9VFmQQCQk9Wfqsf5P57TFMCH0pgS1qvbiF8LPB1JXkeh0Opv6KPvEvxm2xLRq8shqqbrezNmL%2FJytuZEQR90eQWa5uS7L6AtL2Z3JZHKMNg7jK0qM26UGh4yyiB%2FuPPuFWScJnNSzSoKkrvdaLjd4WApoQEW%2FpKN%2BIIDW%2BetX%2FyM6dJJLbB97HabpHl3hrG8k9S1Sr3J00pRx2yYSuve4EGyhLabydavem0ZuyUDBc11uhTrYw6uCP9nKaWaRnfDX1rC2yWEngW4WgU3CJqFCr0dWUgNSLX%2B%2FbcJ1Gsv1cRHdKdrW9VVzFB%2FAqN3aI7MitvUfa4P71NK%2Fsb6JtiYqX5u2yWMAQECW7EgSmdXOtBJvbRS4FCoHjDfjs%2FSBjqkAe7MOVFPRahkGEt86UJueW6p9gJZ7DkAyW40pI16VhzJ8LE0prDdkqMEf5yhzFbYa92FfsLFNqiBE3W3vx91J0oDXyVW%2FYPgJnL4iMYyNEd3MyUA4kJgNK%2BDqhGUpkSbC9XsFCvd%2FA3Xfs9BvF%2FW4%2Fz8HmjFY0cvwkSWgE0Nx16iCObjMUmeECS%2BXzOh1kJ6FqsslZLkG2M1uBiAIQcAkGPv2VG4&X-Amz-Signature=56a9593f865f4c86e89dc5435771404d63d611ff758e326b3cf227f60a81e9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


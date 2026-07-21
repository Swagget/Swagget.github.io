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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFQNAGKV%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjv3AvDWrGMDL7fZN8Oz1zp1YlctIdA5t7XgVzl8myDAiEAg1ft7qlY0rYIixkPbTjq88m%2FVBee4LKp8uC7PYBhVXUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV86pW5pVsoqGSocyrcA2VIXLvIs%2FPAWdz3Q%2BrqMJANeTyyTMb1TLZjLWkxGKjDkQPsfl6bvPpCu26yQifQEGD9ZKYaii7U9Skpw5sBCtV8C%2BzC%2BlSv9LI4r%2F77llnLEVp8df3UoYn6tOdrj%2Bfto4Gpo9u2i93VNNOsOTNM%2BEiLUmPEj0RHszztFvUtNPG52ljoXYqz%2BPebLtULgHzIcOMpbGf3hVX0UUuGlZna%2FYJyIQ7gq8EiuhMX7hlVNvBKkMJ6sfL3rqXNh9BTjhlGnvonCPtFztPXqsHNpVzRtIPfuoVd5TnOytNZu%2B3ucuLPvbNvjWN44Yvg3ruIdkudO8U%2FEMbhsY%2FCXWNjMRT25UWETNDQsuUMJ6ZMcvXOJd9c59IXfwxMJFH330%2FqiAWSm9SkEO6WG87uJ5b%2FKllBvDKJtE%2FRCmyyUKiTS0t3trVHqmlwWtccVECausfR%2Bz3D2wwoauCSvhlgHEljH8KWr8cQX8tw1uvni8qjLB4eTbJ%2Fpsv904PLQBww6rC2EYsSxK3A8kVXeZSNDy8n5y%2FVXBcHmqhL5208dMcYh%2BjR3RRRNg4TQarZZNr1ql7kIpHfjdxEEltRZMTfGp3e1vq38eZ1XivoWat8JF%2FBvmJU3wgUCVlAzm%2B1ONmDvEWnMI2n%2FtIGOqUB8ltsfowEsbBtnuw1wULJTtN4ydVNQ4DP9D7j0Mmsn8VNv%2F08tXyUYAzctUdkVFebNfJIL1SqRS%2B18t7fgaG%2F89FEiWUO2E8G%2BFxnRrQPRvnnyBF2RLmvlY73aZi%2BBJNig7css5ANBAKbzmtTiwtZOejQJpVww%2FJO%2BBMsq2NL98ZaPRagKbn2xQuI0wp28GRq1o2FSOXQaml1eJVcTDvizO1KpFBU&X-Amz-Signature=6f949ef198a5b482a81ed7ae6cc8369b05fd0cb71e281a54bc21af0e348e8789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


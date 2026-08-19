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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WX7GTF%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T181459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8aOvA0nLNCVg%2F1n%2FuKuMO3wVE4r7LXqIM3gY8psPVOAiBqaiGeRVvJfg3f4gFb7VO2r7j7yj2JskMeUIPbuPiCRyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMME92%2Bl9%2FmMlEykZnKtwDMdK%2FrR1Aw5ywh%2FVY8trSNj3W%2FVcONKTrjb7tUMaT4ShnWfMxXf1M07X4MsHnqtqY9hjeM3VksyfEys1Nc7AnrKsE%2F6WFS0PTHVKX7uy2KaZrjBie4wsEJ5IOBOcTQBgVzMaI9ZT6%2FVMSJ%2BD4iDqsUg5Gg%2BqfyykiIQZhn2yvlASrHaMBsvncmdx3pMpUDo1nrCHA8JiBXiHBghQpJ2tSu1h2OLXIOjIYTZkgNI14R3PUSjGqGxvHOxer%2Bsd5nXOs8xhZ3YnjchrTZ2IJVTFxVzfNSgYlFMBwTzCPK8GUNPpLwFDXkuW4TNa5J4w1XPO%2B2DJ2ntu%2BVoJPF96XGlSTqz5WmdID8gCXPMdgL%2F3xMjePb4iHRSwy5ncRS5qI69XIRJ15DAQd28abTEiN2Mlxbp0P5ER293f7B1JJPVHYBZ81%2BoDzBglEPAjwjCEf2kd36s%2BBTZVERdW9OEV%2FGgGrVatystX4mQsMEPMJ6eizsdoMvr0DvRNMbzGHb8ruRX6zymjXKsAdzmh8JUErKl97ZKiHWkU16ZCn5BNYvDzDxzciBgZx6cr1k%2FbSAEYZzM9RaQoQp5YtkE62kHCaqWwfp8bIheWlpO3A170FeIGKymxGFCIU1SDZr4SM%2BdYwodWX1AY6pgEasKEqLy33ZfN6M8gRnbFxRNq6%2FE7VTPhQIXi2OqLcKqWAt1WLzsYAko7KytHFXQm36b9p%2F%2FdIOmn2bZ0rz3Md1JujCK%2FrY%2F0tPmByMRQyQpxfcszLNyKfmdhLJcO7qrwwuXbShIYgK11nmG0Q7WYEvvLkxeCev2Gz9b3NfKgjeF3Lzv6bjxryswZm8tY8gPQxT%2B6h2M%2FC0d%2B%2FUUZJLleHGgOY%2BpyC&X-Amz-Signature=a6a6ce4394c839cde2d9a9e4acdeabef43e7b215f23d30be6b10a30a60ceebda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


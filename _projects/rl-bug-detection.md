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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZ2GAUP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T072325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5ALdC%2BvvDbd8odzEMVFkJFZLyrieVDRVNOriCtcmkeAiEA7Vm4e%2BDlcqoZSjH0HhvIG8BuBwAYkxAzxm5fePf%2FTR4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKt2ZV%2Fa387WSq%2FPWSrcA5%2BepVN%2FTRL07p73S3SeqBGI9igwB%2FpL15nACiV76wZBCV9h08lMIB2oOEOn593GRtqKpZz89Ee6qoVSdxAFYQ5iOu6sww9aoQcLPeKx5Bqsep6NezjZXw48SVMUfu0piC3pIt47v3gNRIV3JIImVQkjvLeuQT1567DFbpRzjVzS82okmYXfQcutSXx8Ef1RNmUuRl6PYeTwji%2BAKGEgz8bCRWCOnRcWTTQjEWvHkzk5w%2BzJLCHwJ7g7qn36XVY0gWCkiEd0NKpecWV1fA0xQJI2%2Bxzx9bsQRf6RC7VSeD2qFH2i3wMw5eJ%2Fu5SLu91hMzLaSx9PECIWnRylWWGGNFM3Sbzui9oLo6aTrTNs6pmeNBWEApSmXqCwgS6TKtMhFfj0PXpEFOg5osOSGubSzYEFzrFRO5kZESD8mAecM%2BbDh7kwBg6pCvdGJOG8huY8tjs7quJgOAwwMsmxvGPn1ethzI4RgGwDm1xg7Ie6id6I6gtOw3QGoLR5rD5AFI%2BTzgsE3FfoSEk8KQq1w5N3NqU87mr%2FAEVPe4MAKF5A24b8gMnGW6tgH7x54glJN65BDMV3BTN4Nu04vJR824gra4DunAFWSSx1LzOcIH8AVYsIvEHmuT1%2BK614DLZpMK2jztEGOqUBnfzOOUcGjHvNKD2Q%2BtSIx0RYWer%2FEvS66JVALp1Q%2BMyhJfADAVGuuYWssNtyHwDFtTYC1jgQsjQbz2q8X%2BaD4yD3SF4lWUmmZXApB21vW99dZre%2BuuG4vZPY5ArKB6zRfYwsI8HPwhYVpiR3gjqiH5fQLPDkJZV%2F1C9eL7kLsDgKLlXBlLKxek4uGmEm6CGV6D87kvmrG28RlOATXTgn53%2FSnYXm&X-Amz-Signature=1ec01e11b42bda283d89848837d6faf8e91541b6f3e6e60d5352e8444f9fb9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672K6KTNG%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T151527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH8b5LJ2SD%2BQzYCNwmXYjlJQ75JYJ9ZO%2BI4HkQjCP84KAiEA1ePDGVS1GtAO%2FAfAnDzvp5hITaGKQsHSlODIyYZo7Z0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPqBSQZo1curO1Iu6yrcA15ZHU7q3Cotz7enPbkUBaNPBK6IQsSBceUgS2Xn3FTGhUXkj8qr4eUXOX7vxIaOsnQvNAxFkNGrFYFw88F9Q4KRx8VW77ICPGmKt62p1mj0iaz8vWHcfbGXCzwOwMlL2oPQby0pURr3sbyXKpb3kbJ9w3ycGojBQoO0q2YXKfU7bj%2Fp%2BCsP2TFYxBZ%2F2YdXg26oYCLdGLRDsZIZurYXg2XEEKKAPG8SSLzdODObKE2PLZY8iaKImxOrxz26UlHR1VvNBVJPRqgtfdM9qsvRqRf20cxBnsjJNFQIk3pLqo2JCl9e3jTQIWo0DluqqNqCm3zJp%2BtXPlqqThZBC7tJ0acYoWYse0SqKMqf9q3bMwg2nt7LD1YDIuy0JIEOpIm%2FdpOHFmeLWYnkQijx%2BsF22xf6bSFiujHLzidXMChirm0j0de7K7Tiw7KvDN6xW2W78ErOjZmOv3%2F2dc%2BzDVscCYyED3LoW%2Bmm4w6ss%2BJhj2gWGD9n9vibsdeZe7T%2BK0jb%2FIcq3m2dE8%2B88of0KjISFPp%2FhK14HL9QzXC1uZceFI%2BB9Ff8RQOqGAiXnsXqzeepXDDFbrUvB8MBux%2Bln5a%2FCmHOjBO%2FAEFcKFUQa%2BhvGGjhzr3P38WCKgwZnnxvMOKm3tIGOqUB3eXaXLHB1fjigM6AuATygr5JrPc1aELvm7WG0zC5bcceJ5lNWmuBOKMi9BCnS7%2F%2FpEVdKTqGH7jSllD%2BvWediFaSfWQdqBH3VQJXS8dHck5M1s2crp%2FM6x8Bch9SXPVR68PStyBryWUOJ%2FqJTfUFq8BzFS7c2gZR45EMAiZ8J8elRnEYI0%2BBU%2B8se6c9Tv3TKaRKhAjrY3WGp5S3BiSGox%2BWp6fo&X-Amz-Signature=5a1299b601cceab29117dd0f471809fb03361b2f72ffb65343b9fa8b8ae074d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQUTYMI%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCXKl%2FS4u99yROSFVztu3dtUulZCASFSh7HdaPOuU%2FxnAIgMFtvZAyTW8qdBRLgfRGy0uvIFfbl2M7gfW24BNTv%2F1kq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDP5tSasycklmkgRuGyrcA9ooQ9ZtSNwpo8N6%2Bj0AXO7g8mrahzSKGkf9B27pGlzXb%2BgwycHV1l%2FfjHB%2Fq9HGjUbn%2FRuzxCMbm5RcJxl93YA7AcBSQa%2Bn5p8xdJQvmmZRhwz8aiqCqEamqICrSzcG%2F8oEe1R4ejipP3ddu1XPC63Hz7jcIe5pI9dOOPawo6P%2FkEIxz7sOPL6KzeHgpF9bcr0P%2B8Hv4IU3P%2BbKwSOpIEm8Q2PjPc%2FovWkM0VneKUnzzrK8EB1tyeh9wP%2FG2UVVe6%2BqvSoiZv5rXiDpHOKs44NiGFlT%2BqDfTO%2FBCvgmr76vGwKi3c9mqLxe7%2FmHBbMaTaM7qKbtmeLqCRDiiznu8eG%2FRKrgkKAgzwuxzOj7qW1%2FDa3AKFUwQV6kCGFbnDQBMKYOe0AfyKrfXCL8tLvDRWOj3QRQ6OJ%2FDdQVujgPhpCteFAxkl1yo8lXGqmi%2F4caW1yJi2ntvJznRDqIh4wUgTtT8QXBE%2BekGNnAfNiORLdiCc8n5Uw1SkwDNO%2BePJuM17W%2FefQSbGEQiNJbQGse3eju9jbjhvGSY9BAhv3rtY6qEQGm7tE%2FNULJ72tfszn1KpexWxhwbiOd4r98NUM2GpAlKo8nRGrJQzqOm5gpDV%2B6RfI%2FfHa%2FlRJYDk7XMMOT%2B9QGOqUB4TfMBKGUdY%2BkaU9conKdonu2wtkD1RE8WY4nkgnFl9ygvHtkad5CpypMa6uB2cXvotQo%2BkK7xC0w3VwCMhPPMA0803GNqb97%2B6sZJzNRAlgd4kXQ1RIV0KjAbmLf9o6DMsNlfV3CdCo6e2S050DW%2Bheicc9yBc6oCBJppU10kAhg%2BnExNge4T%2BQ%2BvrmWVeic7f4jSYWASecFnzWwD06A9AvxrUOJ&X-Amz-Signature=2c562666aabf62d46038a47d93c1ba42d5600442c27d03e4b5d67cc28bd9fc67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


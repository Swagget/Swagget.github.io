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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSCEQPW%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T191056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsvrMJvd7tjMw29VZK4kmVtNY7e3vhnkRlU4lgtWiOuQIhALpnjALWgEECjg3I%2B5H2mGbJoAM0aQuDtICdl4l%2FnoGEKv8DCFwQABoMNjM3NDIzMTgzODA1IgxJxGCYiJKj0B4xwGsq3AMLgBJqknUhR9mVRIG%2FTGOVs6J801HyO8lOmvEtJliobwKbigCmo%2Bh6yGyZEGO9sH08k%2BOcD447Xt8XEUVXxOeu3cHxMgL0ryusORDvgUE3ti0KeYaz5LA3y%2BNg9KGtLT3xaBrqILMEN%2Fgna%2F5M0brDO6KvDeH363oIFXILOqawiXqvRgpFbYlwIxcwO%2BkzFV5Pjbnas1FwMzkQe1G55fak8rjcEbwe3qxr0qfz2W50hVReYc%2BEVyCBpcilh2YRYuOn39ooRFS0dtxKRDN%2Fj6DEKUNSSnPGu9jUHRfm8UOWT3fFwBMu3UedmolDPl8MzsGbpaBTCB3%2F3P6y%2F7JAILn%2BCoq%2BAfdv5L4TJxjVddlIO8aUN3HLWZzaI3vcXTrrno9osDYscYVoeaLjm3vj8wrMHCNJw3yFvyJci569gQ%2FPKFRP4GOUR08w0m7hxGxAVpfDw%2BOTiRyZAiIXIDovQl3q5a1ekbU6pBzcJ6ulog8fZDamn%2FudLuCOkUvBMkomZQ3ucY2m5isC0x3%2FLsolL6o8T6dqlnefuELDhpks1nMaWhz7NwT76JL%2FFaFUpQ5pprxCjNJRMzg%2FTdMYeRAZS7hQV7Xgnx%2FqLCN1Iql%2FagdaiFP1k4DfVVgcGs7JlTCii4fRBjqkAXpIEpfY5WXcwM1zVLzNXTRkQrMiDJO%2FHtWNv3X05FcKWitLly369yTdVELxNWytudDQlWnmxEhOb8eVDkox8QQuqvC%2FJWze3G4u%2FOM8g6i%2F5TFQO7IbjRr4jkEnX0vdTDz48rq4uixuJYwdzuZcQcVWq%2BLsgKJCngvs4EmROGIjkgjEe2VNLUq8KpKYLtoYzJbTVa8R52UxXuFcszRic5fbqGFJ&X-Amz-Signature=da1768e2fe8ae3fceeb7033157e9827cd86b16fb997c1f766a3c026d6a935be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


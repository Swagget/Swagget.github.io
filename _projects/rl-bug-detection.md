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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MK2DAEE%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T171527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMA5udnM6dAljfyZsR4%2F%2Flp%2FIpOlTNdOLvPqNoHa2sxwIhAOYdnyYHiTI5TjcCC69sxCjUDWp2E9mmNctxGtiJFvJ2Kv8DCHgQABoMNjM3NDIzMTgzODA1IgweNAMFJDm1X64xaRUq3APiSltyecHYWxjIv%2B5pTSXkwMXC0a%2BoVK6mKaFSqKNluHpCoNeOLkjUi0ZX2eTmdrtOg%2Bu%2BqkNRYPUMOPeAztUYeFzmSINSEIdR0DzKWSiu42iCEq8g0HXt160U9RcokbNUfDeH8Pg7yp5B34ManYZ06U1bmaZOjmIPqQp6xLdwurJLTS5UVl%2F8TQeKgaakdj%2BMdjubCyZNk9me2mCnIToaGrnCwDeDCkFi2YliTpXCP3FmUMDtj9iH0f4TBrQBCj8dUCMes0kGNEYCGE15d8y03xO6h2%2BJbOdqlmJ4KT%2Bt5IUqkBvLhHEnm2ixDwim%2Bei7koNw6YXis4QJcRDmDGBPQBUs00wwuSp3TfqmPbzG0E5Ldc7OJb1fQdZmINmKYuI0OoGJkOTDOSvQOKcs9txoZdAkymCcvfsLQcpjTT4X2TrPvPnc%2BeHUnpU4hlz7dE2WCZHO2kbQDw31S4zCC0yk3nb6Mzhuvnr2J9V9JF2SXyYiBUh58H1pPCPFfenQQW6e%2B566WzU0RwhjQZjNcw5gk%2FjL6KITz1iIVWXHSLRLabRMKTkbAAQLbXciQao0WhqGWJaou75CIGmP1LlbvDJruVUZW1OqnOJ0OulUC7BbQ8kjShlj5or3%2Fcf65jD3lZfUBjqkAe3YfQGgB%2BsRRHuubUdq0WfcBHhF%2Biq06weqsQKXI7SfdOVH2LXUBtIwnLaxXFC1E%2FtXazCQufsIbZbGYLb6k2LfKnl5TWHPw4i4dPgvjllBsb1v%2FFk1t8hSRl8QHUaYFhQxmhPkxl%2FBwwO4SmsqWs5I2nAFukJeAIiDaUu9flVVM%2Bp8KoQDv4NimjU3gmN6H9m0o9aNdRPXRiMkkug3WjBxs0n%2B&X-Amz-Signature=49870cd8f445e5e23751616becceeec6461a41a2ef6af23a41c292b85bad46d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2PUWPRQ%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T005023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHtw3KsPcX1VYvDqa0%2F7XVe9H3qIKmNYenerzNCQvKLAiAN%2BbFJuJjCSMXd1C0Kq6%2FY0YGhTpggyKZeF%2FzDSBufxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMD9Dcc3IwO75J5fIvKtwDJQj4T0vRCst6SMqoa0rUVh8X3ERqo1rfL3rBE1UAlS1Rl8B4eWpnxLIAFJHVwWEWf1G4vPqB5T08nZNi35ulEB4WE6S%2FgO1Z%2FA06nZr7ARKNRKdLAsTkEmWf%2BVYwq2F9qG9fmFIjOYpgYequcUeEDPQ%2FTwQdrCN3MkzQqfId%2BAgEyUwCp49UqTr0dDTdD5hKGLJ9hDtUNyucBMGWYkmYPYqb5UQmdVsWqjpVPpd2nMZFL%2BtNgtq3xDTFqJZB0KpmWNf73Nohjb7%2FqQqlkk2NmmOAbG3Bf6ClaVkXAljM6B6HhIkmHJMD0F2WQdGRRxymnCl9hpca6zrmP42Fxd%2BxJBGYvYdkmyciXJ2UbUFlwxFKOZEd9aix%2F%2Fn8%2BNKEvlpXvtujNxMHbIukX1dtr861dGSbr7c9aZHDkc9GYCtPE2mTbCAcnAQ0Yuqu2HqSgCkWl27ayHMfy%2Bsdc7bp47uT2arbV8mNlh3jBR3K5e1DRuS7Ldjbnx%2BNtc90SF84CSmY1b2ozwGG9udogNTQIxZegYekwk%2FN2fr52fP3nCc9QP6emKJeplRqX5%2BO9sN4Y4Ye4b%2B1rWxr1aS%2FpZayc6hT%2BSM9vR8V46mhLM8PghzNWqXD4XiO5nMoOGuaP1Yww%2BnN1AY6pgEFnJ7CqBrG8T4SAqhfyURzZqqGinHWfA9nzu89gHDFvx5qWTmWqJxPY3dGD9O1f87lP5nOQt8Nf%2FOe7hrTNmXM5Gkio8kDnEMLRSf%2FiHbg6Vv2SCyydCt%2Fo7SS%2FHKnzV18U7zY01w4kBDh6bAALbJCtXfcDKxL2CofiweAJybK0%2FibRLwr5KSesddCnHOkrmHkeJKXO4TwC51n9Gd9ck3g4G1sF%2Bnv&X-Amz-Signature=fb94186c5ea6ce26631be500234a5b1d9d95ec5d4803b40314aedf7d00168cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PP5YYR3%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T145246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpSzty%2Ft11Dwz6PetgoPFes%2FT2aIE1dqrSt5Kch4vk7AiAIq%2B8wvYQJ5XVSZXgSc0S7%2FMXMC7Z1ljw6SmXEJJzB3SqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMee5m9M505I9sT1%2FrKtwD8W9i1zIjv4nGTSKujS5OWc1706IW7chczm3mt3wd4El39N%2Fjyfa4NVe9%2Bc%2BsVI66yduPcdcNxYiRdlVB%2FvVcG5F0%2BAmMRcWwXqrBqscMXASgIOj28l%2FkNr%2BhX8uOu5nJ3yLQnumRBl1YkqvjW8fi6XKR2QGFlqlsaVyYpEnK%2FnyReFL%2Bmxsa8c63Xdrwp5ggJc8OuQp5AV%2FuNVmsmcfKvaTbohHu8709ER%2F1Qiaan53%2FQ9Bj6aoZtYQpyGdyZHyrsFD4MQmPLQ0QTemYdv8N1qdVkJHecywuQRj32JrHKDLesuzl3WRFSJprQm7sBo1BQnSBFvrITvXBIcwIQWBzJAJh8z%2FMm%2F65HtpgQBoyeA2cSkp85jWCX%2B%2FHowSgCpflIt1hh%2BMnLasAvZpby5ttgfWnmxtIEMxMzj0%2FEIatvhrhIkItCBAJZ15D22Lsf5reh%2ByAU5pVVJLhAKa5MRxOJu8k8gFwv9rwVL42U%2FLiuRERVa2thKohTkDxdcv9rsYOJHvPSF3gfKE%2Bt65ZtdgdeHxByy90jzTK9mWJfXqMgiAb23ZWLSiFuW7MOTrhRyeV93Wo36Tn0B%2FMYAG7iaZIwKpoqTFPWBoeT8qt2VL2XGYCnb2DillBEvfx0aww6vf90gY6pgHxveFfk4%2F6LYt7fsaKq346F3jV%2Fk1UGvGBQmRO%2Br4BlrD4qa6cByh%2FSvRAGIg5cGu4%2BAJnKpjp%2BPTZZ3HbGLFf%2FfwpGIljsfJx%2F70N%2Bdyq5KB58qSQkvYhCb8LIV7HoLoLilHzfv%2F3zERiQZHGFFYySi975aCgUYoa2pGfr4TZAgVqdrrLB5eMWpu1lOssW7Lp68oq9b7uKTbd5egDQT0hSaAIgnpA&X-Amz-Signature=74c4227a49f5eddbbf6ba2f20ac4898b4ae322a19747f9ade97a9843dd49ed84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


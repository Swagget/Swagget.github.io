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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N3DPGAP%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T121232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHWDHCNimFayaaCiTGbci5eSebZI83uxpKp7iJxTVBtNAiEAhxYaW4BHv7JtYYCvoNoRvdgF%2BnFkGzbEQelmgLYez00q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJhW9EcZ1UxSPFXWoCrcA3pQxOtZtFuR6Y%2Bo5Nwu0A62DZR6HULIj1JHmGQoD6aBIW5N4rHinhcwOJ%2BXDviRKb8ggXyHrDkGajIJABzEVr%2FL2Y1KMEaiiAVZYOJRhoaXeUpm%2Fpnbuo8Qh1Q8XT%2FUqrpjF0EjbyXRQ8fjziTmJCc6VXRZjRR9Hbt9BkaeoeqEUD8exEnUEG8GyBwArXCi6y3OA%2FkeQQJwLe1OPPozNUIA4Tl2%2BQ%2FCksTkXuijXbDwPcHa%2B%2F2DOuZLUeaXZHcU6h8%2FMXFt7gR0RJiQZNEA27vFAywzGVpy%2F590OX1Z96fjtp%2Be3IQpWcYU1P3aX9Vai6tv1%2FvJysdFHTRYJAcny75NXjpxLj9KZQ%2BxEY9xGtECOTy59%2BONTIQi6X4S6UVwv6SmEwP5NtQjxIRA80Rf2BjNr3nbO7B%2BZpTfkQ41iHbRjgo3tPu%2BnVWEAhBjCgcdiE6eSiFKjtwLMe5FZuwEQUPC%2F5AFSbKcawa8U3rm91aXWIdVKNL9X7FFevtOxquJuZj2iF15jF74U7ijfQVU%2F%2Fvo86Zi8HNK%2Fo8mfbzjpInPixTpo1zhx2w4O0v3LrkZ0NmgIKHXGg7yTonk%2BY5H3q5r5Z5DlULkH4s9khtWqkso8MjvB%2FAJrUMq4xjRMOubgdQGOqUB1EpmcSjHPrA0WauLFsrt6NS0VRTtLdAaT%2FmvnZHavmxoQph1VPit9JwyUgNfnGt1bBZ17oTunftKPi%2FsYJWMNlNJCfazRbt7hNdmLExkTP2r5%2Bs4JJITuo6mgEhqi3QBtzu5msbMf7TJ2nuVCLJZc6gtjHm9GgGfP65kJx5cfzPDgPw6o%2BzxN0IA50GmsKMfmU2D4ixpCJQrvHOoGolbTiPzQU0Q&X-Amz-Signature=49b8b4374096a198c840941a0ce7b32e3d52f11a9b45540f7d1904828e7ef99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


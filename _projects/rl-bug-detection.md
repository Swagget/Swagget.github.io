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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWXWC6C%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T195545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlHt7x4itvDmy6gQILg4BvFw4%2F9Zuc97Vb5D85tT%2FBQIgK8pLrgFueZj6DYeWzq2srFTaPkoR7j0JMqVpERpexhIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDDg%2BrZc20XR8EL3IxyrcA8gBeq51y7hmECjAJDaREdaxZ2e2ZaOqI1rLuZa8%2F4wYrE2e8dRI1Omq2jlMjzswnm67eeFlAMerwqfLaej3KPqyravuSqvfwXpkBI8tt54XnnXQZqif6peRWO0JPp4p2qBOZ4QFJ5xk4DRmpxkOOlJBBT0aC%2BBt0W1X9D%2B%2BBY9e%2FdJ2Hf3i4iqWT%2BI32sHEcW8xCrE4ER7AznI65M5MMcVrcT291CadPYw4Y%2Bwp0uDIhpfAKHQvMUP2i%2F7PHTK3oTIf%2BJD5jUSZw7Lpcr1s930iYrRLzNCI55pxWTq3dB68beS6RZYZTIjrpNey%2FirhZvZsChfw2sA39p%2FhdsLIv8bznGASa3MOwnYLaCRLP%2BR8E376hHKoCaAacu31xKe1Z8I88f%2FljwxDYpIs0%2B5Kq9hOORkotiq%2FWK2A4qg6dUzj0Gg5Mk4%2BI12N3Y4nREIsy9GtX1qi2dapHxvg6miOjTeHhSukTQr5cv6WJPVau5AAF4BHGxhhH8S%2FFCgC7XOJ%2BN%2FqLPqmqSMk25cZpJH%2BKxoHcfKke0YYG%2FslYOFG517PE0CGsEmdWfO4Wg5qlH0apSFJ5QmhfZthNzMZG2CtYpJJL5mdKjJjiBnySG7UF2gW7IfCD3%2Bce3XuJkdaMNGE6tIGOqUBjmuKrxujQqGifhjET4JI%2B4MffLXFQsCmnUCw1ADnqkGjDP%2F8lunUegettaOFoWChIN0KP3dl3iYIsOLXyxpa%2Bu0Ppam8NpQOcR7%2BMLusihUN7AXGy3LVXtLJltMGVh%2BA7kWvCc0oaDcWzOcvJa8ZXa7XOUn6jQuWuub76VweG8%2BP%2FE86R1%2FgBZgHJG3a%2BJ%2BuTVMV4uZHDa6C%2FHMssre0Er3SsBX4&X-Amz-Signature=ef34fd170f3a6d3bf27d0f0bbd28fb9308f61c3ae2d8510a5d27b2bc7e9639ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


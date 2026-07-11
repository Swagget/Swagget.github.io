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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWUIP5K%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T213655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGzMinuPUU%2BGgDGu389lTuoITg4zLHIPPXz6pPxFASxdAiBQjiPYlEJBhw%2Bld%2BImlniCzcmHF8iTj2%2Fu%2BpsMt5IatyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTp09ivO%2BWR55FqIrKtwDX3Qkj6263CbXFnUpkLI8B9WiIMSrY1zQphyRh%2FCXBZ2OSdzJj3XdD35iK1%2FZlvZNahwq%2B8A8PWvkKgsiibBRe0YF0XYMFcSkFrbt1Na8xvwpoKuVMO5LhX0nCTW1nb8HO4Yt5VjwfU6HDs4klyYfpLy8Ti8TYD4Ieq6K9DLGtdvLstYZ0Lh8f7tOzoXXvnBKp4PFwzI085KyHd1J%2FWa9bGpKo%2FHpanswAxzH0WKJxTkfyjtBS23LapjuGyr5Pd4UlyLjy39HsGkyUxjP1uOEJrvDCx5Nrps6tZfMBFxxVi8xFdQYytRJohi5hKNsJDGgN72K1gixcb%2Fe7lD%2B4sW%2B1J4nHHS8a8KZtqIZctMghpQugTgyIYhlMr4VdqXwg%2FTvovdwqPp7UF5ifwSk8PwV8hfDqdHXhp1SVwwdmtw4oAaAxX%2FAC47h328C%2F%2FmlX7WiG9dQd2y7eEx3WvPAkPMZaAwdWxPswHqHTUuXJPSokL3D8MW5VefX0rUJO5%2BzeYXZ5%2B1njrf3gMDrKB8hW9R%2BKxAwf4rOmw7Yqi1d6pT%2FBUbwCD%2BnpjdPqfZBJmjnvfEa2AhIuHg7q8qKfYuDiKpI8Nzi4yTbdTNpUuBLDqLgjdQx9YYofQs6qKDGxP4wr%2BLK0gY6pgHkqfsF6174BNMR%2FQwukShtuONmURQU5LP%2ByPUHzBqYa4aq6RZ1aUjhkirD7qb8wSgEjSwQaT7se7L%2FRn03jLtSRvKjuOwg2lqgMAVmAy1YdqgneNJquIySydpZIwMXlqzmmqae6%2FKi57RDJeCkWW42ajrND4LubLemFb5Mf5s6FtSx3sQiHd0q97SMNKTBMoElPcKV2rzLO4NOJgHC8qFB09Ay%2FFCB&X-Amz-Signature=8818a3256f76fe1061d8c4590bcc7155fa5db6b5d3b80b6971df2268fe11afb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


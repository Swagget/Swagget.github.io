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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEBKD3UG%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T034156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQD0eS%2Fih5U3aZ8xfIWRtxTPecilDzh0wA3gWfy6z4a5sQIgWZNBm08ywNXetTuYnVeDZbvbp%2FopaYZaB3EoLJNZ2eUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDK%2Bb4ETBRQMJgM4DcSrcA%2FZsx2hhwo0218GRz6H%2FoMbIxLHnJ98GWUEDrxybHCgQlyl3QG1CpVTJyqfK%2Bw9AqcvZlPTNd%2Fc9rhgXiR93JXlCD6mQyGxZbleDADcb2EPAQpuBVC46kLohiBGFA0ZlXq0XPYNMPCvM%2FJZ5vJVwtSxC33FuAY9rU4aCvZQEgNmHxpgdRTn4Vpu8QS1XScxwhvuIwD3sx49NaR6iqYJyR4f5XCBP1abt2c9X3hfYzSUAnQw6X7IEWXXou6MZWG9PjMxFv9QbF0WIcmUtxJaKojm%2FN8E1tQY3LK3SzJdeOai71tc%2BsBltV5x74UAUNXUQ6zYuLRkn9xm6Bd6Y4ZUhuyW7AhNd1GZvVyYhpaytvbVw2upH3JY1faKCbhpPFKXyhhgt6cyb9YJNpKzfn0EQ7AOQoPsYxadyUV3YbH5Ps%2ByKTuP9Nvg5G6s3hYlOsNE6vqo%2BAWiZrArjTaCCjOQkySbLqSq%2BBn7n%2FfVGFtD51lXExnIOA9tqMXVcAKPqDBfmlp0RHMb1%2FtTEQ9exn5K6m7%2FtIDvdg0UEgCVML2IVm3jD%2FWvkYkY8nk%2FLDwYS6TKn%2FWUZERDquqpZa9jsv1S4cxWeKilryUy%2FrI2gxEASCBFdgPa87EPPHAgBTyljMIuUudQGOqUBFzOwNOrJEzRUwCcO6Me%2BAxBh6mLf5eHt7%2Ffg4mGA8GldnwTdPZVXGTuBGoO4%2FhPWZGERGEPiCegHrmII4LuMsiJzehq%2BTqOPiMQ%2FLdrYwmpQLxj0CiSnlMUbCxWFfI9Y15tpHAbvCHXf9N%2FrcxwI9Y37LX25o1OIBO8XfMxEtdIC8LX8Up0ZgdX8RMZlZMv0ukVsEfwQzAM3UzBxiN%2FpXsQ%2BmCAp&X-Amz-Signature=e641a3172d9fffedf5c2defecc0701e4adaea66b89454ae0f1fa65f1c8ff0783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5QJNPJ2%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T234007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQC8KNn3JQ7V5FHWJWQkK2zn99HhaPW8HXY72RbIK%2BkJ6QIgO3L7cQ%2BHh2mVYTtdksyT6rNvfJezZofx0ERPPiN7BEsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7Vid9IY4%2Fj%2BfW8CircA55Z%2FXKTiJ%2B0%2FU9mf9JP1dIjF22EArrj%2Fl4HHDeKX28IjPzHgmN03z8%2BG2QlZg9bdmCIzC1n8eJh3NFU8uRd1VKTl5yeKiNmZeuV0HgORmfANCFx48VJt%2FkuxweF2Ll1TOMnGa1FKKKfN4MR5Lu5EJjmsWQWXd66gcC8BNWejUcwQArz7OYT1IEbrOhiWBHgcW5qeLBQGNGnUONM9QEhvQHGR2tDO%2FYUbKDlbhqzqSYwUU0krQu7S0VVrjxdH0xTkwQqk%2B6UzeyqWhGh3h5RhFQapJhklA2yWkbOGPiQhRpbM%2FQXjWv%2FhsDNaZexxnuTW4z%2BOE5OBBbkh7RlA8UBU4Ww3EO5B9xvPQ9pBS%2FDApt412W0YNH8YsDoTWk3LfFkBQN%2BzBJiL4iU3cR8STDneThLphIV947GqFh39FoijOvZdmboTaQKalSTWI09ZPWsquBe%2FfklKkc5qxDsb0QlxIwwO7vl%2F1nzWbrti%2FGaw%2BgLzn53seWwgfoXyghylNL9f5HQ4bxhvVMluZSIOatXCJ41Bwunfo5URHdRilFTSCtNeSN1bJ9I9riy91g7WMNx3AwuRJR6RNRaaKqG1lGOWG6dhKxpHTwJRvGuOy2P64ESyonzU%2FZtOB7NulR5MOe50NIGOqUBD6E%2F0VAx1u8LdMUcOo%2BfWpWqBsB9HrxHNdRIUGh%2F%2Bz8arORSxlJ0J1PkFnUF3Y96WIsalUOdGFUlIo20GFT%2FKfYE3jDkOGR5O3NnifNbXgKZQghtacFz6MitkVs5q6EjRRt2wZ3bOyviAXIQExpjQWLKMy0n5JiXfLwZrMJl9J6NaX3rXxz3sxkngAhvcWB2Z44ijVbFYL%2FZ799f%2FvjzLRoaLVJO&X-Amz-Signature=f2cf2bd8c4f9c0f306e54f6c9ff3099cec868ffd5430d2c0173f7be637ef7382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


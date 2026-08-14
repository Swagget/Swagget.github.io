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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JH7T7UI%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD4JGWJfC8KXYGpeIt9WIeWo4LiR3Xuy%2B06pVnSi2NbzwIhAPp%2Fjw5R3ByG4C6onjeysa1eDlla3t0EjM93wvm6qBfJKv8DCAUQABoMNjM3NDIzMTgzODA1IgwfGnfDKqisUxrLpQsq3AMw2K98PyIl%2Fk7ru3tDYnhkDbpl9w0UMVyiku4xQsRclLIquE%2FrUnzYq3C84GYnot%2BdJPBkwNcENN63MxntK4u8noWw6ylwfPMr8UWUDYszd%2BM4Hu8mYXeaeP8RG9UfX7fm9wHcn9LPWeigEZuLQYj3a2DxAnnf2JY7jIQVEnMB6ipDB03IYR8HRCUA4QpN7UmIfewuKsKKuQKXSQGbDC2RBsvtwOPLxoNvHYMPpMYeLT0urpiyOYhvPAefoM3TJZfZ9TUkDfsVLTdS5rkSqng9G8fdA9h4nufTpUO3c3TX4QtTrHMUMXawUfX4TDfpqbz5ApQVwzZskT6TTCeAhPAzQzcPmoeNbPRHo0%2FaBJ8Gr6y6BZT4WXdc5Pc5vjP3%2BB%2BSO%2FyO3qONUGRFFx8hjHDzBR3oRkcsjLgeJSTWyRWMapFgT4Y%2F9GDhVoYsxpGH%2BD4TDqu7DBkhgw2Ip%2FeKqh6HmAgbl%2Bj9LAosoa53R9I4J3VHLv5y5qQ0q6dNhDSXoQPBGZ5EhtvMYkYVqkfHLZBE5fnvty7uFfiY0z%2F0yFFBFRqCdXADmIkEzG3dek%2BhOqjX4YkP5M2LvwmzETq9XWUadlOz9xhqJAYNxRbEimToLxRAk501ueKW2rIsTTCQ7%2F3TBjqkAY6TwTy3Wv8baxe%2BvLFsEFIVi4NgYzRBvMQkr90PE9Z%2FTfNiEJN3irykl3BHH8vxdhjkFd95twcNkA4trpQK4Uo1RdYVK%2Fg5v9BaeFNWNNo8S6QWAjpx%2FTSijXn7o%2Fom8y8NhRQC5xy5P%2BN5DVLRBAPyyTko5KSnUf0ZQcZfMP7bR6wHcDEPJceFao7n%2F%2BjFuzZD%2B1UIHBmNJFmhNd9PnzQw4Qng&X-Amz-Signature=331ddfd48d744ac06990ad65d776bfc17e9e62b0a21e1eea0ba125bacb885daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


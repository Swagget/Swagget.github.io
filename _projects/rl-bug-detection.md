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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJHSNGI%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuOGI88MqItPea9V1DCdv4cQYk4IQWBzsCjxdT%2BsxCUAiEAwfeioKqmHQ%2F%2F3XW5YiUEeg5BcSuWSnXeJagCsumVJlgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YlL37hCCSvlse7yrcA4rnkBg0UUHvSaabz7VYgGcRowpn9hRGgMDcSSyCsGJM7U3wQUbUQVYMIHw60SMoep1hR1xoEtZNuB%2FP18OqUGF%2BNDaP6iDbh8M%2Bpho95r8PA8OTOgAZTIVar%2FRLLBra2LD1ewZLJ24NZo4GQKk8BJWR9VEEebmeGtF0oo6beZaPbx%2BBSLniduG9%2BTdNVlg4qQfFWoLRuxMia%2B4Yixf%2Biwe%2B33WjDxtcvBKbfSjteTS7eoRGiGkJF7viChKgAAZqsWEIjOPmxUOUBw35QTGAZHmKKOJvEQmEOEYVYsmVbL0%2BT6cgUdVHyqe6th%2BNcbvRVLZyI8S59AH%2F61H%2FZVE%2Bd%2B2ciUrK0lu2J%2F%2F%2BaWumsVCAjPzsMzkfAYK9Mc3i9opT7zT%2BYFkmD1xvbpM8I%2FQ8vVZsBbRFJ%2FJAVqmOfU6XiRM8%2FdDPMLB%2FO0Ssa62GriYaZKnbeYBPul9UjzQxyzkLQOCOsixBxnmqh7gyc9yQqJ%2Bwg4EelQi4zHGsc7C4TYJqx2hsh1zPK9dKzEoTbw9oXZ7vIXWEvYXxZS91v1NrQ1M9s1MIZHmacgor7IIjgwK3r4cI5oBkJP9t9Ckdv%2BigTaRtPei2uv%2BMoocuKLTBJh6XXaLwUPEYJQ6bYLwNMOOfqNQGOqUBP8VQQjSJkXYKk4l6u46YE725BqW335SAuMqSZpYaQ7q12AUQS9hAFq4lCGVh9k9AvLslgb2tZOz4g3SfXbeJOCmI3w1BR9btDn5Ik4aFlnkA5Ihg5ornjfSyagJFyaxJ7LW00aDoVuTw9mLgnzEuZM%2FSgZw%2FxCMFkHHP%2FWGL96bW0RIl%2BnmhNGlypXNQ6USX56ic7MxNTP59lZfU%2BzvAFonYujby&X-Amz-Signature=f2b43969f19b73dec7f65db8b0eb6b5fe9ab4857ad5b9864e1cbf344c3bfd062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


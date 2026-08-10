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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOLEOPSF%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T090359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BXtqToQ0z%2Bdg4mzf48zbIiwzilcCQW97kOKqCANOliAiAPDEJR2Vfp3q2A5v8%2BOGpeoeeBUmaxaHvZXKew7f6sOSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8VQrUyzD7sxyRo9oKtwDa8klI7YNLPBfF2fnHDJv5fLI5CSvMw59mC2z1oOYvmwhrNrfs7DV1un4Qy%2FDCLagSpnwMl6obY5j8xNhj0%2Fr%2BADZ%2B5nr5qYsB8jKjzaDoUm2ARONwz8P7QNShWWdJ8CdwXG5tEkikoso3I69%2BKX1xikxK%2BPv0tfL40FWXoBldGjBETqLcQIoU%2BFgHQJpBEuspuePV14bzpnEc43Ojswj%2B7fIz28xKddRjSYXx%2B4kkPOsKLTU1AdmoWUnseApEm0Joog2RloKOgzG7BzUfChD%2BcwDoB%2FY6YsZxQaJF0ri1NATko6qWYheFWmGRCLOOV4E8lH0SHsXgpcVgNfP7%2FJqOo9OniLaie9n0phIOM4t5vP1QLF8w7%2FAU%2B1pnySlF6cJzm4aGo2mwBI6iEWFaJFWc5KdN0HkfRuCF0uDji0RJfLOn9VciN0td%2BudnPMX%2FMaW4DApILKGRuHuG%2FXC%2FjCIFlo1PPsSbHZL9IoATiB4vKQsb%2FKgTk57XxygdU3kQBl9sljYn%2BKucNJ9MO%2BzMNR6QJV94GfMNuMXDsxKiUHNljp0aRIG1r%2F95jiHN5lMRhsWNfU0uydIsW%2B5sQE10hM%2FKUgI7bXpNFl%2BjXdn0RrEnuGZRSlrWsgbaGqQ%2FVowh4Dm0wY6pgGsnrbmV6Cphzj9SoCtD8kEgT7bKE6r6h2JHOw8evFhCwykdfJg7hI2sRzHzcpiD0rg7CknmMq7PlLBUyJgsDwkVQ%2FAAzclDkIjznXo5eE9KINr4i4MuQ5rFp66XtuTXgSdZ0aO%2BFjzlHjNUICtqYkNniccv85O1ZCZEFXLXcD0Ak7%2FX5ZS7KyvAjsPODJS0HqiFsV83JGPgTCj7XzDVKgNj7M1Mr%2BN&X-Amz-Signature=56bb4b6c1a8db8d3d8907e50f3b9979ff1176881db470bb701d0dfdd43a742bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


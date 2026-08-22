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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA4WEUBI%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM35Sqo5UiZ0UWnW%2FqPvktCTCAd3DYmdKSmOv4qzOzdwIgBgYkC0ZhCXGYctcYxr7xbJ5uHuCL5w6lHsa8cvYDwkkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHuGC8MqWnT5CbGDyrcAxpGMlIDoqsSH5BQHgEaWmA6omtYVpaeo%2FiFSvJGinSSZen%2BBIksE%2FaUKhc%2FEUnl5gOabZMSgchLaPL0PP4hj0Iq7NQaaqmjVF95Yi9T9YWJ9EXTq3iPuPWUHh0dalIETycbFKjd1BgzGyg8cNTH36IVz32kD0EhSSdWgTE9dLJZ8hDuJPwNqXt5XkwHny%2BwbNeKwb0i1Fjgk8HbGCXKDXtVJwZq6GUFg65l4Rv6EIccq8oUoL85Tcc3sUn4OJmDnSwY3WrEQugqmzlI4K92TaXAJqTnNqBjtQxWlmxvQhM3fgJDHVhWL3R4xJH19u6rZY%2FYiBkxFxWGd6jUJmB85wU7lyBwGbVc2VHTDVyb%2BhgdxdWP7eqEJQan91anGlacGvsXaxsocY7omYFoM%2FZWdhDSWJ4A3FKLA1UWzCABDw2CxIE6FVqcIEHYXYTSEhvLFUpsKLrH4ucVUX4eOjVbFtt3N6kqvMzYJmSzDuQV5cyiTxggwk0ZugViFlX8ezj5DeOsv%2FINHW357DciPIZB8c%2BUnJccgdtUQ72zIHJN3yGHdygS%2B2SfpIQtNq4ff2errzBTdW3uC814Z1A8HJRfjPn%2FTtFPcnU7c13NpZYeNagQl1Uoam9dOumxfwpCMIvGptQGOqUBZ1myN%2BJNP%2Fo8mAfVUEkmPIBQ7Q3JK1AE%2FMG7y6GLtz2iG3LtcjRzlN7fS5JBYOYsv7%2BSTKh%2BbsU4Sg%2Bx5lQSZuk%2BXQnTZ%2BOkptwJIwwSbZKUWtXKZKLFmG5nfzen9EmGwtqdjqC2V0V6NcG6zdMOWVfGJ1q6MhfEXd1ogNui0KIBGdcebjTc%2BjcT0HiBpJ7ogjg%2Fg6V9h8xBtrb2aSsd6LPEJTw%2B&X-Amz-Signature=6f0581089a17c1a9fdd0e2a87f8d9204fa40ad86096b210ed064cf6c898dcedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNEGVSL6%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T142107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD4zgsdNsaDlLbBN5XEKUuVqPgxbzToj8WMLfmAomCl2wIgGMGc4gg%2F3Tpp3XgQFHtp49tzYEPc%2BXfdtYW9UTk0gusq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJqBTcHmMIiwXeK0NSrcAwodGoC42Nx1legAEzBOFhZYnRpImX%2FyInCGwoRoOPPWOVaejEK9pzwcMxIP4hh5Ei55uXNnpS42Tl0XjCQlrBQHZaqzTG9yaIUEdRCnqTmd6tjcqwWKS26LBrhF4iYMDi5J7otmeoEIzkcO%2BE0cCrwYILf4ihxzRt%2FCoHFVviRAKUZ7vt8wRmoSJ5%2BguvbtOmU9Y%2Fn%2BTu8UgMqZnOE0pPRRp6W6Fs%2BmKfLscd8xo9LSQ2snsYCyP1yNbZ%2FHFWs%2B%2BV08Ed0nV7YlQvrN4XRSh0PbqyiFsad9aiCEGN8NGmVp%2F0%2FDWFvsWGEi6p8yS1G7yBr8QWhtdPSHfQbRE%2FmmZB8RqfXbWhV%2F7HERDK973ixGOouJNhVshHCX617r8MFJdMbdl2BsRvZFWUDT84%2BkFJnqK3X9cQdpKvUBxL2cwXS85K0k1IDEus8gbc4YRCbuQIYcepbOw8mWkhWQrJznamumKV%2FRLBnrUZQlCOBJ6BuO8RUGnO29np0XInujKFJoGmW5AzJwGWzOWBFjXZFxE%2FObF%2FAbXnN6%2BOvcG5sRPYVxniXM8XWX1ETpKvQxeNGE%2FYMsYVLc10okw7JtQYxBpqkMOMp4vNjIC%2B8cngJvMXVlxOuKplWFCnN95tMHMOvLl9MGOqUB0NF0e8ftW4AdZg%2Bv1y3O5bmXARR4YseNmYC5M%2FmUTGh%2BGWfGw1q8rCwHnWO0k8XuJyfGgMZbpN%2FUcc6nA%2F%2B9Eg18PajZyA8R1v0YjzLEfMp%2Fhm8rCgx2tupkACLDvXiygKQQBqYOOxdk4sJlFAS8EkAKejjCqJX%2B17zCvdea0cB1ZAl9405UGMUlLWVWOHtoyNBxCXYsnaRfLD%2FsJjpv9sv33HhK&X-Amz-Signature=62213ec640bf13e9729add74aec2638caf490575f132260e68c53c91571f6587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


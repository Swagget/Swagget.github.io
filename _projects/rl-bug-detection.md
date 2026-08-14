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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRNSW3SW%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T174219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCg3qJplpf%2Byz21ofiAF82L%2BePUpGIJ2NalJAwEP0IAvgIgEjLMN6VfhMOK3pm2SabKEB%2F0jy2cRE69uMSLpYyIXyAq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDFuH9Pj2RrE%2BrbJDlSrcA%2FjZUudmC1Jjf9ayr%2BBrv%2BMyAIUWD%2FvNTniSCpMwYwvo7aH87L78LjIewEp%2B%2BCU53j1dpOoleCjVvbe7vxw%2Fpq69DOu0GjVOs%2F4gFCWQOsEexwBoiGMPccZ%2BAYJQqV63sSUG1ZKbnd%2FGXY%2B8zSsaE0%2FNFQG6k7SKBEfLhWps1R3lQsGzQ9EwzA8ZHqL%2Frniz8bUiqQ%2BfHGtudLz0UA7HhdyJDgzNtGMoSo8D%2FCdHQvZJK6s3Q%2FbdJ2bc3ws%2BAILZafu%2Fd%2BQ%2Fh9IrIUl43Op4AY5Sk56i9G26CkNZcvn9iy1AjBN9DHPNYNHWmLQXdsq50vzUwY3SoW3kUv26rkoB%2FaTvuGDKMBQxEGn%2FAY34V2SZLKp4FRPKeZh5Pv75qOXQgMvHO2Fs224S%2BxkUK4ENQtjrB6Id02ZZ0sbgfloRUHj%2B9Oczy%2F54AeGiOmRvlF0GfIGgDrB3ZscGdg4viCeI6VzreQkaq43yH3Ay6UfYJJGZMiKcMeq67VsSLxOkRB5y1ocbLwpi9SupOv2mQvGE5mdXEzpvhKvY4nZDGZMdo0%2FZfE6X38XwFHv5xf%2FdvXoe3IVDn794GdYYelbrvMTM4Gk1pY5giLlfFkYGsLUx%2FEE6R7dp%2FZmBRPyYacJNMKf7%2FNMGOqUBQZ6kaTOw6eAy82LzVDTeM7tWq3P88JYPmOe7ggHLvnJKVXKNe%2B3ORFtWTAvArYD6r%2B9B5fQHFN2QJoihGiq4zPa7tBKq7kbuKxTYWwdSLmoFnIhLBqhcM9yTS1CBjaEdbatJNrRc5obEohIJ9xrieupX4iwLPHhlcfkdOPZTwZk2%2FRecF8m%2FIGgRzuonWbCSxZvb37ZKU%2FtJlqHplvn9ptvoRzQv&X-Amz-Signature=7f35edc947d1ad24e7f718c150d33fb5b02eaedf8116923ebfafff53ee0c4195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


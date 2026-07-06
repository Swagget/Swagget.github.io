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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP653AWB%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T193357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWSzcM4vnHvWHlZ0kVp4zGnHXeZofmtjHZRLoCx4CsuAIgM1yvm7qwxwQgpMjSjJTXUojP7sc9MaKzA8zvVQ8GA5Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBblahnd2d%2Fpi7fBnCrcAydaGtYZeYgZQpZC8P0ee1cdZ%2F0lznWD6o3HiAvAGAkf7zJpkh5dcwCF209iKEp8qzQnFj3UQyUcunqJKEVIo%2FSFKf%2B9aRhbtS2D41C4ea2NBRmWrjZ1Rl2KWvMfOfKlamDEhy4i%2BJnJyIXAyoBepZv5yFQtDW6rTtEFV9kbRGRcaKMO9OCCdHAE%2F2Zl%2BnbMYX9YSw1F4pbSt%2BaMDYXOC4cKsNomeXz07aK3W%2B8t8vbXXsyih1KxiVLtJ7jh9N%2BbLFyRBt5mSWfzAjJHC%2FE0Rn%2B%2BjwcIIrevMikXfNN8fSGJ7id7iDwzdZrmcNwyTCZgPl20D%2Bm9NJzB0ozZfjY8vUqPbj%2F%2B1%2BZgJ%2BWkjaM6tOQjGdzWLy8j1h9DmoB29hg1HeJqy6IAkEOT18wKr0y0UY7BrThlSrTMhvM4PC9TbQRhIlygd6dhB8AfyPf8u57SucbkmxOUkQK6wJb7%2FAGUznN3mfOxzrv%2BH9XkvhcWhL0Fjf4%2FRGVvrSQJ5HC4o2vSgXOlHrw6F3gW8RsTevGu0M4fMkhhjT6HS8hmeIHHrRKPgxyCSRrJoLAcZqMxIvOf%2BzkZeS%2F9Xn5mYxOtxu%2Fxxw9omt8K9p8qOFN8FyBHGNJKYyDePj%2Bw5S%2Be5AAjMJDxr9IGOqUB2FUwq7eza477Oh0tnGNf%2BiC9U9orPtyiAb1PYHlWvReM0OsN5KmNvLcI5OEAxsw6BmJZbopgPr7%2Flbk5hFlo6cYcIZYJJP8hY9eJExRWm70WIP4k3%2Fp%2B64k30Q7PWXQ2J%2FBzX%2FTKd6ZrzfbXNwjSe%2B2xDeHhMV6vcAVOwGwRCb3FqFDDf73jvaFjJDCJEObfxr%2BqbeC%2Bh9zx5QWnnNlUiQXucs9k&X-Amz-Signature=679d3d1104fe86b5b61787cfcefe2347baf9354a0aed26304df2efb25cd15dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


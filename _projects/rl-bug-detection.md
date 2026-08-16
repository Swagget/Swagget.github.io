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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4C7F3B%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDUwXYkZ9qNgxildOvqIgvZtn%2Fa2vnv%2BPPlb9s2CXCYpgIhAN4qZuxDcZUiPkoj1sc8Yp1OnIJdOhNTZnIAi%2B8o2pkyKv8DCDAQABoMNjM3NDIzMTgzODA1Igyu1CLwjgx91qc3BK8q3AOSIX%2BKh6WU8scY2ZVU7nUQkB1RIJhHbjXdXePJ1Z30f4%2BkByhjTRMMqWEjraXtVSGB%2FOU6ZlIjlltCG5IC2xJoQclz%2FNiucyASDOxtykt5SSpsg8pmmRTPziFTGsnzyQH1EFVus3O8wYaFlM24xTGmxqOwezWHgGSSehs5xrjuXExKwROnY%2BCcLwJBrCpS6qhPiJVlICrvFv8FpRaNI43ePix7Z2Vf94vU0r0VzM9LUzbnb4%2BhZBA9rJlgu7X4T2nwUHSlIb86CfQvU0EvPcvrfmaW618Ne%2FOURYIKjad6hSc%2F0bPt5VRXwVKx5L58Q%2F4QrLMs0gk5MgHGALYln%2BXcMerxu4DWaBXtb62NaLlAnxkRKD33E09M0EKzkSipsVwzxXbLrdfnlYd8DenuRMUDum1FlYnaJVV5dSksGflDTETj1Go6Rf836sViD0F48F9ySrDmIYnSOvtvqF7QVYadoIhalRN8RhqqvDtZpT8Z1%2B7w%2B9obAd%2F3UylFMu6cNmIX5xx4n1Juth%2FePUbUMcvDvt2zGmhO2FyNyfDQtqBTVrexux34NvAOArdTh95regeGqZo0J87z1OkQWOGX7iGw70fDMbMjIiSRVd%2F9u77G9ZaZIYdCukMaRT3OYzDFnYfUBjqkASfBhD6Bs4xJVYHZE3t0PH30WYpVPRCEVX%2BeYrFH1QLyXeAe0f%2FjnBeZZ%2B0qFF8Je%2FDzkfhHcJucpmMIMhgZ7WoTEN5A4BaBWY0OdJSxi6oYVc1E53HLSDGN8FFddnswJej1nP8j8e2igh3TMLO1jSjT5hlxrfLaVY%2BFw3hJWTrd5cWX9aARe3Ye1BW%2F5hULFxj1uNJclgKY6AT1gYTfpS07NcX9&X-Amz-Signature=bfef34b8318c79b0ff0af419239e28c7aa100d8fce8dd267c40c5e8a0961cbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


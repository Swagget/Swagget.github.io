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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DOYSPBG%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T174901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCq727N08wB%2BjG0IR1OReKE0qS%2FfcB5J%2B%2FtLRIHjKdg5QIgM9n4SmU2OWQ4eNNi%2F1NnTUIDEt8ynDt2aih%2BKG1HVicqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgMQYXUgCpRD9LBDircA4M3OSlEHjijPOy65ZxlSpXAwA340l9cWFKpjvrcUrD0Wifdo6uSM3zS648MVlBPl5Jza9E1oKf5V9U4G%2F6GPspIfqsqdV0alS81JnQBY9q35zMp9sjZ%2Fxc08FcEN6vIv3dvqyxWepMdvSwA6QB1iQsiSPRLFBzw%2Fv8C2s7mfLcm71uG39a7cmn7WNXra33WvCCBT19oRzCmpFMN0V%2FdCFf4POCJHIhxWHXGyVk2xj2a8%2BbkJrTpB9H3HDYr%2FmA5laon1ODoo%2FRvpwKI9PwRKExex1rHMfgC0yA5IJ2dKxdeUlPqqVhjo6K8%2FyZfZ44EIwpDP%2FD6FApX%2FzL4lk7niYFaEe6nQ%2BeFrwRVZk3sHZtlUrEuBOetlenGa5bdGawkusxg4PXRM5EU9hosTAiZIUKD7uj847oKLYYC%2B6n5hAohUOigM84VnFrRFu1gC595UGc0Od46zuAJR0323adVrfMoQSHYDY1BGdd6pCJzA%2FEh4OvnmGUBbz2e%2FUcbkZRRtbEwyy03WPQfOlwYJ3w8x4MOfVQpxafXYN3c6eusTBo7YdZ0uSrQolvRIzwQk8BKbhhUMwoi31soCp71viaLhMAIyrvnxmlJPwTttcEE0WOikFvtF2kv0JwIwUZTMKChptEGOqUBvRUxQurqvvZQHi5l%2Fw%2B3Oi2WPVtNw8UAzjOclJqD7OcNpuoi0Akn4OA66acvpOzD5o7m1l5%2FnHkiZjfncB5%2B7Dz2vBnZj9LV8ugUfGWQNUM3QOO%2FsWekkLKZ7AcK3WaeNDVQHn4HH7BSB42f1jh94V%2BxaUHjYZwHnjwOXv5jlxhLd8kpNePZv66nC7WJEaEu3zAj50gQoECHXxs%2BfEjV7v71sN4Q&X-Amz-Signature=b44217c51640a9eedd7da0dc2dde66e92dfc14ca05444115c693f983e1e6a8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


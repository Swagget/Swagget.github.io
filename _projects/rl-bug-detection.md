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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWFPLSF%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T030816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhQhHelyTSJZk%2FfliJ9Wu%2F2pneRDkL%2FB5udjuH8kZblwIgGXwyy0PkaPpMXan2oWSeisH3JPKd9%2BrA%2FMiiyLPZspIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCJaHGxIWxDtlgeWyrcA5rz%2B0bDpvzNUNCuTs8ZD1pl%2FgI42YePzcG57yOI4aM%2F2I%2FtWh54Su9fuT8FujDgx0wvRuXOpASYcX7cYzGhMCLQE4oRe6pvZKAnjmfVZIQyAI7chMj3DLXcSG8PApiWA4PWKsO5CD9dja%2BBwD%2FkMsfiZYpY576IfYoDQyHjBbs50skRl%2BD1q23Ul0a8H3OcRayvq2msHcFm7wMXn549y2jBg4Obl%2Fou2YdGcXWjG6KTBc2jZV7z9n8r69cfClUTjlJbBDtvhEhix8ZNQ4ec9ZqxN4rMhPzyMEgnrQ%2BBx39on0%2Bby0LNrw2N5LIacUyj%2FzdAgx8DWBYRur2KlpqNezseoIlLjyJ%2FGimPPFaqQXR%2BxMFSWSruU9xe26rKAGGtY6SEsel2d4luiiOftq0ColG666PNgnV%2B8%2Bt%2FDAi7W98dHb2tvunqKXc%2BVF1p%2FRJ3ze%2FFh7SYsinz7vvJ2IJouCwWtsJtgpRTGMH9wD59YBJ1rJJbHOkSmlbX9NogG%2FFqNI9ZzuY9S%2BaZtvO%2BsyOL7QJgiThBD3hBx6CiVo%2BIO2fkXWVP%2FiNEnTdyabcr%2Bks8uQ1puHEFEeEWaJRaLcdlfGkVr4FjEpnyarvMkfVnnFfQW6Sm%2BCS%2FRS5Pr%2BSdMPzJ3tAGOqUBeCY0pHwOYaU0Vi%2BtOKurzhxn3P8jkj9gkoRKkw%2Bz%2FejIt7Adt91sKLUXBwQJssON7r3n6sh1TP5okKVuKgsBl7q3PZ7HaskOVuZn4ktX9IsjCvKhnU6NtYDK%2Bs%2Fc2w6O4RNUiAlNCKzOKVlH7NdGeENlDWwS%2BDijhuE%2FVrr9eaG%2Fl80EtD9vRf6QBYpU%2BUc0heAg3OGGDE17abaa1gqizsdpG%2FxD&X-Amz-Signature=07f24625f5d714fd54421dc0f0be0ce2a8cb9b711639ee1ee9fd39f3f1feb21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


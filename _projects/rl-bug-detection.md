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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC4JEWO%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T234756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCID59WwxV9N25ChGwTo7MNKwNPdxasAMy78R5Lpzf0LtVAiBs4rzScOF6QGcxwYJddItJDoX3scfAh130PDpdeDbdXCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMdaHyftVUp%2BzGoqjnKtwDagkwsWOcXauS9Wg7V6sgMhfBfHiwjwB0WUyEtO1HE7QGzp94N%2BLXxWlDbQVG1YDDRdpBN5gIqrBADAu98CY0mtVu1GKnjMUwtaMOrQAHVO2clLrBKMqy4nQY7gAk8f4chaclTmuAG%2FDAp5Q8povZjzqr1KMs17DLiseTl3IN0FoAW4UP4OVWuOG8RBZPR%2F%2F0VKipBUwl8UFxvGBGBp9FT4ZzE9MGXMG0gwo5PubflxUJ%2FoH2ghiBmyWN5Q2eBGfsuXv3uJ0MAhnYKUR96%2FQIj%2BXq2bt0Dr9X67gy%2FN1FR%2FWbdFhEEfJJ9YEwDusO3BMGiUat1pIkDbK5FqTbsbKkHNCu7EgTiltSllHIBMk7nofzYc6sEdMxeADWVLloJxI9amrXmSy9%2BCHNHVxt7%2BBfXrK6VkLGpc0FQnm4Mgq%2BfamH2ovPZGNS5XgAATznTDWP4Jz0PzFiuGpMhrbjEhgWG7PMZdaXSeVxhkuL%2FJ9TeYnSIqsOZ5WR64oPWORAD2ehBuTJBcL%2BuO7LeyYn%2BOL2%2BOUz8N8FC1IrYFtdL4JcOmaStpKH9uhaM3N9kiPZ%2Bay%2BLwPQn5RNrAbVjal9CkUZxzju7L0ok54EEuxTQJNmF%2BKcOQ4q5qJKHgCijFEwu4qV0wY6pgGbWQjo7IwAWPNnooWR3HNDhvIYWW%2BGz%2F%2FtiaFwQtM8iG5MO0w58E3vrWGIDultWB%2BvmM4yCGQUV892LWO2IiNf8cTY9kUfzs7Jjqn5TnZ%2FvW5oWInaXBb4%2FYs9gDihp57giuvYl324HG218Uns6NqCNa4k%2F%2BKr1ueAUBmfFZlRhwP%2FRWZnFoqZezBFfB2oWkPUAAtDA4mcbFk4VqNkLtkGB9tVN6rd&X-Amz-Signature=07fb2e0d49895077bb9cfee25ad819e39a7656fb763fcea94a074e9ca61a9679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


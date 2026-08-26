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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUG2GEPC%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T212307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHZApsQDJXjUNN4Eu%2BgFdRrKVgYG8nVDh%2FZq7d6mR471AiEAqVb1vKOPlUYIbEVop8ZJCQ5MlFkNliXX2qMli4%2By0tcq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEvYoEbWBF3Ma1INmSrcAyrEP0QBjIaIh3WQu2%2FAzHQbBUGQZsTKF5gHQ9XovMduAgWeFvZoK0fdG8%2BuGYca9ITA%2F8bqX9ImDiOpyINrIS%2BKBLZ2nJHKMNJhZ4FKpssfXUGwD%2B5QjqN%2FEpBqtIBo7pg0%2BAeSCxm8tBr6KHLDrGp6j%2BO6ZyJQ%2FXM6MhJjvJOdSfTYZgfehcu8kEhMaVO0YtvhHu%2BuI5oPiKFIMF5mFz69%2Fq8QiO7kHgtaIpUdTkOGN6OFjCpoMTrk2gaIduWuqRcdSREddIyB%2BlMx7ev4sRPKms6huXmcTokEkhJegAAMTJrNkO4%2BQzH%2FWrBqrVEV7ajafs4pBwicNDeL%2Fwi%2F0%2BnGcdyPCu6KpVoyAu%2By3kXTKU9hIXxjemIiO7PDUmiWRcDpU2VnY2MUpvLM8LqcD4XUyUsbypFKNo6o%2FQDWu6Ol3a75j4t0VS6qzW6K5zfXdowUH%2Fk5G2xQLP%2FhUS0Iew030WcgHu3dn8DT0312eJKUaYPe%2BhMC4TK3yrlUkHeOSNYaCkNA7kRpfk08cSnH2CqvhJofmszZPgU0H2meRFlqbk2BIY1XEV0XuaVdOolzHEtjL3zcDRzKV77GDmDwjQzfy25TtsRIg9WIUfC%2FlWo8aK9A8hSjJ50Zbm1zMLaIvdQGOqUBmDs1S8NYtd2wwC%2B1ed8LRZjxSP%2BLl6cRnE06%2Bj6LczLqZN%2BJnym0aeeoaBXR8yU4gntPFWngDvbTQL%2FhzKslvbQ9b%2BH%2BrAj7zLnh%2FByajEKcKrBFeobg4WHU%2BUbNGg%2Fdratv8cGkVugGOuTE6jbrNDb5v1gmh2eKLTvsWq2zeerzrDteLD0xxSxgBp68sIrbxehbiuq0hM8P%2FGPA39emIOsDAW0m&X-Amz-Signature=e9b407f96b3f6c85d76254066f980b5f720a2fcd34e820d685b7c2c0d1b0d1f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


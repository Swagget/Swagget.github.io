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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBF7NLF%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T134311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCofNC49syyi9meddq%2FByGvVm9AQIya%2FAwBmDOStrExggIgY24dc1B3JRMc0Bb6dtX0VCT0ChlakfYsJ42AY9utzwgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLoS5WTq%2Fjh1ZEBKjSrcA4wfwwP7f3GCY6zRkpAkxonZvolHK%2BI2pXpzKLbugGECBYecj98bJ6Kn%2BLz9Q66htkcDJhN0euwLV56UUCx%2F04l%2BxnAkSzv9C2WL1J%2F7XZZWxgjOjKwpTe5WlCzyUAiHxglkgQGG3osEThgBukR%2BRHUiN2dzcA6Ktj90j1Dznx63pe0tLLJ2cTsKPnQmeLhFq0ktYpvQCV%2FfupdsltbZKf0NDTLC1zGaYhG9xekyZjGz5P03oKB9T%2FH9Aycg9YiGnSF7gNV%2B1tCWH8DVCY%2Bomlt2oZR5y8XgU6%2F%2BoiX93m%2FCJezoX0Rfsr0daj8bmmdXyK9uxVL0n5hoVAIuA5Z3bHupdy1iANIFQYMBMkfMjWVaHSvaM02z0Hf7GmwWnk0cAPNMwW0ArvIiG7DH3YofNKVGEJ1wdgdrH42XE3n09ecbzIONNWv6g512hvwwWymRr02xeDLhhTS5kRDM492OYWpOzikbLDBGliIhcME9d7gw1e0AaaEz%2Bxaf%2F6RLT4fkJYi4BJqThx2HEfRQFb%2FT%2Fl3IymN%2FYyJHV0ddFUuGijgCnx4VvkhOQeyzeTRf%2BJlwUg%2BaVr%2BG6QPxozddUddaWQvHgIpRnJfXraEu0VmYZ1TXv3rJPVnMkTsACCCCMNqou9QGOqUBs0PU3tUGbGlkw6hQ%2BQAJN6Gx3fr8%2BMhAyljVphPgrhWy%2BbFiKxWr7j8lOg%2FHZ%2B5IGdLSSBwgGbz3AVXy7LgyvSMs3PdP6q%2BqeTXrHJPbVxJfvU8JZOZ0sjXjOb%2B62aCFjTMQTVV4II2VGVFl%2BgVy637U0g2sgZ6fDPfzJ4ClN3r39FLTI57esf63vk6xSUo8inYAUxdAQMoh5ABMTOzwgEmG2jOS&X-Amz-Signature=ce354037c3a1327d190436b7ea1a0777b8371c83dcc58103196dcc2597e36123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


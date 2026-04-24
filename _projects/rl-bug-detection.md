---
title: "Reinforcement Learning for Bug Detection"
collection: projects
category: rl
permalink: /projects/rl-bug-detection
excerpt: 'Showed that DQN gradient spikes can reliably flag buggy game states, proposing RL-based automated bug detection for video game testing.'
date: 2023-10-06
techstack: 'Python, DQN, PyTorch, Reinforcement Learning'
---

Wanted to test whether an algorithm such as DQN, which was able to play Atari games, could also detect when the game being played had bugs.

The idea was that reinforcement learning could be used to understand game environments and detect when they were behaving erratically.

The gradients of the last layer of the neural network were tracked and observed when bugs were introduced into the system.

It was observed that when a bug was present, the gradients spiked massively. This finding suggests that gradient monitoring could be used in video game testing to flag situations where bugs are detectable.

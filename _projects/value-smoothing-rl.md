---
title: "Value Smoothing via Latent Embedding Similarity"
collection: projects
category: rl
permalink: /projects/value-smoothing-rl
excerpt: 'Modified RL reward structure using embedding-space similarity to improve learning in sparse-reward environments, experimentally outperforming standard algorithms.'
date: 2024-07-30
techstack: 'Python, PyTorch, Reinforcement Learning, Embeddings'
codeurl: 'https://github.com/srthiru/rl_project'
---

Created an experiment to modify the reward structure of reinforcement learning algorithms to enhance learning capabilities in environments with sparse rewards.

This used similarity in embedding space to teach a model how to understand when an output receives a negative reward but is "almost correct" — smoothing the value landscape around near-correct states.

Experimentally showed that the algorithm performs better than standard approaches in environments with sparse rewards.

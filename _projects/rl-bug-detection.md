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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWC5OQKZ%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T131221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBFRtSqKQxKHD5KHQAuWeZ5RQKE%2BWxNKYVgdMPlrC4cDAiBDxBUCPFOPG4qYh5kx6k75JklVRRUDentrMcZM%2Fvco8yr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMdbzMOz12XdrZlFdcKtwDaR8aw9gmQvHJkav4o6DMK9Gfo8Q3g51y%2FiwAR%2Fl4QFyU7vzsl2%2B7Rfjeqn0HnOw2o0yLEwLGX%2FlGbbGb%2FGvITbm11%2FCo0fRpaeWIdHvR7cx5ZL3XJMwiI%2BrRgJL5Wag7yNmYSJ07kfhSZ3UyEBdTUdoluCUwLab43whVqpaw44RJJ3OR3XTr8EOVTpsn2nGkWtGmcWxVU2Ag8682kk1nSxy5gpHRP6X%2B6fVJqcAvAH%2Bs0dKiGULFk3VM52cuycU7DMrExVXayqmrnS5EK2laP3Hx2zbWp79UU5cntVGfhrXn9S%2BrhOK%2BOHypmq3MhdycW7753Kt0NHJNZ8N4HnQhc4JWHmgmHJuYV%2FEpg3l852Tr6OGoilqufrUr5uRVJlsvczdQZoakzZgqQs7GRTWZT9pFvGssSJ%2FEpw1Lhhrqm3hv%2FN2qFmpYC7Rg8RKqmLWZlNiXruUpf5pst8gM2tBbEG2cyikuVlH0ELNY9mrqc%2F01yLkY7ZiMeAMrdaSFAFJl4vWv2HVki8%2FpyYUGkdxxz96oCJJrrfhnS7KVgG0w1HpPhgcGpLw5iIs%2F4BWAkhmpqz%2BkjF%2BWyNQrLH%2FdVpMTG%2B5HAtqMWBY4h1lF5yEaGWvsU9MJwNYOfnhfFNMw0I%2Fj0gY6pgG2ZOZwS4DbIrW5LYVcTb0RSIDRLq6ITcq%2FN7Gq3q4EnlvEsoPG3wSkM98RhEJnY%2Fk5MhWDbRhXPx53CH0Lie6vOGzv%2FBo1vNVfCI7rdpJTCN%2Bf3YzQFdA1g7A51FjUF6M9%2B4Z7rq6G3A8LlgRfczXkYlyuj5ZTf5ppBZPYVSM4p5j6vajrJtacspoXesEMmvZXLy0xqZCaJCPjY6wjd63Dbtz6jZVr&X-Amz-Signature=db7416d5838d2f6c3d352d0022fedb9047edfe7096764d78d1a1f45f2041ea09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


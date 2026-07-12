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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLADON3U%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T124750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAqaBAdGrgctLaerTgSU3UqR1qQj2vfYX2yjpqCssFNPAiEA%2FfQt8Wry5EdR5yQwd00EScE9RVWNl%2BgCxjKLhbh%2F3UEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEg6xO%2B8t7nKa6z5yircA0Lx22pwXx9sj7DfywaS6PElYkOLy4jrgZYWh%2F5MUT4Xmu2RGjuKlZdzsjRFXHpywD8oIkWqkAQ8ZAWx5mToDzLofS5EuGHd1lYXdg9JMANUnDIgR557THo%2FYb79zEjevQNbRcvDxwUwlCRtRNlW6Hm7iZ7RswIPa8zb74gxu7I%2BcoLMiVKODoBOV4teeoN4k0Ic3kXYrXi4059PvrbsSkB%2BA%2FZpqCUepyP0xMAHjVI6vHj8bwMTDAATl5HdHOZwBFCXBG7fV9wDkyWisjLzJX9EcI6K%2FTnUefGMVCs2Ug7LqzNNjEYcjr06X23Q5QK7OyaIwL3cwIsdECN38TdjxLgeaKXjxAIZiJ%2FyX0ft7qWRjwxNTSROeM4ydYlA%2FC4OL9rhIw%2F7AL1dDowacdFmcJaihORPlQVsotp%2FncTe0%2BnhHZKjsJkPzn8SPGAtFruZLxDwXlfTiYulVzGkVs6N06sK4YnobspsWu9MrXaftkdAGCE9AurKA8kMyqClxxNQcSxW1Je6lloaJHsEyEBFNhDCrjHyez7n6o7YBj24JXA2qH6u7k0fkDIbMqTXGddfw8rwkkqlxHy45Tztw0qH64C47hzd6gNVrkFE6YMYTZ4bdQ9QBCaSTrwtbtdhMNj%2FzdIGOqUBtdVPtE7Z2sQS4Oj1dvnYZ5vuAusTmNdDYHt47xSJogAcsI5p8YR12iayKipHPLC%2FPQMPWELxvMUuxgqs9pbkaGOXu3suAqYJzFH56Vv7t1qsUQBpQm6CxNDDE11eWcZqyY696sNf08r15qRzB3oLDEMFC3Gn3WZtTILuQHcKC7PwnZkFUO3FvGPSRxO673i9whUVSQiHFzvg7LXadSQ1A8WlXtHJ&X-Amz-Signature=5f32b5bfd0d1dd49d693361f660e4cc5e7abf12b53ecedfa54ec47024ae2be0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


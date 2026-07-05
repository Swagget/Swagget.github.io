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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYOHHH5K%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T235317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQChHw%2Fdo%2F19RFhFILGQTKi1yMY4%2Fm%2BYWp4I03kJjRrjxAIhAKgcjJFnOUCto5dKjama%2BaiL5%2F1MQKudsQjfdBhYxzJsKv8DCEcQABoMNjM3NDIzMTgzODA1IgzSm1nrfi8hOD84EGMq3APF7wBDfJnypRYWK5uOAUuKx0emcbTF863oS3SCcwqUKcGzPiFCEv1amA4JE9lphZSjUi1efdeyD2hOPwrWr2xEHH60ndLxu5mfU%2FUY521pmIlo8nUnxvcGeYxbacQHbDP8wdJefnWa0kch4PgV%2Bpwy7PeaEY2AnmMmvT4IbsP7onUr%2BR1YwNskFI0LIkNXtNVoCUdZJTl9jPApIVTJlLEmqpbEMxO1Q5lsAMozwqtTfUR7Z%2FR0O9bLQYauLeHEVv%2BrvcJRjSGZ3MI2VsMiSkHwqswd5lNWuUC17kMPPikKmWYboKDEsfZrhCbUtUO%2Bm0hlci4o2OWvToQewhtLscV9ff6CnBFkRaZPD1Ah4LOTeKxHyE%2FbmlQRI%2FXw1HulDkIZhOP94v%2BqtGG5Ch40GwofIe1hK%2FDCzqv7K6TWMKXDxTSPvMXjr96GcfpJO9Ps0IHFwibELgkVJAZGqO1r8ZQ2z5ycgBl6LzXXdot4TdPB9sWDWAGfVADvPOxi8lR5qG4INkcMwzEw1U0t622hRVx2b3PFejFijtJKSDdwozvp%2BWcTpHvFjHRRogytVXaUqy45ZtVTBqSg89P0GfokG%2BuZgKOdowlI14ZUNqaszOZELoeJ8pcggcFQDR4onDD6savSBjqkAZ8Y7zkFPl7%2BEdj2QHGoooFQuK%2FA6IQWZoVmTg253pR0T16ZEn2Z2NnTor6Ti%2FWyefR3He3DC2aMQ31HqqbqzRaSTMX%2FT%2Bo17dW1WCvQfEUiuUi6prkEqAHJoKAyKd1edtPANQsXb89QJHms1noRAXU3TsYC2f%2Bm47fiwwygJ8ntwcSBQBW2mGgt3MvIL1p7wKOZlbU7lF7Qp%2BNbl2oC9Ki2jkDF&X-Amz-Signature=a82a801a8e0d9d97ae6225d6be4268d889e26795069eb5830171c4258a1955a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


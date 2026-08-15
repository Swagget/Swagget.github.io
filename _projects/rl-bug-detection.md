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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CK4TNVM%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T020550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIBA%2BA79gHnbaKtlP2Sel8vvjnNqgIyqjZCizcXo8mLH4AiA7GcFnfvXbjHs2VqACwIPzjKgs6l4gXvhyIkyf%2FKzc3Sr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMm8y6UnKdlpQULHMZKtwDFafP9cqYM3KPDBNnspy0xcUyucbQHHojGy0J0Lv2ssi6syu04tjcQcjr%2BPkbe2gsaVnzqgPTBZla%2F6BeGdUd%2BUq4Y8g5DWzZKIvdHu6QDtGPahFus6nzIdQV79lk5RujVtiDEYIgoXIUuyiKKbipQQQyDp7Vb7MhKrH1IjfWcVwPxYa8rEf53TzXBlS55kcxuwr29V%2Fpsoqh53qf0iVuPX%2B65GwzyN9J8izmaXAWW9PggTq9zm%2F9RecEdbMMaYI6DwwHj%2FkzgtiOIFVqmq0gTZQz5wJHVF%2BlYkZSAskTh25dGFviAZl5hqAfrzGMHToZ%2B%2BAQnwYODyokQBGi67AlskVxy6BdVzCMGD5Vat7tj%2FiW2%2FqH1KcBdvauBkA1oXCTI0rgPkcVN%2BuP1UKEZUGfeHsfNjoADTRRg78PMy0rB9JXpSim51R55tvclw%2BlprJjGuoP5ewZagp7mTCc2d3onU0JYQDBFYYu0WBnlY17KuS2NtMDo7LmqH7jOlYXpUAHfIvc5BmDpdtfSXcs9TAz15Dl7ZsOkz1REVD2OpaNbotmrAcIORGGB66ivt%2Fl4qjPIJvUBphUwimXgjqEPTOTNJd%2BXHyZLpB%2BLAUte%2BoL%2B1b7Wae74uANoBePy80wxP3%2B0wY6pgGJ6kmPLdaApmG%2Bf4uy69WbSnT3Kx58TaE%2BNvouvRcLDjRRj4Pu0oXxI9Hxgxd8875C25YBdM4TbqzOKZdJ4rfy4cc%2BfDn8e%2Be9cMLs5ImW68PWZTq%2F6EZJkwHgZZwYNLfC09qm68KZShfjuGzwqgcTrM55a63J2ShK3dDaECrjLjorPsaHMfB6uw2Rj65lm7GKvc0%2Bv5nejualSOCV7DsV4u5Xdo7W&X-Amz-Signature=67d84843c52686fde17d727481a8bad091db857317aa00c30514019fa696112c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33NEY6H%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDJeWEiQnbIHUPiAXkOy4m2NF%2FvCBExnrnY8%2B6FZuwWWgIgNTpnlqcG6iJ%2B%2FFtxLQ%2BMz1GEYFM9sXaE5QeWjWFFzYgqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyY4V9ngBqOzS1UuSrcA3O%2FmItQLXCFK9baUoEjRW0%2FTiCFqjjWJsUcI0sZJEiPlPAQHpxdqkD%2FNoOAvmTGpjaCBCVUEtuFw8ubBi6J33vPN9gZwyQBbMb7aNEkK5UifdF3ZW93SqIc3uJ9sH2gW2nePdkHQP9ke2vK8exgDywVqqFT5DCf%2Bs7mczUUmruLMXnzWG7mPbe6p%2BP62n6fMmTEjVoOkpC5HZOJyZKHZ7wHdVStPcc%2FtR9eoBsT8jzHRRfFwj5BwsIbShR1AEZxb913s5%2B4KZDfs7mDMybrKnvBzZkCbS02W3joEqKOjV5WvhzKEDhwhO%2Bo7NA7AD8FLB25tZAyjZk4pUpgYj5ClyH%2F5iuSIthuCEZfOfjbcpRc4sr9NWOYsX3HhlpaP0FBE2nVANFir8Ef%2BMt5kk1zxfJvC3Hh3YpU9mR3G4jmAN9OV02JVtT9L1Idwdw5na0%2B7cRhUJ2pd1Dlgj8R%2BoWCHUGb%2FYUkgyZgQsrF915o99GzNta3N3SqsPG0i2Hlz%2FEUNQQySFYaNR%2B%2B%2FEcOqzOkvyNv4MISiAuDnu5qpL4qQ2bYqsfASU9M1YmaVY8JJm8pW2dBgf5v4bxRRLvCdIDnYTA8UEGUwEbfW4AfsFTmYBDw4CaVvXqur8CzRHS1MIjDg9MGOqUB%2FIuMYsMrfdlZd7mrztxvia9uO5maOi143cUSZQM6nN%2BQm80cqmKIADXPN3iJwDGJofrxMPYeZD7Cp41EarGnI1qbhcFigkP24Og3GLrrLAyI5YeziRMUHdFI09t3e9V2tt1wJ0Ae6e4YhQ%2FU%2FEUtnZRlRPsp7s33L%2BFXXzfbRpqfgxhuP2hUMne9Hrhr8X5G%2ByOiSUyUw%2FWqyhAkOOVIov14nu87&X-Amz-Signature=863744af0db87aa417d964b2911e81458fb8e73350be69c3d7c7cc8d87d51830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


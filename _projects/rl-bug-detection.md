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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMDNOZP%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T000503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIE1onxpMN9AmwTQkF11hMravF%2FyQXv6W1iMfFVv0JKRRAiEA8mlNRfaL9TnmAiQCQRcXfY2iURqqZNct9tGJsqrqFjIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqxXMrZE7Z3hNj2wSrcA3fr1mo7o2Fyd4eg8prF2BXmYkSx7nyHcuk2SLvz4vF1FfXTJkmdt6sd38Ntjql8xxcBztAoS8%2F40%2FNba4eL4GuOAIYN974dZn5a%2FPOt05y6RAaGu8q4bOWSsjVJ4fFN6i7hG6sYDLKvvYDL2H1%2BFgt5N7Nsw7mr00DVwMwUFWAt%2BoeWVKXcEIEapmqgrPWofztUc%2Bm1UTOST%2Bog9F5GNhIUGwVbTTEBLGS0RwuUTAc88BcQAGKgnV9mjD%2F70Zq%2FUk7dbQKYv70%2Bo0QV7Xko07XJLaGIN%2Bl%2FLbkUu5sNqxiosdug0UC2vovntgDmWCynDV6U6j8BCc%2FGed599VOG%2Bb5YMKCfrgVx30UaFqa9IBarjrVu%2BouknL1ZswxRdEzwWVXQ95wcEE2BCuUjzYOv00ne24ry9FOmb%2BBhkjgahCpmppSg3crIKxcQJYiSuRKra%2F8ubRSFR9bzkzVa3IKSQSEMloBKj0pqMMA6oUyvVi0%2Fh5d%2BIO%2BKsJJqBkS3aLoqyu79j5HuLp0ZBBmyl1E9Ycb%2BscA%2FhHooL47C11G6SF%2BN0X1z8xyo4fjQX6LwPiE04ILvDH6jM65%2BFxJE1SygiIZYrpbifkCEV%2Fso%2FQFnsZb%2BD7Wd6A3FVvXLuvYkMP6f8dEGOqUBq9CHbTLmM%2B30qzoyJ9EdfA1DlsPVgSWBna7DoLGTb2aIP1nzrZ9cy3TpfrQZBMXJ%2BbDu2nSWzRqtaBv0ipN5Uo4RDlf9uUhhemsVhN%2BUvYSRSJLHd%2FBk8t8kSpQbYBxuYyC3KW2HQDblBPpg4dVhKyqsVS994klvT%2BuVw3vPq0IYlvT%2BtB%2BiuQy5uZKGukDgNqEMaoWkvd9grkfdIbvBx30wGiQk&X-Amz-Signature=987976d853f5ba9e52992f5b257a8a3bf3451c25935372cb312ff70371ea3837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


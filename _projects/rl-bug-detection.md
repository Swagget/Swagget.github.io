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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWS7FPV%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T042323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdJY3PhhRVugOldbCJaERKISX1VM%2Fx2WYfL%2B4nYdYCQAiBZ9XPqnG5lSq1E7H8dWMbFjbul4UVAZlikLiQVzkT5GCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGeZaPUjtQKa3kXyPKtwDxgCaQKJAuoP9WUVX%2Bq1qWcCQ8jh5jEtGTwrt12DFB%2F%2B1RXTFnuea5iRfJK5iS5BbqIwDHmqqtyHGmf6iuEkSyV%2BeE4TWpQGcYPfWL6mN9IE9w8pF6EI1JiVR66ijt0aZKZA4zkJIR2aZv%2FJV6hb6FzIo21SysMMwr9Eqanxy5ArrJeFFXmAdyZu%2BOol4Jq%2FH%2Fo3fHPPqTaPkxDkxMrBsLotyjbYyUUqBeCFDs9M4EBwDQlvGRzh7KMQMa%2Fsw8dpFPte%2BbbHrAdjZSRIqCc%2B6B5bFUWTthQVx0wKar6UqLTWVe31SR%2Bl%2F%2Fd0iU%2F1ejcoh0q0PQqovwSoO6%2BVvRVbqDhcjhXM8kvyGRyarBCGJzU6VlOhdSdkdBaLxqUqxdMKrwS9rBWfa2lHE5pWi%2BT%2BOwrTZwKp4Qx2tnRV1hr4dn9xEmlMBqzZvC4lsroHiXK7vE%2BbZ1FkWMz2tB4olU%2Bc1k5dg3gyv91grINV4Q%2FihZUHPKC037qwiZ79Vn%2BP%2BWWO%2BgLkBtEwdsSz9MjuP6Kn7V66g8hOQqmMgG%2BOVtZJ%2BcMPCdir3GBi8%2B%2Fgdm4vmLSvnI%2BBsAfugtxx1fNEg17YnF2cPzo0icijvvOR8WW4QSLHL%2FEtlX%2BAqfj4RnvcwjuyZ1AY6pgGPjwWlBZJ1Zo4oa6bVlRaO4nY7rc%2FTma8KkTpioJ0h5ilarY9nR%2BQFGm5AAnnKb3kMz6He6MzRy6qOgtD3zKenjAMtQe7rUOd2xBBrQcAyzRaTpDAFzmDBRl7Mm4pXsk7X8fzmN1SCWHBfSXDTCCF6QJaoVE1%2Fm1JtlUvboiLQ0GKKBanuC8UUpSCuADDOS%2FAF61yfc2k77bt7qgPxz3SQF5OszhYk&X-Amz-Signature=1c3c74d86bd9149e2917bc5fc9b368a3ca0e3bf5915ea5f3cff4cc667b416c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


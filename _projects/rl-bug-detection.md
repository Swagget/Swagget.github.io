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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPGP7KF%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T045448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHfgmwa3LwIanJlIL8P%2BYvTZBGmjjBqZJF9aI4yPnBk3AiEAlFiB1RjHpAP825ttq3X%2FIR1Fxr6AHu6%2B8PPkNvFYYh4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbYii%2Bqx%2BuraSlz2SrcA3%2BZfVJaLBEP%2BDXJXvXdlN%2FyQbLiGv%2B3zzRJVXoWsoYWSZL4B6f8BgUPhEmsTHr%2BgxCtWbVtbYTVmh3fEu96dtuZKwnIY3A8bLJNRCWJVn2tR8GuH9Gmlza0dlpspv7Q3N345HxSOXnyj1dZLrEG2OXo3P7HUvha21N%2B%2F2UyesWg%2FXFlILHG47eTdZRY0f6AgWd0fOuac3lZRVMpyrH7A8PDJ%2BNSvs%2B0ShZbveDvKU4U1GQGBnjRqvcOIEsCe7RfdVee%2B%2Fh5Uske8dNbJoe69aYzFVzkU9JRZI4vXgeY5tQ86WLA%2FKktDu0RSjGnxpzoZpwxgoAaYI2gTHy3GgF1KdnECfXrsd6a0CJnPKxFnFVGMDvUHP6pe%2FRqX%2BE3Lrro%2BafMjRHv3vYAnDLq6Sz50T8Tui9oHdh0By3zKC0Mt7XOnkZcG9kth3OdPirSbhwS3JLG7IUb%2BekTPhPc1oXJb4f2VtcmfEP5Xh13bKroHlokDkZQSaNI1vn8%2BLSVPwTl8YOTilngfH%2FeSpyLmH9aWXMrC3IKWpWIRrGSTKppdTAwWJccPoKVBzKEok%2F2s1bXnWvn5D0d3xkoDiEiuNMRVW6xMGV8beN2DdRum7uDD6mc1GphMykeOaMwQu0lMP%2F3gNMGOqUBMqqFhU%2BDSuibay4iP6NngwjgaqXwDrgnxvruU73Gt7CKxMJZf6OldHrGYexfUbhO8AQ3%2BpF08%2F3XkFObTTHzk85X3x8S9AYXrQZJeBRB138RVTJlAlISH9LMMHJm72%2B2NeX2aEtOaJlp6gknzLefgCsKuc1XgpdCXuV7Z306goMO9h6Rpks8%2BmgDG3hDBqywA%2BBG4aP1EQ7VpUM1ykaa9RBmSq%2BH&X-Amz-Signature=e8f5fb7e5768008dac49944971d8aa937284746413cad35cfdd6b5a2ea30d2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


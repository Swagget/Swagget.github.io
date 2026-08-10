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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABTHPBD%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T113928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIEVjQd5OH7963WQ%2F6nxDv4LXW9RE5qUQGYHGACIbtswIgKapWnZFAQu5aioTva5ff6ePjJcTUjh%2BaKph8uraw148qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObQ%2BXsKDOadNyABpyrcA5ZFKlmqJeFT2Bfup%2F%2BJNO2UfbkTSTDGx7bMRIEejvV9ipTxQhmujpnHg5IaoNg9yTklLiHxxBVxrCSNXcfipuUDGK9MZd7mGEpYXurwrDbLxV2CwP9QSSvkh4KzYDU0h4C8t9hfHq5SxqsB14XoNvC3SHPa9bVGIz1DQMGGOE5TJ1N00IoIoVVdjNBf6qSr6gGxfERqRYnqZVqcLGGyG77CY92hJvmg7JsM11%2FmZODPAy%2FpEIEb7JAamSkcPM%2FEGoRLflUDlqPadZ7pCjRUVH7FcqeR8sf4QrzXffItQJh%2BK5BY2DyRqj4jC%2BL2gdd5WdrMBSzNHRSrzqkwHnvEnne7Lji9n9ql9vIqf58uQQKPjd3XxEb%2F4hI764ZlB8OnbW5iLG1pWTrSbBXeLYirZLqoMz8CxVmPrbesM3M86myEN6hAv1nTJxKzSiqY3roO4o1rc8SrebxZeQnpw7u6hN1I2K25esXNK8dUlZbTXeZFjTOIVSEJ9pntXICTrZajJpeBFxQNNr%2FhtdOCCl%2FGQ%2BGLqQG%2B%2FfqFJrrmehZ9i1EOHBClhvHcWsFNf7m1j9Jxx7zP2XJ%2BU4H5lqHTdgbeqIeKMRRUbTMKSUjRRk6uIa3gBGVCopDx9W5T%2F7JdMPru5tMGOqUBDlUWTJx5DOe7DoE%2FKwNgvMY%2B5Jm%2BsosheJ8qGi1Xzd%2B4aeEO8vsoA4X7lRietoprZXtans7e41MghnDWoIpJZnOcUij1D8DTrNdcXX3NWIKe6QpsUCEYVjwWoAWXdYItO6bYwHTVQLFR%2BqknS4qnmN0TnFxIxGI5yltk4EXCqh3KIbZ44C49rMsD02Kpv8kTjqEcLYCp%2B%2FlGssz%2Bcbf4ZBE8opaf&X-Amz-Signature=536fa4bb246539a793fd04667e7855200ea6b5b7b5944b88bf23c9a037854b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


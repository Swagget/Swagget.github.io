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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4AUXQ45%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T142049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6KfisyJRH%2Boj5Wlmrp36IUX%2FqV8Toqt5K1JBai8OGIgIgc2rduKTlFqa4Je1uWpXYnwfONgTBhNe%2BCfD%2FL15Fykcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA7SSokmaqu5e1F4YircA%2B3gXs8Gh0WDhoMAVo7C5LPEE4Kum7lTB0g7EF2ngOgc3DrfWjDaTa0Ay%2F9oaNvEk7u5UmHFrgugmjVlhNJtNG%2BPXMTDRDllKz6oy6vBGZwqtSR10G0sh%2Fluuv5RrxEwRJeQu8tU4UuI02z8NBXh4jgDsgCsOjO65I5gzrdoDM1uDVUYjdlYZ%2F%2Fj4seP8S70phnk376UAwJ9D98fMYL8G6dqWVGGpV6LvQGw9KfA%2FXs%2FpojWI5QlAiEgAYMxtzhESSn%2Bx2zrkrMjLYTI3Yh9hY1QUTedxqms5obnZKgLJaTJ4xIv0C3oOp8HFRF6NI58QL8gROfWJDby5CGwo5dfsF7qC5Z%2Be7eJLRhkIsDuzsokOWbd73w0DqYAFdY7I9KDk7%2F8GXKK9XgMX10OeHAWZvbw2BWyDxQeLMX%2BHpzm3AoCb2y1oZqv0KPJChn1LWTLmYPHYfMPaLF0e%2BDtuHXOfNn4o7t5msmNzKmXqLDIcoFG2pOWKEqPq62xIjd%2FdePMEBvHBAr1Ux3V8ScuQ6Ha58nfkH6GGnY96HiakGbhZMtEmWXW0%2F%2F%2BhpZIgASyyyux%2Bn6kcYYjEyjWDwxtitNuA4Kua3Iug%2BmzcSirXqcVeaNgF8%2BXv31UCH8ogCpjMMXdltQGOqUBsLEfmcx37cAjVdKWMUCHs2QIHz0zr3OGJvQeL1REEmrXzfe6a6adekkVkhMHg9Kh3nWuZArgIMZBaQpdFI8O9F4Ic8fL3vzgR7IJ%2F0pRijdrVArgePko9ZRUfjoHsnTQWVJGaSwN2NM%2FG67aAcUC4PSDQ2HQdo7qSDoMNYL3aj07wmd4AjnYIGVTAy7j2ubzLcwV00VCOmFRY5RRyreWsmFbnCLv&X-Amz-Signature=85b5a68fd6ab1e4d1230b93411627a90e3ca746a56651f2c28fb4ec2b3abf4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


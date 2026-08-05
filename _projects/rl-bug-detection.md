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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GN57I6P%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T190900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGtxShEaAYCII6D2LJGlUzZAgaPxn7T%2FE5wnYdcG3BTQAiA7F%2FhLQpfLlCI2VHwjhlSxoFZ3oUIikdsUi%2FM2Nw6LtSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMFZFMZbWVbq4GwB0%2BKtwDaTyw%2FzkRxNdp2cWdNDoOGA5ERp8%2F7ShOqtw0KH9U1ragip2ihN6srqsFRO1TDW8wQLb97XP5uheD8OYkalzq0tQ%2Fo3ebV9HGfO2Fn3hl6qJYNOpnWChD7L%2BgopInLjd9pFDdqyJkigexN3Sf7p6lkPHlxBYLlA1IMsX7v1iNQ%2B%2F%2FwyFM%2FUUcGM1GA5jvWueoXUxoVILjPTZWgiyNWjD8E6eR3Duyq3fIZILDiK9%2BWgwnJr4batJQF%2FzaDDeFnU0rtHh7VJyhIYrxm3J1Pb%2Bp%2FcuDMyINqS2lWUzrL9W7lo7%2FDPWxAQMJxDoZ3xKXMHMOzyRihrrJ6osbi%2FT9BH11ebGeCoMgZbAo%2FHp3POrX6MrqEr7qmflKfZ0SgDMnXYW4klNvdhF7Gt2hZdAg9PvDUCebJ30Gm0x8fOMaXdAvCSj3qT9xBgyBzk6OUuIbAhzD0sofZU%2FtwiNx7q3TJGM9K8qfqnK3KZyYUKyQSY77b2Iw3jn4L4G%2FrB3htVjiVBwtjoe4eRSs2U%2BEXs3iirwXNWd6VQaCgYc%2F0EcivFngOmnlxZaixJm6pDp%2FUyy80HczJQ6%2BCpCRKM01yLqsmDTDuQhE%2FCrOxfUDihyi%2FKovP5YKUVKUp5KmoVVXMP8wvYDO0wY6pgHSiJoNWQq%2BDhpLLklhGs9oXXX%2FMEkxuZRLt2tJbI8DI8OZeKtEHicgRKxAAxHjyaymPG%2Bw8tRc%2F7KtbXE9VJgNUAdo8MPsLxrJMaCFLfLooE2PHJFSYEo4vbYigMwp3I5jpWYVG%2FPju%2FXuHXR4cEu2ifm4XaTAPt4oDbHF%2FoFmVqQ9aDGay%2BYJce1QJHX9CujI58oSqQqxNmeroIdGAih%2BqMUNvNA8&X-Amz-Signature=88140d5b2b8c68f7031f490c192a8b5f13471fa59b63dfb8737c7a19daab2978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


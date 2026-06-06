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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZEP6EB%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T165605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXGA3vZJAMICYxqi7h7og77owu4yvQJpoYXczKRp7rQIhAN78EPyeKnYd4YGNqppwO%2BNysiR3fwHvhNytzlVastvpKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygqyp2DopwKAqIuYUq3AMN5uBnr2LbYNMBtBVNDwCvDrjwWEvvMhW5ezF9CyaIU3N7pMIjO5gGUIavLMqofQa03F8sHvLXbf8nJhUZ5%2BwUqjESOKuaFQbuc9Pts39Au6S3rAMtcJyoUUGb5LHk1SK8wu7R3OGCJvOWbVG170fAUNzc0RC69esmi8YhezUDYmsiTE0pAUH1uTCOkxpxPUU0tfb8MuuuqI%2FLXzOm85P2GICFzRUdLWoB8KGNKDaoImHJ6BJijNNZuBB77aFpy5Q4V2fbEwvDBnKVhztrjbpGwLbqMfECt51RQnDvYMMxUrX8W9bABbvPo5VV6n19FvMvrzbQOUToEbMq8E%2F8g7YCKZorOBKDjW7wpRIc%2BWfm7sQ7QXv%2FQEuEL3aQ2CuP5Kz2wPhDJhxhFV6PYoOFY34XUVH%2F%2BSJDqv16sA2kH0bX6xQeOFSJ8hmktVgpvsMlvceOehKynj1BAxWwgm0s2Id033PM5IarDhNgg8Uvzw3qS88VynHA%2F8fOm0lhtjyAZfE8CoyEus7wtqXbR27Q80jCIPwkmGIwbF3ABZ7U5drsSS%2BE6nJhzisnr8NZrxlGd0pH%2BKWZR53oSJLtgWP4FBIuFk9Fjcz%2F0eKUp71j5CV3bEADmxy7yxRbCArReDDf9pDRBjqkAaKbXJKDXxO4GdJVH6dey4rhZwbrl2zaxPQaI%2F6XHQeEsctKXCLQiOCGd%2Bj0nRbNxdQEFU2cnl7GaVqYzHjN6oMELMUoJ7d0aXNGo2HxP%2BqhPOOihKPbsTbIJDwWSglYl%2FIBdNvDOvWD86PixT4U8DEBtHzNSFlRL2VEyAmqbWnPqEeT9fQQ8bP4Eij576%2F%2BUh6B9z8Glh4mWMzI%2FmpcFxVZsIXl&X-Amz-Signature=50d7420278c6484621b829fcf509076ac883cd358485b52248abce413e56545d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662Z72LTV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T151637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoIGDkNQ8AVr5%2BLzFLthwXadv%2BxgM7vYEF3a4yXR081AIhAKGjzNQuabx2%2FyqySK0YOoLa%2FfRSf1S64jLeDFmUqcY4Kv8DCG8QABoMNjM3NDIzMTgzODA1Igz5QkPVEoymwbYRn%2B0q3AND5AGQwRXBBEyiS1fAAuUesk9d7aDBxX5qFlo9nsVd2M6i2w09y6px26nHpoVrSwJpSr%2B%2FsHSRSQSBHRfvZkz%2FERGLm4l5WcNj8NeB9N5IsyBCtSEz8SuIXflh9Hd9tZFt9u2tGOB0h%2Bb%2FmkFEk7apjVVl3WQgKnpWmc4SXCzAtjBtPES5KsiiOE7YP1mmuEeVuSLo10%2BGCT99wr4MKThL4ONSe%2FKMak3RmP5r%2FTazQ6XnZFwIUf5WNkoU%2FJB2qyA0RVrDnMmvZcCOGIgW12g6L22yct2INWxHRjh%2F%2B3AI7A%2Ft1IntoUL8gpmv%2FddY3%2BPOGpFL0l%2BfOzxGpmC47fKb3JioNDX%2B3z83G4XZ%2BweudWsx2evjI6AatDMHclViOnQ%2BFd%2FQRI1%2FlHTfQzy8PCAmwu3hgRetCFUQcXwW0zuOv%2FhJsKnrGZqSLtQhAKZdxdoOM3p8L1ei5ezVQGTI2MdK%2FW2wdRDJBZZlfttESMgDP5sivAnfHbi0%2BKfvbxTiElyRA0bpASEywFSamkHkZf9U8PAJVIlA6DOUi%2FJczvkAqEko%2BphM2%2FfWeBWdEwo0nOrmUHSQDaiwOQe2M2DGHuEhHRYMZnX9OzTUNTRflwd3CxbCqqTWKGjjWV7eyjDK79zTBjqkAZi4L2HiGDcYGdoTI3zilujZBJHgxyV2tOLR1wEagsIjyz6qscKxXUnbQi7DWASEloA%2BHR5FGhO1KiQKwmWxAeXqyUmMTYs9iZspVePzowtleqeO31XTdTADXiNE%2FnFlg89efLYVPMENY4ePPh1vHDqNU%2FO22E9JxagcmDr7gS%2FCzA8Kn2l6s8Fi6rsYvHtX49mY%2F2sOObxREhqlaTdbMoqhQBmb&X-Amz-Signature=79e80d8b2816c0b1b65aadd1e2e2ea99ddcc5ea515c93872491e697c6ae2bc15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


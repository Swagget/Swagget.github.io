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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJVKNF6%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T081621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyTn9ELXED8LBqes5jfY%2F3I33siTqGZ7iT1qz3XvbbzgIhAPOrMXsR9bu69orF%2Bnc0o6GXF32MikQ7qPcF6IM6OasGKv8DCEgQABoMNjM3NDIzMTgzODA1IgwxzNZ1b2nYk5ajYSsq3ANd%2Bz00QKtAmJnMqJiufCol85%2BmKLczGGd%2B%2FgCmnHra8k148dq6sX7crju6je5mTgDn%2FGpuSrzpTXiDIPSIUr1PlOqT9MuxVXAtO8yGYLfz7eQYF%2BVIGKu7qpr%2FrCFYlseHOxb7tycK7FXQuH8QFZyBSvwMQ0NMDP3AUcTx3gX7oyLxGbW2hhK3T9xl1RouZt%2BdSskiDBNX2Ouy8ewiD9BRNp4HS5RE5H5kc04cFZ%2BMI6zWF44DWYN%2FznIPWSCDdbakiqTveO0noyLtaNdwpxMvQUXuwcFN%2BPOqVEOCpGWBGO0N67JApUD1%2F24a%2FI93F7KZy%2FOhuuOjeIed43SJVhs3wiyB0USt7H41fNRyHRPZJb6j8WrsxDeJHOAWQsqnUOG%2FUS2sDgNq5R3ASLtV9kZZ7M03Xi2jX54DkyeNXjHQWJbuyTK0nl5VFsAbvaitD54Y7U6Gt0qcRPwfycOeO7ymL5HDz2gepuE25KpCCTi73U2FZ3SGaVEZrwhL699PPsG%2F2%2FF9CRPbZY7R6dX1S2XI0TvHH7KVGRCVEXX9HYGaLMaIDWqexEDq%2BItC5vrblFEPlPzVHR7pr%2Bdb8zXOQmqgl7tHqImOUvzPjbYMTeaAedyEt6rdFtPsloJzuTD4sPPRBjqkAeWm8DC9XFddRh6KtYxteY%2FKQWEfcFp2KUYnMLaVHLilg4QNv2pb9IvLn9ssMO594bupBwG5O%2Bx7y8R0iqV80vHPB7RDvzOt7wM5nuj3o%2F3GA3TzJpyIH8ILajEmH772yuBcuvc2GVeycU%2FS%2F3FVT4dgMJtTm76B7EGPuOy4bhZKv2VTlHcDFXXzwnf7EhNa1KeN%2BlZScsqzXNCz3v9yjX8N1Apj&X-Amz-Signature=4386863610335eb865936af646926cad405bcb2933456f298a8674c6de8e3c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


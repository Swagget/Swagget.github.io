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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HBJ42DR%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T185714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAaEEbKPD0AuD%2B7uCYo%2FtvJlF4%2BrGRdCg%2FRKh3BlIwBWAiAUfGfkVjZlfzzYpupiX9fQvW3%2FskStdOp03LZOmzqusyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMpsPZr%2FFrTxNni4AKKtwDlGsAxOcqg2IqLQxi%2FmI7eLQzNFJylaqozhe1%2BtOv6%2BFS80MVKZ8xzPrFK6l%2B5iRYKLUz73A0hyG1htzNB2OCer9ZougsMYMqyAduv6TpCH4iXz%2B8zxkTmGSWrwBOUKv1mreXLqsE%2Ftug3JNUKl1HvLwWdO4UfxNGBK5f6bgKnxGnv79VadkiMo0Hy4XauuSLZAXnakDBXeOyjC6XE7xcwkq3nRta%2BGzulL9gnpfoJ7TKEL1qHHurd4foTusUUl7eeANYSK6RCTGOQN%2BD1GnQogOpe3PODUNa2mEfIf6zz2wg8CTaA%2BjVM%2FmKqY29nYYn0Revk8NV4RFDebep1SbeaQXcMtjsBTk4ZdqVuzGfj84tyF%2BHazuChvdIolCjFtNI9icsORb0dOs%2FIS765vXNo9vtFnFvfp95Jrzni8b3Rupb4XxvrSJ24BTgvXANVRni8Hr2pFU7SKBQFu4Qo0X%2FhQy6WHhQTIfFBpwIXZw%2B8mPvt5xSvx9XN0FAqV1qdcFjtFMgkwaq3t8diVFZ55DJ%2BURvwWmihFCqwTKQXw8%2F9iFK3n9n3pJQTj%2FMGWPOkw7pWFStI42RFtBAUqVWh%2Bwbjxrz%2Fbc8Zc%2FXgJXqY17%2F8F73K3mioRbBlqJ7UUIw7oag0gY6pgEH%2FedkRhxOIdWBtfxs%2Fnjym%2FZyQKzOYeSbVBdDZO6jCD68UN7LXRqpv1mb0fF95u4Epvt2ElQf3aIFwWuKyL%2B8VIiDaEzcE%2FWujeN04CAy4qK5VKrBRVh7CGPuKnLVs%2F0xtYVdN7EWQQjQkXPuPf4QZk5Bi60HfZ%2FmR1HIOu6bQHAL8jZckTkDxSOaH1UWXpXQ%2Fc3SevdF91LUfu9jXyZNTnar9VRx&X-Amz-Signature=5ceaf12eaaa20ab82f31e1b11fa75becd065b859982998b7dc2026fe9332a226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


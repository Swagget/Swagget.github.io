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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVRRPQ7%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T161952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDRCbM7ALPbU4MUr76mzxUS%2BEQtDh4Cg9XRVRAgKSWHQAIgNfiPiSt3QRspZy7ik7c88x6sNPnqEFTkgYky%2FWCyGPQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHp7QlvrG6Ld7aUcHCrcAyeKKHqoN4g4lpqP10BiXLHTMT5pvwOLuD1Oe9%2FnJKG8WXlawnzCnoXJNPazETTeD3QGYpJ3Mq9nBKs28oi6k%2FUXVXB4g32absJ9V3OB0oZxnyuYuGDoYva1ivYriGxfhhj1YEBIJKj3yRmDB0seqVqeK4JIEttz9IzXoZhNiNerqPFcDsxZTjuBbutoCB3gLBBSscV6uT99wHbGrBcWZh16sn1IFo0MJnyuultQxCX%2FYUzL7wk0lMTBLjz6kb3elbhE15piL3xe8V3IwHPIpYLMhwnBV%2F8rYgr2L3iKT8D4C6lNIjZCOfKx74q9e2YUbX2VTN8V7WPG2gKLWBHY9dMFOLObhBWNQYPBN19Z72Rw1agY9QEwPhnBcOoJtHr1EOsGaWXz9Q0m2XHfQhwHUNkQbg%2BM74kbD0mj2kYjBubfRzab9WKE1Dllt%2FkSg3yCTmkPgU%2B1pH15UnQx%2BW3NQJqnS9xcvcwptEI6lZUGMfVeA2UTmOdte81GIwAhSqA%2BV6dUo2G8GmPAW5v%2Fz%2B7LvQyip8E29Mk6Pxhxfe%2BvAwfmvbT9HC%2FQRbsywo88cM%2BqZyu2%2Frnr%2BqlN1%2Fk8%2BmL1oaIpCMqEypS%2Bx4AKdeY%2FvJ2Tw26OpHhylmoTfklFMOHi8NQGOqUBJTMpxSlFGnevJ8PacrwVOOIqO5V57oqOv8Nr69I6m7bDJfLWnhS2nZzWEW1S1EAdxOMPs8aFDbDY6bznThHWbbciHe%2FFvxrsbDCu%2B%2F7NQlKCvdhRvsdG%2BJ290bNiRWJyUJUeanUKx073e6bfUksaP%2BrnSUgWipXLrGqJFu9gh4N3xf%2FCU0APZnNs9yQF8VITc%2Bz5GyPGzReBn%2Fqpo%2FJa0LMgSD9G&X-Amz-Signature=87f984d239cf6b807947de4b64ab951a6b4f290e9b7fcb0b8f804460a0e81f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6VOXVAY%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T220529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsbL1crM99bDrN1buFapj31O34q5uOHkK9B3Iq87EjGAiBYm%2FJwfXZFx5oJpboCdAu4Zos%2Bu%2FCuE9ep7NkFjdkuuir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMy3JXMnFKMc%2FHad2iKtwD%2FsbBibDpI1Ijz1Vc6pNdmAYjTgntdtaVRPXY4eL4tKiBoUMErcHrJPKXAg6VaYJ0uFazyDZlQVzDd%2BDFwdN1zgzIC%2B%2BXEnW442RZGKKDxk2UzEkXrgKzSqyQiHEo9hDjyKVKzn1pPyPz2qdGM32FotIt1x%2FYTYjqo%2B1dWEOlDKHQQJnXhcYF%2FzWLPEflkFYYBuPXiEIej3VUmjEQXkWnKFfXhKINnyAnqv43EsqUaLdjOkY8sHOKBb1z1DaTaafRTyqNQyRnMzPLO7BOTuBvjGffNud3gSDGCbyvgG5Jm7d64HcErqC7L2USIDfuvDN8K%2BD8T5EC4rRkFnEZLjqfM6PQ%2BkQEeM0fBJUK2OVYVvri2ReRQagQXOeCMA7bPFLrc%2B7d7yK2OQCvmDuG8%2F2QEF9%2FsiHacSz%2FGh%2FkThyoQzB8TUKxWvBHwS7p5MtylHgnnf1FwBaagT7XLWgx6it%2BKVUpYE7v1zqO6CC7I4h5qaOaRizqQytgTAj5eJGYjMmmgnRWXiXG3IhYEKwCVU3Jx%2BlHJ%2Fr4d284xxPNELFaRkRCCRI9s3zQoM92SnQN30bdMPkh1hWLtEaHJMzpN9DH0I1WcTqDQincqQRLPH%2FCMs%2BkHNvYVvOqnAKDWDIwmICB1QY6pgE9tixt940w%2FIAt7T7Arll1v70ACNNVb6wVg0BU73KapLnNqK%2B8dYTAcwzspmQitn7JCL8h1aOYKwIuiPGpC13Kvu6VXjPkhFQNsScsbWQxYCSxe4f%2FkwLfwVPKxzDxMt9jVQHAro7CzXx5t4%2FIWIAQx4HVT2ujAkAkjBaM2%2B8huVDE0chHdnYAyXHJb2gy%2FzuOp0iCHyPqLs00ohxtE04RNF5OOu3u&X-Amz-Signature=20aa5cacbd5680ab54e61261c8db49075700e22ba5ba9d9e051e5aa9e3267263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


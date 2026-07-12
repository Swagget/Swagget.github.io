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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GXGQLI6%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T213641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDWiAi%2FLiGkQPmnufuQnxjwcnMgC3Y37W9Fc0rALjdAiQIhAOPGT0a%2BSkj3I9G%2Be3tPwafQNF2idoq12GVOuefwoEfFKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziJWcVbtDZSr%2Bsx9gq3AMqusC9fHvPjkbByIbRZO7vkiftERykGNRxyCLF%2F1UHG9ksZHXxRT61MIz9sB62v7ZzXQvOwNetAcF0xB2BKuYJ7AkzrVCWbfFJ0Hka24zOWPYlVpLA61bAaDUcIK49tv4BPwBNODWq5xaUwXn%2BMC0%2BIDSo2oEzKuIM%2FNPf%2BXNRBcfBWalKV0kaB4K4Ld8gsgem4jveWTXJaeSoi6UJFZ1pyETQ7Vch4xMHUFWNOlUozL7A5oUZt4ag%2BLMfSffa4b8S1hSYaPahUWScmKIs1NjzPzqeSlXpl9U45VbzWjHBPDZ1YJTTMVVgO8P5me5Sk8zrFQu2AYKQb%2FyKgTtWmsqqdADyJPztJ4hXgIGcFyOfitNQLHA5bjjeD0vDIOOLoAcyaodBmTsZ6%2FTARq2kxuXXu1IN6mXScTo0ISQLFeIllWMeGttncLQ7J8nLJ0TOkTejAaMNMq%2FIjgH26%2BZfPXWOkcqTU5h%2FCyWkx7YgrknYPoS0cgjsLbnjAGumTseXNWB0et7n%2Fl0mEIZo4E0goi06ajx6s5APlPe27zgmWgqRsdiSX4N0ZJCHtx1M6BVZxJJQw0UHVXn1v6Ff8dffMma2d9IAe9saS%2FQ2u424jFtqh%2FTN%2F67jlpEXUfMYEjC28c%2FSBjqkARlPSZkmRIdmfk3RNzn6WzFedc3o%2F5ly4xN6OEkkMsHKznrgDU8aYbPP3Y0HHhpn8vq5S1nYxx0T4GOU%2FBD8Ua4%2FSl5j45ZPFccUM7insK5LmAccavlBoobwsrQV8B1aUXlmVLuKjHgNq7eCIz5QH6pXGpDdJirpEu2sGPEE1RkHJS5xgfJ%2FPAn2%2FsG%2FRSn9LLWVyegaRJkdKhZaSu%2BC6dYs2Wso&X-Amz-Signature=2197ce92412140579cc9fe376f75143e70b3cfb8bbb37e6ce360c97bb61c4827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


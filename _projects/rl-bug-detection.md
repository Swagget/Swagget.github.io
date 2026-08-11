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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZWGNLZO%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTJBobmzIRUwhf9RzuMBsmbE6Ut6vhdNlCY7UHQe9brQIgYP2oDvqBFMkMnTJOY5dYjK2yTJLVVQeacvxI0hukEjkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY4NWwHgW179MM%2FKyrcAyVdHORBlEK6OlN3ejv9hcSmVBK4M9jDsZu8xQYdF3Mic4gaeef5D1ONQXUpHV65LqimEOiKNg07Bv2wcJ78dAqpToSamii5pZS2Mv%2FmjQYMniI1ezbKJnUrod7bHHiomUH3VQNp1vqgRlYpAdwZRrFLfmlSKaRhRWcpo6VkyxOIVCWu9L1ck8gYvhqTpeCMVg1TdwxDeNmsZAnPOB9XuDGZnpM0mi1DCv%2FxFOX76EG2nxmvvJHNOJdXchfezrj0F%2FsZuJ0prqVNZbMKMbf5Vw8077r3ZBp9yqqflLIqNSDx1zkZJnBOEVx4jcUBSnD7bPMlXBC7Fh7woBG%2BhHz0p1jeSKMuxVT6MUZhrl142P8aofffNRBKjH6BCmtszBPRbclKDz2hHAgtipiaJAW0HbqoZqBBqhNxs0nTq73TloONUh4FXw4K6wAWUnkjoJh9NDBDzsjcamrJjVR62%2FXCtUIyX%2FLWkGIa7zHViN%2BDAbYrzL3B5szJniGuXgH6h0yhxyXDar4LT7iknUOG8%2BPKukBTJtJRwc28OCFcFRuX%2FD2XOE1z2qRWQUdsdUIHkdQzP66O6DqKoxDAGBnWWsEa%2Bk5775147%2Feiwpzl7a%2ByfwR3ZxGBJrRPO5leYptmMOnQ7NMGOqUBvvEQX7zmcFZjJ%2BFQzUH0QwBsxQxSwBY0L6se%2B89U2UDh99BNVz3qbgwJCwublkTqWFO6KLS8FtwmDkxqRpPrxj2DFuZ79%2FUo1esptGmvYK%2BIAVKhrl4HXmW0sR1yTIXX%2FXXcR1ZburQymKV4%2BqBLV95ZF9VeuEDX09E6nkwIe%2FImq%2FaXsfru3U%2F3Uzc9d547Cpk8lEJmzMw%2BeYlxBvSSQUJQ9YKP&X-Amz-Signature=8f9fbd43faf45b7097566b771adf81140a535a230df42f2d28b2142c598e0829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


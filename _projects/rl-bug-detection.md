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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJNILS3%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T224511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCk9orxEp8T87mRYS7eXZaf5rOOADrz1mtojow1XpiRJgIhAKgRW1z7Jkf1Rw99KqA1hAGmKobK6hg7YU6QYZ0PC0QUKv8DCAcQABoMNjM3NDIzMTgzODA1IgxfCvmF1e25HBbKDIwq3AMRP91KUJPLZg%2FuI46V8Nw7XcARpVVKrZ4R53BZAVOCo7chLT6QYVmnB1LSCnwip8uUEj8obcqY2sesI0oQYBrgRHSVIhAA03SVnQJjAzD9VN0FYIqZILl2vyRWMG0KGf3ZNw6LReljC2W2H95R9KXOWVEaPeeeV0bjI6H4KN5A7Kvd3So4USqHed1SXztPIR6oShRM2wzAXx9EZMcydDcP1RlJLWbrByHRw1aAakXMOs62ectsXNGTISnu82U34D7UtBEUtnWN1f5Z9DPPmtvncHrOGELqZ9nCxNArxwxO1JsnaHuIWpZ7JHYIhTRIwYcXHCeqZcqYNB1kfJxuzCnljGfwdsLhKWQ4NliiroeFB9GnAS9LbWFI%2B2myamsCyHmvwtPSvWFCxYK0QNuDVinmfC3ySmu7In2hAB9UkGIv%2FqeN%2BgLfvO4x8XFEZT%2FbRuVYgOeW66cTXZYNOmUQoIINytlEPQWEbC3kmZXzVJ8d4SIPGzrQIodLBzwDfM10QvCcqmqcPqCv0RQg7WeIYgLH1eZLJJH8SYHX9l%2F5O0qqcDa3uxUAJ4PXYQtlMUVjVsQj9m2iDT%2FKQ5JaPKz05d18MYpdFukAwP8qyBchVxoXzIk8uK%2Fymc%2BWn502zDDQ4qzRBjqkARM%2BKkM4hXMcL1bngZ8f7KxCaJAIVgvIQspLo%2BYdLee5fab0fLhHhwk46e5rjzy1W1G8ht7Tl3EzuW0XH6oczEXYaoGp5N8pNvQLSpEwF1kTkfR8ZDga512ipyt3BwI3C8dTja%2BRUFuWIiSRLN1ac%2B4%2BxHvQRieaq8HnRp3le8ikzrVl21d7gYiKNtCa2s1f3O3S54s7XK5%2FB4Zt9o8FZQH%2BeTFI&X-Amz-Signature=f3dfa4a82814dee6123ba12e5b3d4c6046202ff48192bc1e746ee1e7ffe04b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


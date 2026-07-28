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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPLJPS7%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T234734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJFXR9AjN%2Bfs%2FYG7ROJyxgW82oHh92Yu8AiAHft6ik6wIhANlm3607S9bVtILqi%2BaB6r58uzca92lHgNCRcXUlMmnBKv8DCHEQABoMNjM3NDIzMTgzODA1IgwnQqiOnMHkjGyan2Eq3AOheAAG1y3YCV3cMTxHB1zBJT2dm3KVZREX%2BQO9F6qpjMc0ye11gMcK4VhSQIxzdFDRNIURwbyb7af3MwKlzkd4tL7zJ2q8isv8KBPzCDMF871HZf72qLoLhiMpQheYC9LWdRhIl9USEuIXlMIEUAV3jJ7xtntmUJ6j9WelvAjT3p8FRtL0mYGa0NNnLQ1Pv7N5jfa4sH3AJ7O1mFZJNP9805aPDaSz5x6jnVteU92mb%2BwMFY%2BHUQ6BgLij1ueCDjWzWvHzAHZLv8tknmve979n%2FVJYw304oHhUGBF3PYAMStyhiYxOqxOGFxDWkzYAFdCp5LR16pSKfZue%2F3P%2Fq0EMBDtvf65PqxgSvr2tV0AZhZOEjUPUJkG2qLIyi42cgwQ3VnhtYr9OqcLg0F1TLAQnACNf8mRW7UNfpaQkvF7RN8gRRJQ53npOJc58l0kBCX%2BAYrV5tLr4OBUjH3kNpmyCVORKrtOwVv0IZpRhzPM5DQEglvTKL7CAMP%2BKlBHaGwYdYpgelk1LmRMo4%2Fr2xvch2nZr%2B1kkZMocc7VpqZ5uFvmGvtuLi%2BuHAG64gs24jUy2IOiv%2Bw4Z%2FGHuocPWBT7%2Bq4kC5%2FdVx42nSXQuxAJrnplwpw56JM5aEdJPsTDZ9qTTBjqkAecZYIWxkApaFEMCPrXHqSXKULQeS4dTklbPmLJltzp0P70C%2BrwFdx4XDjvI7ExLGAiMWc0WJO0WWPf01FE3MYCzIAFSsyZeD3SlNh4P9SVm9B3EHFLxeDKpksdI0Ryopc8jRrYN5rbSHA9D%2BL6pcp1TvRi7UfLqtkL07sBJSat%2FuKyo9iOo3GzvlHLFqhm7M3sBqlnN195uxwj%2Ft1dNdZiD8lCK&X-Amz-Signature=06792c9812142d6ce4523ad71e4c4dd16e6eaf2d1e8399eb843e81c54fe627b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


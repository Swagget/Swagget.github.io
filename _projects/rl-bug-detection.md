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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRPKAKH%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T234603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCO3rFfBBY%2BO9YwqnBI9MSCf4GnWLrhklN7gumPUCYt5wIgCZYLB4je1GohKaoB866c5HaNTy4O57q2Mjr587V4Nzgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKGeCxo61co91RkkCircA%2BkUl7rE%2FfYnLwrRAzgo4dXFBn1C%2Fx0F3AGgGrjDxvTNw6j0jcFmNuBUIOgp9TEyjtBbYrF4f9x0uQSHSTAilhHIB31VhwNTY7AXLc6E8nECAuczFplz8dxs3Ml5sy1RSDif5aFLAole6xdQNPMaRShWi5LgdhTF%2BrJqoYZ8mfeSJdRH%2BHPfBBPMvxhX0lE91rc%2BfF0AwUJO%2BMWXWV6F3gexaAWTGcI%2BhWJkAeP%2BJtFWppdcaukTaoOQo1NtFrM%2FxuE6WiusDx8CHP0Az6sqTgbu9UTmMJYB3ec4ttqsu0fS4PoooOBhFybfM77upjM95yut1yP0a9aiABpk5RmrQB8O4xSFWm5AVHukVh4k7Gijasq2YTkPykFsNwIuH%2FlDoi%2FxQgVHVOVT3MxJmFxkTV%2FYiGaq6jfNQnFJ9K9OfepV8GyTCeMEacBxRtsBua4Kza1X75NF9uS0ZTw0VLFFNDmW8EPBnrt5Y1B23rRfIsFZNZmqDHhnOiPqnbOsvy1a5hgsQ8prlHfqn8RM%2FyPZ4%2FCjqDp3qbkRSB4jFngBKFS9VBXIF5MXdp%2BsLdpmQBzqKHsdco8eJ5W%2FffrM4ajsJO3qaB6lXskRhEPDrsiLCv3QHBp5PzkgAGg%2FAgbzMOqr1NMGOqUBr44BfzhfylOXtM48l52rDBCVJ581SdnkDpjf8RyfJOlNzNk8C7xnKGX%2Fo1uk1InVpKqjqB%2FziRGk%2FNHRuoBdqf43KkK%2BAjIvU%2BWJgr%2F%2BHgd%2Bn%2FxSwL%2Fdvq0ANaWJF6bOHlWpm8gMexF2fJGZ9r2ZPX1oq1r86fviKv%2BrMJke8iXaiUMxf1npChImNEHPqWvWOoNFOwLUx%2FspUBHo%2BK3%2FeyxP7zZ4&X-Amz-Signature=0afa4be810563f88d37bd32c7f280e5f039ee8ad80ed4865e2042b6408db005f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


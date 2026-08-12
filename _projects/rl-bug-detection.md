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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFFIGY7D%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T104831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDrQR2JhqZTQbzjepfsPgqHxxYqz%2FRFeVJfbSsP0QrSrAIgfYUDzIXyuNJYRhJgvmrZpZAkceDjH29nWFsw6TItKmYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB27sa564S9L9Zh0hCrcA37rPTXfY0Rzr2RF2VopvLzN9fbB0zA%2Bg20Qv6Um80OW0LrpvIruflxoaYR6eZrEc%2BOM29QkSh8EGtvXhLeKnATq6CODzORun6zyNq04RWn29OOtWe5OL1C2subnZ1neWbU6bNwjaheQIYqCJUPm3iAWoy5Yfnfs%2BlzwMwWKOZdIYZlUJIx89s0FSqo4oHKDlPDcm78p9xZgnvE%2BaYAu5Q1AkKJmciG9L%2FoGkqFMv7S7ZYCkyFiNUkosN8kYQdux0IyaixBAYFbck722WZ2qRPDS3kOwwUeIx3qAeC3Z%2F6KqlmizkbU2sRhnP9gwKHv2ekjKx47id4oEEhqqsXrgtTy9zMaeRiNvMQoTakjyLj6f1dvec4%2BqkjHA7awau2K5EYhoRKZWW7s%2FG4FuqSfv%2BdlN9iBZ%2FPPeqdyAyqp1Oy1nG0G29yfshAzxcHeNqNN%2B8CBRPf%2FITfdKNT5%2F%2FkoW1ytXxKcrzQ1gYfot6HHw2szQW5a%2FMky2dhxgcDvLT1z6H96%2B8kfiZ5O%2BugTou8ertp9yYQ8%2B0aQHqsGz5IwLz0QfDfOdvRuxdxGe7iXnkBy9DwV%2Bu%2B3sMthYN%2Fm18uC6TDniNmdumJk8R2bSCchgvbfjogj0%2FashRdYmVsyDMK2c8dMGOqUBP18Xc2qRGrlH%2F%2BqwDY1kTJZc6CF55raGQQNE2F7gUGjExWN2VfabRNXKOatn%2Fft0eT7e7PNEqB9vj18tz0A9SFwapX35JDb%2FVfZJVyTgMyTsMoj7jHeQutaiSQWhAjFxsU0ROQDulBY7Bg0jL3jbOkF16T5zNB2YO9X7pOtD2I%2Bb3nftM1kNb7TZD270wHoIuWM21Miq3OoZiIL77PSew3XiKJ0q&X-Amz-Signature=73e0939d67634194958a4723b3ca2b35b7f17153acb696970182c6c3cd04b41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


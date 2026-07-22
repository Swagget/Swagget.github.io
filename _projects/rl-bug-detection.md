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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEO2GYH%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIB59j8PG3C8sCZSshiBKamaWyicOn2XuHO1LhQZPS6yHAiEAl9MytJesWVj%2FZJHiBt9MXeqmDTTNcahm6oKQ%2FsnIcM8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhsOkL5k7Wy%2FtWOlSrcA5iHCDCVtJHkQN4a9iomAPjBTjoyRmSC1ivGg8uQchwvt9RCcbn2Q6xJKbtU2U48Qr94YGR9z91kNiuer%2BqZMCVehqCOFa4KIK1%2FlqwNK7c6Na5lOi8NqKp2fqDcpC0JLwYlcVOeqP8O3h%2F%2FiyLZPPp7DgrUtxd4j%2Ff4xyCWbKGQ24ncCK9syD8fTMI5hat5LlIX4%2BtVI6U4IISTRbyh0ZwocOtlPbPg4GgsLrDh6ASBYUT2%2FHMXJF%2BojYufOkzoniY%2BmAh%2FkJfn16f2PCWtO17d6Elhuz%2FMfNgzA25DARHZj9cp1jdE%2BKWmisnuZ91l5ldf2tbRUd9B3nWFt1fPWNjdzfrZ4RlpYxtu3LWxCWyEm3VJn%2F1HRInwS7HHOdzWNxrFJwneDHjLTBUU%2Fumv4SQ7t29xTv0PzPHdqRbBLVvBCrRnmnjdIsLMoWqNgVfnLJ3tuEImvpQyNRjAj1bXvbdzLtzCmfPYAcosPIOMVlhy8AdCFVT0vO1TQsu%2FgshBZwfSLeoDD6s%2FYhzgLtphmPIxz%2FGEwtDNW9fWlafw31JBCucjwab9fymWUdshOyqfw36eMyq4CGK78OLGKOjcmNpoo32nu2pZ0j32vV33jBHY%2F%2B2g18wugwTOU3vSMJWGgtMGOqUB0zUzRN3lqFxauCjPwuoWh50bnMwCKi68R8kjGpdeZRpwYlaL%2FTHOBLz6041%2FdnrSEfZAUafAapZCOdbkBlrUc%2FFfvClzAzP%2B2jKRnhRvSRdWcz3bGCA7H2p3EkhTHXx9SU5uvq%2BLWp6HlqBSP8l30crjM1FF%2Bqv0pHT57FBRZbHKRnMlpWt5Iti6bmMzwK4WEigW95dQvfiS3x5gwtabJvwbFQWZ&X-Amz-Signature=58173be7655146df85dbfb8c9b48e935aa6a37f6d8289e0ff989d943081fe6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


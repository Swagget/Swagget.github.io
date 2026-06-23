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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWMQLSXU%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T102604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCA5c%2BzQdcfgPmqmEwBUkg08ZKWGJZMfk89KSo%2BP1nF3QIhANuup0HZR1BG4NMhgT7Q3CkZ3yd88biXu1b3lnnjTIjRKv8DCBkQABoMNjM3NDIzMTgzODA1IgzNzAGOK%2BHc65YEDrAq3AOAmtjH43v7JvllBTsuyM5i4mWgskyowNQNmbiGKu4IN15maNCMpnmJoQffsC2Tp2jW7NRAZdMI%2B08a%2BAat98bHQElAlYT%2B57pbyyC1PmOZpfDpcrSZ7vSostdoSg1bc5BkWTcIALiKULQBV0z6UF88cMrlm7xkDinp3ZGbqLYjbbOD9i5wo%2Bh%2FUbIXJ0w9bBP4NxP2NJE58mLcN%2BkSzUQlMALm%2FkmuwXS1nhEdQOMrKukvweZdDSx0xOCHpEdzoOTWWCut3uwocGs7Po0su4NBwRJQE1kxlf4%2FZink3laaroA8x8KiR%2FeAoKqzvXmhxymK1qDK8S9v1O%2FHnx6eyshL56M72jKp8QhqP3G5RmS8r%2BnGlLjAe1QHh36Aa2VjICIHgSA1kA%2FIZunOh2w4VSZUDYVJeV7r6lDRslxxXYDfiOGKRZvG9xWf6MNWAIgsThs0%2FWwNPEVGSpdX%2BNlWRP1w5v%2B%2Bj8h33w1T4eiwRGT4H88xoZEKJW9CcR0v6xu5WCRjznaiv9OnOcS3eQOQYChdPkmoILZJS%2FhJxWU4JC6zWYSIWQNsEs65Vh0AVdaYGPgJ6L3iZhDAmdDs%2B%2FaHHKIbxWal4XW0U0S12JNO2L4zjQOj5%2FgjQq2TUI6KxzDpg%2BnRBjqkAXs1OsL%2FWlk5kfItYhWuNGKCuvgkbTjV%2BWG01VXpfuexDrPid7y2D3TIev0g7Dd7HN9mr9AK2hT%2FN69VigsZt%2Ft7UblurV%2FItOdTaLg1L3g5KhRMvUt00vYs8%2FXb1A1P7oDmlcGsHhnbnglWsBwZmgFP1T09DR%2BsLfnuxFCGJ9lA8Lr9CyD0%2FJ4sgJ%2FoqW26%2FU25cVLCCiJZIhraGJrfrZJDKWYz&X-Amz-Signature=699eee152592b8876846e9adec76e4ae898a9bd8ce88cc305f14bb50b82d56a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


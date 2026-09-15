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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWTUA2Y2%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T121735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD7nEeSbO20VIew7Nb621P0mGFJRWFetXOjSIRKkg8sSQIgX4p2BuoEGnAbqOsEyPUsRj2skjRyrsuddUBDAnOLn6sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgZdxxhNAP%2ByNozKircA1eyFOyp9e264aeTQOmJP63Cm%2BDV0LdFvllgf2nIQyQN%2F6V0WsX1jo9R0Q82MupEFhsLss15Ahsh1ZzqZYXsMCoF%2B2fkFYQ0ES%2FaqGwJSPZDSkQ2f3juyxjl%2BXYdj0XyHyLJ%2FsVR92HHMGVLUsN5LCGvBy66HpoEIRud18%2F71ysrBSPhw%2FMj6450r2Q0fG9FYM3VCewXx5rX3wT4%2BlL9v2jHeLIanxJSOlUzlq8IvdH%2FSMrtGwoGpEDfkvcFmKXFHlmZI5edSqfyaBgzBoPMymEJQBRKXXI19dMA0T09XqvZUxen7GyTQc%2B4aIcUrLC2DmQ%2BRXaRS36Hh2FfqhqwM6czdEiw8GAcYC2n6Nr9Bt7lAtfpOXNCIEJHrGuScxI3oQZKYWOyCIWp7ogMxFQcy0NMrd8BQ%2BsbYjwaVSLEUDI2lMUz%2FWGSlMPM7Q883v3sN1yWZgn%2Bnk9YyXQApDP86E7aF5ZgI9tLWbVn3ZxouKTU8fN5d32xQ00GcpujW5PC758ehaZjx0tWxjznB%2BzcN%2FxoWvc3mHyVafBOojJ%2FDvU%2FF5UG0cDfvj3uZd7PyY%2Fr9Nbdgy4AVtIJUI7k1eP5NJ73vcoEe9eIHmCrav42AFQXnHaIQHalKPhZL25BMMDcpNUGOqUBzX%2Fndb3gp%2FLmSer6twlgcBWQyn6Xu1QVNnrtakMxJsrMD8udX0Re%2FiXITOovVu0BcKwxXqIritl3dZ06EYB4Mal7OsnyzK28L3LK9JZBMK5JC%2BYs3%2BlowbnKYtiTLJ54URcMPSfZCMDf0CmfB%2Fz49H1LIj%2FYLmd2jGKXlmbaXmoWgVX8a3V9ZpOAoYHj0GC1Rg8ufT7kgkBRTxvwRwPrOCzn8N99&X-Amz-Signature=0b6bc1e57ee64dcc8128d25831678447239ceb797516b3f0d7d89449b481e29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


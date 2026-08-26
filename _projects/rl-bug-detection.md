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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEZYP47%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T122303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDEG%2BQbgdxaL4Eezd%2FHpV%2FTJl3D5ptAvdp%2FKeC1ewRcLQIgSnT%2FrmXvMKQPfBl%2FCkMZoA6lfz%2FjwCEeYu%2FVig2lTQsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDH9JpAA4X5y15eJD4SrcA6uRoHPk2RnIyswW1JpuMQlY2V6G4aMLoeU7ebXHYQ4ZdZgJW6S5EmIyMOB3Wqr3LV8EpttSHegko2t%2BfPa8LWdHKflZ6%2FJ2t335AOZmoghmVXQKXu8oavSOaaptJlHJTwRVLLkh%2F73fannO8hd%2F3pkopmOxjrs1zlsruHoWyULqvvg0Y7vaYKErG4I1zXVN9HdEIUjCnNuPHnN1dA23jV%2BeX6yT2jenhqTrYJv5ymx8lrtetm2Lz8H6SB0U6HcZv5Kjmv2Sxt4r8K7C%2Fb6QUDpISPuBZdzUCEXkwGDJllcPqDRcTslbg6ArnnhekUsnBo5zYC%2BEYJgZOGczphrpaSE4TQyzVq%2FaJvFJljchKgYe4LiH85TJYeFofMAJ4MtaTP%2FHkWjRo%2BGw%2BxzAoJXR5WJWbj3Y1EFnlcOwaiP1YU4S6CsCuRB%2BXop7WCIcxgScZFb40WUdpqQ%2FYiQPH8a5kW6olJJjOnq6iL2Hjsca1U4uGtwsBHGmuCZJ7B27jSiTjEDj2T8kQAG6jYUHvHhsLgNMfasQmn76eNK3uUkOBQDnm%2BSPjHLTOKIKxxCA6nFDyUMsovabwJDzkobYAnfOx1flfO8CuATw1tsCrfmoJdbw923%2Bnu0Y7e6tBIJsMOinu9QGOqUB7ARyQolJWwG29hRIyOS5ksAty2x%2BiI5OvwgT4DfWR8m6OUyW95UUCUNqmqbO7lf6Z%2FWsYTpbqwxMTkXJ%2FWS6R0dXBLBHlUW%2B2T%2BqhENKJbJovYy36pe%2BtfRWeGPc0uCLTZMkQJCuomFV1hZ5dcmCa2WCdEAL2dDlUKiM68V3tjyE3fkYkdEMVfqnRHKFHFi1flWvOE1SN3bmw%2B9bUdNY1CRH0txH&X-Amz-Signature=0f18a6d6e7dd6a35064eda71012578c11986ddf9ad8efbbafb771cca8680624f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


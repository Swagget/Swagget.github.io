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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPLFIEI%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T075938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCIXt1MIk8sQb9ywyITTmfhkcj80Rf6bt5LaxRrEr433QIgXW%2BQvnhYRypghpsppFxRZDY5w7FwGRRyBl00l3h1MwcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvAHut2HbiOIsDYZircAx7oHfZZ6InYrNvkxtCwv6MkllXMj82XZi0o2glD871e%2FV8hdXVLCvfYTlhJAdS8oVsEGx9iQ6B0ciLTkHcstJtPkJ6Z3KPCghzbZgbtg0zM8K7yPpMXmmrmxgLKqaHUy3oO4iL4ybQgTdmDc4Grd%2B2l%2B6lm6W3%2BjImJthRHG6LrArwOQNYkpjrxLrvnz%2FSCmPFBDjiow3skHEG%2BRp82ylHEPAmoRriIIQlDBVK9KuG5bwVQHOCGEMX2AWUkiUHU0pxsjP3SXfk0Te5MGrKggaMLsx3q7Avar7NGeFRLjKogs7%2BOTsou5tuF2dmQq03gd5cKe2CpsMvz5%2FfxNqaFINyRMUnpME5%2B3SIFO4gNwpMK34nan3e79Fcoynfav8RQOykOM3iQMm3u2Yt%2BUOzgINF6GMmsdXLpJ35kYsCLJCtqIXsWJqoE2ztmYpYBn1vJqAQNETAJp02cEGyetlicCoyg2HGmHo8G04Hd2Y3HqlC99ev8TQljTFZOftfekXTbQSzMCZScq%2BDEiCi5utANME2A1LMQUl488ZEPwHfHPeGZyAwUCa85txX%2B6yjrX2iAtjfOHelZpfupASJkJeWOTwtinuD1VjM5NJAkMqxtbCIh3IJyafIvqEe51LiSMMaqu9MGOqUBhU8EfzrSOI3LDOrv6ULmWMWDDIrm9diqAhzcgs3wikv0%2BOq%2FchB1mHyPUNaDA6IOVNyRqvKFXW4jNc3pxhwPuAkQuDGnL7z2VEysci5JY%2FDpWsp88qqrcha4I9CyLVdhLBl1yJTe%2FBVzpCAkoBLpmiz3PnS3Odi2gm7gk8bYLX9UgbgwJiHwJ%2F0CA%2FTq9XTOPhEx2NuDo6buYc6j1fSQSsP8Rhdx&X-Amz-Signature=1a014c90954462aceefa3cbeeb2383ad759f9744723bbfe8dd17641ec7b02fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


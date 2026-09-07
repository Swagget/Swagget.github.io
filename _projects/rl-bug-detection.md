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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7H6HAK%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T201311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC428ziGoM1HNMZH57ZLqwBGX%2BKxixqQjhuyecnneN7UAIgAhooBXSf7s4aSZEUAdAIGDrDSUN8XDvdLzETWUjyT3Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMloEDX25Q7ecd7GWircA7YZB24MaEwf%2F7Th3VUkCdJesZXlIQ6ldRygXq3QBTv5gT%2FCNPhN9mr2RY7DJ8H8P2YajkolU7oxdZ96Z5fMXwwhVKJSRDbuoIKZKpcez0xciA7oRMeNXwxaEtmGHptJCQIzGl1nxGPQVdAlvmTegUwGHLRCOTYyDA20v6tCnE6%2B7ntmcBwaGQytTBIF9fk34ODDSwvdHwfKnL3Sz%2BQKw5bXUTVrd2o%2BkiytP7LrcmIKxslO1YOV50kvC0BTRFVMJvxu8Gnr7Q%2Fjz3vwnhTmX%2By3KKq1ajlO5M%2B4IhV6L37OvZ8pRlCSEq4u2Sz%2BDaYKIA8oDCalLU%2B2AQ9vhVB2dh3a%2BINUDvPTHuccD%2FRMMjIdge4df1%2FUDkUgced54cg2k3eNbdxXsl1c26poQ%2Bib0Vx6feNypWrIXID%2BVGIp%2BeLjAKbXJb0ycfe9E%2FfioI6RvOiNcOCdmIeQlF3tbcn%2BkI%2FHpARbqdCKc4i3cg4TlzY15BJ6aZaNLvUELmdaHwbOc5CFeEBJjO5CkKZgL6UhzG%2B8MkevaqIdbZmfZPazoDOQR7wEWBHBoNcv4m%2BI8THcz0AT%2F7rQQ7ULJesSActwM4a8BZkjcJ3QSTmGBR3761US76WskftK1E%2BWKdqWMIGN%2FNQGOqUBWL0HZefI4xI%2Bi3tIOBWY2%2BmVbocIerUqywK4cR%2B%2B8OMk3AaxoAJEECS57CoNAQqML2lliuBQIcl16FE91afz5g6gDBdt2HXcNMsvMHsrWYzOI8usgka6ASLnCRIYwT4vw8ZF0vQxmnh7Zykjnx9P4nZokMN2SHc47qbnnkC%2FJGaRCCruCkMBYeFGp7T1KAIIY3VVBvEN7CTSs8oDf0u1TSRxmHnB&X-Amz-Signature=3505f545b7ba86fcf342410191bcb72b857d8bf8857cacd8b3ac551ebea99d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAIA6KK%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T161855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESKuKo3T0rkWNlUFZntMyRUq6E86s1p%2FmwS0ybyM0RxAiEAjDtxfltB2ZhuqEhi5t2k5fW8T46yju7VLboh0lPSyjoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5Byrqvnr7p5eXM4CrcAycU6hNhc7l%2BiBErI8hE8R%2Bx2ObqwGz9AQCHMM3cYHfz0hVkhHGWQj9Kp%2Fxzr247fAHfmwDOfxqFJzGytUUWcS6%2FfLEqsbLqmqH3v2a4pisGb34zPtfreqF52CxM%2B37mJFvyYiwIkQ5UVwItlJGTxGtFxm1lub2Ucaz1vyWHZcCJIxtYMqXV06%2FyfzbDzWr1od4iWDhr4eP7nA5NTeCgaFqOYhW1XNxRqBURB2LrUpNtH3n94x4t0YAg4hjyhYGnLWs2RMtIkvD8E%2BEMo1nkpJh8eU8W%2BrDHpMbreLCeyqAOH%2BfkOpoJbSbQcQGnQWV2S%2BIJn2iyO5lJK8WFkqwrgnuGv%2BGY3aN6dfVQDiUmibAU%2BtRwjQQavrcb19IwRYzC1gEjsunXIsrtzv%2B8nGkYTm8owDyaFAfvoqnf0TeYwCS%2FM5iZlWkPAxXMvLxcAhOoZGDomjvnpOjl7fGjL9J6m0ndXZMluzg3vQ8OV8F%2FYcfdTslv1zcyWcRToqwHTgacQx%2BqvN5Rmn%2BRJd3iVikdTGxl3B0VPXhd%2FYi7uaAt3VSUXEsGN%2FA5yXIOHzS4qa5PZOzYGwXniWVDKCB6ArepVCcIPhI88DfDjzouyhbh4X0vGKtjeGpwO%2FiUvZnsMPKpnNQGOqUBDPyT2PDn7qXLyIlfv7t7uMomP4yRa55Ts4lqs9T70VdKmOZUNt2cY2OBWT62z67EDqV6TvUTViZ7LXzDhVKEZQk1nzf1m6RoLhc5t%2Fj63iiJVZ2yLXG9l8FrRdSCAYP7NcxFuDDKDtQlHioBhz2QWzO0cEmJmfN5%2BQZ9SSt5RV6SVgDW3X%2Fu088LsIMIxJ2GfXbwQRLfUKoo1nYRlD1p7bfS7iF%2F&X-Amz-Signature=afb595bfd6c6ab790565d6b645e08589f251e872cdebb6ee4ca14f288b50b733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


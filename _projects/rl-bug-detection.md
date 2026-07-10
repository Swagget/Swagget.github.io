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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3FPUVMK%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T015712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCADs7%2F1QH2PZdYhisKaC%2FNvpaxxjyWrDBnLO540g7OzAIgGcOoU0oX548ZvAcUhUHNNfcSKyewepgyQbco0sCRP2wqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4J4jPJ9O2g%2FlAy9ircA7RXE8L9a9j9XNWeIDxWM%2BDmHnOBjtxld%2BRuAtb0ehUWMRuML8UggDIkImMmStXPSDotbALUzqQFx9w4GuXzDmYBVhWCYw8vIuqS3DPhdI0jjAnU3krAYFwCmFOes6YkRLYSMhdZ%2FDLSvDjuWEv1V9c8fAdQvY4FmR3o2DRTtHvSCQpWZ2LUJY%2FZEw9fz07cfd6hguQf1%2Fk%2BUwwTXRiU9FEHdPVUb7VM67yRFxLbIMtk%2FgCh6NxuzbFueov1%2BH4VvIycXR1sNZEShwD1f7fkk2UlqYTdKxQr6t%2F20QzOFJQEfn8r0gyqPQCMErCwfwXAyiFhTt5lLR%2FxwWxdVVXB9xq5qf7XpvN8MaNPLBqUBlZFoSQohvZW1VIwrHani3vT3s%2BmOJ9bq6gEtZnqyKFpaN11rwpCFLuRuTqBaUN71gE9%2BuEZPCNAS2xYbMP2KjWOmDKGuiuuOrCo1oPKrnRsksnnOfHuIxCP0uZdhEncFD4R96Z6MN5iZFd5wwj6TCuGcEFa86SSCSzd3lJISJg1hqgtIrHSixkaaQfYiKXJrf8igTy7loalShWTGXCXy1Wx%2BlpmE8ij36KMMeCGDdAnOct3Ydtw2QEPvUt27Uq1S2D4QTS1vpAt3pxwDaI1MMnBwNIGOqUBr6AR0MfjfYEfsGreRWI3BZQpPvujXM2Lb29CDKZmlmFg8tn%2B1oUaDTfNjizCbkgFWu6Ab%2FblQMoRe9VjZfuHXrYskFT0%2BuCp6DScfK4gwt8eN%2BfTrz7%2FKhJNYP%2BHXTfJlbXUT%2FJOBo0%2F8AYSDd37r3XzDVMh1670skOIhdSqWJcqzf1s7yz5we9BGeEuYDgExtY7ck0gfP7OTka5mH%2BmZ9Ak%2FP4s&X-Amz-Signature=435e066f49a4f851b4e734364882e583aae31b158823953c596220c2865364a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCOTHUH6%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T042253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWrnDI8Q1R0GHI%2F6h3dIzrfEgooca%2BYx5StQa3UkLkPQIgMF7Wpg3cGi2gBpjXvcqSXb8YXxIcwDJUOgfbLs7jxUwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMZTClsBHTT%2Bv9dlyrcAy9cXexJUaB0ChU4HtI9rt7wUm3%2BodTYGZ3SX5RS%2B8Fg4%2BSRUm6NHwWYZhFxALSEKTk9NEO%2BwARVpiN6dlXiYC%2FGvOV8angRHD4kHlUdoFZHNvQAX%2BdhM2FuHYgG3mq6IsjdziunCNSx2OGwjQPeBvbF9mz%2FRYblxo1Aybp789By1JH0zIkc11nN%2F99Ya3l%2FzW3EiQU5lJvbrFIK8SVTofZISPRSMXmXXMklXsvRx7D%2BpRDX47SRjJbGeIvPTsqmMC%2BQLOYXdfTLG3f3Xt5fgrl5m%2BIWfF%2Faut0dMNPyp3sSWm5Udy0AdiWuITVywEmT3p4dsbGzfyzmDFVlrUvACcU%2BOUGKuUpe5kExw%2BynTstMU77uYoAYfxi6NyCz64hOesM3BZRgFEaIGOEDusUuR%2F0m3EsdloWSNGOcj%2FnEWX8SzilP1bf%2FJCqGo53%2F481UZe%2BUZrivVWYPAnxGQqyVIh7yw%2FQKYIMvhRGU%2FBExvWV%2BklAG%2F3cGU1YKowNlcQydJCR3nZNsJD9IwUdWSrb6B4j19c2lpd6vScCTkwCxVdDc1JkCR3ZFuHZkTCW34kjpKML3zQl0QEQJNv6MUVyozBRSAVzz5SVTPusx95m8t0GNW2L9wHHswXd7KLT%2FMJGT1dMGOqUBnMPuw4ksHdpnZY4ycETU3hXze0mnq%2BsjsPNhkHR0pmccMdum94pavSVRRTlE6oeD%2BYeprQ60sEo6vEXEumHjLQo%2BcIyUT8Q5SInm29GIVRLwRZCJHu6uPXpi4dbUu9deApQ2%2FfeYNyDZ6H4fFBNaTffsdgwPHBn%2BfgXcfF7JCd%2FEejZ2WUmReLX5v2LVS8m2goPFTRNr3aDbQEzzckqYgIFay7Pw&X-Amz-Signature=bb7021a60036bb84274e59f93c27d2ee84a7fcc09f949b9177ac5dbeace5e254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


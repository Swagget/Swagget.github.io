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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RELG73S%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T052705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPWgwRNxcqml3q%2F2WrfjQ8FSBiFi1ws46W968zPop3nwIgFZEFuSy9xWh90ia5nuCMo2qLPmUN2vHjdM4nRXr3oU4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDI%2B5Wd7C5cIBXUletSrcA%2Fl145%2B5lo3PvuAreh6n0F%2B1QzrwKRjZtvEadsSLUlHWjqIgGeS5ow00TqVOe2S%2Bta2E4lM1ZZILp%2Bhgxfx8vKOB%2BsameDjzPsq2y%2Bt7EKIH3BMuQst7bb9f9ReOWbBNiUp7EQKP9T%2BhVK0MpuUWpKPb4uMP1vuBUFXnASx9vHg%2Bxm%2BUuytHKDHzhonR8VX%2FPg1wtyek4UH6RgtjFqRRsAfUelNxeGq6bjiGgNJgasPZZ581%2F7Y1agGOHUWHV7K5i%2B6Me4gnjLsbpDL3CyKUORLJ3b5m3FJlOd45PvvTsYB9hj2ks2DtTsTB83eZ7Vm9HRlPvGz04Y5Pg2W5%2FO2AKI2LWM75013RTPsAj%2BqQdFiDAirWUgWdfUce8OzTbiVZfGcND2oa%2FmAox%2FdRh7fay2ORSfMLctk8fF%2BDhFWJIet%2BdLsgBtgz9ifD14izvpzA3VLfYPGOofpLqV%2F6cGvLcFWXzgaaeSG5czxS2OWecC6%2FTdTzpIeOImqjw%2Fgm6tR%2B%2FLRmq7%2FafpP85mq%2BPfrFeVlNlLCkNajGVbFj7t%2FE%2BQVwmgoZeMAhr7Dv9tUjeVjvXd0Vy7KPJVsJ4YLiSwk91idYbqii0SLjrP7Can8yoMNHTCEOyy2XwCzOqjDHMOiyg9UGOqUBIUFN1XtK8l7EqxvJt81SGajN92IvhEs3NQDT8cQClQg1cYV9W10xQV6X%2BQPZvOX81ycvm%2BDBPlKd3KRVggNlSW%2B5oQO3YNAT5wswJ60tO393Nt5OOL6oGQUfkqt8Vldm8rYPAob930yIlXakZXaaIxMb3OLCQuw2aEdfcG5wUGGe21Vv2rFlpMrWZ%2BzY1n%2ByJGMQ06Bi7jGnO%2BaMaSSKO%2Fw%2BNJ9S&X-Amz-Signature=9430e57ca862c4d93fd43012dbaa323a1d1656c6e92f20b8b5dc1e7bd1d8f69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


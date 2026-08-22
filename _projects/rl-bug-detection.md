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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4QM2TM%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLAJlK4wk0wGkZkyoUcE5t4U%2BM%2FHhK0Qq7T%2BUaQQiRzQIgZiXmhGjJ5o9zlj9WRI4w7T8ieLOS9JccHvkCZ1%2FCZ1QqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG1Vzot2BobpJA7sCrcAwlunF2ckuNnOna7Pi3VNtJCgdKFtm7vzkz0UKk5NzWLqp11ZUM9Wrug54QY6cdtDDViifWEE%2BTV%2Bo6nZKqkFFeEvsqyZOc96UhcMrbNRR2K3AWN3EbxEfuTtKnH%2FpcHonVJ9NbMGHt1J2lk6e%2BLdXmBi3z%2FSHwsBTPYg8aaogcvj1Ac0dOdHHSjEwlkicklxzoo6Br21e47nC5weNVbvMyCJFkN8WPAyAQGbujn8fUiLP%2FobG%2BHSLdSNS6ivHLi4h6vcVOyDrY2EqYYhJvLKSPg6cCMetLeGRqiiBeJZOSh%2FzORwgmVdfGaXnbtE3H9eMj2HR5S95%2B2Bt9XK4HP1O8MbWNzoMfsO6nJjLaaT%2BvPn%2BM3ZgyD6Dihwqq8FI7GBMkddPwhABAlB0vT1jEb%2BXyZ3isy037IIL%2F2c6%2F0hpi%2BK9AsZpRSbHRbFsqjO2k3ieOJnwiXSkHcrjwJSWjfgMoMUkieq5aCFUJAcj%2BvDlLPTu8mc0q%2BtFPUUiyG9fmAl5V%2FzdP8ChX1%2B4Z%2FBk0Ewp0adMCXCdsDe58FOweJPpOwnXksgMXD81u0Znd8ek09EuoOoD6xX0rH6e5Zej%2B50AJS7bd6KLwsE3B8vQ3xUjos%2FrZ3Pw%2BH6szlRYH9MKDtp9QGOqUBcQNVBlphgFE%2Bzowzaicw2XCbn09LKh4v0SJZzquV2Ob%2BBaZSutb24BfjUfO7cbEMGtqJyBiDCkRlyw7B%2FtFlcXAd53t5wlRsNwN%2FeIdT4nRNTmlR2k4RWu7CRQkhznCnfSuTlw5t4voenzYRT%2Bi8ZJ98eyiOQwZOzj5pCEUzBFrZfXYPSH3x6ou%2Fv2rzqPQA28qw1FCvb%2BDsf0OSiVddYHotjJV5&X-Amz-Signature=c07ad421cd25d2393ef9688716393e46163a8b6746d1cac294106b3764331de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


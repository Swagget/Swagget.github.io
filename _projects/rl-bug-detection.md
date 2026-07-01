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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLLZA7QK%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T070040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD8O1WG%2Fzxlt2yNqmdAT9DV%2FI0wK8vxaQM1LCKEztkpbgIgOmuLqYW8Yb1Ow9n1aSVOWeozRC%2BzF41Y8Z6hocIwxVIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxrB9lSZE7E0MxiKCrcA3SR4PcQLg0JGMXfwCJ5PuBXw7lIpjEEtqHHf3Lj51kDXoI2vIMA9UoTlXaRhAeLbzv5fx%2BtloEJsbfUmnihCvJkEqCg5SKW51k%2B3vxfO1zJMxGrZFdUf3iYlDzCEd7Wq2Gxtl3jCFOB6IOJnEg7kABi69jEdeILPEBY9ICNwCa%2Bo1rfGo3Ute9kB4z3tHPgQSLFbbgqL%2F%2FUAGc8jvaKp8lGvK23EAxDZNTfEghnEvtEsQIc%2FzlOO0z5416lRqoV%2FgD1%2BLj%2BUxEOIoXhw1kNIBRCpi6thHsXhTRb%2BiFqI4UOjGK6lvdWr8n4cKedAc1V04Q61Yuhke4U4PMAuDKlASMoUfwVm83vdzQrzFS%2FDvmM8yBl6orrpOCUz6jJRhWXopJU11O4icHclGcE6G8tmm508u%2BseNvdBkmiKM0iBr29SMx7ivPRPa4i2aaKErhx5nb9Xud%2F9SsObUmg4iSTxYepmVoPXImK%2FU8sGV%2BW53Aqs4Ivcd2%2F1qk15HSfOBiMw44UEeLHCegeg7caKN%2BBlkOSpcCFBAHBeg%2FDAUpnYQHCyAskQ7BG7JxC9HeKkeODe9%2BI5m5%2FHioaD2c60XwfhG5gSq1YUvSOJvTGUVzIBodBv1%2FH03SqzVQNTPLHMMGLktIGOqUBa4CS29mbjOFdvfTnCZJ4p%2BRlTE5hFe4fqNmCh2WaMtXrSfJmS0YG%2BBXG9BalaRaUJDbADRIQOFQ2xQ%2F1S8ZKHHmcCxxwbNOG8jBqLWEtJDFkR5w0RA38U1wKWuhlRdomOsQxRmQyzvZuzVRLA5%2B7Zwcrb5ZF6h%2Bh459PIydvBsLMew5RanbsoJ6Qyv%2B9UxVjUdOUabvuEumhFCbdEyKZYuLwO%2Fmn&X-Amz-Signature=af67ca14a37b9428777417ecaed7023219193e8554396fd85b54953dffc6af75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


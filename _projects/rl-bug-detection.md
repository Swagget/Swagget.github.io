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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YYBQ54%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T000531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEPsdDYM8H7rm3psmhjv6X09vwpp3m3u5pSXyKgI7fx1AiEAhavVsdXngcOaaUBsLkl7%2BWoydiKLGtgKrAQDCbehBMUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVKLzYdBgYXOZrg3yrcA93nrkRDb3PBTR%2F%2BLGLNYCgjLMEEIGDZrV3aCFjfS72aghiYDFJ3xIOwiLs7GUxasUHh%2BsQYmoqsz9WmUa1EplY1rFCxetoWa9y0YC81tTB7JbT36ByKyIFCfa42EEbIdO6G6hEGm6i%2FSS0jo0xrfepKlfFEIKXsLhSreIhjx67qkRQWL9RIkUbLzNZCB5QBJN6hHumllHjiyEetmyoo5UCB3va9M9HYHPPkIKJMvH5oZLp4Enru9jx3KRG7qF4382qbMWOALeclHlzaS2M%2Bk%2FlPlDo8v4uzEC6cr0bWv5dbq2qlZe%2FsosVL2ou7Z3ndGIGEipSWUbnF8Nyw6s3rvqzDv8kQcjvakbwj1IcA8cbeFazH18T87oDodH2MWpLhMrNMWla38pGWIcTQVXbjrCSGmpaSKm%2FJ3VFW%2F0i2QTV%2FjItHDLcIRbABSvGtvtzDQBM1wqybV%2Fid3%2ByHEGS%2BL8Drq1DJoIe%2BSRx1m3S5g%2BckMqoLi7Mm09cOyYDiC7dSTRjf1aVg7zZ2ydsan%2FISX%2FZr24UEiqKGsloWQXjveyBDtBm2eNA5848GcyFxmVj3ylfD9J3lZXxrmnECF5Fk3Mt8Uy5HTD8Sn75O0HF0NTd5ERSIhJ9s8G32Y8nTMJTS4dEGOqUBiCWZYo9Su0Bnx3chH9TjKfHE5aDrMClBnb5wSzoVxs7ivzS1O1n7vkaR5X0hyzDcBjm0lO7PzsZDAgOa7R1wA7q3q%2FDHvTIrBD3tZSMXhq8OR22IQq2ziQ%2BPjfrx0dn3FYHcREwubc8qenLBnZM9c%2BE2H4RBC0QTyCaG%2FI6AIac10yjlS7eHIlAGlFxRNClB1N6NTVEmMmjgDsEfsdTDQJCLbjwa&X-Amz-Signature=39de93f9dc12edc8d5503bb95a05714725c4168cd09dd83315377e4572cecaa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


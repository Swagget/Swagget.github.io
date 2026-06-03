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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTBPPKP%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T102910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDeLq01iVyKt1%2FPktalJ%2FI8sULptm%2B%2FEaJk9vbzT0RzdAIgBSwPJ7ZyeSDx9SsG8cuqV3Nl23gV6XrR%2Fh7qbuxV0zQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDE4DbpaJRp7owYJNISrcA%2FIOgRSstOy%2BnUTAXQPIdIJ11wa%2FTLRN5z7%2Bgog9lU4Ie7c7c8rPS3qcFFJ6XRHAjl0DPEMYQ%2BMILUJ5r%2F7AIhv3xvpIrTDfbezyBi1Jysk08VWkpwRiRs0QK5RIQmYsZqLpXHirPFGHjErSQoxZ1ktIlWQuMMpHYH5XhFo9bdRXpgfQrVooqRyMzNaXok9d6htCt6Y%2FGUoR3kwMdq8SQnTI7mksksHX7%2BweNsm6vNpUAE34GQO6kVflLwcefNUM1it8Oxc5NseT5gTzn1Cg7UL6u4ZQOyf9sw5%2F5YUaP0w5NZY%2BhdxKIQUOJswFmA0opVO2h58sSWxh2tnwsNCpv1D1ARFLJJjlQJCJ0EKF2%2BW%2By8wLQITx%2FbLXOJNfKkkhpEVivfeHg0tsTvV3jG2xoJLVZHskk%2Fp4kgudUEwG74eGQBd0wBsjZWTkYYZOXzKWWBbqXH5oDHxyY3F0ug4Nsi7SYT6JsgZMGFI2kxIenji7Dp3wzyupGzG2bX3gyWfl3e8HCR5xVwxVH%2BXgQpVHNyNDtnAl%2BS8foanopAYzgxN%2Fi7%2BSWbGbvyChzbcnevNPllFAqiaw4xl88zosCRJIWPxEp6P3HfKVtRwSGy2%2BdBnWRX1TYH%2BvrnU%2BSY9nMM%2F1%2F9AGOqUB%2BStzvq39mWrE%2F791VihbWKZP1tUUNIIBpM5E9cvZYtxxNFrER1r9%2FAUlyEhgUhT2dCdCnIc6DoAP6sNLevPpv0fvCXfwdvJncA7nJhawv2Q3C3hFStb1Rcb6wrxyLD%2B7mkLyc0ghKi6gtv6ZJ4NsR43tRIvt2k6Fcj8OaFQT%2BaKVTdShYkJokek87b2TLuInftPx2Agh7qXbW%2Fxt%2BBo8nw9Ha0Zh&X-Amz-Signature=584efdf6d6728a069f38546a03717cd94710a094d15edf7a919cada563c4fd2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227TSVR4%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T224952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIA2%2B%2FC0QKHnFtVP8WOx0wamGKLwNQR7g49RgnoFRq%2BZZAiA7PXX7J3waE5ofXM7AYZQ%2FjXrzORG5zjXNTtxfbV3QbyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPLF%2B1OtcaCualn%2FKtwDEhkmLmAYMqc7h9NYilAz853vVjLzIz%2BQeLY1cOs6fZnuvoNyiaR4mBYJOpMLQroyroNvJYj6Auhx0bwOH8VGx9N2PDDKvtzO%2FodxJ0%2FvqFjEovH%2FKnKZRY78vbb7P1AHhITsuFt%2Fj%2F0oxh3amFj4cS7QJDeOf8%2Bk7j3tqAAW7vbglqJ6BU9vb6JtUv%2BBERO8UYY8wS6SveDnm1D04ygKAU1vahv63ngJH0wiRsaaWAC62Rz%2BpzeLrs2fdyM1trM8YOw2qGxPyonMYyUJ598%2BPJeGuqbJ6ivwPZTWUrU09oCSy13tBmXwMR8dSRQrlnFxtCUMT3%2BlubZV0J9YgYsAvFTuDG5Ysn3eyF9fWrs2Ie0955OTR7u89KKil1dVO3DKGb4CoGLr3Eh%2F3508jIkItOkTV%2FOpNCNP1sH%2F1V%2B1uktTneLuF%2BQI9x87L994wCXWTeuGRt%2FQyYRZOC%2FncuYGOD3%2FYT5x68ireDYNV2bJYJa11xaVMrPP3glsliEKcWzjCAOxl21AOvNabQomCZIjj75XiVg4p3FQn54lBLE1RNv2CeO47vi6h%2B5l8UgmGcdbc83o8QJJzi%2FUWSgb4G0GT9KD05Qwa1p9EXNDAOyThZsUv9BQwVJbmHyk%2Bakwor%2BE0wY6pgGeCnovNk6G2v3IcVcbYSOS6NxlUsEzpvmler6CxQFc9vIokTh3mS48DxhtAUENeuYpMHYanvdX5ukKaW%2F9zWCGuULlMiKQKW4RZha1RFku8AEibTuXZaxogHIW%2Fjdzz7X9S9nQQX5%2BRU%2BP%2B9LHkegkHpZeG3THAwCmNa70KbreFRXxI2dFbAmveZtEK49aY%2FQAEkwfP7p2j%2B62KgBSVTYFeea0qWSk&X-Amz-Signature=0fbebae2f70395f7a42e2a4e4865fcada8cc392040013091a59eaedf6811372e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


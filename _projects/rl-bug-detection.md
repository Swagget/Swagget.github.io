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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCPQ5VC%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T135947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCM8tG23VsPIidgitMJeiW7oWdG7EUd0%2F7u96KskzJTkQIgEf6HJcRRFeRAMQa7Gcy5Xs3oqFSQrYg0xf4nfWQGrfQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4oj5izdgRpZykf8yrcAxCuOKQUsIGSgqNaJ7WAzUoNk%2F1abE9nSr2gG6FMddlrapZf%2F%2BvgVCxZwAQa32DvoV7uEM3QvqEhBDgGtxgX%2FeH5sWI1yNwY13m%2FweYqHK4zGTn3lWNuMfj9IEk%2BvExLZLjEdnOinuMio9FXH7lnbD%2BW0C3ixB5Wd6wz4pvMsS2em7M5aeF8mu82KgvMfAXttqoaPWV6G2Db16ob1QGU0IaWmUZoOt2zK19WPvejxiqqK7R5QaKyxae4DmaJ7r%2BoISsn7FSdg8Eaq9wDwuHS1ljAi5EqAN5JSVmJz9u49fT8GZ7Cj501spj1wY%2B2KWW%2FM0zyw3wndYO7SEd2DF9ukRS3NUtMmFV3kMUvlCRls13cQ7HF7gjgk%2FjJqE9gvirJ9anN2XIph1l3Pma%2BJSRB7FlTlfgbUT8yw%2BRgIIzvuEm9ycAiK6Yhza5U75%2BiBh1p8F9nWiiUq8xULQiZk55eYstaf7xa50Cr3Ch%2FVkcgzVms2Xs%2F3AUeQbi%2F5cw4ebY9%2F%2Fpcgvrgb2RH2pJBdyIm%2FXoSb0v9kZHIrqUPTrGzQaANRPSb8fsK3LmqSrqXJMuJY9qOhxDU5FL0rp%2F4yUPWRk%2B4XhWPeScUAlfADHa40LWF%2FvcrnYUkghPaia59MMXAqtEGOqUBwDkO68DMnubbTVk1PpNuLITgaxUETtK9rTgoGXIkHkZfsBqzYQrNUmvmN8cgmiFPPNrCQylJSC2kzzV%2FlySOddR3WVcnGjdS4DUrq3AfeZEryJXt0g%2Ffq480CdZ%2F0TL%2BsNZ1y5%2BPG%2B%2FMKf9rfjTzgJa66ARhu4TMY8O7QpphD0p4Xb7NePU3g8OupSnAv07U8YefLhxVymmnRf1yNxaaKzX8JgAL&X-Amz-Signature=e6480b531854f938d7058b88fe9a301f6c4e134501db0555ec4434b234a2a18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


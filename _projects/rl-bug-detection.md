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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCS3U6F%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T043706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDfPwH6uXBL%2BzOF6KS8OcDa8ZmDN6C3UCyDtcejbpx0uAiEAuCZjkCbatMkL4A6%2FMdU6Fi6pD81s4rxLELtO0%2FB51Lgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBqmoXBExjVjdkGEYCrcA3Y4C0DZ4cAlDHFx0zrWw9FPcaK%2BCW%2Bkt3t9yks6kNSL07cHGJZol2Z2yaMZd%2B2a%2BkM2och%2BqUX6PeFLzYi4MKRjdEy2nQlKVjKVwlXXGsLmhcrm5yjRDPsJyRQ5mBtAr6XZ%2FmqYrxoakWLuYlucP750ej4JXdzQEQoes94I277LNBYKQ2wJxUmWF5rx%2BqYtj7j%2B81nLob0ExhsyuPOVA0tdnhYspboMRd%2BT%2BjYY7W1%2BnoPixbEnUJraWQf%2FNgrYNSwP3QgIWk47x4U0CJHFzOFKRZuEmNPts3o%2BLCaSYf5%2BGicgm58%2B%2FmmMihoM0Op1sjP3EU5hiwe3Q3tNtF9T6lhyV1MWLthlWHQDc1WQqkHwnufhZUIfZ%2BX8Tjd45xvUBZlS%2FkDj2w10fki4ge1l8sq67Z6dUEoEHabUk6GmAE9aVsqNDA270xQHEr3vIhFr2V4oX4QiE2E0a0fXEYtfsNjvgXouwvTZXwIRyaB5yZJT1wKNQXVqEj1mbi5TmVM%2BtLvd4who7Ngsr54Azmmv1hqVAHinHV8PaIfgXIBi4bp9jrw2yL9otaKLT5oRS0E6xZdwRg5q1A4WR5xeFvCxbFx2VsyNKkmKuv2nEi4xh2FugWzzpSGSGMQ4RbUJMOD729IGOqUBSF%2BY9VbjfLImqvv8TfthxyNt6gTcci8Fl3d1BUpYU7b%2BhLcL0XIQMWEl8ONBDh03Yo9qDDPG%2Fs4Rir%2B8q%2F9Fn1CTv1R9QOH0DmWoILgcERBPuVGn84%2Bn3GVlq8qYM6j0Mx335fEt45fbeNt%2FB1UUgANUMDgo5TevWA9RCFCohXp8gDnwHRd7q3v4fGOsQsK9BbSqDavkWS19XJgSPJlLu4tDCS7g&X-Amz-Signature=98ffbb091267d4532acfb9ee5f6d636ce007e6b0d91a6bf80eb6802260f544e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


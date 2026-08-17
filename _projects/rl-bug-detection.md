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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHO672X6%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T101902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDeFtK%2Bdn5YXyIuadKAPDfWhk41avfC1C%2BWFlwh11jfqgIgUBBR%2FMWAIadfySPVrgHDH1TWXW%2FBndG3V%2BcUz0giQAAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLt9NT3B98qMH9F9qSrcAy5cKsLZOuocEuceLcTjJ%2BBM7J1r46yjDjgoqeFxqKUuJqytdV%2BF%2BkUUOibKh6ovwvJCBAF3Bg2hWP84cP83YrlOIWkGlbWVh%2F6ofei0X%2FmIaKdC1gfFBNerjKsGJ0W%2FAI20n32YZspu2RmkV8%2FphRjkBaMuI63NdDcOC0F8s58FX9SaH8aNPUruU0O15QHnqBWjp9FI3qxiOyv5andNCtJal%2BOt76vwQfppmuiPeCA2yo7pzyFAz6c1jvdWym%2FAD03aRfJmZDKoPMUMEpmirDE1tdGLCndwhkOTXrQkUvHNCb5mRvypBtesaGfjqInNgC30vmhgCj83PIvVdYpHHXoHMWkMbWEgH08QiWIB9RWnPckLZfcDzBqJVvYnz2knyUagC5CjdeuPjQp%2FKzOt5J%2FXuAYvzSWw7F5uFQnlMJ%2FMlhOGcg6M0XhpeSsaRYN8xz84JNe2m9RiPWhkY1btORnFQ4m%2BAugD7jmRKjhaAjU6vK6XgxNudK16iEibaw3SKY3VbrYjhpgogvNXDDnwbc5ChLRCMR3b4Xc7diCg5de3h3dFraf0VvIKtCmBqBNXzhju91pUfq5NFWeOD9mvNiJBmjrn6mNcGWJWGS0OYad4S3xUEl%2BhLGhPOR0iMLOGi9QGOqUBOqk590laPQ4PL%2B26qmd62BVpvNiJl9j51RUEAUcz8edDtAgPbRVESD6XRdyBFum7wIRUQJSO0WXNxThrXc8vSRuc1HUtI8P6I8NBwTP66N%2FGVK3E1%2BzrxTZB%2FZltzsGgMIaYHWaWPBsSIeJc87rP98es4okN24ezVRL1vpEyY%2FFmXU7qnzf36%2FvJHNAz0VspwZwgnju%2FjarlMYk%2Ffr1xGq3y0Pjq&X-Amz-Signature=55d3d6a239a25faef35d8a8ffb27c5d4073423a01c370761186d0dc3fe0d6dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


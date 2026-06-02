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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLLZLC5%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T135616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDneJJK4kb4hhJ5%2BVMZbuIMEUvBYy7IYWJrd2v8QiMMagIgD4SUa%2FHhBGtQck0NL%2BXI1kVFAZsB1DcE915%2B%2BhoUZIwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPraODJfIZq2Stf7JircA%2BGipggvVQ1ZA9XLPXCHdbgyjw3JMz06BtjIDCOqUDs2N0orZbOlfNw9Pey7F7rBUIWbzhODnrZD4jpM%2FgnqfmLkzsyrH7w5gxDlLxWEKTcRUGvTIlmnBCuHzlLmtVHAx%2BRCHN8FZiJ53jdh4Dpop2Q8Ni5emD%2BPAVDWReEfeZaboVxk4rGjeHbTgqFoK2638EhIUipymmwnmFyF2xdQXl1UVQYFbLdjfa5lfZ1ZP0oYsBU%2FPItI%2Bb4vqsmgyULe1Jv%2BlieAFbJUAM8e1MXkY6NuOcd1nCegWmFo9wR7fus9G5hPUPENQOT%2FAzVgDvz8f8h7Xx2Es1SeOAqB9piNfExAs7tBtYiSg26ffH37G79XhRQOG9IwoCzpU4phZirtmPwmGAbZzkI9u69FfsB1zAKq5Fxmb7ZjfkfJf4zws6GOSx4f5OqXkgpoF8fd77R1Y8VhX1mVMfFKuw%2Bvdg90IgLDQv5WrLsMtAR7CILcCZh4uwM0VL7JuT7UZ5pQi0SVAaatiQZ8f00hL8ZKEdnVkoXklTOnIaPvnNSb4x4wW0cGPLlPHS8xeDthgRkZ16BuaHaxj3VftMUCSz9GOG5127NSr5YcbeiiaqurdAUES9V2l60hSydvz51rxtwoMLG3%2B9AGOqUBtt%2FOBsN8bEWy49kb0ZP4w9GpX%2BHM8Re0uaawOVOIpWex0vU%2BKbzCT2c7V69pOqu13OvgMNlywBtjM9AvARkQEADKNBrAkqDJZyDEHnD1zNXhJRpKgxcnPpVMcbraqcmoSLj3lelj%2FGWrG1Y2f3jn1K020%2FAlXy50aZvHkx6OK4dASYrqLTMmgg%2BnFF%2Bfv9yckIpNbBw4aYxibETwr5kTXqGheevr&X-Amz-Signature=0cc517ba4775014876f5b21b120c10d1b5f424c4fa43373e12ab81ca04284721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQPRAOFG%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIBySzV15NT0t24h93ZEXxN3nf6FZXRkvNZYX7BmWH73cAiBODJcVefoevGA7%2Fh4eYidtyNj5vQ2ar35S%2BzrzlvSC8Sr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2BAynyGZTCapy3tlxKtwD1RFvEpgbBicFQidIlRG4qkYIsBvhdx0w2zNbona9rfn0REeuifaO40Z5DGfwrAGCbMokiV0eeV%2FNltyuobGXfrWhCQ9oMXn3WFc8Fr298qrZQzZmZH7BhTBbZ%2FdO9R5O%2B53%2BZEk55wd3wm0fSb7uSbF2suGM%2B%2BkZaWSRRX736%2F5vQmSWlC2CCWvDQVpvRtUov4yrcblucpgOgzMYhCt6ecVMj%2FPMcDdrEBCLiBgFkME9Wk6vGaVz%2BMmefHPFZLqPIf5bWhRQlfFdvWoZs3by8q%2BVBlDg4Oo3yHDzvPCbfLTAwle9qaXkmD6%2Fuidd0sXSaCZhJiwaIx9tVlk%2BPcN1NP5wH2bvZabJAsHmH%2BeJLJGW4fz9beKFZEZbxnkF0i7%2BgFWZ3fwsMnQBhU3u1XRyOz5%2BZcnFlITCUHOpTeJ5le0sz%2BbF7y%2BsAXs0ZWw2YBeEolVHvrJbQbK6sWT6EWaxRnu280Ivp6qxp1Ix%2BGshQkxvAPTqqQtB7UNXim3z%2B71q3tgHJH2Rh2NU0%2BkxfuOZkKa%2F18gFbSQ8809aTcQFZIFq%2F742xCCEpXxcr798pMVu%2FUsEC0OBnErcuUOfqM9jpZUQ8jPjIK4S4D6aSk6HEPSi%2F%2FZoZLR65dklui4wpcaC1AY6pgH6mr0dXzxryxgyUNhAMyeauUW%2BQ4XLoXk5JIg%2BKLf1GO2%2F8srvZilMkhk9%2BirVTmX7PjnWTEcr0gjsPL1%2BUT%2F9zNyA2ScbX2UWZDhwfYIE5oh6oxlJ4Oh3pj%2B4c%2B%2B1bLeQfRDItXaXIdccSVR0YdFPsYrXtXG%2F34iqgdZ1ty1aNnx31RGRtEbL1GQZM0kNlm39gRs1azlfOS1JrRssY%2BzmQ7Wrzdek&X-Amz-Signature=fbe8b3bfa5e8b0fb1623279fac4e05f36794a41baa6bab8d033f64a467c4a094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


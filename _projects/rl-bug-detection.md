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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ALQLMEW%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T231401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkEu%2FH%2BpajapCfsgi4iVin2nSwTwFPPoNePJb561NZmAiAp5tB8jAIL5QPM1CwpGasgqCfuN1ayIDQ6r%2BFgQ84jfCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmwY2L2K6ApTTK9VjKtwDMlKcjCwczHGGwVS5%2BYzjC0yw8CjhjlI1ATKfIhdbJIJa1PjLwgXMQ%2Bgr0sybMpD1o3I%2B9zMWELyzsra9WoWJ8Uey6oJ5CHpRhhTbuzH5s8HGQJP3GJDIL6%2F3WRu3uQG1hkiOm0OBJNLqGnOzNRUJ1vnXNjN0xyiirO8EUHjVpqqTTW3lHy1VB4%2BVCHKoaXTnwLN6kllkMCn0li7Eu4oLBqt7LQ83OyBodz%2FaBwtauhwaKe7Tt7Ge1LKry6onhgooPEGd9dUOXALohXvPorZBvzuxLcs0RLz7%2FqcSvovYtafu7J8Dm4rO5RiSht8SCqcUoV16BlNSx80tP8tjkhvLkP81R87i%2F%2FNkp32%2FKmJmjGLJH6MNATf%2FJ%2FSDQ1sW%2BLznpNK4OXVRDxu0C%2B7C00n3aO4lQgqKv3tWt2QVURF12MjPx3uYp4GUtcVgvwbzsG%2FW%2FFIke8WudE45kS9Gw9zJOoF2dg%2Fi9YpKIU6WsMOy%2FSisqVutcY34WOYYtz93i9IV9NKDHCnPLdM2MCyOuYSZATH3WmnidPtY1rDnnVNO40WVRhX2QTfsNXhe7dQ%2FFBVzYAsPjux1f63%2BOJ1CXs7WHh8CwBGq0EoMwl6EDNb4DZPEES%2FdVodf%2B1ADhoQwifWd1AY6pgHaISfXmH7h5o8EztKlvnDv2A%2FHIzeEwRZAo1VLkAaTNYt5Pi%2BXqrtCx1zlpP0uJSaczzNg2y7633NiVTRUMPJd%2Fa3iIP9PaBfTUWV9fHaMC6hTzCE5Wt5EZn8YabnXI6fxLn%2FBx3tth%2B1sY7z4N1LTG%2FeGreHsIEshVBpFNXGIBur0POa%2Bw29NdFLLRvNl%2FIRm5%2FpaEe%2FWXIwXrqKylV4I2h%2BZk9tq&X-Amz-Signature=9fe7505d252578455da798489d00db11cf9b06e433083ef22ea5a3de6a037f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


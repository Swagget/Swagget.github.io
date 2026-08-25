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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETLGHAP%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T092216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDMnyX3a1hQTdplGY49DuSv1YC%2BQ0aOpfNw%2F21fmyONdgIgDK%2FdTbkLrrNzb07KnOshgY%2Bqx1wwBS%2F0Ixiwxof9Dewq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDFVjfUi8taTYedZmgSrcAxxM96k3dinHH0%2F4YS6EpjoeDucWNUCG%2FQELwQGDcLKYM1IZ4r%2BPG7QkOCgQfYPWHOxI3JNkmvA1x1qB8WAy%2FrevCr%2FK%2BG%2Bw%2FfxZserunvaui%2BZQfF18lyHRIoEuTl8M8g0XLCCH0y6Xakukan%2B3ushg8mvkvBgUd9UVt4XeUtzaMe%2BsqWSdFGJ9hg1wyc9FcHjhOMmEUOTJlRp7Z3FpatN7QxWON8k0vKP9NNVOMNLWbgyZfdXB5Ci6AX7g6SjqDN7cQUjwCS8jEZLJlY9oENc1OpH31AVo684vIi9CqcYXP8F7ArGApG9Z6Kmv5j9AW2gJ5czCsAKbmgoYLxiy5XyyYDdfSg0S4ygfcIXJM4ywSaG%2FpsnLpgrupcU5DnW2yYiuI58EBlRlINJsjHtXwwHzZHXtsvFiBPBP%2BLaIPV2fWQ0MlSfeXABPbIOKPtqAxw0ueiGlQWgdTjaCCUXvWRxmgRWrLxpn%2BwIqNdRMHkO7vBmmDkiH16lEBw7RuhBDMRcqeU%2FTQ2GXzEgfwrgCbPLgbLXEHXJ7X0kdwwYzNmmneXonKMVwSQS%2Fw1u%2Fvda9DqHBX7PsnsqY2%2BRm0YRVKjScnpU%2FRQzeE10vdYwGtb948VurhtB%2FjNujDa5CMIKWtdQGOqUBoG%2Bdj2F1P8uFazDkNPoLtv%2BuYEHVEQIHxRWBDVCqKVxnXTofzDuwXlvgYoIkZrXX0pCELrDKNVrM1jnHvaQ5%2FsilFlYR0xZ5xrtg2ce2oyyjBZxeY%2B8UxvFEJ%2BzzC7bngCtALu8kl57HpysTOff9dj5d70r1dKco7hfVNorfB%2BTw3M0jKvIxw5dGE3esSYWO63JbUX4uzI2dLopqF71cz3XQr1G1&X-Amz-Signature=00364c399c78eda02c8dc61f8d50dc9e935774deb277850693d3508798105250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


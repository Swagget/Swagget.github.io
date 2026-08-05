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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5P3GB7%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T205339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCfFziFqjONb4nIenB9RR5BveUeDoBuZb7uj9YRcp4XkQIhAKrhdR%2FgSuLwG1iQGyqFhKjxvUWa4HMXPfytnYpjfN4YKv8DCC0QABoMNjM3NDIzMTgzODA1IgyWfEa1ezdvbusxyr0q3AM4uOADiTPREmEv5vuh78A5y9Hxgm%2FVWILLgbhJO496tLrN7UQlBeGvseFvVQtxhuAJOPMlSMwrardkEgkOiHfeVdwD1SNztbkzXuK%2FnSlg4aM8pQeLqJOEnnTrBhJ5DPNZvQVt4KWV3wLPJJQhM5Qx71Vq9DCS1Jqe%2BnCXfbu15xMw15g1BARTu4OqaE6Uo%2FOtcY6Z%2FQT3UFUxciUSF4tQLwAa604o250kRosht3iH5Kqas3097g0uhG26Gf0SXY0nV9KLwv3dhhpwCCE7DzBk1qXtnjNjuvmoF%2FfZIojMH8SzRnJmpV4lAEfu5F2YETgfnLPEgg%2FnanjV31H6hVsXuuK1Rp9jWM1zeEdp8fyj%2Bo2bQVRRaKbwKXe%2FVNSIfZi3XKY6eRrmK4sVCWnYVC5WnHEceBznhVVSZL72%2B5hyuL4dc4d8zTx7tt7tGFyaVotRXe6ovE9S0Y3ouzUyMjl0WKvaMkeWDdXuNltE86osrMdFnEIwDoOTn9st5VWUsG7I2mRYD5pDVaKimsjaXDbnp5NS7wT6GJZ9EIvlK%2BEaB1FjnRTiehXZLuIyPVSJB%2BIPNXWop7VAQpGmHaeCjiUsk7d0EFhsLlmet%2BJnSigw4RbD05w3rW21TLGARTDMps7TBjqkAQ6%2BUWnx1wAJHpHi9R8sNsdNwyvjlGwPMAiT6CV8v%2BbCx%2Fv5KegFfS6qVQyh54WqTA8iqDIFefdA41ZPytZHNlpkGhBgP1rv2qUw6ZTl3flJUHzmBV%2BCvd%2F%2FSMyDBiybL%2BOSSvB9jvY9EasfZDbAzqtBXQvrxZ2xDyciRHstOgMN6B8KgcWIAmQMjtSBAQA1r07ZNmu2SgLU3F%2FUy5%2B0BXmGlO5%2B&X-Amz-Signature=e27250697cca239aae61b8a458bd87f1073b897006024e3ff01c255683063210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


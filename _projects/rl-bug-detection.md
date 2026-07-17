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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUV32MB%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T111201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHso08w%2FRV2RnozAq4jIUp9ukRdAIabjjkDebZNqy5nHAiBGpMM%2BtWFoTKrclkfJ7M4zzL5HroGl0LEBEC1dbc9VWir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMFIDBL5V2gB75vZEkKtwDLXMM3CHcXzUEvosYLpmgBME7Sa4fJ50O4yvAzZdX88TBfOryO%2Bjw%2BY3doso3m9p3DTcP3lpuNyAt%2BhhXXe4NYS0i0uAK1A5nS53EABM0OlUCN8DQ%2FI3Igy3NFxptdNlpEwE1L4VDVsSRgoCcujYyNxPs%2F82MixwSjTwLXgTl29Swk7QL%2FZNRPmVqtqwA0%2Fkic1zvVsMP9WPZ2Wrnz2kowCG1WUoHOrh61jQJ%2FznquzTQHtDE01jQ2lZwqxRZf1UnzlIDL8j0urFyk9oXTRnwYX899qSINzg0U06FarebWgZdCQsXRbKgfpSjDIa0qy2BL8uB8jQgtK2dOYmgs71LSqV%2BlLeFtRyHkuCSgOpEJa%2BdnO5TwAe1MZ5QTYmzkVv9mYK3D%2F2aow3zaVv1r5edqojOTi%2FQhQ%2FB0vespCe5Y5zzmJhMIOQoz3oFGDjEjurpmYGykl1bQ9HrMhhMrbnNLiTjmgfOy00NtWgGlmSxfttYGT85KmvSU6VU7JXb3HDjwAUUTyCh5qN1KKBwz2bW62pqTRbJsrVVRSeOd9eprUTuVHi7wR9%2BoiYrNPzPmVRlpZ6PMdAerlpdVHyk%2BuHwdvCR4Gpr641JiJ5T21OMNNiwleNtXCt5AZAYSJ0w5o3o0gY6pgGxTiOb0DHzYBOmhZAcKlHb%2FKKo0oESLc5U33pyiBs%2F2dZS3M9gXtsSftZVgjNB7Go%2BkAvYoPf7%2Be25jO%2FNJhNiNOw5O7%2BS7W2w%2Bf5%2Bqe792H%2BfhtKCvmEO%2FNeN5xGyfGD%2Bi9EwRRPvOvmmnb0qCwEQXZWQa0aFrBzNKm3oQ5UDmCeEvN2A2g8V3fswwm1OQZDjDhqMzjLD0teMUl%2Ft0E0IjUICFeX0&X-Amz-Signature=95ff3ee2c5fed730a28130ae5f3785cf5f198bc7489015c28e13448d3672832b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


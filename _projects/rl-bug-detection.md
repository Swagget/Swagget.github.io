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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNTKLMH%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T184439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoh7aQe490mbm%2FDuGhSlEGfW40Gj0acnO2k7kf082yvwIhAKxyua9DG1WKicUdXRKRXiNOKa2KfrOHeowuhV4Q2%2BzCKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0SUSLEov8XFaMVUoq3AN3VoW67%2FMjEZnsRnkoYcrtisEk%2FmpvzDsWpsvgyXvOIqUXJn%2Fv1%2Bkg1x%2Fahebnx2wL96PmRnfI1ueXFOWW3tsE5IB%2FklmHXvKAmEik%2Ft0Ahwy1n4HuoNyVGjgAg0gLT6eMb8PjQV7P5oNJZ85B0E2rEzsU02q0%2F0ZgymwzfsI0f1k%2FwJvQx5R0ADpQLCeOtimCT2SIUep2DeBZC30%2BUNgiuMES0eQT5PXclxSvmB8ZmmFvfdi20oM9J0iYKprvuXI%2BUZxBxg1Blgm88sLuCotYUvCTvRH4pJ76u6Kx5pABIGIfO7h20XthfpJKEgQsm6SQw3BQwIwHlYUHXD5jeRxc8yYIb4OXBMbM4UDFdzGndN12u7PGlkA6X66c9D9xKNPoDVGmrVmpohAU2mgfVxPB5c7JJBUhMXx6m8XRVCSjgrWkMLlkOy4QCR2QXJt2IbPEjsdniFIdIq6Wb59q%2FcW%2F6fO2H4dWL6ewlSOVTla%2FTwa1edCbzzJjmFZqI8VD3eOXPvNmVNSsL6JyGaonCPB3iVd1TFjgR1gueOdrLwgQNxCOyIeswFXScr1MSIh7TqIxNNpVZnbjv8mZywcIaTj1Ar9NIoHxIcOfOi8tW%2FDh2byS9vvdMRtYpHb1PzDihvTSBjqkAeYuUrvzMlZVkyjI4sINn%2BhoevdHx9oJkrB%2BHtkb8H1IP3b6eeWoAeUoM%2BrxGC%2BttZjs5U81sFstP4kYUuL%2FCOL2f2CxNk4lbj4mtM%2BfZeHKPzY0jBMrBABM670HmfDYfsajFQ%2BMpfVHcpqx0MwQ%2BTNbN%2BrS1a0vHlw8PwEkL2TsM4ds8l5FwRXgBifADDRNiRZqw5LySXjNlm6x03JLRfmFJ6EQ&X-Amz-Signature=3d4856242ab5e6364c7f066a02e75b5c08ddadc23da4765da3d7a3d090736f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FR5MOVJ%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQBk0H2%2B29H7FW0Et8merHF03l5U2qnNBL7%2B5P1Slk%2FAiA6pP37G664rwfalg4Rk2VcYP0dkoG0zAO8DWdlrQFuOSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0nyA4sPLZlnU%2BMeJKtwDNui1Yb%2BCQbS%2FFJ36zEo%2BNLZdNRs2YTJxb9y5KXs1%2B2gllAZuxmJ31K8ihB2dJNISOsDipm04SXjmEeEurjVyRY1usApG01DER%2Frx1InGKf7e2VIVW%2BV1s4t8RVTzk2eccYiOIKdF%2FIGYKof88xtzQozOcYDGaqFGL%2Fw9p5kjkFufu1g6azMkRJVdtj4uw9IHdSTu4i%2FeqbfjKRyYMUqVmjymb5xxVLEgPzPiJzYFFyATLKfuhK1byd%2F4IINX4eIFi%2FukQoqpmzKAQh6CG99sDQxeeJBnwjKbg5G4%2BVLOEhWjLD02KyuwUzRpvNNNwIp%2BOXjVzDGtNbrJ1yBwmzW%2FhmAUADQIKK4xk9eFPqtxxf9r8Nz%2FyXF%2FdpEK%2FpBx81TJUTXpqg3XY1hxcwB2xi0sBnfm8%2Bu8WVs4PVw22Ix0rN2TntowL6L3LFY8V0Dm3qhsrLWbQwPqPsBrMoNSkswq7TkqylwzdR9lLjtpNEb9SZKngEl1ED7AYyCQ%2F9keJUGXJwfV6dhSUFuGVipoOljEL32P0%2FR9Zyb5XBEnNYjTUOKthjEWXMsIYrLKTRCgK1SkplOyHtrgVMhyO2%2FjVVcEnvHvTao3gGJBOsDHXUI%2BqPzvFoYD0YQnnizSldEwi4GB1QY6pgHDtxYt2MAivr%2F%2BO3i493N2omX2DnvceVBo6Y%2BwPIGZ3R4OOy8SDoHuUF4PD7NYJYvniyk0T2f8IkOZF8o1qwWAgYpB6u4omjg3Svv1hJrlv%2BkjNL10dH6m2x%2BGsOS%2BrciEM3GXY2N%2BF4ITig3MObQ8DEEQOFhHTqOQZPJ68PCIXMzebtpeEAOYo%2BZGbLy596MqD6i4dv95xba5UWcxdWOOa0Zkdg7Q&X-Amz-Signature=97c4262c72c9cd54ccec6a6c80f06a2b967f59bb64762f9b2e55a367ffa7b01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


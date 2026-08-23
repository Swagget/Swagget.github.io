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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KNXXFB%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T033913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC1hzAsJGkjBuLCIsH6pUrXZuoDnPd8WvUUfjFUjZnsYQIhAO8aiOalccikoyuHPxLex4Be6Aw9%2FsnCyafdKgqO9XyTKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXh01UedbNaACd8dcq3AOMbh2CpcF3%2FgDLkx7%2FN%2BqzgfutiTIrbpzIkusrBfWLFnphn8lE9JKXz9AkzKgiNspF7gKYSC%2ByOZN34ReQwm5hc6KQoIk6wyV1Y8t7asKX9ufPssMr8FH8JldqEcvXeD8i9MO5y8njxatW%2Blhpuu8bUzSJfehF%2FgdYWMflse6cZTNvk7uvHH0BXqL77ft%2BU0c%2FcrR4MX6HpsJwefLV76M5vms%2FFOM5oh6h601e6tLYYhV8yP5wHnmw0Fwme3O2z97ORvF8hgdIGxy742KrN4cqMX7PKSMrIi04p7MIf4ET%2BrpXMsBVMTz2PRkIa4IVPw7pneJb%2BGLwcQRviJsHluZRF7M2QWOU3mCZLKj0VhWqCkLYoI%2BXZqgbRNTdY8hmnByeZ7BNAaxNBkBmJ8GokjvPXS%2F9bgMA358oXVESmyIrss1vkAhO%2B3DqJRyAmEoFREnaCTv3SaqjRD0%2FJMvrtkjdmqBbLalsKgMR7HSBkmpqXWr2XLdBvV8uLzb%2BwUlJ1izMBD%2FSB3IYhINi%2FWL5YWYBBx6NTer4tonpj8nvkAhI3yNfjKZYmwjTwfwLH9vknJxxidKeXCiO8d4vLnVsMA6Y8S9dAEGtIu3SCoO6dRgAFwJn7o2Rpng5OJHHuTCjtKnUBjqkATIU4kIKRH3DlfyD50GB%2BW0OwQobZXxAbiE7IcFG2Ef%2BAWa38xJX04SjYb43d%2FHZDS%2BhEjOKsoTzSGbvO0LLVfoHXdqU5KqE6y3PWcbJ%2FiinIhzT2hFASYAYSZJmd3Z4UhuhgrrU5T2xk4SS4EIT8KuHfaWfKZfFezYNjQIE4Cd1E2ApB1tC8sZCFQXN04Kw7e0%2BgOyrEeZuWasYQAKk4d7tqrTK&X-Amz-Signature=878cd0fe6d6ae34f689de28cae8aa526cb365cbb18038d94d2f5e5184bb42c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


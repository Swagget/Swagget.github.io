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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICBD3GE%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T135708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwtg4%2BLEczvQriPXjmxlzc3r09QNxrf8jbZryfmMWb6AiEA10xUafTTMVJoUivI8RUjLr3MWsIONduShHjwV424BZEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOKuV7W%2FG5RI4BuyECrcA%2F4geeRjdsOifH%2BNTdC00kQqZ3JANu%2FQuXILN4VJ687TlWZ%2BFjP1R%2BdUPxzt7cNYhz4%2FgvXnZJ0vu%2FoGCIV6D9rEKJOw7Qdk%2BpPYVPLt%2Fr06q8Uza%2FpuVlv7ehDTynTU2V%2B6ZC3DgI%2F1ilauSym7JFvFB4pdriPi6NQ%2FrMxXLJoqRN6qiP9qmnae7R4lSpFLbwXLKD7ydh1ZzbRd8znPLnelN8URRxbRkdLcWEAIOi1ye3SKe54HPGN0LPsl5caf007Xec8KXJWVMw7NhOuOxdYy69N%2BHcBEYL2iycjdM13I7HK4PbN%2FXxPbU%2FIn3aOl0W66%2BS23K2iLVfLwOyDi4cYOTKv9oCiKkTCNl9CRVzyyHPT618ACWgGRY%2BJVJfqAMrmCxfem0MAQfr8RMG4UZG91%2Fu5saj3uz9Cpj4wm6zzEZ8KzF39Jrb8bNbSPIu609DdQUsgab9%2F1ZeQlbVLBtdNpkm3roWUp6R9fNQTHEJ9YHnRqEOis5E6cK0uoAkoHeJg5L1cFSTN8ERpDtzrtXv%2Bnbd3Hr2n6oUe8W6yJllP%2B5iJqcc0GjEPPlFD%2BAZ9AB5%2B3zOQdtP2hTS%2F7HqP0%2FrWyrZkxFu1ngdic5tVA3DFtA%2FnaWC0f1R0a4cj7MN7j9NEGOqUBsZnubQM7nc75gzaGtv96bhO%2F5SdvAXGSnM3EHo5wqKucwlLnwtQ9cbB%2B%2BMU2RcmhQ9AJqdGcCepPoAPeQDxREOYMKEy%2B6L7DYlY%2FTYY4ZeTFwmHvQJl8mTITScfQVwgXxjcoDiDgW1m895yi1DrqV5tPl%2BMgKKbTPdtdiVtRhlHNe%2B77IFasMTyF25%2BD8JNwpXRjwSuSFXPqwzfTfwO2HSdgq%2BrC&X-Amz-Signature=6da1fd98680672d30021ee29e2b25ff7884c300838b2d0658e82873e8f834bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


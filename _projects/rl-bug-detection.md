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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NTK7UN%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T192127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg0A1Fui%2FaCHrX3K082O0UAVdnqEGXXJHtq1lFQkm%2FtAiEAkqKKZ31bDZ2Gk%2BdTg3Tdwold3mZY3MTqKpRM%2FeNOi1MqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvKkNOlIOkU%2FhntCSrcAwBlmiL6ND1aGUYZi6gQ%2FkhP%2FgsIeF5Co3q2peMb%2BlwMTu%2BymJyNZwC%2Bv2ffLguP%2Fv8JfvhqNL6r%2Fhj6ng%2FIirewo%2Bdjp5qQcqWgzC5ESZPEYsgQO3a3G%2B3Yz33axiwevr5JikdjjBlAyZ%2FTXRemyOAnDU0PbAWqmwCzmLeYCwuKdmfXDD6u6RsHJP%2BjK7onC4yqX8J8uw1Xg1XNG0bs%2BueWvkmcUSP4hs24gJzJKFNyYD9cg%2Ftz2IJORmiSJxQjj0417mHG4Ww9Y4YPNaZ42agp1e6jN12RjZ7TlsuPeA8w2qRtepu4qZwXRIqbq4VKov8XsfyxFE0Zpr3Uj8uNZ206mrCs4kmBQQu2U%2Fyu1oPLk5CpVC3kikveqigtPFWe7YXHjwUk4RvMwuTuq3qyM8LPoLXsEhfyH9LzIJmMscLKDjqTwZJF15o%2BLaNEVodjDKjoh6KPpnxwYpXs3AKElyKJ%2FeZ%2BW8zbWVCy8L6v3aQ0%2FZ%2BDBrpPSKr7glq3E3NE1WNhDo7%2BbEUIJYIG1qMX1j72o4%2BxqUTggExJop3eYjufT4BWQgfUjrcyCXNuh8LhNfVx9B86AAwI22zML1zLtdGuc2wB%2BbDMRdFe%2FxyNWnmXPzx4KU3%2B4hElyw2AMLjmnNQGOqUBtWxGGZxzpx%2BnVWPs1%2FILZ6%2FF50jiEGBir4J3GFgFPZ1ck%2FRnI2BE%2F5Ncnka%2BiZVnaWjTzkQSrcTsHX0%2BpNnBpkkfo9n7iDMvW9%2FLRAI8xYrbolAKl8nhCEm4aYFRQGtQhPpMLiWoVMhkADww2zOuJsFwmvD73DnXVyMnLKsx35chhWVuH8zPJQAGG%2B9H4lqoFCjcWiWlzMp3YGcv1f%2BhtQZSrPxq&X-Amz-Signature=80049d6aade0f5688daf91d2c310ed5e8f02a7db043c877b75aadfa3a850f76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


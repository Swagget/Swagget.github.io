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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIATCJB%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T233600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQU0kitwFAjK7kdqTv0gzD52sAsaLenQbUl2J%2BRNyipAiByWwMXE6EWPk%2BZOXLYzriQrIj%2B5pGTaJEilycB6u69wSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMB6rwLwXKuy%2Bhp7iDKtwDZ1aGn%2BSTD7%2F9HnIlrX4kcHMtgBwNaZSB9ocpPWA0h%2BVTVZ0broWBLhT2miVpPT97KIUBV8oePk%2FBax0ht5MKMg8o6sXRDLlUQ%2BF1547arrY%2FSRBgyrJyQk%2Fwu3Lg4S6FdP8L4qNlIDqVwt9PrUvnt2jOu8%2BrBw5Xp6PATe6FZsPtHdO2QbWtXAdyIiyPhxiXBecsMYXLSCsWkrthWIc0M4m4HiPbL1fKm9M9%2BAo7b%2FIoz%2BZlq77OK5uzvYObw3byk9BIKcKHLeZJc54gpI4BaCETzowL2jVprcZDFboK8d3OAh2cGJNbCBEjmYY22HcF3P2b%2BFoD9KUgUGFHiPHXEK683A%2FyakSvKKQvaSCQgRu%2BMzIAvQg1AzZVIBBAncrpcnqT9mQolFokjQkurrvS%2B9XZ40ImrABZAgrySGqKkZt%2Byl14v6GJQ5690Z3aXGdFpB4z7zQfSNH%2F9OiXDThzCT32M6tob7tnoseu%2Boo8IDBce6IMwdUG60%2B%2BpjWwMQgWMWdeEK%2Fg%2FsVNGtofqILuXXZrJeb%2F1KCeKOeROK6Nc6yuQeaaBSjs%2BZcQJzDOkExkcOMWJOrj3Jp%2FBTOH0xQwKl74uMwymwEzHz31TpMefORLUd3tRjs2tsrvYSEwrbKH1QY6pgHeQkbmkiAOpBgpX%2FHAFrEV1aGiTzizsWyyHODc0%2FJXEnldHceaHDUat58wYlcgqK01aOjAWzg1XSp0vqa%2BiHO0Sbgxd7lKEB0g%2FkrMWYtwCejIS3NbFWJTLgtXCQyRbMQ7n4XFvx9EC1VhQVjS0ZAUYGs%2FeUG6qZt3FkMskeXnnKxU8%2BoTz2qNdQ%2BUMCh2IJy4WDK9ash7ThIFVI%2F9YoJdmfxG70en&X-Amz-Signature=92b4e0df1164031fe69f72bb44fdebe26cf5315128aa5d8e6a67d81e0c84bff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSGNO2QX%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T214122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIC5z2YdnwHZR4tIYebxdx0EO5lJkPLRkNnfDZRgdsqz6AiEAnp%2FFr%2FjfkPMmkXRqmigTWBfG%2Fp6WkvystigDqI%2B7VLgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLZu1BNaY5DwiBbONircA85KMgMKDWOmYHQ97V8f9hUrxbD%2BIoz1evoAPjgJe%2FlQWIHR4Rms5e5J75Wr380fqFfmOLL19sqa%2FwaJd3XyX0Ofi7t%2FHYj8Y9z6w%2BaUHghrDz0R8Viiob5M%2BfC7o4pEHSU0VmlMtaa081IEUu5ZQMHsBnSKApYIwTayC5fnScUX4RJHH6HEkPaocXiMJFLm8EiJfUJDUbQeyNhfMEjAUhKPhfzNvLFR20FjFKxzcbUbGBhBpVYQrpXAYF2SMj0JEAm5mN8o2%2Bdn7Ze3ZeryUBHzhqNU19TaPS2RRjMyqM0gAm%2Bv9iBVyMiqcqSZg6l5r4t8gBF4B7EXdt6m5GEzzf53vaeZdU81a1ITaQwhm3TkuNCv3css9o2QrreWSkQ%2Bl7B3Y1C6bcoJ9uIeTTT%2FBnWXq6eKwLMx6Qd28F%2FAT1VCuec4lJmQBI2O355ALUFCzmXx3eMeT9R49VXL9eS7OsCfIRWKS7psExAZL9tjgc6P%2FENKZ35vHjW20SEFJPGW%2FRAfbmNvNbZg1%2BSLqEfRnKCU%2FFyMUHRFtM02iq3NhEqmL4wExkKbjl7k8L2R9%2BwI2i%2BWOTxx0557Dd6m8wisWj9azqnMZv4mr648bfwKhCBO%2F5x%2FRj6g34GHftOcMNaOlNMGOqUBvTVD%2FPja5VxxBQatQ8Ksj5NKNGc%2FNDCILfR3AILXWqTMS%2Bp%2FqpabthmiD4x%2BVs5PXBV1IkulRnmTy61rwVe%2F05yyad6Qj8o3gyhsegCKUOJKZ3DQm4vPKhufbmbcKzMbBNIjqMLZRhXT9i6okRLtAhABXsRa%2Blwm4onNVqaKUUNvy85KV%2BlcSqgKY9zBur8mfpwJ2Akc7qLgmc2n%2FAq5%2BVq6YzNj&X-Amz-Signature=77662abc433c709cb0a39e775a0d431458add03f647c4743630b68799d787f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNFKXA2%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T123552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFfo%2BIUI5rm9F%2FoEMf9%2FgBveED2E8vZuCb0bZZcy5lxQIhAOFdGbmLdO1jn9AvfPHR0mBCD7XVvVNgjnXASvTIVBv%2FKv8DCFYQABoMNjM3NDIzMTgzODA1IgxSojtpYru7K5tQuQUq3ANBkmGl7rjE5ALZbeU4%2BlXICJOJ4fwCYqv0zZmpbOcELmx9NEhL39u%2BBYLmx0NetF68LRBVGmOLRx2tnJFqMnH2hcNWFO%2FGVqsHLY%2FARY3yR0ZEt51OedZjM4%2BD%2FX%2F1sqvZldy8T%2Bk3gg59E1BA00ApqE7Ey0f6bLioN1r4YxlX9UgFUOIlNiSG%2B%2BmZZo75gOZzbkLDACOKNXa%2BgtkKE8C51mkZfTnHeUPbosHU1X1VRDnwSBfUQGW9j6RgTUA1r0BS%2F8HZBhGganxpEM5TpT82JfclqbfcDAGqwxdxHdmhvYQn0lVNmt57ZX8C3F5DUbXzzxxRDv%2F11PHt28fJe0mw1oJTDipFsXqq9ep54yNfRMNIfHKgQNyR6qxcahB2BiPQVHeuY%2BsbYSlUbKbIi1%2BfwKPLRKFPZXGt1TB6tK8fimhaCRFq3qcgEtUQn0Xz2LBvgS%2BzIQpnjNw8t9Yg93odh54DmT9NiUSEmEjGe5l0rDMagIHmul5ol8EGAUPBpaV%2FbrD2CdYhZAo73nX9iYMhRQFv10Eq0j5Eoli%2Fc6Q2bvSRR228bCUjfFPOMRLWSwnVVCkOteopQJdKpQZI1ZKFVYc93%2B4F9m93z115%2BPiZ%2FLamHKZzxUQBqIVKATCS4IXRBjqkAWY4O28biuKWjrWRMw%2BcwbkqVB4FefzL5zah6KytHKmCHBuTQ9HSv%2FeaD4b5p31iXaiRlD7NYSPR16QL2C1cWCKT%2FVCQ2QpgyqpK65b3SHMRizxOTYIiFthDjKsIFywb4DsqGFMNIFBDSCnE%2FHjSXrFGqLtj9o4yKF868a7I8pgTe91AX4r3CT2aT%2Bk%2BFggloKuvx7ye4r80Z2nSpVSucsIEtywW&X-Amz-Signature=d3b94aaefa5137ddf59b5f9184b59080b6ef610fe82186b059af34b50f3ee9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


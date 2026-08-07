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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHBVLREU%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T173745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOovUN032eyWrUb1FM6%2B0bjwr46p%2FEpeJS4J8TzZX0FwIgbcH%2BhGPXYM%2F0h7%2Bf9zwWrrCaYUyyiBG1HvHBLbP5ZlEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGV6kgz%2BvCYk84mhCircA0u2R9O40LVP3OJs4Gt%2BxrZaJVVAXDqiDEF44myUOUfPBNDQOwwt3X%2BNOXZBj%2BlitpIQfzoOIfKB%2BfDaXp2u450PuDI0kpOkLZNL8S%2FKVOBnUp5ZkkvQV619nzzUAAAa%2BVq2WFUhLDskzJ1GVm5xGx%2FMeKzEj%2BSdzjWAvgIyhraNG1g147SDn2eQOJntUQFgWSwjmUrjjro0tLl61wQCPVvdEhdFsh4k5oR0BGIHO%2BF95JpBVU71zx3nQaFxb1Fo%2FRnI3rS%2FJiTArxBuiuhZaWVygEFjHcMuATDTODSLG5cX5OtcTInsVCB9a%2FZWIGtGq9oaySIHNoJRNVfzI%2FOLB4fJoGerh%2FMAEpVypW8%2ByoRZrUNhBpbd4EJy6MNQPue0PD2ThlAZSMaQGtifvfM87JdRkxr7KadNS6HLWo9OP1HPE68M6T3z1tZPkPEojFa4QZCK%2BjV5UPPAChmMYjWE3HJh0owTLVR84uvgBZxwGbEuNKGQrulVZH1Nt2o7kMA7O51dO9D3%2BdE2K3FIkEJiQwqGM%2FPojsY1H10fqe%2B3wtgnHwikrSo8mS%2Bfynag%2FZIvj%2F5MRZe6e1cehzAIYyGQGj1TQbJjC1QbbUIjoCm9ehjJGKgyb50Ll%2BhuwYi4MLSY2NMGOqUBMgJm2lrAkEjN1E0IQReFsTM%2F%2FL0%2Fvg%2FJoCTX5CV9xHNs7BbYu6yAjgc3%2BJpkIullW6NhXBUN%2BaB%2Bl3o1dGHcttOnQ2frcEFDGafOLeiLkpcq3EEkdz1JpnV8LXxBPYLB0rAUA9IVyAlFZErB9Gd1mjpWvLzedvZtZsy1VL7DXs9VRvGIAB9huSnu7c%2BPGJtAZ8eRkXUsNnB9U5Z1mGIyIEjNXl5Y&X-Amz-Signature=49864f60343a0c26d3c4df78a29b387b3915170fc73177e4d961ffc63fe4ae49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


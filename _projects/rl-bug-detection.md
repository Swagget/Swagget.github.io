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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMREPBO6%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T171553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpuB%2FiG%2FVwKo6t3Dhl1hsHFBsd%2B5NxU7zQ703kDTg1rwIgNVLGOcRLPDn6ZwUWR77YX9uIQf00d7JWopHlTn5mwi4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEMlqxC8iOCs2Un4NCrcA5MRnMex6m4SmVBQqacmJRPRvRvziMyr1uCgWL0CnWaCxZvfXZ%2BaFPabSabfvTUpSTDD0XZSh2SJvlL4Tz8mh%2BpACQqkiXkPpkBEKhg4%2Fw17Z21cxFl5UHeemIyCtSHuV1xnVkzrfGpwFSMGm264XAJ84U4xXAsQyw%2BZO0dB%2FDp6msngkCT6Aqvt9RWyCzJTFOHk%2FOGAtRz6na7L5KaTie6vHVl7V6D5V2t%2F3KX6DUEdqbMLID0oH2G6KMJFEskjuFAemkRpjADm7HN9Z9mUSi8bad7X4lj%2BVQ1OUJ%2BlDd7jIB8t%2FcFGEmEAg4XKM0WLEgCs5FRC8lK%2F6OE2alOC44jHbNsWqQfwxqPWLCsxR3QunsOkjO8wxdfDHW5X4gWTALwRpB6qMwUV4j23SWXMyZVvgkyUAjISKFrgkan2e9ztlPhMtv9pBkMmLJe6WSgQYz9ZHm%2BN8wa8JXBDrzsYCKDxE2eITONzwahODJZSUpKVeM3nal9vjSXLciL3CHdFj5sWTbcV3%2FHf9UcnFVqf4S%2BabQerm1zChTXYJyHstEgbEV4RMWgnjGH1qBjgdnFWE6aIy2GxYnhYdCv5oPDcqzfLFkSwKiT4Jyo4NUCewgsdZlcC3aV1hFG%2FwGGQMOv5kdQGOqUBd6IlObm%2Fx36l0F34eIINdAghUBA53aG7gtlPBrleMjMaOUz%2BYyZZ9cWzszFrMRJSSqYwmdi6jJS6u6HgWIA9IK8TbYJuvzKXZfBJPaMaH9cDgsPfcEPhbvExQdeaFktuddx3ZOzH2z8CrP5JswbXs9%2FZMW6qlqHhZgJjpCj1apGM32xnYzxJabRsklvshw7mKUI5kgNURaEOwowo7SXA0ChSz6Mg&X-Amz-Signature=23a2ab8b91b16754c829d45bcc60d023b37bf21e904cf83a312d27f776663b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


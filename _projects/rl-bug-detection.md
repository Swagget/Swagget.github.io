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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZHC5TQ%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T235944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR6y0JTzZ1PupA8ZX15BGeFxSdY8PpeprNknT92P8ekQIgA0va3buP8%2FRsJFn1f%2BZUnndSpy4IVUnbRDJnSISiH3YqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B1h408OMGvpMjcWyrcA8U2RYsuK1DfH%2BwClMmADXD08TQVrciBjDvSWyCXWOX5TOfcWBWVMboA%2FPwX6TxAxQfyEiUGov5CZ6abGJAs4zI2%2FSYH4wp32Zo55C9Uzak%2B7oWshbRu8ACTTB8ShMpRK2KDYpAJAa3p2LSCeeosxWrqU%2BVZMrnqHaJ2bV5n%2Bl0QcNUGDrwrvPi5oyBm7Vy4d4ga%2BgXb6lR%2BUFQXiehGmemLKxvC5qyBRD0pqbGOc2bdL5ppMdgJgLwv6cVgTpRA%2F4z70XuXEN4qlDoQfPIXqm3bCVDC8Ow6Q1d66%2Fqx8FYifDQMxRP99jGjvZ5f%2BnCFIqE5W6ydF3EjSHq3bauBjoGjE76FD1W%2Fusox1JUuAzkJQa7k4k%2B2YesVPGtjDV2%2F9hjZrPjxABqrr%2BVJJLPKUJZB9AZa0fZl9an2Ew9e7%2BLrIA0OKC6p3wh9MMHgV5LFh1dDgAxnJNnenRmqQUfArnj0m1DY4cGaFhy0YwRU6CZmU3Y7uQEnUriR7Hw3XMrWWb2HV18tKCKhB9do7mrhB8M0d1DTjiHpJzlq%2BBoX2LFZn%2Bup7EyH8H1mEklB9ut7dvyLiBVrIHyJ5ewk9R5LGHfthZ3Ldq8%2F3FJJfDyIfhjBLF8sCVLoUVo%2Fp4jLMIKB49AGOqUB4fLcbvZE1XkEXIIzCiJxSWGe5TBF6ZRhCJNSF%2BxoyYp0Pyfes8k6p%2BJz0uJvxumcq0LjUWz7NyvmRP0%2FxAC5%2FAGr43ornMCNOd4ZcoBx2y0iDbhKdIjIERhpBgFnyu2io1egRndUG1GkLUecIsGurm0pGROzYecJVmmKa5y%2B5cOZvjTQ6krLj7qNFIsu8faQCkNyinISzd6rgGvQl%2FOkm9zzQ2qI&X-Amz-Signature=64a61f3559d5d1585a7bb06c621b513cdd3e2b80f201827d5a537e0383c62121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


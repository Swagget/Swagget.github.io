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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666C7SC44%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T052412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFazaRZxLZVF7MCBxM6eqDyGg4Tr%2BTCr4aO%2FX%2FzUS4bMAiEA9YwMjv5YK2%2FHsQpfrhVTGFd7Qh0QAGo1c%2F%2B5Ri8i8C8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKte%2F3q3QoLpxrmsLyrcA2n%2F9JigqpDIWU61rvZQhgh9rKt%2BAzy2GMQzNM3v1cFG2M7OECwq2%2FAKv9LNdiCqYFnzDBg8qub0L740g%2Ff%2FHP%2F90KvqPvU7%2FX4xxnjVOpQiyq43hY1%2FfDrH4s92qQiDRzE%2Bgu41zBgmaVlmhS%2FabrvRW11tgSMBXaUUQZWe%2F1x9SNRVZEafxY3nHV3y1qEYJYEzqlocQnOsUtSEGNCIAre6Jv9PCr2j2ymwIfJ%2FamgXNljIzQkKEn7kZFcw%2F3C4uNMwO4BUXSPEv5bpOb8kmBkmSExzlE0FNbF%2Bz8vX190%2FJ8SRTc%2FA5lST60Um%2FjtVh8YAAVcEWTqXTfvqipSkKvCwD587fKyr0%2FGnZtiLHiDayw0hJ6t9GnFqCku21HoUwPY3wn4LRW4Fof%2FjJHM1E0LS43bUaRKLPNTQZkH6aeYfg7ZLkFR2tE6il2QBpyLhazjK8HnIMVDssuIhm8%2B1Bu%2F9wgA7aOya9jx5GZaLFa%2Ff1BNbfnaNOSmsMeDRzRFsn3i%2FTg0T974VxOwe%2FbNvLiU9rlSv5hynpukTkgNqMuH0s44SuF7TsOtwrFJPsB4z55mk%2FMHRgh%2Bqvkp2W%2FuLBqZl5FrNua7dTJnEFPPheQ9wArSDEJffiqK%2FX4GhML%2BYitQGOqUBj0dm9LRyAO1U2Hyp6enP668jlbqqPjv3wgAYjkw4Y%2F2Nk1%2BczPGkdKrHecdE%2FKJfMqQyMWhWp44DGsCJx4lpNCdef0Hvb%2BExQ7BmoAQRCRHvAbeebXA2hQ2ZeJOH35jekVgugNwUpHWQ6J6cucfl%2BOtFlRFUl2EMNk8NZ1bLu9wNTanwUK8jPHahby7AiI%2Buc7ISQ7MxlmMZ1PdIKuaMnP1sqd%2BE&X-Amz-Signature=5184a07f8d023711c8828a48b7dfbe6da47ff6c5e827971dd605f7ef51796aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


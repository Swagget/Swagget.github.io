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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UB5PK7D%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T080246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDNaLPTvLhhE1zMFEJ3rW0lrKySLfC1woBYRrKB%2FlbbcAiEA1romonVnXEiR%2BVLBIO%2FdlKfZrkuQbT3gNUFFHvnBC%2Fcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOJUskHLE6udS4NiYyrcA12JzikVuw685u%2B47SXo7iOgaKBou0tXBDQ8t31K2nIKrYv8aG9rrllMr%2FRuerF1vMRlyirp9k%2BXV2nfo4znfD6Q%2F1MuOAb5MIaTJf0Zxv%2BLoy1Zy70ZpwAVe%2FmhcrwA2PUNsKPfX%2FdZsf0Hn05rYGCcUec%2Fq8bwDDNRvOnU74IGdK6H7KZ2hRpfE%2B9K9c8vFX3%2Flo79Op1J1F%2Fl%2FA8DTX0ahjw3gsK4de4n6j%2FNjKp8SifJINMMS5HcqcepdJl0oUbyU3HHDQEmSK1n9eGcHNa3SUPmKEGkpE98J8uoo0eLEm5U6nOpywPW212W76h6bm2MKvTWhuE3kOHKxYphtQVE%2FBk63xJ7YQB66zAW%2BDWngcB7j6DmfqSxK2a28szE52s%2F3D2Dwf592iU4%2BcruqYcumkTSDmd5pLZE%2BbCM%2F1OYD7f%2FU8bAgbhKCyf%2BWUdD7uFyVeLzw2faDjVaD%2Fw7hoeat%2BNZ3aTljCB6PeEPD4YiAmiE93AYxUN8JqNILkCTaRMXxXVj63xxDoH46XiC3ny8tV5rB5r%2Bm1usQmOxv4YdLjSQwmSvLLe7JAm0PNUIJ3bL6GkN9LI2wkzFaEZ4NrCSLRIl4hjrRNDNM1WSklfe%2F%2BqMW9tPO37XdvsPMNn3ltMGOqUBSl%2Fiq1%2FW6iyZVnR8rrxapMrfe%2BrxCBXsRTWpEWP%2Fj%2FVMiCURF93pT5dwnASBW%2FvsHG7eZY0ajHtomRQN3WwOc9AOw%2F03xQI%2BnoGYE%2BYXD824%2Bs0PGtgYvE1h%2B%2FkDEb4H8%2Fz%2F8TtrWbOdTUkSVzt%2BwPrgu7aC7KSs20IX7iOMj%2FVzAGxaIy1VnEi1hkmd%2FoedAZ446ljI%2BvuQJfVZAX7msonyF6XG&X-Amz-Signature=5e6bff2b40195fafea136c4e0709b35bf3daddfd8f0da16e591c84f2188cee49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


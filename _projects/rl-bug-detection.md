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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS76UHTD%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T100342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDURKg53ZsK5jU8GVBstdDYynGninNIsubaX0%2FUzc9hZgIgSunc%2FDNVuPE9GYDAN3Gh9dGxVjaHUPSdpAwpwwarjZgq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDPHI%2B7b4gEtMl7YlJircA0mEj0KO7Bces9gnm3qJ6kmhTzBDhTNVSZZTZp%2B464xvEK%2BgPqxw3n6dWcwAl3ulZTV4lUEAiuP4GwzkMCHTmNm4f0cxW59%2Fd8g8h%2F2wdU6BPxVXTpCBkhbUNUJqedaMwG7DHt77KfvDLZVuk2YPSStj%2FT0bWjz9DrgQDnvucyuIkNpoiZfh70o2CvU5njpTg0uU8IBdyF1Aa3AeLVKk94ZXbrz5Ul7sXXW2ppxOotH5hUYGqoipqq021CHtSWawKuWubwmv6442UF%2BoQfaRXkpKh7NDmKpkqVy%2FAdNOLaE5rnb%2FAmI%2BvuhjSltlSmSqaNl63OH%2B2YpRZ4Sx3h8%2BMdQmLe2OvNvZPaupG6%2FP1iRMA6dmO9eXKdrbR9UnWVsKLymWdG8uDbwDSVCwCbREcxGZGYe5V1F2Xd6rvRz0FJ18U4SWUxeFDKIiomTBvP%2BM5jiWdkPs%2FLbfEYIWULjSi5NRXd6XTF%2FAMMWNnI30%2FtjJucV2er%2FILI55jGi1%2BFlKaVHeH994oA7Et%2Fo2xBr6UOLQcTR0aVZ3OzTBlqXvcKCbiliwEZY3oTC8TwavbHiEmENmbKnTFRCzIXTxKVExragOcyp63dSJVN1Xhr0RxKQAtTTtPsxkut74qW56MLjijNMGOqUBV%2B4G1pVKPhSv2id0grHfCdOcjBJJdRlIe2FWVvs4hZW645C%2FjS2026N28sUxQDr5bT481UyOk0dLSKObDEPPuWWmf2UWicQWZo7bKiL5XUNtPX7OcBh2kjJ3Ma6n5WaOP8iGKHZid7RbXbtPs4MvROtbwbOTffvJ2TNryzepbnW6RM0dIWXIFmx1VtnZ8%2BllvAMw42nxktLTTQyY7DVVyktfDD%2Bf&X-Amz-Signature=dd5cecac8f7cb836becbcf283928623c81d12f82656e112e3dab7379591d2edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2FWQ57%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T224604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIF5sOIcm4IaOJjclbFhQjIfEI%2F7l%2BCV9MOqj7K27SRuGAiEA1MdZ%2Fh%2FCQY82y31c%2F%2BWls9szF2qoONPmwLLe6%2Fh1B%2Bgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDO1nDoGPkHbUytjTuircA9bQVZ2jSX89tWkiDXjkT%2F5HLD9wHyEMfPQRmOI2IxNotz1lOovmauztA1jJmUklbbx60uiJyYna1avkUfCHIheP9sCp9zh5N9BVvPr67QIJ4Ngb9ARNyouybu4X7gr2a%2FqVYrMLyIj1YKrqm3XoIRsPSK1m3X1KRxW8YG3R%2FA7J3zb4kyBhMn5vB5GtGlQWxLQ5Ql3gSJY%2B0XB0wY%2Fge4gnOcL1cobxDS7eLR2cD9LacMkAI0qSZ2NlOlDRSOc6zwJJAhEjZalVwTHSbgGyxXtJqbC1uiwxm60JllTzDC6SGPcnNsgVCqIMRsvvL227NKe821cK8JKz79CCVhONybp1DopQM%2F36TAokzgb7Yc7abVlyjXftI0rgckBztI7fexQLhdrh2YXJEkELV6OOCGiQxI88E80xv%2Fzrtg0osGOiz6XmM2mcPkjO0Q140JFJ448yf5CoY0xhVzyFyUeo7VJVaGeD%2BJBcAyASZBZjjTRwQr0bnNwkvXaiSsLBUO4kuTTRD%2FkDXs7W3c006Y3by6HVEr3vcpgPdS6LeCKAeK6oD87MHoskHR2ZL9%2BRgsgM9t7kBXI6eQg8uLc6Xcf1enHF%2B3%2BCi2hexnx8L%2FzkFSnk2peLbG%2Bd5SDYQixeMNCxq9IGOqUB6Lqx7ZNzTyUtxzdPC923GleqJO0ID8Z65pjdtrdNLUQGQleEakOm6jW2858g9Vog0CIyxJiSHQ6P4Sl4J7%2B3h2cS51Ns7%2F6VS1CTAo%2BYv2sT6RfnQfPpqsm4PboPzJaPFiF1WOvRwAy%2BiqDlEmgAthH%2FVj6g26VIrKzx7PGm7dU7uwhE41DPlNILblvZ9LHT%2B8W%2FmtcfFrcFvhucgpp5YLPUiFCu&X-Amz-Signature=bf6b6204e304a879ac7c2393ca9b412bde5826861b0daa0a5d460c51034f2d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


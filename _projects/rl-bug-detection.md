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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XEAB6J%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T020434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCDGbOu7xAUR0blvfF7lHKP%2BUpEb8e0dHJn4jo33WHQSgIhAM4t74HOE%2FrAI5Smca00bYxZeVS7mRcAEKcAykvcmSieKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJJkRt6o73zf9KQTAq3AN%2FTJSe1VssslyWLZhYFBWKvPqTFJjuajdtKSsYZzBHzdMPO7yxCvvE%2BMNoeTN0Z0CxDMIxGG6a3lHqgYMzQrnAZMh4q9QJ58R7Oj2G0IH3PbTFTVdT1bZWrpwE9ZxnrRROaqU2XxwHwjk6X73JCL5pc5X2qqwmmL%2Fu6eeEjn2b%2FOYN33%2BBpZf03DUWbcxoQ303YY8sKeIVzuwk4mo3ofga%2B5K1xTXfjnYK1PZjcHrIzK0KdvyqglIEXgENhNEyQjLj80imaOIVMekH1wG7g2TpzNNJzetahebT4%2B7bLc%2B6%2F0RC9TCCSBuVsmWKPsrn4HncKm8fYXujhMwg9vmynnwIOH9fBu94DUtjf2ZIwrRaJ9HIA3PRIlClaZVJyeNMsXrnLR1zCEeP%2BBzgY3hp%2FWIz6zBuQB5UZ6C2Mtj5LlxA3FYarV7JUVXPoyS1J1Y%2FUaOivnX4kqWIbGNyDXYhMAqRduHMcmWL7MtM7%2FJi0ll9S762BhopyAE5foPyrHbJeV71KNiODCMn2CJFxpwT%2B3Z4izzfRwBcMIhs3oDP12e95Ta1SgNog5WlJlFbWa3pyRJgSDOf3SASO9nfIQy4BU3qRh87DvrRLEpf0aseQnPFFOqg3y3CMIgShv7pSDDMkO7QBjqkAe%2B8ax5ltFD3icHul67jwYWWDSJ9aPaPSbUQ3InvbvaSXOfcTj2O2higfvVKyeJrS2QE7HwwIl8geOpST%2FdeJ6vuako2WtTYKgRErC3DAaPyAnkT%2Fk2i4Q2jUqlHd7j%2BM%2BC6JdrZCC4BMTRjadzHFRo82%2B8vIViXid%2FL4IXlk5B9Drb%2FXcpeTZuU7lsaMYujJQDzMa40Ma2h5Uy9c0Vb5Gr20ye5&X-Amz-Signature=a480a7d0a6227b490abc3589532b8b6e15505c70986e396e89ad9a3cce47d9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


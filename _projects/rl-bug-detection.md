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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXDMT2FJ%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T224921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLGrrxhaYvB4xzo4wcsG64CRS8n59PjLkGyU52EJ1p9gIhAOPqGqTMdePpzIp1JndXV33Qe40g%2FrvLTQRSAWL7%2FXR6KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWMhhuNqhhVwDdVisq3AN3xnCTqgJqHbE6ynCfOvrA1JW5AY50UzLZWJypu4WoIflwFt7JCeRBW9VUH4J%2BF7aL255YU0K9nfcjJOJa5CdnxwGSr7dODhLYbepEhUXQwJxroUI3tCCR9wvB5lF2WOUzXX%2FywcObA0C%2B%2FauKutoBwyc2gzOEl7JFufRDNu%2FJyh7jPEpVcsWbHpG7eoe2U7cwJrwx8BV2dKrifsXPdabkyCvamtRjG4gITNt5KAcM%2FDOE6s29aO02vu%2FmoOXIx30e4XYmJkx8z65CmXEeP9D2ghDh4l7v9dAApJi9i0%2BwKonTYPB8A%2BSG6OQtCg5Wts5p7Cwyy9ohJ7R%2FCNr7JtWayISDJ4Sz8KcnZ39Kh0p%2FlDCZ9ieCl98GFs%2BBFiz1Ihi7iwqLdjvXBeSGSS491fWgQaTYwFlfAk%2Fig9Paq%2BaGTxsFKKtvaR9L4bk1N5Zr2FKpkLMIaaIC9YJb6pe%2BEhOZ5QdU8csjtf12swqItlCiKY2ghaBDH0RgGVSkqoCbV57dFFcMrKAfTLPBD35nTnAtlzwWhqPrh9MMCxzDQ7TJAWebbFK5wSryhXs%2BkUe1tVg8r4CqfIwMjC%2FBcJAHTgBh0o6S2uQRG1EJEAEjwz%2Bi%2BGPu0m%2FbHxLb4M1FqDCmvvrSBjqkAbokY549%2BXL36hmx8uEEDICO0wrj%2B3CitnaeYXowHXcdbik2JugLkcYZ1bJV%2BbRvN1B3L8ulLBJ9IRG7K7DMolipSodXoKiDNA8WP9zd%2BH0xYvO3e2v4UtoRZLItD22vPCpp1e3Z6RHwE30ZuDcru9g4D3Vb7OAuYk3U7OljFtSDgCzf8WYg26VpsvmCxPIGcrpqMh278CxUKrQEw%2FC%2FBJTw5nyP&X-Amz-Signature=3d1328c9594a2674155712a4a7173eb17ec083a53439a7bb6cdc570a01313f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


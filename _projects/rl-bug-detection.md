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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IPO5RLQ%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T160525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBskeGGQuE%2BK937ByI6AE5KINqCMXOc9XqxnEjsbz8K1AiBVsVRwdbyDhDCLt7MjHoKxyhPZffY3UESrg1IO1Ob0XCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM5VTeI1B5mgABNr0KKtwDrp6Y5ngvy3ScZ%2BRH0Dn7nGvBOhI9lOji9%2Ba5Q%2Fhjz9r0a%2FHIIIbB9m83SBZlfR%2FC4M909E8StAOJJ2IlrIZzC827cTszloEtzdF3Gi5Evie1OOYktNfez5gLGYL5D42X3rX2jRYXBRNcoBFXg9ItBLHY8jhSye%2Fp%2BGeCVE6bm4u27cNC%2BwM%2Fwv%2F%2FhdbovtY%2F2gL62y8TYkofxjYpYJWscEyA6vV3zlAFrPlw6IPBwGTfs%2F3QvghsKtR27%2Bi2U9TM5FaCZmVG9dlLbJKWnnRuSkNH%2FsAnNEc0ifIRuCDZPBzXyNIzO8kqECGRLDgLqIzUbvmIt0Z8tRm7%2FNWR8qlEtuGySHs3n2NFzJlPTp%2F32yFshspljJhtdEgBR8jejPbaGd1WvN4Ssj2S1fyPLlDOsHKUABpvchh8DgcdZVwKnrYfktUCcZZZ8ED5%2BRXCD0%2F1XWVL1DEkMEq%2BS5xqNDHmHgoe9f6dX0lkaq91ChdG%2F0NorFd70vKWkLTZmOimKE4mhc4m4viuaOSqVglE0W9wrcU9iciQ1BUQMwpuJTpY2gBa7GTQLXgrcjO5H8EKXnoD2qedUB9ATuNFnTHWDZEThu3TRy%2F472XvWcHi16bx5FnB%2FhysA5Co8Yvj6YYw%2F8L60QY6pgFvZooQa2L07NUDsoXKG7%2F4oT%2Ftq50GHuuyjTW%2BwLazeH7v1EbLVRQ%2FFfpqXfimWEZ36ANU5gX%2B9EmRVa4BPjAr2GBHrcjVRpGan9GXkaKLNAF8TtF5nPea5E6qDz%2FpWUo0BTWWKaqsRdXD2JYUxHJV3ILIDi14tl6%2BjsW%2Be9pIycSeZAqmE5D49ANFSSlIy6JWrbMs3aKXPKTD%2FikvZg4pNVPRsn6G&X-Amz-Signature=ce89354c6f8c04c891e0b07d7285f52b2368ebd47961e6119c71392e082b2556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


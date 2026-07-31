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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HLSBRW%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T012558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5CoaPne49S1F9cy8vHtkNmMUS3e15EXA3oFq3nVsbhwIgA5Yxf1UIC7d7ZtrTn9BKRaZ6ijtt7s1El795F1lstNYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUpGJvUjQH0VsBmHCrcA9U4A5oliL7IaHU1SWcXgrtq%2Bo0PxLBr3EBEICU7UPnh%2FMYS0Mwqu64cNfITzDfIS2qBz1D5pjZZJRZnvKFuCiF%2B7fU5oJSWGQus1s39scutBvQuJJ78T1K87KfTaUbkQ%2FKQVtqljV5LpcWjk2Q8OPW6OYv3X8%2F1jIrD0AAzkStOqL%2Btp8fapP%2FBHZcuk%2B21cbfMNuJH5KprP3BdgX9bvirO9%2BWMMCjcjBbF0rR832vqlGMb2Supo7Bm6zXApixpHj8n2hRudTAvm33Na49cbiL3e2wD7UCbLEWWKuJYzJwcq9cCvfCAc8c%2BvEdFHcwJXUzi9ndqvNK42yWQEWQn7zT79twShg%2BgvX8eFXaMyj1770gRRQ%2BBa4KM2mumuqxvUcPp%2FlQ6am0h87zzB%2BRMSkafSlXvPC9AvbKgrwWamJqBPAK%2FooO%2BHol4F0FqpD9FECiaNVPTTo5us9RP4Lndi5YVBB0wdtMbgXwYg8WIbtQbEywMPF3Zz4UfWeSsnKA5%2Bm3qFQGh2ZCPesGF5QNcHTOmue%2FUjpbPzvvOfUwOU5w2g0e3PX8GZZdmiV8M1p3D%2F56b9588C6yVf%2BdhgrBwCrJI69HFR6aSLgKEvCUK6kOUWl0LNiq8EKqrNiV6MNTxr9MGOqUBSI13Fro9BC9tX1iMrZnTixNkedRhJhcPOESdG5e%2BDL1f5Mv4YEi4%2BXIajpYUbU1IM%2F5N97ydC34gE8aGG2upgxwi78qe70aOu1ZjjrqNtH4mMh3g%2BfkyVBn%2B2RokXSDm5dqfhb%2BFcW54KZyJ7RED6k5S1%2F3uD9VUX2a%2Fd6TcE5%2BHSkFFHgdbrmX61d8Tvh51d3%2FUJaOBB%2Bs8uDHe0JPkBdyIBo5m&X-Amz-Signature=2b9813041129864f1747ec0c9c96f935576e35a8edd57193f53581173898fb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


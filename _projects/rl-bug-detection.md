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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HA5VM5P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T072111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd1qSGvyvEq0KYXnaqvS9cVTgqka4VTqG4ZTggOC%2FQpgIgeuGigalYqSRPDstFyl9JFIu7M%2F1xslDbKVucCUOAxfkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaUvoL7eY5Sz7JVrCrcA9trUW2KcYEJzqSnPRpnKzJ1209xgEcbYY6EpqbpKXBWHI4GFpgeTf%2BwgJdQ%2B%2BH9mofHpKrIAdCpZdpyO7ryhmTx3Idlwviet8yyOAXnguiy6uObioln6gkz%2BuCQfOEb7p04%2BI8jyDtO3SIRTVP1eeb7w1YDNatN60occ7yJFma0AnBQdpb3M4X5JS3YI6ZHDx3CwryherDyvqEeYNueQa%2Fs5Kqh5NBu2NV6T5EHwV4n90sWLfzqkHCOJiDi%2BefgOWbpW6GG%2Bhf7b%2BQCkXZ72BZRNp1Dj5h6xdaungzv29HwihpdIz80x95v7wq%2FJNe9oWncXbLr%2FNoavSShnqhX8O4bPaxQdT5YOEyNRtoCdOMMbfa4VxeOPK%2FUFPCGwSJNKqtjUuEUSrVZeJnKrze1G4g0GYP2Qz07qFhFGjghefT9Rb6RDQqvzjhtb5CzQq3X6J4f4Ir2VxXR5ViY6c6dARfNTgO23m5HPw6K1XrBGOmGJyVLgSoqP9zxJKMpZtCKtP%2B2Wu%2FPUrKRTDw%2B40W3mESb5EkpfNeiOVakOZKGPGvkNEYMy28RSZYnXOoKWIFIQ9O3xXV5jLdBrKS1tgY%2BxRtLqmrZdlRtDXDt8GW1bUH2RzonkfZGalGNE79GMJ72pNQGOqUBi%2B4VS459sD1SzoVULiVWfsIWTwFSb9BQGn2U6lFyTsrCfxz6qLR8i8UAA4qlxvWblmEBLbxTajDgstMfNP5307JXCSt73OWJJnJDygfapDh3nUemurZoYBc3uT6wR0TBxyjuvAmm7NSIDVEa3n2JCi0L0ZTn%2F3bt%2FZUQRJFBE2ZxmR6%2BL%2FcuYiXp1V0kwjNL3lwFmsuhz4dBO2EHYlpHi05Zfvg2&X-Amz-Signature=8464bcc0101c3a8aad35d0f7b82d3e289c2e28ab87e0a0979441d150c9c39c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


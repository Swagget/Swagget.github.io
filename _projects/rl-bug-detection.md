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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZSKG6PE%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T153046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCvK2Dhp0JBCbXEBI9P0RdsXeXjf0rsDSxTU8AogZ0OvAIhAIe8f14KRcyLvRis68nb9bjMkEd8WAf68HBOQZ8IiXH8Kv8DCAgQABoMNjM3NDIzMTgzODA1Igx5KP698i2EQZwV8hIq3AOiTm0jZs5RRXV3aZBYaoxe4zDE9pLjwialgIb72v1If569%2FlWB2nI9AdmyWV03Db9MOZnTz0%2FNXY4OlVFSZDQ6vh9e55I4KEXFBjh0WCUdcz3I3oqQlleqPqym8EJ3MJw64rL7Og9dNVBp3Lk9mFLrDj9c4ZoovkBsbBt%2BQOt2Zp48yGi8PnSEIcsWAErPgyqSyK01Wsbaxf%2B0ORZeGkhYsSCqhEq%2B90PtuOX0vy6jX3sZG9KTXOZF3XTtoIeeUmP2px%2B6fw5a3819yWfpgqurMdit55RlkopAUcrgYGsYi7qBzv8XAgv1257p00TNvb7yei%2Fm6nsCwuaub8CyoB%2BLqm11fJaEf6U3Bg5Fdsc%2BlIKxSpgcZnCvEnOlc2u55zHH3o5yxcQ%2BPtkbh%2BZiwL8qHqOYLnf2U%2FXBDSBYW6XdtWAS3Xg4fYG3FAK0rnaXsVequppEOCwaF6IKMAo%2B6vyudVAlOYUt4VQSLW5ybdgcV0t4q35h5usZizedrDsqnN7fFgYV54grs51erpB8FM0iX9y2f%2B5C009VuiLdk7XkCFU3%2FpWPKnvjMtviQYE2IXMryvODyk%2BGayb4IhhJjCPNgNGP8fjRspVlj4wpUQbaUbvi%2B9qa%2B3CPIiL%2BwTCX0rbUBjqkAVV8Qzl8TypbtJAdz8tZUXPKKL5UyEtcXp%2FZaNpX46JIj2tgCESWnuvYm03k3HSu3zr7tB9yS%2FMc%2FKJIMzaaYsL16PrsBDVA3N%2Ff1O56qNYqUfBkK3skZI6JZwkdCUpy7vobBiZr9I7%2BjopMFG7GvSEMUWwoh%2B0F4L6acwgV%2BUzHUyXIUs9tlMu7i%2BRU1TM2yl%2BlHvketasbf54K9doFubUy6MC%2B&X-Amz-Signature=93b7cfa5772d52e6ca074d1d0f2db47c7bcc63be4bcc9fadfbd331b13c04bdc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


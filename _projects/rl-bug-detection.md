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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UP3I3SO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T011949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fc9tcxqa5Y21MhtbBrmRcpaGCdfftWCdPDwJPjLedUAiBZB2Inl%2BwjdZnJvhSBXdPtHGyY2jwnudSfE8rpcKTL4SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6eCzjUF9hresR%2FycKtwDjA14NrEumeVOQhLoZoLvoUtklx5UA6RJUBCxFGZ%2BoJhlOaT87HB70FRVRwQiWtfGDqHadTndD%2BBRCBbp5xEipmTBE0Gx0xVuGy2Emy5qJFrXc9G%2BHLcT155rhTbo0V2TUsDvlcqmdCw%2BqAuZag4geXa4JK6m0hqv%2F6xow3251hDBgrNnHwd%2BNFeRHAvvHRUs3QdxAEafMdhvnmqIut4Co06OVHpnrG6n2vnuDkQEIuHNJURWjuKVCUbXOC1Qkb47Rna%2FQQaX9IU4%2Bcx%2BRqi4EJsYWkjfOZ%2FG54JRvDiBj3aPMKIdAShmf1R9Cy1SMhtX77pDN%2BCVZpMeL%2BbYOXhzVxVA5fseCDcMSL4UqOqj817yea%2FoWaxExYVV3TLmmV5BJIXYSy1G4Th1K%2BFoiUlBW4CtDxdL7QpznGZYWS%2BGNy5OTKhtBpg%2Fxh3a8tkgXqZ2aRUcV2QXCAt34lpbOxyJA6hf3cq18DXZMWylgNg6FgDiZxI5HgEfK%2FR1fz5ww2FcVv10wi3tlu4eEv3W%2BzeBEiqvLSHt7S%2Fs1TLS1vrTaGEQ5xnVW1rT6DTWjLOQRlcuYXR6Z60M4cLvQoDNhbsesPxYYEOO2KYOsF4y2L8WAh%2F9SMyDDLS%2BHWvFIKkw5Kjw0gY6pgEerhIFCp0JUFaoniLORVM%2Bv5waAq62Aw0eCs6%2FRa4HXA4hSuoy6zsyhu7yYczjZzAKoDwWqVjvnwvjFiZhlO%2B1H%2Bc%2Fb30ZMgJhbm%2Bs6msa2kTSBgykLf1dsXB2C4jxqIvozJeGL6GL2xWbiB7UOE6Glaa%2FnzIZS5DzrAqOC%2BHv08ExJ9F1d6H0SKspxnU7ZxgfOkNTnW5kFicTdBygFvqOMHkArHcQ&X-Amz-Signature=e8a1e186acf874e34a7a8ff7f04ad7f0b62f5081b05b2f380c650360a163a651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


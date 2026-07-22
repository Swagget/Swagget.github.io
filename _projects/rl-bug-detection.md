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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU35WQQA%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T121924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBH6B2xctJXHmSHtYFNST8jNQHNw0RMrtZoxh1TSMzkZAiBRT9xf%2FE7%2BllRKv%2FgUDkbuGnyA1SG1ufzax39RSl7QuyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7cYGDw6xF%2FiyH2SuKtwD%2BI0GSWQM2LvBfTODEmqfZ8wKEanMDHtxanpUjlAQMS1RVocMXPmlHN3IFlU2RsSg5gQcGpAZE04hMydyjw1Ec2fiLCSQ18EEzoJh8SxCW9W3LKdBOHxqzS8lAKpfmK%2F%2F0hCtmQCp1HG30B8ILfp%2FBA3P2l%2FXdCaL5RtBmPucFiWzcXugSZiaeXyoFaQ6XvC%2FJaEFFaNW30b5ALZERXNBzg4%2BTYM96%2BSW0CEzPgNbcTHp1j7CCSS0C3QGoJIR1%2Fm4WxoogQK3JeXrnPBft0zTQ9LTc8%2BvVl5Aa2iZc6f8p2%2F49vazQQAEYszF6%2FjEOEZlm8Lkm2EaMoT2ZR0OUFvFz3%2FrsWMG901S4ap%2BZMpRUEkaU3rwF33AqdlLpNtVh0ZRnTJz75c7ZbHfpKodlj4jV6QaU4mHAawgHDCw3naHjYVlm9LWovdKr728DgLJgEt3iyTf3cNoRMa64ReYFfpZIj7p5WKXDKZlHAwzvTlNFum9NLctQ%2FRQ7zW7tnD%2B9FXAjafsnZvi3YsahKODTijxomcipY2T4%2BCbPD%2BoS17nQptzFwHYYieHrpa7%2BzPtxmvP6g8GB2ehiZwPimh5bSgZRDr0F4TsrmDE3ieX4jaKTdlnmOBnTqU4RZ0pv1swqeWC0wY6pgHXA%2B9z88ZEfADDfsgdWvZpheqYbpsgeHX9rVQWzpQljYZQlkzpXe7Ira908fOHrb6CSaFjFZ%2BAWWlQPsFT%2FMiHWotMhqPkVJoi%2FNoGUe3Nxl8a6UK1lZr0MckeaCf%2BfX3ZSTrfCDQbxpG%2Fa5tf0CZTYI%2F2nx20ECiHUUfOl4gSPmSXHfaFwgc0JI9NYc2M78P79zpEcT2Vm2%2FErWMqlJw%2BQfcZdZU3&X-Amz-Signature=e50f543416833e0ad82ec842f82d16acc0e450574b7225fa00c6ae863364c751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBZXWI6E%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T041331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaAhlsyz8583rIEQ0CxkYypIKjI%2FJDsQ05vtMdiu%2BxWQIgKqFRK%2FpqSL5X8eZUatLihRF1KgPVm4YqVQiAwFDBE20qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGV4i9bmWp95DOIfNircAxqgzBkve9QbeQFGx6VEYcKLVjxi1kcOdfSFXBbF7k9%2FAsCaNDGjHUlPvU8aRMJ7OG0%2Fa9z6tthdtSBBmrA9FA6DnfRuZSIFxdnU%2F0%2BgJePxe8qO025PPIvAsscon8Mhs7E9wmxS3I7xy5k5ynyXZ4ZpBXJ3%2BTXVVVyOcVI5kPd15n3igpw8yWmgkqouCveZ9U5HZYd23V6QMhKtxN%2Bk0pw3%2BiXLvfEVvkA3NK3fGIUZpiROoLs8%2BgXpSOmPMyynAaP1qhIPEtksIE4wnkJ8VkCZD8nX4lKBznGUhtm51NVrb7bbVICuWmm6Tfj0ea2fp%2Ba9no%2Fwx1JcMfPf1TBCJ6XI8MaYfz9yi4XRmKiqyk0Ii6kmDpvwLEOjRHqyNE6mFGicB6dSL1FR0wgn1BLzCiJw3nB1OSTSV6bPkKeFFa2EVzfB2uPSBMpad5l%2FolcRrT1QG%2BJbwSF0nUvn8PkOa1a9eD55QiyFRKICBb%2Fkz6e0PYjtK6IGPv0LdIyWvWrs3takDWRVsdQIxfn4nzHL2e8%2B91JoMHY0FGvFvO5BeO%2B3iSt%2FxfvOR5d7HUoHbAS8VMwlvDIZqvw7N1XUFJr3VVw9rtFj19bdTWj%2FunjSA1hhxlFUhljyMTcwTpxoMLiz6tMGOqUBV4mxycGHraWphYpN0LDNfPkfRYbhnVzDaSwPVg6FQAOUihQbuucdiKK1KtPLvBxnzzWl%2BAyNhdhG1Q682P36Qm%2F2cjR4MpWzjdUvzUUqlWVfBg3uiDkvYgvGfP3oYNQ1jHhx5%2B0bkiZ%2BwBH6g02mE7qNa8VOI86zZoFDP344x1l8qRZW45eYkKMTeJ1D2B2ANds5jk0E60LC%2FDDwuo%2BKHod4oWcK&X-Amz-Signature=f5cf9716cfd2db929a068412e0e39c057e6c84fa1c0446bcb1b24c7034184f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


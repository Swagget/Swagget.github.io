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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REENEUUR%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T174700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIHwSyGyvVs7j4JOgQhuZuBfhmZvqhWzTVVA7TyAkU%2FrIAiEAvchzHxRVWhhZJlRJRpjk%2BRotEwY%2FKTx7f9HgsnedMMIqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrW%2BoW36PeRmFZvOCrcA70Cz%2FJvWZmFttQCvbXcRs3mG2iRao%2F%2B6dCZYLzDnf3tdmdu6Y5Sx5CMr6V5wIeAMznJgPftuLFMy%2F4w671y3xjf5g8zvtRxKlbloFZLo3rX%2BbwS9gzIQxF6ymcq9BE9bBkZadS%2BM7OXKlfCypjyJ2y0d0sqKTEJsLBDVrSyFzn9amEzxSMZimPe4vszK1VUj3%2F6RHu2FbwmuO8cqPVMz4mP%2FLD5Pb5cNyZYavLCyU51N3bM41%2FHSxSig4DJisdRGOstJnbn1C3%2FcFZNbP8rcVQtbzJ632kcW%2FXp7XhnMNrf2CV9j38MF5iK9to6rZRc05N3AJHUBTnbwUKiIKQ92z7kGtULQxZBhipCS5ikjMfrAFCIVlhlO6pWzduF6OjJKHjRuOF9yIoPsGtbbETHndM8LLGCFH6Dgd%2BecmZh8qDO6hZFZvDPYZ%2FepjnouYxlag4P5VTqqlm7p5D5FDi%2Ft%2FK%2FxeYzk4mKHHmg%2BOCdTrjTLk2PZwBMFIpfQ4eEL%2BIhS7Tq7ktZp0Xq9NqE0og7XkuCA38s6JFewgIRmWHOic2nDAXGQy%2Fdmg6LG%2F7C9SkDxE7XtLre1QgU3hS4ctLSFUsIFVTztDVYz2L3zm%2FTZ1OjNcEXmLhHHsxbBtTZML2Lz9IGOqUBS98lMzlEHbbDbM3tdtjdZAFfPp4nhco2d5b2UoEPSYu%2BkT6uOKNVHm6Z0cpV8h26aR2FdDMBdj0HypiY8l17gohQEmysrxXnLUj6DWftQKpM1FP84gYQVh99c6tC3rdKaouw1JJgVzBRSC4z57aBiv5uNswz60MbsZzF0veNvbB2LsKJ43qBfNJXbItVcQ%2BFUW0%2FAf7IgOHkzvtSBieuSNTBIgN3&X-Amz-Signature=a9cd44968f2c53522c86e055ef92538d1c63377ed1a4444912f346590eacd090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


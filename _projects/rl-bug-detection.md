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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMJIKQD3%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIG9qsJDGmiy3kEWvpjhVNuxDbSildyJv8343rJBwzlcKAiEA6fjcEVxhTC8NZL669oY4x%2BwgwqFKT9Onm%2BNb0WJ8RXEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDGLW7WBjYeFhljKtFyrcA8bAmSF4qQQ0rdJxyDf10y7nkNcPpV5%2B01fcFmWOcuhqp%2FvETY3SMTeu3X4RfUtS3wzU7WCmgb69pNf7p5JCdGJTSjg7CKWCK2zol26g5BLn90WxJpFDBtWqvyWevAuz3I38hr%2FSKamYs%2FGp3Su9Z7TUil0FWjbBY%2FaeQiyZyjXp2mu7%2FZahUniVhdOo5Za1TcMlrgKVGlECRKoKNoj0ODGJ8KUfXNi%2F%2F1q4PVuQKNCjOF%2Fagih%2FY%2BUHWpiBanDqvq5BVWe0U0CUssabHiu%2FQxTejAZwiC8pZAtFqH19g3h74NkXHwH5EqWicLW9aDj05J2KN5iwPT%2BMK8JRqdqMOSHwnI2T8xTpxRlC3JjnNPY4c0VAaRYe0PskOlc%2FjtN4zq%2FtT0yAFQ96MRlMVYd19v5rMSoTD3qPvq73UGjHsaee8Kes60ZbMyy4EgfLKCO3Re14b1kk7mBj1TtgC5YCwwtzsTJUMnKfgvVwGj%2FO9Owq157fHvCYjlhVakk2UWOWYrRIIm46RnHKVMfC90AW4btBIcrFIRCBZo8rMk8Dp8WGqtQIk5GnLdM5%2B9uZ00rtjFcHHHWUH0%2BwjxJTbXlf0YrJkAmZgq68k0ZjkNBTsdI0ATjaT9TCeZito9%2BYMPjsgNQGOqUB1QZvJREjiLpchmLX28fD9bBdMQnuDz6hM%2FWN5%2Bq8xtG%2FldVpxA1gpJnHZ1iN1LErMlA6DGrdfggvxH%2FP4Dgqd%2BAfLc4ntU36bS%2B1veyp7FP3pv2Tsdpf9PgOuJM10NxXlh%2BKI7Wi4HntEimjxk2Z0CSeMgYj0lV06Wp27fIfrILG8vCrds1zVChSeFQ5oOU9kOfjeZP2elqxBDIjM%2FPnoxuTcHDF&X-Amz-Signature=55391448f7db13af7017c613c27db1f28bf74a4e1ff3c554eed99cda52eaa440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSIS7PKM%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T174838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC%2BS6xo422ZXg8ZP2QrO2RngSnGyWYF4QGh%2B3Tcy0qzFQIgUnntLQiBHah5dUWCfcvbGGkjthWo%2BEARzQdhT%2FL2S0cqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrRDzLXR%2BiAYhpN6SrcA0o25%2FlaLVzee3IxXv8Vwv9P%2BVKm%2BABPQ3K0p%2Bqm9biCFJ3OdV1adAoJqY%2BSGUmnQiCYRYvVkfub30oT7eB14L%2F4JBlvVNf1aGtGpaCUxJgYBvZ5GUp5gPAu4756H0MDR0uJ7Gq%2BygPr0x3h8lgHnPt%2BBh41Ywea4wX3RRXfRnNlakb4mzas8GbtxhpPP5Uk%2FVCxCR4Zk0qYwhC0EXC2T8rZDo8iid54CKYLw12VzUvpMwVJK2ujTBTv6%2F2GyaR14DvjAOf%2BNkGmH3UTB4ZgfNfE9QbJs1cU19zw4RO8SAIMunx5JnSHeZibPD3ftRCvr6DLv18Pn5u2RhVQ5RWBbQuITTBHRI%2F58Uz%2FrqOB5yn%2FG7Dtw798ePqPEAEdKeEK8jLF8fll6yu3Y%2FsyyN6fExfRWwLkCgcqLrFuElZb%2Bf1ZDLZMSvTSJcnkvLXvKaKoqigdvdIofOFRz73cceIcP%2FS4EmI%2BdIgeDBOKYVNKb5HjqZDbfxyN%2B%2FA1gFC679ShZ457MRlF%2BnoKXEvlR9j%2Fy5GqJdMnGA%2BAUOIMWLTPnyTpDf6drbj9D1PoLawmdMmFh71RxsbhUgee4Qyi7qSORYCJvqF38NQBz%2B61Oge4lvQLjdht4oMfC7nDltBhMPLRuNMGOqUBjAK6Wou%2B86NtPDIHBvGfshSIthpWwlanwa3fw%2FuNou%2FSlQXFAnAG47KVU3WPtmfDGXcds5XARYMnj6rZxs7Gt%2FTPqb1oZYkiQ0l920gbPoIu0dgaAqmAMCnbSJRIw%2Ff7lbiM5mdXTeLl27hQsSVtrFKk26JuZd%2FSBb9led8JliMUsn7ZD%2F10VZGIt0scUbnVhdNTaUMv6zl%2FC1Jt33h%2BAmVS1BN0&X-Amz-Signature=8f5ab2e46bad4c9cf72923ad32739ca2a9d2640000421b87bd98da264eea1bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


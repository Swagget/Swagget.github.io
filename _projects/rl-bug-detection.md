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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FH2RYBF%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T141732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEn1li93VB1BLxrZguVTq%2FJK7gYLXfDnoQtVrA6tcU8gIgY5Q3djsyLLT2m5APgn9fwIFiti%2BXies43DSB9Pd1nhQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMCgm6RmUUN6cyWbyrcA1OrJ3moK%2FiItb7S2mMFZkz4Ewe3aY5c09GuMOCAxdXAwYnbGP%2B17o2TedBcuhqKjke4wdhwh4nN4rw9R2l58H%2FLlNvK5UZXk4kNDiv%2BiEQVfDrrxhRd6lc57eumcRpNBFnebGz%2BWwhk3c35Q%2FiQfPIDPYipOv%2BF2f6hoacA%2BreSfIM%2Bk56pgabyzmQ1OoQiNvOWy4ldHgK%2FhP1QEsV41NBKPB2A5r7ZUfhyBq%2B3FMU7amVKLA4i%2FCHCxLRr79uWI7hdavVzGWBV4X5BvqTzlsrr6FotM%2FieWDC7CAbtXLfvCGainRdNMQVNn%2BfaUOTSeLlXp%2BbZ2UdQ8OQJbYS3exm%2FV5spySCwEGD5qh3G26m5bC2JZdTaHkrpAdBWiqNLD0s0Qd4uiVrBPV7r%2BDDsEwU7TrhTGLRPFHAaTzcX5CFtZQWXbC0RFAdfTHI%2FbUL%2BE29%2FFnL0twf9jWQQtBxH9sRWw5HT1NBwCLH%2B%2B76PY%2Fjee2ebHmsHGd3UMarVw8GiRl7BYLQt0CpyWagkA4CkABKDf6re5W69GGJKCjudreOH6MtsRC%2BZMh2ajEbm2RxMvdewPBYHVEZms8XuEpgIjjPf7U3XNZCuPFFrcdyHuc7hUT0HUYXt4y%2FyoJfZMN%2Bi89IGOqUB0s7R2qKrXkDLPxdvk6ewYZMyD6PHdCC4am%2BkJN5uVeha9%2B70nixP2%2FrjUAKx4TG8OFP5fi11jsiBegQl9JOLTnpiqlYiB4NqbrFQSSRY6KpVjtADAg22JQEAT65ULF8iM6CC7TkwwWGCICfzsFIaCRIJNk3%2BAQh61ghjmn%2FTd%2BG79A3rmNau3TQLtMVbU90HmCkNLFTvfxMF03j8unKfAwhNHdic&X-Amz-Signature=6516daf3411f4a1840ca0d9df7a5b428758647b7c3dfdb65668ea6c664bd378d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


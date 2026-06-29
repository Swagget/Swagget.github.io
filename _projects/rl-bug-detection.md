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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7LYD4T%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T235022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjvTKOlmvPaCk3nDjNd5sZoGB%2B5CS9K5%2FqM%2FlOpiQ0bQIgRcx2syIP1Rzk02E3CJPSRKua06FblBaXlq5M3ZRNUeQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrY2YRgjAZhJhYp9CrcA8%2BtjIuD8S4bgQZvwqCMdMf6nfGRWvQEdTq0i7XKPDqdd9wntEQePH8%2B1rI2ZdGpOXXYiALQ7NAcsz1ZmDvQGh74U92NPGGD8f1s8ktQKH21AjU4WrnSg871mIJWZFK%2B0Mil9%2FR99RwYJIEdii5G7pAL%2FD0VqzjF6t72n1gMVoHRlPqnxnrVVeM3lNxtOvzySnAUYpYWiZC%2FU8h64AsBOx9NjoQEc4IJLPd77eV7zr8HrRaaPwIeVxP9%2Fya4u16Fe0h7Mh76Rc%2BpQZoQtKs6FgZrTyIbkwtBucMOamCgRriR5lXWRY%2Bv3ifyz%2Bx6r7HgamYzgzUjOUkL8Q7jsFdHbru1wgsSNFp%2BzeeQ9IvJ1Nq2DrycO76M9obWEX8UFCTURJfBEuxJzyRLx2ohl%2FBQ%2FZkM0uT1UjRUHRX30UFwsn%2BRbVjUYfDI2YGER0wQ2C294QawsQz5LP2fTsVDdrBTb9wds3kVA4dm%2FM7fnW6pF2wbDCs7GpPvzUKPE7b%2BN77zvvXnb4pNlAT%2BQHQBaad8vcmQr3S%2FuEeqJVjHpCKjAkEkZscuqAKmdw0Mf7%2BQ8A5X1hA88kKRnM%2BuRTI6jPLLs3SKt7gBrWsIpEO4mNfCa%2FMnoBxollL0ODwZdycqMJ%2Foi9IGOqUB2uM7fATQGLIyPpkVXiMNz0abPIL4VwnWuRAHtd49G9%2B5FRHRX58Gph6%2FbEe4%2Ft727hUdM10kNzhwuDJ7DgPYOVYsMX%2BoufGVJ%2Fa0NMb6kZEY8hJjpntQSmrHUy8%2FInXgP%2Bso6hRMKRmSwH2SOGZyFuGwhLt8IaXIGN0SLzeq0szV6ba15jIeBUUHpYxTqB1PuoXhFgueMnKLsV5lgdjJXtgoRk0t&X-Amz-Signature=19b83b9dbdba1bc460f9caf1640160e5109233ecea3932984a4ade0602fb4b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMLPMKO%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T135526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVMKWtNSIXZNhyzewzeCSZm%2FdXjK%2FAMTBK3NcG2iVs3AiA45L%2FAB1QqrWPUgqMd3iPAt7x5xRxp3iRhoWDkKNcLmyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMfree1HU9He7C%2FarfKtwD2mW4f0JV8o%2BwKTwQ4O4M2hWBDNE5ArMhehsuduiyGqjA8m5Fm70eqUkC96v1OTDLEAGUytjdz2kxtwWszzveggG4MoBKxKFZz9u6%2Fldce5uW28D2dxWDd3F9PMulQrVBRxyhGuuYbppJW%2B%2BP1CDx4nWWDSgObgPDV4H2G6FfsxU0ZXzhnhX%2BlYazj%2BgXdoX2kTc2thwlxWFn5I8l0wabFLzPhDFmLqq2keEfMNvEBGYsEGqZP0QOUKuaFxths4EX8q5QrgEccmbyMJNlnoE0R6TpeDKdd4fSLMT5Jl3m8RjFM6RvozRbrXmlqRsJVCTQZJNKteig8Nzln2Tkj%2Bbdr1lJASgNGY%2FRb6C3YV8fQRcR%2FdIsuP8dhGHaYszwCInF%2FYaii6wDANOTMZP2TaJmr9lXk4EwoE3O7Np5DpqfkmHrjIY8ZhlMHlf6MyALCGYxWw2puN7bF9TF7z83qBAcivJHUHQuRvJicOP%2B%2B%2BJJuLruyp5PUBqBFd2EN5e2bxHu6lgZUmS8Flsl5z%2BKVAXPERsxi9QMpGNRfbC0crmXSkjRqmBkwsOQFUApoNA80wA8RyDZ95aoK7vRw%2Blpz0Us9zrAdBKUQ9Jl8umhEf4%2F9VTIayVA8tlkVD5Qrc4wz%2Ff50QY6pgG2cFYLj14wa9LVOIYylV1WBxmIwG1LmlwT%2F7E9Higc%2BdWDg0yLKvuwQuZ7DFgHRs2E5YuaIn9xDdufBuLR%2FV7siSq5ctHup5s2BwVdypBiWbrb4WRke6AKUdUQjvzVfeb6dm3I%2FB7WWbls7VTdBqJFf%2BwxVqZFQfrZihhCN6%2FiBwpQ10eflzm3HWcw9x9ZV7HOPGUyTpR4MEWvp5l3zJ4aQFkhvSKf&X-Amz-Signature=9936dd72e3460111c345bea2ed4b3478c8cefd3d8d97f591162534a8fc68e757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NX27QJ%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T200810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCoOCSS4FsWbYQ0vzMxJ8TsyZMBVL22bVHjkAP3ucvC8AIgKRowywcbN8hlEAU7qO0VuJZj8q%2BXPB%2BArsaIgNAal%2FEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDDFNooV3te51GdBIdSrcA2swd3OnyFVE7G%2F6mYemvDDM0iKPp4rD5NpthuoWAOz95bBE8bbOSNANUf8LjVlirp0nvdhEbSnQv80pn8psN%2BkM22dFsoDjFPM3qiFekPcGznivoO5BdJebqnEMaSneU8DzI5FmXG8kthh7dFX43ygAGMgMeYGrmam9oPT1gXSh7soGnbY9tojGnIkg%2ByOh6bftjhvWv4IIV%2F3cxw3qjh0j2Rky8oojuQdesVXNIsduDyjtOM%2FCTbalmhVWen%2BmcxCnCsUZ8p2KnGYgPCZhHzVpHXpcuq0Q08aR6ZRXvnpU%2F6rWU62vdyv4GgYuAwbRw3GpQSMPucQJF1sn9gKRAkv2hyMJBY4S8L7CR52BfqbvtF2Ev7amDUoRnUXlvboYsgvtD6ea5aQQOXVbAbE5%2BM76OTGYm3KcAR3P%2BQuwRxvvETLz5tPbzNrnbHWMxItSxPY93zGgZ7Wb7QzTTCRzAYHZHymoSL6b%2BmNhAYeYX1bTdbuTZGTQe%2FaWcIObqsM4GbFz9o%2B9XLxlGANsJdSz%2F7NcAd%2FAnkzSmjpNye%2BAYUluMvibWhHWU18jfaOfa38%2BIVuxK55vgZhYPDyPvpgSAP0hHCDE2qRLeLJpd1tkiSuqVzy1u4w9KpmBbTRmMO33gtQGOqUB5rqO7N35yDne%2FaaxSlQZeTPWpdVMDr%2BzHwWOfjQvUdmJfgkvGVGV93hLECXpXciZncgthZwWTeGhMR%2F51XF7kOaKIcKx414DOGLKNY%2BdX9mHouAcMf9PCDTuw7Cy5UTPRfUVacbfLky6aTg9TZ2w5oD0SJI35i5Ofc%2F0Vl0%2F01IE7F7BuGi9eNRpTy9MAVtQD9ORp3489PTSlnrwCnOgejjJHut1&X-Amz-Signature=11d53ea3c639762ddde77d60fb89ede8def98e2bdf1608035181dec15323f668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


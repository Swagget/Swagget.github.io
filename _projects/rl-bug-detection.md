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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDJ7XN7%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T153423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIEiB4ns3VaOE6zpb3aUhy%2FFVf7bWEHN1XCCOHYooDkqqAiEA6kBsC6GQ938nxcc6Cfh1Hg62ixeZaLfP6RuDdatfbXgqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPieFNsMTJZEf3IP6SrcA5InkzP3J1Z7HM9r02dBUwoKrEJk9IWTL97X42m9jGtlEj0SYseib2tvDqIInrwAVbpt%2BhwVFwm3ZRjX4ZkdNuncq1tstEHmKhU90JRok53QZ1anq1Nhh9mR0oWi0rYPOdXqHz0HK2OHilSufG3XdN0kYqAJZ90oP5MXIH3pMwEio5Ca%2BotiorlEbDYiEethSEXORQ681cUTinJYyNDdYSe6qzV%2BLIsvtj%2FvhgsEuXG2cRhQrPWmO186v3zAVmtBkL6FiI4cN9%2BRY4SphBS7R%2BBmuq7qLDIG9RUUSmMTm5Js96bj%2FxiHgZyAvF1QuXz329b8BU609XkNG69zJKDJ%2F5QMbXDmdGXv46gyvOT0yb8ccKl6h%2B%2FFuQec1yWcCtJRJSk5nxP04uv8uTcq6w8AzySc010qysTDieJpc1A8wBE7tGvEmVzzd6VpuRixffUTR4K%2FOi%2FEfWD2KmePCURGDVPsrlZbWRKZLLww%2BM1Kun69CB6zHxGXnbXomvfcTSp1m2QY6BV%2Fi%2Fc9ZWPk1FRsWsz%2FGero0Wn62FgEGxa3rYy%2FdCI3NTNwc9MA%2FNgCt%2BfiH9506czPQ3dkvMKCBnK0qb31niXmWwQz4DTEaJ1NxxaYjmGkBxzCY3kiOManMJr7wdMGOqUB%2B76qnP2s%2B4Pz44kFi8PsL2jFrFaJxIFFRSn4GN0Ozs9%2FnEpiBoF2bcfFICJuBy16prlTdHUMMgmDiDfq8bepevJfqyGUaVlNEXc76%2BgDGrwxp3Hi8uIIXhJ3260mUxUo6IBc%2FzNqZnVOwT6lpjzIEA5jHhIsgPQOq%2FA2hBc76RUBfNgqfcq8flgOD7BfqF1C8iGKxHWA21BukfWgmpIYYtWkZw7o&X-Amz-Signature=7bcbeba55676564f87ab6d4a8ce2aa8179d44d1f7a70aac5b7b5a17232331db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


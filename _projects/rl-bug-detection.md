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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63TCTTP%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T175507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICcSSO78DOBLm0fEhxsK%2BW9TPEno%2F%2FLByHGhPkxMPPkiAiAaSkFIJUDbIFY0dvQQAph3AWFjogcBJzlxbbAgxHDLfiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPEiiNLiukW8ZqhDlKtwDwEAU0mzr1wBs8CWSgXddiHCrTb1%2FtAnsbfUltd8MLtqHDPgyivY5%2FcaFtNwvgY%2FKtgQWNeQmQAjE2w9tx1H34tUZ2Tw5zl9zp1LBVEeYwOPnF0dGsth1DbHNiAKZq57nKn2zAu3WjQo7MKcMiq%2FSAO%2B9jQK3ZuDxuCf57s9qED2QqP60B%2FQloW%2F%2FlHm4A5YwvWuXMpxhalEskvcPdMIfmdOb4oAyD%2FCU2PVwXvJXf8tMB57FE7db8vGS2uB%2BK7LkNI6Nr%2FtOBY4J7YwDJcEUCWp3lH%2B2madL3lJBJEjba97jc8KSAdP%2Fgpx2dfM51AnmP0MrFXs%2Bjg0xfVRQeCaSfR87HuIRPeAZJH0c%2FtkpCnr2aHrHJQ4Mvu%2F9QlCW1UI%2FR5LBo%2FtwES8myRz0%2F1YqmPTvMMee%2BYcAr0SksbsOHxcCALL0CIMogydFONYogY3dmnrdciE8umCYljdBSFW8ur%2F3pDonwgWRxCgmGabT%2F19HtDchZ2S8v59ygjHBlyMQYwHZz%2Bc%2BKV0jt%2FQPxjDN7yeDShzY6n9IJP%2FsABnbmbr755xTkALyQxABseK4izJcZa5WyGn%2FtCJr89ObL4mhE8GblKF%2FMJmRkv4jPg4n7BSotYJ3JSQI26%2FPscQwoMTs0AY6pgHdpE5hB2q%2F%2BlTULZR%2FdKT%2Buay2HpfEf3b1%2BZNFID567EheXmgtTzq31%2BYbXmh47FZOmIIh%2BfS%2FvUhX5FDKOnG7DisJJL6znuHQphQsIjn5Iy6liw1i%2FVZ%2BVbaap%2FKJJyi%2FBtaST4YT%2FfbRqsQ2wddvd0dIVZL8gojsdIKNhT7NNafS9TVLtOStttG3LavAKQF6dUc%2BjKDeE7cfX8k2tR5WHXkyWKTq&X-Amz-Signature=44780958bb598d1b0af8c038dae1524ef8567de9676b7b7c360a0f0f3365e406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


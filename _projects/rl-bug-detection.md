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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZ7DATM%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T011438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPrkiaWd%2B1YZCr%2BPx8o0xNp2hkXq15zZbqUmixED3zngIhAO8HasDSsgxVmi92LFnch6pxH3xl5Lqmj15AQGdUB657Kv8DCGoQABoMNjM3NDIzMTgzODA1Igxe3WuOPU6fTKAimekq3AObxfor0lb6hjEoABjttJHW7MwPGhBE9%2FNlsRwJi6eNTxRoUbUOQYWFQxBOHCcfHD9agUm0kPlT4R9D3UxQumzNcSGY8HLKRVO5ytdYQ6lfH3rUBKf1EDOacYZjutLrm7C%2BeiHiyA%2BOZWhITLmpeCZ8Bg5qa4huC1UL8J1tZ87wHspUpxOQzdGIg4y37H0kOSoPP1PGwKqe8af7CJwTk5mQWXbDJkPcUCZ%2FzNy3PWTCX1Uou0OYyJvNdGn7OHKU1C2Wis7AKdx8alvbrF%2BC4Shb%2B8FDypTbopuPQgbn8giDw44TMUGxGsGnaxxIAO6fFP6sIp5WY3Gg882g9HflVQcYLmJJpzExgMwj7alvTovM2OXA087Zz2p%2FFYMeKq7o5wm5O4825BDZcou9q1ErK%2FOn0YnVLbPzopVyXOOqdF6ag%2BqKLZ7D%2Bt0Hv6zRNiTvWgxk3F2N%2B5c8p0s2JOtsVgpZkAw0PrqjH%2B39Xmn8kpRsLzMIr%2FuhRGxIzXgu0UGLfySPEIhuYAoDK44mYNua%2FmP%2BSooN2mXq8AS8OPlhE32J8oDVo7ZhorkNHQ5lIEXHk4bn8xyhKwxYQLdgzy%2BC7Zli97hZrD7aWzlwrmAeuLwA1Y%2B1HN8zxhU3ei2JmTDNpOvSBjqkATYdXSzUPlocpwurEtBY%2FbFuoIyZ7FuFFeGh1bGVUGuM2CyNYxRkZFytL0p4sF%2BjtcvEBVNdkNpnAvTjp8OkU826J0XaQU9%2F6hOUWoM8YYNyVkzfKeUKMuUvSMVz3o3A8RFC4mubpn%2BPPgM%2F9bGdMQM1mLaNDEayQUyzspgrWC3OorfxriU0UaDmxJ9pWJmcPP%2FVBjHjSjqrAdTs5OKINP4AjKgj&X-Amz-Signature=e303803a4da6a3680059f1a914d0ba9f16e4184b7150b5a932ceb3e06231a256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


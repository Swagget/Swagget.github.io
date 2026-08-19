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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QY53YEW%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjbACctkeOEOkIDk%2BkXaydN%2FwuUEfgedhzbjPUs99HzAIgBY29rUTpEEzeIbTOex7hk%2BhKd7MSpyzrHHwU6nTRIzkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBgmGY3RjA6dHnU8uyrcA5kL3TcI7E3bmzUFxraJsPXBDcikRQdt2B8FpcnuuBUbtdbqA87vax0ng8fo8svwmHvdYEvVynyMCPGzJ7ze9l6xEuLMddgZ5j2CWQqw72HI3p2KHz7NqFBFREuZR3M9Pj6sxAazGjoM7mce1hJBrMdFj34ktoQRMGYNXShs07kaY5DbpzBTPsICLTVszfavloeCN172ZBEYP7zn%2FUPnXftXEaVZ15MzlJNf6OI8Mr1K1AYNxjD5yssmdrHRdS8eWV8lAksqFtPCI%2Bb9cy0SoMlkvxKA2I2UMd0gGj%2BltFOs4s7GUgg6yrKF44ZHu1oMA0iEZlZsE7YnVf7Tdc%2BZND0opqce2vU1RAUwR83ID5IhTw9qbb0hv3BsQjH0aQAzu7jmULfEseBCtSrvelLz01vtA5wFmtNY9bgy20R%2B3EOhyh8XS9HogCXIGMNYwsQaKdkzD0pP55GTrK8DXZUG9y%2BrQk8AfJfE2aebaAd7aVyeY4QCJSon%2FLGoF8aKPDNaZxn%2BW2XxIug28a8iOFYAXznITBN5ksuU1AlkI%2B3OPP%2BwCHp4SpPvyFJL%2FHZs1Tb3a38ofT06Y9z09cHgefPhKy4frDqdbLmHH%2BbxeBmDCFtuX2yuod0GlqF12ctGMIyZlNQGOqUB16KepqpADDVyQ7ZjhoDBdo3Z4JqRkL6uuahAbuQSQNTvDGyztW%2BVYNkQmonkEUncNNZd0iaWU0OE8yynDnYv1l8ljlulbINUciKYG9aHMC82AJvsOsHVYPFr1Vree6TN5u1Xh1KcC4drMqsz2WPogUUkiKecVtg9gFGrk9u8oTQYy%2BlucW2JJ3jqDs%2FsUmmBH2qcfjSAsrdhVg2fpEY00LL4gH4H&X-Amz-Signature=d1d4906af34781de9c6119b1a0011cdf99eb698d3656657412b3dfb508f118bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLRKD5V%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T074107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEtFo6%2FOzSPBufFH7pxMe2puYyNYPlpUvrjlmHUHeDZfAiEAp%2FrqSGU3j78qCWJ1u9%2B3uVfILcAx3XChYlNJOl0P7f4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGU55WyjxNnfUllkpircA9w9caOYpcHJL%2FRMa48DwekKURp1EzH5Q8f4oAZ0aTuHbn9%2F2HvAwpAUuOmMUIoazAfo%2FVzM41c%2BzXwrm%2BR3Prl3%2B%2BJdAkTaGWMGMACA33DojPPUsauurklgbdqa9IwNKZ5l%2F6QHjnAf4nx6PSdmH0%2FtDFZzaLbHqZZTDS%2Fn1ox3%2Bntzb6kxXQcMkxTqTBQdnxCiDL0maSSEbROefUgzvIZN3e3kGU1vKjKxAhI4Yw4aU27vpGyTJ4jRi18cawoKm4Tln4ooYSfEdZgJQVQdDotLqqabDsaL5Yyv5Dpf1Bbvy3yPcBGzOF%2F2RsqNxr7j7hniSXeipnGEy8vPqtOVkdeYkTKytUHOeroG%2Bj15CoUFMatjhq43rFX3gg39hFWFp08aU1EmKO8IpSDRdHcBGfTErV%2BZoO1yuEhaWcAx1Kvl4gzPjYp%2BIXcbz3Lg4xIebVYc65OwY50%2FFqjmptirfsuNfYCCRQ42wEYZXaIMihnq3nSZjfH%2BXa6jEmliNsQn73fWsJRCdVpW3ZUPYUYtTudt7Q3h%2FN9UpFieGiVCQncIIaBI0608tuoY28Jbt0rrM90%2FBdqYfbCyuLynanSauu1MpDrmzJXhkBMG92M%2BEEPkaREgN6hQgwCWQoeqMPTPitQGOqUBm6AQOHJx77oiICXB5TWdyH%2FYGt1WVmFEbYxXbuc70gREJDCSd2fdTLXZY2%2FK3I136NhHbHdpAgcT%2BZ46g6EenFf4OhHc6tqw4%2FaiElBFgWppKhanoC8PZLvnAcFTjR57T9S9KsdpIaK8YiiFp2r908oZI6pni2MPGRE2%2BoN6bhHQo6W35SvjeD%2F5E8AG88B2GnFCaDzpeIDEvodjoZxoJ6Xl6FHS&X-Amz-Signature=54e738e6267ff5cecec33876fc04b06cc96c3021828bac7a4fc683d01a24fa36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


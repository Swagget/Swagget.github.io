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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2BLIAA%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T033124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDT%2FC1GnO%2FeiLsnlumpkrSbIK8McrGMphEWQ8XJBrkRWAiAMDrjLf%2Ftq9lulWk8p4eojbbXJLOfk%2BaztdPk1IV8F1iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMATZQXc%2BF5QuTpw02KtwDnsVyojQIpCurV5msrid5e3NvsJhLaz%2FiRNdxqDWkHx3J09ZjO2uRVKImM5vRMf2%2BCD4gmP2QNRY5kSdJT7z3gFZZbA%2Fzp%2Fa0%2BDCV%2BSYKUuaiaCUd2kA9J66QIogEoWmT7oQYOgARFJ%2BXPwBSRAiUBvvF%2FbvWMZC8Ly2xHRwM0B3CV2%2FFpytVTHqeqfe5oWSnjJf95H0roWVy4QDHJU01Qfud7CW8O9idBqPGalgzwjhOepoD%2BFgeFzPmz2RewlU%2F4wKIF7dYeTZklRDS0Hv8zOjHTILrG8SFcKv6GnOn9RzInnpYgqTm0fJ%2Fxfg71Tz3usG5Ru2rqAHjmuDzR3JPnT83jkUqwCf3tz%2F9NL2ovdbtka0x9jt4XgeuOdgJ7g0V4Fg7BEA3mAxGsLTS%2BK5kyFUUcXNwPadKqp%2FbaD6n3qO%2BjR1WDAMg2y%2FOEHnief2WpsDf%2Fy9KeSAgoXVjuza84cuEv9EEQjcBRXRECfLXKDGSbn7N5gfrDC3QJlhGT8Zsv8qjePNsr27KpGORG0Fh10WojgzBhG4haARWMgIKVbJYs0gdINdv%2FNs901qBFecqG6I8Wi8jUWKM%2FWxTUF2bxng%2FAsCmiuoprX6l%2FIMDuyF%2F7wieeIBSVKZ2Ppcw%2F4Gk1AY6pgEiTJF6tMnz%2Fqc7aiXAgZEJzmRS4KMkM%2F%2BKcsUQTivJZ%2Fy376dQGmYYi4q%2BOZ0NLC6FoMTzvLL%2BkSWUYJNZ75nQyqHjgenpVR6fAT0YorESeN%2Bn4vj8gbx%2FIH7tLN8od%2Fka47Am%2BQgR0iw2Fl7HE68x8Xb4Q1Kxxy9bZF9S8o4ypJumbEuQYoNTMebl%2FOsqVr7lSdd8lq3GeHwugT1DH4EEpuTNW5K2&X-Amz-Signature=42f0e2f06888be4178de6d80c4c6a86bff0c64e0d89e305e8238e766352f4794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVK33JH%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T095952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAjDsD2WmjoEm619TYnuK8K7SoJtUR1d6hsQ6QUXuuGyAiBHKij2bX7e6K8yYIOCEZgIliPyEaYeXegZ5RxR4DdFLSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkjbWxnzSmqy0x%2FW0KtwD8qE647ZOYwEQn21LTgjZ7CeL3BR24gN3S048o3U6q5kuyejSn1tO5OZ4gpq0LuuScSA6gQ5xGJG2qXoQ5FW9GV%2BGcY3wIaFD8Q83ryw3Zp9Q20ODjZ88kfEZTtNFp%2Baf57OEUY4JK4nrjdrLrr2ASbG%2FYpMd8e40%2Btq1leg61D0hQ2C2pZWozmy83pLt7vmLGUIKDJZNX3WrsM8pApXZqUax%2BkpkYAnEUU0adMtTNaIyxwY%2BcFt0Ryg1mlTcV3PNY%2FqOkNO%2Bv6dYhQCRccqxAS1oUiqQwEGsiOa5UVGkPYt4XQNO6L0sjsR8MJiPf8ZpC9K3ZAnRJeKrtAY9Mh6BPnWmlI31IOd4M%2B4xRhf%2Br6Xd1U2xhcgRh8%2BktG7C51i4LDdBL2qA%2BqZe19%2FwMuRy2hDN4Dh3VPBRowrwewun5%2BE%2BoLtoFpqj1hQtptAIra9quEVN3EBrG8lJcMi8mn1BzogVcLWuciYS4CNUXc7i4w4C7R6GCBNVHS%2F85xYxogswdz6EnK3BIXL%2BN9rEevzZlhx9Ao6GKFfDzinzk6rrRHOikSQ3oJDfEbn7btK6Mk0bq3hL2dTYJhdAXHDInsIfEf4IyouBS%2F1sW5YjK065qnEbNf%2FntnJ8Q1zxfSMwooyq0QY6pgGRlIXj3OWkti4YNieHGaCujEnadWanIeclyPsQoQbZOTJiqIclfvaFRM8qJ8h9IlOsVyR4qsZCJsq1aECwnRODp31L39vSo8BmsGBk%2BbHiJA3NZJDJdHlb41nCaxf9bwKyv9PMy6eLNsTuc8zt0c9WdYniNQHEEJXvU8TuAkAxaxbbdSGC6g2q9fSPLTUDeDEj1o2dhPZrLQ6JCYpI5f17ZyaTn%2Fwh&X-Amz-Signature=000e866e9fd07ddcc06668b81ab61998ff7d69be0c5ef005a3b5d1278618be26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


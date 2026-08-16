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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKHWOZI%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T091506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDIBNxhTRThfh9oK5hjIMwOYiZV5uFkZCiiqE8p4FwZLgIgaHyh%2F7JiCHxi7A%2F7QJixd8vJhCLgr%2BXnid3y2EyTP6Qq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCykBf9N7aqKThnUrSrcA9yDVt8QET2jUxLxiB58cQRVtbF0jWFdR5qkjrBDmmU7wrej6KJUTMji6Aor7V%2BUsr%2FRuhSo4i%2B9wahOmETM%2BG9lFlIxdhmdHEnA%2F0nOEEfmpU8vgbyoQZ1uTBVBiqzivSczgm1ruHdSvIN7rZsgHT3p6mBezmLWC9FRRwOmEvlvRel6pzDHGzdhSm9cCoZVYMBIomMe34mpX3q16YnUn%2Bim9a3yJbVEaf%2F4Q6SWhm428z0Bfjgae2FX4lg3FWx7bj6cj%2FjtEen3fREsPhPLyroJTbSxt%2Bm6U5gFTwJfAbfoGTi0OG2lwrpXmxqwyQ%2B6LnPDsbKRhJs1RIL0p1pU9NQMGjwomrxPgD6d4l7amrHw%2BoBlIx%2BlFOiD9WkOmVgOS7i%2FJf5YY1B25bwjzYGRHdZ423N3KZK8Ra0yXDzh%2F9EgUoZwapGprrVVtgR2Y1iIWi9%2Bka74XueJDv3AGnsq%2FzdcGqQHex41VQDyghMgIFgTgTFlt%2BuFY6DFY3DZjkwXQj5zKZ2xZ9w%2BgDG8phImtzAedvHl1lZofaJKSvGj%2BFRBPnHe4SW4ND28Ms6n0yfdJ44fv%2F%2BQ%2BRwIdB8OgkUsP1zYoreOSGU%2BTxB453%2BAEHaoK3N5RJJrJFOIdjRvMJCEhdQGOqUB4RCrZQjs18llkIfOei58SGmrlxfYK7NNBRrUQy5PmODGFU9jBkaGpiOvtdHxd7%2BI5acBVdSxciQ9K%2BnE4g0GY%2F8iR8cLS72yXsQiwOTpmefU0bPT5qVC7MJH2T%2BZLNN%2BGSS%2Ft%2BYmKrzM4k5FotMhraEtOwhOLT9EPbKSVOZwHvPZXH71LgiaSB0fxpazfbDB6Mv8vGjBXwbApuM1CsZvAzPzHlrc&X-Amz-Signature=64f26f474da735c1cbc1b3c72130099d657960288e69e68dba8e286bccf361dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DGLHX3N%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T062132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg3reD5T2tx31GtsDwkaLhIZcgr%2FRckRTMy%2BSqNa7jxAiEA9ms4yEk%2FZ2RJbcaES6yRI12GQGd8picG%2F71Lbq%2Bvwscq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCVysWrRUGxPcUkuGSrcA7oDxDbOBx2IQr4BjwNV%2F2VzKjRptRwQvzgLXVvRIlZCHLGqRfvd04rNGgsdGCAeBcuhwl%2FNNNihET39zIvwQC7bJdoOXfar0j8rod7A3MP4XaMPsexGClEYtyhxNz3VC4t%2FoG7QlxgvioK9%2FCfOC45AowHwH4RmzAJzDF%2FswxDDhxZIHmW42Xk1P6ffgOiTWfQN0OoB2iqD4y29zQVlWx%2FZiwxCx7eKjhnyVGlKguOQPexTWfQ7BjNRMija1zzi1VFlbIfOBQ9R0vizpCpiSkjf9lQ%2FzGXePehWOPVMyfOJWhnk9i%2Ft6fYBHRggV%2B4djJLAR2ujDgu91VTYXQ4BRVvq9YP1DgZWGAD0HmZGZ0pDsrBnVBXrs9jEzfEbAQojzjGHlzFHW8FCLpAZvns2mbSAq7H55mR3LiZFHx9fuHWYESYsuUmKzQfbGqUGjpcA6yFS6jPU9VuPfQB2nBVfwmSqEjhB9MRWMZJzijOYBiANBMK%2FQQ6tDT5Nf5%2BgipyGm1OrOT8yRIoG96dFDusa5Gl2SuNVG%2FlPljj6ieOQYfhmazgSYkyknIpbjI7nuFOr08DJz6%2Bm4s1FMq1xoqwAB469Ynt9e0N9rFY5HG4C5B8XicrEXtv4W9nQJ5JUMKrdlNQGOqUB2lNry9RC61j5fU9W%2BsuxbaWSiwUfbjREjx6I5RFVsCPN4%2BaW4Qe1VUo%2BJF6amL2nqoHTjBI0CF4AIUdMMNZrHE4IM2gPjLON0y%2FrLA3idCv2dw0JvtdJlcAGsiXvv2xekrUK%2BqFseQxoqVS2kaw8rp80LUR%2FZaw6lbLGYb0QJwE%2Fl84hqV6USlg1WlFb4D%2BsWgfqfNU8qfrp1rJNNm%2BgaYxDJjlb&X-Amz-Signature=eaef807f75f376f732ec9b82a53911baef1fa4fa0cca2b31c6303b263d33df09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


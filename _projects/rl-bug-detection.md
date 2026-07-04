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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA3I7IHL%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T104605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDNYJzqPedmVJW%2FmYSpa3Z24cGgCmShSRrjJUORLTXaoQIhAKzAnKBBN7Jn1P1iFKGxrsuy6UlpQ%2F78zd%2Fvdpka4bshKv8DCCIQABoMNjM3NDIzMTgzODA1IgxxA1W0X9p%2Fs%2BO631gq3AMXK7SBXSrA%2F%2FSpPXrX39cEW4dsyuYbSPvdRnkXovtNg556ll15lLQXZX330UF3Zha3uolllk8T9YWmRJMlM9lFNDzFyOxeRppyHHf79lek57uhXnNoSs5Wnsy8EpUAYrn48JtCJePs7Sl2bxYtftQ39nTEWMdtLFih%2BexFASIwUULP3X0ZQyDnEFs%2FBCjUSRM0ume8St7Ue7bo4B5goBur2S2sFxGLX0oHA%2F%2BprMhNrttYhP2BOCDLhrwl5bfrwvLKA5ZZoR2j4H6XfWTzt2xw4yWhpGAscAElAvj6DlnUrJ9qexUUIGwb92hNxAD62UoAae73dxONiiOXt3NFd6RzAoK2JPqdteFowPlhADecZ2HkDf1xNMg9SWV27WXR8HI1dgm%2By4UqushIZzloGRM9xGBhGBKx5kLGK4nWnuE1dodVmVj7YF8%2FJ650%2F%2FS5dixCpEzd2FavCUMZWHfdf8oWhoNQOa%2BGHnehnlTMnEH%2B2JAXX8DP164GeV4aCubIz3kAOptqAQwP5JlWP1%2B2xIZcWNQ%2F7MbbQBERgnGJH4NCpuLtLv5dB5vGOxdcbYFRzvTwY4U9kZ27TQuFY9K0t9Ze99S2uIpmJWpTVrED4WTWmYelPEm31ocTDdEcvTDyn6PSBjqkAVM4Z8xyQh8JzKxjxr3XCy0AvSf5WAIZJ%2B%2FjP3G80iozb8IPKjlZ%2BDGu3HhgBZ3zZrsgxPAQxq7tdP17rD8D23ELkFsKt8ZtwYP0ZSGxiDlDxHPdg9YrqDnB961LCxDZJZKcI%2FjgrP3CmGh7E0PxILvOH%2Be3M8rksxHby6fDsGC%2BixzblKHY2GEukaFl9YZd43slBqeS9%2FL4%2BZNKmGHKLpMSUap8&X-Amz-Signature=b4e3cb316f371d2a2b27706c2e2b37217a1085b5c3d153eeea90a9c048a3a14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


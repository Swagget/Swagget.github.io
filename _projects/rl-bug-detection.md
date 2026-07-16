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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBE6DCHL%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T215257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA6bLab7hkgjeQMX3UZxB6ZjsAxcTaKZIsHm6zMeVOcgIhAPWOkJHAzNskghy3hBfAp2JqTNRi4o1zc%2B1xRpRnWxEuKv8DCE4QABoMNjM3NDIzMTgzODA1IgxuXNhfwMUzaosE58wq3APwH%2FTL7AO5A4CAHQbAFsdXR2TkHnljCSypm6GJ36chlvgY5HlkOhV%2BP5kIINN7ZiL9L67i6m8DjYJyW%2BPLQWJlHauelJ4Vwn6xBOLVspE5MJrlitaK3l%2FppXi3KcpofV5uIePzZWlcVmqaIiVN0nhCtyH1Rnv4VcsRxnXjoSOi%2B3QR7HAvLHwasjnHRPdgkcjiS%2BAQwyA5sH%2FOt2hvXepwznLPcmX1BOGS0wDQiVXFGMSOpCvfkDacKaRvpwJgVTzF4tZpGcCSulNqw6%2Fj13730mc19UORgDFHML34we499zaqRe7oWcJ%2BfVoQ3Ddku%2Fa8QTO6Ipa%2F0a3B0JNtgZT5MRT6ZnTYrpCqi5PiOSHQHfARx7s4PyogNfbg1UZZS3Glye1uT9%2Fzn8Q%2Ft6bF7oYBSn8nVoct4QqBkngab6urvE6AkIIl2HpIqzQtw%2B%2Bi0kuBk7qjlTViZRoHNvxJIw3wBINIC6DIgUgTHtWJh%2FBn6Z2xetP0NmiRQVIu0ojDkrkHcDWmpFh9qTonqtsUIJTm7LzFELUny%2FMLMZheTVns5qB0szDY0rkYF3382Pny51iAnIZk5UGMK3oAsIrlr2%2B94JYsgOSTGy6oUA5C0lCa6mXg6blQYGfTTXK0ZzC1jOXSBjqkAZ9z1H7uyezYYSvhiOc5GLMDAKJcFlyq9F%2BPNhfjjEqoCd1K%2BE6CUxSbi3gCS7CXi6gDfX9gRczq6BSKJAn5bPUPbfah4%2BJ%2BLp7RAMeTZ%2FXoXhcr%2FkJPozS8WQAQE0wEkuc5C8um%2BJ4CiLxUEc%2FHiX3s8t516jN4t6tzUMhaA%2Bc6Qc%2B3%2FdIW8Og4DEEVoQ389rRiFOLMdcnlXovaAazXN%2Fn7%2FhDc&X-Amz-Signature=0ce033f47fb0a4fe4ed9b21b614d855241b09d8d2ead421d1355ce31e6ebdd83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


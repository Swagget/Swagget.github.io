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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSDKHBU%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T003137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICy5IKUuT%2FK5SU3%2FK4XngqqlfIfgWABeBdhTgtEWT34rAiEArxe3OSyfFLiMpRIuRLehym2BbaLTzJzRK8vVQkQR0m4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGTIQIe%2FBW%2BwU9st%2FircA06lu7%2BHfhBtWeWzkKzEAaicDjz5mgwdh24BcWL8khD0H5my300Nb6qLjO2jlpj5mj%2BjcjgisR3lOtvT%2BGO77pEptMYmb8Bn9fBmlU3k3LuNleZa%2BPEvqk1KFgporcKHIALH5GcPdWM2EEI1oYitEaw9x8%2B657L0brCCWHSJ2L%2FyyeTBtjzIOZGn2lGdCJkBlLtW9jwovdAF1QhZKZesdmHLGVwcxr95hmLy2u2Fz8vtSMidYQQkdkTqfzAGwgzyue8hxdiHN6Yxvw2nedzuB%2BXPYoL%2B5OrBUSzwlyh7FJMh3ujzOIxzJaBKZ36gA4a8gIuV9CoFtmAJYEAKPg61E%2F2KvMnH4oeyYHfkF94tR2zmjCQQPgCw1TmXuqwOYMw5nKjYedSt8AJMamDNQBu7G1rG54Ji1agXId70tXrbTFYeHBDFomi20ylCqig%2Bcgx6T91AM9wnrWBX058vr3O8dviIN3iyfoRjHgjpgaece%2FVJkWHeJxPnh0gaP42PXofsyeGzocIKfOxijz%2F4P4Bzsip2qbZy1R%2F5Tk6l%2FPM0d9D50XdaIvuA1lo6Uo6h7fXONG7264ksgRy25l%2FcYrPfHUqWTMBWXmGb0Ftd1aVlLREGLU9WXeRlAniMXWbpMLrYuNQGOqUBSECkTuE0VF68WNTB1%2BTsbXoT5z0bZaAOCKgb26DEnH8LAHDDs4a940NTAFtZQzgUDbs0K0ilbyDlH8XGMhLIxa%2FAUerkeD366nAZt2MXerRWu8UBEv3Aa1holS5oVAJhgagARXAv2FLouh9L94vtFxaPsC4%2FfhSIFMgfxJvGHquDFN7jSkVrStaVda4pJJ6d9g6Tp%2BYpc1n%2BNdy5l%2FXlmiBArlrB&X-Amz-Signature=a49289dcc1800d39060da3b47b8479d3fce2eacaee379bac63a7d61afefc6148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


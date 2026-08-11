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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255WMFKL%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T164300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX3rHsgiOeNWGIIL0mQX3IluKrOg6monfyBKQ4MGtVeQIhANyHPdUZemNqiIqAjtBYFzrQ%2BuRTnqFMfKHhlnegUylKKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMOo0gYM1Dt4NMHQUq3AMn2abJj18D9Y1Aa16gTVDhpgAAtGIvjSuLe5nGA8q%2F6NQk3DqlnWJXrg7mhdwC21DYjVyokmC8IT7LPsswK0ukceHbNQAzAd401bBlpgyhZU%2Bse%2FYy0XLzdirfRULst7bnax8YOsBTIWukNzKfo5T1X2gP%2Bf0hmrQqkjWxrlIxkhSUbuO7QpqWMrqYGqBUr%2FEG%2FYzxpqYPdnNK9S%2F1iqxtU2i3bG0ZEWTyTByzE9UBIfGXAd1w%2BudszSfv7YFlChtz%2FLCmZnfQ5D82g2R4%2F9j7tCziapzIhmbl6GSh4mGmOdlPtqpq7XjwHs68R80xnzR9XNItbp7kmw7NrsKZsI%2BeXMxLZHvXfpUTxRzh6iNaW3%2Fz9OBA2LlhkDWqC%2F7g7y0%2FzhTesoXzb6VN808BeNS7%2Fxeg8JNZggBt7UgAdaIJzwNG%2BP%2FEOEzgY39Fn%2FOlSr90gr9aWJyCR5OEPptYx8xkRUIREmOPYYz0t6hpd%2FynD2TRCjem7BDw3H5D6ajgaEh6pJMfGiQUovaahAJt0Q0%2FUHimFSPLAsADHLfvOVpLiacByQX7H1aQ97ZYp5tLuv9UhXMoWYfvarP5LCIrofzYe6ByStrQ1aU92xBYbKz6MPGFWlK1zdr7ewSNhDDkg%2B3TBjqkAbkuxBfCFHBduqL8XS4dT%2FwaZVMNvgG0hs3tCksxfWBkG3aZGeIUNmYiy78Wm9b8XAOqmIzA7wel501j1hbHuyb4v0BlBpmX4z1cq1ZHgdisQGWNO8hFDm8GGVOwk0St34SDveFA4e2xGNf1XLI4KPa4r%2FkbRb1az3Xb843qBBK%2FgCyZnXTW5v4fWj6THpkTtm1bm1EljDo8N2z4AyuXKp6rJrc6&X-Amz-Signature=39ccad708f041b51b94a38152524f2e7e31fa9caa9eb92ec9a701edae259950c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


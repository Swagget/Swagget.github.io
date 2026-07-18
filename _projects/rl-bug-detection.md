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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6QFEC4%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T223537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYxTjFgonc1KPhL8htERvDqCaz29t4kUWMaFYvu3AaQIhAKJmWOHORc1R8EoRmlbh9LpgtahDqLALV5Qw9D4VbyOxKv8DCH8QABoMNjM3NDIzMTgzODA1IgxMsyqeAgQCrl%2F9ozwq3AN1mvdOi0qOXCqLm1zt2aFQiNkpUlRbpAN12GJ2JQ51UZGQkxQaGpgldNrNLJx1Aba%2FrZqjCaifbYKpQBi23J6Zd6%2FOUomatNUQaAEkIb%2BkX1QOyut%2FxfWAMGtinrxpUQtgCn8oG0A%2BcjHXW0RtqbGQKeOqZDLMcWPfVwfYY4mZ%2Be3oe71uW0JwGHodqfIiNTWN58kL1u5yUYatURgHq5s7%2FdbQHanBNdGA8jYMrWK46%2F8aM3X4wV%2Bid9aAWLku9O5%2F2Gx42k1LhE9mD2jHnqV9rP%2FJLM7F9poVlOHYyAxmCWQMl3OwAEcmv1n0li7H91TBtcDLW4ZXGK2qn7BmZXDK4ozLTRYjWTDGoUJqkMNJLz%2FcdaloaRwYUYJKoMZ2Nk%2BCY5DRpx4oF0t8%2F52Bs%2BxAP6XJMm%2BkmOtvZBbXCAZiPCKgTmAWxRjh%2FyF73dxdSW%2FommqhmmjzpQXkP8trqmUgp%2FteOmCoFrNlQIRFWWTmjjo%2BzNx8AaXvTJq4ssZuTvI8EgVXCr%2Bv5DscqY0fMSl9ZteIJp22oD13ROmw5cIAeszrXsiUGG0334TECKTxoCxZKaKasEa83uLpLOBwYxsPg7tDQWZ8iZCqQWznVWkqoJoDuznqcrsyUZiKCjD6%2Be%2FSBjqkAcfak4kvUxFpUh%2ForP7RL%2BqaHQBkVIEOB986zJTUPt1r9myrkvwlTfgCQxx68JNRJLMyiIk3fEw%2FtV0ylAVeL7OkgH11E0tEKPYQK56UCCrF7NvfV03BrJo4cfWk4mkPJWLWq%2FTpLMRSi95%2FAyCjk8XqKBCusyYlabbFMZblVyqlNMbR2Hv8YvIZLrx17wmT1jYV4IEwyfLprqCFZtxquKLezf%2FP&X-Amz-Signature=1fab285745bd0f63bf28623d8a1d5136d2702c6f98aad4ab9cd5691f37de825f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


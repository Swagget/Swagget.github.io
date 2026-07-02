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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCS4FKW%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T190452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDMg%2BjN2YxTbO6Gn863zvZh36SHQ04DjE%2F%2FjQDRmmwK9AIhAIGDgwRRL0hPYcxQOwcYdCCg0uT8hQ6t0RXcxKxHRNcHKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyQ7bervHAN3LU5NQq3AOXwQhRwt4DcJADjFod26RsCPGDk9G459CEOaOxCHRBaSQ1qFQgDqnTK4M4KaSYwB4VlIklH%2Fw%2BvKV63IFoICkVuwRLxAn0gEDcvkoDPvLcm02%2BCABZ95KFyYkUjg2ayzf9lBIuImeh1QTUGunGHKbPOvlzNRCjxMhT%2F9E2qH%2F3V18GaopCl57J8k6TplHgJv0ULC88hISga20gDz2hW0L9aXONxqNSPidod%2Blz6%2Bx%2B6tk9ijGdUcHmYWv0Vh%2B%2BVSu71BrHqq39vadoIX62m03nQD8gJttojdYr3Xkx5JtRJqTu8Z7t7Elz%2BcT6eh%2B4LOXU2rFCZ4BKn4WldVtFJUQHUMAyVg1GAVCnV5oiUD1EhTbU6BoF71k%2Btc8y7J9s7qJ2rQd2Uw2CLbZELrV36p279mPIABIgYlphNWekffkdMLbvKx93InxhP7nVf2D6EJ5ki5I0jvdGW1u4dSp9FWleM6jUfv1McUnLMGxE%2FFDprk3SNBgCzqWRQYin%2FiMNOeCM8mAhvsVEpY8XHXTApK87PlJTh3ZJWSyI6oHSgghHbD1sIAxJzGE2BFgXEINo5ba0uuyrRpx9kPuCxuAye30SuyrTNsa8TiztuhMX%2BmD7fppx6TOc94LC%2BoGSCTCyw5rSBjqkATXfZiPSCuL67AFHEMl0ZeIliw6akKHscUyAaduxPdACKJLJWoMgkMnqJVYFVae0uWAb0wMcul7EZaqD5%2BsLODen3Krl2Pt72aBewBOG6adXgwAn62qX9Oo%2FBlNVAgNHoKC0gUCRuHvEVEI0qavRcNJ92YGAhXRfAj%2BZTwUEJl5UncEpiWAllyidwzm8EsUnrTgAKxmAPOwZ%2BTDa2GaK8o%2BwDOsC&X-Amz-Signature=d8108301d49a67d3d9db344ebc12e4d51e36984f8da603bcd5da4fefabaf7b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


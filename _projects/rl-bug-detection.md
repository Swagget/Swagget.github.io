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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466627H7GCB%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T201242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBdGCS6643pTaXbHI3iMFxHR5AwjVWH14dw2BtDq%2BBpAiBihBFOA4UxsgQaaNZNnuPEaoYsEHy7XhiGH%2Fnn1CceYir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2z9tg9%2F7F2Ac%2BxO3KtwD0lHUtHCY0XRVX48JhZjjahAZI341uqMIs2ydCd5vHL0byUgG8dnSRie%2BMtdmzJuaRsm%2FTDPZ75vpBkh8f75Sm7XaUdMb9IIgJTUP7Xy3dKJUKUPOiLAgajXq9oCIgDyixAXr2tAdpxxt94ods%2BBmtGFi4qigewE4zI6NPcbb4TQhKfNAFgzU%2Boa525Prj5yDmmCUD6t9%2FaF%2ByIVKUpIKLmHelxGN9A%2BtO%2FnVPv3%2FlEIo8ZKKFjR5aamH8QoDA%2B9LkmHV%2FtgYSuUbGEcKqSEdA2ghhfXQfhs3verQxssb0aNkgsALIcOIPdrcVVQuBkHATH4baVGjl21mNGCkwemGl%2BbgTT7UCywfCwTpiBxi2QJ1%2FOf1gIAI3GgaDXCOKKJf7jY1EsWLeA9xer5WilXvJzM40ICL%2BnArTlimjDKc9GYQCsWTb%2BSeXvLondOFSKrORNyIHvbybVvdX2HBSUaOKlDlnWrzwBjopA18WkP7KeopHSISV%2FIKeA03pH%2FUHOivO6EJD9ub3xgHfxkoRpjZJX32HSJhsLUJ3c1rlltVHl05pvSZQs2SF21Z2fxRLsepfYVrPgbhVEE2xZuUxhJbGGT3deTTV9PLE7a0f1iv68Ij7SOiQuO3ucR0DsowvaaN1AY6pgHE6Q0VsH6Sy3qbRh6iH10Zkhkz5a4WzhSj4nfy9a0oJ%2ByR2igj%2BM27ENyPivfjYo3NkqnvTjLiJxfqORC%2B0jKjSWmp3GPPwF7BG1XnoMG%2F6EjkeOpG1GGhDDD78m%2B3KKPOpx4r7%2B2DLy3Fe6RLFKXvZB0N6YxZEQSsRO40S0ATw%2BgXXT6bt5ICPQ%2BICmmmDHsKKz3vchUVEn8%2FsACJJzKhOva7%2Bhxm&X-Amz-Signature=04804ad26cd82ab03aefbc2f27b06b60da633d5405da4a5bc2823f785b02a8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAV75T3Z%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T231748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElKjRgBL4TFmtJw9ZQ1hGzLA%2BZsGKfC2fcdPLlsg48%2BAiBNPdlBgLEgPWppPTShmsH%2BdA7llax2tWEeasIHCDieYiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtIo7gKjv7utU%2BKZMKtwDgb%2F4jY9r3njMIuHT%2BzMHV96WR3jYmh5W4Pjd8RxJ%2BoKFx%2BSIAJ7pt6e21JhnNmk5jY%2BbO4wpyQRf2lCDJVlp8abRStZhPJLbo7lv8whN%2BdGlToDVyTq84wdYEkzl9yDEKxHama3DCdHlbBUsprDMqvmYA9qgyxWjxnmrgvgZOOJh8Hmybr1sEIs1yC39zeO0vbHmMpRvT2gCeK1u4yUghaMdHp62LQnVdJSUyjPS1NuFehF2sle7JI99afwgajJglhy2whfZGS1LAr%2Bc9axVLdaSbtpw6Hy%2BEmcQZb0wFy2XhUP98wlQEvlsPoNb2qssxxkgZjznLCt2t9uUs8O81QxDBOU2AANgwQTRmsrXQ0fA80X0BxP9hoRvqzWT2MSXYkIxopn2XfnHNvH5s7u2GXB0DcUQdV%2Fpsf3jAFfo23bLq8%2BszY8FXF6iPViiJFoLehiq4rbp0YHkVu52%2FX8UpO5xd4fUyBvLSSkMy8mrJU2z3MUVUzYIQQowuygJoLNAVFpSDShFxwVz5moQOgJFkygBMuNtT%2FP3E1GE91puI2H3VlDW6iSPzjq2rznKc2hXHU8ShO8Dqn14iTH%2BKaXLxiLpYhYNjodipjGFigoL6kPI9e531QQOM4%2FmxyQwmf3j0wY6pgG%2BM6fpQsnLmpA%2FUoaEM%2FBa01ID6RRhen3TieQ5g3NCs2ZNjOaH3BD4cPpk4UL1nuFLQm2VNiOSgK8g0eTpM68KwAwsywgDzLtFaWiZWfPjCmjl06ILV1bUYcQJCaQTATorwHn4rhI3HRAY8KWmuTbY9XG81zHpW76OSXkQyhnHuRKscKI4xKN%2BImI67TaHGAW6jXMSJe%2BYi4YfeOqHWsxng2VxfMfS&X-Amz-Signature=bd30be2d2f24f348815f06d8ad4d34d11246abd9aa9b14f7f21c2469057c5351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


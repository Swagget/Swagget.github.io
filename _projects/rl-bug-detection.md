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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCFS4ZY%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T051300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRO7COo%2BC5teMC9t5kcTQFTtvDCRWy3mwrBrLEgCElcAIgc5SPd%2F3g5tvoZKIppWZcjn827HcIgiAdAstzvrI6Pp4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQG9vu7BMIDIn9cGCrcA%2FS54yGpeqkd0HB5TuJDn9RhLHNjcxkPjqZPnYCJa4GvG8mQ9Rr2teHHv1xrudF7PqMtrewYmUSzMucarfrEGXUZMNc9y2vlnOQi4UxZ8jJ2Dt%2BpskE5ZTU5R%2FopiQ8FPl5rZNRLs4GE3BG1K%2Fo1srD8FCJpbDMyTJGhZ7AZN6yUIH%2FRnu66APcLLVl6r8tQ21sPOusBWbfewhV09Qgs%2F63HehH7NxtD69NrP27daY6IPTAtlOH5vdSKJUdrgjulqFcq4UrpyOIDDP644U4k9LMD2DexOy57fI6nrWsOFzy4Qs8TN4kt3Gn05kinl%2FWqGFzt%2FdzAmhSHqfVS4rSjOUavmoNYGXi%2BwqHf0muWPK%2F8Hlo4zP4E5c8gVSKKtcFLqvO6ZaVNmw0LKUjrWVYK%2BXOQeR7ArC6KbSS%2Bn2aAjZalijZLqwNJks8HNmMDFuBRSKD77MfbQfzaBekfagDQ6iBQmLfu3GBxLCSu5kmeV41rHL8Fzw%2BNYtoBgDZhk0VdihnCf4t1G47f1%2B2id9O51HNahERzXdr%2BzsEHjwkgXvazqPAJFUJfMga3vZkmTnMiIpWcLxWM5QMZTzt3FI2Utw1QIksd1Pa2ByoQndrQpseTie39APuIaBSTJjSuMPiW5dMGOqUB%2BDi1N%2FEaZhTgnWCcgfeD%2Bb6yMNmiSzIktcV1Atw4UXN6n2GJ6yWCrEHTHEzwg%2FBiaFFHTcCMnNFjT6Y8OmqV0QyvxfCs%2B146exvJiI9IAK%2B62jopG9mDErdWTeyWxopRcVvaYzVvDEjtKgftFhcbdebThCRuFfRGsnoG00hdoZ16yr45PYI9n21YVcBm1BrssjRZapaPRWkLtITKcJpZaUyluRv%2F&X-Amz-Signature=27381baf03bf0999923e517fdf98d215b56b92565d461adad69afec3a3440ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


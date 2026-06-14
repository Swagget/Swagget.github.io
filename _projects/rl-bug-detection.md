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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G7BQPUJ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T205700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRv4hd3YRs763WGFTX9VwFASI1xsIp3zJI7qFWjcEKSwIhAI%2BhRLi3S49oMySkEK4T%2B1Aq5mAdiJLdAQi4cAhbtR5JKv8DCEwQABoMNjM3NDIzMTgzODA1IgyV3l9VDLbAqnq1izMq3AN9r7pKNR%2FTO6aZONMwMWsoWUFOCuy3YXtW3xdpetBRts%2BatoKCmgFNGx5gkDtPtBVL64J87u1Si%2Bs7fQO7aFr4lL0oLxNAPNlm6PC5%2FWZJa%2FOJDVNW1VfDCCo8XDQjt1E1ezC8zofYfqn6S%2Bj7Hira42s8lrageCUkzFRBmqcZK91UQsASH3Oxumbz1SF7X8qS5I1KEE0LlMGdFaMvQWPI72A%2BRO6vUFPCMc4TVazLsgvkXgWgXas3sa8LSEJ461WgJY3LkWT3%2BknfLFH1M%2BG0pOOElkySJD1lBMeOs4duOizFHsfyzySIAaEf3vUy%2BM%2FVSuGCJoBcai6nwa31KetOzjIpqLzaStgcKv6ew9Qk77WsTkBNaK%2F4pTeVFagpL57L0DgLhkg3iJr27oKwrYLJi9qn5ixDmLvILRWeS7P7p6XtLRabRo%2Bx%2FQMwnU6jTvfrm8RWECLGl6kV4Ci7zmElt1L%2B9Azy12lVmEQpEs2SDx0sYR71bTrg79JsBdU05WoqQKBJ%2FCGI6qI%2FKRHBZcf2LysScdMhREwtdSpD77iD3gCBwoejQBYKIPSJbojTvSKsGP%2F7hVgatMnokAESMPakw%2BbJq5DSL1GhESn5yGK6S6Vrd1W6G%2F%2F9VV88WDDY%2FrvRBjqkAS5syot0w5pN0VBGDFVCilvT4tHQAScxlHiKbxG5vmA6hgCnSsZFK8O6zffwW7utzcLpqMW4%2BbPMTVvhrVl7WgfaOQWuKRzhMhesNJOF5fOKkk8p4AB8iJ4XbBKl5485aBUR64YYpWHP%2FP%2B5woZh5IKbFdxl%2FZQmeErRPhSKmhZuKw2oUevP1E98jkcTg6sB5HTwTgxQcokW1I8iUwMzzIYl36vi&X-Amz-Signature=f25c0c0d9518e038eb07a2358f0a58e337dae57c2e7732c3d1df6396ebcd120c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


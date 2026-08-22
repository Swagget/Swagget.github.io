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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3MORT2%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T051526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMH0EpeEY0eO1%2Bt2YWkTB4dVGcOG3itxoi4%2FsqWf1f6AiEA84ul%2BCkhQu5PHcJCVxqZ%2FAi%2B9L3s%2BoAIDntcvO7RBzEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAzpsxzxT447%2BVopircA6bVlrVAvtEBjQeLas7scdc0i75rsaf05oWSAF1m%2FJhHeaF2xzm1cyeNRZ4syKzNhukUNb58qs%2Bu01R%2BGCR%2BPpNaSjaYxh17sfW2NdqXmYcZPAtYMRTFMgc7a4cz2WAJuQn7DxnsooiFn1LPevFCnmgBFKQoNBX1HdzFcL29%2F%2F8rZXnPnYs%2BZit%2F9NLOgOUpZuerpwfdqfnSsjDubFpnnsmZu0SmYzK1bTM3bl2%2BbUqBkjZfcVUeKyRi%2B2XN8NHlJ%2FhZ4AMoZWjNl3OeGBvx1kg6Kd9L3cIJmPOhEqzB892NoEXkGelLkTg5E95f0X8XKnGDbixZKo2x92MHrrifcnppfCgbEA3FVn6ap2s4VlwmN8tSerNtNprxxR3ihsHWUbHlmEnMxBTG6ISVu4eJuFmjY8odS%2Fef0nOQh6aKtcOSfAUzulw8SvOH19oa0RS4aEhQDPih5d%2BHS5kj%2Fw3sDycJZQsPPja8PWBmGO8zqvaT7ajOS9sFVPCYtP%2BWvpdYigKBI3ZJPnRWY2x1HiiMP0ZyonTYBJuF%2BokZoQXuM3X86z2qdrqnfiWnbZcfkN1rLb02Ga4AGzRv0weCibFvO%2FnPmR7qIluDdzy6ZLn6phaAu%2BJ5E7Htk7SKrrAjMOXBpNQGOqUBHAYuur9kOZEQtw9e63rY3p%2BWrTHylLEEWzfkD7mjdCNImZu6%2BmpJdD3UzNAKqGxPFtwC7taV2UkUmPczj0lcljzkBjeMgmoMl7J4359L%2FGH8SiHyizrk9vPzDDIeArhLkV1llVBQzadbzmEW2JZoBQRGqRv6RfCNhK6kbUqwKJehCPaGRTPZSjU4k7opzw8SDEyLrpGbBt6ohyeCojJp9rJOElEx&X-Amz-Signature=bbd80e5980c0c61213a93e91e7377ba9753e1b45ff534361040f0e2567269614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


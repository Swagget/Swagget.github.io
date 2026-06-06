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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466466T74P7%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T192315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4a9G8CZbKy7iA8nDLxbyN7r2sE39ZbaTH7Ds%2Fr6ejOAiEAr5jIlv4fpzQKp9HoprR5cPEQ7w95qQkTSU0xk35Lsh8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcfXxSkRORrY5TV3ircAzyoaQe39AU925QLTbm%2F%2FLHgb%2BHS3jvuLge39w6EKw3zPJAyJmj9aOcqai2Oerb1%2FkHrBf5RLimG%2BSPv%2BuZI2dPRAvGC6C41TyOzqGG%2Brs%2BYcgpDU2pVpzMClOyu77s9VK5zksHowr8E3MEqKmnSWt0NTqNeelVlda0VpyRRsFmPYE83chOM1BoKFm7BMgMeUlwpaDOH91idECyb4rST6Kn39kTdcCML79rRBNX19kAZwhX21GKqo6Tm%2F6wf%2FO92jjx1n2hytL5TPXCks5uXKYNXNaCDwjSlkzPwIT4HWfoCylSIRCXaE54mI%2BBKB5RtsTSXk9UrBykvBrfqulSS79qSybUryJKLAILpq69acb3%2FmAjOg%2Bt8MZiBhYbHGZ5wBFnR%2Fbvr3wl14cKL%2BKG2W28W0Ydp5gM9rLaW7T8rw%2BQxNsSdaAqN76KGXvQW2l5K8CKP%2BWWIWiQTuyb7BIdRWFYtDWbBHGZ6zd%2BuSkRR6UHiFFpl4rafBwzGb5pzq8S7LO13AtGC8vjD1U%2FYIxB1IRy41jDgAPTXm2NunLYzh8xWZzSJOotIjqYDVQ35f%2FAznfB4hOr0Mn%2F5qjZxIV9kzzpXjwbF%2FJi7PdkrT6FYG9VScmFh9yWXIXkPhe7WMMbUkdEGOqUBSu2kwkaMaTNuYw8AuhUKlfwlu90ZOQBJfFUZ3Wn687z9OJgqYQFT9Xkb1j%2F2rcYShxoK8dnszCq61hVG7sFwCgrwN7Y1ptFhmu5lty8AgyBFFRgiL4tMY2K1t4F4r67HnSZ1fHsbO170XN7MbTvOSg77i4d%2FNsmRwE4JC%2BTlJ37d4yblC%2BnRU%2B%2Bbp3odVMKniUcwIL3A%2Fq9c1SCBdXHvSeg6683%2F&X-Amz-Signature=a742002ef75050f7a0e97e3db8cc9ac0568de37c733494a0988f25bfae09e917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


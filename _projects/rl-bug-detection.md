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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKO7IZSL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T005333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHU8zvcC9kmvc2Daa2nZfqoLk90GByW7%2FM%2BwXvLdL%2FaYAiAeT%2B5rghKrPNE%2BAYRZEChjlQP%2Bx2WMCqy7tHcqOr%2BkHCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2FGgw9bPZU5Ec9TyKtwDd2HCtJa%2B3%2BQxRSVKsRobdoBrVfz%2BTp6JCl7iQvuMDPVWftMVDZmhTxCj1BkGqsBmqZYj0lyOGamY5W7uwuohGgYWJ9u6%2BZcC73V7NPtMgVn88GyCbN%2F0OXenM%2FYKuPOmMJRfU%2FMaKYlkqW1ekh6Wv7FVN6sUsflWjjV3gOCNIcl53lLI%2FPgU65UYPLMZHS5f6KcTkTT02iitJkx9rk1MuA9pXhCV%2B%2BWEVG0saxP%2BeIeQMR2o3nC4RgPKfiM8YCbfkLTJ7RBPaQfU7zCIaSkY6TuoDA7Mk8HYQ%2BdO%2BslffMtVy%2FF8ZzTplgF57m7fq8dDSIvNNuZOE4QEIKUdilKfeyR45RRQLK0fPXmWmBXByY6vFSD9JxV9MZ3iHUkIWlGDeZBwjgeFOSGKrNlEmWzDnkd9E148AufoQKvbqG5CjxDnLFJzcI9qst6PyuFLnQey%2FdHIKaeygBGLxr%2Fite8FTbcaY4k1qc32YThfLUkTlZ4eeL6%2BoSrq0cNVhyKgNaUejocQmBH9bDtOG7RUWCsDqV8CRUQlvhW0J0TDggfSUM7aFrWajvdG8fy7Z%2F3ff9G2FfILNhwoul%2BCRT9MwX7gxymMQ2xpJzBiSzDprZF6VpQZRUNxfyjAcEg7zEcw2rz50wY6pgGLRVwqsDckoyorSp%2FTYTgIenHRO%2FZAIU%2FAbIj%2FA86CtOxfjmxdhz5ZTMV%2Fu1Abo3t3hwmWUo3gM2cdkF6%2FSOB3zpMm%2FnixIew17c9nEh7rZjNnFhQ1mD%2B4ow2H%2BgeCqAwxxhsLcEfstZFsdewMKG7Pn2A4weLQFV3lYmGPuFev%2FRjp82vKS%2F8x12SCykj8339sZ6VFvWoDqFzULeAwoUBCB6NNfUYV&X-Amz-Signature=b761cd9ac8a84332d86f1b5f55018fe5f0f517307f48fc51abed1aa13a2bdc71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


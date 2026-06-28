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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6YMOGYT%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T130825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwafaM50uRthEvkaof9sHNTdZPWaCxJEpWPA1SqmNtlAiEA7dpuR0J2h0%2Bz6OR3UAjpuH5soVtMGK2dfPuHZWQY8RsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfiew8ffSDLIPPRPircA2ZIezCbVPF6aPCReNC06E%2Bzk981ER1LjTG1I8EqzPt2UmdLOGusBEv2VDbQ5DAa%2FtKRizXXhJ6hEUBSKrRhDLQJZMZr71mvyZm1OD0pfEAaXOS9JF8EY2jW8xt1sXRsCzDNBmgXf6kLLb4XA0Sk3FsmXi8HSeYiY6Q2b%2Ftjhw66uycB6TaOzFRER%2BXca8TInyV7R17vjAd7DRfuJfjVFy4Cz7tTojAKKaHK9nrcIhJj66%2FvctSMqDpn%2FCEaw7YgdmLbSyGqVlvyPUVpoQpV3LXlwK7gIXmvDCQyI5xHFwxlDRcsq%2Bko72zN27hv1IReUJH8eH0hUNN4MJRj2ks9hW3JKVA7fSvH7hP%2BJuWtNSlZkpd9LOFpmt3415IRElbMOg8sRhRzZTI5ml2YPsaNOJt9cRZ0H3HFDjOTYbj5upNliqd8jhG6uGnYUD%2FVwyBxAE4QZ3o%2FcGD6JSPEcV8PWAOC%2BgpqCzTppBQG6ZrE1MRsVpiCEzhGCwAXNQqah3QfF5kgqArZPzGT88OC534KG%2Ba8fSNRcrE8efPEeFp6DBQpTrTqEoDhGA3UOJIY7oYLsTMwMK9vE2SmO3B9gQO3CHI29CyyayDvfkd2euGs%2FIegKXLbX8z4KdQ1jenoMPK5g9IGOqUB4aG79YQsrLwA6Pcr6yfwCyWrH5NltHU886USFtFHolSJKf4VvcXKsbloAn3UDP5Zs1ogG5sLN%2F5mLMlj1SfifOixaxsrVzufkFLF5qpBBQZ5UgdAFA2g0pRteVel9g%2B7LqYnqKoHa8OLGzqn0LvAyqB07xwyk%2FrV18%2B%2BcCqcmGti1YpNVMcfDeOcGKrcJaqvAYrAtPlVH6g5Lc6DHV5BtOOuXjXP&X-Amz-Signature=39fc675f2cca0b2d4c902894aac3b69502568f4fd9a1f6d718e46e4356ebab49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


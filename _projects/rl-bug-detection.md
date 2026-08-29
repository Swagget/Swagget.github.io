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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MG2H5X3%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T092758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXdLqLRNeQvd0ogAZGsqGluAcYbCjqqJf28Qs%2BVtSKxAiBLcuWxE92pGEJPsjWGWQrEFXNZVLSSwnGaiI9FYPtmuyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIME%2BXcwuTQk8By7lDZKtwDB%2BtRdh8ijT%2Be%2Fqs90ZcKKx1wwO5Yr%2FBWGwOaAQIv2aUNSPwdkVDkRarJ9H3O3KLRCdY6NFIdBvfrLjHfT1ANP2BYVaLjtz36opd%2FCpuuBRrAdEiPG%2BVPBfHoeF9WeC7AKm%2Fvg90XpDTy%2Fu1D2Q%2FAF8PjQVrHnlCFkA1Fp2vDGv4ApNcCVlQb4jKqw821MAwW6%2Fv8nuF7gfwTUz3RzSCD7MY2CKX%2FsByKtQIQrYGG713xMsfaW%2FDOBbPr7A%2BOC9HYnc9wTVjV%2Fj7A6peM4FwGjd9Mme320PuU09zUl480AE17tFoe07ZLn0CkSg1Sx5BHctHFxFzqUbZk1tX337blLDIJ%2BbPl6ljKLemUyVNOBOxEOJq0x7TLBOCMJMYTwQLsMU46E%2FYSUJ%2F8kCp9xXuKPcxyqY3VKvIwa9pKaB%2BbgDREiKXDTO4ifBr%2FFom33VFZxtqFlvZOKGaT4uMjd9XZSxOCyH4fY4c1spmff1z3XOCwdHU7TEpjo4rws28lsH8nLaySV2wX0mQFq4nUqTqPgheOBnBFwwr2wOg1roCHBuYBjRtGrRpNHQqE6eV0IyHaCu7yvLO5JikZd2fF48bk35AOkvqwU5HH9JsQv2U5PrgZAuri6Od%2BvIU9fZ0wmcPK1AY6pgF3N20%2FXdkLhe40zkYYL%2FKRobucD1u9ou3PAU14QcGeQhr%2BEJvXrQZsiHwHpCB0MzK5DNaN8VmafwYDOF0qPT8tZXeoMeuaXVMUKIQF4OBu8VUuOIzTDMS3C0ZD9UcXL9IvGBcLBdNSnDf5Y%2B%2FgKgjTXk8carXKbGQsWEQKsBcBtI1gzkxAiZ9Y3ijVol%2B6C938XxWynnLY3JG%2FbdZQbRr0aoO7M%2BQQ&X-Amz-Signature=97781f3696212d42eb48a6380788dfc6db455fc3451b864644ced01ff5514614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


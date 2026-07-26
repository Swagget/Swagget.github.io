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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3UZJUQN%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T164233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDsuvqQTJNRPvnhVzGIkRMeHezxfiz1JOHUSCIhvIpcuAIhAPULEkGpQHVqAUzS0E8bEB2vD2csCU68AprUJB1hERQDKv8DCDoQABoMNjM3NDIzMTgzODA1Igxm8BFiDX%2F5LEzGnOUq3AMhXdJmjYlkdjKxjBmhIAObcKLkna0cEK9AB5Lc47DXympvC7VJVHu7tFJ2HNQqKASGW82cCLeMzNDDDnEs1naIzGoEvl3%2FR5X%2BPNqLS7tv%2Bsg3phiYd%2Byr%2F%2Fw35h3ayV7A2nfV1M1tQXchXBDTLpAUWRIPL9H5K7qBdZ9IV3u%2BjF%2BfUO1SpGorlBtyoFG6rGolEUzwXhf7wAlxCXL2RZFKokbm1HafUaxAdubQEnYigSyUfu9Pxqaz3AeIgv40r3JzfZLLFDqZ4a30SrFwoSF6ac%2FsxqTrkWbYjLvqmj%2ByelZVAYYz7P68%2FgmhomN1ywUruAeIwYhVA0WAYgFPBCj%2BHKmY8LDEBxGwfSmlJavjK1Mrlniup3oKHDV0MBVEFEls%2BDrmHFrjnVQHcui%2F6dvQ28kKSt1PgrZK0oZ9zEQcjDTqUlOBbKmJOwxsaVOBW9Ch9t3rRdA45mVbYEDiGM4IjowPtG%2FMsYLM5aMiY4XgqFoy0YgfCGZ4fS0o6ai920fIft7%2B2BRRLCrnbjMftQZo5h6%2FzevFNBY%2F4oOAYjeOYImVDLkJo7AtLbJsvdVMaUYdgxFDkRAyzrQ1m1haG1MOXV%2FEde4XFBNZCYQhQUo5zmGtZLzlO3Rpff0pLTDx65jTBjqkAYuWXGKIiTu2RJooattvpfokra1AZvnijHCSsKegCk13E7gUQ9iV3U03fqbcEePUFe0JSFQvDdV6Avv3VBjaThwgVRITkJt0bdQn6H41MKmtXpAJ7g1Q8gFSZQbbMchW7OaOb1G73Aq7EgQRvDAW5TtKlgp2MMcxRCdgZmM473ynLPRAuWKSQYTisyK7GbVlDtCP2Rxhh5Kg8WcI%2Fb9ToaPIbbUd&X-Amz-Signature=85dec3b32cc32430a6f144be2f4a0058dc72064f3dce932077f3e86431855a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


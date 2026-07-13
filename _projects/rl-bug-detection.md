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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XUJHVH%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T234017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDcWCEtaO96WNUAiZ9fYHt6Y9d1uSfQcJwHqk17cVFYaAiEA5kSbjfGEP%2B%2Fg3H0%2FBWs3nX5DwAcy%2F1tOKdbGLTVYwD4q%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDI304bkZgDJWXTPz4SrcA7PdRuynRFDad2y0MoYT%2BvLLdAyvY93dFx7%2Bj0VfoNUzOJxM3g2yvvIx%2BRAleWLzTr3l179OooJE9WIH%2FpM9eElNuq8q2BYITAQ8t0ykVYZl4FMLLmfKsapP%2FokUIfhSHCWcccs%2F5G4c6L3yTmwPTPNGn4cWU0SB%2BrRVaaUp0YvWyjO3DKeCfuXav7RsdlmP54zCkSG3M09MRh9d9VjQwKUA4uXY%2Bfc3utlz2RH1bjh2TfxwgrLE4%2FL%2FHerdfrXNGximBJWWqU5g%2Fo7fFKK92rEq%2FzM5CSD%2BxIDcr3vCYxRvXEjv4lIP79Q7grIaoxUmE8bIYjJQ%2FVmndLEAP6BalQiy8fWEWbb0GJ6I%2B%2BEjGxP7xDcJsybOdqiuZQdZyng39VvGFWacvYzDEX%2FNjBV%2Bo7lEWOW5Ep16UBobmDEpejQkcCf0VVWht28t7tx3EJTzEZMGsdhNacLg9zrB3lWGkWtB3ffTEmgwSm6P%2BQD4gx1OdnD4rgg1Y9pfh0pmjQlvFuydBp1rP0Pm8n9Zker3gae1FPodUURDbMZYDGFKpwyHmyNFRSvC%2F5KekGERw4UFugBJN7%2FwZeUSp1dz6ulbS71GC40N0F3IwIA8LtE6SWAiT1niUZdUM5Y7lKf1MP651dIGOqUB0ZK2tIOF6bZjr6Ohtqx%2B4Oc3vNqcd9nrCPemdChdAL8Sd%2Bc5w59cQpQQTYb4oMbdW3CE5XZMS5kTovoryA0xKCqZ%2FlDWkaJD3jeo6ZoIrHHQITZijYW1XOfkzsAGKpDomFdvyRAmujbaNc1gr9%2BVyTVd6wkxuJ%2Fp1Jz%2BIGwyRczYQUe7L5ywNLqzY%2FBzBjco9HNusPVO4g5RN5aoMiPUEjoIbdPd&X-Amz-Signature=d021a53e96f10a468faacee3e6f04f8f23c8edd7c5f0a1ac63d939bacc953e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


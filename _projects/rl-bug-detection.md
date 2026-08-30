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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YAVZJUV%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T185241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnry8qZz0FTK2IJsAHPYTvHZlHz1T8mBFzM3qkdvVHJAIgL1RFEqq2m5u%2BsAEdphL03GeKZi5ufsNla02t4tIh8TkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTbj4Bs0Jvn6FtzJyrcA%2B2VbRk%2BXtijNkjG%2FIS78caT%2BRVFMM%2BnCCj7D3qN8%2BDZ26dvWonfiNUGn13kXFYWi2LmFBOEaUUmfpAH5HzM4OSyFKFoYf2Da8sBnVm0AWFEs%2FPDeus%2FNRWkVjsloZQ%2FOk0jGttNw3RqysJxhlW4h5UjnQocY2gC33NdzxqdmDPGM2Bh3Qe7d6PkWeTR%2F8QJXmS58PIxo6u4ayu8IdrRKZb4aF8pBzJE%2BisoZlNFrBC2BmFcAoWVv5dHfeacnbPJPKnF1gHs9%2FWQDADqMWmqX7Gp%2BQbpm4UR8uxO0J2kP0mtTes7TXykc7rDrOs%2B%2BDZrzDV1mEXgyhJlyX36LqkaC%2BFDmvsFwsqIvlJStrWwrdtzNMoFh%2B08GGaXJNYie%2BCCy7N%2BqlZfX%2FWNsfrTf87PiZ2cDnwEfoKlZLjUrVjca%2FwFZZFbHd8rakuKLABisQZEeI4Dr86k%2FFBAkt%2FWS2zPK7w%2F2f3i7AfO97jsJZ16e3nkoVUqFdFeA3P4WalwW6qbcQITQ3ml%2FPDWpynaKSzrwGlZJzGNYZAYu%2FN01%2FnYUXxA5kbDrLfmCwykDMznBVKw4KsUkhVyQLPvO4GH81FZB21aMt8ZUIIizFTExtlztmQ3r3TOlKCQIk5T4t3VMNrg0dQGOqUBdydbJKnHemBFUho7%2F7v1XxCL5%2B02wM4QrP%2BK4UiiGQiVkQwO9cWx6FsN6B2LmD%2FSNZNTtk1i8dUCyv4D%2FXSQSO8qD%2Bh8gwIJs0spIzRsNskqVEDxN%2BcfYW2JTAuL%2F6zuTdiWM%2BJpUj2qjAniacpoSxDTBTL8SFIplvP1eu0c82R6Q5sDKkJjwx4QBPZ8k%2FkAZLUbb7wbdL8uXj6bgYrwlP3HMIfT&X-Amz-Signature=5d30c628448bb14ed23e0d2201ad012eabcc133618342ea7a409e291e9fb9f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBRLNRGY%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T215510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgzNyiKtBOYwOUwz9pFLqAu8xLstwrVcs1Kj7erNRsVAIgISuCrhmdsobWyEEFzEonL4xOQorUSkmnLYvr%2F%2FaP4WoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqHloOoISrkLrxF%2FSrcAzkJMaAkQhglLcPpYZcJnivLn%2F1mzBlg6RjNe09cMlGmMYRZu2L3TFkHT6SBtvrRN7SwU3%2BStZMApEAxN7eL1R9NU%2Beeh8UfARg2fJAH4n8vS9D1vVN1hCEruNK%2BuQG9M0JKPOcJIeJvL97o9GqugAxa8zl%2BTVmwuyE7AVYYuy%2FcDkAuYx0glom1edIlC53Rr5hk%2FPFeOGPdroHz93ETEGsxd7GL4ZgYqltGpOHy9ILZBm%2Fd5xc0rEcbyYs1jTxnpxQEGG3P2EfsAThPOXwcQxrf0lZIyu3gp%2F9nIWCgn8vtW5Ke5kA7%2FrTyFwnKi3fAinid9eojTBiu3dIojxBhxI4Bb9jPpsi22OjLLYEEIfDigzeecSZQMbwezNdYToy1OmB4fza7S79TYRK%2F9mF7KgcMVnhY7RqVtX2pRABVtHkgpqjhTAOeUTHD1LT6lfmm65vwvoiqkj14m1IPc%2F%2FzriT69CZDqhtURMCAWq31Y01fb%2FLrkJ8Rw%2B4mUtSGe6ncRUtUroRGPn3UpOVQqS4DQzuCYsHKVjVTLJgEMTSIF8ayrwJp21hQtf0E0G7bQHKCkhZcHUHLQTXXvhdAVpWUFBGXW%2Faowp9U7%2BL9fJjsdWeroGpjo9wX0OoY5GadMPTPxdIGOqUBTus9ZDGI2pdjNzkdNnj%2FaV%2F4oUFc4F8tLrFXBvYEWgHjVq9%2FpgSGxO5ZjbrSbQuMjBHnRGPVc1P0dLEGPkB5YEMlgl8eD%2BY7BWothxXbVEUbZy4LKfKc%2ByGTOMYEg%2BQG8p4NxpPO42GrvGHocLruuwRdOsEQEbJ9NnNtynnDtHm8MSUa3B5PrC94lbWlSTaXpxQBliz5%2BezNE9BXmCjV9QFWEtaP&X-Amz-Signature=fe050830ff3f1f00a0e97c3c286634f0fd317b491fb61c222fd01788ce8a2a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


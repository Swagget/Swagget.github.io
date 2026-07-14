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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHTACX5X%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T233933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCl8iCtie2zTdq8Um8n7H66%2FdaTgXwUhap%2FfHQ6jsb8egIgUIqTTnNs26n5FXk9EU20mUpNTTp%2BApgPTrOmMsKOx1Iq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCBSbDTtvoSb4S02OyrcAwzaczTDYGkK50e4CDSiSK1g80s7tndwOHDkRfjAgBzU1vHA8At8ePo6mnfqBjkRfOy1aBYogvEPjMDvIorkToiTxauAFh0JsqbKr4x2mtJmDlQoUSKpriH9YBJjnbV5JBQUcc42FHvGCcs6NBszeMCGYi0Zm7bwnc%2FNpN8VvJl9ObYN123PbD0qGvgE3dvD8WsV9kOa6c6rPm43lMbLzlfpR23Kl7J7%2FACbCBh53kY9F1b%2F8FyDidSdlz%2BEgsi3dQXWfER00TTetcN8a4b1Vql1rr1KxPqEPGGq9CYUSddo1YnbCys5irDfFymMHU6D%2BSotHpzeX5fjLAONTy83G0EeTWUCGh%2BiKEF2C5qp1ailCGDcYdse2rPjBizsH1aygnxTFXaGHP31c5eSzj9ZsGF%2BJ3jRIGruyMGXh4GGPFfM%2BdLYf1Tm1q%2FqjyfrQI04bU3nW3fmbAd641697jwaLeitNjxcUl9x03rfeDecX3qKDDH71y26NCsyK4z%2FVk9%2B4ls06yPgdelC%2BdWjIIRVaD8qjBq8lbfC4aFSOVRTWPZWL8EyNZGRRkH3K4Qd0QNkcpTwjvVDFDbzk9cQbEmQzXSuMLgTb1ygC6F9DFHAOj7M1Q5nuVMTxLeaEj4pMOmD29IGOqUBKqY7rZATpzlXM8%2Bw9S%2B5XEj7SSh5tjSvP%2B4a%2BnPeXXTHrXN5LOQSCROeffwQKQQlA6rUk74K0DEBKbcwOLeotWzlT0%2BlntYyzIP8wlpOQL3EyutKM3X7i1UV7HPpkbvIwQWssmktjiRED%2B%2BXEk8JLPEzeA7XOietp%2FrUuJGxa337ckMIdAkJjylWHW9hp2E%2By2N5pEFl6FNg0pqPhs0m60nwaHMF&X-Amz-Signature=10dee7aa34d3b16e78ca3e5a28cd3d33dc99c1117b65ee1538130c4ad1953d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


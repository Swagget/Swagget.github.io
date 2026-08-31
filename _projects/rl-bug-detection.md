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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFNU24F%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMpoW50mMeUJsrdHfgzJxXFn0zN6tryMLopw1ISrLS%2FAiA11Y6lkk2JDH6RPIFWPbclVSDC0Z0%2F6GPbvKYvAI0NhSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ywvaNPCLl5U3GCQKtwDTXAREYchzocQmebjN5PshogpUKt%2F0YquTIe%2BbPdUOX4%2FN2ifS%2B1IV6mNMAgidVXR5xCZ4dVwTLl9a6LrHEGL0xmXVR%2F%2B3QsjeZopxxmPmpWL3wHJ%2BGAPxcrOd9TDAUQKSZDd9mav9V9XoO5RQ5cLSShdS0W9frWD3v%2B%2BmVivsKQKxpaZkWLJSBPQNQI3Xe9F%2FNBxBCwOZmVQtVbukAiO%2BfcGFtZwOz3Vr3nIk5eGRKHKEygkf3oRIVpGvT1Mey22VYWWl55DZAq96Q8r8UuDZQJe6da%2Bdln7Iv%2FG8sMZqXsdfXCfntAEVOZTGZwDM7kWaEsD4mK8GyI99g0MvSPoxaY63u5%2FoSQ4hh%2BH%2F6z4HGWU1YES4r9lva9hZOOKn8fGsfAa3hfum2czTW%2BbAZMCXUjuwE7deU3LferPpBjXE%2BQflAQR5MsYm2TwtZichP9JG5gYbizabmJWzJzOFwrHltatS7xys58RUhWQKARAybJhxOMkRWDQgVfGtQfH2CYf7dUsXzRUrMk67esA9ZQReKvoSARAhkPv9Dik3L%2F7%2B9L9j9Bj%2FEhOLtZAh4Ss6MZsWCYMDKapxENsWpGDrezfcIV2d8n3oBK7InaFSKuE%2B62EjecE8ROm5GLbb%2BMwmd%2FT1AY6pgEe%2Bc1EHOy9MJUikrvxK2k8JjKHVhfnhbxMtLsaql%2FMUpebdjW4d9l3Y4PRK0YPEOABUMmuUgMdp60Ew4bfwCakeu0QIaZxwU2%2B2Yj%2BkU5FrQOSezGuElVPDAZC6kGoh5eILzYIGpSGBZvml3U3IcPB9qebbbj3oBKOz%2FwqTmDwsLRH7685iFePKHhlSIeiske1YYw1t%2BYn2pIYjvPpm7YdnH2Frxlh&X-Amz-Signature=4133b51b34f5e2df8d42b18dac220319c93b269bf60d3777e85db5f626a1ed1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


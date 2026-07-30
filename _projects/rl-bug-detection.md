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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEFUEEK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUdjdChk1MYvqIFUeXw1AJIq%2B31GNa45ggOBY7A%2FwGHwIgY7YBS0cmoYtXXsezWqxzy4V9iEVeuWoq5M92m%2FY65ZIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK5eybeYcc%2BenFvXyrcAy3lbSpAyNmAWSAh4zQqx%2FCByXs3kWYNO3OOwx%2BYZ2%2BYrQxSNjgCKVv8s4JM6H%2BBsRSWt%2FkaT300DEBTqSwZ0IubmGPGT4rl7gJfVUno8ZdFajMH5M2Pv6%2FqHuju5%2FBXh3sGNH8%2FPHUSU0z7RPBXmE8aDU04K7A1K96%2BvLOzI2oFnUdSVsDsFfKHdg15h%2FVJEMHbkYgWBlVnPivXT5VkZN%2FlXV1%2FphM1X3BwoLffEcdBx8wayTbgbe%2B8chkdwL%2BN6%2Bjdf1JJQhhLTCavIniiginsk9KXjMWj3md%2BX9vlysMfNFqpvMkNL76%2BRLSS5%2FzRD7Q6DStOqSesvQXCja0apbT4iLXQpsFmWvJwK6DkAt3jtsX7KhfUy36eDb2hsgcTb%2BFeT74PWnPY3PW54blZxfwo7AwrG2p90gmVmEkv6AlTCJPVPmbLzjKMfo%2B8cV7w5mX5nZ2wksiS1xoPdEQwxMuSBvXE5TgJeM4e6ikQ1itva2CUOP46FiptupwiDdy2nKLdyL6ZKIumQnW3YWwc%2BOt2nayGcnW4YhVjuprocaVr6ZdhkExbLUjrIIStfX%2FzujbO0iezEZJhz01kaAw%2BQ3CjLeg%2FMQMiR725%2FjvN%2FWtL64H7GJafJz7jdlQgMM6qrNMGOqUBUNC2WNloM%2BLAnAk%2FY3184Jt3E54NEAWIcJRX6Icxj1pMponOxLjPsUjP9c7otAQ18tORSGlUtoF9PHBgjLUTfbXmveYvT%2B8KZCVlB64cIfNp54OPtdso7Wg0wxgNhaoUD85pseS2ehQYrqQKayK54vSw%2FffyLURXCKo37b%2BTjBWTTS2G4ugKRy9Iyf2J2f4PLiHtH0kzH2aKyQihq170X4m%2BHrn3&X-Amz-Signature=b268c32b2c580bca04c52281c0b102087504dc3ec0cd67b4eea2d6d8a632b246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


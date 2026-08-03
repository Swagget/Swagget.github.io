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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNL7CCNI%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T215530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEiHdGvgrdNMFWlSGVrYM6cSSFUgqRZjTYUONToQ1ZGDAiEAmP7Q5oqQ9A20OMflqJL7GW0tekoW%2BZpMwgdLuLc44WUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAo4UdVINetQjb1aZyrcA5c6w5%2B1W6zlhrJed3nrUQTuLKlcBJTZTv6rycO7pb4GCIjBzgDS%2F9v9qse5%2B7Xakwe9bt%2FlGAzqKsEPaDLTkRcCiCyJHC%2FGz1F2PdR6zG7J5fVZeiv1Kawc6P1s1vPTNpAfQCExYCUtIhIoCwhZRigQ0ftbiAR9Cp7HsPQ34vUNTpG%2BP%2FCODFGXrpcZETs%2BlcYYW8je7bBzPijdUSqID7mR93xWpaGVwk%2BQ%2BQbzwe26HW7slYe99hBg8JEuvw6yAC4LHpy7QBo1MXiYrGfxcdsS3DUV7w%2FxGxKANAvArio37HLYqcG%2B9HbOMtPN%2BMtBiu23mo%2BpirSJaKCpltgDEl0iSr%2F599rpueJHpodyOEhq3WKRzwOATGE%2FHfvtTGasDBkHK3qkStSX5Xhsv3NQfFOO%2FLWAzPtFiU9m6vOfPNLIZjeEeLI0IccgYp%2FnPSSepFLuO4AhD8NyKiIqRAj60SFIeomcPKRemx%2FS9jeO7wGscpJkz2uDaepvCY6%2FF%2B7StS4dumJzca2IsPM89yb%2FBtSc2ldk%2B6GEk4UNZITFLx55lFoemt4QMU6b8%2BULC7EnHdSF%2FDCgzGQe4vlu%2FGHUm%2FVHQA3OVQxq7cs9oGB9iOHhGHqdm%2B4jfnfO%2Fft2MJiMxNMGOqUB%2FOXM5gw%2BttyslVfHJDIqjSNqc%2BDXpNJQNTqnQcY8CcutCaIHztYqDiZ%2FBRAjWPYqgfjjM4enD%2F5P2TvysW5J175OvkUFlK0aUVkYsNWenoDt5MbwPgV2Vd6Rorfsi10PnkadqhXXHUMwDnbZdY8W%2BS7Ji5zX%2BB1yl7blmT5A0SFzJA3EtN2OtlCx3hGdT%2BDppQSwSM8CjPcxiztamy8HMRdIFxoQ&X-Amz-Signature=70bb271e74007a0bce32313fd81fcc8e5114923291e93df0efec5b5d13c9970b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


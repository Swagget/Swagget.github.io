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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH422GGL%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T105550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIB0bjCpqhS0iiADXqFZPdYVFlb4DdBu5HIlAdeLVdNcaAiEApOPwhn6fPKVfPb48NLw4GrhEmDsmLRakm89wyspRURsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu5KftWAF7JyrYiQSrcAyTUIIhwRd%2FjYoOVw9K5MbiGqFtdUAAcLBaPl1AnvzAyQq2lHoLbgtFVfxlKlJ45BJrqxd%2BHagkcH6uWqprzr9%2BdbUUeBdvSahb2w7pQGEnqOzMeaOTpxwzuGVgIR8dpwCcKv8krlPzENTT8zqf33fpmAb09U2pUnm10QaUcKwR27Zq%2FbpS2VoSTg3bPcEQsquothAD93cc%2FxT4CKZgKfuPoFOB8NMrRyGhMljFAIFQOUCkJ83u%2BZhmPq3keNQQ7piXLw7TOhbLsAdy6wQgXdPLRnONcyhpUQXHK25i93w9vu3xIdoJ8LrrqTjnFvlxdIgNCorjWAcD4ogf6zdS93CJz6W90PwQRta5LE9bsieuv3U6%2BjEu1vutzqHcnp%2FwOHDbLXzvz%2BKJ50sjurXLW9w3cKNA1ovrti71ZE5eU%2BpKbjEPl6VRzgmFbAsuG%2BYUfn3UIrR39Zfp0iKZMnu2GgQepRv3ZyfhZ8G1tNo7ujLyydQdu2876yfvJke6q8NWbrCRls8UqCqQT55SF6pbkNWw%2BmhBScqvT2rSQNvUrmOLTCmWLHK9tKE1%2FPfakaTWbzvDheF46HGhKWub57dsmG1Zuyw8DImKuCNImCZDaz9bhXErR6Om%2BJTr2SiywMPvFh9MGOqUBRMiyWiF43PFzqcYW3HViD9yzn09InVMBjF6XFxnP46kepbB0LO46w3IoA0QXzsYu%2F7uXd9IHH595rVBfHFuaPdIRVMutnEYOZ81oeQFle2B1817kM%2F5g6PDO7rXjciercbEzTJR0S7cPoVU6m3zqWA14x33Lre4J34JqM0Xzp4kz5kKSL1SkyOvUf8A1NApIXE5oznMpUpdteWamN1c3wCXKJkqG&X-Amz-Signature=65832fb1fa86a0bad8fa81a2e4812f935df1ee6ce9eff49684fa67443cfa7ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


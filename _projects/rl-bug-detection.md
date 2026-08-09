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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XDOM35%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T192241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXiO7pz0nJ9vf%2BMRAM8MQDNcmtUp%2BNPwtM4ij5JX16VAiEAgbrTwPJh3fm9REyuU8WjXkN5wdrGOlLsttSjklnS7d0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUH4sQE5u%2FGIXlVYircA4B114Z2tdBVd71WRSOFyUnCDYrUNuVB4BK7xyZvtRIyFRhbHB57XKirlco%2FhUpPQ8o60Y%2B4YP69rixPOHDpk2vFn3DFmgs7DwuFnjv9SubiSbRt9Be4DENKu68uYpmdL4AhOVRrprGlQLLlRWPB93yheuvHAfRvY6lrhe5HHmE39PhW7vTm7UUG%2BuGqwtV3prMpmaAa33uFGuR5ixOTef8GG8bokBOu%2FDSMsSlFdRe91IkBnSZdzNoFPvF2pPvxg%2Bf5hoMsH4I3cRA1QLclSX6CressZCcMdQYQuV7WhHMZrxdwxGDv3WDVWtem8QK9ewjXg6BPdv1vYlQfBJc0Lm90OMNO5CdNMsOsWhfxe7azylr3Ix9WarfY0KYrqxuEmClDo588XyxmvPSpON8WnS1Bbnitn5fyURybqB1k17jU%2BGJzfoyVibWAs12futi0fT1jzvbLA49MFWR45DS51pQRyG1Q1qIEHKMHSrcSp%2FQSTe7OGhaO2AQG0bskxsY2OqTKD%2Bi1cDxqNexB00xrfF%2F9%2FgIUJM%2F%2Bkm521pbduXJbIc71DdwYix4YO6yXAl3IK0GXf%2FyaYrMWwNInLC%2B96XOvNGqZCV4JYL34ermXCuPZZh6SIOF%2Bpz%2FDz9YoMKaY49MGOqUBteU%2FxaY%2BlmkqhnKPGATVqwji8aZ76k3XGT4FSoyMcWbrUsy6NI7zZ6uYV8piima5PI1SsvqllJuJZgbwu56AEuet6XYvwqaWpTjanWDecWlbPYEnEij%2BfTWiwFeGjr7fSs6LW6yuV7J%2FttZ7yku8%2FFzgSEtj6KwlqreC0C5n%2BtZki81lIfC1NlGyD4It5fyb33uCG7Vq2f6TxdCyyAIchutdtmar&X-Amz-Signature=6ab0ce708c2b34f24b969d53681816a730ff16e3c02c405ce19d80c8cb4aafac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


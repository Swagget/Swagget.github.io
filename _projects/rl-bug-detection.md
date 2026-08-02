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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6X4KJH%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T200324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDgQDxNt4QJL78%2B%2Bu8J4xD72XI1JSmVwpPqAGTgYDzO5QIhAN%2F3mkAJ8i8NTd3XffPGaGjQTK8XeZCEPs6t15Pc6ZSsKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYphELvNNucgHeBtgq3AOtnjMU7qZ4HEGD0ckuSN2UtQL6wRZAzH2q7k6DF0bjkFH5%2BsB5ixE40jPFyAczzCcG1lk4e9syFLG45QWmzqF8uNIOQpzhWLLD%2Bo9NihJet%2BBCXBSAR42uZp9y%2FlQziFeMOTUAZx48PRnJ%2BHUhH3f%2BSYR%2BtpykXc4RZA98pO4cgXV08N1cMwWaG5dsrRGShz7ImEUSAMlyK3d9t%2F2q2QdTawkKrnnWHRtbQyQ9bwZDMOoaEoNhSbVDIWcWimhFSrObrldlVK3d3r8N4CrL%2Bm1sSWmbqWNt%2F7nRYuHjZbva1jWVeuFH%2BxXnIm3rHBJmY%2FxfTf2aSrnAhictiZ%2BT77Co%2FbnpBvCOS%2F4lx%2FqwkTyHyxOEjovkviT4z59q45JV2cLBJGmZ20Z%2B%2FTpExBiNw4nTsAVepIlMZZsQo873yTm9LNoA3Lzn5YZe5OOEdVQJpVS%2F%2FgDwlGO3c9jpr3ETVO3LjBLweWcFQXxASVV7CUdqC3Q1X7wzRF%2BUivskt%2BrkjNsgykhRZPP%2F4fOTUg%2BP4ewlKZEikTyVQ65mjRXMYZDvR%2Bwpe6BGSKtOZIN0tYU5M5fdUso5Ml6O8vlXfnks9nd%2BFStPuUIVy%2BbKV2SzsB1y8FoBBLYABHA056Aa%2BTDJsL7TBjqkAWp%2FgNQavYI6XhSkU7L8KKOlTkhQGxteT5yaoQoQTOg6lpqcWMEA1K%2FawdzjgwRhxBhJpu2N8Sc74eUlbI918HEmUwsl2wJqi2j%2Fb4m%2FjDdYUK%2FCe1b6c%2FEyXTIDKXEJrL4zANtBRvFKOJ4vmY5xm8iGPnfyjx8X4qiloIB3DDjRVYJWehm4JLGuuCdg2jeWbS3NaMBeHfvOrzX49pJTWXl%2FzCcg&X-Amz-Signature=b4399e7f5006ce982d1d94b716d8addfbf47b053d231215d577ad550530a330d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


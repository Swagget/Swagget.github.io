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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZEOCOXI%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T065256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6HKFDk%2FYrdq0ew8uDnHXuM1KYaMl5ARRSJwku5EtXsAiEA%2Bo3jYe8pdSMdJEsRzfgvcf7YFgBCQAauvy4%2FrbJ9QkIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXflqnh%2BC7%2BbJ0K6yrcA4woM2uEqoI03qUfRBK99lSoPMqsGd8%2BZyyUiBdSVe%2BHSurY04ubAZ6yxYjDWuurfq5cRPQHI2fnsrvVfzdBc%2FblMkagQrg6domzdMDegMP3A7Y9eCx0a4%2FtwYpusZrVZvKMAo%2BuPQHKOrQXqrLavRpix2i9mlXgl5I6YRRLy9TUIY3%2BKAfAuTN9F9eK5vABJTV%2B6hnsOJYNW%2FQlVeP8rz3a3LtUJIdDJuxvd0rRSfr8sYyWGFJeOSEc6Z4hTAYGaM1h71f4jKpuBm7JGK4cvPpJ7mV14XZ5ywI5%2BuVY6nzP%2Ff5%2FEEd5eC4TglIiY8tI370DKc8VkkJ0cgxXWeP1phvfGvFmSEh1WQOVhnBa1Oe31CJzDkIlCFjA0sTtFOtW5DL37wmgaB6AW2VTtq%2B8V6MALMPKFgg93KzPa9jTqZHxq92YW%2BaHeSf3edH4il5GNh7NO5Do4ogfEaqko%2FxuWXsyPHCz8yX07YtHMzW5D0xQNUdqmd5gJuT5Pvsag36VOZ2%2B4FXpWe7dgf8P3ox8Rg%2BoRc7a8FWRa3fzstygrvP5ePHEDKSIHAFjdUG8JwFzMeTJXFjVKL1GNzDJtH9djwH%2FwqLVK9D6p8WmPBzgIOjnE8prVpCyt4IZQav0MM6r2dQGOqUBPyTXr4qC%2B7V%2FXqJ9eWl4AOMR03Q1LsjgIzjzB8%2FZBaJkQWTN%2FoRWFk3uxhREiqt7rYs%2FPq2CN9B%2Fm0pD5d4B2LYwSeGnp7zUh38iYVYu3IrjE9XEjfZFatLs%2BWHZrv58uCNOm20BozKjfBiGk8lpqkNOCakYg2kiAX4uUCLpE%2F1CHOM1RxSmogXLZ8yguudwU%2FcRutrh7%2B44gG0%2F0zrWySveSjUv&X-Amz-Signature=3f03098f390f72c4673633c385741ede25ee1d477086028b7755fb1b47f90b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


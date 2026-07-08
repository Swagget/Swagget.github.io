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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6BYXEL%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T215558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBO7pg8vp3%2BwWrELTz6ZJ6Hg%2BPAXhQ8d3cYSun4SIo%2FBAiBafblAvliKaqHCBEWndKSjb4PrhRpw5y7%2FElBm89Y0eiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRvxPs%2BVRuZ12IanSKtwDg1oE1kgWWlDYbWu40QuHq1LodU%2FGZqmF6gZWlHEqLCqx7edQOUqetjVQlTHlN%2B%2B%2FMM6KC5DIn%2BdcVcvwvHxGQ30%2F6ngJTF3CY%2FO1oUEgkAneSwsNB9bPl%2FT2AbLhMrXT5AnPcvnYn3aJIzwkd1U63G83DTWW0PU4v%2Fe2BYlq2n2UmvW46eGEC%2FSEQVvkzElvAOFeKn%2BKXdyu2ANCpIcAVUByGDn%2B3wEI%2FYgcadnCkQD3erEd4FIQDlQ1aI1rVgumJ9A6cbleJOng8%2BKa7gKjsUlK7qr4ZlusDCwOMIXx1VTTurMm%2FwKNPT8q1frp39EF3DBjbXAIpnH4e3mYJm1DDu2Ir3gB73DMOJrEogqBUPqhUVG4bmcyeZNFP0Ot46ptuhVsrOOwoEh1FO3LCTud46Xf2t3W5ewkqtuQq9D1m0M24yZV7s93ixN8YOlWv34CbDkPFsN7bad2qUE3VPEkvJCAzQwr%2Fj2RNDBgpxjQJwc%2ByNUfZcJTU9zKDJjOu%2FE6g9JRC6sJp5nWOXS8yPrZbVka6bCXCCEZtvsoduCpeTwIemFAhMOwo1Nqx%2BCkmN2rYL2Pg3Zq%2FvCDhjL70ABYSEegctNd4owRfsEhw%2Fr1valQG9c5G%2BVqHxpZvNwwqou70gY6pgHCJTuXqYuOA8a%2FaiVl%2FFZFQhnwMTrKE%2BBW1snRM%2FFWdNiWibopLpZrwTwDiUWErlpxn%2FHTK0R%2BHttIT9LfuHUG8hQ52WD8US05X%2F0CnycNL1Y82HZF0dp1Mx45Jo1AmPlfcvW0KLBsg4Xdrshf202xJaAXAiV6BvWSkU4M4zo3qzeyUbCDBL0N7UVOB%2FxA8iHmI1i6ER3j3Y9WOID4C1DqQ7k%2BwZsK&X-Amz-Signature=9bab18b1f42bc892b10ddc66ee723f5c9b91e779e513294784fa1222ae57e90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


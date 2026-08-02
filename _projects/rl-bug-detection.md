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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHFU25Y%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T110959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFpQMWjKYpdhTIhk3lhnLQwpPZYXaHmGDejWHgchvLw1AiAfnJb%2FOS5p2fJhvRgStynZlhqJFqADiliYeGeKtsJ5vCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEzChuBazBaa%2BfOBLKtwDlACTV4SST7nDWP2CBwKDc3ELimFca3TYqSie8UFT7r4BYm%2FzuSNVMjJmr%2BXwcet9zQQE8bVRVO%2FdXxmbuTYRImnlRtmgMtzk2oZyddNNY7igYBPbQN6nsb9kXwQSzBGwugLO2wdB0yzCK%2BBvL0yB8hfQjJuIrz5oi01taUxlFSPHCAuil4O8mr7QSrRfG6duRLPkkHqaa%2FO0sRqPXPLVrlFFEcIda9AEJlh7M5qW3Dksl4hk%2B08%2FOeu69JB25A3x0bakbXsJvNX7P03EM257fIv9BAy%2F8NJvgxiqunDCzILVBvHD%2Fq3H1aoYN0L4we4WdvDwn5%2B%2BuLTQwOeTh%2B7cSDq4Ga2Bu%2F1iTsoKjOyxzUoFNPjJW3iLRnZ4H6wDOpMLwkOb0ncekxj91WdFsc2QK587rVTGH6rt3z8qGOM%2FI0C0WjTakNzOWzsg6T7qcfDMXwUjnO3EAYb827MVIiHoC7TEesPHWFGtRKjb5HoULbNPqQp68Agxal0vK3PVHmZTYN1H3pZzQUSraVP8N8KYfv9M2rAdXf7u4rK3I%2Fp%2Fqm7oS38DTpFcnaPF8sxKi9M%2FKGrh8ND5F3H6umzLN3CC54L4DPieAab0%2BV4fE3JDJW1nG7vT7eJvK1CRLbkw%2FPK70wY6pgG0aIJJAvI5ShlgKI6HZr%2FNb%2F4eTnzpJpKphGwRqM1MuQxQKaztZbZA4la6N50f5AzdoHgzmFQ55WHGUBY2uuGc9bAr3KvZyMPUzxMOCxkd3SWfb0LwFhxBG8Zivtp5Xa%2FoB8obt7TtylMAOu7mJ%2FQPuOk1t1g7YYaXbGVzBe7%2FqdgXxFoYj4NsSaMU2z4Hvg4O1kfOC0j84K%2B97ofRQRbq8ybGhTcu&X-Amz-Signature=7e4c07ede7aadd477d0f847d515661aad16822e8535991e2463c0ef8c11b848b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


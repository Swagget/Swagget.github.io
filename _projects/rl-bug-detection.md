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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZEUI4B2%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T012010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTgn46fwqlR4vRMAd1qTnXeXeh23%2BjZDJkSglgmvo5mAiBxGJwZXZmS36sxFvr7merrnSxewURKvC3vctGXOeiW1iqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7dcvO%2BXQeU23jPoZKtwDNVtKO3LOHCA7y6iIYMC1CBzgPtkm%2BJrzZegftdZx9C2fntkCI%2BJieh%2Fvq6bO8Eqvv54KUwkEtRWs4l4TQPb8%2BS3i%2FoH1n%2B9zhoF9KLIYzcbREtdXdV681BwkcFg6gTEfhWzd7EakVpmBFrixr%2FVb5M7xk6GQ4iifUtb8bErMHKf9ILIzkzPAtVSyQ0z5ti%2Fb%2Bnc6gChY1jk945OV7cuYv5ohJvdIbYzoftbtVR5RSFjR1aZvy5ycIIunCcYpZh5KzhGTYFvv5KQ7kamGaETcb%2BJvQYtN%2BXRB26FE5n6CGnotrDJ6vQIB5VArxn%2F8Tg0sZRvgMIi9wu8cbneNvg6WHy78WWsggU6fN5XDEFxOvihhkfZVW0svGCX%2Bjg8GKSE6LQsJgx7pVzA2xK0kg8EyUtyDrw6D6S7f0ne%2FIsTMhi4FH0DNjorHqeHitPCJ3f7YuZcLB5Pr6ljrWQRqsK%2BMalgJYez0Md7%2BRiZyQLDwie0fb05JbW9hD8hOn07GEzdN%2FHR%2B4NB7TtmJPJXaI%2B1TmuQO0nQgulVfGKrHuS%2Bc%2BuZgoXaYv%2FfmIO99Tiiejf2RHfpG9xzTB3aYvD0AhWZ02pbEFL7%2FtlTzbK%2BNT8H1AZlcsH7MLVmHJWT%2FRUAwsM%2FF0gY6pgFsk8j7ov3R70SEAOtXYxBpbHilkJ7WnLRnshoaWWMYNYs%2FOA6kc5dE9yy0xD7hKdYeO3JFJpCtpTPkkSpPEJewI1gHq4pcfH%2B65M2od0Q4fmXIQziKmccFM6PWnZ%2FHPLPNJ17BTTdEcwSX%2BVTeRhRc9H5%2FkslvlADEKF62RMwVM0YChPXFA2NyIN0Yklpn4DorMJUp4Qfh8bqY4U%2Fnkj6ZiTKfBX4S&X-Amz-Signature=b1d854df4137ec7392705ac49b7cb4f1eee0829f649b11eccfcd80df28da458d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGECHIE%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B4VaBc%2FXWwusYNw5sBl%2B%2BZeZWkWVXuR4aQXpAuRWOUAIga6p7lWwOk0ColpaySJuxwgTelSTOie1juPmfyMTiVfkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2F3cQsNJ%2Fa2GUeiaCrcA%2BGOz%2Fzexj%2F6m%2FFwAUlHKOyyFlw1P721E%2BszZtsfyPcbbSOB07yCtE%2FuzKEQuNqLOfyh7twDB6%2BHqqxylIDaM0izsYhmss4FVYcmZdsi5tuE9m%2FR1LhAFKwY%2FX63FazT8%2F74c9Bof0L%2B3MRubEgoZzzM%2BisEJwQG9ETkaWyREqUY9zxlZHC%2FP8F1W4iD0EHaZ8MMEt2e5t%2BHmBI8mNnhvzEKTO%2FSETLs5DELxB0hvTspBrEvX%2FpoWJ52S009vL%2B102HecckSdWu4GKUPjxr61QSUS0mavzqh5TyMW87PzLdARfpJiWenEj64HMUo1i%2FjLknwJuhO2PUyhiZCCZy3%2Fmz9e8kRdwwQbC%2BpYjxpjoMtt3rL%2BwZRkG1Jfel%2BowYkn4bMR2OXsxVnfY3P4kSPYXgph1JkOL6C7gi87lbAOgqNhmjpBmmmabCPdKjdwFi9LL29fn%2BGfevZqVSwncX6JAtxuB70VlshbjqB%2FVcYMLSaCy93s7By6U0hdB3sMBxp0tI3GgUdkz6Ird1ftGbkyfMELgJkVQTgY0T8QHCD8hGofFD6HDISqAAl7cgA8LUn5AwTP89NZoa%2B1YNSFqiNlZuAedhUz0JiiDXr%2BYPe%2FE2WZGknm72XPz8hHTxxMNXtp9QGOqUBtb03dBCpuQu1OsgrnYQcYtvKJs3DihVKGND%2FlXsqvENjbHawt7TI%2FPiUAQWKpzmuVsNj%2BtvB8jFTfZi3QCeOZ%2BJrCQeRXdZ4fU1rv%2F7xgxKA3PUX2BGCqAEiRf%2FAejjYKauFVRgZyCN1qX7utD%2FmDbTPvt6n3P1OFSIz7WAlTdsfhwyj95EHgBYkx2szOK7z2aR6ierwaZKLGsnlE0c%2FJQcq0%2FPy&X-Amz-Signature=a297ce10b6613e031965b3662a907190a3a8e7c97703c8e3a80d1b52939d3904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXXHWDK%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T204558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZKLrKfRbFphq4Q018OwzFJDs%2FtJ4LUFmKDM9EV2t2qQIgZqrHC4J0VGFgWGvaroDsJw5dblRtfC39JpqHjp7UMakqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2F%2F7obiw6qQgfpZvircA83SHdCEHIth3yR3W%2Fq5il01pyvEiJrn%2FvYcvxtO5K4wvDfipU2VW27JBE5OHkMt%2B3HDAhjnqlf7%2BNwLAwTQxeGNEPH0c3KhwaZX4qOgYCnlNUuSw4dAKntrWGCzy%2FMct1F6fEOY%2BDqzr2u8iX9b35ALm9l5KbYGZ%2BkAh1KaTKnL%2BeTVeUXkkN27keWQxNr8IYVPr98RcstKnDHPN6O0cSsmQBFfw4hOP5REB9A8wIKSA8%2FIf2GFtC6OcLBj2IPERX2P3TC5ZCuYuMDBdHL2LRHmcLKNarBzOenIqAcCuta97jwiIrejU7%2BEoFFZZN09I3wIqzKgotmmL7RAFzI%2BBJPF2xTNKTz2aYTswtWHYKDIckthGEK8xW97O3QgoDUujxbs7IWrAsFpNeLQssssvnDnSQ1GnLH%2FBEDnXVqSmK0s5rul0OxZ26WQUEOKNREks3RQcE00lUoyH1UWplZqk7uX6E4GSk8mlVCR61DFYC7c%2F%2FWTrg8UoM9MLHLff3lYvJJLAWgB8goVW%2BPwpdUQ27TGLhBAqNkolhWMoRiH4H3robgPtbacpZn0T3Jd9hHeH%2BLqLIeKDM1qL0XAolFbABLZcE7J%2B0NspDO5O7KV4CCJCb5%2Fi9BxQSJpk4SEMNaSi9IGOqUBJG%2FINN0NcxsoO0FIQotoLrMxpY3%2Fgrcutz7TXNcahBnjSatnJ%2BKHK21rQg7LSwVKQkhY8%2FhwH5u8bZwabf3IaOiN7bHJ%2B1oQJhQEr0nVOFtJa6RJ2j5Cbm84KXpNcIfSO%2BnV3D44gL818zwJFquM%2FFjPiBN5gkEGtfoNJKlwqhF0PS0uX2erzYb2o2v3GyJ3U0PJInsupuL9OQLeHMTnYsrsPw2W&X-Amz-Signature=195765ab6b30440d1aa244094544e74230bbb25001b55493e01c2c59b354ff8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


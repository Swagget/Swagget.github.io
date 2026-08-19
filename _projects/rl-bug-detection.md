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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZRZ6EUJ%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T092010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwRYsJz0wOmMoGCZqEL63O4x7xA%2FRlE6qd3MLHRxILTQIgde3tAYCJaDJY%2FlZct%2Bf%2F1vpZgm0AeY%2FgZoAtDbWhP%2BAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDP0dpjd2ghtw2EJLXCrcAytSl0DN51DvpIhXyllyYNkSrWmAun%2Ba4uSA0nS2ezJeEYeNC%2BKiySJTHPSBDsd2H5Bm%2BOmVP3KCGEhxGXb58v2ySEKwxfLKrbbYR1bTKft1mW8fmBe%2BWsIiXvRU3t%2FRbDyW3HNwZkcIafSMy8RIYHdmuPlqUyaBLhsRBMTm7zaX%2Bn8hniB3mqKVxYUXEKbZUI0sVy4dZw4sTdvLIbJNfLE40V%2B%2FBhgLyF6TptzIvlnIZKbr1JLo%2B7nIpWSBy1ocDecN%2BsK7sGMXX9tlwZo5KwdUZDJyAxaZ3KSAKUZdSvvNFq7zc%2B1jlkgfgcGSLY34dZ0yNZUC0NM1pZW3bJEYI2qQjhVX1H%2FRMf%2F1%2BHTZsExDnak%2Ff75EtbX6EF6KKF%2FsiwE%2FOZUxwis4Otl764jlHqawCZ589q4addasrUS%2BYG1AWdmOJAtIGymLxwZlNQJ1yhELm1W4Pb8sM%2FMiAC1wBz%2BZ6R%2BLvq8uP2LtHB%2B7p5XauZKVMVNmQthFYsW9tx94njD5PdWwTu3%2FgqDHXbovY0izHUoftKYFQJlLi7a3IrC3Fp%2B2UaGFAbPNLmELCfJBiC8JLBES0KFdkBGa9qDwcdvW00MY5mww8RkCvMJy2gVfNZnKH6FerWXWyTL3MOnfldQGOqUB%2FqGdqHDg7ztC%2BjXe3ytewzc5Oc6ZqI4RdawwHpOprq%2FiSmuo%2Bd%2FcOaDxz8v6x7fDopSX9MFNumAWDOAU4cOupGO3nYI7b49Jx0km0at94HPGb%2FkiQoPyAwQc3qJncMoW%2BCBANrPmwjs3KEZtl51qJOiMZJ2iETIVE9%2B2sFIqQYZrTIna97Y6F2Z4ebvCLxP9Bm3HU9ce%2BfbOXj%2FspW30a6xAdtJ5&X-Amz-Signature=3082667b5ae9b0240b56824b7c046d958f7fe2f59b35d51c50b93267d586313a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


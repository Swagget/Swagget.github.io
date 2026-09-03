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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFWYJTA%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T114738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCSlVFgVCWtdxdLyfBCkp2PT7jY%2FpNoNxHDElQiAT4%2B8gIhAPITRH%2FLDBEPwRP%2B8qfGL5QLOoBEPe7xiMftRCv3h%2Bq%2FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG0us0BTC%2F4kiDcbcq3APnZXmqFcCy7XlT6wwvRp%2BGE2kN6k4wADwWi5jjDTUnsc41GMI0HpmIXQ6WOKsA27mJZuFx63e%2FedA0l%2Fw24CkQryhnT74Dv7ks1xMrCFraEU2JEIEmQssGwjO5YfBeZ7y6Hs3kaXLcVTKxvb0p5I9mBHbRKxT2ezdDvjyPr5HWSWU2wDFB5H4E7pisV5xpU6yRa%2FYDZZsG3lfwSvZjJ3WuCehJuCOY%2F08esrfiHzwe8bXHsrGUvjvMl%2BjqC9NkC0GxXTxXYH0ETN7Ir%2BScze%2BFbqBb93SXvXmXz9AVs5IA9IhTV%2BJXZPsLpEZN2sXeukIapcs%2F1%2BjFESQLVb7SMRmHSnhTY8X%2FBMQMTqOf7LQ4Ceghz9oqcfo%2Fu9bylTSw1sMClsYyLheWhLIavVPeShN%2Fx2wiG4ADCZYmxJ7FT8b1saeZMzCChfKNcTcfirGVCF1vSqFKvbbf5ugWGxE5TKlQcDqt61%2FFeEMUP4Dc76rerBMg%2BNahpRStggw0yU8vAX%2F1mWERLA%2FksJeJjryrLH7kQJuCnq8c%2FAv6vtKJlJCSnwVtnMHsJU0o5qhe6maENIZ4gABYEhSep789evi5GsoFZFr8qVP8uqNw90W0hmPrmwrEE0zuo%2FqVLgbUXzCiq%2BXUBjqkATZytziKfrr4q%2FStsLT%2FOHQwBdPN02tTmWazTRN0osVLgFMdmIf1QNPphhjpQCZ%2BdgElt9d51sZxiodHPr86%2B27imVE2pTXYLERfUE3hysWsZKK2cE5XFttECeOYfpnK21uL4Kk5F85OsTd9TrsaVav1H4X3meYcoYg8E9PWyvEJ%2BdbvGsHmbm39hpIamzpIuJ2XvMy%2FGsqEsGxnYvsXtF3Ig9Kx&X-Amz-Signature=3f6e1dbbe9bffad51d46b5a1a65c7e44d20a3b095c8a0daa74d4dabdb88991fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


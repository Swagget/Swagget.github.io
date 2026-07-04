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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB6VGRJ%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T224413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC%2BJ530WXO1kdekFP3FVryY3aFRtCUnbjhlQjBlN035OAIhAK2se6k4QgcAy5lZw38F3h8iLjECgTh6g51iy15jwzfoKv8DCC8QABoMNjM3NDIzMTgzODA1Igzr4301Ty4MeuGgSzMq3AMi5OZKpIhu3V0ShrVfW7PU5bshMy8zb%2BLItVuxjLrDnMzDmoLd16CZdrYQVYXFW3wN5L0uEHS%2BLJLvrLgsC%2BNQrhwTwFt4vOAi0wWurTnz%2FQpxcwjBO1dlhd01ru3uL0igY0HjuoK6xQyO0zaI93m7punMi47%2BTAJLR2yOmhd5ROnmChl4gKTBoLlQRCLLC1qn2dNUeObZEx1hAylVxQOmG1b9R0mirb64nzS0I72ApbrYxrwLdmUAyLcGl%2BUUYOTzWGrsnUquXbJ3eotXSSsy9OU2YFKBfc556hoZyiBUpN319XFkS2TUbj%2BGguw%2F1WPtHg6pSeQYfcJM11bweZe2r3C0BILrnyLg%2B4M0gyV%2BPD6nN6HstsRz4Ju4e0lKj%2B81MLSMwGcjkCk5xVN02cJb1HLOmP%2FxtpnY3vkVjtecgIw2zVVcYRuc3BNaeF8SoeJK1qCZRg5kKfXaEl%2FQ%2B4UB4yZCYKf3JPix8VfU7q6tEdNe1%2Ff4stGSxdERxp6CYrgKRDoKE3HRJ8OCwxyedlf%2BM48%2FdzIqrYfLdx609pKTfwyguj1mxoavPCscIllEKn3fsZRcMvKosPXWYXRKOV38cvdZ4X8j98e3pjN4AqkYascmxUF%2FFk23Uz0fOzCE9qXSBjqkARkwbpjjb0aWBqJhFQVlHFKiBAiyrnLyXCCnWM1qPFyVSwdZn8gdKwEfkgLrJu788bulFjjEJxxDprVmwVmMmC5te1tnBzSrD2pcOeByLU%2Fzkl%2FYz4Bvp1lTb5AjAJwS2W%2FkwAl%2FO%2BoipQn4lBMXhMPqxPwPMlq8eLEmlDPv0HpfgmU%2BD0xEqn2CjCZOTiN%2Fhti63WNL%2F8n6MBsskbJhvv9R8AtP&X-Amz-Signature=78203f1068cc6edf49d2e7d7278a0aa34e5451fe82a338e4a30fc2507189327c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


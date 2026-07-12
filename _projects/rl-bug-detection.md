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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SD5IYP7%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIH6nkyq5LhQ7NCH6u6BN0lCVgl1d1vGRB3TFwnTRXiOJAiB3ondkYgcPnvfezDcrebjMc9%2FgxL2ij8GnMNWF%2BN74qCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOPmpGKyHhJ%2BRuLEKtwDzm4azftNIMh4W7Nw2FUGCuiErQIY3X%2Fp0%2FRC19F6Tea5YDT10sm3Me5Y1aYtcNSD63AKTNyfHiOWzLEqJxlJHeGyGPro7dP5jOJxVXPoGlAClFh7s55YlKl6nYHxSC07dD8WS3cI4N%2FdpJDLu3p8TDzgW25yb0dELAbUy52a%2FvnVbHaMcgTW3anFtKDOyha7Y8fuSrIPHamgP%2ByawKmWuMz7CQGvkN6AS0wfuJS18L63Uo5fs4qAJm7pH3KsZGa3eICfNuG%2FuIIiR73a%2FnI8V7kKCP5NmkCAZFRp6ynFL9aEvS%2FXH4wxfHaVyIvYDsgs36NvLKurVIi9IAtl0ZswcF7XVb6WEXWUc6O0q9tlPjMservqB6liBVC9Ku4BTrU%2FBt2rIsXHx7rRqr%2FAuU0ttMoU85%2BtYV6nZqkSjRok7QKMPQ777Ysge%2BYx543gKlBR8LSxthFMtR5fKgIQTsHiBGmXYr0AXYH42oZ0MvFRyueFXctvHj2bttE8tejS7GdJGwQgVKoMVbEt9MT1FHPRI1dVqVKAFbyxsXIFdtTcQ8FZcR%2B%2F%2BkDxHlUYytTLRDPRGtEXJ5dnHRYBiDbxndJE0EQpJ0NLcEKCry9EHFi2ywedisJehTfSOABkSqIwzIjN0gY6pgFrolmQmONKs99WdqWomu4nATPbEbTAp6k8lcThoyUG%2FvzE%2B0wBXbjcjCMXZxavH7BUu6x3J9FfM44SWQglJbOWbPrrmYGrYnsn4sHSeaFynRz0WEOS%2B4ER3%2Bg7MuJjczjssrwcOkpJBFsvEj2xSnO37Li9C1HfSS83u%2FFp1E7PmA8oXtCW3EQNNC%2BbzCUnMQfWDsyAPKgULN9wnvKoNNW77JfQAYt%2B&X-Amz-Signature=a1817b984c3612b3a8e043adfae24c020de61320b8ac215d5a0ac148ad7defe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF3GQKYG%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTAygu364vROJzrp0LrDN6RO7nN%2B4c50vWWbSjNOukAAIgBqsI03OIJW39eTCm%2B8bIJW7RDjL5Vv%2BoiRP4qcWrC14q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNfVhiEnSeH3aRfUxircA6QI%2FyIW3MPfgilzAVza0IvID8YuwEXAczRRmh5WreCNY66kr0mEieeZlQNyY3XYd9YzzGm2%2BEmn2ZQd7NXRGh2t56Lr4frP3vAQNWI9PpdHlsAaHf43d0%2F9I6avCx7PBXlipHaSsjQLidNA3X%2B%2BuMbt6IC1yFlbf8mHb%2BdFGh4q2ibyeq8bzbrMdeXPh2pozOWpLh4oNG%2BS1xJ4yyPyebyPZBOmssUQB96oCj4qTS4yOpZYd2gX9PC%2BUG8hLiAod6aEpUr%2BmJWGyPfOTlmdXcsDiLrvxND4ykv7W2zFyAosEjn2M087i19Nj%2BYw8tzJUrraq5f5CDQQ7BGRqGx2ISKaomn7TDtCvgekG2RlniVOyDwfNrF%2FOhFkuf6GaF5gRa0wHue%2FkKFB0uSekm%2BCct5R7Cd6z5VMKTbnOnhAoH7ytbBIR9fstLN1Ai0LaLnL4BZ67gz3OE0uIub5lbSxm2r04ZSxfMb4sJ4MrMXzRBO4Dg4mVKnyJe44ekKmdlGAu9%2BMcm9p%2BHvF8%2F5E6p7WAh2uUJ3v%2BrHW5Sq1GIUQOKa1CFJEQN70rWIQHs46C1Us1HZDjr2CO8l5mMMd8%2BdlvGdqQrkH5EipGeXAZmpllEVLi5i5%2FgMK10ioeANTMLnQtdIGOqUB3jMMy28sOiN0lhTCYnTVuOpVNOld%2BdUzcOV7MdBl8HE9Rg73oWxN1kCYeHk0GVUWBu0dtlfP%2BEVOj32TNRlDrAuwFI5Xqal5wk2PEYYsOmcEXp6sCyj0B298zpMtIykrpSXhKEwWKzNnnXSwUBxCYu0VDyqsEqVsFMIz9NFeYivpIdaLzrJ2QN%2B6ZIE5txrSygK%2FzBh1MffyfcYS1tR%2FKuhXwv5P&X-Amz-Signature=89ea35fa36bd510f8c27b399967c51043015a2b624ff7de73717089e31527eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


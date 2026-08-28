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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BM7LCWT%2F20260828%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260828T194048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfNi7Phmzsn39S7v6hYP2Ba5m5C15Ht1bA%2Fw5EQqbrjAiBC7J7iujU0xdPZwwW9JuGFUpGnqc1oiuX5SQJOYgwyjCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMg%2FmvJ4lCBKpnBhxNKtwDK133qVsjwzUjoBktsqQ%2FcgDgN%2Bdho8rb8uRhonfDrrKhLA0h6saWzPWB%2BUD2%2FOtYMVoWagNwzXA9qErlaFIjUgwcjEkfSwZLY0poYcaRO2Teb%2BPlkWEID2zhV%2FI0XZfyXNX9jzAvo82L3L1IowLHPm6INvQ3At7gixtANdAJd8f4DXjhV3zHotREj3SsTX1g6wAiEtpNafFAlyPXixNZatObu0BDyLOj2zuWYeDzs19nOLMSaxj00tKCch%2FnvtwU7CfaYhyd6CrLXd6HKSiYOhgwUNQ1JbATdZNTuUS2obuHTj%2FZCNrQQAFVij7otULGn3IIJVoJ0hahqxJw0xM9C1XiJvHqDM53ERxIaQnMJ5NgevG3jshEDS8zeg6gDNtx5OgR14odGPk4Y8zvRsb3IBS95%2FevJBf4g0BJvILJ3cfoXLwuHkZCXXpAle%2FQpS4bum9iPUh20l3EzrApObElB4AH1zbtiXXDKuwandzBxEUyz81bX4DUIxLTdFe%2BdngudEjnI8GNVg6e3ywl4VWQpQvOzskXEAVFJPAZA5LLNFIsXTqKk9fMlQu%2FdOfLKehOVGLTmb1m2N0YWcwAJmp%2F73c01vTn2gFbF85rKITo5r%2FU2KCmE3XRDcRo31Iw5KTH1AY6pgFVwfGiDE403i2CU0NNiZPnwhGAKleBbf70%2BGNAM7WtmAGcnL8W9c5TZxRUEOjj3CwPfeVtQfQhnz2j0gWv4Jmr9ZBH6Zz8W6bdUSblanUOwAFWq6%2FVdp7QMWqJr2VOBEW%2FY1PAgHtsRVTnoyT8rAwBFejjvUFaYZ6OTz%2F0Bcnw9Dr%2BhXezjnkTqJk5lUeP3zZMIt0V6W6gl4E99Ge1ylyIsgk6C1XP&X-Amz-Signature=7ef43de798c3b481be78cbe109abec5371728f658212fda35a9e8146b12441bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


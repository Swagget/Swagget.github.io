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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRORCWE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDpXp9gC9FoEEZziKderHTmS7bAucekCQGgENOxJXFvAAiBIrRKncR1t51gpMbZJbl4bGGxHOHZ4MJcKMBJVtrqsoir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM2QOX4d%2F5mt%2FmkCB7KtwD12MY5RDIOMpK%2BsEcZXw1br5FQn9PdK7nmvfcVjmzasa%2Fdg3PBaW9xr8qXG%2B5nozi5CnW1XvGSiwWmRvXdTZsYLkopckkzgh3jdIwzWY7VkE4c7dynslk%2F1TNnZTvCA7GUcDlw9wZP09Gbd3hh99QqYnoc6w5tpT0BsvpCfrUPCTVL7lO9HKVPUWtTPfUYp7L9y5pDE6a%2BZ%2B%2Bg5fLnlrfVO8w356%2BS5ODGd9HXDMfoN5sILfMZZAv3oYfVf5u4Dwb2FRJPYHkJJEYY3vumTLpZpqftW%2BnWRBUKtzJZTWaaslvxxTHgtVPOiAunbOyDIfzHVseBOEF8FomUAIO4UaWpPv6V2qOCvuqu1hzuVmXWUteUIIsDHBU8g5KrrCkyky7TWiPF%2F1IItpCygO1CRNbDZhxRyVfw9fXfun3qW5CjvKwzf2YzLNWcDy%2FsQu07qauvWL6f%2B%2F5UUmZOdFs7C9hwYPcC2rKhL0rhPJ%2BqWpPgdgjdPosLs1%2BNpTVaNKTUlrErsC8P%2FE9PHa9FYP1oFcbUBsRono%2BrCXoOII1%2BmzDXjt5m13ovt0aHbf40eae3FKnimlKMPGGImhXx8nagAzBSTqTIXVJN7L%2BANpTU8do91EGVCvMemd2K5k9%2FmAwofeL1AY6pgG3n0eIjs3R4jOGAyM%2B8iERzi1nI8X847y9nrAfjapwfZtDly4aVDkyxruKucl8zKYNUnBwsOrE9bvkzNL4fD%2BihSyWq6HTZjxDyIP3fuHUAySiYiEvVE6aMeCN8vYdnQOQkEER9Hp7gNddYHMXX1cLh9%2FbgLPkSruYb%2FEJH%2FrtDumNH4d6WbhaQcNkactiphXK7%2BpsZNeXAPTcJ1Ag3RPvf%2BDrSeDh&X-Amz-Signature=15f6fd744b3885f582fca164affdc0a9a13a43f192f89a59b8de4ea720bc7205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


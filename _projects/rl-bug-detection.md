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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAV7YBDB%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T195158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu%2BKyjm6yTyf%2Blv209bpqLW8vcJq7EG0ubid%2FCXXoC5AIgQlmCdvexsgl5oynbi1IB3G%2FdPWcZNOwNcuOf%2BW5HxpsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmZgL6uZ3Rg1DepOSrcA%2FU7l4f7RmaB9GMnIkdoeANsQBbH8FWLh9nTkbBBz83myUoFyZZpUpUZXAnn42dKAyHWQxcTZLbLtRS9UTaXoN1I71JVZPX3QbV0C%2FKDh638NBc%2BHBa8dqU6727SiXq4oehuF5qLWgmFOHj7na76RhfSbHmsd3yrEQnt5JZVtyQOnInaGmnxy7EzoEDmRaJTP63ukH2LtLqIAX%2F6UcCt1fF%2FWxsGu0%2BdNknXWsLR4H3vmH5eRBup8mK2%2FSxZzAZC3groBLnLYXrrj%2B7m2Dwqy2jvIRCXAPTB%2BeI4eaWXFOLsQzdgCZ9j3uDIFaUxf3f22GOguLJGcpYAx7cg8JUc08HVci9IqM7lAGQW6LBJsTI1sTz7X6B1r2heVOd9sz0K3V7LJi4puANvIWJzkZ%2Bpxrd4hA4%2FpfkrxTzYsa7SnyBsByDze2UEI%2FvwS0vrdlbpq9GiUFBa9tyLdMwo074W%2F1isgSOqGddD3PVOK74nKogkX86%2FSq2DVxQlX0q2SmwzR5U28NfDbXkCXWPXUpRKgIYbVj8DtNRyZLxwqbMwRgeC25FIiUlhre5ymLirCRf3OfRdQytNyZacTnJOg1725OMGswwp7fcLnA7aeCfChgiOGdfkZaeDWtG0QOAAMMz37dMGOqUB4Unnhxn3biBMWgwa6lucReJJxL%2FkxEKe3TzkI9BKOIb9RuFAvtXL6Y3EiKnaTIGtqnsQfshOkCNxwA0qUvL4QuQjDL%2BG0R7if6OeM2432VR1QWNnkqLfwHI1%2F8sEgmhvXV7cyEOa%2BqQ7RJbHeQGXoPRIVQBm7Dkz85g9Zsxu%2FDUPgEkZx4oBjxlFlOO2D3LHQLQ9LuRn7sPFuRmTksfYCp%2BdKDkN&X-Amz-Signature=73caa9769e28e0847baa43ff19965290369f74fadd18cea7d04616272bb9af2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOB5X32%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T133924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxLmG6dAtuUVvrGmPdS2Dw1Lrav362rekqHwaxtJbzyAiEA95Qbn9yhssljVn51ymn0MRBWkJ11ZIMKQ0pCDwPI23MqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhTBAYJjLoJEPWoHircA3HCmkHoGfwcxC4ID2NxfU3mcg%2FwxWikIWCUW6ENBBcxlwcj4c9ovWrmZPNspXIn23WR%2BziKf9Lg9d0NEPJJwZEVouQLAua%2Fr%2Bffk5ihOJaWL%2F6EImkdXObEAulyj3I0xAbNxQGv9bxtlOm%2B7U7m3meEAs77zYJdTB6p3W4GJPVNI6Q2EaLhxzEjYBEm2RksbQZwoDF5gyS1olo1kA%2BCch3BxOVJR%2B%2BAa5z6dLxvgyBHvnyMrfdgJ0FEGlTNvqv9PsOBfMyEG94QroyZy6drDdtli4naiBwUSWxT5w6gS4VY3gLcGqBMRj2vWEO3uAUy5I8EktGj9Gn8gnfEeAayUUg15%2FOB4lksL7XFPoXHF6jHAT8skMCBAHkeCyr6BpNPrRiXtAofNA3n%2FNrYwysQxTM%2BBeqItgVeTL7BoonlvYgHrtL%2Bk8%2BRJNzBFpfdqPHu3mGrCY3jXpExIN7cmoFXUrpnxto%2Bkx2GZqFv8R7a1efJ9NPK3wAhMhLuXwdGqgeSnJYscEPyQF%2BrdcUem6%2B15sZo3H3euPPvmLY7wxbXbQvgK4iPoxla35OYxQukF4zDtTSOYytgSjPmT6%2FYfvUuwxBIB1GlBTEEDAHZw0dUmiJb%2Ffe92C6Jb3voRtFDMNGi4dMGOqUBtBMGP8V0xj%2BZoJr06IXdY%2Bcmy2y4jswMlcEvfVznD6dn97ZzPNcHMOtBFv5Be3oQ7JAdCkFi41400xN6xr6SR8vDCDY8aPsUqaLWp91klrIQfce%2FiSjhD7f5ZjUm%2BZlfRyWDuG8FzGnr0D7I%2FHa54XRZ%2BiTs1pkCzKJkQtRaGvZ4G9MGEBrF8yL5Tc87LcoBpD8i44EsSyAaf9t7y3idwGo%2BqbNk&X-Amz-Signature=dab96d3fcbf62e713e5b590df63805763b064f1277eb6b7f6de241f3684ca65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


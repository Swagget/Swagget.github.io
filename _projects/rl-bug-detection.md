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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354QISHV%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T084346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCTYnnXTvds2CczmOKS5zWL2LzMob9ZSm1sOs3TAFWn6gIhAJ1zKsCwue9g%2F9talaDS8XYI6bYCHvUmkD86kf99nT4gKv8DCAgQABoMNjM3NDIzMTgzODA1Igxkja70z59BIfUbGFIq3ANl%2Ffabt6H%2F8PjfxTawRo9ZLQhrDg7gwLvU857Ojs5rUH5IjObNpPLsk52%2FgVXju41XXN%2BzvhBAJRdK4MpsooLA8bHXkx1OA7r7WmQ%2BfKPfdHA5ZKcNzOEQscO9khpfkvl%2BjIcdFUeOoGBoNs%2F0WovsBYo9XfFMDrhAgW8v2fmXceqVKE1eLZep2ESN%2FJ5FYbgbjs10Tc5AhN9aEceiVh%2B2JGJ5IY%2Bqf%2FEEr0dD%2BBGvnfskkJL06vRhXGYIu57LpeyzYD4fGnuVlOPesgQXT6h3guovWSNIn%2BDoJ2Jcdt2zhGAccGnMgAAnTOVVQC08jN0C4aGuq%2B5vJ1d%2BaSrrkGKYH5QbS9260D6depwouYYD%2FzeLyIBO8IHQVUXCix5RKj2ertD1zXOr6ehug7Sdnzc0EKwusig0LQ4D%2FpNEuHkYcPWgbhuLuYHAR%2Bj1y%2FoLgjZ0FUqX6eYh1ObdhmwdH7zuyZAPUyIOqWB3lozl%2BmhzLBx3CtIlMXFemfoFA41pko0mjOEZnZA8re%2BzVGAOg6a5PPG2GZwQ8Iso6YnxC5ChIAVBvK%2FI4RS0SSE8UlqXSNvKQ%2Fuul7TpnlwB7KDv6m1tUZ1H7NjgARQUYFBZK0sKAVQo5P9V6FG5aLR5GTD7w53SBjqkAdlecvHdtPIAguGmWlYtqIteJbdWMCYFj5AdWLP7Ib29%2BsZYoa9LftY4F71epkfBCZBXKM62WchzShSS8pCjpTMsxV6M1HXzVUaW9%2BFFYksWWBuC5FnPIsZJEvnQLLPl1N%2FvoZ03YFk6Uu8xr6oQ5z%2Fik2K7WiUmeYwD2STVbF%2FI4BRjOpBDKJtzfDrUItXsH%2FVc9uv5%2FC%2BFyMW3eqc1LnglnSzG&X-Amz-Signature=cd546b86048b1f6b8b44bad7a201f26bbe1e10b77e4a953af3a6ebf278495a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


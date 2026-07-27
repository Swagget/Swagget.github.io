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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDF25P5%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T235221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDG2ckCvJnvXUQJ8bWcaXUACZMNA0qfEbBij5jycgBnAiEA%2F9mEL0jmNHuiIH5Q52KfP18YYVsvWYMYG0ABPxdpK60q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHKg3cUI1rtuOmvP6yrcA2sK4E26oN48SGmb155PzdbJF2iJzR9%2FXLKf7EYJ%2FfP03poMS7doGugo82M20NWPBLR42qpIE4pnzQdzu6mKegmiExyKLSfn5NL%2FvGf0mbLoBQjSS1GHwW8tSb3hhZxIMtdGxX%2Fv2aEQCnA0qja78bDFtSRlYbTQcOMEWxzC2Ck%2BxZ0tJg%2FLY1UsJOn8r%2BuA%2B6D4VEAYwKrUlMHzdggvadHKknWmGqDnSKGcz5TPniYSpwb4suPf33cNgQZv%2BSFVk4%2F1Hyrw%2BVae80HIrBgGsUPLmu6q2vE680tzJQWbPo7SteuOvefA0zAnnlDdU%2FaPOwUdMMcDJktn7sIOa82lvp2CHKi4c1vhsmGLoXU56GvO1POrPUA5TwNt5ZTMuYcxfmrPHXNV8Tue6jt1Epax96FwvFfGHRCQfJG2L3FiY59OnIBVxZbUpchIYE1U%2Bvx5c09hYOfrrViJoTHKd7lHTh0S%2BjzaKFJbsQiSblpXUdERUfj74dVopC5SVbuHcKLaiOyeuQ9cjsig%2FGwDILKz7tn%2FBVtWKC2ndcEbmDFHx%2FN1qhi4Lm1i1lA%2BGKk8ZK68ba6ZiVeeEdwD6LWnCW9ufoz%2FNn6bMfvTc8Ijz5V9Zpfz52tTCHY7vJPKhCKWMIvHn9MGOqUBLrcKlF7W9sZXrUlt%2Bo%2BUUt13MWh62ACNnlwT68k%2F6OPoHB6EV6cV4fdLHrHgZ1tQeR6R48BrGSuwdN1aB4qTwjMBcnUNZeClflFxqnJ93D3Luq5CTDXcOFrQdP4eZs1JaMskaSrY39lzHoDpIAhiL8ejJwhcHvmvBsTvhqDEUOJidvnWXCCK5Uk%2FIjCPETUCrJhoBqo%2BigHEkmVV3UEgVIT%2ByaHr&X-Amz-Signature=3d6afab86a60bb9d38ba90c2942842ee2127a138bc71c891f8c85decbb73910b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


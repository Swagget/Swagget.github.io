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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUZHEZJ%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T123813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCi64JJrZSBx046TAmgx5ai5GcJK75ZCaaKzA9gv601qAIgQwi5D4RsDEMwMH%2BfS2TBDf4EhRqdRgDXF%2B%2BobJI%2BwAwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSF%2BgLQU3YW7%2FAm1ircA%2BodsfUoXLeKrFs1cXdD2TjhLD2I%2BlwFb%2BbogXoaUEmhtKzE7Z2VvMguW9Fcte6cMJM0C7QeU0bJrNBFmeMF%2F%2B8FMvtO27dpcfdbLY2%2FBJ6SSiSF1huslQKbddTcPiPAaAQxmAizZAmS9LpDKYd3jkLnLcxWoAnuDXhzoZ5nIHfyOl%2Fhpz%2FGrJXW%2FR0TfKHl6DOhu3N97RMSHo8Si%2FVdlWNgzjoKUd3mLRWUQCWYdqprLbRZJ%2Fr%2BnGDApmtCFP9fOuAlLX0mcEUNsE2tOKSO5%2F7Z9hHoNLqYcf%2FjBR%2BrGMXB7nZAfx6XdNiZny0dPuJiWgtC6zcUklbW5QAsurXxy92uFhIoV0ntY8c305aT8AMeknT5yVZT0bPhkfNDwN5cJMDkwFq33XsXXFB%2FLcC0pq513JdhAPRQfBLLbH67wwh5qWpXBqsiXEgg2vwYyslndfS5NPOK3mmqXwCzhCfa%2F9yO%2FN9tj%2FT3r5qpAlXGO6Xc%2Btpt7q9MGek3y3A15t0LplxAZZsmZuPQ2fNqU9Al4EtUbr3WkGAcGVPamGqrPugNUvChBYpN2rtCG8SS7x9dnpgxHWkFzukX%2B11hI9gcINYTJvHAOJhJU7OuXj1QHaPXrgVhZwA1EbRjWlPNMKqc8dMGOqUBSYHfbhtC9%2F2pz05irgJVhZAN9hEbARmQ4jmtMbumOw7Ge11WFGlaUn3iY8SEOdiARhU%2FjB2MgXY57jqyOVCqnpm6oO9iaPnZHeYVYwYA8SkaZ6nJ7iczzaZk%2FQe5zy3cY1I0MWKzl9yhwmDEIS%2FCegtReZ6WGPrCbrisEsz8w1nr%2BlfOK4QnPU1orly%2B7H8AMfhpzgSVfIoRiDeB7ub1x9l6yWmO&X-Amz-Signature=38757ce0c39f71a0f1387befa59a2cfb12e3f7e4b83a5f435e3efed0b1a9e70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


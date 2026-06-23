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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBV6XCW%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T205944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCJk4K46UB1Eg3zIQF3%2B5CnmC2kK6oysrHljgFF8d8GnAIgOUtZdW4DwJvdj1VomOjCCLPoe6Jmq3xU66a7nT%2FOA5sq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFLg50TihE51IJ0o9SrcAx8u5nhmFwF9GV4tIf0NhHZlAZoatVBzRZuuTNtieeQqThLuaDw2PGLwjzMscF%2FpB%2B6MxhDp%2F%2BziIw5RXSh0tryhxn5S6DDe4qihYLKJhLgMz1wbi%2BgpPOgEo9QhTLw4%2FTeW49HVDJyV9Z07Rus2BCPFjJWWuVGDLML2EgxgCr5BrRmCsWJMwbeJ8dR9NqlqdWNJDImFulKooyzOHRReGZo6lqR3lPQiEFTfOtbX6ZBE2YbLLnE8%2F6v%2FnYsklWAU5friYLafEBSKU0cy3OqVOafDNjRdLTBN3V8j%2FmnOF54QMmH4lBC%2Fum0GzoKUdyP6tpr7LaCSfvIGm3lFp26GKiasHalFwmuVDOvfuHleUrCUJpgwfpBbBUn2%2Bqsu%2BT73FY1hKmy4jzMaZ8mqWNdwsfiQ4FT8jhJ9EUHidYGgDyYGkbOTOpYXpJuC3kwHGF91zJ9xKfebGJgDX4WhBf5U6a94V77%2Fn%2BnBZPoqxdZcvndvmzqJADMbpBwMt%2FkV4LviOV%2F7sR1j%2B0FEJaEaRwMLPfKglfQ2kN4mc5CniLnjPRyvFi%2Fd%2FxfTX6l%2FzUn7NnmKx7MSWe7QoJ%2FVNCxdptx7xk3aBx7PJ8dWxQhQV0EHiPMgyc5ZqzgPEnO%2FcxNEMJKb69EGOqUB2x%2Fl%2BfBcV2aVHu8XIToaPD3x2bcZyzL6AAV%2B%2BLkkYyTW24kJ1TO9h1CsrOTnPj4Afgok2cZzdfo4N7JYcH416nq3QGiAFiRzv1z8MFlELRZNIH6r%2Bm1c%2BqxcKyrteuCpH8QJQFCy0gdz5bI5vXPFFCIAD9UmI9dTpQj1%2F%2BW4ChU8vySHXOtFCz3qnaOgQ8XcXecwHOySCeQ4XMw4RMHVCGUrwuVR&X-Amz-Signature=2503e61351e94ee8a2d64321d67fa41aa3fc213a08117b7d264882adb6bb1fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


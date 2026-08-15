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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3BHCWT%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T051341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDD71Mgi6wmV3ryrMFyvCHwkX7Jnv79iAcJ%2BWOaL9qJ%2FwIgB1eSqj7xNrb9GobVmSqr4PucZv3UYB%2ByDAGmm6Hubwgq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDIc6tnpfpJONoY0OPircA%2BG7HPDJnzzpVLGWfVq2TtQfqwgWkd2TIIpxOYNTkgTYIOfwlMMiAm8Zi0RbfSAIgf6WRgsMdwFremdBPEdQKuuRzwWnCtUV20HD6aRXwzSj3lqO0JSJRWEHV9rm5YWON463GdfZ26oDLDMrDV7sNgJzOhOA5pO2wyK7OHb9aXCUGKS7%2BxqlKhzQvJiSlSyJxsnJhdrna2a2qK6sp9aHBHaWpbUeoDyK70SYcF1%2By%2Bmu6tDdoadp8S4rhcXUR%2BauOesweIWeJXkHSgn7njApHu9Gmf%2FBTENKC3uhSAOm6N3rpM6u23ZXO%2FTKumRXpnF3wC4ru8DT%2FU1K9b1hzbQn99F5j%2FFTEpa6bkrfaDZINL2RhiwDOSXfdQuW9Cv5Ww0Mkit5M0XL8ihiiGEHSU0YtAUaxB5SA78JNXzmUd6HmKQaMO1a7glbwkv9QBHOjhX%2Fi6dh26D6HUU2jU6c%2BCP7V0%2FZ39eKR8Q4eTa1fkNq%2Fcv%2F8vVXxuSZGynVE00N0V1Byp64YF2CHfW8dCs0MCc2jy0Qe3vStslMCcZwR%2F9QarF3EPz3Uo4%2FrPnG8QyyM%2FAm2ipuUp4Q7gmC%2F8EOX9aFxlI%2FgMJae4A%2BwESe1Ly2FQhYBBNHyWoE%2F0JaBA8BMM6A%2F9MGOqUBOr4dQK%2BFAV%2Byyu0tMjGOFOmDHGVYCkuW2HqohFoj3nrAjMsyNMnX0H3hpDh1SB4Lq6ob5BENZcOudQWqrXvu7554DBWHwvtYfXK302CHFZx5ZOQBEdH59JtcY958PlH4U6bHOMv4b%2B8glFnTRv8WwRIZ42jZirBqydw5vUCh5FswqveOohilwJHw1X36%2FBD7Zd7gkP%2BvmbBdps0AX4WC%2BhQu1%2FMM&X-Amz-Signature=be064bdb4b4cdc5117e5385e6219df1486e55c4c4c74ebf938a5a944adf94416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


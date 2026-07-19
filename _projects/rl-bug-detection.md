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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMCB2PY%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T045722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtVZbDtpEBh4ZyeZ4SUzCWenzkuJVceQ%2FE8QuY7eh8aAiEA8yB%2BZeMwOZDbSH6phvJCb9Mk%2FANWJkRd8QO0nSJzt7AqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4T%2BMTaZPA%2Blr4xoCrcA%2B2I35001uSh2nxILTObDMCHr1%2B1hb2hVCJZSW%2BK2K%2FQ9Zx4SLuKpOQwVjRNmIKfXIJ8bavYXHFu3tWoc7o0qaniw1BhORABV6A7DWjFbuGENPaxCzPBd6bRtMYuKrDK4%2BrRxi2%2B%2B03ZDoGP42gZe%2BRPfySXGxY6drfj9m9CUKbS0SI8qzf8XVan3d0NRL%2B98PcI0iAGA3JPJUgj%2FbARyc6I4riN6l%2F4kc1h2tf6UuOp92dKXp8PlDrfR3Mpf%2BFouELYPzes1VfM0VuijkXzZKDj45YlI2lG4LiJlhakfo5c2qSPAyEGENiI4fQRuhQ%2FKQ6gGjZ8rfs388SCqsIYOLHQXzyczfHtLu9leKXVt2NX0yBVX8vK5yWKp5%2B5%2F%2FfXSrZ%2FKzZmWDW0nsSRgtsKkOaU397Q0EhX1bIZ4a8zz4DVog5VTumGcnowNOijLBPTY9jaT8zI9czUNJWslJyF94AU5mShDt2%2Bj9AN5w1othXAsBZSs2kJaSBunRllH8DYk9%2FN2FRX6yNga8P5k8T2Rkvv3rRo66i1pwnaUHDFPuh3oPhg0ti7xzn0W9r8%2BMFDX3rtIrPxSMEV36Fq56NmrfeW0mOP6fniv7sZNGo1XqRNOhOrOP8w%2FTBR9ijcMOmE8dIGOqUBsp%2Ft603g4S03P2u71YD5y3pNIdm44VO1JNVJ8v8b2bHV%2Bkxx%2BWIQdwlbcWcpvAqnSUg6H8ZnKlgLDuyC1ACiXTMIM2F7QyGbaLtZPz%2BoyvWBEBeIO6QvxHbMZyzDDRs2tPW8nO8sl5tu%2FIHtAWdbOF2JaWCoGqkOAzE9n5FylPfb4b%2FL0hhd6A05F6rkfaljdmoH136p3YEpUJSOTzDo%2FjP6Vttm&X-Amz-Signature=f9ebca0ead1a4279cca199088e1c6a78484bb5970c7518d6e8c7311da2724a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


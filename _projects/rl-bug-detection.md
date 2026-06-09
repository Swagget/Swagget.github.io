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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2TICHZJ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T015141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPRJJ2c3pE473PlcjUaFLKOEJJRSpR7PZVcniHJkS6XwIgZH7yNO9VwuWpbA%2BU0157A3GG2DKyYr1zCufguVHSVgsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJU5HycY3v1buO9X3CrcAz3aN8HHV5a1zhuGr9%2B%2FtivbhsACYCKrmUNjC7HwnV%2BXWWFDy22Pov%2FpfwPUrLOwhVdfiI35Vbppq2bbufGoFebwqt1JCbdSOcM4IwMPU9aHYb%2F7XG0Gc0ggEs9%2FmNAu6UBJ5YnuKcXNLj6CNRg1RYdF3ywlsQkK44i3KEShdDZe66HNR9yM%2B2ujPUtpTcXgEksCXibtNYGbaFwIR26MvwjZPB7xhGO1mlQG1fQPetB1ARy3ffUeAB%2FaApDccC4FqPqdmJtyQRkPji%2B3Zf6K%2FGELNeLAfUQKzU%2Ba5bUqG8%2FU88EYRGavL28xL87p58C0d9veyF681Nexe2zsnwBLeVI3rEhsfj5Cy%2BPUc%2BJp5nUxmoqXKMg7dm6U5wAykJN6z0gMqhyBEqsv3YzJU0MA2vhe5IsegHHxtUXPAQaRQOn0hCBLsRYSju%2BW0VB9IR12ovTg8goAUdQfl2fgDtSokC9FedCDIzuVcqqtRiqc%2BFgPcvkRYrpaq9gtMAsagfEdxRBj%2FWN0LAvZbZX7d8KVOROC4v7RphHe46HaC9CR2NDDeKxMMCGCMz7S7v%2BYq15mWnj2gsp4AmXbR32PtXV6Lt%2BIg%2FGl8DQMYRBwKSyzGtIGv3SzxQhQsPi5cSjNMNu7ndEGOqUBFMmOsZ9gO1yphdZ42uNBGdymYFBi1gBvF3teYy9RDr3aaB8DMBIGT%2BB5FbmbJKPJHpUi3qDwLHoDHvV55iM7JK2x3TI0UI0Jtb%2Fv0LNx%2Bof3J%2B3ux8iV9yI7%2FshcwK%2F9g5wvnDJglDZBQVGS6peglxe7pBMLTjv9GF5QzWKJqcKnhxv%2BL8k6adWq559KXIZfVOSIZkZErFnJzPzesUKk03dx7Kka&X-Amz-Signature=0d25ca71034ccea65e79717b0f446ed799993e8f0e4540d8ddf3ed30397961dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


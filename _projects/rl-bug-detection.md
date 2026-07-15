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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O32SO5Q%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T111836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCC3%2BlVn09U%2FQZp5JG2%2FLV54wqExhhnnubgivmSlEqKJgIgEooCa16GRXpJHqxCD5O0j9TreY6Gl7Tj8l2U3LaL3Xoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJNEHcRpUMrQ0G8c%2FCrcA4NbA4zyIwcK%2BMG1i7nz0JY9VfH0Ck6WzHgx9Ioxb8xekyRUBOG2bwJGv0X6eA6LH95FnthSfs0hieENdbsMl89jvaUB%2F3ljIuYjL2ExK93mgOowWkbLq888ibgHEfWBq3wgKX3TObENly6d%2F1FdV0Y%2B3fHVgN%2B%2B5Y%2BkNkUOlM%2FjfKrHpjEZGy1c%2FDM%2BE6r0gM2GXoRosrhIaAL6XvdX6RyDb6ro7HnXMZDi1NF5BL%2BREY7smIsrhJysiEw1LAtNTN5aZZdwfqlrtG4OXzFaBLLP5QfcVPdx3dKr2Ml8ld%2F3bZLucxz31Px2Aj%2BTAhJwfzzLgo%2FacDPDxgTaJcdVXeyVUQZJhvVJzOrDivUFXsJhjSGo2mpCevDaIi0%2FkEhRRXn0vZWGWIY5nal6DGeT7MizfF0CvI1STsZJmGv4vMFrfvEmc6QbC%2F%2B5wDsVAc4D13ybEZrwrCjr7tvjqR3ZcSfAWA1tsqR6d2PbrDfFsf%2Brb4ucB6kJfzPWeHQ29FMn7mknBDcn4XLbYyNwNcbGbICbXhyxUQaK1NzuvoPhNUkR%2FN%2F6wak6V7Gqn0h5F4NibGHYWW0Iv9VcMLR3Wj%2BkLwGJXb8rQjPjG37ueLwgeuezUi8pp60apuatAttkMLHB3dIGOqUBpihU1NzrhZ9i78EJfq2gagHQU1eGNaPp%2B89QN0EyUTipIsyDri9P9GLeGkSxZPpS9l0I5rpRDDE%2Bx9rEjd08ZuVTU%2FmQvq0%2FAyBsm%2BYs0h0C2gli75LJPJ7v19B%2BlGiualn5xE%2FjcH0crfx0H5RBjND5PUAoQC0QnIe3E7PKCkvdzUHf7OowKjibggzIrcgV18l5pbiLIesdCh6XV68bH5k3T%2FKr&X-Amz-Signature=86994c1e33770a5cb3101ee49a62001619a59177675e94aa8af9cd9b6492924c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7I4LIJ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T153859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICCJEMTzz6zDe9y5HTecZ%2FhQGqh1QHrdagBehKW2YqZZAiAWTISUhODq9r3ZgaZJIYcCokcd2IbE1%2B91dufmcgShNyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxo32LBLOMo20IB6KtwDJlboIeqHUd95MxQh60dNpGFM1jP6IB4hkTsyFDaCXoGSq1svwplPX3UMtLZ0QK4cGHiESYZs8tC6dY1Mse%2BLKyI3nRjpXrUTytTeA7erOHpYfa38zimC5lrBjTKuAt0ILBq2%2FUHhM%2BFVPuEQBvmbVG2SS1TtpIfBAEbG1Jaw9361AMk%2BB5bC9RKVPfsP4avtk6bidxvcfmF5aaP9XuiUVYYl7RlsZ8%2BgdyCqSbrdXn513vLi9OcPg25qhRWtT7Viy8QhDjqV8QC0lO4JC5qTYiyhqh4Cicvw3HgFR7wqWaVkk%2FadjCr58GJHBmCffQN5tjpWHNduPeTxlcOH0ZOgHDNUbvPWg%2Bg2K3Ug9N%2Ft29OBL979CaWN4Rf2PPmXXxSFsil3aW8sKc3sdU0%2Bk25D%2FBVmRwpwMv1oyWpmocAy8XEAIkKnoE7WNosuRGKNucN4GgRvlOAlU1M53PotZhN7fZcJhZK5Jul0Avw9IH9IVjRNVItq%2FvNfWXOk0xmmd2iSWlTMh2Xn%2FT%2FoFLEOqHTwRdqVd6E5S2xL7wwl3Q9t6JLUa2IwTXgueyNpDSwNca%2BggNPQijP74Chz3cw5AjqPBXXCkdgaIm2WAAm01qnkCPoL4GkKM9410jYqhmUwvb380wY6pgEcXSKEZ1t8o4N%2F%2BH%2BJku1H%2F7HSDAL6wGpqEGrz2MatbceAGXv%2BysG7OZ%2FHQR5Sp8YxKJwcWUKENLJ%2Bs35359oCwQpow2mKLJCxOifxvyTWVSuRCVxEciZBmmQ6RoVBcRdKQFAhOrh2UoxdnqTQ6EXvYpdXpnq3ENjQFd0%2BuXA2PbKDhyq3J7Er54rRckBJ5vxOAYJ%2FXMgsUYYIkQ7k5E208qK7dRBW&X-Amz-Signature=84cf451204a1f9f619d37ec3287fb7ac5b9d40d65e5f1c7de34f6402d60a72be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


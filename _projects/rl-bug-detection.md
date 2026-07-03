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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2DOVHA%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T170911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDpUNiMdbNS5XMfKduiTgYL%2FHuNpQEEdnfHXqc4v4fShAiEAzRE%2BqG95%2FXI2EsiaN%2B8LSyHDNFO2a0vRkovCcRqEhD4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBJbtf%2BQSl0BORkUbCrcAyLanZA1YwlZY57DHXCRJCV8SyXcSrWOC5BIaVnX8zRzgiE%2FvtRaKJj6QEW9kOaByCZTz5eCOt7Ip3TWDiUCN5HU%2BtE7QUM0wzUDEmnCaYf1Kio698yOEhtfGzGnO4DP4vma1K3%2F1kiPFtDhW5DqPCj0buxc6RoyF57KJ00s%2F1DIQp%2B6edfB5%2Fu7UNWmUt0Jy9gkQ7CQVGSN0X33hpQ4bUVyCrZd0P1EcjY6HE2QMDU5M5WVqLAIbTJzumLyrHnGUVSgQWoy4EGahES7Y%2FbtWEJInvLB2Wh%2Fj9bCNGQ%2FqFPrDxrEMzVBYqp6y%2FvtL0ztxVfj1vE1vlNXyJoswObjS9X2R5jQ8yOW3Oc7SRj%2BgmYst4kzKYFWT9xpEPliKHz2HGQ%2BTiCdP84Vhgf0VFUSfXSnRCUp%2F7v9PcEkNQ6uue6x2SDPKgaE1u9O%2Be0S91lUbOm1imEu7ikyf%2BEYMof8CFfxkEknXZIOUmh9ieAxlZ7iPsFPoKmGgG%2B1ATyDRvG%2F1QJ9P35RHG8S9E2pgoEq%2BvBaCdXL0UJfSjYVwFd5EQzt2%2B6siViw9rvOId6m%2FpWLdfOJX6vWbC22L1ZjX38UGE1ySoWOKjJ8mtGeTMmQuWJ4eB4O2kgGQXG0FVxtMOqtn9IGOqUBo%2Bk4YhIgoi5ivFOF6u%2FyJdQtDTq7wxhuG1ePQRT68Ax3q2Sy%2BM5VqdD8J9gLSMTNQZsIjIDRmX3iW6r4CedCkBeopaMWrBSlJkTkF6Xira08VWHoUKQhTUTCEmn2KtQ9lN8JHRt6wE18DesmFN9AjVl5RtEer9O1%2BZuu9By4Tz6yPHm26O4gKUXzFQwnxz%2BUi6t%2Fj8%2FZuC3ZO8FTcVxufDURDrxg&X-Amz-Signature=70464b6bcdf0d6b78de866a2380fd525d5974bb7559f012db2c9e94587199d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


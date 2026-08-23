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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJQTY62%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T061904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFPdC5uTUMqeUJ1Nu1eVqDz%2B2Qbbii3jkMl7qRMfAlUIAiEA%2BRiC3P1NHJozLHBWWoqHeim%2F9cC9gsYAVpOBZL0mGvkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuL2WNgioHRF%2BWs%2BSrcA91VxMdqe%2F2WlTH1U4Fq40gKq7uBlhvXI4zTg0a2PlE%2Bgt9CzGz2%2BjT3C0ta3arCWwFagB3vmRTD0dJLdkTVZpuC6%2BFd%2FWwLhbj759653yTed6uVixs5B0USnXdWmPvtHnW53mNNkMITzoubOm1cEKw9LlnmMfLV9i%2BmkVUL3teX7Y0SxZLvk0mSNaXue2ZjcNBFGN%2FUWZlsllomtgBypdk69jWmp6CF0FaxAdtNxhA0NsJdA3hFFULW%2FtD85Z3avzWpPYeq1%2B9LbSoMDj3jkHkYcrK%2FvddV7Hd6ohUp0tLQL6RK%2BC%2BrgRMWThZQIYp6Vwr2XWJWIvJGpacQaPx%2B%2B9xdn4tyxlt1U0n7krIFX1xSpwJK84b%2FAC0BuFIfGfdjUjaLQye0X47Ckjk8V0sHBE89ZoploRXGOZ%2F5DyLgni2gIYB2SyfhopJ1GGjXyz5wUWFbdfrUCehH7ILnpqtLjdzxt2pBla8zzWAQvC1HolRIqyH48KgO8d3m3nUz5em2gg1dPSWWLYUsqBePu5YkGnK25RexJDo7RuDniWU7yuGYUjp%2B7ooMjzUEfchTByILmOdI%2FCAiNHNNpxVgCYOXHEFyI5H%2BzLKmbj7V06DW7UJQRxQrQ1D7tJpfb%2BYbMKi4qdQGOqUBNVXz%2BBD3HXXcymHvXV%2F0wSSZ1ck0h8oTjf7VHqVkDv5nkjWaa0XmfOx6n0NvoNHEQbaXSYeUH2iMhY6YB2Jxws627oKMsAU8xIK%2Fit9gremvvQcxWhEft3nPtWrvoMiSTeT0sNvQEBUrAjpboaQlySyqFnkLsvX4oGudv0NvSrd3NxEt5VI89eKD19w3UtGVnNL%2BL3biYHaMcBRlusQGuQ%2Fgq0Dh&X-Amz-Signature=9e8f90c2bd013f7d50a03af4f4c3d32b3594d93de77fcb7b5a5987ca24f53e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLD7T34%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T051352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLy5U6oBdHSsOuXMw5zZyKUR8Ply5bPCgVmfutjYY0OAiEAziNmShR71iaEwTOdTguJ5B%2BlbMGPcO%2BmIPOTRJoWXnIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZETSkti1OCHpqDgircA%2FlN7muh1JJkepODHKGBRFFN93Btsk%2Bxrw7T1fSxm9RjHEhVDtuzAoUdc7hK5aWAp0mV1G73gZqttwUT47DfYO%2BCnhAygik42xCAXlhIO5Iw5g0mCgfDbKPB67%2FVaUpA1QCOv%2FvrEf6Xe6m5TYjoJci%2B0Eb1kltGWVVahbJUjH%2BzXPlPy%2BKMg9XwootcED2VeMkJ2pH037LR%2B4FFFaJQtzeWbKe2I5Pb6F9zZ6AZjXKkkiPdABcwPH%2BfRYuZx9RYdzX13vgWLc8vAViAZxU7FuaZoBaycFy67zia53oFivJWEcOwsUIEAWLtBo6A1k%2B21un3m36TOu5atX1%2BNUerDDN2DjaRWYBrkmjAmOzWinIaZsSxCDimms184mxS6sH%2BQPtzjlmJHZMp3NgqVoQwBxcJjEkXPcwzdhd0FhzP9xS4WmgISjbfKS1qZvcELE4rFVHlPbjNtVo0qvjRZjdSHSq%2FlBrLBeySF3cr%2FpeuFs7Li%2FLV9t4EqY%2Br%2B7ZY%2FKU1%2B3kV2OfenL2tDLLBdqwBnU3q2W0pWchbWZ8Gk7Pds1hu8z5Zb205Ew9WIWdz07%2F9bvBgOuvTXRnQKx2mO%2BzH7XzUJmCq0cQn7ZnAC%2F0Wf1PltX1tD8JruWThP6HMMM7gtdMGOqUBirymH69h5QaGYchKaWq9KzjUbmuIHGmFKdNCVEXahnJRkSsxXWqzGPhHt3LeJrHrbMV%2F%2FoH3cibA%2BSz8ua%2BlJxbvt2iapd7%2F%2FkM29WhCWxg82yF7ZoPlEv9dfW9FsVx7dch8fJeU2TjnMyweKOuqDs2iSSke78XKc%2FaetZJheB8hydjvRAxyYZjj3UosKOnvbgPrraSftF8NS%2B6VapjoFejprnOf&X-Amz-Signature=533675fdb0ed22d96fa119488375e928344b8fbd7db3d7e4cd57feef790c49ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


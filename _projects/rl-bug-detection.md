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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SB5MW4D%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T234647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICkED6%2BmD4JcL24PhjN5wFZNzpP3MxTZ%2BuDo%2Bhb6nsltAiAowz7%2Fgj8RleT1i1akc6%2FyFoXsR6y22E6EA54zMiZkNCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTVnlWdE8MLVC3SCxKtwDGuwWwtzoXwm7ZE0dqJNX2KhzqsCPUSV%2FTKux4RsBywMGe2eaM4kZSJq54%2BfM%2B3IwaidUP%2BzrS10DkVXCc2s6IRy%2Bw0Vo%2FZfT9hMLUcaoWmhTCznl2Z%2Fs2eTK0DiB5CYe5OTTV6FxVhyopARAv0Y4v8r1EIOuR7eK0pFIolTes%2B%2FZzm1uXHUQjT1Z7xKKhygJVBVkYfFyWDpPrdT9BvslxabfQoWmUwxKE0pgufCEKKIVCMgPOxUUZw7mqyLKZa%2BfPbSb%2F0lt%2FivWiRVagmwANXmRiIRRS%2FuBJXJewj1T%2F9wKWE0W%2F%2FBtInx8vlsrEke9TC6RfMI4rhFVHf1OfGBDCu4DWjemook0uTzfBq%2FNPy82Gvh3Nd2iYATH%2BsxvIQ6l3ROezZnAlrNFkEIU%2Fb95lH247M54KA%2B8P4lA6sPKce7xCuVtJ3TlLmBI7RoCUOMAjUZPkYZEV3u0qfjYqeocLsHBRKUf6GiecObHcdqZGrHQCuGIDRgXJIJ%2Btwy0MGmcFxw2727F9kwXBu%2F4%2B4u8eYep6qAY9fom5BaHR5ZUGHfFPicmhvcZTj%2BLe2DH78%2BTXxdFqW9ICiaQJtKB%2B4KSB6nqlhxvrI64l57t7gUs0%2FHkfllC3DaNv5sZIHIwuoO%2F0wY6pgE%2FF2nPNxvaHgkgwLPP99WXOVDLqMAMc4fwe6%2B8Z75RKEAO2awRZnERT6KsURlFWw%2F9FLyje7Jvf1DUiHY9x2xI16jH7OsNNGUDYyJN7k7CnPdY2z%2FJLzaiYRbjIf1AuwoKCv6M3WK%2BzrVpU9tXyMj7jjSQkT19%2FgDeaHLBnk6J2kya%2FNKXK6pSYtHS43YJOKEVhwbSPyn6lMDO7hMBngcgvx3q2bj3&X-Amz-Signature=09e2f945459683d63ba37233ffe1be4012136075730fc957fc478c81dc12b8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


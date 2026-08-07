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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGDY7WFS%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T154108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw18giIlsFv9sDf5kiotDk2OqKBPfpFKvU3MEkmDC3UAiB30VKNtoMPVuDDuFNEx%2Fc1cQRah0xv0BadwSEQa%2BKg2Sr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMBqqF6H%2BRTuLHrsEPKtwDnDIrguKX5EKyRLVuUjxL%2BJDL8yfLCM2wNaBKAEOHD0VCSXyaj3I13OzkIohQETw8bjmzJr8U0vL5nAr%2FK72nQatPUYEK5YFp%2Fq5LC%2FcxwC6%2BBOypMrzkmr2jDNtskgWbuEAVT9h3IEIybKtyVbXWllUnPoNDepqP2CMbifKpSowajQ6191opkSknOWzmoJXU2QKZ7crDVwuXwDEHDXPU%2FdsX01cc%2BWrAv0R3E92MmV9gN9INHDcFMhHYLx4ZJy%2BbezyW14M0voS3vjBlp%2FrmE76rZjHd77JS9BGwa0Sf%2FR8vhBSjf88ayf8xpfc34hbHhKCdDRBMFUQkinUpsfVUb8EjQW3ot686H%2Fu71%2BGxwXy1WzeSXvGuf09hb%2FmyocYcl3KpTzhYl9UqR2%2BOil9L4RiN7oDeEOOg55lD%2Bu5rDRV2eVa8%2FiCTo3WmiJ%2FlpwPPqKyOIdMc5jdsUHfNIBHSB9uP%2BSd36RDbiqIbhv%2F25mOfOoLvjGL3wu7LcDGDq7jplaQHVdBmFKfx8SZSMTtxgRJ2jxyECL8edp9mvbqIWutZ0NQLMqW1o%2BpRFr3i7xShn97Xc%2Brf77A8OplLLf5Otzr0evdY1vQRYBKBFA%2BSWiSJzzZ5rj6H%2Bwu29r4wmeTX0wY6pgG5TVkfLBYpnABEFxp9V6WdYkjNxqr3Bjq4onxgtocLdRzUqw18ACSySTwplWo%2F2eRaM91sDNzi1P1hm2yb2QqTtOYTWHrd4m1MYfE1ONl3nCl%2FX1fEZKM2WZGAHbPqvOPpE3IpioZh4SJOHop4T2JQAxeGTsMyWmDmntB9x64NRucoHe4%2BXv4oky77Gnz02gvfVI38qA25GslPCNLuQyyHD9soy9Fm&X-Amz-Signature=c071ca454d7dfa67ffff1e89f213a6a01c3478ce90975c81dc495c351c77bf2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


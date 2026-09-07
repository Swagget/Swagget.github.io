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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JGTAY7%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T105139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDRBcIWPc9J1cQzE5%2F%2BPWLNGWxI5enCHKFuIyomtSQ5CQIgO51wdyDFGTgZiALe%2FTM%2Fr3Ut4iNcGiAVFzHnh%2Bmjmlgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDQfqVvU7A3AWKfr8yrcA2cme8AZu%2F52geo21nE42xzTgou3Cbehaqm31ygVHssy6xIK5CkDPofZD4EfpcqSKj915dqZzP0Pe%2Bj8RLTjXR25cBdD0tTPAP7MsP7XTJZ1uZTHrprgtB8iUJx6oV%2FuQyPnE54kfhRzkbdGXoLNtPl77N2bOBBvgwbSiDMoKSYdG2NpD7r1lCwU3m9Cjp8P7ZJfP%2FM55A7OFtHl9AUtGNlSOc6b7WDII1dzbkBESeoo7VqT42Kiw8eeCRPB3bHw3zGulxcbTAgLpHJH05Z0t%2BnP7RXd8xnRtLS3iH%2Bq8CvnAT3g0NuvbAdm2rOBJCwA6Nk4xNuXDbY3MmHS7mMjsUBak8%2FRn29GVoNO1xMo9%2BG8wXlSSgys9vYfnU%2FExap2WSDLNFt1%2FrlJCbet6mx3gGkvHEPi890YQ0Z%2BCPbLrE1UYlPvguWTXlV48hXbj992A8Ztpf5b11MhCONOuzsi6ugKQ%2F2C9OrwsHZsxdr4%2Fqlvp6D4R%2B7GsPLJjCYj61qcAKUtatCDBPiTBOcsIJRuMcYcpMFUwwSrmz70ytg5II27F3A0WuYL429ud63SlyJ38%2FFlsu4GJTePtF9H2g2h8z4z7tR6C2%2F3%2FzI8qfbi3MjGW4f86frho67t3eisMO2j%2BtQGOqUBfqIildbVpPMlryHKWUAEjo5vQE1xtqsBQO7NZ15W8mA5jnIM5Kmq3pfwguXIBCbO5K%2B63BO5jJig%2BclY3AsqdYykGVmWj3ADuvNSXC%2BNYQ9i6RHi3p8%2FTvwpsAbvWwZz%2F7oLDXzj9%2FPOTFP4qZ9VMriIHVc8LaYe%2FfdI2dEFMxC16TgckXPdLsvSM1XcldpMZgDVi7zkrAslw5jvZbU55MZiRE6%2F&X-Amz-Signature=89d6cbf17ab14abf4891a78c270874604d54ba8e1400e46c650a776129b88ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


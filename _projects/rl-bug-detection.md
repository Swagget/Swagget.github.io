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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMQEHSP%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T221151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX7n4BPj2d4bolNICA4PYcIupS1DcArPCGKueed1l%2FnAIhAKiiYN7WBEu453SXVRhgj2Mgm21LOEyji8Qh1MXXM%2BWPKv8DCH4QABoMNjM3NDIzMTgzODA1IgzCXY5PWqbYsRuknZsq3AOfTVWtzKASar3aNe7KOWnjS2lsKzwdWxq8tx0iZenQGnrJB9kvTNvBRPCeAaTzCRPnFGV6f3znXDU3IATNb1LLuPh6zOudR%2FBgLJcNMf4RonaU0y%2BFCaA%2BX2zmL2BUevXY3gnlx75an9NIom6PLokcDxj7bFwnotMGt6tHsKSV9GIK5JbX9k4%2BWPV8kU6zFTGfTpH9ckm3iURCDMkOUUBrZP9zaARLSjxpdF032cunigYgAq364v%2F2bIVTnwJ%2FXaCeJTZRfWi569ykljHRC9BAdudz8pWuHYNDZkYowdbo9gWmXMCnl2M8Oe2QkQMhl0dvUK64uq1BaO3ijVqxGJ6sa4IqeRCttK8l91tgv4CwSNiHuB6b%2B0Nw8wgvZxIBthvns8t3eq7mYJL9V2dx9u34S0YO2bMfLKS%2BWP%2F9KHpwp8gd5d0DFHE%2BQyUyVMzFZn8Xs%2FmAzOqUoVSktlInQE2BGCNxsle5Ul9SUP1GUVSdN7Mu4r6TYoI4R9cv%2FCBmB2Z5T3y2P8%2F97%2FvqtgllvLEGyZfaLJg9izrAidn82%2BSzpxeBSEY7FwCP3PgVcIaMi4KLdl00V3vTDqL0wypYZmUPcvifM5FGmiVMvkDIAjlj72M5VKHmw2iTkNco%2BDDusZjUBjqkAW%2BBBh1iEZOO1%2B5%2BzvZtb6%2BiToNHrXmeZyhcna4MvK9qchbkp2nVnvHVVU5e800Dtr%2FU5ye4FR72tf7XBj1hb2i45CoOWh5WYbynZgsMIn8BXx%2BYARMmemdi%2FM2V%2BrZesxSJBpsfngmxpxFoTJBgD%2Btgt4E7HsUdCNZCpW%2Fv45jRcTvS03rL44eXPoGNpGUSxB6iCp7sNCi%2FAtImlTJ7DO2pgkAn&X-Amz-Signature=e73858bfaa2c0c4b35bb8c163d89d117fa96996a432bc7e5f59e67fd4dcf2671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


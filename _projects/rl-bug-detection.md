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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTXC6IV%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T113104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj6Qa%2FUlwFcmIC8jLsLemo0Xa31oY7TJz%2B1rxN3Am4egIhALSgweJcs7jPy5kztJfbI4kM1cbNx%2FIBuBbvFd8AvDadKv8DCEsQABoMNjM3NDIzMTgzODA1IgwSpq9WHa%2FOKPwA5yAq3APon9tT2rWeYMR9fpWROznz%2BmrHn%2FGmVhSksbXPvVR80ruStX0%2FEOsk0piIwZPH4tF4Ny%2BcLt3N6A2biCtl7U70KBa49Pe2R9kfvOtn3Ydi7SZrr%2BU8VDBz%2FevL7p3e0P6rEBJAOhKISHmQTT1NZsZkMhDRDY265A2hVsxERCDlfG4Hv6D0Ah1tLJS9ZSKTWzOFObcy%2FOYlRowRCMnHYWm41gnv2dBOuvy3GY8GAUUrYE%2FzjqJzfSWUZx5A0LRR%2FF0%2BIpofSAtjrhTUv9q60TYSyAPO%2FtPNRnG4T5fCCu%2Fxd2y7Tx4Hv4m4h8LZlnGdyn2vZcxTxGzsT3Yob6SbxQBVLzGVb2gb%2BMwGCKk6gg7gIwcKHAcF1DCCSfcDj5cgs6h9r41Y3AdsAPFDRXaB2mXw1%2BjCmuoOpq76KGgOYiPYYNGM%2BwJIOtcWm12CkNaNKvZFMtFSkW4akiP4U8Y2Dk%2FqGkcGFB9wy1fAeGr1qKJy3xZ6EpEhg5ZnHm3iOjRa4hZuDekv084DQ3%2B74T0Y3IRcch8u8x5Fz5Yr674mO2djJgHf%2BwTlRzuLbooGFkkpLuy7RkOdoHY6rtAOd9KWkzhl46InpAaNPImblMvvtOf16AFXAADUMwXuWWbIdzDk7vPRBjqkAZGRivK1WnMaLN65OTU0YmZVvgL4whK8BZnaJprJngdJ4aAZFTyOvmedpTxh3AO65SPhhty4WG6YuooOCmIz45HKmTg6bz%2FQDLdQVBRBs7lwGidOI6F1HsEeVSCK6dc6tw8uStJFZLip6CyMFp3cwsvoIL%2BK1CQmoSPtB5nFesuMURC5IUiEwlrS2aEC7YZhxra7kfacjrwzGV12K5NbBM%2FKIUy4&X-Amz-Signature=ff429833fd23fbde9e03e8880b5baaa482abe80971bbefaab53e5ffd7357974e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


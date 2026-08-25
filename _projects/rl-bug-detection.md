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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ZUVP2G%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T033720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGOZqSvcxswBSD34CoU%2BXTcKPZTz%2FtkVbACofeNL503TAiEAv0f5go5T7LbiRZd%2B811dNQAo2CXZLN8ErdN0cvz2KlQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFDjAJgxnWyNV%2FuX0SrcA4jTr5tLAWgH6a77UwDf4oyE7Cikoh3KbesmxjIm6duoXVveFjb6%2FYFJ%2BDmety6LIPxnQo7DMgXzEZzvMy%2FdGhVZAsvT23KioNuyyPCx8VdjEKsDkjHbmgWAffkwkKl7ILbaUeGnCK%2FKXFimzq9f43UDZDF1dT%2BIZhXxE5bg52raLs69qQPXDPH9SY5pjJ6G4qAEesW2Dyi%2FXRhYx8yOzdtf08auiNKtRRKbG2ksEIzkPU69uPhR9Hjx%2Fi3gZ4pTiJJMKLXykrv8avZetT2N7nPDCXokFpuyJ6bWvtywmgVUVOHQyCycNAhXuNcC4gmGo%2FeVuyCZBCAzt2hc%2Bm2q9V%2FIHULOcrd8%2FapSbNvyvMSVTrotkdvuoF5gQ0W5ejRmejaJK0LUfWDg4gHtcGLD%2B3vot2MDewPPXo87mASeajXuvp%2FoLSoK66YS8NpzVdw2Md27vbZs5fZzsTIhz9NTksbY5nvS6%2FBLXuu4tSaeAxlfbhOvu1h4uavMEtmNdqMGEUBov3KkzRZjI3a0%2FKWEeuKRgQbWWctn2Qr2K6E7k204SF82thfHMbE1ilP7tSAGCUEOuA9led8d7qUzhnpaRRXFn%2BwscntSVqFK9ic%2Bkc1DT2YQ3MF2sDg1FpG5MMLUs9QGOqUBPDDRUwXsp9WsTWhezubDoxfeXAal6JMoHWLqLQDzcZH2U4VvAvgvynFZRkOqR%2BcKSI68QJ0prOPXbT2ggdifZ2NjgoXs5zlCRQETdU9XRwRFRFEL8o%2BxwtlXH20VDHgs4NQbyRi5NkKUvxMr2ISGHfWBAlmEP6LYjTs1rmjd%2FBc8O4DHd68l0HV6ipUT0l0MsdzGT5Kb3YP4fWy0jooDoYSvWIvA&X-Amz-Signature=17213d77640840c41c26c8512af328c907f1c4145b2072e501f69aa27b06bcf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


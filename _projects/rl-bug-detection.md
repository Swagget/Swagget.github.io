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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5L2DRH%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T174643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDCvCm14ZJgbisRKmku3exJA87w0G%2BJBZR2zAJS6ja3mAIgFkixqCpcAP8JwntHoR6YTxwmdvPWW9epDYkMSNCj7soqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS8%2FOM6Y%2FfpgpqdbCrcA1eAe5eMphFWYXLj15veoKBzi8YcsPF1oHHSoW3vmzaIsffas7c%2F8IGAzfm4zq6amlX%2F0YNZg%2BTrQngeAkaC%2FBN95z%2FK%2Fx%2FOgAEcmK8QMYkpCNGU31GVIgNBZaUqM9djqDnJDLc5cVSB%2BIHTZ4zg2HVqpzYhRA%2F7ibNkSkUYHGiG1mNm7FURHyIKYYTH3A6ypRWo%2FU2p4B3qQVwCoLqhxHp9npASrrgUbJc7nhf%2FDpChY6pmUbBwTh9DwVJ2%2FARwUfQZTALexk1sY8%2BsD911owAzd%2Bjnt4m9Q4lRppHt5HIW8uuewsK41aM9z5aVZZ8z9uuKuNQQApGEKu%2BJa0h6JljyCDTd0bTJMSdtPBvuM%2BJv0IGfPY80U6ap3hPe%2B7ua36QkFY6Xu4q4TC0VXPuSIiV%2BghnCJ%2FkNX6R35kcOxKRLtxn2b4nQNRAul2KaCoZBZT5Bzeegckev1hK9mVOh30jqZLdM%2BWt4gsER9wh2opGCk6uqYKwBtbQ6JTFrLAc90gnrTgdKEIwB9SbXv3B72neTqtrJ4dvBoXtRAKNz8wcBga%2FBhl3cb1JL%2BLziTznvZIOGCJ3Bd0KBDyoaF8Tu8SRND3eRGVF%2BGq6KVnhYzo8kdaRE82pNj7Mr1NIDMMfa99MGOqUBp6ahZtsabRaaITUXGRUCMMBc5mEvW%2FRKwOopPVBhhJRVfsOp5%2BEq2og8pW2T3s2lq8dILtBLydCyt2oE4TL5DepwksFVyAT3am3BogfKvmVOzPB2OISs3Q2NDFo2ASlowEl5EhNPYkcOdT%2BJO9okyl%2BwEIhHWwtS9vB15ogNkLU08XLaJKlP25c0QCcwqlm9G90hqlsuZ4p%2B4UiqoZWwdBHnnJrp&X-Amz-Signature=a980ee66d85b7df3b2952277b61fd082fec21ef0ad4f1cb3af5360f1cd158565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


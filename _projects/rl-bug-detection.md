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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUPXTJJ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T225153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJO9mTmolXVifFLU1d46jWruBonEHKWXoUXcSORDR%2FGAiEAuWWF6xrE92zD0JpvNEb0EpEhnEeOdBeey1nq%2F8jkBG0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDN0KXoY8Ht47%2BusJiSrcA54fpXqZVd0WuUEjxS1%2BmzinCeD7cdOLZx7Iro6Z5iNi%2BHXAMzCDjwHEJ8x7EYMDN4ABj25Eca6ST3mcatnXcXEMMo3vZofo2NBixCMX49BBElSS%2FhVNOUgFt%2B0CJU8AaXc%2B5H0uP9OyQJo8JcaYBR%2FNG4d767GrZxH1ucle7ZWy4FnrGPMPra3EkJXuzVofNeVO7igA7FeDuWwzRFea2FHPBgzKC3KEPf%2BjpFpIzsqV%2BzizEeP7FRA3d03uoQoPQken23s6f%2FBSDiGIQMKtGFepcJ3EmdXOpK3DJBuJOiDrLPefWJ1LgT3Khwfhjdgp1nkxNm6zcxOG7QgRYiQzzGUlcIamsR8Abqpg1j6BN24H8F%2BBZQK%2FF2cl6VjNL73GBHPhQm0Cq5XXt7QdFssBxRIAQL9V86ezxDrrJbUlDd3EiWQHHGYXpMG1E5lKwVBJDbENjeK%2BA0U7xnq5SGinz1zzdfEi107ZRf6m4H40z6CFtSKDpqXS%2B7HYY%2FItUd37xoK%2B4H0gejDeCTDAr1JdFC26Tx%2Fuq5uVx7faZ3cz9lK65XG8Ql0u4SKkS9J2%2FKQpcyIAW3Mkt94mOGH2sOSK7V8ApD%2F5RqQ%2FlA5%2FSqZkXrpRyFJfBnCwXYbqz86xMLG2zdQGOqUBemLDxty%2Bfl8%2FNzN22tsNwzJlL7%2BloCemc%2B%2B7YdRetQAmar7Ez%2Fgsojfvl4lwoU6vXfXEExOfD2LGhf1JT5eIwTXlEkrHC4xoqL64xf1cLuqAfxxhYGchWu9SIEgdj5PvOdRAdfJGbR9w5EnM2sM3GSWiZO%2BJPrQVJMtjWHnJM1HcBKFr2hwb9Y8A7mA94V3B0mCyzO98wNDXVOoS7%2F7G%2FcZlxXgQ&X-Amz-Signature=16ed09feecab3a9080fe89b4bf5be9a59500f59862dfd206f606138b89731c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


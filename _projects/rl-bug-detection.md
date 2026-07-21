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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7EJT6X6%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNr%2BN%2BBsVP5YLTS7pbvekofpnqUpd%2BHmpNzwrEtxneTgIgdaTF6DftTzA1TbpWPsppp8OZOCfae9Dkx7cEPU1JUNIqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfIx0wQRJEbLmFRrCrcA9TfIohDIwbW9cqh6eJAJoCki8M0TFlVR%2BUF3cZoJnlDDXG1JNVxvY19vfsUelDDJRhV%2BLAsPzK9A0X%2B7NxEFdRQlPxCLneTeBEj3y5HOEWvarcpuDgA8s1cb2fUNN3RTsTk25VKDVVKYcYZADPRijMMlO89rS%2B1j2cHTAIPoyLBcQyGiEGNUwMItzL58v4rnoixchvsTwF%2BVzA2YEvj2PVv2WRpYTKt1PyykOY%2BXNG7HfKBKkzYWJbvQ5AgZDxKvgMLlRESMz%2FEzr38AEcSaxpAOf6HRrRgtoTpnKGKrUw%2F66Xj%2BTM8SuC7QO%2FJcxzBHFrNcWsJpBWiv9iNmChIyqrbUY6J65XHonW2i5F6hA%2BxJZZ6vBIA3zQ8v87Cvhu4T2yW4TALQaD6ZCi1GDYUdMD7PzkZYOFc8ynOLObAwbkOOSeVjp9lWMbj5Fw%2BLa6XFmY351v7U4jEq4kSfKeXFQN%2BRAZRdJbSGUnTNjsA56mSS5C6tLazpr9u0HO801ba2ZhyADATYCP93bN6COXBmtXmpuNM7moo4mlNH5R5f1CKQj53gb4uEYNI6oYU1oqSjDzgaLT0yGIrDl8IK5odjXOqCinhgOKyKBpkJK2bA7q8zIMUYKn6lnzMjj2AMP%2BN%2FdIGOqUB4K0zWRarq6ES7U6So7SUPj%2B0kqDGW6PegkMQ7DA4XWtGbuJabVE3SreQgC1j9eUOYQLgOKqladBiDPiOXykTwuzXTQk7n2hzaqGSqNm090GmoPbQBUmhKgy%2B9lUYvYudKeEpZYl57TE0CaAsl73GHYljb31mvjLmDeIn3hmImhcasczen9UmixqOx7Eo1mwLuwGZ0iLbS%2BZi51GMEfjOXHyxlu1E&X-Amz-Signature=6fd26e04a4816507c9ddca73aeaa90e915bb35656225b40a4964528c15d591d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


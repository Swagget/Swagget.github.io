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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XZMID2%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T214452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQl9zMRzEVg55k%2BTYJ9tmIpnguFYvh9fKWHWkGOEGbGAiEA5cDT6HpnWk2EJK%2FRu6CyLI0tDjj03xSH8zy9TyaGJM8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0QOYzhEGj2RLxaoyrcAxuyCVVu87I%2B1DJQObUbKa0lCC0q2ZjU725J7113imkjJWarlBnV8CqaXlKJKvrCguD1XUoSCagtfTtNx%2B9gWYHpnGK1mP5%2FnoyVW0v%2Byb%2FAfl%2BpnKvPa%2Bg42XepPy4WyRGUPk%2BIZZLsYpXYxjJe3sxHrDDXm56ngCdw2NTycHjTWwnTfaIzAYaPNKrqAhYGHyDde88WR58udHlXD8GGCvV%2BQcR8%2FbYtZfBL7vXStKG1YPFLaSkrow2EKtdmxYzP%2BwJpY9CxOwmx8bMXm7PXkC1PMOmP4wtuHQvFUYtED8%2Fgxd6TzwOGXQ7Iku9agttYsaGPubxk3sXz4CYPmexDganPKmLOzTcvLY3qeP127RVUas9TtY51x%2FujDXm37LptzDAxGO%2BXBwNjzLrOiT2nOZogbQyVujKjbpdxtQTvvpL6fqR53wnOEthFUyM5Tqzh5FEZ%2F5lBIq0KkJqduGwnN0%2BNLabX309Gi80stwuuL9YRvHdOhw%2Bji%2BkZtGb88IMgRouiAK8%2BdaT6bE7Rz6Ztf%2BRL40sxYLysPydq9hkLylo%2B6YH496jTPDl597GJOcTT6eLOz61fwGalCD1OtKSsbSRb04BXq6YxttN7IrVvjpB0AH6dj2uj%2BCrYuFuNMMH5ltUGOqUBtFG5b%2FVOpxbeTYaYwRT8jrLcoG%2FxXio6Sfdpv35kQKmRhdemr%2BAiwuEsvxns3nqstsJqU%2BnZz2lJk0fuPTKpksFYOz39nSOL2mJ3kN9SDbb2QBqoXzA8%2BlpAlyJqKnUqBDMQ%2BNpSnLjonkBnO0euQq26WBG9S7K11RT0Ftgw2GXNhHgR2wpyTl7D%2B4mOf2qvmvCJ8WM%2F70G7j0PYeLl7D1DPw%2BEx&X-Amz-Signature=0e3e5b375128a97e8f8fcb91ce8f89f28c693c6bd870ef285591f92c79f853a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


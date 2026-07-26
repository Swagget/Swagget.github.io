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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVQXHGB%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T200155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCbAOyC%2BhkjBowvVolaHVoW9Lwo62%2B8VpiUXrLMdw2sWQIgVsb4NPlkA2aOawwX0uiiR%2BWLmtuuwSHq673atNj9cO4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLYqJNjHr3A17kxP6CrcA%2F9YMmBQ6sKkagPMWITDdQoPEHwBq4aUFWoDxCyP9K8Yk6CEZILz1RpYxE7opnMW9mEEDGtGvF5faUVe6%2FVw%2Bil4qEXhM1h6u7V%2BaPszxKo%2B9u5L9w%2FM4ZPD9zRRrdJMaumwZ0Sg6kAd%2BOzlW5rLsukhqFs7qWN5iIsjylwRahi3Z07lcWqYxIExSJVi8CBxiKWMZcfQki4U7H51tsUzUPqkAoqBewdrlfyNMXw0dUFu%2BNog0peSVyK9aTwc25KhKa660A31FHTuoxNoDyuEQJ09o3Yc04KkgJR1xLqPTnyMEB%2FO9OZlH%2FWUO7nXHyAeK%2B9z67CRIBgMQ58Wr8QXJzkYlKUXvumqQ2TCGYpohlQMiKimeGm80vWNsVTKjPepHMhkybI4wxzf2FcI4kenYwNFwbATpOLuBz0kxCHS1Ed1H9sShj8ggYHLMG3YlAPEF3t0ynX%2Bk6tfQ6MHrzXZQpgVu7qkHDoosBU%2FuyjjKqOKuAHL%2B1FH36Ib88cBcXm4HdkXZ9tv7EyyaoCxJ8Jtkv%2F6XxGP%2B8x7knlp8UmgZ8hK7UWfiasp0p4xHoeuTOe24eFD8mT9dsDQN%2F0CUkAjLMu5cu13Fgvj94Ir8gK7rfz%2BnLTNV09HF6eHHdlpMNfomNMGOqUBdRTemROBSX9vjwFbksXUywLDRS38ipYt8eoGTZfXlYdpCdWq7UNrlk93lr%2BPTN7eP%2BNclSY8RTUeYC2i9iBzpebNZFch7WpSOw7axwwgWqP7ER5e%2FoE1jr%2BfJhDGA5mxQgkdk%2FqzgCgVRS1Vh99okalk6%2BmrN4cfWW9KoZZKCrwoxuqZLT8vKQa5ekVO9mjv4PNPnzEq269jVUF5Wdaq9sOldlr5&X-Amz-Signature=22b99eba3305f1775f50dcc65051a58ccde006ae4ef1d9794b28bed1fd071ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


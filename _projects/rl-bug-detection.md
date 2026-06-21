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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4CCUFES%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T171512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCcsBdDJvLmqOY%2Bmuw9Kh2KuIP0xoQmr4FXo0FdI9Q5JgIhAMnoy6P4d%2BVGiuBckCydWa8s4jLYUebJYZIchhtGP77CKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIwLsCDhDN1ndNN50q3AOTOPUx%2BUactEf0RDqDQS75Si7D2Kj52IauBGPCoHUOTNlHjbLLpShNviaO8dIau9sjbsoHhMcXbut%2FHbUZi4nykeysxzrpeH2vK8CnRGUb5tEhU5Z13f9TK1ofWDIl1vTrrLml6iVJMxQ7gma0mpEYV7nXeiaiMkGrVe8K%2B%2FRRtLMW%2BwnU%2FdoeeyFDbAYLBnLOVbUM3jNgz3sC3uqs%2F6Oke0Wo0IzWpdWQ43FoGjoYVACvYr9tglfvxm%2B8TTDoKX%2B33gCEtcut5e76Esad6kqq4h8zLxw5gkBKXqqt732ylJjxm3K4luKvl9QNTL6CasR1hEMWAVcK1NWvIRh3PS2oND%2B2c33u4O%2Ff41sdnpDzBPaHWbMAGt84uE5v7JL%2FGC%2BbWI2%2FH0cS4ldqa2RpshZLV2sFBko06Gh95T3QzG2EdNWP%2FmgRPc7CFTVZLt8nSRGlqaKlKwsI%2BdmQhPJjcNwbSmiyJYz8d1IxXJKcxsSK1vQF3D1KF8ZkvA6F2c0sFw5egvZ8IyzigQUlS7Yh5HcyjXO5uDzJjDDqqM64SNxezli5KbnUUSV2rA5Zb3EbNgHYoIy11lb2vmJErqd6Syes9y18RkzonqpxyH%2FX%2FP6QQJ9CuyTivahNQSNehTDDjODRBjqkAQZD6Xl96%2BiY0Esu8qCTNvSmGzwx4iFMS5FlZR%2BlXhHRn0Oy9NW9gxxIiZs%2Bx0nnCapp7jKeLPRAOQLb3Rx4CSEqc3WYdDEX48ot3k3Veb%2FJss4jGJJgDrHE7AJOywx5QNRd7WynlpwVoromOjJHfXPf293QCUNAZ194%2FLIjiGQWHMEWC8LIPnfxQ3kJ76B4aff5x4ksQbvuBL94iEaEWCsykZh2&X-Amz-Signature=fc14d851c6b319b8ad98354cf602514f0cebad9e9b58780dbf05d08da8e7c46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


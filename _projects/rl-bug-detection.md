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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IQRMBE%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T174340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCFpdTNYAhXbfG7wvbcLVAeb0fdB6L5gJVdVCr5m0oUEwIhAMzXNRorGbUu1tMRyvSSVIs5iK3TdPhbLZmEf6GlipTpKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwde%2BrGoQuxBUr3szkq3AMUSaXFaZCACDRXwt8lAwcu%2BNK%2F8JgAs5xJHN%2BTk4ZOKBo8dDGFcBIAZyJ3bl3Y6gimIY7jGShda8eSD2c3iMlE9My7tF%2FPHUQkqGxeFjZsaZJ9ffXQsaZHNkI3STTvLKV2eR4UvlDGXJEK2AUfdP6ySpGSrJngBWiZCgIveXY%2BzuZsE29M2rdcQQCxk1oenqIbdQmabvd55dmP6SqWFUQmFZBy5LBeJKdkNkP1952WwwZnnNyMcErK%2BKYffdifoyrKOuGxmWGod98efmhrxN65g%2FDmRyeerkoMwJc0b%2FC%2B7BHRdeyeSVG4reir14HqcXMhlgovzif4%2FoWd88xocTG7S2N4jmcoHtpVTd6Gbh6dUq0OOnIii963YHyZ6oJ5fDObaqhf0yJYLE3i2nnWyLEQuo%2FtCKAGdM5jtYYxYmchiyOiQuOG8Ajp3Uq8VH8aqPcfwOvWKENuC0SK3LEQI8q6FVx1oW6Su5IdKwweiLpYrOQqinwWMBY%2FiNIEHZitKTZfhOBjVBC2gnIq1TpqjHTZ9BIX9XBOkxGVzemmc7hsQNZs5Vdon598NBJZWqI6fUL5JUaWAOZuIKdZ0orv2D%2B4EVR%2BdNtQafUc6L%2FJJPPPbibNZEdBAO8PmW0EYTCovsnSBjqkAYJMKGnjNLpA%2FbxVicYYq2gEYM2urU21urLFAWEDysFzezzYwZfF4Pyoqfx0YnPROqMHAv0ycOiuiULSKdhWVEsV%2F2vqmJFkkR9tJ3B3qZgLNEsi4t4IfL5X%2BXvVJ9ZUkKFRtxTowjHX1sN7LLG5JdY%2F9BL1lP8sfecHJg66DnvQ0C%2B%2F2nx2PHFPhNonVV91XUEGpoOPIEhMRe5QOiBVTHPs1KZQ&X-Amz-Signature=6fa37fe21ee224f13735d5c3e55d6eb94bd4fed56190ef079a72ab9be0294845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


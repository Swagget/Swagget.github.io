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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJ5YZZO%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDO%2Fm0vBtffGIH7kVvM4Ah9iUl4%2BJ6YWdxbACPBdDpCWAIhALSloK9ZJioMx60QByR0LLhrdbYY8boTCFwRQzfmReQ6KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbWCToemHaNMBtleUq3AO3QQ6QQbI%2Bocr86Y0gBBss8a35SzT2S15fvYvCCeuCXCECs3JLIWxqy8RydinpmNpLtuogZkwNQfcGFiuF7L%2BaiH5EksRruowO6Ba16XCXupaRH%2BW%2FEDcZ7DXXhB6WAGAc4xjaR6mA8oAiGSMZ6zT7Dpxfe5WW64QJ8Xcnb7vl2xsWGczPVUuk5OPjGo30g7CV1pkAKSHXfTQ3rHqMwf%2FiQExyFMO%2BIAhfpiSb6TVDQgyqQwdviXk9LhpLN%2FEh4tvzBj5LfCa4cUO4qyARxMheDQfuOI2wuyoSJ3Gaq7b67gJ7jBwsLkUlo6YlTiUoet4TjWBdg5ZzDxKrIas1KxeeBGykODOZ5w9GjUaHjBItyalahiUmNMNpD6NXT%2BSgYlNfBAkBV4p5sIPbsr4mENv9qJQg54PdcBJYSadj%2B63N2HR%2F7GV4SqPS7eDypPbeIV8MllYg9Fbv3eTyclHD%2B70R3ynH8QFsI%2BHeezrnDleOnptLW2%2BEIUcRuP%2FX4M3MjFSTVjRzEco1HIFAmGuOHGT5TOT9JP72NNDcp7gQ1nksijrwNGKdxztvnnGMXeVBujsSYb4nbC2Gvk8q2h%2FRbvWH8cNDuYwqDoTprOVUFM3uSg5bS7E5cNF43W05szDvm63UBjqkAd8DrsHNezeWaBdvDGnCOUqZ4dpvyPAbQHS1tmp7lWGi6%2B%2BKyQ%2BKDPUXeWaMAP82t%2BYFogDD1cR3DuAYkSJ4BlECEQPYf2r5FkbTzo7pm51k%2FF4hEFQQin4oRoPxMtKaxTq9ZU%2FJBPiQZKwHRMRMhUBvtqBK7DZGuXRj5b72jj2xv9M5xt30OfthTvz3fqc08wCjQL4d%2FVvRzHMVPc51V1wLpezz&X-Amz-Signature=00ef92243e95d4397b2a9ac58f47093142643c87a0adc1852b6243124479bb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


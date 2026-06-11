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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNX3VVRY%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T051824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCdaiTxASbqjSh6ujTe6zJ1rOGt9VrO1hbNuMLeIC5OugIhANXpakinVpLegMkc3A1BKEDXcy8vgsYXeqYR5GImbGNXKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0E8TA0XY7FT2ztxkq3AMPiu7WaC8rkgrBvI9LBB1EWroOEX1HucyQ2DKYuvdtZXVCN34oW42KFWmdTnAxjePXF%2FJSHmViUij%2BMzSXWWECLbV8cAnf61VzC7Jf6jl5nlWt8wockyp8rWaiJdpx4Qk%2Bi7lFRNAM7g4FdOuPgrmm8czICf5n2hXwiNgH2cBs%2F1Ky0Aj2ofAa%2B2hmJxuYY1vs7hQhsh40bqCE4xhVG6Nso0T5txmrR%2F04SIj6B0RKgfnNArzbsVRHj62sf1I2WON6MyO9hT%2BswQ088Ua4UIsMoGuq9eU1P5RgZytgKkHYgVOIVApEefp1fk9hJ%2BbKLADdRhlsoAbKTJxMOyzEHx%2FHdkzONtlzvsEVCXrgLFTeysm0JgVQPRNBfDO%2BuGZXh2HBrmSCIdcT2w8I3%2FSexy3dLngEVN7frfqamStUWR%2BkCLkJ0VOJSxFXGXRFfrOB6lolZ7IIcJg2yScCv8gi7H62Yfh9OuQhgNHVLcv7rCd56mbw9VUfNqktO7SIf20h%2FzytssBxjvEwR%2FohINyDd6GTYW8gKzLhAOY5EjdBZfGFXnBzygChiixSHJhCXJ0KdhlKgBYtvRGEb5ZIDESGP8DaW5T69WciZ77%2BZflulgJn4%2FUOWTbGiUIi%2BY3enzD59KjRBjqkAZh3Yydq7eSACy7VqlfKrkplMvYa1mkcnHIIekhCYWs2DPgTUtSQS8A9lgAhF9OqkwqL1BT9bobUaNroRKgPHsQNUAj%2BwJFRkukDJE0ZizU%2F02xck5Kyubro76yOIAXHQHzt28DbLml9xKl6DwY0eGaPz5qiZ77n1uZ6R1f5UjtvmS32%2Fsxtx42QQ%2BeaCVfc5kIq5lElo%2FZmrHUNdRpIFo6PWCmB&X-Amz-Signature=859d99dca73165e245278f07f0b1d437dbf441952ab81b29de6ca052dfeb630d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


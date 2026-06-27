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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IH4GZPZ%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdqgT9UED46uQ4ocMtKav3Z0yELt8rVRhD5CEsr7inFAiEApdj8%2FvrC0hHX5wAIbu51l8Af%2F3KvTjsklcm5w1%2BZv5kqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXn3AXQQ8La945RXircA22V0aOSQQaGvPTRPajNLNaQgNr%2FkiPWuHU31gnJhfoGmBix0ShnSqPuLQMUZ8Rk%2F5Y7ufpsvSLZIPxTVwvQV4dVfjwrhdvj7FZzk5P3itCVTsLL7t2f1rQuStsrSpcJaUAxxbwIRiPlpSi0xlBozE9vg8JrBX9es8zpbmQTKThkMq%2F89J29zhb0EPyCd0Xy7xIoSqk%2FSyJLcyGn5Bm5TgUsQ4stCbaLw1BOOaLxq4eFV2mUjXvzNjAAQp91wM3VzwikNPDuKle4ODMGlW4oX5gwbAzEM1ABgWJOKHhjio%2B%2BbJyzue%2FtosVXE78xp5LUaywyur%2ByjSqgw%2BOD3PnM9e9tPbDUCVnO2neF7Bruuiegg9BLeEiaPaaf4jwgvIjrGToV8QX7IpmfNFvXZgm%2Bh8khoWpBhKlN6gqhBsunbgmaSUz8ECnm2Mg462n0zv5guAUEC2PJ3jyYKmGTxVYyCg1zY108xu6vP8PUpupb%2BMu9Pfneo4k93a43rpXTO91cQfu5j4uKjfp9YLKmwKdP6UeSLB3%2BQ4VLVy0jsNuKVvltmBmQJX9kvzz2KWUUiSoerpFqxziyGqZsuzv6UPqolDRISk0sNg1lrEHhphjlB68jHmGqp0RDTnuor3%2FHMIWGgNIGOqUB1AyavSZLIXJ2vsljcoxuACYNoArh%2FoKfEIXHm%2FfvHvDWpQY%2FEBE5TO72qm1mhFiW2gvehynyhskgd4MJ%2FZYvGK5FPP4XSSRV3tHR2yvkMwFyThhLMqxo8ZM8PbQho8LxFKPbr731mMkmhmmSzY5aV51LUAdXX5jE9rkdlM2qkV55dCM0RfDYbom5PS0PTAmhacVWGL49xDdrMbjimj5%2FlIy8j59d&X-Amz-Signature=9f401d2eac9bafccdfc3a1725b190c9114a629b9d4e9eb8821e83297e6110455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHB2J76%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T175721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLn10cohKxtkiCzXg439hCbQHWL3b2n0GP3S77uWCGJAiBeU3%2BU47bGHa2F38Lt4%2FHNn%2BSTvPCWcxZRwUM2h25T7SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyBeG5eV2yRw%2FadwLKtwDhd50mJufMKXzgZjVNXutvMPWwlLsEKtfcihxxiLYIgXxTJgU%2Fxo2nE3RUPS2S1IJTRSD0uYviHNu3JMd9Rs3HS8c2ZVdAMw6ttBUutpdAGhmMypwNyhrbAHqQchHfZVOYGlG4YnBY8svbi9cNT%2Fp%2FbJ6ZGKxQP3XXRSa0zn78zzPWPzpmDBDaqP1uJVtq%2BVzk70zBC%2BGEmirdvP1KU2TLbtevkCZnVrBSYUYJYMDrkulY36DH0I%2FROrXsVp24Vw2YQWDqyXhgw0fhZpNMouR1RwsN24L%2BcRmZd%2BqfNAY23OCWqHP4D8r%2BedZa5bHNC%2BFd%2BciczlXcm6852Yhn9%2BOBoUry5AsOrsPPd7xUmE2Nc45NldYYjzOAWVVN33GoNljOOwuoeRydw6rcqnTYn2ZVw2J8%2BfVl642vLwekNHUpC3EhgwQKNYTaBk%2BQBxIfsqMzYxbRGGPahk41Qiisxz%2BAuoI%2FqhlHCKqiszanXRFtskM7qK5c2EeERi3mQtupJor%2FFKQd7KvXhZkbwkhTdahLzpg0Mi%2Bm%2BmI79CV2PXnjyxFCIRPQCgBZWwbMVGGTEg%2BD%2FOGTjLxsMXxBTSGwTEnIMR2xLCvQfkh9cOhKo6AT%2FVePFvDzF0Af5BjZ10w%2BqyF0gY6pgF8TffxhdHNkktN3elKec5UtK2am0zvQdc6L27e5SyKynRHYdLCLPVqY4fRM2%2BWGAi5L6daKGlfjwJdG7DRXdC93e%2B4v6ZCmlgDKJh7Lse%2FpH2VJYnDAfBh6yFaaaSvMGvcF4bHRN92PrroHFXI3Fdxl7IU%2BxZubQhwPk6agW0xHf3u0pB86k5H4SvsRXm4lYcbbZR5YLGFzkm%2ByQKKRuxNL2IrdEPW&X-Amz-Signature=a03d54ddc9cd24a0c32c55de7494e284c27b3febc6e843d9edfa71378dfb90a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCA45HBF%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T185105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH6URuBpelf7U3aNPUkJ6li3cyFodPUEEUzA3398bZwTAiAgSbtKiJ%2FSr5hNejyxgIzbdeLNGASDKAFRvnSUPe063yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMArLj3lMiFItYQFxHKtwDDFCH4gmbzv8%2FwRWsDH8MHH0SMWzSX6QNw0%2F7w5DOiPpkvOZWHjXCmnEd0zhNBJUEV71d8hh8YDgR5ygbKo0RR7WCGAVmUZB7U8Hl8njpiIRfOdcC%2BWRTNurKS1ejYt4g1aavQh5F2D%2FEuOfqOPMI5eg2a6lkzlFZCOZpFYxBhQzXYP%2Bei%2BGxO2HWdNEfWMbKeXuM4jcNgwCxSVf3Gs89VNT2cNDa1gtTYIvVnYlDiSz%2B5Id7PpXwTzl9aZ%2BzNBiEbhca8TKG1GeDNS2IrntB8TaWCmiBR8uR2ip0dhyFbrNDHcezK2t1by1Nwcro4jhoVJV1FbWitZt2dRLrDljfvhgz7QKnq5CrvaKjFH6tqz97Ey133uQvGHxo9%2FOMQsH0bgEGwLhbC3ZQPrmwIo6nGE8M0850OZV4SSq4XTWGmvOB6WN1%2FCqor31VknZSPY%2F5ijAI79yC7ctdJXDOaK2jKOYUCPg6Nv6hZb2kpIpwYKKvNbkHqcwcBRxlrhllAMT%2Bg660Bf3tBGsevshJ%2B26l64Sk9IHKy%2BY8mlc2Zg3Df1k%2FiFYBmdEYVkfmDNDtVwr4RjAiZ9xcBes4gg1zuRpMIROD%2FRl1AQM%2BY3BbigVtx0y%2BdXeWpGIGTTGseb0wjf2k0gY6pgHapt79s0WX09LOUdW0Vv4JTD%2FAXmREBgySUztnASdRoVhf5zxPiPUCXJUcZBToV4Qjlf3Q5IDa8ZXWCkRbf1GTXimkGfo3Mr89fDmH9f7UzdWGnls7eSZ%2BzwNpgPpNaTptv1AZRgM5eRX1Wm1crAoyoDg7loBqQr2rRjrB8RaXOMLo%2BLgwgzbdfbZt3fL4u2sZjpYD3iyK47EW0nGGw5Wmy2iFJPsC&X-Amz-Signature=fdca3ad956207ce3021873e4e83d19097b295e727059bf90ccc8f9db731a1505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


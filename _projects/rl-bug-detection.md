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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLJJGHR%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T042445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFTKsjZr%2BenmaXdyG707qRfY88FbLA2XfnI2UwgTmwMVAiEA5a52XYfPeRIYfAGUAByvzz%2BH8%2Furb5%2FXmyW4wM9Xw60qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWd6p9D1iQFvpNS9ircAzBH0uUJlIUx7sh9ORuKFCslaXdMLYRPESXpsPgON6JplcBi0PBVH%2BmFBTatWxlIbZMplqmi8FtMo14xvMKZ8y0X%2BfPZbHqB6UmBsDeraVH6MKMWx4lKlwM6ohF2gmQFg3g0MxPHX%2BVdkVEAc%2FgbQmdwsnQGxKrIoE45pmxOvnsObUpJOYM2vx19rTv3rHZDfCV%2B47po5%2Bl636%2Bo3MqTivU95bMJHOfRcS1pD7kajl8Quad8muZhYjFpOCN%2FXkOpprTrQYRzbdpq7Yhb%2FmyLmEm%2BredliSwgk0k%2FHmv3L7Cpq0We9WvAUp7Cr0xn684Mo3KdXwbQXglcs43UsJ4HeH7RELFGmWYqRvHKaIKLdO%2FlPbRG8UlTkPHqHovfkw8Zp0SMEnQdrDwyaO3Z7bBS5s8DtpMWlOGyVGL6XEf4%2BctXPcz1T3PLkbxULP2YbJ7aANtjoOtBUjZUtDs7bOKKCUdLur9fxYiDjA9BMHcW7oSTuXyufA%2FRyHHYBSnKsYFZ1N5G%2Fm7AeQXCKHu4uhy7MEF06vE3YkQIdggmEU3AcTEUgzBMsWD54tnWOA4sAHieAhwEcwItDhp2Pw9prF533fEmoa3BgHJAqg9utayeHv4n9%2BJTMotwvlMeEmkFMKC4qdQGOqUB5XijHl65HDmgyvNkVbq2JKaOjFvVRY0b4jZKlp8AKDmCCPhhWFlDo3%2F0pMRV%2Bz9HbLt1xYtxJzIJcfNHhkUFrKSbcBax91%2F5AXi0QoIZ6uuTZ%2B%2F2GZrQoKjiZMkxAqQpSMZlLThX7%2B1eSuPVqbekkAb%2Bc67IfJFz3xkUPRN6ZolgESIa8z63K0IpizGvXOdECAd4nCIcz6XL0vHtM%2BhACxiuiRsd&X-Amz-Signature=c910809d2a76f0694c72d99b66c2ffd7595a3b89ebdc65bcfb2b5d4a704617ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


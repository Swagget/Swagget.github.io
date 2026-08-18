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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AF52MF5%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T091940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeZLL8sFaNn5LcK5gIs8srmk0hmbE%2BQv7btchXS5K1BAiAFIvRYDSPl7IeFzkxbz%2BqonjbR0zUAxNeFaAIohcLWsSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0AsQO1S2RbtlsdqnKtwDFpElJUQcWOEOjwu3wuufvEU2Y75j7seAInrdxfjHxgvxFbH%2BQSbBAs8QIvHxjiOOgVUuDms%2B%2Bb3qSgaVcrcXcv7E22jIwrKaK85uFJL1mGzVq9YEorrAFfPqFfTO4aAL0Aex7PdRrkuWAED1MJRZl0xUMAQXHuAkp6ah%2BnEJj5RCLiOmVo3xzWCd5bB4siluUwzACvXTF5qM4hZK4rY3HyZQWAkXYO5SSX%2B2S41uI1WzUNIQf%2FawvlwQxSrT3faaUiBAFMRbdtNxfmZH9mcZazspVqb1eoNiKI3ZG3kOYgGoUJokz0i65tg2%2FrTwL3Jrb1Dd5cfoIs3Zi48yfOsdoy2MAO1FnA4Xr1tvcMsUULMwYfuU0XG%2BzddjqZCuE3VSg9%2F3i%2FNN9nv%2BeHvDVCgOalDcKCyHF4dvMTRoQFHtJAiPgdCK1oS16yzLf%2FcF1RGLVYByuw9dOT76TCbGxKI08emyuWIDYkpjrDxdZOjazUE0cTVaITwJvIa20cMIoCv62qpw8kdxSKMpFFMljNfGTxz%2FobFqdPHEkWT2EVcKV0bKrxfsRtZAc%2BJ5zlvEZvT7XB%2FA4j5fSrcUNwanBD0MRABeaCmVSBlOwKTq7Wt1jXx2dP7Xsfr%2BzJYKeE8wwLyQ1AY6pgF1%2FOxiwQolvCBjno%2FySwgOnHQPXE3vqave%2F11BpcQD7bQvpC3Ttdl07vZGt2MJh4MZs19KrWeB%2FLFz2UN%2BICT1CHlF1Wjo20Os7I5bcz66WjIgbc84gDRxTda0uWc1K3i1MJU3%2BWhHeiXFwa8gT3ErpdOyuXHUD284PR2SUDpGXLOqeC5HZrZoLaHlDwQb%2BIclgsWLiXRXVfluM65B4N9PCVUtbsZb&X-Amz-Signature=68e5539cd2a228514f5f6412485526b03fb90b49e83d1266bfe71faff51d0e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


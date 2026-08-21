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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7SQRP7%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T171709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSWlBN58HdU%2FBk5es72vcqi%2Fm0XA27bHkqCbxn9Gi9IAIhAL1m4fFLrBIefRGpSMYAfyhwGZmaxiKxMGUW%2Fm7p8CRTKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCFxyM1o8Vqll1jGMq3AMtUfAr9nMVGnnEUcoo4f5HrLvCULPANA6Vhj2u39xPHcCvHFo5DJun5lgf06Zt9dIKirNM8I31Gwk5NoP6EeJUY4FyUVjiIW7f1KVogM%2FPk7V%2FIvpa3Mfl9xndP9sS7a8s60B99JS6WBBddA10G1E1%2Fh576VdGIw5r%2BYiicQ%2FpPjzCpAvMttujYsxa1W0n9%2FR8TeCEW%2B2F0K7usJsdrQY%2BCygXFqgjCCYXgiVwuVEGkX03BupxT1lfBqNa%2FUTXcQVG9%2FKG7gug7P28ftEtl0b%2BKDaxYHAmImvicRokZk%2BvdyKnvqh6tjS9sgfJDQwhGzXLcMOns%2FJejiTFDvfySBNzNu%2BOZPG4aEq4JwVLp4vpmiY1H1mZniZY8p%2F1nb%2FhWlV0uysepqCc9%2Ft2wpvIG3qCnbU0VKfIzG0dmIk2QnLA1BmCA4PwIJeF1DkoEa3gxNtFvNKdFPRdBqNJsghlhhJunCaTHy8jLvogcyJ9vSHYP9oDwhBiNDq3gYKOfvHnIQLW9MAGJlPCHoBO1hqoke%2BFM2F8vDoJV0tzEIrdgX68OOf1Wcw3ge2DArO%2F35EhGnWNtOfzLFDayu%2FEmDDoHWu3QvqFawDEqrfOFwR8Frf%2Bb3m4duWn2dCPo%2BOfYTCJ%2FaHUBjqkAQaqCKi4x8NaeC3k8BG6TjfC8QbI7F7ep607%2BjARdcjavo7JJ5CP5ky9jvlrxo6QvTzHsSI%2FlOahb9xqP1wUnDdbUrBXqSjVecm%2BVeXJSEEzXZ4y%2FDU%2Fbz0wqd9GcCVIVQl0tzcc1%2FlI0xgt9%2F99vjDMJHtNaiCjHYvPrmPl6uRqAN9vnEvmR9mmYH46UsJoi%2FR1g3fSAChZTT5whRCuv7LcHuEb&X-Amz-Signature=f676d3289bfb8be8c6d2fed1861657adc6c862d5c90ef40e83b93cd7c0b13484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


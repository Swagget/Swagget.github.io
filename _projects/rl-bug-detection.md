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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5F3WWU4%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T225554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAVIZiiD%2FCD9O69A8ZiL1CPgp9V%2BpWNs2ESfGBAMkyRGAiEAt94pi3OZLJJOG%2Fbyrm38an%2BQyx235SMRJjZ%2BcI23MOEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdO2ktpOmad%2FPsF%2BSrcA6SycIWKSUOz9LR9s%2FRsrqHbluR1GJ5XEkdlCJsCtws35U1QJAo1Hs0Zu%2FChlGH5LuXlqcNswG5Vc1EodInJDBqAr22e3F476lV4Yq%2BbKpv5LqwT7d6nfRpXW864pVR2phzcYfo5AzING%2BTTczEP1EyeiztMvrgPD51GLd6Mq0tFqSbBnCJYUPcTskUxHMMbuLcQibEwMwhIhKVO8BkTJl%2FYE%2FSl3WINJzaNBCjPCAT0n4izM9Lm2SmYkvkfErxio63XINuLNhqRf29M%2B0dkmjBsj%2BrAm8jd4vctHT1WaxwIJH%2BajmSr2ypjb4kPxry9Mh71i9pCR%2BtY6shrvso0g3v38WQxuj4Grcyfw6hBUzD18miZVZGiXTkv7wPLjJF5evlA6Uk%2FV3HF5CFORSxKNb2zf8aSD6zd7avnoa695rGe%2BJ%2F7lb2zdZTSIPHDZwbail07i%2FWAR%2BZBo6DRxD%2FWNetlBXjsR4blCgN5ohbA7jnXycFZxZTvDr0R9fPuFnjwU3tQu5qBjZnRHYMN1DaUx%2BGKKlDcWWt%2FxIwfsiUlW1f6LIy689E2YGoCjXxnHjfMUXx3v8ja2DzLOLl7%2FExb9wnBrNVBD5TIG2cqXgFBnTxfEeVikY8JregSvXXSMJCZ3NEGOqUBb1vyBEQSYO72Kwu0GRH34ltZuvJ77bZmfvwi7%2FE8zpKdzhfWHQW%2FxwSIzL%2B4jf4%2FiJtJGVQTTE7KNQourdWpqjQ8smcbi4I3MaR%2FLKKAWOkQ%2FwkYYau%2FJgZA%2Fmoi8Wd02jVjF5tHN7VdvzU7SOOch1U2ijonUVM7g31l5n6J6O9Rnx1eElEmIGzky1RArEv2v2lKzzljOQIdEv9quD112kQLY%2FQj&X-Amz-Signature=86fc0aea418426e461ca8dee7b248bd63938d2175aed0789a00725ddd7434789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


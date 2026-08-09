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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNNR7PRO%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T102005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHweAZ2b7ykY9Jnh30xrdhg%2F99ZCk27fvbxzkTHsrjhkAiEA17pdtozIGgE4QRoX7sPiXQwhwGjrYVf2evx0o4Nw9P4qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP%2FQPM2C6binbixPCrcAxvQRW02%2FN8Ps%2Fdgni7%2BBB3iFby1a9rOqwTeZbsXR3%2F0wQ3A0Vgavv5RkwHcmC3Y6Mv67Bi3cqeWK%2BcP0eFh6%2BqQT8BWMXkVUJX8muCQPeUH9PHMxCQkSo%2FNJEbgMMI%2BNG9bXyROIzeFKRlkfhwRHCENPUXXxFr4wIN%2Fr8gjRaN%2B03OytowFgblpTnVHAbBJkB9ZXt6OrlMcXXa7iBkU%2FFlQE%2FkEfWfM0icdI%2Fq6N7Uvc8upijl9zgGAfr3YoWOM%2FQBL3yrKfZF8y8QmCVySfTtb3l7S7bHgYuBvtNFfXximGdFH1KIh6n8KZDJsx%2F5SSKc%2BkOlj7g7RsCwEGm04jQhLEMBA%2B4d4rDGaxLJNM%2FnMim0Qj7UDNVXJWQlG9nFxyiDZdqctkcB5%2BeI5r0KRWmySk65zPufo9VWDkpYIR%2BdrQmu%2BP13pL9BYzvPEoreNswJ6LU8QHbVXCUzf89J2tLx0brLUPbaJoEHrdwwXyfcIdAQWCcO%2B2Zqm%2BypqI70KHJWSBSj%2BwEyzC2LV9Gq%2BsTeoINbamPFBSJCezYhKVatpHn%2FkhIVrTt2vy5Z1Adxc6Zgsp4oiQOt6t5unRjyLnSI4X2q2X7JNaVaK%2Bbw9Hiz08MWQCyBKoGVG1UACMMCi4dMGOqUBaQfBPrAZ2beX6ifQ1h4ETfoN6AmBWV2bd7is058GQKYt6l7JguLcYHD%2BnZvx9Omwo%2FfVUwRF%2BjXe%2BJKYiOpW8CZYR8BQecFevlwHasQ66q2UelbSYzjHu6e7UiLTvPj0tiP2qbnorfQTQJ7g%2B2gT6RelsmKxSFVECVChlTAWRrVOPVLN9NDZ2ch%2B%2BDJiG%2BVYvn9gj%2FF%2B6q5Y3YSib09VLgDeb6Hr&X-Amz-Signature=0d06f8750a5a7cc882bc798db37c50773e3d4cb08ce89b4959c5d652a293ef08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


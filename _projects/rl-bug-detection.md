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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVWBG3X%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T070348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYAZWw85IKT%2BXHovi9oG1eN7HIWsTOqdKNtk0geWCHSAiEAmi53mE6jZH9pRx5fM4%2BY1FPo4OVWAPzEoAr5i2hFgK8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOTgegp2pMJ9wjGNCrcAzJuHLtdi4VMMWP57A%2FUNXoe2IvpMEhKFABXk4eJi0LUN%2BFVGLxro9alWW0SAfq1AtJISOwdIN3lehHMh0h0wfxlebXkiCa2fCRXBcofEPoAIoHA0eJHcQAufEn78yeOiHRZ9IBvJGWHig9iFtTl35bwDVrHtrqNPUPIsEyR9PzDw5RZl7wfnX6jRED0G3PNpkNu5%2BJKqRbKX%2B5ikhAOxsel27gOb3ISTC9wEjmfIWTjINpGguR%2BmrcT1Yjj%2FjkOQoQ61M9CKJIv5tZctysZnWzWFAuOmwpxC%2BkFKjYqph%2FsmECcS3sdtLoCPT7ZOu%2BizqV7ypPkqtSJx4hOt7%2FzFIzwhQIGab9PuqGMTgMyd52g8jU6o0U1eZK6UNiLYU401%2F6%2F4DY0ch%2Fpd1kWsywD%2BWwGEHk3GBlQfhKlHheli%2B%2BkYpNvLvZCYFYwaLd66XiCKmfByzO76AeMw1orafZ2pHfmxgm73ul31V4rRJTKF4exwEp1VPUh69j8TOqWcukMujUucaJn5G%2BOvCHp9Xw7xxF1AykBDfeBSYwLX8qNRTgFyJF6DAQcXPGTQ%2B8N4%2Btmw00r2PHUQDKpgogDAaQhdwQyRPRRp4yFib4tI5t4KqBgc6RWui75TCzm6f8qMMbL5dMGOqUBxIoYsuhxDivyiZlpTFRCrKAayHtWs1rNK4iqNnSvONytLAJSRdwTeM1Ip4Lm1cXKGw%2F1ZBHz8MA8%2FuySSijmImQnswdA0bxvi0yFNwBCvgz4p0QRXlBLJip7dO1yBBOEfQ9E0XYuHG%2Bv%2F8cUubuYjb7c%2FH8NR%2FEUKQTCyr9qM5n4DtJPVn4H%2BT77%2FQbIYpAMlUNacdkB%2FQyYPjF%2BcOFm%2BMRjVz%2BV&X-Amz-Signature=c5a15a3b727cd77b30efb020b0430e31e053b0d89ecec820534299cba7a4f73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


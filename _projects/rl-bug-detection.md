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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NRPBBNQ%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T100235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMyTeV6cW9KpYwnBk8HwFB8G5raXnUiLVHxiNnD728DAIgQX%2FUGjiZ1jLntuHSY9EE01sKxhxA%2BShgOLz3RWLqzLwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXQIfka5b4OWsRTZSrcA4yXv%2FZRbsW1hZevr2DqTA4BycZ3K4lb%2FWkhix%2B8hmc7%2BrBb9amhIakL3fWAGwI%2FglYAP80a8w3yrZNVChOwdStB2sg5IjmTnMHfs%2BPPUsNarIgI7ifELZ54EEyU5vAeOXX9E%2F63qoLUymdju4atfpzJ%2Bdy%2B4MmYXFmIxYDXUeOhzEYIsZI9IOEh%2FI2IzzW36E6PFWv9KA8ym359g0z39cEcWie%2FYHuJbthqRmWJnOA9Vi0bNFMF54JSU2DgdT5dSmRtVus9YuEEJDRnkFetJNOAAVo3Bxr1PqBpGJxp7zVR4DSeHsVdxnRnNvXjBshQ1qPh0U5Iwo9y1g7jZb1mRDyTnHHUXMEVB%2BzO5MbZVphbk3KdYUjJwmhebJOV1r4iwbwcm6mSJTBiOv1%2Fu7HH8SGn7MYF%2Fg2feYb5yZQ2v%2FOvijPV7uo%2F1PcuazJ2PyERZkjAlB4wmfRJACUzl7JocpGPGDuquOr44QzCzUTntcS1lvdNe4bgTI50WGf3rd42gUOYzv8%2FVU7fN5qxVuZx1HX4lPxvS7ky%2FmxtU7DqLzStACx%2F%2BT7aYddrphdlrQ22%2F8lqgdvN10FCKGgeuHFslq2iBG9lqEq103diRCSpyVs%2ByZL74aMoCSUTNxScMMOz39QGOqUBG85IeHCpHdlcoZ3Jbe%2FjXspbhf4JwMygu9OM51P0wwm40v%2FPh1tEda3bRMY%2FhhQbqlA3%2BWrY%2BI61kM8fsiI2YP68eG38E2vsPwml0%2ByR6A0Sfpwrv6NS2tVzYu4wVFDgDNi%2FOGv5c5wPwDQOBP004lFV%2F4xAwg66DgTCR0sKKnz5FQzm8ItGkS%2BgZqAVYYtT86DSC0gIkW%2B%2BfWTlgyXSSdMg0s59&X-Amz-Signature=cb2533894dfb94d4bbfc4c9db5110c3e8e96529e92487346f65c9c102c2817d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPUQYWV%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T213220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCuRg%2BrOidJmTKMfRW564eaUvpXnXjTMTcr%2BBjMEd0%2B9wIhAKlFkh9dT4ocWKkWjoZrcxlZr16K0ts4vSyEuj7d6acxKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0vMzm6p%2FtJvVrWZIq3ANsRmyrAQhPSLBUBoEpO5KzMbS5XXr92PjoSVGsZtUecqHMVmzAm0ke3YhCcNNvHhHChumEluE9UVIgmdXIDyojld2VzqErjKoVzARERO6dmokWrmnXLrGQMKZnQ6zxFu7JD1bH3IizLyYUNk9k%2FB2OS7OHlhsKDqwV1p3VgAm%2FbJIIe35TMFdv3QJ6%2FAGtCBLogYuUr%2Bd7nUruSm4lxDryyG7DliLQzWGImw3iQSdCrhUV41tLHjX7xiqfga03F2RoF7SuitN%2BkbPOwK1HpvzfHXMID8luGei5jVyUs2sstCpfNFZUYLvn1Mfqp%2BOeLMdfbDWi0m67tfrEARg%2Fvn24%2FCKg6QOTYdXqx02jv3%2Fq0SOGTQgeoFFgGUET1q%2Bv%2FR%2Bf6Mf%2FfJ%2Bj%2BgCNc7WrDuUiGwh7rvCGyiz1v4QC87KRCGcDAXPNh8%2FqvL%2FrgDvHwYSdHC2Sh7QGCEOTxeCSOwbXU%2BgmnZC2CclRa4WMYJe8xdysem6MFiGlMqarspVKh03YjJLF9GWsA%2BHWMKDhYcwLhqEBM81LDPlZ1i81rmDrc24zCn%2FL9q5YjbzSeQCPM0RCNoA0qOgME1YpjbtxPAx6IYB0se99oa%2FgCUrhLViEPOT2mFSY4pkmvyC%2B1TCD3PjTBjqkAZDKJL4%2FmIliJtMzlJJnov%2FkZf%2BkqW0ohG3p7ImotSpTCloKwOpILiuExme0DPz0y6DILJ%2FLK7%2Bv4rTPNlKEmRVNQBuBFJ7ulZn%2BbO8famCt7t%2Bqopra0cM%2BBBmXE2tOYmtqpubSlbzs%2B1aPPfy53BsMFhLL8zekCd8q7f02LZxddfMaZdIsDgjxguu0%2Bn3aWLwOS%2BJw88gJvdsJwJ9qZ%2BT7%2FiMY&X-Amz-Signature=f883a67654b13e09cb79e4042e10be7bf125517c83a267f63a2376f377182345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKLUP2OV%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T215334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDPvRO3Gk7drm73eBOjuePi%2BqO2IGIVBFD9YrvbxHVCjQIhANzjJ%2B9dQg%2Ffcvjsws5%2F0jLVdlrsbM%2FNawr3G5a5chejKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHNS3K0XwCMuQ%2FK44q3ANJkXANNkQhC3AoBudHAEcBstlvq9q7E2UbEz3PZ49ZTWClHP1XqcX0CJCXP1obkKcFHBqPMYLMJA%2BfLvnKb3331iL5yrYS%2BYuu1ehdomv%2FFDSKFlSSA27fpLnovJ95pxjKVne9lLhezm0x3F%2But8MBuYpmGRitlXBXyKEor89J15OucContdEecHLog0TReRxLXa9GH9KjQXFnQkO232CaduSYFeaNlM%2FKUnYwlkiML6oqOOyqVsijGGjxbMGGLY18zixwqXsxlvgTzCJTQK2oTCUmub8GiOr5AiXDs0EYzCTOmU5gqsLcCzLr3NxSq%2B9MIN%2BBdWA6LCy6i2rJNLs%2BhzjJQTmRxsqjAeSt%2Fy2NmydzF8GSIC5U9tGsOO9YM3AJ6h2G6%2BS%2Bx06yTw6JkDcSIBSEgS3CUJjvInxtuxJy0TaKdpDDc7Ca2E7N%2BGEvLEU7%2FJHtjrWto0dibh%2F%2BIU5GZDAeGnucIUspeJ1qDueGtc3J0aMY0lMJBLHPNVCdHIY%2BtCj%2FL8Pg%2Bo96sJM3772EkSfsmbuCtf7J%2BOsLmRrTGV%2FgqhCdNDkhxL%2BkYi6IeLgPHq0bFmc14dkPsclSQOgnhhLwRS9e%2BwfBF8lfPmzQ%2BxqXSpDCFb0me%2Ft3qTDtlIrTBjqkAZ9ZFs1CG%2FUxXdV6jU37hlL5ejJvy0pJGM7KvtxMRyFXlSwUjf3YPxzpYUBfkpsy68mAZLdH7IiyqUTc0h8EUueU5Lpj7gVsRAedeEaUCHWayZUQZJosCb5T1mHpFSXSCHE3aDzjr%2FhMwPskwxEGGKoYCHcAmUswK6yXp3sl3q1aCgat7syhV7RK19QU2mC7BGPK%2B9mSB2NbPUrpfOSS0Kc9E3UQ&X-Amz-Signature=a106c8cc4ca953daaf8e7f700b1d298a5bce16accdefbf7cd86c8f30d67c6afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


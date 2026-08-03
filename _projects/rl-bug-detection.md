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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWN6AFX%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T012528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD8fnpzpje0Jph4EYIHvZJONPGgfMe%2BTrptOC1ZdYKOegIgJXJGlXJXXpaUlXBO73QQCHdlzKgFw8pd1Dv7izc5Dt4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPFAwzXTfGahMnWtCrcAyRSqNnRJAZM2YGCbZ0hD%2FjGBSqVaYYGIOPa%2FR3n3J3alyj9fo44aRjB4Du9uXTfna5leJqE4XtlcFQ0Lnd2NmXQNcfjkG3%2Fhw3vRabFA7tAm4yyo286QrS%2FkZ8VAioXOWXukGZVDehkLhQOvn0IiaNzSl5rEG5KmBYCALyVOiGzh9pjazheO4lqUilVPMJF%2Bn31kMdtrE0cRsATK8qi9vfQ7ZUYWKHSWxDh2Bl04%2B6XZxvjctqt6k4Yi6CoINGZKBhMbjdXZ7rYGsRrRbBq3WMOFn6SSkFUMJDG%2Fd5YGQjulyoerA37ajLG32ih%2Fp3yRNl3G4iqSrQsz3f76Yvba2nCKsp%2BoM1hNxtPeMImtLqhYi9FYj7xRyGUgsMxI37qaLSMA%2FLNYTCzK2aWj%2Bwdp4TMI5AkF0wSeeQLt%2FrOYr7kJ5vVmxFajHcHr8IprpIZbzB3Uo%2Fo7vJBppkD9yjyO5iBYfJmn1pKuLtSKxFkgSjVrmlDPbyh3NWDGL4DXflDvI19VMk6E90ALLWBDEgxxmTk%2BScn1vzONshaSBIsZozI3NdddpIzRVtur225P0CD8BgRD8%2F%2FIvIob9Zf2iL%2Bn50Ryqo%2FBEDCRxcksVPF%2B2oGzqII6Sr7hGN38imEMPaBv9MGOqUBOYJ4gfHMUDuSr97hQ1q087LC4D7iIfuqXhxVBawk%2FP8JR5ex44WzjsX3Xn5Nfp6%2B1ctsan%2BdH1m187d6FPeP3fRzuc5ZanXsHV6tObOq2t0O2empQ5h0d1Xwbn6QrntRPehYpJY1GCiEodHArqSrl7SO5HKIKCMi8IVjxJ52Q3ceeaNNCw3Klu4JCn%2Bey9b5xqVSEunBLB6NotLT8AnAaEkU2kao&X-Amz-Signature=3d433252286d07ae2c33c686e6901fe76a0c06fb4058371623c4ea789e45a59a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


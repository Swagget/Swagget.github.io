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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGBUM3I%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T214508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDkb%2BKuXqezcqBYLh127Jgjhjwbwug4oiFDhUOahIpIDgIhAL1PKWXCTQ8flRguYJAZYzlolq9U%2BsgL6aRTFrpDpo%2FZKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx90UmDk4Kpt9qlsPUq3ANvjCXiMHotwgiCzcg2CSphk1CRIUEytKatwYQZUCblaq7RC83%2FVWXmKD72IsKWuWQUZztcgwfi71pbE4Lk%2B7P0l5ILmWoDRLV2YQrp2QfFnQRWvCQM%2BJ7XXTYdFEd6Jt6jTPQev6wa9vjdxTPWb3GGdpMy8IuGo0z%2BrMBBi%2FhYCJlEciOnuG1jX5fj06l%2BH5nWYegeSsPTh5pBaWHVSMmp77QgBJAeeQIMNK4kZ1bMDsFHljoZR7sLb0rasQV3KbG%2FfUpSDra3nhShOneSV1sxXSjTtcIIJrxB1OejhW29Ky2ACHJGEGKxVD7EYvhX93DucLiurkPt866HprxZszIOJkIAFw3Mpt6DKCLwInmhUxqeATKp5pIg5dfVi60in9dAsw9Y2QgMl7a0aS3A4wNcBg%2FW48ZZMtyFxJtZbzoMUujjFxXCMxKUZBhbiC6AUCazal1xpsySK1qLzz4q6O0zLiIn1My3f2CB9AMIKeENyfzKp7pdGbqTEmLyKTJD0kzRCR97fYNhiGQpiB%2FZo2RK7RtxERMRM6T%2BgDGvAbKC%2BqQ4ZfEMC5IjM8wFPUainwW0OngZawsCyiX4bLoNHiMot5%2F%2BXGISc4PPn1qE8Px87dnYNdOJxDykLRA2wTC5nfLQBjqkAVlC3hDwjADllOuOb3VqPccYt3lUdZWbohNcxwhq35V%2BwTdViDXf9XBUmXBZiTNGp8HkjtoR7hFn0IMLNhb0IeV39GCP8ZPHWmmOpLdKivTNh2z8MXfY0q8gxLv4YH%2B5IT8MCqpRcDbh%2FWyWEBPxQ%2BLnrZBt5J21GeDf%2BgyTaDow07IMjUwYgX3Z1H9VfuDrZxE3lQzhDfQ7R1ytEN2LYcMpEJu%2B&X-Amz-Signature=e2aff9d945b2fd49a197c17a717b2c6db99aa246f4c5eb1ac1af4be8ed43037b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UNFQRK2%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgZv7QFoJj0HAIFtbumpt8VKI2tbdkKCuzE3PO1LZs%2FAiAPaHAkgz9dmtwpf9tYU1D%2FgqdDrOL0jkAwpuFx541%2BQir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMWs0Ha%2BJzA33IjaGzKtwDGypA2502220VIkUZn4In23kRD3Scft%2FDMZ51mDBb5%2FUDn4exv2FvyKhIjuhJVQiksf6slsEm1KQAgXymeDExjOrW%2FVHzo58CvaUQ2L9%2FwYdliS3UhAjmxQqUdyuaX2dBou3wYRlvMhSEGbec9ol9HStpo2bY0pTXmg1Nk0ePmx1gESnOTZGkKr0lm6zjG9ddoIFR0LAJtU1pIalW8lM6M%2FMWSjM4zctPhFWnamjLv1F9A511Kp2GiZD%2Bswu2VCKPqRZudL5VH9383l438OiuFMC4DjNAXWZ1bJ3VvsC3xlX961xIcEJlJvNyD4S%2BVFKYCQu3OEsnjnvvwlyge1caFuFOO2%2FwK7yD5gK%2BelI%2BcpWWmD361jxd%2B4CoC4QF9%2BYiBk%2Fi8U0ZHY54uzO3t6VYWorXq78CHFXy2HbWACSL7xfXALKwYrWGTjGmtspUfVDn1WPcxyvN6jPi6puVgmjwmCLCcuDeXLmeIlSYFLceqg2GZJL1usGLg4dDHPX%2FSffSlfssa36c6AAt9m0GP6YGzEo5%2FHwXywrdr3gnEqJ2FB%2B%2BpBDto3hD0kqcDUc%2BaCs75ByVUHxI2XulI6JtGyZQPKjnYv%2B97k1pW5ihyhqF1MvvWitWmQqcJFZhTbEwg%2BrB0QY6pgFFvaKm93JNbL7cpHI4%2Fb5empPLcn%2Fx0TS2%2FcTs61j7Vc82VWQPVpVC%2FKTr7v42VSI56Zg4YNcjWaGLjXUIxX1o0f0c4YsiOyftnPhS7JPBRnH2aAWjWUPhXB7vR81wuabyFBJrkADp91JTg%2FrJOy3mc0F2CKd2nX%2Bkqk%2FnnPhF32JVGS99hxLcYiHFV1%2FU%2F347GYoTnOujNvs2%2FeCa998x2uoSHYSe&X-Amz-Signature=6c44aaefc157542ab8603905e4b922fa3557eed4a83a6e116ccb876408765dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


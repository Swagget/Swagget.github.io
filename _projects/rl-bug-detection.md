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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQUTWIY%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T015733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCTXMZlnE8I4pfaEZPWwoBz2byI798JoAX%2FXv8KrHUo2QIgUzj0B1cXiRi8yCjWwRCBO8qcfIu4ozq%2FaOvzMtBfHVQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDy3XYIVMFZYE4%2FBuyrcA1Hzz%2BbryDJyLsXB6GRpniwe%2FPCn80UT1qKMFmcG2uHdAp0CU7JBk8uPI11y5gvkt%2F%2FRGMpt%2FQp%2BSOyxkoG3X8YgGC6PvXJz2lr2phgcH9GTiPUjUh5eoZ9kcT6y06sLxXcAurRTbPDcrmLCAUZaqGYfigpZ%2FPbnq6SqV0nXjobCjQiyAiVZZ%2BsT6JaA2oUr4LUCPezpT64FyooCUjuptoyym8ORsk%2B%2BLwELP8ehr%2BaNK%2BoXmtx9R%2BgP9Z%2FD7lZpWeiqheu84%2BeEzAXwiRb9qgvm1Pl5xMYC0LQz70GiOWDxGe%2FDcIeMs2xYIGJ6MzZHpRwwFC%2F02QoLJKflH%2BeETtKWkuL8kzcgLWE4bPWRDkZtKQo5vioh6QYgeXkPt2Xm0CdPucE8RHBDLqN1AeUUXgeyeC%2B9ya29UjDUo8KzDQ9dtq0ifXAFbpm%2FucOv1YdSQ3cP2QoEHpRPJ2tSM7Ern%2BimAcl4KtouZTR7Ntc%2BNy1c9c3X8cjZgofo37YzwUElKdOG8lw8a6R6NtMawIUk7b9lLMfo%2FVhuys5CLGRF3ld5L6Vv1NohOrvmHM5LaGz1PVXPM0H4dKWF4ngs3OjMLYwzFDfDzQNq437tFqocuMBRNWDQqX%2FtsqzYcE47MLiZndUGOqUBCJ0ofXTrv19mZmZwytlB75Gy3bid3FwOZs%2Bc9tfDZHUEGcCvnYr%2B3j9HQJN%2B7ttVILgjo8nOEszG3yzFuNlHYEvHiyexji5Lbv89fPBr8BMc9rSU9hjdwiZkLTRi9G6s8afZMxpHprNrHZXGEhwGsfwgoSp6PhCQIOKJv4xgj9JfiAUJZB8CVeZsa9JKYrxeU8AO99Js1mEvnglNOdB6BD0qXY8T&X-Amz-Signature=dc0066b56562cbfd82385bb7fc1b6cf134c35c3f195d536c2c422a48b11d9b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RNOW6R3%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T235911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWah3dqAuW884YiFRKoSQzRI2v7TULGcc5OixXEiZCDQIhAItrtXpUBSu6AmLOq2%2Ba9RUuKCo1MgYd6eqlQVAgNZtzKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvrDtmTGQntz2Vx%2BIq3ANMdTsxSH4vT6gLMOJKZwcdFkkSyDGWvVT10TYD0hmFk8hXSMnLy8BeHB1I0b3tsJxkKdeF%2Fmi9mWe%2FslV0FrKlXeIhF2AAsfoZKprhyPr2986qtJdrkrSKvXCsggV5giGCoOKUx4hAcNiXhEui%2FBM4ZqDFEw82OTbCvJ2hlo2bwWUndPAb9mk6eIuEDG1iixJW4LV7yib1Jd8qSRxF8SKRhKnlDbhpW02f9P5%2BCIc19H3jl2SyQcbH0DtX7G29ifGWyxMJTOhjZHqBKzzWxfg9sQ%2BHlvHO4WNVqs3NNnB62HzflczKGoeakge%2Fy3Y%2FD3L4TOV3BvFZDKIAL3rMMQLKXIlvOAH2G167IEeQ0UjEGkFV40zK67nSzi%2BZLfEJF6jXNxavGpaMF6dUruFYc3el197%2BTEcr1j%2BlEnv197s83KC9GTPKzkYadTXG%2BCEkMYJj%2FtfIOAQw6RS3l1uhu3JDolCaEtBtsT50oKXaAaHfnbNuQGzRFqJO8obnpuNLoK4WvSeMGoavRrbjruXeriAQHXR25Q%2BLh9WxPOGkEnMxb4YqqwZX6W%2BcdGd0PI1342ClENZMHGQnelgihsZKQpACPJQILS%2BYohDlGrRkH9yoI1DSRhvVhHchTeGaHzD69dLUBjqkActAvXn85patf5%2B%2FF4u3nk7zXkfwLCtWuo8pyiywWl0gNksZhl7Bwk21qTvmbR0H%2FmfFL3K2z0fw2bE1Q0v83Q43e7eQtJhjaP2T8wenPWCIBl%2Fg1gQoj2YCf4pHfsF0eG13OqHSHhhuOqEN1RR%2F7N9HnIdc6RAc8iA%2FZRtzwiH5CkS8PYwfxC%2FwZWIo%2FKIECwJA4ptkSX2LlM4O98bXH9yTHRLa&X-Amz-Signature=b17e5231a343e384317015fa53f452568fe1c6577347a0ed4886fe243e77c932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOYYW54%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T210929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIACW8fkFNdKJ964hDhtn0CR9RMKI1IjinZHfrkAgDmcZAiEA3Pw%2BLbD%2FPYSlq4q51p8J0vDIqkcazsG9%2BkZg71d75P8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgre5DCmqLEOmu0iyrcA%2Fhq%2F3yErXxlzfdhpEelxma5VMgCm7IVu%2BtlrI4bKy8U7K7P8Yf9AxbEJ%2FQKDWGPLb37Cg0yUoeg1xBhBOjFqVDOmMHo%2F%2B5fGxWOF0kUDmOzyPRKGhwT8oo3%2FtNvVasVlankJ56vnrhw7NxuTUnsP6EZY6q16oWGXfklvRb2Vb2K%2Bdz%2FK989GWaOIuxKr3C%2FhpvKvBMdaT1eBYGQ3WG%2BRWSnST1Ew574MY8REXSlI5oepjza7C5GEdV%2FnZYSPYdIA%2FBO1OW2eAg19qe59SAPww01pW2c5BaV7J28BpQIZboG8vG5f4cG9Q%2BChzlZ2C0m9WSDQ8Cb7%2F7BYMOyEGLPc0ZVIGy6MGoG3TEv0lf91tmf9kZX%2FqHopy%2FC6%2FfcrEeMpEQguqu6bQ%2F2SAkSnSSidQ%2F9OLbEPBvYslAWFrBGcFom6i8zTk58QLTKbdgDUtmGk3bHDgbS%2Bk7GOo%2FZHG0uB7EFIkhO%2F296b04Cp%2FdNYmDEpHYHcCKgjrJ20pd4X5L%2FpMm3ZNvUFEiptTG8jdYiW%2BWr6ZL5xF7oiYJhAbHg4hd3IN3g4pJPZnfC0HZJg%2BluChQt3HZuRrTBwNtO2Q95NMQSbjjJtML7cFX5fnf0MJ5PH%2FbzDE3OhDb5BwC6MO%2BZrdQGOqUBl6qN0Bt1V8DGXScf8M2IOVdfRbrx0yY561SG3XrI%2BzJA4tQTsrlLPatEAsSenFhnWxEwQPoPAqCItn7CtMxucGADjUyunnZ26t6a1Y%2BTXqhu4WGDxUqlihTUuhuLB7RTJZiOQ2CMXBcVfgyjXb4DYIYt3vkHZAZd7X2qFnUaKfWTMeW7hVcxs%2B7HfhkpXTFAZuin4nhhwvRykmbF7RX1VuYhv2F6&X-Amz-Signature=ad62b8b60f875e5e986a2fcca472fd75c4a7447cf59a17280b611df46f549611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


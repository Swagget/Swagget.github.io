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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SMYVGY%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T082715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCzJMyjoV91BaJ30xndYp9CAay8zEKWbVT4gO1qJh%2F4NQIgH374%2Fswx24N2igOQBbEFZZn%2BHinbs6bL6QOvFXz4p6Yq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNsi%2B7yI9TdzbUd0MyrcA6jieOTA0CXIleI72OSkVyl2C%2B0PpYrir8j%2F4anjkMH3rH02kBY%2FPXTHduJhmiUx6FJwi1kQZtbfpy%2FHCkroYMGDaWhOih0%2FH8SYGKW0P3uxJVbF7GlRKUrBQ1X03jCIlpL2UYKF%2B8cNYTZbCDF%2BPlCPvlVbxxx615QUcDsV06BNqO4Io3K3GzToeTv22aVezogpiZ7FohsGupRtJEIwqUXHBCRWGztaOINwqUtG2Uo1tUj13MCMMiouWhWBNRGoYbD60wpTPdhTxO0DwzJhRATXgX1s4F2tzUUpfC9GInrBRC5v0jl%2F4KwC9EXBy5CMeF8%2FQtQeZtqqUhqeXONoy0Mynwioob37UVOSOIoNufixIb%2B9Gwxv5x7vu7rdbz4QdNIIIwKnfYC0r6rOrFGRVm4xXYBtF2F7BTqbiNhqXg%2FKj9Gc7WUyQpvQ%2BEjGkBcCiGe7VIVljBBqTnEx6oZLxUnmFFV5Wl6b2un0DLpWYH5amF1UYIitK4P5gRZo4Senz2vvHjx1vFeLCvWWyOpzJipgmTVND25BE8No9V14w3JpH4WxITkyMGPwGL9IWA5oGgUVTFql1DjsgbNQ8smRoJeJZJfN03ClLN%2FuY6uoA1t1W12Gh9pGFI9Lw4YuMNS1utQGOqUBeCGjbmLcvl3J8U%2Bt6aHJOmbwJYV6X0phpi66qqUO8FKzWzeDyIMBN9YUzAz1EsWLtzgidckKvxncsTqDaDmsQ3pZW8LasGUfxsINBkO4okk1CkaAhTndd8iywygncvj218QvC2yChFu5i5UQwpLEwxpOKePlzFvbA%2F7tq7xzVGoIYLfSpMyFVJKnrMfoPeQmr0lNZXzdoOurOV5R4xWHBrHyAY38&X-Amz-Signature=d857fd215eb471cb890dea359bdec5a0b8be0034fe9276fbb8546684990964c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


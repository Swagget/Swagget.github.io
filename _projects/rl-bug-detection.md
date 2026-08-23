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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W24GNZW%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T021552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDCJWlxmZOK0EM0GHHfRK4RfHql1tmhAV5BWbB8tUVrfAIhALu9RK2mOfm7Rij9H1nnp52eaQEb8vhvNIfz%2B6CasJ9YKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6OU%2F8GEN7DgzOhF8q3APrRGlBqzaDqlSi5SSh%2BzeGuCWSzaQkbv8y9%2FtgiMBCBGcQa6n52AxvIXgir68qCznAwQhckUDD3VYOjJUaFip8NbaFZ3Hd8eXLH8iETYTmjJBx%2F94MHJUa7%2BdDR4GRJcSd96LUrrfLHuM1p%2BWU2lGPUoYCijR21ZTrtTiKt8Cs01LWK4Ffe0YQdndHeKPk8Hr1yhvELgUUz4NPuI6QtDPMEbKj0WAZ6PAu%2BIT7tagW2cAqw0SjU5Ebkaell85%2FfaMi1ekiEb8oxif8rOLUvHA65gk5PfLJgmB32kc7DztZ5g4XgIbVF2tCXbh8FG2lgvbgDthT7EMq%2Fm8KGS9VqbYITVFBz9M4pkH%2BfB8hbzXgE8wuG97hYzo3AIgkHa3v0vw0Or%2FTe8jIHSmzm240md8uGBmRUqiTvxaE3%2BYcyFzmn%2F9VXF1OftIwYA0zMeI90DbqtPdTNlENAOccNroQFjhS75nsOA116pJjODQThCt1v7AnXORDDpC0AHUrKMmB3ODLw8EHVmlVA8Ccz6hL6Z%2FoG%2FxjRlV752lH71DC62%2FpI3hu4LpFv1Rl4nL5TY%2ByfCpnDpfE2Ac9b%2FypHkoZ627biMoFU7l53WDosxiLJ5kH1HjVu9b2CA0m0mk2njDyhKnUBjqkARpf8CvSAiA5Ni9QZDhNvBDZ%2BooFFpOmYG1XOvaIcDr5FHzJ9YRWOeMt4Cx8FOwOeO%2Fg1yrySHLVVU3gdMxQ0aIjjhu7JKp98Dvz532PQ49ot9Oz9xZuFPt0s7L8euGfwFrEmw8Mjlae8NRBWtlfNrhHHBkDbsvA9wzWce6jxGLapVBr%2F8RJmnqr2AlfClsMW5cHJDNRL5CoZQDo5ogdnoVJfkai&X-Amz-Signature=3557e6d13504cf954c63f45d9675a884eb7084692879ac4a065879bdde2e4b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


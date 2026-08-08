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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYGCLFUW%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T171838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX6KgS%2FHdY1oMoC2VjXFUdtuuWF3lLJPwy%2FlVxUur6kQIhAN7KZ83CbguVDRlbkqqxkYaTlr52sIdEf%2BmkrH0fPlNUKv8DCHEQABoMNjM3NDIzMTgzODA1IgznV0qWsPMNmffbfwUq3APADr2qlDCS0vfgtRIDYJr4SW9zWPH2fri%2F0c30bAsDjAuDngGKGq%2FD8JzAOQrzpykTtpDYptKX87cUcIuMyuExXWGuuwRXtUx8IwtIcsT1yxnk4%2Ff5VZpNRGuxsj53GyIIYfOY0ZPX2t68JKnvquVKJmqmNbnqoRqmcpOqNCyBG%2Bnd0xLqyAbEgv3zzsvS8GlVn7TlDdKXyx%2B6TulcwovQ%2B6WY2vnEGa2frsPYq61b1IYFweX6zc7KaR4WRLa8pqq5NKJ3SLVdW%2BVbjg9mW%2FpLJN1YoCh5RTt%2F2G66isABdk7UWxtNOHyt1Bszx06XfVabS7qsub26jV5WMx5vZmoJvqQPe907uAIoDX2m8hgVND3xqWiIMJmM0pIZabSoRVwN7JLFbfw1v2e4DytSSEfkCyUkPXuyjNmgeQ2GNVs68KKNRA0jM%2Bzbv4EMGsn0CRZdhauMH80NCPdavmpmDEWeBcqbQr5qcAcUFM4TVDrdkgoFDpOfCT9FjppYSTsFS%2Bsbc2rTVe0A0UlxykP5ShzFobBwfUm7Dn0ayjzcVdUhKoXWq309v%2FwoBHzXAyCwlsnB0IK7zMQ3%2BVSqAQdN6ptqatCALp3UCuXgB3utdmL60FAEwU%2F4IBmj3qRdJTC%2Bnt3TBjqkAReNIkFAk3yylgiouzFcvgnDniZbEVYIXp8fkqqh6mbLypaMJHDA7FHjajrXlZOaU8UU6SSSfVLx%2FagkLS9fQJWpqlU%2FWJwosC16%2FtXj1TgCY2OknFewWzbjyvuK79bkPh7Wy%2FKplVEXskzWYLOCnqrL8ACIQ4cjd0nNxASRg5t%2F6pYg5yKCX0mX%2BjAeC2audKGk4uTLNX25awQmR3EkjOV1ZZNk&X-Amz-Signature=9d67645100082bc8f7a0d1450f71842e632b89c9b3691a37d8fdd574591ea677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LIFMZ7A%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCAWAE5DWjBFxaWNzcAxSBnRwL7TqYql3ssox3qio65kAIgYUHhDzvpbfqjChVRA%2BY9rF5TnfZYDTD7ptgEugqYoCUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDF5dGpFjQ4H9QhmMeSrcA59vXoGaUIAD7dRWZCdg5AH%2BEYtAKcnLOO3FCMj8BilYgtpYQ41O3VSiFUSLe%2B6hteO1hfplp41KEUEQ%2FGkLjgBSSRsrF%2B5MijKjNH5uuN3gxJBnZn5qtGTboqgKqFIyvaV3Ky5pZfEKZDm0fPCJ8S3TJoMDRfbQffZXm8nneHAEmUsr2jZwnFvhuZqXnKNGnsppeqptL1kc0Efz61qtVIW%2B5AK3jlKhcZNYuJDtLMMZX0gaYqWbsWdgTdWsMOpVN1ebERyGvASTgNs8RkyZjqjaLueecee9%2FR7gNThL83ajAUOkcJI0FluZDQ9xoJDTeGh3V8ojjKkWnMs8V4JMHGQMoGMCbetAv14fWRBOoPNSHb4FBSMEYJmDjJamCfz4kSjSm%2F%2BVQncvN6hYo9E7X688nVJaBlPdKmalSYVHLvorSvvNLOqAxoIv%2BVBT0g1XuNGSsQk9Ij4uiMq6HolfivocSOX3hmAD68GvDEQ2%2BRzZaioVlZmVXV%2Ft6l7unRT3ZX8ySF2OuuerVcYI548mMzTFREbhzg%2BnkD9gfAVTRcmxVEeV25MThYxacnih5Sg2iECHPKyg7WGejbjyMx%2F7kgry8Bnr4ZwojpWQQAw4seeRUsUjQolynoiEo7nHMPi8g9QGOqUBphENwVTMsYhpmUexnAgf1UcbPvZir%2Bs%2FGWqgO1n8v24gQrEUP08NGRthOzIVfAR4VE2eOO3tQBF%2BflR7L9xrepiE5NhAhPEJynO8wc7oW0HZyeFfy75%2BglgjrDnghD8El5LA6WbFqv%2F5C3%2BiNknTk6s3L%2Fo6wgZZKLAox1SW5irxbXae%2B%2FXRN4woeCS%2F8%2F6FEnxNdR9OYVLW%2Bb50dSgc4PGRuXEE&X-Amz-Signature=6d3f0ce417f7059f27eeba7011a4a2a5a7f2b9a9e698e5e103ed69db874379aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


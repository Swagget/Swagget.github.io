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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLUIXKZR%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T115328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCycPlKHRuNaz7EX1O%2F8foc0xN5sC1cY7F9jkAAlze95AIhALlc%2BuZo79DjCUd%2FGoLAFkPHn0Z2wyAF4sjiT%2FlgdJd%2FKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF6dDUhMkXpdL3AkEq3AMdAEVFmVWIRmKX3Y7HsA8A%2FcCijO9J2KZN6PqcimQEjz23AVHwHw7cmQRLHowhUQlXlWQ6Wm6o%2FZ8is1AhDd29bB2%2B3fnobXdnvP5Neo0cJJnoWB0nXcJmOkOJQ1bOHah7al4NoszdY%2FtuNWQev6lMWN43IeCKnH5MnASIMElyWpibdKA4m6EaGpPjSMYJVSnrgALyQQ2fdZLJNB1STn1MSD0qU3vZcweNJRXQoE1FHfbtSnM55V3hF7aaQCDUvBpaY2DzHUao7Zlp0OOTcVHr2saz6hcIjuvikju4BMYUGH7QhfAI%2FByvqPR%2FxOIdxS6r006p4fre11keP9YPj6p0j79tFhn3qUSocZ1qepFznH0v%2FkngR19LIoTqtZXkw4cIDeetpWUTXtiVa%2BfC8AkTYWxcWOv%2FgWpB2GbXwL%2F46Ps2UnoGkteQsBWmnOd27u9z%2BWHLOSpTsC36ESYC%2Fb5acFGS8zUfiH2ZFY%2B3t9UN0q7H47kQREuQQQBYOpYUTC%2BzOtUSenn8LnOM%2BpEtFAUvGYLTT8dh9M8wfHfMDI3j%2B%2Ba%2BJM6ByUOrNWCRqv3pv3sM%2FOQtAXYkIo1Ok6FqqnLbwErrZ%2BR%2F653DOUON0xjN2EDkExikJoonRwX2qTDGvo%2FVBjqkAT3VjCjt8dW4gHmqSIGWr3koCxj%2BfeuMJZrAmK2GIfUExyagr6vHNeEPM8RM42noKda7gFeTZq6ZdXm14FwgViTt2sfQ9%2BUarBNtaMNNxkxa%2Bgf%2BM9kiAcq2XTUev835kBGKlqEv4nZGMRij8MamBjapiMb5CqRLllUQC804pTvsmjaYo0senMOLQGQd343fKn3itZS9CrBJVGZC5wFi3%2FZbiPRX&X-Amz-Signature=3be2c027e0127a05b466d42eb58d0d253466aeb78265aa462a0f6b059577875b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


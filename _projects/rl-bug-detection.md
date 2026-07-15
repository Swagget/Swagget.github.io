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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGEX7PE%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T185034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA7KMMHjkoUJCpBFglSR05r0Kn15o%2BsQw24PW%2BKngEQEAiEAs4jIugwurd2rFEqtcvMPxs5ANBOjlY2IleWXFYf2%2BiEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAdd89a%2FvavlLLNpByrcAycsniKJWa6GEdqk28NO45ze888HLUYPeXSo8kFM2h%2BG%2FxRcABl9XnVeMNZf0bQmV383UKKDTxtXRKBRDeHF%2Bw0eqvbOF1l6z1zMIlyzkb8dqT4xT1wbU%2Bll1jpHzKZiGfNnbbgKX8K%2BwyZdm5h%2BSFxpv%2FuwwvHDbuAk54mm0H7q7SwqfmpxKZxe8scolr6wDu62TQCj8wMcqCUeduRLxSf9MNbDcl8RA67ykCwkWFTcUd5A0v47KZlXCwBlOpXe4G70%2BwOPEe5YwIyJ%2Bf6cwV22m9u6%2Bxn8gmJ85%2BzwM9eusMqH3oEJfuUMpgVI%2FoBGSjaJHD04W2c2NIXDQdRvysjhQcbAPT84RUTZ7VTfQ5sjOD8pZhqEz7izAaBb6XNuwzs9%2FeTzHLikVc7GDwOpW%2Bj3PV3kNK%2FBi09iEV87M24%2Bi5sca7KLA%2F5WsuofGtXsGq6hOg9wc9JWxGUpduxchcMN2tHfSRV2ieltdnveN7aKi0%2FZLQg%2F0H629OZPpKuPcYmyzQlFxEq%2Fvv0YI0RY3D8RSiaYJjn%2BI7cFKQYO9H%2FgLiQEmL%2BD33sUa3jr8NtPAJuv%2Bv%2BGf1ppJThP8f1RwsBqhKFPAIFAJ%2FR25V290YG4VeGjUqk5bxyJeXpSMNOf39IGOqUBE0p5fR83PwLhM0cOkBEhd%2F1PB%2BS3pfiVczUoKWmHwFkSYYVAuAXJBQrsegTn8ZwL2XINV3H5BmMd5b%2FRcAqya8qFp3mCpRtvEOR0Osln3X6zP8Pjv3WSWz0c4WTghgxnD4cXIbTVswWgFImCGpcrbxKAJJ8rIXz73ssbNgxScODIRLgGIQNinF%2BJDSGqbzTCJ2%2BTpn%2BMWe21Zzvavulh7SBBSQ4P&X-Amz-Signature=2f04e465b82ef5ecc5f377b7aca29930a60add86bb1a2faa94f4b6ae9407d34b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


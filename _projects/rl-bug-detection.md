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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDTW6E4%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T213058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIBKAvvlrjXOSiLV2SDk7R4dacBeaGMe0mSYLUVhyPaTPAiBSGyy%2Bssc%2FzPLCDRGubh6kBvQ31ubQ8TCVHsvu%2BYkoGyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHqMo8ZtYWNNdPVDKKtwD0LtwNi7r%2Fn1FAT5OlR7SCU%2F7qVsTleqCxAGGCabyhtBP2AgAYXAcbwJfhlgPlUMYJa4QLqgM2p%2B2GYSFkgv9Gsp0R%2BbfhdxVAkI%2FIsRdFPhIBEeOoyXBtCRevIcCKnCITCqSKQsovvfr4Qz9cSLPTq0tHK2aujB4YQolReUJc5wlV0SDIwQ8y7zQL8mW3iloe7lVR6d45yvUdsXaMFHUkjbT4wPOYDCWrNvYWdguOEOfkWKLpm2pzNe0uyWrujWlDxFD9nI41DSwbb5LxzEtKbbFpI5GRZlJdA1Nfvs1p4JCKxv1nKF4JlNqlnVYSbKfJOKwge38M0WWwRtTnZ7vkVbz%2Fd6nwGFUtQSrdt4RyPt9GIiB6resnuc4P3vqL8eNT201s0EzV2bnZx6Z7aYUBztis1EP2B8vW14pxT76Pd1l1pf6F8qWUKO89f6mRFAgekmEPmqRsnvf%2B189V4rQvr5TK7I1aYzGFbNsKIBfbcvZxj74IRpagh%2F%2B%2FhFoU1ozZ%2F76dEr30Hb229B0dyP2t%2BBPTuvk%2B0nxxc8nHTG2LjrdTukZdXs6aWoNI7zvssa3M3gHsJ7u5s%2F2lssu1dofdyzgG%2FzCg6ZDvzP2RB2lQu85dgjGwklGLYxscFsww7%2Fn1AY6pgFIGbgtCW3wFR8QPIscpBG2tsKhG8ZNf6mYC2cV4wL%2F6WQybtUYGiZv4PLfOHIHhj8ZfNaZWbSllGnP0S6o0xqG0a26vKu8H%2FXRp%2BPv12XFf8PYNwsN2mdtFA%2FDdM1JHJv5uRE6FaEToIIZa9fEXehH3dGr0xM5vi0NY%2FdKyxdMNG2EaAMzCH2rwmOt8dR%2F%2BQ5GxN5ZzI0daiJt2XaZ1OXo2nZ7KaNu&X-Amz-Signature=22c6de24ff17916f03126edc31bdac9e36c7979db7cf6a319c1feeddaed91442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


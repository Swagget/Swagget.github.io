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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC4NSZDA%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1of5%2FuAvpdTOPcHBSi2fxQGlsgIReuRKJBqZkDxA0YQIhAId1qwae%2BfhI7efokF9pDgtwRdceLqsRvB%2Bit2A9nk3mKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjgwpF68yrG5vi0v8q3AOvbldUitXBVOt9Q0CgP7C22RBr%2BdiNNE8nYC1bNhC1V2lsebQ%2BhSONecOvKG4W3Nl9jvZ5nD1YuvnmRtFzQBtY2HQ19T7DkONxCx133pALbI2cKV0khNWCbapM7908n4Yw7KUV1fkoQWzZUbZ3C3SFOOiwm3V8SS%2BpmfyevV7pF4HMwUGrHfGtN5TCqvd%2BFDqqTfFr55eBoQR4FPequYnsGgj5HNIJiSCTvLx7Y2nIH8BPPZgd4qlMttdI25yW8K6uJ%2FfJNbj69SZRJkFrLcR%2FSlAkcH7xFuQe11XN29sa7RD71TvUDZQ0FLOLWb8tixJWOiTRB27S11Mpn4s33YfKqkOGtKGGkXp0KPXmIpHneQ4IKikw0B8sFO7TR5WiSW7niyVvUcODU9ChBzP%2BB8xS6WBW%2Bk34V%2FENHr2btUP78NcX4OFSyXvOBtS7cLlNx2NRIhuWC7TF%2FxDWK6jK951CgHIu3HXttlTgX4cKW3yHThcFBPfZC8SZVwx0cxPGk2eJ3SXgfEz3rKtSIiD8uCLWB8gWTYLl5xfO5CFj9nWkIrcbemD4n%2Fw6FuzKtZAPddIEPuTBWz%2BsT5Etz6So6n0UaskF0TmTTa2SPSuDr1Bio%2FeTY4zm0wT1E0lQNjDah9jUBjqkAWzRnBiWgHqXEJpvylT1LUS310n9u0pC6XqlLF%2Fb7YqqI9kOYVKaBHuRbJqTCzfANqVLMjRTFygrGnB86JYr5trybsgzUSgm4pffmthTSEe%2FqHuJm17BbyjN8UdRvbr5jqRuvTpe0zfoOiKy8Xg0PSWSXcYv8KpmeDpG%2Fvt5SWPNADIqqKQo61bPd1%2B7oLfS6MWLAYQYsYM6CfeOTluzTZXXKpYI&X-Amz-Signature=adac6c736aa5067fa7448311f73783ff9c8ba81b9639afdf29b49f1b62d93347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


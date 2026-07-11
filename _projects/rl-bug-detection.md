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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLO7VIU%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T154204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD9g4l7bD2GC%2FxIgOk9Qv7TsmRctTRYYU8Isu9n%2FpZ2fwIgUCAFaZUEy1O4%2FnpcehnZBdyBNbVTvQku2ygGP%2BfB2ZUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeAsV14nFctiMnY3CrcAz9S3Wxom3M41%2BGn19ywF4Kvw%2BMRxKgERbvwGDW5tuZJ7d6kUy7YDfS9w%2FKmSjVwXNsgRf9kL4XVeEI88%2BXyMCv6AcOmrwfSVLIBiO%2FTvry%2BeHSc%2B2bT%2FSkXtERMFN1RzAGG1DriiHIj6D72wf6S4LVc9jI4wy6tLzxiqoI79%2FubWvjR0ZPHXZh%2FRNU55DRzMePfQc3nr5LXTUzaoFRtaPIa2RcUy2SYg901TO2tJl%2BaUIJi9NO%2BsERIcn3d3Wc5z4Doxwv5VV5wtOYf2q4cFspmYAwbfSE8LZTzu%2BIYODgs83EG7BdZ9MAlqrkBIGV4OCGjjiuAregixZq7S5uIVQNe%2BsJxZWPAyz3xAyP8XYlED7bGMgnqCRRdcfCzjXVwUc30Wms6SC2Ow5Rp8chrFkf9p1nZAKGbJ6L7zFDJy29w%2Ba0QqxpjEo%2BOAzrHM37ok6kPTX5%2B5GqK%2B4BY8m4VGqBeb0gQi%2Fsg7jJWXMlPHRXDuXvyag8wq2SrHyyezcSoAB0PHn1QqmnyiJNni%2F764FpTDIxCvZ2cwb0Sa37%2BCik8F7W1NOzQJCyIw%2Bi77bwzLaT6AJmfbOA4dpFOqgB6HPbXwr3eCCH7njyD3f8pIdBf4Y8k3tmGEq6eYf9qMIXFydIGOqUB3WFWxIyz5AIXVNqo%2FVPh5nU4ixrx8RjSvfpvnQDGHi8ySrsUyrJ%2BdbkO5DHwTmxKBQ%2BZ6zJC0MJqTrzL%2BZkvDh57QBEU9HKB5UlzrPxgTzXEC6IbwDcdTQgaqMMD1cwKpJZ%2Fj25xtrgk2OMZcXzoz2Qdr4P5%2FyxH%2BStU21B1ZX9A7zIuQO9FsdldUXAUbI4lNplsrSkAbT1i3qagMfbWQZDbF%2B%2F8&X-Amz-Signature=b3cfa9f70d544a8349ced642303562799980d0572dd787b1835168b3b39fce0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


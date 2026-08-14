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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662653X25T%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T201910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDh%2Fcdh3FUOzfDjGxSbRG857GZ6dDtfI3zJZ932JmjrVwIhAL9jsU3VbQtU1yoAMXimmcgfE0PilXbaikfo%2BZZi9b6XKv8DCAMQABoMNjM3NDIzMTgzODA1Igwmc6prDs5toB3ig40q3AMCwZ0pDOFaE4rNKiE2cTiQZjSCX4VUQ71rCEKqc8jKNs9JXqUEyFQgCGcq29NnLbRe8q5JlN1jcZx%2Fl6uBrM%2BJycHwwuao0zNFifL4wYx1JlIF4WFrqIahgbY2TivWG%2B9KaeRxx%2FKVcDLRgvn9tsTb8sp2Kg8Atj63XPwUpBmia9oMqRGmgpRC73g%2B9pfIDRy9LoGtrkPQi9fPJZpsrNC9rEqTmCp8A1xsTLUkw%2BIT9RssP9pOoybb64I7RowWpw%2BT4%2FXi0RDRm%2BTUf%2BfAKLXq5n%2Bf2nuxaXsetVRcGZ%2Fi%2F9NaDlaT3EIUyxhDOeZouynJTWxsuNKkHOShgXoRLwF80B193V5A%2FCIZkJvdTLX0LINK%2BcWDF0k8Guau8IYav%2FXbZrl8BbAHvr%2FBvMIlSxfVNVMB7RRm0Z016Re9OoBXR45u8KejL8KCDtF0ngjTdLBG7wQWjUVXnHWiJkW%2BAes%2FXSfYuWok8Rm9g7GwKuFU27N8YR0ZACYQy6ulZmJ0nlB4RvpJyOpWzFSdRIx5olr%2Bvo8O8bkaEJ7n8wPZeu%2B6psXUYQOTJSvuLSoGrZCUz701Jj3V%2F17y7m62UJ3beF2jP8g7EunoD3dmMQr42niutoxmwa6cNoHde8T4tDCluP3TBjqkAVkJ4uCtH6tAsTRpAdiunJr1GbXt2bfbzl385HdWfibBerHX6rDDNN4DKp6kLJpkYSHwDpIxe60b%2Fs%2F2VafRUuy7KEqR3sMWd4frOjrLskhlpArFQ%2FEXvciTettKk2VPgFL5xi6Li9U7Wy3mXFfc%2BLW8saelSbYsyTTKhK%2B6aPoniRQciGf5LW2at66%2BpUWFpECqMTLCdfsJjXV1TX%2FTg1Pm%2BG7M&X-Amz-Signature=b31fad22475838bd01facb77d3430e07f403513e194833de7072089de36fd86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


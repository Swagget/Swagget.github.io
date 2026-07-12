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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQVCCYP5%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T142035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIEuSZgNSJIkezTlfrP14PLf2OewC50xFlQD7Yw0c8uBRAiEAwJIkuEq2AlZ4xM2dEleRYYzJs%2FfWf6PnRTA3oY%2B%2BqVEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmQ8%2BZmxfzLXIwfdyrcA34oYgbvQy3W2hzkbKhbT2NHcitlNjj%2FTT3QVmdojEOXQ3gHEW%2FEKhNClJfLqh%2FpzvEExz5GpzY3QV%2Fx8rKy%2BbZ2mlJbTfe429muL7O1JpXLrataorhU80cMnUTN8Pj%2B0ipHkZj9y8T8uFzUZcjO5Yj9arJUd5eCsV4FcZPi25h8MaWLOdK9PskWGAl7MZEcVnrhBZasQugYOTC1rQrxa%2BHIwOrOFDlvId%2BgonKqNBtZoYZRfT3EinAEHVjig2zx3Yn7S6kphRTwbtP%2BxzI7uUGxIZb3hShmaqvbdquZzE73xOXitwEm4tufhCU7xaNpU8onUVB5KUg6xfjAylK6UvUqR%2BA5NgTWUKJtul0UANLtKPRh4key273%2FCoGntjEMz1Mx6eo3DXkTVoXe3BT7BkYyimFSGTmA%2F7ulZletQahfjTBYnsRmT7nmzspTW4e5928yMLsryLS1SExgYvEgJmNVvvX9%2FsMg4sVmwv7RD2ToJQAp8xXH5djrQGy6JJFHP1Nq4GWabippsX7Pqc3eUqciH0hKKDbdchwT2DWHPUEjyYAlz31Kd1k%2FCoVWG2%2F0Gf7wZ37qTXbzdfcs%2BLCZDkpqviMvzYN7BZ97CEpq8gmLmQh5N8p6gpxeaQSNMN2AztIGOqUBbd%2B2ntgUF7xRWTqrXqKZE3JrewIC9c7hzDJubyD5y0QUn8hcoUe8gGLDRFmsi%2FswHV0%2FTFqdecuQ8EJjVb5teUP1YTVXD77zmqdMT2Gi1j7p7NdSnVhC2VSTldGHSku8EseHZmF0%2FZ3t%2F1139RiHdb5us0B3SaHOf4EXrkpIUwEls3qQkNlIWbnZLfFeqIFu50Bgr2ATB%2Bc4D5HGu2dq%2FH%2BpOY4s&X-Amz-Signature=70da25aced46d0ea744639927e1a88cac46245f773cefefe09a8e0b6924b9fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


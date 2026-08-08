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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBW3JY6%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T142031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlSiVyl0QZV3hMEGwdxDfm%2BssH%2FsVOZYQJISviUAP5ggIhAOy%2FYjopPv7pRX%2Bb0aoAN6PjaGdTw67LOylTjnbIYg5%2BKv8DCG8QABoMNjM3NDIzMTgzODA1IgxL3qBx%2FZIX1rCW7yIq3AOlDDwtBTca5pQ%2Ftp1pAW3h%2B8IGjXk11kMWUMuL3gUAXTJk3Yn2oLen%2FqB9fqHX8SJs8J7GeynQonJPZ4ALJLZcD1cTDOm789HMXai1mZoKMKaJDoEs%2F94FXrNGV6njiz1DrzuVOHI2BCGpIQgRbHz80mnz0DUkQPky%2FlgO29gfXvfWVO31qB9lIMg9zTk9J8SLX8VVTh3nGkZ2R2Pv9tiDe3KYK4n%2BYXVG%2BoijMpkWyoCCxfj83cB6fdVTBDJV%2FbJxH13lpr0SxrM%2FbRkdhDiQfLGyRp9SdjHtMhokVrIEc7XQFZ%2BQjASoOEbxKK0ebVrjEy%2BJE2DnDzmBVx3K0iQszU5eH1r1BTkWovBC64H9lVpos98tfXAnhVVbUyQAsSA54oQy0%2B04HhcDSnUU2y7IWhHDtXoAG3oXJ3DXkLVU%2FphM%2BQRmL8v3aWVfC6uPY6I62jjBSMLBXILJY88hYEAHq2svuIyxGIGNXPl0pkLHy%2BiM1ehQV2BC9TuWQTEeQ8CS9T34eAnJuALyucDjQQAXr2ld05PQcUH1v1hBRc83g%2FdVcxncMAY22lljuC93gANRniqbOsa1w1UhHV2n8baPHjFoItSwmVwJWP8F4mwrrJCdPd0Ej6%2FKtmNm4TDJ79zTBjqkAfigJ4kVmm7IISVdxcUOv3qvc56%2FuA1JoKZTC8ATX9e8nlxl1JdS%2BM%2BV4d10H1GP1Q0uzEmvErOy3ib0NovTJwUKvjRK91m0Qx9JvN3xlP29uH%2FXFfz1DhF9GAG%2BWFBCijFOWv4O0LQyTpZO3A85NOOaA6Bk8u9lAKXNXkJYMjoY8q3dW2pwNBL5GLKGqgSzS68zZy8HnscDGD%2FQH35I6AH%2F5D5x&X-Amz-Signature=03d1c1b5b96515b7e2dc709d909ef9f1559563989719b50fbb9087609dce956f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


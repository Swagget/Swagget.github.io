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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653RGFUPD%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T175317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHt9Vcdbq9mrEJAkCdbyO1hRkFMr0jX4IuJvHLrRv3TEAiARCBVyPD%2BFJeLAV97CgKl0GK8fy3xPVB95coQ0ckta7Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM6TiPbVKUoV8bWy%2BUKtwDPfwr7oMCuA9hgH9%2BppTvNDPuul6Wtt3K0lfVdvAEb4o4InYGpM0VFVYDCecQgwXgWsUEjMVt6HE10t27XwmUQX7XD8ddHm4qLwarQZfQMmebR%2FL5Jm01JRT0%2FIvVoeWIAtpsf4nFl0Dw9OMyRxH2vmGOZxLXwtgwKcE9rxSSowwSYi%2FbJYCqyrKNEStms3chcfgy7LvcNAK2gZd9wT86cV4EzM0uC%2FcVkcNeDtylObqOofFhIFLScImHPaOt%2FLvs7jTPvaVIUG7XeVch3rN1DVW2JvJK1j6F9yjzSMDfOSd5I%2By3XWND7agDuZnXr6ro7ONT5K3yWIZoeXr8OD%2BKE5sRGe%2F38Hww7nik3qkRU4Csruw0wJLwvB0BYmiVsvNZxv43hlgTjzkWD1H0I9p4a2D6SxoU2EHTX41zjfno3agrN0ML7t0ZnS2qyuK4s%2B9p73jjS4M5%2ByxPxsJ5gUzurle5MkvAIfescrufMMfp1eL6jJ7Lc74%2BtCoeWMYwzFkY5pWWCrQf26RQ82k%2Fv9ESrG7yTjHxDJ8YwSwxA9mH9qac53njdRS%2FK1LFhLxgg3wSJYGUhx8L4r9o2eu9r%2FoMWEMxWfCfqqJSrYpKOZnsX8M1HPiZ8wNseMXD9XUw%2Ff%2Bk0gY6pgGpT1Mlgnyn5JK9yvO1aezvHJPS5VJqNZO4fg0DcMZ4BYplgayFlPblgesIVc8HUyorLo0obZJxg4Jp0y03fa5%2BQTLcyebzsDeFznvL%2FJf7CApF4mlC2xGzvEgFj5TCOQ%2BqCJgGZgKbbEicYLz23d7nAkrpqnXC0S70i2pxb0A9hkUtSDXW2vsIlLqJRDtFe%2FeMtsZ1kW0iI%2BjYzHbNUnd765%2B1XN7m&X-Amz-Signature=69bde30bb9ed9804f71d7601c02a93226aecd1117af9ad93f8171d32684828d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


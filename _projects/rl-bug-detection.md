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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOMO6LU%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T092709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGZ%2FjTp4CdjB40NXGWmZDRG%2FdNXn285%2FtiZHY%2FJNsYsJAiAvIbGyZXP5cAHkr%2BJX463hZB%2B8ruDl7SDoYObwvL3g%2BSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVVUDxWdijYo9nqwXKtwDMjySN2FqapavqYVtWZnqlCFohjbsT7pxDS8bnUKuQ%2FyBQ3E%2BDcAeErHe3dUQAD6baDPWtBFYJ6b3tslXjoZVL46u0UDzFM%2BsT%2Fryu5%2BESJyyDHQP6MchF6XOMKflYx7Papmnp0EeOuwSro7mdL9awj6dkQm3efp9QzRvaanM2jhjyJTohSOfZU5Dhs4%2BhB0UKvu%2BOK5VsGLzghpXqEzGLSUuoQeyaXtDJNIsJVeZTtgkBFqZu99Ka7eh5vju%2BFCcPVQr2LVNvGVTy8htapok5BqMyDa%2F33jLuorjLuUkB2IN4q5Obu12PEnftR9CUa4iKcPt0JeOR5TFvsFyfLBDxzn0Ey6BoBPqjX4xTYO66Ea1jxdstdBSsljebWDyuobGWQt%2B%2FLy74g5L9Z0SHbZ8%2Bp7v%2FT7IM08u2M7uvZCEMTayvG7VwdozBKvbY7jiSOqS8XUIjxCCIaBNuhZoe8v9h4vioZq0CkvDDzUkSmpAplpv%2FrO9yOg4pDGKDqpO6iQS%2Bs0TaIMq6GzVRifmx6HzE2joairFQKte%2BjS0ykcOUr6KmsBYi5nOSvubbLgdCbvZvCneUG9vANdjCec8NkOh6Qe4xkMB2dxG%2BgP8co41LRz5D4rOd%2Fj1h5IsaLkw4oaL1AY6pgFFmffzTqv%2BgDY4qpJFYoMl%2BBY47zyOdEnaxW8eUFSxm%2BVqWHcdZ0krEPYliFrgXDVrP9Ypjff6kA7%2FDUTFx%2BWLjju8o5CTF8scGXJK0bblsX3VNt2VP%2F36l%2BtLYVviohJ2SEPyYpUZNMFkW0Ms%2FdVZogASbmfrk8sgAA4hcIH8LVTsbReVkjZhQzpB1A3uWFBUQbSDsHtuIqWrfat4IiV31vIMgeYb&X-Amz-Signature=bc956bfa92c31d74d727ad937f1d02175566bd5e34af102a0ef34b484d29d82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ZX7ATD%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T202940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDufyQ1qxO4PUPGNKcFfBfwBg2kyvwiqkpo%2B9sw7M4IZAIhALuMzKwT9uyQILjA1dBpFD3Jy5YoEmjQv%2FWZ6bbloTIbKv8DCAwQABoMNjM3NDIzMTgzODA1IgxswK%2BDTeQFYu2vb9Mq3AO02NNaFXc0lX%2FKhREYrCCJo3AcIuv3V4gjazC%2BrpwlcQNl3AvngEIGV1owAnW1dkePs8vQU8%2FWwACX8xAAjF%2FMz9O5cx7%2FozHSeJuDEyVaAzL%2FSlaendRAStgMtLSinEDnHDi5eQvnio6rx5bmaDfuSCjQP2btl3YIafMt2IRfVOR134j7OI%2BquIxdJWV%2FL4QZGGoVHPx8lNbqh5EzsSNkIr99Wg3jeF4GQst8KGK%2BYfvmydcaKMvbDEEc6PsiH5ahYRum7nV%2BZyflhH2%2ByCc4lZQ2e3rKmkgJi1O%2F89G7wfHLeTc0Uet0uUmlCR1mlT5HJmqrbSGmgjoiZ7fDoSahY2zT7ofzvjVe51MtOl7haM5jOehtSfF2xDjDsNWzNQecvpmqTJdv1hn1zlXnWwuR9BroYguXrrR2wc%2FBYpqcYrdkYZ%2BArn3ju6YeM%2Bevx220CGqdoS2ELo8aYvQgITbYw2gSh673hwQhtfw1ztZQ32CF%2BIbZAJNZOT2B%2BuJWOk2znKjh9KDEDvFwtN5TbSfwYws4Fpk8Go2bawbbqY%2BogW3DyKChNCKCF4SEC2ELj22jBFj5KvQZPZxXSUku1bMmjiuxWd%2Fj%2FCakFWrwYXBaPGXGRr0u5iNKQMI8wTCPkubRBjqkAWWY2XYf2clDpTCVx5oOku8mUJg3KmZM4Mm0JIXqyLNCSp6g0Kx%2BDz4hS3oy%2FtXEz055tXK1zA6Na90Kj2ZtntU1%2BB7Lke0PSg8R34hHb4CgyKw%2Blea05z%2FWLMPEvXEdgrFe5PFCWBeK51A6U%2FNv7XAcyEkrIalHUZVz7DS0%2FP48x5YjWCPMaciPajyE9TyxCoXeVa1unZeHkQR1y%2FF63ncsf5jb&X-Amz-Signature=cc44b15b333bd6371cccc49581f6b41a3f4e90711abd95640cc612b1f505b71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


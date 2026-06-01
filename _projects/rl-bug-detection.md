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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH6UIHU%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T172640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCcRM5K62DWsDEGUMHGYUgYAQpVwK9epGmcaJ0gwWq9OwIgPQ3MlNKOdF6u1bycYs6c9iEKuaC62Tujl2sokeMAu7kq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH%2B90DajUT19OPZ%2FCSrcA71NBv0BXJfS6X3kLRHVmmy%2F3ERKLRx6xoQdpckNHXDzzJdvIKt5XSQFYV3oNlYBZ2%2FcnCri%2B2gjAnXysr6IlOmmRgGfYYzeUVhxvxEZLbtJezJBZkegGzkOnyZNDQ1S2eQdG1juimepNAsvYQaYtI3buVc9OXsZtPPQVjE6srSOE%2BMYfyccp4aiuM%2BFp7J2w3PhefwQ3%2FO3O%2BCnO%2FBHQih2VOaNTqDvKVgzkRvzY14TPASVF8F20UQPbkB%2FHUZzGJjrJjrKsud77GpRUDs%2Fbqal32G1r2iuYyLkf4bHkzRNcgX8qcy7jrYXSCCf8x4jVssGtasplCMmf0wh%2BTcG%2Fo4ZP4UhOC3cqlrb32AV0heMMJuDfB6Z61qqnhbvJC5ePNHYgs2kpR2FJdG32e2mu4bropx36gtzO7tXsiDlXMZvdyU3Xn2VxUZ7DEzYux5EfHnSDGkzhMuEldCsGmoaXgrTWW30i%2BH9Xmx4FQAsQOwAgMsENK1%2FI7WUZMRCwguS%2Fo9JVSUdXbbKqPfRrPLAYRtfpZHIxHh3FVoTry4S4pKmRWPB3bvzeDYkerI8xGFyQvc%2Bds8jmCE7SSudKiStEo4JFAVszgaJ0DmUYqvyCbnkRNSQQ9XXSeGpXhtvMJ7x9tAGOqUBd5x6WBA436DE5icVHoluZXRT6Fg%2Bv5c7U5PA48S5NGPKA5VeHyRlJdKvxR327I7x008mwpjH276NrZs5P2yYPqIji%2FPbZues2%2F2u6QuyKG4JgLN0h48lyxR%2BqqTuPSKBg4GGTmuqbcSfQIByXEJ%2BPhFuavtGvVR9KMjgoiGP0sO93BWLDeQSmpuXDdhdGNplNn6ntp69g8B9d23%2FK49WVi1zU97p&X-Amz-Signature=3d686b07e89dbed84a4e2dd7689bc6b1d96c5cd69d3c39ebc756215ab2b73053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


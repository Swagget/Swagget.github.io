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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UQMF5NW%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDrliRK9rAfJvEhEVsVjn6JvqzaxtBnRIpucM%2Bjg3Qv1AIhAPYajXQxp8qdvaj2NOcerh%2FDQJVQ%2BWC9XBM9%2F3IqLgHlKv8DCDUQABoMNjM3NDIzMTgzODA1IgwZUCCjuueQj3DMzUEq3AOUkT6b9SNXkkGinSaTe%2FKqQJph%2Bl9pQQoiL%2FQ9kDJmoilZ5754mepPLGrZWs6Mpk3F5yOloFrEOG1tXCjfaYyaMMKWwwBXxnDuZYJHTP%2BLEsVvxqKihSSJwdlacEaIE5jKfO9AbBKXlIR8aKiTmO9I2Mp%2FaEVk3nCh0FYL7dY%2FMLeSBUFzo7dnJpgS%2FVgXLun6ux7tFxaOQucESQ%2BzC0lwP5rTphASPW7UyK90HMqb6O1t8icKiL2v%2Bi%2BiRZNdOyv2dYn8Hhbxl%2BomNAlvMorH%2FEAfeg4%2F5ssy0CtLG2AlWmapjSJ2SSbxQ8PD5TIoKDhA6BJKnSe2DYLZZ5KDQ7jWjTL%2BrMFz3lTdMD%2FuUJ5GakOdikQfetbzJ1hQ46sy895EN0pg6dbkK5J7pmm7kHutveUJAGeckOkY0mjw0fzSNCKmGrmKmwRhozN2e2SFoAvYZxbMqcdvldV%2FlB5i5pUhzYjrjddKELQT8TevbzhIJtkAkJknwAGmzhpXq%2FYF69e%2FIJYgd6CxkjotJVYASyeJJgSMEnNV4z20PbcxJvfK%2Bv7%2BUoifESEcfmx59v1x5Gn1Z20GlRkukzl2VRKnYv5S0VvIZkbg%2BexMFvhkyjZF%2BsvhbNG8Om0H3ks5WzC8tojUBjqkAV98NFXj0gdWprGweq1lFwv8xOSy4S9QX4y5zRmG2xK2PAZnjGYdfppJJ%2B9hmZZCqEL8SNwmwLhu2Cx0dOWtf1Vz8DY%2Bp%2Fc4nMKA888pjJD1QwyjKDSTtRSOPxKjWagkyXwJp4V5MlNiS%2Bp6mjqRRJItZ4rISUxhszx948W7x9%2FEo2g%2FHFEIhuG9fHk8JzsPu292Nb9D%2FnnGiognE4x3IlnlGt61&X-Amz-Signature=5cc824cfd6b48d271fc576af8c515ba1db7417420292c9814779ed2588915e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD2KJBW3%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T201442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdr3ur6oLBquwDLMUwYqfQkxk5doUrsScIABRWpLAKCAiBmlB%2BS1sBI41wWNyZpyMk8hiyCt139xClwBKiFh1YBcCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm13IG%2BJKbgEqUPzUKtwDMNSeXFFjri4H7estdNfLz66%2B1a98hAfvJUpa4l5MGDkPm0%2BOARUumIfB6A%2FpSctT0gdVa6mPpAoXxFw9z96rVVdHlT47e%2FfX%2ByXWfOCUUZn2K5LvqZdhiKB2FMb4Lkhh9Qw4b145csXk2imk51uefTzb8sjOTbf1iXr7kJFX8syG13ZNKYq6pXRpgsp7Dp%2Bzi0Z5%2FFRYPobJLNFZcFqbQEfuaFNN67yj%2FLyvtjzLgd4yFQgBAO0CASiGHNAiDx8L5VZI%2F6c8cfho%2FOvNFBd3SUEFU2uqpg2TtV%2FIsWVQ%2FRb0p%2Foh7v9xxMhek64dTPR%2BJeqXiHw%2F5j%2Fc7%2BQLXWHo%2FqEbs%2B66U6Jx8xaJkQpYc54l57lOiBwQuXBHdvDYG%2BtcP3zGwioSja9z%2Bl6ytuEMpzaEE3BSc8QfMo3NVapbnYdTK3KvQVxqE%2F7lfCa%2FzmmgPO6XUk0p0R8GoYiURf%2B3ehdF6ELWJhQoEWypB98lDPxqG71RnkcdWdhLY%2BzM2ptqSk8iR4XH0JkRkkSbU8ftJTc5jKudfPHWJPUNufuZXXtCUVqI%2FOIaWUPKOchUizrH4yCmU5us8%2B22qtfb8rBIVs%2Bs64cXuXUvtWGLUO%2FJgy8tuoeSIHqyrwt9qf8w5qSd1AY6pgF6Nt0eHztJQJU1BTH4MZ0Danvn848xCElz1PE%2FcYOZMUwRYxsVM8uUivYpCYvG4AEW5DXDLz4%2Fhb4wsiakh7QjnQ9p8Z8%2FpPahvfQHeejo6z%2Fv3oYe3lS3TAcPEsoRg8kjYON5frAADC5MWI%2FBaXlIvQZextGY21%2FB7tJ8EPsT%2FVP4xRHwb35HDnVN%2FkXpzR8WZ80FTSX5u3ruk3%2B9N4dvcE2nVHXf&X-Amz-Signature=a808ccf8bec35b066a2444410210b3eaf3926021306e9c8c97c393ab8704f9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


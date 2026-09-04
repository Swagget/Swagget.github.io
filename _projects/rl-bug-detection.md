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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AXKRTZA%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T232854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDYnQKTniJTykQNPW3Nt4Oxx1hE2DpX0MCkmfMqqSjLIAiAuO4kvzlmqoOE1TEhAkessGP0UYWiKP2ljBb%2FukMoltCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnBPehVxVpp6%2FX6oKtwDKAFXT%2F3e32cgXFSc9rPLPKkftCeZcbhG%2FsynhooJHZre%2FlFnPWmoAQUuqJE5kNerwj%2F7EsQFctIjHcO8uUtyD1v9pzXdZasztDioSaZZPMZDsoTTovL9iNawvUQCNjc8dhDNmMJ9hDXbyRUNhucaUJ%2FBdlB6LR7GctQeQ5HuZkOOhJU2tiK8%2BVCygkiQetpoQ2uaM5Xe2Y4nxh7hF2hE9%2FaAUFPLaGTHjn4%2FS%2BHH0EdmZ4rG5Rb3RarIKZoTIHVRV5ocZv2uhcRRewMuRmEfbez77xN%2BmOCDvU510zQIJWs9%2B41LA95H1d5JzpWgCf0Kb6QXVo%2B1ZNTHqKetcck%2FZyhF3Lar738P7sNOlHyIcbQ1v2%2FsX3A9CbwrTIw5AviY57VHJG56Q2GCfKKBR8clCJ2MEVin5MgklMBXK275Oue6HleEnuThgcTY2EwF%2BUMi0oQlF%2Bro15B0SVTTYqyyjUZl%2FN7KPPTyCMiPvAATgaoGFbXYRWiUm3uwM0w7ZT8SjxxzaI0xVq8B9JqFPB4XPBHrM6SlKnaTX6wGwLSsIs9KgHjay9oglfBJF9fhHxAKLStspPzcSZ%2B4JdS9HsjEf%2Bi8Gg8gZQjHOiQwFsLpyA8uSEZtqFqkx6vATSAwm4jt1AY6pgEMGEinCDDrepPHTdAp1kOO7PxQ%2FZr08BfGwpP14tQrr4jDDMf1a44ovLENTfxmmqwA6Gw%2BUOq5Wvqk4RgKSH1t2I4ydSvHsJqXfPtXhHezQixdnfi64lHymBnp8%2Bu%2F6hI9i7znK92CN1c5ct98FJBvyJ0ivlnp9npUc8N7NPqFWRE7ne6QkKAxv73YuY1GcbvgwZ%2BQpDaqZ7BPD6s%2Ba%2FpLdJvbU%2FK%2B&X-Amz-Signature=957ecac89e51f42914ed7801e66fa66d891cd96c9c5e49945d26b56d983e713f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


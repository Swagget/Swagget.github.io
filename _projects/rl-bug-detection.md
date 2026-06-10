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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAWA2C2%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T020255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFAKRtZtBmb7VZrzfH4IZjuPKFU8h52hKKyJx490awXRAiEA7eEjnL640ROEwTecCsuBBZ5vDepLCNYbx8PD6x3%2BewQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMzOW8NMjSh%2FMOD1CrcA8bIRRppipsdDc5VZdE28%2Fd%2F3Lxn%2B0goj4g4MOuRRbdUFfrnux8at2Q2e8XYb1W7kukrOqhjebuU4YdlNgpKcpAS4t%2BrNE%2FBKa4liaSuxCrkOXXvLEQCO%2Fmz5MaiF%2FbuDRBnb1qHZuwRUQEdGpCjfxZo%2BnzzvQOaP0YRijA1CFQHV8y%2FjFt1rfTB7qIpSCxRSfqJ9C40nWaQ6OXeMezMUa8a6wBJyvLUoLKIj%2FP4dNoftKiQToTEWbngFcxIkkpeyg5I5xZAGknzKuKXFMqUUtUrZO1K4nAA4XCBvptwVF3x9FzAuUz2hZBWeKZ0kKd7QovDWDWogW4lhtfMzblai4PdfnoF55HP2%2B4NkV4DblhHoFrpRBw9QVrnrMlnzfUTGQGJC6Xq6Zdx4qWUqxLyxhiuY10GAYLGHfG86mh5%2FjpIQ0zieSMx90p3iFfHn2Jz7Y7CBLbzxojrcnP%2F87k42vJ9V39XhnNGodODGwn46rSUufGYzeQruMj9RBXKOZJMRAYU70MHOVBqu%2B7NL5IBrovcTD1zClPlxlG2UFHMK2tygoswO9%2BWjXJg1onwW0rIU5QKTGxxsmOkAZ8KBKeOxYhbAnYkcUaiLkWMpWC8qG4bj%2BM0rbjXVIDI7ZN%2BMMrrotEGOqUBZiYS7a%2B07lDoQMDevcFhBheW8JcgUhzZm%2Ba%2FLhMf1m7S20CPKGcAj3PTISun2PQojceRQw6L7DXZ%2BD%2BQDNA4zj556NgFQmR%2FfvnAAL9HY9IX39cDG4Gz%2FrjQ9XwweUUOC6Eis4pIfE4EYgzlmnvZU2ips0vzk98Lo2bbBcdb9zknFXsechPEpJnvvHtJIGIb4iL8WXTVjC67yUYv0r4pogjYaFLB&X-Amz-Signature=c3abb9dbb00a6cebee32c9b55ba86d26205a16098529d8268f31ec1f6a41ab9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


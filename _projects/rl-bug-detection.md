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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXUBACB%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T133324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8QZm77Ca6YW%2BYzLK8UWMGkEGQXfwz0qHbGSZ7Sjv7uAiBB3sszEuGa3bdi8wT%2FyqVwri6WLsMb%2FmLN11LNx4w7XSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM%2BF30Sm8uNwOGvec4KtwD8za%2BShSDy%2FDmTy%2B2oo26jl%2BtoYgxtbgYNyuUL6cDi9T6gAeGmVtqhklDYk0Mgovmw%2FnFTbnVpCq0sF9S1UfXQH7e4GKf2k6NmAnQr22fHETZIahr5R2YahAQNYgXROdH0LcAhtogzoeZi7zJdGv09qv4SEOnrVzOjvhN0k6PcPTDVHw%2FpfryquCn5YSn3VDNyFIjArm5EHxOqhp5VDhQ7LaLybLMhvvT8Q76T0F8%2FL%2F67WOz0b5z3gTkkX7lp%2FgfeDbVJMp%2BFkDZwGtJ%2BhCyVRnmXA5MMhAWVkyyGCwZm2vMcD88H0xeAiXHx0%2F3mjNHSn3lxxuDteHklaoH8K0SArDaL%2BqvxKN2YK9IQNZGmplpOzOdwsCA41BBdszlmv24WZx7KB0Ol7jE8dN%2BCPlNLCd6MpSGo3CP4xtSJxKmeoIMKy%2FebOkHHyGOqIjVku3Dcm7M1XTnJhrxmAfuPMn%2Fe4CYX3GT%2BAhPK2y2dlBh2NUIT%2F4MZb2z8Y4uS1zaf%2F8Q5YKz84TwVEWzGUs45Rwyt%2Fg1NOR9a%2BKEYnU8CsZRmGUyUqUmeyjTGKsaxTIlwCBjJcrhSpQ%2BRra49RZUqrnaO65h84iVxdGVda75CwPGyFVHHT29ajY%2BygH866MwjrmR1AY6pgG6DVHvi08LG2IiiGYPz0lT6pzkDaSooW4OOyeWuJUTvQgNLtsKSGYFYB7jDZbRmIZXHWEGOIL%2BF84g83aPECljOdPp9N%2B0Jq2%2BJ0LHJKxeH7JOpsx74hEXHajCxZA2eLUyFCjVJ0Aa93fxB7nPieljSUjtivhNk0uF5X3mQghIuy4eGyWT94l7z6aGBjNdxTez5eLhlMZJt4Cqc8n6c0SzrLcybxwn&X-Amz-Signature=27c8b18653286eb2374736cf9923c31b188c33107ec7023dd698b6e2abf79295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


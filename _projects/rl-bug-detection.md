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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRLG74D%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T121032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC2iCV8Uv6i7xJWivRMt25o2ewT5vSS3CGRx15jTEzhnwIhAK2P59KwgYjsDDc77h8NuFwLWv7a0xSWZ%2BRO62mQ4bp0Kv8DCAMQABoMNjM3NDIzMTgzODA1IgzF2N3KEHW8gPYXSVEq3AOj4mY%2F6CN077oSTXhh%2B2lcWbk7LLPNwUTX4RUYp4OcUqbIPdk6dPZ2qcWsMXVAOyMXwPrWezb1cyfNcdbDPn6d15NQqLPLiPSc4bbxamPQb%2B8ZWdzZ4JoO7YjBiBX0Bc16A7CUAAgUeAlUob0zITEwduCtzgs1FelVd8ewBGTXv5P2Zm%2FARF9yppHYW%2B%2B6OGOhP3jYO8yDVujINEylV6P4Fo8m9K0UJAeKbfvXLPx0SduQ9AMUs3zmVr4HOQ0ZlpbtORoF1t%2BPVKZZnP1a2ObJvHIAcjhx98JvbxIk%2FfbyLiypWAG25QbdYMhZ4aDJGnD2shqsVmGf1xxqWxTqGTrniRpnX17MR%2FgCrY%2F5mTgrlEXh7y7yWNBR3HcwDP%2F1amS7WKGfJpLGNOGokagDpmNQTZn2FrvSqk9Ai2Aw1y4iSuBfL%2FtPK%2BnyP9dTSgYDCgGsxuENRZKXn4h7iFGo1LPrYYKdCxzTzW242Mz%2FN25Hnj%2BQxmarbD2xY4OsEm6KRZ6WfHAg1lkWlXnYfYD1wE0m7f2iVBSbbm1SE8k1Lxck2FiFgtcKQyBB0GwsdeebYNNCy%2BEvNadWagHzYWdJAC%2BTD9Npsvot3nD%2Fppn1E0pbxmWzZ3EpO9ENHGZLvjDP4YzTBjqkASpwbaP14o7LMEVtWg4RT%2BSpEaKasbqASlO7WpIUcb18rEKV4gvxUphwm3CthMEdrEGVCQpJIwxQqGyfFO5TjneXfKHssp25G1HFF5lg5Z3Sy6YnMYeeUbMpHboVj8AwUztcdzWAhlPnMOQbInoxrSF1BEyg82VAKe1nOlUcXjTf1otKeXkU7hm6JtbmASQkiqgure3J5nxn1ghNt4T951HY31FL&X-Amz-Signature=e326d7fa1a69a61a1feb557ce20d629c004a3e6416ae85164b0f4d9314b85581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


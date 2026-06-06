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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMECWUL%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T091536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6ueFonYr2rT7UaGPTeLVigQnF9lMfDx%2BrKzhcOYE2eAiBpngUoVB%2BmGzpYHmwiU65Rd0jCLqazyempDJr54LE5PSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM77U366OaP%2BSDgv3rKtwDsOkqO3yc38aFJ4HDTpZWRdVbq769VmXr4fCG%2BO30OkzJiR7LPz6h%2B9kWFJoRzqrcKUZfb6%2FuYVk3TlipjEKZoILwFzttMPGiH%2BF5Ev1HtZJEhzNTkNLq97EfbgvgCqGQxSdmWLWutVDZIeJmld0aepVd73jYJHaLN10srTdXXV1OEiHcnQ8SnoLN1AUh1dhFScpQRcnmJZg4%2FXPxL3f6ayCWMWygYD1QzQNsC%2FM6A%2Bp3gXRaMtVqxQDPBGqMCiqxWtdwygPYnfV6Ol4G5C8%2FOpF7LhZerk0Y8mDHrc73XeP7c570HNZJb86XlRpaZYDa98eo8reXDVEb1k9c80%2BjPBZajaoYJ3zRdY5xVEebcix78cSuKBChqD4EwxXiL5fEQOg9Jk3Jf9%2B3ePM0O9zjArYUdHzqBAHkmIImwzQNNhkCOqqzdu7GWwQSwTxi3V3vUvYNLk37vfiqDNWfdoKl9%2F8rj69SI3%2FsHcjyzr4tXI8p3w2Xd5WApnOxcYnLf4gCcsVQqUNxcg5G6oqplu9Bqdp4ktu8BTU4mWzU3CjJfwgFg8xpGwaSaLr8Db%2FE0LzSTFAFYpqinyxkrzHPMCUrRrKwQUGgSK%2Bd4cYO4o0FalD2BE2apc%2BR%2F0mx4RgwiLuP0QY6pgEuplmEoCjRSMRBlfuVuwkEqHQWZnOd56zK31leP6GtuVRAisY%2BI0y8%2FZiOIEAG05X2qKPg8jMiyu610fXxu5RhdGE0hilMe3LV50hDHex8ACAwD9Obvc0Nd2q2uYyvLmaM9RlBeponhw43pO6zdnp9QZrlib1vvpuyyX5BYJDflca1ULPWVT4cxbmEvPLShXc2qs5YJgcBfpjgbMJ%2BSOsv6ELKWCb1&X-Amz-Signature=a7a178b415d29de65f6b119210e773c6742729c6252abaf4be3e14a6a8491dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


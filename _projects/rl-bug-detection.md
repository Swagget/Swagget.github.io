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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFOC2QY%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T065119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICl8s6XJIop9uk0vWDBe%2FmBE9XiRTTiaLsqaqtOKqlFlAiBNhKCfT2b9ZmCrn%2BUnlv5HenXRovKAJXKYw8CUX%2B92ASqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8A5UmjXKkjWYLsH1KtwDm4se6zjs0K%2BmsR1yzpUXJMcVr3A962pFPRAUX%2BScraaWa5yrQXIcQcaGVZ8fRIhVNq85eM%2FjTJNmhFIWIi2hXQmdk4%2FF5utadP3MEsyM%2BmXZGcWBYbyePuV6qA15jAd%2BSB7fpcxB4HFZdb3aFF10nJlIL%2FjDnXP%2F1po8KR2Rtrrj1Qsh5rkRbHPd5ivAlJZk64LJJSfIfDK5O0GPNhOgFusEmMsHUfjyUb0qK9jC70FQ33AH%2F7s0snTnZaK%2Bd9kfCufYJgZ5SsjzC6K0TRVnZ0CZzENP5OrATAwpvcWqcXPQn8AArm6R98f40By0EuC41MB1f6dg8Ymo610saLQ3%2BEKxT4bQn10MGDS75QlJcZTJFrwyt%2Ffo40d8a%2Fjki2hEIeoUbb%2F%2FEwdrGhzG4h%2FWta3k7yZ%2BsBAUqSwqxT%2FktRqrzACJ9LcLFH1fCb3YbqX%2F5Hdhxyy%2FbwaxVdxoOiXN7pUwQquArf%2F6inyQKodk8Gaz843UjXiOwjfSgtX%2Bb1085Dz29auzswHPKdraOP8Fxh6GsJ0zMZz8SjXlk84ijLio4p%2BIO8mmjAzN8H%2FY%2F2n6opat0aQuFsjCOfhANEhG29NSQEEaMLf6%2FAI%2BrmW2sz6x%2BagcndkTGAd9GJ8wm66j1QY6pgGOXdRkvm0eTsLUQXRXkYRNHo5jMk4IcI%2FntzAnVCpzoffzFG8ER2enz3AvQPw14MDFw9bV97SPC2DPznDiKdiaewHNK4w3uXbt6LVVR4B6wbGnmKiCCVHmeUkdt6gnSGjQS2TGet0wzzOq1%2BIkumpJD%2BRKnkZw1aYlMuqMCFsX3JPAoOrjQXNZWjr0nnxpx8b4c0VgbccNYggFVuuMZC30oRgBcMuY&X-Amz-Signature=6a8d952b91cfd202f6d0069ea54b0d469c624882c8a775170d6a5f373040f412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


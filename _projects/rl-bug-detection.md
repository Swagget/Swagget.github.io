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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHW4Q2M%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T142935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzTju2t97lp4pQ6dkItbHMvofBo3u0xybPotDpTXpgdAiA5hbk%2FPBR50XOnW9QYvkrI7pkCDMU%2BiUxPv85K41UKKCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaFSMvtY1DjAtO0zHKtwD7kyA8%2FljJxWY%2B8zGCfSm8tEVywasUxGeoQMfqzRuXVGw9l2ZkWBtAswbHbD5WS4ooPQl0sN7%2BQihOlf1PTDy7cIyXKtALG3Sll3hBgizRAKh9aXyWtQhZdrPGetuRe3uh0qumQRT4KDHzGph%2Bs4HvtxbV%2FMeG%2FyPhfZq6kZEKeeAwvd3xzvL7NTA3z7Itxk75IgA51imNSFBdaVjsc%2Bv2MBc9UaW6ibZwXJWOdGNwvQXZguSrFxHSMiJFwYfBNk06Tzaf205geoTcX7vr6fsW3OXQqajbRe2Gd8y5LuB4FJYX6uYay6OlctoXZb22Zho6tPaYj3hntahn89SMYNzs2snwNgMWZuqdbZRQ5wkFP0Rm7JljQ2Zor2NZZ9z4IIyKkD4tVFxUj5XgdgxmaNIr3VkjI5Dn7yhvFf41OvwOu4dPmmXu499UXzVsyh4HaXr6zbQzfVltPZsaQL0md3aqx62C1oAdoGa9V1AhR6UYwOuSyh4PhojM38PAsSq1wKiZwlZZPJ%2FePWkLNjGRJUMZn5af5wFYebBXrdSXdvUzrYOehGzNJyaJZNAVtpKav6EOZht28H9G0aJlj8mDAxSnh5z7UQRb%2F2ZSD7n4q1QyOZpOA5Br8vN26ZjNzQwxqmV1QY6pgHx1eW1cCsUWEdFd97UZclQXib%2Fxw8obiRm88Ggr0rC2loaGBB4%2F1urb6G5I0%2Flavbrf8MLbFxafOUzEr7YgdXnonoeC%2B2no9Daihr5LcemNmN%2FIk2aZFY03gMRRjKrKqXTNr4nCOhXLAGPoirRjKO6Gl9fwV9BDEy%2FP4%2BsopvwTdlCIXuB2fgSe3i7dZDToMwymkCFZGEcWKe6d8r7vYapFqykTrAa&X-Amz-Signature=a3520e9e6c6e7271e2c419c74912257eb519978fc723516294f0e8cfd75f3605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


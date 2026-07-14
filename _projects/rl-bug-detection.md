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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7D7KOO%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T070100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIGx0NHJuSiCYp9RlDd4bG1DFtlKc5cS1fcbrFbwsT8wcAiA0yD4HBoZacKLVsXrc7Uwg2wye81UR7Z%2BSBsvIvox5aCr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMq8roQvfRnmiJ9MFpKtwDXx1mgQto%2B2Ultr%2BQCvGtPX4l0vQFclvdJvQwoTLlgEI2552vyI2uSDw2uaSIJOvTztdKgpePml0oUz8pWorum9laHLP5lVLONpU4%2FGBSSpB%2FlKdr71DDs46pNWbAuaeblbEstl%2F9%2F7mu4y0N9DZs3HtGnBsIjpnL4yRVIwZdUlFH1vaPLR3GIuy8Ewj8B0ry0hFMQQFlqAHyZKG1U5nXEYO3yAuavdCIgEM9h8TfaElz2MzF2OsEo64RvYlKJH9qHcNNckCaPGyE%2Bh3Li%2BoBuGtX%2Bjx4C9djjQlr9zLTBqfeXx7zwyluIdlj2%2FVcz%2B4p6uczqZoY9IP93DX3X5UlcRDNXSjMke18fruvfn4x34uyvdaaqEcEYPZGSb8Wr7xzkEx3BHoU3hscqJlS9TEBin3Oo3DO6MQm0KaOVeyPNN4jBHML5XeISsrTYtnxZ9CUFwpxCuEm6%2BPD2q8TqPYHye5QljQZwXaCrEy9rSr7%2Bqrzi7WfuvHU2BuQgxGU%2FuQvbPh0aqymJ7yQVE%2FqaWHkn05O%2FT%2BnKikaKi7zdjeYtYxJUn3jMc0779AAMmGDIQUhrol4x1osF1cncyBXxkakCSXdKdA44J27823ULpUvxZl9k4Pi6EuTGJKVOrsw5ZLX0gY6pgE%2BkUPnbzPuQ1yK8Jg0xLKPLl5mNkynSmsqlivlJfNFyhrX5SY%2BKbEDZRB8zPmeursEZ%2BnWB1izZNzD5yg21A2sEQjmmgSd%2FhTXei0cpomQgC6oIsNtkzFVZpCvHIjxBHi2QgcDVQF8nGhCHVD%2Ba3moYZjQSGxqp5y7S4FbieCMgxp6DVZfB6U9bYgIH0%2F9pCAGZy00KJVJdHNQrgZc2eGspeP4Tzth&X-Amz-Signature=366b7e4bac72e5b8f91dc3b0d421ff1c7687207d18c9082afa36caa56391d659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


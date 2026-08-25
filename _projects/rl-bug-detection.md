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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWS4FN4X%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T201358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGDE45Y5bGXelWtBCSjn1DE6gA9%2FTlPNS8BkkvNN%2Fbb2AiB8yrSZqoYMjsXA6q9R6YTq8h5Hi5vVnOrz63fAu4wZYir%2FAwgNEAAaDDYzNzQyMzE4MzgwNSIMCPMy0oP4OjvR%2FCcRKtwDSYkyC6ZC8Ye4Z4SM%2Fukm6KkzRaAzuN2eOnPvyAo1Yp%2F8et7rCrQY1yrtZhLDyUMS%2B11IGE0aN0UtowZde2tXMZuhNj5yjz%2FXZYlCN1XQrey1LVMMum9q%2F4duXF7sQv7zuw4UiEMAysG64HyJoOgJlF7uWJ2XfxjLh1SmQ%2FD9PYHwy0qGXdZx8eqkgNPP5fOMPqVDXq5HPAlGhR6uEq4NLMwidg2GauYXZxJsWimPZ6VWvvmPxQ8xo3KK2YJ5HnpmdPtnIRxI8WfMJYPezpd2UKUYmjYGVMXoQ%2FWro9ixxoYNvrrklgUM2hXpk8zmE0BksbU9fzYRqHkvxVxiyGKXlme6Wd28R7Q4uH1pcWkDEKE5YoL2T6buOA2bEgP25rHhCvkoicgsvMcYse2YntrBA4LRb3HXfAMVzLTKHLy%2F0s%2BXSeHCA0Tw1%2Blg9TDYQvtmnJpj%2FdyStDeTaBIuSTrXF5EGUlQIXh3Fq2U2Ll3EpGDIrHF0mq%2F3lFfnwAwjyF4mnzKCFy%2FnolXNAMAyKpSWflmCjPt7halszCGgw9BOTsj2eV%2FnQPvO6gl2235MrtHNUMD4wFgef55uNLu6UZEEWy7IdDwqWewXwuQt49cb%2Bh80e4ZQ1TeFDY6xZS8w79i31AY6pgGM8jOL9LZdaotlxDQChQXDO38YH3cDEd8AfV1vEO9lGw5Vh4Ym828XOou3HZn08vC6DYXYSfHOAJ6tBH%2BOPOStSJYPo%2FM9PNkwSahMu8GYGMZoKj8oRA28PrBE0161TaB%2BV%2Bbn2agHEpm0%2BT1Xg9v1s1FIPC11%2BIpTFtVK%2FgbrNjYDHb6dNauQuSN9oVSSkvnXEBPyKRUu%2BrIIZ%2Fyc8b3F62XVev84&X-Amz-Signature=166c077416461e7b420c754c24ad04c868bdc68e2512cb980745074a524e9834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


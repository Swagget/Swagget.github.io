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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEJHOBW%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T164406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIE%2FQpMsF928R60MOPwLUpBNdQP3J550nZk6lnamskDqEAiASBMJtR2XPfOSqynk0bQBiohR%2FTwN7HOMSMm30oaRRKSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP0O%2FcQrQdpWUf%2Bk%2FKtwDGkZPLdjkHqWUaWQawkK2OH1Br7p9gX4Vzyb5AqRoS3sk2jWs7YQV%2BKiYKbR%2BPTmItiGkssMmjBrjyJLmYiuVUvfDy2IIuuJ%2FLwEklxWtXYiua4j1lkRjWcAX%2BA5sqm0WAX%2FfwwzgrHtOBnQj0MazbZKQ6ED9B8Zt80%2F5sFZ9gst7WWc6Zt73ztodT3FiUq0%2FKbyi7TkINyzOlQo9HDa6XHAZZpUIzgR6LP3MQ0Y1ac8qTbB2S6NiE7WWWDymcijLE3LFjk15cKXm4jadAWU7S%2BwALkI%2BjmkERg%2BK2eRmESIpZaAGw1m3PPtLnBCGXX7EYXs7vJ%2BkBxAO8jksg%2FqONGyqbzUApyXVClhQ5spqz7fi%2FSRYUTAep6oGboFF4BKboKxC7Uv5uvz1m%2BYSVEZFoLzIugQHMAdkDrsWNzyz6N2u52xy54roiDTJkngk3FkB0wHgXZKTzpsOo0oOo9mfOk%2Be9VlBtM05GxTKJ0UWz2EzX1Jc6%2BbjygVL0Omue0IktAQ4QXmjOMqLFc2m8c8ljmJq93UIM6mRcd2FgcM4%2F8mO7hhZYR7PB9Mz3VK9kEG6MVHuUP%2Brv1DTemOEHW24UU1%2BpIhDGkrQuTYmdMc%2FzpglW3ZcJtnuTeF%2B8psw4J640wY6pgHMZaw%2BbAqqkyzvfiYj4HWUMbgKrC6dOCoWRpxA%2BWVvqGHy6sVXAp5oZRpKH5JycHgMUAN6Ux51Xq%2BLvxsgiau6zKVT7q6bD8jEqLfq%2FAKHbPHrnNJufhStN5nY5qQWVdK9WFUQoJ7ThlY60ldWugH%2FsIQTd9epkIbchGRu2FtnqIyjMj%2F7G4h0tXRq1nvO84pHm%2F2jr6aCPUrqRO7ZIQX285jceHxw&X-Amz-Signature=a8586b5d60f3d8c483c85c538a6936d3ad01f753318ca3e809c5f28732c96bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


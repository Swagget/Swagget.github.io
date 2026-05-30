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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676HIKX47%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T110956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDnPc9NZEI%2BkjV92ObLQmZzD%2Bfq12mA%2BIjupj3cKFwBbQIgKy3hYhiER3JzclqTAc3MArBOf3HVn64hUekSpCvjTNQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCylyPoH4RnstwR3SrcAxGbWkoFI6TqxrcC1LY%2F%2BSzTNOkm9kS9LWFJNKT9U6pGRwFwL8JVqIxkrLznexoVv1GuucfIwiOz00BkZOYu%2FsjjvBVhBp53S8ve5GdEktNmviZFVV1WsUsApd%2F0zuve2jNBbN%2BqYTf2yrNGIJf2i%2F4PB%2F9wKH%2FC60cKpwSZOVzBhuXyfFeniIVVvF7ksL3CT6%2FMFHiwymhm2ww883bfKJXkaaZm%2F8dKmW0CaLHWmkUi4aeY5RVdm9zNH%2FShLjeqn%2BWNsHlhU10e4WsalSFXSvrCx2nAHYSvBlPWsSoeHc4DIzCAcsaulbZHAHa1jqgyXU7LQwOH4glQyJqt55qp%2FZi6PiLfpLjrw4IePkab%2BH9a6M%2Bppr4qX4dV%2BMDo4GveiXwysbnUKDtAtqchOrfuKtbJP%2BulaekuTS1q3iUXQNuxKaT%2B7AoYcnLFveoS8gmf7Zq47sjxPQ5NbqAArnVWdsI50BN8YS2JdQhlDQwlj776fhfnqAPq6c19rKQONADr0vKBQSdqFjRLTNemwKOMKokQ2SX8Bc9LEULIjy4vb1wc%2FhGVqC3lKHHmxWiLckyMEonfekCrNbl8KgaLrG0jZWbEoe0%2Fsk%2BDsuPrEM9VNN2eB02rce9%2FkAnhow9%2FMJLg6tAGOqUBNoOUBXWP4RbR4JzmU%2BTuHSkuvQQ6LHtndWm6mXV07Lllkq8IFN13ZvKaQfAo2qXyOfRoj2jE2DJt9AB10%2Fv3vm%2FJmhbT%2BuoBJMaCrq9Aw%2BJ8IzalgY8atjSQEhf3ErSmKX6bJ%2B2SaaGRxuNYn8XBEr7pL1qzjbYU3AWjBnua8c84L8i9RyIhum3WioNQ2M%2BEcW%2BmVLeGJ47ojj1ahJmGQ%2B135O0u&X-Amz-Signature=97d6f0d83752ee253b25a1feb57ef6cd7ecdd5c296aa2c63e5b65863637b5270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


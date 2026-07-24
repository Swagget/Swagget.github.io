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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAAFZG2%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T215223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIG9I7SQbIXMtpqVhLzAxPeY4%2BuMHeXyCLwdYjcnnW5pQAiByPFqrrNtS7F0%2BG3qLx3%2BhJk8P6DEPEASHhcbzx9sT5ir%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMX%2FTgu8tocAaI8FHFKtwDHKm%2BGB%2BvS0%2FIZowgUf3jjnlqDsIFgKj9ObCqzVdrcX8SL%2FgBFnQn%2FFjC7OtuKwX4xY3S2%2BrdOVu%2B%2FpkhYvXHunxpKgph9ZS2J20t01ofwrn9jsodRXwbNm7tQI9Ec66NbRFK%2FgqRNfUTQ6AaJDdSZA07LMlDXUCPUyuxY5iPc%2BURaAESMe9PuJ37XAWkbBYRmI9OQNCifo8I4G1cNce0CnOxug8%2ByDuQJbKzIPnjaB8XgONhtK67gfsEHpOmcS8y5LZ6CN6pcqF1DKBDaBqG8cazVbwlRXZut%2BNRgojhEs%2FbmSl6ZFii1UGNEP9QutJ4bmc%2Fn3iE1ZZiF9%2FLY34Z3BtLWOoA8l61qnQq5HoJFzOLqKQgHnMEZVACWBMAWqseVinDmgRujYUzzUbpfzDIAgVWXcpT9t171i5xFpMed6PmiUxv1wffKv8yGC5MPyWiQAn0JTVH8gbqKbWlkoA2YgGFtX8LCFthKcdqG9p8ruGCAjKIuLsdE24WpaTfFvIdAozwGcgIzHQE5s%2BQ5WNOhmsAdQABmGmlf0Yw37mSpAHeMHk5OXlGphADnzxgK289SC5oT%2FIHR9ivqU%2F0cUhRvkcGoUWSgoBPCZMmwOx7OVmgeYT1Aycid5TqZQcwj7WP0wY6pgE%2BmXb%2BNyhXgEyEaq62%2Fc8WtAeH6N%2FZalxpT71bwVb0veFPVWGJirmd5oOZNh6%2B9AyGw0EXQqVVxxH%2Fa2nuwV3EoLSe8HLEgaL5L2w%2B8ApBrmmBM3hQSa5J24Mu%2FsgywmVWHe3LPuR0sVEwywQ8C5WYBF42ndY7DFGmpa8kBb0U2Ao19EB%2BnkHfQLSy1%2B8zG0eK8z3fycOVxbUC2A6nMtmnoQf2k7za&X-Amz-Signature=79c899110f3873bc16fc3e7d0204dc2a69a317efd5924061ec80ce361c591e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


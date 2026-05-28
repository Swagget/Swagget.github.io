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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNY7EUA%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T010655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPm899YgjDOduegMJ2ItCqu0sNiJ%2Fgu9yoloa55yRAzAiAnQ5h36QAZzbxUxzyByEIcrjHzVe5tp3io1UeTIMEHcyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvNIATlPUrfiBwPcGKtwDZHuSokTiBbW00%2Fv8OPBTr9mdSqteQKIoT1hb9fl8y1UAPyPfJSXVfLkIQEABmoxwD1P6rXYCcrwSF%2FQXOlGBlZ4huVFO%2Fq5USqPz1ArgweUVWO3%2B8LWTuNQCP9qCx7LE0tZSJ1WPTkBCB9Ex%2Bs0lhY0w7dcpbevLoJhYHkD2nWhgM%2FeVwaDne7vSz%2BUdx7HMOSY7IBhgFBd0%2BK8sik3GYbEtcUykfTxFBBdGt894L7C1W6ZNRVfm0ItsePmVPJ7YZ15EFJ92pVokAW9a%2F89hoduRpxbx%2FjWvFrtQm2tsbkzDqquToxeqZxS2%2BYK7rMfjKgwIEY%2BvfCOhEVqffXj%2BEmG1RvCnUw6ltReR6t2m5xxylWwl%2FhT4jLKkxV3z2l3ZHBsLGVabyvSXwYVVX%2F02fUnINmwKjgSx8o02zheboOpzrdIgHx0uNkOLmqHgXI1P6VATaU10OVUQWc229XuUZM7n4%2BgDkvxWEZAfMV53B0iP4UauzRABZoQl5TXpHFWYj60fnXYexdDrKt5qIb2cFfl9jxtKH6Air9c7ZypV0EdJ1rXgZfD1m1UeZlshtGuB4AMnrAO90XePuE%2FtaFlHXkqJcz5lrgrJ13xplhzQi9wp8DjEI0FAdBJUYQIw3KDe0AY6pgEnZfiEixbUNz4ndwRSQlRRx41E8MOHxrcsBn8bYo8%2BZyDKWGFeLS7rzczl6Z%2Bfv1fCSV%2BtyJVaI2jWRB9ReHDXG2bhJU4grQgQumcWUzCMJ4G7LNCU5IJqDBQ3Z5rQOZm6ayxuyAiw1SxXOxmu1iDdDZmlPesc7ZCL5Q16UPUJdghZeFRPBfdj8rV%2FrC%2FDwm%2FzOY8B2JzxQNJzV19qvZRvZ%2FIunjFv&X-Amz-Signature=c9e25ba2d545b5823e82bb07de4b563784f1d1b70a1f8ffc44d1e8acf7a5e0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


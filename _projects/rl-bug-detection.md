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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQTGG6G7%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T014332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZO%2BS%2FHgZWm2u1tqUXWx2EvjjyArpb8LFXYxjAMKHdHAIgPc6mrBlLWrWKzNJyWSrkie3xdWUSRNGIfWkHjr%2FbWWYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPzWfNdv9G3KfPJemCrcA1TcdCXfZLsLZU6ctbZ7wLvW7bIwoTuneMY8dB3HzqllDFM04PXXNrKwhrgErT%2BDtpoubCNC8zeWkn3WUm8jvhgIGC1LVFyVfQdiGJoRDZcl%2FFO9e8Z04pKQICNvZU%2FM3cvYpBnAX9eswrL2LLhTW%2F3J7%2FoAMZjlXmQ8suwqwtZHQ3cIVLK9kP5hs0clefoQUs5QPTgrhC33qsViI5BykpPY%2B%2FXaCzyAHl3f8DVcehNCRGiBrEzP1O6fEudswJiG78NgrSh166pvWXIWOI31bi74TjVebrmH0q9xSwI3%2FQeCZc7oQaPLgwZ09SSxA9QCCVIp%2FHbpWLrQg7O25amly79n3y5oqUFnn2WbTBD3jZXI9gLr%2FB4bgsuEDvI034ixEgHQ5o3%2FSLQbCdCZHL7SV01NrxNMZyhK6HexMy67GNWnAkctuC1pdESXvc3jf%2BDzX01KTRbEccfBovy9rJ3mTvtGUgsQKmrHQCw4eCJFulkKaA7yL2UcBqVyK7pfVD7ymFquJ7CO6VDOstY5rzHPdwdKDErISY4aghwvdLy%2B2CUTBSFlIUC1Kl%2FPDkW3rKReyGTKdLz%2BLLJWJSe8og9985wt443g4CK5uOEJLPnVEM6Tepfl9gEXZobNXUD%2FMIbvh9UGOqUBp5%2BM6dR9AIMzDhH8QV8EZcAcmxdWOCY1QpxBE%2F0uSaPpxnIGRcz74djs%2F1Bne%2F312CyevuWk9FLI6wGGnXzdFYkw0fgclRjvZJw2rw5v%2FQUOhC57Ie8eesvJkbOSlQZ52XhdkhuBkEbX0WsL9eBhnXTzmbl852MYdnVOwWkC9EVFots7v46%2Bb%2Fy1Rcl6j6a%2BeuYvJgsr0W9TnUh%2Bshq1fD4r%2BMWy&X-Amz-Signature=9f3be917d0baafd6412b2942415142a5b7e2d7d95e43934509df14d41fe56ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


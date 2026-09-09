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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EWREFF%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T180442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJpGMaPVL4%2FSARHAh%2F7q0ikYYZsYA1qepJBmfYKMFe7AiEAktgCqi3PObV2gh9hphbKKIbTmE7YaO3n93zbn3qrXkEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDhmdgOAIpqbAzmHcCrcA3mqCf2RQCvYsB%2FlfiBir0Av0js6RLFYEClDUfBB%2FwlXSjT8eNAR%2BbyqsUxWkwOJoUCJ4gMB04%2BQ365vEp5L8AXKy4Av9zCOoZTyD0C%2FkQpdPBzeywpAGnU7xbW3mMNS9ZDfqmVkVJJB9fb7bzON4mODXhJnE0Yx7V1cnkyM%2BxP3RVlR60XxD5OZKGJFkt%2BURB9t7KiCqSLhoh9%2FgP%2Fdmv%2Bc6VQ%2BNDH6S0aSLc8mahLef0cRNr16kjFQriJPz2tqF%2BP2Aj7HURXdv9neUyTotohNg34qjmc844LbUuz0xtE1biLh8ej2P1h879TM2ToidrdVWKhH%2BoU2JpeG4qMr5XQRwIXxfskBKRDKVRwYD4BuvcHVt8vZLO9pzUAp%2F0dkEKabIBxIn1pIP9P%2BiYN8aG1r0nTdpVFFbXrac7ZhbH1IVNBVFFZPK0HAk6Z1uchccPbmFhotxNNo9VzF7VKUkVZ9P3eF1%2FH3eeRioQJjhZrGW6LD63s9CKKkebJjF3hzVP1bA8h0MZ9IJjOfsOESpii3SrM6LZZvfejYjqmLYn9LFsmcH1UXdcd0oftm58LatL3n5tbEaZB0WpmFit4KaY5iZh%2FstzWwVdlj9qPLGuYNW8hVpQXMMbS86QmwMKSlhtUGOqUBmf8xjXYFEpoRUWtQ4g%2BuA6fxwvXneRU%2F24rSUTXOSYn3Bmhd6Ask%2FDVQPRa%2BCbEQpTYKbdh9mlcZY9%2BddaeH3ScSfV3DotABFYQGr8j0cFW94snF%2F%2BAf1%2F1f2AUuA9Mlcp0TLxsdh8U9K%2FdRTNkWINYAoewiOlNPVLQIxMkWwK0FX9hWvvwWms3itbN0VFtuLZjNlMTq6dkJ%2FN5VbAuUR8LIXe0g&X-Amz-Signature=99ffe5b534f88afd2315e2adbe7a623049ba35032267400ce6555ba1728ab70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


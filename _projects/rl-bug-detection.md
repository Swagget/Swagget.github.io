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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJPVZ67%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T051914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAh8neSWIES2VQwRveKKT3v8yxpMkKHbIE5in8nJQTNlAiAxtjugrBQonWYhN8bj7ebAqgWhZV4Vt0OizY2I3fHOdyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHOz1KIWyaQ2RvAfRKtwDIOuj1bY%2FQQbgNnUhyB4xMnOZKIuTw5uNmjswUXOI%2B6t2S0YDBcNzG4mxp9u%2FRR9PZWzKKINw%2FJ7hT7EjkeCVEJCwvMz5Harmuc0dm98wR22Gxs1Mk7ltwyGLDs7lvyzmvi6tLsyCpf%2B1C%2BrURCZHJbIZS3viUNeRmM3GUxFF7ZAX885dJCoZw5H5dUhoN5kQDv1nwhejq95KPrNtAeo1WfeNvKu3brjbLbVOO2WMiCdJzA31O7ht2Ba25m7F07RdT3PzmODY68g%2BA7d1lSTvAU4P7OkaK695C9FzRcs6ZO96yxgi2EhXs4GmOu%2FGv%2FrZeVRU8JgCIwfFxbcZwrEzHO9I9l3vRQLYOssZEsmasMWGPftBzdIDTqBH56U0RCgUtegzfTOolpYqbPk079y6f49Drh9lX6jPphDWVOWVM3wwb9fc9385mUaqCd5ybY9PrX1XmaFeAkM5%2BaJ%2BWojZLH1HV3lY1Jct8%2F7XmRJxK7KKqVewThn49h96L0CxeHuG1eM2YK2TFN8pIK%2FlUe56MACPd%2BLibdSz3JC3qQHpf0VXAtWytRpQUnncdvzG%2FUXTFAyuyVXTq%2BYtPzg6GPG%2FYc2VOTEfbbVvKC1NJyovwxFRpLaIJzm95OtJTX8w3euZ1AY6pgFQtp9xQoW9%2FR0Lx%2Bqbs5VWC6iPhtioJVzcD8uEp0IdMGAZk4DFv%2FvjH3ra5qXN4x7K8p9qA3wr1qtzyfLMy4NKowW2m47pNLL6UWbptWCDJbFipXNRXl5eR3KWtQ2Q4v4epBULLkPQYgCSA8qBHISNkSfxll%2BbeGTU15nWEs0ViPmBkuqJIVuHFi5j7kHFZD3cPcHYlvgRAz5FpD%2B%2BcdUzp4lUQrgX&X-Amz-Signature=292742b13587a47001839d4b26839d3e21796a28c3e222b25b318c515b329266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


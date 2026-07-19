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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQTLXAY%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T072334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7ykmNLtvGnan7q0YrysAacqDhWm0itmBZCylfQ%2Bf13QIgA3tmyLMQXdM%2FpVgnHQzRnwzy3SVvLn21GcRI%2FXmo7KoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0DyL8Q8SWQX2lBSyrcAxO749IYBH8F3E%2FJ2x3%2F5s1z473wYrAJlAFuwStrgtldfu39e92XN5V0fOHph%2FXGKChlA57L3i5RnnbWuB4XmuU%2FAAasnX5Jrhw7JLu2Xid3oEEx61%2FYYUwgzCnfck7vaZ0edRF7Z791n4nw3149p0j0xgj7gvLif8g6S6QPkCEtvf5vqYgXEwhFgb1yPq0rBlXBeUL9m6LcXD50SvK%2BkwsV4vFek%2BbpVSxtrdMGjv0Xf77yQvfYJhbTcE%2BqvBsdw5R7ZdlPRyDssB7fZNyLp9b%2FNn5anc%2FRQWv8YyHHGAvbBKoNJ2%2BD5agwzoORq9iqynJKIpj2quuOy0m86i2P3YgijRKVJtVoaFM7y%2BiBeeuI24S4vW6N8mHYym%2BSiNBmtYIle3vf55JhtVVyGj00MGgvCVKF8k0MYZ679yJgm%2FCQfb6Nd%2BKZtvVKZvhDSXoAap8aFfiEMAdzfNPQN9OYmAmR7k6iMYcN0Bve%2FLZN7GUSu7x43k7SA612eExW0gEht7Qzp3ubzYupb%2BI0wqkxII1K7SeRyc8GMzwXBu6zx1cZ3SprGcFetYDpkgHeQtVsnpE1ExgNjnfF9ivdupTm1YHOjXDWVOc8uUe39m4gnDNb6OJKBXGpVXRoZhCvMN7r8dIGOqUByLdX2Uom5wFxe0p2MzZBemnBCQurz0eu6%2BLRacsAliZHmB1zJHf9p5Ui5xGYK6TYyu5F120oYZyfzzUz9AeCi2ihckicEU8EGrYVZtmESNQ2EJ%2Fe8YUDCKHkhwgI4ZQFpNY9dU8VxG4SBCTLbhh%2FtOsKSmNdpEAXTkHPOivRtyy5iDkNj25cKNw%2BowFH29A33BjycsiWkEKSFrAwTocIhyg9BYsC&X-Amz-Signature=58c6821638c5f82119e9524af5eef3deb9ba7cd6dd5396abbc966ee2c043f519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRKZVQD%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T222821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICwjnAPQsAmjsgXBlJYYt0HpHgPb6CjhDb%2BnuL%2BnQie8AiEAyegsX1UpngN%2F838Ij0PLJHuNW84%2BglTmCHGNhOmYowMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6Yc9sX41Y%2FA3Hh5ircA0SNloPJYIHpEH7Wc7dYO8c7z3z0Y5hJYF5%2BllUf2QRyUXnzqIIg0sS1v7QGO31N0%2FJ%2BaZ5Ip30E2ckYHRc%2F48PpMkxSdPKQTJ50ZH6GaCxDOxlkpNEtESI5PIJocRaMMj3drQmdAOxqyI8osi7g6ENV3CpduTNX68aYqlrRTSOUQnd5Di87rTIfHBOf9h8j8caF4MzZuugsCJNT%2FYEFBCzildMsyRwPBoW3HRQcGNv6egNSNbXdQAKEKwRW7M6HOX%2Fc7H1uga%2BNHM5kxgGzItDypNlt2Qa7Zo4sozVqWY3eRuSQpUy5NKgGO35%2BA03FUprMLiYw9uNGcupBA%2FX%2F6b7YQVtlzCrWpr3b%2FLNl7OxOmYe9eF6RB8BIb1fQoI%2Bg4CbEGjp9aF4aMUmEOOJZ77s6Y6JkTb6T3vpYj2E2NuSdCraEG%2FT9rZwstrnkdj2PAb5x0phzW2zw2lmPjhRUeszUyhCbcTC3u0qkfnNiLG6uBXLQVau6VferdAJB2tq9FZw2ys%2BXuOhJoXW03gPZ9awIROW9L2BTdFopX8wBiWlWKDg6Wr8X7hpWO08wA4cdQFYbMiv1zOptXaJkdIZyAA%2BR%2BpXzCSRy%2F1rFcCyi1VL50enFNlfgGRL7jV7yML3e%2BNMGOqUBwuFqW%2BnunrKjKkMwxbOcdxAMP5VcVrvJKqncAWvk0%2FwCNfTcfYfW3GmMD7texFBowUcaq%2FLv3sSMSEjmyQ7GT1jeIMp992jS%2BflSd6IeOiw6ZsM12H3i4ZdI9XAqMlxGskpJEUdyw6GmtTtGY%2BLbNMqCeFawi27FdKQvf3q5avPm0Tg4ooagxdQ0awe%2B%2BofUn4AvajsA%2BnSd6hGCnCquSlSo2PTT&X-Amz-Signature=1910ec7b48e5d7ae6d87e718b40e23a180979cc545e67084c3a8f28b0fe81e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


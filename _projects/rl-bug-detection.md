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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B5AUZS7%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T004318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCktO11cPbcze8YBhEMzEgp9TnqRhKdC62ZQXaItXS%2FTgIhAK46NrBMgiBIV5IrchnFq9ihzQ8in4YYtgmHwwIbmXCuKv8DCHcQABoMNjM3NDIzMTgzODA1IgzcATVagi1AOg4ENksq3AP%2BUVwQAhdCmjrql%2BrSeMLFjJ2E8%2BvUwgA6i%2Fv3z0DLtWh73dOnezERgFEnil%2FphZiE6tWRugCaWzg0epPi%2FNHwf7gZqyS7h6nlP9fxtZ9kRjebZuznchzzbiL5mwNq2hATuzG5Tlqu3tGZBSctS2%2BbeMCzN18AoYQKncAl%2F%2BHmxVy8edaHE%2FC3pD1rVIWUZrUqG4vSxV2%2B1PaxgpqI9aNFPeLgKPFbey1ltaM9NfO2VCjSDAUaKvyhWJcFcczbQuPYKr5OwUGp6tU7WrOjGDQNunYvYYvfgCfpWZ%2FgcsC3qCZVY2I%2BXfJ5UWulDkvIDtFtw0Qns%2BZK8vEWO6ctqIZJpxDbhrVrRrarT0hUY5Enxm0ABgdmRR8LfqgbZWD0Ak0hrB7Tr%2BT3Oxy%2F4%2FNm0d%2FfatBJSQ0E2WIiFrUWqxiPj3PohYsNdZ4bZTzvSS6sxgBvDqcixBYIzk5sDtTZRfM%2BoeHDUyJZA%2FpAfCCLAaKh8nxGTloI0advXINqJW1nKaPWJhtIjLfvFEgItZ0Xqyg%2BMqwktQ8AaSbiq3Rj1WrNiBRk3l1DatLuyxxU6gzyFY8VEXMVNlQXF3vqsl%2B7VbwyeBSwA%2BuSN8VE7mJfXZQXladySmCYWVzo8NEO3jDj097TBjqkAXJASMjGFCf5i%2FsHO5JLDhuSOkZeTcUYjAZAUz8TRDOXyidZMGOYTdroA1ejH%2BN%2B059emWJG9m0Lqvv9Ih6Gyeg53sUwB11mZx1Lik8QUveKf1TWcZ8%2FTrjhlDvMlyFklw%2BBsGJ66MifvPNK6%2FD0IhHH1Q38MmaaIK4ky%2FY%2FGIuLfj9%2F9IUKag1z6aGtLuZjJcou3yPRNdEB5gTKyswLzJFdIUan&X-Amz-Signature=eff83973da978f296393a6d794b73252381e945a6e095be2a4da86b143e36b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


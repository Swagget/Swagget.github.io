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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKXLZJ2%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T023422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICzQUOwrePvWk7EB6EuvDNUaUIigck5byLFdZxj3wFdHAiBaSmkoRmydec6HwH%2BhQOtlvoGIdydTYKi3Op5zmpmWTSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfyOahRi5AUi5nIDvKtwDEbQ33umtfh98IYryn1TZJsu0wFyey9tMQe5GrUxpvlj6gSu4j2MnDHVSCTXibKEb7FZbiv844cHh9Q8uf0yXzwMVmME8RRMJSL8H%2BDSd%2FZO2nWDX8rrELtpr70omkhkWxHCWH7jcmcmtTBoCQEjPZ3OdxwVNpi8rCbaKHqFJpIyGabTa%2BWvEAAkZaQkghH6Yu2oRNYtUhknolQgENLArJ3H%2Bh6UVrTkmvCD6KmCXyl%2BblOcrJ1smkgs1WHGK55hmV%2Fnq%2BP0BOgu%2Fn%2F7JRWStckiZe7FJ7JGg2BBWIF92RW4zuoBLSBd%2FY9uVkyvoHS615HHS%2Bwramni85O056yGTuL2zcH0yKTIW8ubMQKl7Xl%2BgygMNrRho9ONp2PQd8BnCcuGYWJhDfTIlN9qKktJDZXgv8p9HfGbPPN9W5CLY1TjmOTq9zHjuV%2BIlNjBILpaWuHY%2FvrwEU9YJ7LLqvbpA3dCzDTp%2BoQSFlnFU3dbq9PVHyAPUZWmZbATrWE%2FZy%2BJbu8sWVWBiOHVu0s%2Bpu%2Fecj6q66zS0xtvtLIwcO7pc5lGrtvO%2FliqdQnY%2BkylJh7vz%2F2Zge7eAQwlrHKIz7cYEFzroK3X0iQf6t4Riyi8KD0JP5YHWSeMRVFJkPEgwqd3X0QY6pgF4WY4MvWXCFOoGzEuw4vvRi8YnAm5TZUWtweEz1ETjferLbth8wMXXjErUQ%2FJEUKvDlLJI1xxPz97Y9I4E9bdLENIB0XguNz1uEWxCLY9L75JE14cwsJ80%2BNdxab3UWx0uYo9n1zbzWiAOVHxsNrFYEjOhhOwZPlLox7i%2BGzT%2FRtxsl0AmXP%2BArWhiknrnmygDSQbRH%2FFPOgRuLXCHk8BU4qbxx%2Fra&X-Amz-Signature=93488ebed8618ebf3996fcb69696d4d5a7efda52e01e486230c47b46c434d105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


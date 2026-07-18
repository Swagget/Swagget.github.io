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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVKAKMSV%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T184144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk1uAb0%2Bdb8bbtaIXtpMMKufYrIwR6pzUodDpaajB2YAiEAt0Rks4HDW%2FwLCpIPbRJim6ZtsNgb0vte3AD%2B2S%2BETEYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD7AAZkkqH4%2FoffE0SrcA%2FuJvm66pX8TFb56AjAZCxUY53tJzOfgX9Zaqb%2Fq5U3WQ700WNLkii4D7Wyk5tsnyMkfg2Nk%2FIj%2FmrydyK5BsFnCF%2F%2Bo2twGpxBv%2FhuGJITiXa9FkY15Iy1WS3H6otAnGSLYycHnPuXqa9W%2BdGFFGok6cjYn1Jw3cAB5wj787n3kdE6RZevl5jl0hTeb8dwLQTJmKIfywh2x2eV6z1XlyYTQcrad4bv3TUrGYSYXRtn1Eh8jEpgDgPVdDkTxH6peqH9QKWVOrKb2B6%2FYz75t7RqdRbnYfpiTadj9er%2Fsro41MUbv1Xbry4e%2F3KZqrCxvqprGOii2tOEVYQbd5dkeH8q6BPoLpCrHtBFT4BZNGfB8h7oC2rVxPRpPYhI6v6dscHbMrerYPtqjTbeuZoKvpGBLHxbVK7X2IWGoFCFW65LBXfrNdoZFyKzgkfOAcF37SvO%2BRr2wnWQFpANsiDk0EfEN%2F%2BU0NmuQ2mvgl1qWFFnuvFLQYYzdofjip8W5S8RWHH4CXrHiQEap7AHmZXFwAUvfYYj5ggpU61XYNEEAyrpaxuYbvXg0lGwOE0V9MUqFqrnKVggbHvcmBQOvIAq5oFTej34wUwRkihwPrfsX7lzIR0SeHgyrvtlW8cS6MKaO79IGOqUBmCeg8Hukzo3Ktjjzz2vSnfbrkK0%2BZyXsPkblC9Alfw0gE9tg2uYou6q9aXyGp9QhXmrl%2FnbuGOjlMpuFOYSdMX4dkcPnQvT6ndC5NbxE1tDXhCWzMpGW9TZeOVZlfUnLt2CJ%2FcxSPNrvGfYpCUA9z338JySug1MRetKOYws%2BWmcBH6sQ44iEXN8F%2Fu%2BdFSC49hOndX6291GF%2B2j17206UfpD%2BrPJ&X-Amz-Signature=b98a49333e38cffc323f05bd2a9f6ca3860b0cb593d239b27c4232af921133f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


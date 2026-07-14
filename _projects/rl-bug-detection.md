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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JYG3HQ%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T224334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFbT%2FT4JWCHAI3WwaxsSZV0BZMAoyPZvO0tw%2FbxpHQK%2FAiBlcu7xM7KxX7kLjNd7BN8cwjiQxBz2Ths5WlpwPIN5iSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMb%2ByhhDMGXFyg9R9MKtwDXoS1%2BNplvyz1eT9YvNccLKAlokZWvqu4UKIcafDDzEw2C52iERTiNmHgSaXsaHDuAliMErmoPvgT652b8%2FyHtRG3SL8ORScuUvWhUemcx%2BifsRjodnY2rqVWEkYOlv7VAaWP3cy2b%2F%2BagR1HvEQp4FUy21fRZ5gunV5Ce3fH63ADfK4%2FrOtG3inA3QlEc%2BgvGXO4zes159Iq8p6qEUR0EFogCkzuSjAVWVCB41%2BdQNy%2FlhMzo3azcXR%2B7nYFWk00vrrWWRhbD3HQLLr2zgebGdtGIW%2F7JZw1yJBNnpYAoWv92vsKDdaVuL8X6stbgEkNcOM1Q%2F4QY9gAX1Fl5X0iRou3MMbKG6VX1XCLlVp2kteNVuUduszymtrnbQ80E%2FnnvUTZQwLQI%2BHGSsfYVPyNj9bzg17wvJJ3TipVEP8DCta%2ByKuUKt0MASHlZzMu13vt6QCpg6eyJJljvxRCE2cuik%2FSSI8T7WSsN7RgEYtxKv6UHUnnCp4LtVDcZ5seAEpUaJZ8wtaL%2Bw9VwZTixWHHoCLZqW%2F%2BhWkJZp6t3x9%2BBN3Q3Wlzf1tms9X2TSK15BH4KJ77Xn2Un6h%2FON2AJcqwto%2F3U1Bf3lXrXMpzqNNqjNKU8%2F8yP6RHF8rVWO4w2NDa0gY6pgHn6QHGj6%2BqGM%2F1LMbiGZHT4a5UrekB30CeZSYCDoZVzIKYStmfHSyKKA8zyyQ%2Flo2KkMvPKFpsYCJBzpkv5oUmvGtIC4LCA0O18QpT%2Bthe0St1RlYzu%2FX4Q2QKUnkabequvBKJiRCr5Ot9K03W0qW7H8MLzV9Uj1oT4g%2FkoHYh2GaGCv4m5WcsPpSPuF%2FYqylqOouG%2BQF0iOfVSaMJ%2Bj5KSXiv8zEO&X-Amz-Signature=2ba1998751c15b0f57d3fa1c565fd98c1a6d495bd14b3eab81a04f80ba4b5c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


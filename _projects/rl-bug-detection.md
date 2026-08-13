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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDSTNUT%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T113638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCCplU8M0K8v2gxE2N%2Bwf5x5%2Fdspw5Go6LBbgHUrwXA6AIhAMJW5f82DzXbgoyCAJeIdALlUS0PvRSxSdqWW%2FRxYfRmKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzENQacAcievYd1uFkq3APfq8MWCLRcSzU5oi6KYgnJo8CAgVY2WtOgvAzKewm3F0q0A1mRrYBJGCpqnPFemrd0CJZgeqwHnJ4AbvZXBAfzMzvFVuxTequWA6tpA0tSNeYdTz1YfKrsG7Z%2F0VPhuFt7bChEtGMbOx4CRUjNSOt7C5s1gBCOn2ruDz5ozTWk%2BjgvWYavrNtu9JSldkqScnno7fsHfqWbssbPbrNgv7z9vExfv5sSfemHv%2FUXlpbkaiNixQxctvS2REFNB%2FyICc9gav2WGq1s%2Fp1iRYp7x8NxnvRRZ7NPQf0yJDAMRH%2FoA7h82EeVLiukhsTdW79RiA47tCJGOpgrrmZ6mALRiQG6sr%2BaeXGP8%2BVossvQtqCQRHPGIYK2cb5t%2FSfEZNBUFdDdV1UtBjc7dcyHbjUCp6Qmgt9InQW6AQBtXt26WP0O8Pug0rh%2F0IV%2ByFHIl3ym6F%2FbCJ%2B%2BtFQwaBK%2BX48%2FyLtul67EoWJS3vhST%2FTX%2F3S6h1pIUiBEFkbg1r1wyQ5CKZmrQaVox6KOjX8rGrSyuP%2F3pVP0u%2BSEWuBDlCq9xlzEoVWi78Hu4YAkhZSF0YmCqSi%2FSAeyPsuVicCGFrok75KENKxDg%2F0Zd3e2UaWqoajx%2BF5mtfkljyKzyBR5LzCpl%2FbTBjqkAbaYvfceOvkB4JjjnLjjZCv%2BqKGRqhZL3C58ErfdpIDTqpbW8%2Bk2OkPlXIbTXvGl2chM04Sfb1QYIXCwbWgvwuLxJQi5NlRGd9I%2BsZY0YFiulO%2BEYPOqiIht7%2FYxHVXWAfK4id9IMdHu9DZO%2F%2FUNYacc7BepDFHO74GNJBwMLphDbrfPkxrwLYnsbevMa1jb8slWRYs7syIIZrfXqi3nln9kZ4gg&X-Amz-Signature=89ad058011e3a147e29edb7089aa770ee458add954a67125a1c63e70ea1d31dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


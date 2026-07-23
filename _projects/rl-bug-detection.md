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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ATP2HU%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T051139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDygid8MiQnfasa86y%2F6spPOOfhN2Q2AGCC3eUHoahxEQIgXGiTdGi6S2pZWSz%2BxQBuZIwT5tEU7SK0%2BkFfD7l3%2FXwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpw9uvDeLDxuLzVUCrcA2BHwanPbefJo8FmYvG3UeyFX4BYQGRYfQ9aPqenkqkbnSAAvL3dpfX1vx0pWc7fU2%2B4sD0gStPnrKD%2BouQqz%2BJWApGBv8IQgKvuWxw3ZC7lviMpzb7ZUFEWXwUyaL%2Bvfw%2FCRiu6P77x%2FyBcG27CvLup5Ydx5%2Ff4LaGX4bBRtsyZrx6cY%2B1nifURCY8RX21nLmHfpBjQqU7p0hxB9oUfMkFxqy03WYCRpmCVWdyjlvLcImA8PuLH2RMJWvlUX2ghEo8LybFnazVmD72CW2mYsFBphytYL1OR9Hq5nAjFIbxQ3HCbskPUds3g9%2BxduNZikknC3m%2BPgBKtmVb9Lfde7gbtUDqtTnTZyEiEXdu1ykuL4xusNMziUCRanKGpRufT2I03mACV60S%2F1Gj%2BdiPAbxBqyoQOtbASu%2FXjZ5ffFr5Qc9HmReYUDsr14c3i8eG%2BlA%2FMT6QTQLWbIpN%2BeBe%2FeWc6RTo9RbQ%2FmrQbjQmY93Adag7cpP3IdzYgAA9AE7B%2BuzsQGmPdVrIObYH9v0mM7xnuPeGuJ83kINs%2Bu3QdZefgUYIVy8cVV6HNcl71cxJAT4iiK3h7B8ANxdGIrbjzw7H0bSE7OQ2dGqYBBuxDJatSYpdRSsa6MWD68m1VMPq5htMGOqUByZ3htg2xkSIRQUmlAaeZaakxRhCFm4vgqsZrg4EbmenbehVZwOgkSYcZ7w29X%2FkKcPuSATScKqRzSNk%2B7uKsuwwcAOaaXRoEjety4MOXjsHKJrv%2FgkjTiLIIImaGxTZJJFLJyF%2B3XinQlgPFMbsTj%2FkYP4P%2BSLZfzjYeeOVsZ%2FSw7aKhn9aHSJpjJo7nHzfli9fC6adyT6%2FWJI%2FZScCITkgtYc7z&X-Amz-Signature=2839d37ebdf460423e9f36401e68b2274092d79a1d4def52b94e3e793844d05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


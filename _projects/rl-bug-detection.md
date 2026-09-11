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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6Q73FY%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T064310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmt6AO2cS2eotb8WbtjjynrfTG3OdPrXX49RJpnnzCUgIgIYKBO9RNtqH7wtI%2B2oFryN7UiXxLVoLzCsq7fUkiB6EqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjmxzskGMFlRBZqDCrcA7tud7xZV6pZD3zRtnhZiB7EL9mBreLZIkqfK75xICT74%2FDSxO4Qrm6siedkVSOmJA%2FC%2BpjvG8szzzt3aCuhMmh0ZIvIMaCzKT6kBtCP3oW1wa9ITlIxtcMxO5beXN2rIKDdNO6LvVqEdcRZLu0uqq2wN0FRBcUhKKs8mpbe1DKCuYdgqvTEDQ7JzKaSwa30FUM%2FAJL4UO2F%2FKMBupdIV6yz2Mc1e3a%2FK%2BvN66ywDaTX5r30h0hLlDttGX8JKmyvx6yy7H82AJ3Wvz4%2B6peZOjNKnu3n7h3ownvXP7hChdBpZbDgbf8er9qpRUlqNklEyzV3WT3zpo4T09RfdPiXjeVqlhHFnqpqECmRyIcNdqgTizRKBmVoTORHmJmqqLZ2DN4ciBLynVPyugcilDgrXkuCz4M%2BqetgQdM9TGNgdWlPgepx2lhdJBpeMBPVlsdHy6oLA6xI%2Be4%2FFFoKQ0d1IpXs0yrLNd6PVpqZ8uXwAWiZS6khYzPtuqHHoeoyrOEB7GybBI7AMZdfSu31cLL3D98mKtx5HPJnaUR4vF2n03NrsuV%2FtSsGJmMK6t%2Bk3bYYm60cAUZ%2FbrISMxvFT4H%2FRdU4Cb2wtr3DPZJxrRDvlNkJUcOhWQDmhgP7l%2FBJMLyXjtUGOqUBuY0wbSft0NKwr4oNF0SjqJzoviOwKeSDNgjvB%2FFtnUjBgkQMx0Fh8jLtzvBRSVE%2FalgxBqb2F12fTs5tceXre1Yo6Aq4rCwG6%2Bi2RRKwzGY2dBqvRYhOP%2B3o18C%2FeLE4%2FhM7nubb4nBeYyhg28HM89zMeZwJuKxgGb%2F23NCz9l97NBeqDHRhU%2FSGDwFdW%2Fr1SABWdOfyY2VezWUdXZd9kVi3XQVi&X-Amz-Signature=be4f5dd65d073f8eb40aa3224ecc575dc6764add97e44f7556c6bcbdc99cdcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


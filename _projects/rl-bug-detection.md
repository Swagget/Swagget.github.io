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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRF5MWUS%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T195359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcRAWuOPaQ6cgs641zQc%2F2bhT%2B38fxGphjRLWa7D7c5QIgL16OviAvx02c%2FcfCzQRPKehBTHXBrveJwgkvwxQ0VZkq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJHpmP8LNlxucf9CKSrcAyJU5nd97XDJak2ZCHA2WesqHQAQLF32DCSaCSls0ymult%2BkdHRpN2VkhUz3IBdyyE0bkcsiLamuZLwjiVHIxA2cLl1dzk9Xjf1aiubfvA%2FWK9dyEZmxLJERnJOqv32n9HQKpDI3ytRH3P4vOzu9wRLjcTgEGthHuiLkFZw5mLQJLqPuzN2RZe9S7I88NUc4jszINKD1SjY9l0hxVfHc3530PpkjEqNYlYo%2BJoUQHHtUJ1Mh1JEGjxVSduU64QESccZrJFoFVxHIXBKtujHEVGxaGtbZZ4wZZ4uipU7EoPth%2BR2PV5jDJDpeL5qvZv8Wz%2F7vAarkSCF5kS%2BRPWZhNiqY0WhmCOmD7Kar%2BEChPHoNNe7rE4afKxsraovVKUdQ9LXHRN2uMmhWJ6EpKV6DHMpWZkZ0NFkxpsASGcJV1QAhcDNdwYjqK9oNy2onVRgsd2lvtlPLSJA%2FVXc6q4yS8Yb9rKfHQYpeNX0Jo%2Fa3EI2WsRovHOGvAkHp3rI1%2Bxtulgh5Ck7z8HVM%2FsKXi9lZcQB1hQK3uCp1HbnujeECwWmBMFCVjm4zjnyr2rb7gpuDJ%2BGmouxISWJ06X2%2B3GRQuMYBdxOXicjO4TqEDdKey%2BCgWgKqXIsXwR1DRRz%2BMKnm5NIGOqUBWoSRCrnIhGfnGuxBmhUY85p47LWUwOg%2FeQKkJ%2FAVNCgi0U4K4xrIwRT2UFAmSOJl8ZUn0ritfpURL5%2B7gtgVhgqw6PAKKWGlPLC%2Bb8FAFPOZ2i0rh2DlGUE%2BXrzKQWWwJ3wcXtZs4QSTM1fmZFV0n%2B6SNDK5SILhEI8YOJppr5%2FFG0cJIr9Lrx%2BVXLtBQMhNgHsa%2FP7eNH7ngJ9YZT72jnBUSZUX&X-Amz-Signature=d70f1abae1301b3a48926c745b6a7707c80c211c511036cdf73107eb104ad2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


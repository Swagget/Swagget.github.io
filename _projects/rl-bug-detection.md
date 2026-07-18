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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXC5II6W%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T213750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlDot0vMw2CEX25ghpdqUez1tINZwhFl8CMGWuztWHBAiEA8XYpK%2BUJ69nQf1k%2B%2BoUvIcJkw2ieivHdomWFPgwAByoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLqsMQsTGQmX3rS%2FPircA4Djqd%2Bpc4VLZVdEaiuVdO8zGtRb08xi723hVGM50AWR6v49bV1P0pi6BQw0dy5ulh9QXNF0GZ6fo%2BG8LZ7QdRt4Fod8G0bp6E%2BoXzoOjJnt67Qd84y%2BTmS3x%2BI9%2FXi4loPaSaVKBOuVwDG0WwFGe%2FRE8r2FYwT%2BPohnaecCIko77j%2FRQJZw1mbma56HDuKuDSY3jz4H3b78NXTk76L8%2Bx1kzFKXxVqIWpQcQZK4TiSLV9uzhXo9EDNW2InMvgZDX5vFMUGXSxS8pUTzPX7SVoY0mBtsPzBQY36CBm%2FBHjGvapFj0K3diz%2F9rJuj5aZn7Q3Um25PRgkFi4qtSR%2FsZXS8LRduIgyWhkKpzkkEbczmW0a%2BqeSDYqo%2F5cM2vuggdXbkYG32PKMQqZMhGC9J%2Bw5IucY1J2iPC21oewCAruDUuIyIhXa9N6AyqZG0sdCTt10WqQaNay0xYB9VLVjCiT495%2ByDtOBfw5DvCpLvo9xWkkq1CknfK1pgkcuBRPOGIgcD1ZvxHVGk3X4SANAw3mf2jDHo61mEnMtc4X6tYr9DHkpiEVyeIEYtKbTYXIOvLejqMHv8BbaOxTm5i8%2BXvCdtjBqadIEFXMZgGP1N06a0aZsaqyxPkB9IjcmnMK%2FI79IGOqUBV0NILD%2BHQ2raihqQfXIaUY9J71TW%2FUtm4%2FXfeUu8R%2Bw4b4eaUvAndfTzcb82v%2BX%2FXo8ua8E4p6318giP97dQFt%2BYyPwrpJoVcmHuX0255lIEs2%2BHIetmPgCME8vQ0YMOeL%2BK%2FKXSxSg6ZTLw3YvF1Nxeyl5eWfEzy0BAuBuTe3oJwj6Xaz39VNR%2B1s3fYr7LASsTMCgJmZx72GN%2BnLMrzcoIRye8&X-Amz-Signature=ad791df3b458c867888f15afcc4b07d1d7c875c3a622cdf6c44436360651c276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


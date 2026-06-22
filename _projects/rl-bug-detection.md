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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOZUORU%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T235758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFVvt%2BKTx6KdzZVf%2FjlN2Tu9E5zM1YaelkLpwFGtQHZ1AiEA4LSMfbuU8SpJiqIcFZT1%2BufanX6LAUsg0jQpP94r%2Ffcq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDE%2B%2BRvDHoxJXI3eDySrcA75aEiha3VwTezG%2BhBHXAtGucXe%2Bxy8k%2Bla79lu3h4GfCXS%2FP%2BYM8du6lucHC0%2FrDlqlihScqqnw7IDWBu6ogc0djvVPVv1eyp42dHgWGhfq1oo7NMP%2FDVpv9YnzM1bbeANhq0ZuO3mbuCdA6EYCCXahwqXwrt6jptoFfpvJ8Lwixhlm7P59raHnjVtc0Pa4iQ89KZOE7I5su%2F6%2BEhJyFiyNu9LGT3BwoVS8xOBD2ka1o6UyUTwXh0PeOaRow5q7UyDxXhOS9oruQuvuME9q2iUpZLm0GaCS7HP8ZrMWfCsAqn8dWW6wfe5SRBHERzXkNbPiXAqzyoU4PMG2%2BGL7sVGxFN4t%2Bmzho4qTDpxvyJjZEZhvNiT%2Ba90LTOaJlLYw2lxMqoYbNVUT4w0H%2FuPg8s98yGDCqaCdTyAHhQ8lF7ypy%2FKV8MxEv6UvIl%2FkIxOpKwcJH0%2Bw2MlTUNynsuWU1EtbAsWU2sDxrgIvpWtd8DZIrdprEt3TQkKcvxzuDHEQApwJvuQm54jsu3z%2FU8A%2FkFnQ0wJmJth2RNASa2v%2FA8Nh31IULXfTgL7BI61vtCjTBsw6qsNdPt00nxMKQGsmlZGMHfwn7ZabLHoTFgj1RT4pTSMgRoqYp2QzmDV%2BMMmY5tEGOqUBfD7smKU2eztBUvKDBzWVAH1sHZwDRX2qbmRe%2BggZvxqYMuFyKsC1CkXNr7j5HuV3VlCMh6Ci13IKYEyszc8kjZvuFvZIGrIoweFxniCWE6O1u1jdneeLy4B1rs9dnMZwmGB1RlIGyxnCZzFXuqmH0as52qqooehUcD45GHPtLgL0ropYj4aNP5uMnbMH0%2F0P1PplviqVHULdG5y%2BK5tsSwLuCmsP&X-Amz-Signature=07fe35bd94a6a361d5ce63ed8b43c125011c0ee04c98e4a4dba2beac2c7765e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


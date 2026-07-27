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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LZ6IFX%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T092150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6l00YKdn3xNr3lcsQCRqOW%2B%2BKqrazdc%2BtNUeEHEGF8gIgSZ%2Fl64coIKuzx20dxTCN3u1RBTGxPxFlOEq87zXcI04q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH2bV15vELHviqFahyrcA0RiF6tSMjfnhhanucgC9zc4bxLvx0B9ua0XaUclQKlklJ5lGYDulRA2TiJixN2c7mFxV5mtFdpKwPa0rIAksOTgw7Blv48T51QzYn0Z3qiQfNy4lipmqW0uAV8qF%2B0DWNehUYsm%2Fz7LejzFWYQGqsLMNQlg3QtQTlkMNOGdbZOyWnEs37H8WHgnqW0IYALkwt06%2B7CHPLj5LiiuVPINDN%2BSp2ax332w4URHENtbjAsCU77KodnkK4zfGUar1AL7Wo8X6LsuBRiCci5fYVt4Jv2X2hbMCpkGc5fqGTqrJ1IJm%2FahEWH2hXL83hBooi%2FJ%2BzBeQMrDyoFK7efDZTWfsn0yXadOD%2BUtcZoPYOBSUQ9j0rnhTwy9%2FHXdyGQphQkSjEL3fo2l4z0HCmsS6kt8nkCV%2BRyhvZ1tbaWpv7GRm9GEsLyxscvguzQukf8mcCCCWPTU8K1wRe5BbnPGu3ABFAcw6MAEnrWC4yquRx6yogkS7qacxeGCLZyu%2BfJ5xF4%2FRt5uheJe2Aww%2BP34vvSc0qWYdn1YSYlK2NDAWTSxywGqZ4LduKfx7Jygv%2B%2B386kDRUjtPocwTfw8CoZWuAUmLH9lgcLTAy729IcArnKm%2FD5%2BHd4S0c2ILX2CdlP%2BMOmynNMGOqUBlaXB1UrKzNvfT3tP1VjQbzn2%2BlchA5fVRac4eMuNeQRw9aUbHIMeuQjSC6qQf33du4lE0akiV%2FshmJnj6LrFidLgoElglDcc3F2DPAQ%2FKPgCGG8AKmvxi0Y7O%2B%2FSHxEkEWYj7FlLSnplEGCRBneH5JYhw1zU9Esc7rVHtkp%2FMqd0gCHxXTrShuQadtInWzsEhG5r%2FuyLrxGfEhkDDcAbVfQW1tht&X-Amz-Signature=ba39cc5b820d97140d2f312036a340e9657d0097e5c42d38e5c43e289572446e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


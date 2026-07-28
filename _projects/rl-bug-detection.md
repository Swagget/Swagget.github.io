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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLBEWUJ%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T205536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCovBq6n76vSJSzJc2QcnnGLdDLhAFDneYyI%2BqEI7ThrgIhAKK0tgkxN0dWcuQ2ppsDV4%2BgBNslGht0g2IHOjLoaWlmKv8DCG0QABoMNjM3NDIzMTgzODA1IgwDR2ODDHJFoES9EwEq3APIFqPOtXMKiqUC96VsreXuHiMPV5uUt%2B%2FF7GUbiTRwISUAOLFkqxc49c0Pa8AtXdCRlIXpO%2BDOfkiLVL3aehkroGXsj8u%2BVfNOkNaTkGr7hgS9Cmw%2F5iMU53%2FMDe3ViM%2BIXq2LuoFoAjwbiS1Rqjkt1ejxBWVsbS0I%2FGY2OM5krNkR1L5SWGfNjNfc%2B%2BdFY%2Fx7rU1rzWmcitYNEYFeLyEWIArqyZzuITjVzPkeHU4%2FBxeCDAeBEKtSl2uRq1LaXQbbbj2Jeqq5PIe4gOO5RwCkAOT9fRBCJTmkBOq9J4FtDefpKhjn%2BeFG0icJGPxNAOOVsweLkmkggoERsx79DbaA5z%2BUckpdZs88nBkm3JnbYdq2pibGr8CkT9y56jRkiDPDvI9pZua5XDVTBSuoFAVOO8gL0HsVcpwCq46TnnE1YtuI0FPHcS5hDH1u9Z2n3BsQeVJQacLr3UaWRNAqWFlXtZFM3Qh22sfNNFRJ4k9fxUt5vB6%2Bx9JyC3CE2lS%2BiiNBlvnulG4c8RUeDf9rBLJwCAW8HFIp1gyxBPkgEyFV9muIKew7TxuDhHgvowygkpGix%2B4AsVY4OsmLnMYux0kBcfHnO357amMMPJ1gHXqBnO4JyimNdiNUcM99DjDGnKTTBjqkAR8fOKUkrz4zWZEAh1z5sE%2FSrje7PLmsifgTPTrpMoF%2FLKnN2HXLBy75Jd6XI1Ki1wEAAvxzHrLBopyw5c2ETaV6InKeWzRGbr55VtSFPL6BexUi0%2Br44FVe5tEt4%2BSmXSAchyUTGnnEqEnjrnyDu1OIu2n3wW8EyRjTtmAYV1r5UEw5apt3rxMkk6r8Fnut%2Bmo%2BY2cQ53BiAkkbbbnI8yZUXjFz&X-Amz-Signature=929780b97fbbe121549becb0fa354246b24c4435d81320af957e413bffad9224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


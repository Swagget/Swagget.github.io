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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GVRKKVV%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T155335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBojmySyqO9ZlcwjNrqUvMBWPVBSI%2FaClzx9r19NS3cpAiBi8Ha8ny%2B2PPMa4bGzZBmPJXCFmbhUrAoBheJixwg90ir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMeqpIuzO5TkDHiiIOKtwDT9n25Xw6ronzcu6aja%2FTNAtbYsjXhJtTV5wmGP1rLT2lJ2UYeGw7WttUshxnV2B71S8JGOh%2FzxB8jESDaRZye9tPEw0B54p0kSSMO%2F9SiuQSJx3fG5rx8z%2Bv2dnitrgMoKzSMbf4dW1bjsl53bGiDDgw7oKtfEesWitddo%2FErlUVtHJREtSaHLzA9GKAOBWvdgg2ksljAGNrxy2JEtVa8bnSE8Ctmb9HGbMeRuqCNCUQUChs5ZKePx7LEQ7e3PsGKJU0Fa1qZ1l4bKa9iHGGc66jTLnFoC3tPEsCl54yZkydO6eKEmX7G0Km32UvqC4IMKunlN8oY2QTQxBvG%2FR1DGFfsPxhvHe1So2AoYteKgcIZtVbdTcn%2BUTFNIpD4grgb98EnvhW0avkC5AIoy2CvGOR1KZ8K3%2FkR8DHqODyqtxIJQTOFuBo0D3xBCLo4RBLEOeC8oCrTZaB9r1saiVLVheudB7GSfBCErO8j7IISdAAiEiW3BCPlmysFJudJNn%2Bl51HZJj%2F%2BiVjV2Q2PzMNZZbRWg0AFXsSALp0lnqL9DtnqWLdQnPebqKR14eq%2FBJggjfQ4%2BJ0yWpgZoD2Qh1BFW%2BmGJRVDFv5NPox7SagjNb4XQQ6IRAV%2Fk7iHeww%2FqOT0wY6pgEuAtjSfrk%2B63uXKSIo3876%2BbgEUFyfE7bhmRpuhJgmzl%2FA3TwmJh%2BCn2G9AFNbB%2BEfkaTHBgi6EjT%2BYfZAdX7JykvWbo0q%2BETB2bbhHIwXp%2BkB%2B0pt3wOgtd5cD8nmZN3RndLYZzwst6h9FDkYSxObWfy99PedBp0XPueLqX3uUC1nCnMYq8S4Mun0fr3gK9xnr0fQ9LecfXTdJB%2B3EGPNbIoMA%2BKp&X-Amz-Signature=c55a508fbde716c07008f4213a1792fa75812c0fcfe6b9c0b92eb377a8c49a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


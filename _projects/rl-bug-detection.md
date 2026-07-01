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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRJCQS4%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T133340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEc6y7N4n1IHgAlJYdrES84bgPUvPytJppWwyqrb%2BTcKAiAWmOzjmNKPgnI8h1C0SvWrLYgp4HyFNG0FGGVGffq9FyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79vJZ46x8%2F%2BkpPKTKtwD4gB2oLL6o%2Bu%2Bv%2BRImF0xQ0FS%2Fpsi0XVFVfveArUO8uGuWwcjuirVlYMIJ%2Bx566MFKhct4PM6sKUJNqYWl%2Frd%2FmFR8qPnR8fzog6KXypHY3yk3xYi6IWZT1NYopvefaLWJtlq0Qoo%2BoAP0%2FB8BeJXEs6C3lomRYSvHtOsVIHqPs1NcB3%2FlImwh6SIJEv3LAqB0D%2FuMX6WZaDiXFP0a%2Bxa1uJNe%2Fjogw%2FRXsjHBV3ngWl9Fkw6GzUZpSbtuY347vGzj2Ej0ugJd7gDEQjQizapZkQKDAx7gDTeQnTd96O%2Fb9NrmQXkJuUNjKMoLy5Nml3qeI6cHSNDgAovt57f7IUeDOOkisdF%2Bku0J83HOyy%2BpLTpWEQAAwn8En4payIF7bfXIqc61J3f9IeInZ%2FT8A5yimRYZSH2TKULmTEZecnJfuwDUPEvI7ftln4aFrMbzNNqhl6QgZ3%2BjtrfA48SBhTBsPbI3zuYcuj5e%2BuW6ZgC1XV%2Brg1Xp2sEb0ax7Rhso%2FYgMWtpSHRM6L8CmDGfUjta47JO4Emf3z1NpoHexGwguuvxoKzNYt8%2BY3Cc9uzW2ZD7mq9XuL9aDfeplg4kaCRVDjnP%2B2ROpB9pZc8eebKDIYWBiAU6VdgvCxsyHxgwt7GT0gY6pgE8Wlep2fv5iEre%2F2%2BBPiTVm5b2FycQ0A0xVxnrMusE%2BXZ0G%2FfAgovqQ6PL31O709vc%2BqmMHuPPNTRpdSyGHprAe0eKZl8OYvjaYqQNeuT41waRIgokynz7K3NqIhVtoy450ckRT96L%2Fqi%2Bj0xByuLAislOWrKxIXKCv3c2Wx%2FEOF11T3FEk5M4wqsyILYOfaGs3%2FKbYTBs%2FD%2BseN9L%2FP2x9hZ%2B7krW&X-Amz-Signature=9b57073f16137c319ec06cb9fda0e9d40d6256f63c4b8affde04318b7ed81560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


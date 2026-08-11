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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VBZV52%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T113519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM2u1eJxbf4UF%2F68zke9qS6aaKYQ6p9nwtvIJtJk3BvAiAwocR4tq2QPOKGFWTqVQ%2Fy0gGQlD7l4WHRyOIGNIgXCyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2BZ7JAoRLeiIRZJAKtwDS9%2BTS7zXrHujFEOvJWH7zLiFfrdVM8AqFG0lKQA0FgAeBqyLr%2FUV42KrlISk%2FoV0zX0l8xMxBLL2ubKofbjuroqI3Gqf5LnTNugz6AfR6VYiPc7SSFaxwlo4y8NYYSzP5%2B0bNrxJZ3ogE%2BYL11Rruffgv8lH4%2FR%2B8udsiQlVKINOEO%2BZ%2Bt19Gmmmoz4V2GuyVXGP76Ig7wM5CG6vYlHwcPS1oui64Tu5SaWvvGHB%2F%2BnR09DOPLv2HWgXHvdxKXcYBy2ZuEFPW03d7jyAcBTlnNDCU2Bck1Jr6uDieQeVIalhlWDUsPUiTUkp8IiW%2B4K11K%2FkgJNtBCUbGvkQAAf5MIg453BDMaCuZq4Ot8O2HHGmEgQoe1r3TYXnqpLerCzsv5giEfzkDyYJf32c0N3W32ManOPR2cuNmVgpZOtNnWj%2FpkpOC2fuUZQeyRDCVS14osCCYOBsbQ6jEUO9VFoJg3z0pd1NGIiki35UfSWrv2jRUduFZnpWDH1yGyZ03LyKZI5emufHvUB%2BXC53bnxhDRN01u7e5pNsNdvZrxRClJj97HM%2B9%2FqV%2BfrPbatBOvtL15tWYQ6Yca03HWXyAvN0uWXWMVPjVGpN3mZqZ3rjEwAgIWvHy8KfNwzzyicwkc3r0wY6pgHaveMlIic3fABPVNcLjVtnqw6xBOw11eyZujlHWj%2FjyDjPDgxqMS5KM9sQMBm2wAyBp2zx%2BoyY0waX%2FZYF7yPS9XwnQv4zd7tgRPKgBdPWv5p%2F8oAWoX47aS6coiawUQ9ExmIdKPwx%2BaXMcQcelir4IGOZtSwbGp8UjPOpX5bfNK%2FEC8viTABiQmw%2Be1Cj3jeuJYjDB%2FSRCsBP2Xk4am0xRIaE9pW0&X-Amz-Signature=5fe51455781641a81bebad709430169919cafa869b5ac7a8c80100f5b9ad01ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


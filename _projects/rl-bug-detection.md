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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOBYIND%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T225236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH385GPqcUFhXAu%2BcLLt8Eee%2FC3Uv73t0QDJVSuEOR%2FRAiBlhiYmtchmWjxEHRrX8hvP7aYS2V3eEWLTXwASVqn39CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHEuQ7DXP3koKiM8jKtwD5Lp5wgZeSsSoL5E6QUEl2GGVN9otKxvSCkv5SB7uU%2BLFxpXMJ6cPGdym9s2QSGJjoqWyRWSIdGVtK7Dpv8ZOuIrQc1XrL2n4brZThiIq4rkhm0uH%2F7vRcZ0CjRw15qqN4JjbbOmlu4Q%2FoY%2FUNhhkKE5RZpdPjQWOTIxMWJNujxs0FIxwlgczEMKRQ362oCkwuU3PA0B%2FnyZynRzQvnCdfEmms%2B7zjpINUEnOe4uIL%2BVVvUaz61HIwF%2BdqcAYnQoptqgNvgwoOWRU2OIkBVaVxGS5dzl5WIRehF3zkBWiHRGPlc7Nz9fOmEWC11%2FBofQEqDVYPtwH0SGyp%2FoMzdc%2BRV0BalqhyE9762XmQybwBBrGpPafjpRFf6Xg8%2FdFkZZsq10jvro%2B2tn9jiy6f19hugNQGw6gsxfIKvF%2BtcgiqSiViYBM4JVOYamgBV%2FPKjhrSeOcola%2BJmqd22zY1PpvdlVj3jAEUToFQvksu1c9l6EvkS%2BCy%2FcSaYt%2FtPJrD%2BIg0XcAaUeZ3qbIfUbEz4pzG6u0E0O6hOvWfykRgWYjDjAvMdMtVwap2FL%2BO%2FDbcF6H91C%2FlIQ9xWzEEbKQglWuhHL1P%2B%2BU1y6qxUn4oW7jG%2F93Ql5l%2B9FKr8d69Kkw8bWS0QY6pgGJMoJrlNop82PWyGbqQsrl%2FOk4zHKIFN%2BspwkO0xNfhoQPQvJX%2BYZoVXWVWrgL4RV20qYabjfyuFx4ryfdSKoUYwIvK7AhFiVnrlCaFyc7irOLAp4Vhy030FSvncfEKP8pZoYAc6oYpeRlgbetkhjZZGykDAHfc%2B3z0v8qhog5s2ed7IczYFhIMceaHofYVuiBQF%2FmP6Wa6HWeOvdNuKE2LdvOrUCR&X-Amz-Signature=c69f7e4b65d448153dfb1d68e2b2e842cb853a89a333e05502e80a45c0843b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


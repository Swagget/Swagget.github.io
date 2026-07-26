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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCJRJLO%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T155209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEiyTomvQrrjAYWHCV2z19smkKzMnQ31qx85Frx9LENGAiB1QbKcg3QJi6RLXrh29%2BHDqezk3WdAuoILA6%2BIjF8r8ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMASWzKzuLML7g6QeGKtwDRxQVX8t5G%2FGE23r7RcEq0B%2BeFgz5fEw2A9DyIgHXTZQ3J5PyClRmSKcvTGzkV8jv2vQWBj0HviDRwAU5SsD%2F5T9TOpeUlnkJd%2FEcY%2FwVJn2dGdSptNV8d3IAL3IsSo3iqJTacTLXtWYNVpbT94bWr%2Bvofa7ozJ9x7NV7lT1MDdp5vNFwplwv%2FZ6g%2F1Dl9DWCCXQ3tv22BcGnpgXxJblTRw4CwqKMtDkNztGfR%2F09N16lpD%2FxBjUB9eiOVO3Wok7EozeYll%2FkhmWWPLKWSHGoWBnZ03nXdfwrF%2F7X6o%2FiF056Aj6Si4pVk3CtDREZMqX6cTuNzSLoFh7rPoZN2U7Hr9RlaX5SxJjoowbOif2fcfkdoKKSQQz0V%2Ftln8yFbzYjGqROQF7IUgTtFgVjZv1bvJKsEn4BTrkwfCvdA4BP5tQ6H4EGoiB%2FkzwaNN91UCIkcT30TvlL4kP2r5z0VfhWuDHzeqGmkoTmLlolKjNqTAxTT%2FdGDZCzrRUJERs8KjabKsRCNCkby5eTRIQ5mejebZSw6Q95WM8fD93w6PRmCQpyh2ida%2F4jpjiN4tZC%2BKAKaTOU6wx4H2t02heLofQWfeM%2BaeUMj1wQxk%2BFkOMoqmWHZuJaCwJmQYp43PIwz8iX0wY6pgEuTbhu%2B57%2FZTUZXLZWHCtjBY9CJE%2Bc45N7kN1VDTaYglYeoGWuBP6uRZQGcUOkFP4viQV%2BOlttoiDrZt3Z4bEYbnne%2Fs79VWz67Oo4xzuz2IKC1U65i0pFfE7WVrxkaRgTzat4LxVJ9f0IyefYifUs3rsQK4Tjb4nElNlag57LCwj9A%2B6EMO9eE5GzwlsBh%2BhdyDRMCNVIMp9ilDpyebO5HyOHV9RU&X-Amz-Signature=39ee430078b3b4eaccd071d16bf499dfe75a44fa3fd1e91250536d78158ce56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUZNJB4D%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T044348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQYYvrvKuZQX42Qoq87s3rDew0r42mqZ%2BKpB4nu%2F4UFAiAtJBLhKBlPsG8ShpPRO60M5LhvuSwfw3NoceNf2WeUjSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvvbORUYxQeFqR1%2FuKtwDwN%2FeCTvPS8s4GpmFl4DUZ%2Fvg9lh8olaJsmJyDkAfei0ABDgFTd%2FJe33gxMlpwJK6xKOt5TI6dy9YV11cYrsrcuwoGgfFuE7rmKjduf%2BnRes2AIVpxftzOIk8%2FiE5VClz8k9B7J6dwu%2FZO7Jk2zcjHXJ%2BGe41uLWc70lpXORECC0H5avfaOUyzC6iisLTjDVGmwPTELhWoQR1Dg3XpnmNTNHy%2Bp0zynozqvde8T7BmvwF01hD73ueQyXmT3lkcgHfdWPDDanUsvdKLsuIlhCEiiOH%2Flw3TOXMXwZeObyIpk8MjoWb7DzgmPnNX9jkPL1DzA2wqOi0EdDfUdjzTUUp4foBlN7cJ2jXx%2FU02bcTgM4ah6UaLTFlNOjYMALh0TGG0hdKWYmaNOhhdKC7DIci%2FyV6vlZxILRzcEgIYlxpnS15ezCEwXRacqrcZHmcKekYs8VrE9WNNuzYK%2FnQeCx%2B40lpRaZpDpG5Gh9%2B6CT7VA5e9QO0kIKwkgzE7STRBXhYvA24hQ7mwButXdtsC5eVseu5H3B%2FDUpVvVvrJfuiHgrqgSUgUqRLHhDoTPMllOpTPqgIEKwy0KhQAjxLFXdJpYRyg9oPI2p%2BUcnoJ8Zy0dhFvlYpTSAhBJlVyCEwgJmr0wY6pgH4ICQf2A9f4YUP3AmZ%2Fkx3bVjTHpiARO1vRldbSlQm18n9V6hgPConRVe62jtvwiUe3ZiE%2F6HrFy%2Bz%2BHJcFe990OcCu1DPuclYxNo4xseZCfvfAi6wJDXVqnlaFsBp9FNotxo7CCX%2B0yvSMkbbIfq1aTFb8L6vQfIzAvkPCUBdHReCkTdCUqoHn5ynnWE4T1s4E9hMnpLw2fzF2UkUVialYlMTI3q1&X-Amz-Signature=80a27f2d3ad71b7d541f2b85cd008f9f65f9873b2553766ead2d3341736290ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


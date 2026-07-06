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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXQN6ZPZ%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T015218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9b3SrgxmBh%2BWVCuB8XYmS6u7NWAGFkbBSBdLIAioVgQIgUi34bo6k5YYCu8DnyrEEv60yBAdH3U%2FlqI1e6ByKInsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHGPJg8QNupXOWejgCrcA094Jpt%2BWoZ5Bcf1x8jJzxbXy3hfLoaVgtqGoN73mbiy%2Balpm%2BbxEyvzUmTAZGn6hdEIVIbBzIpsAe8eVUoEftmUGLI8IUBkWgYO3dVXH5NGGmOSWckbzlLZYzQ1pAzX1zYoky6Vaifrr6JiFVQU%2B%2FV3sGs9i%2FHTOK%2BMGgccLCWeil0EVRI%2FJsm27sPdhCNQyNGeIBUG%2BA90VUXHy81gE73JWvqtmp1Dhk%2BjNnO%2Bu8UITBLqblnNrA0jXdqmvdN3hqfPdVNvcmDgAordc5QoCBwnnA5Ig50UQaHD0wTxF%2B06v9ZKZkKlLiZVJdarhfMvpGf8MZ5mbIb7rixqn%2FWHTSltEZd2ip0MovAKaGUYPuo5e%2FNcCcWGgxUKVNFsRswnoWwAdP9mzk%2FEzSxs9qoticTbVjKOYEu4fAE3narXfjZJ6T6u8Vq6ph%2FWear6Jnj%2FXmzV9qDZMycsx7yijoghUkVY5kWnKOhEX9KBK5V0cWeFyXo8DBGUqml4rG0Kp2h9Ip10nQHCHjdgmVsbKnHsOHDTgNv8j48xBvppZyQbKbyu8B2r%2F%2FQy3I8OgwB57AZf5sP4Mw7o0p8YcSorMGxujHCguR5RV6oSIrpHZZf6cVNykT3NSmV5QEpLieZSMLWMrNIGOqUBhEkH0sV8PEEygwp0YOMrEsU%2FBpI1JbWjYioq5qDqFh3bMHHdUfAYhbbdwk9pUfAmZ%2B50rHVueu1cXxmhwnr0nN1axFWgkS1GeVQ1si%2F9gem%2BaD4n3wFgT0S0jVb2aOdXdv%2FN4psi%2BHuyMaiE9spu1An7Bi78ft0%2FIXhgAqVJhpRx1Ht%2FG%2FNNV50DW1wvI3o3Z0jJcym54w0kUfc%2F8%2BpS7Mv34yvU&X-Amz-Signature=516bc02ef3a2d2d07381355db084f9a8001d476e8a4c6e477dc241bf8993b333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


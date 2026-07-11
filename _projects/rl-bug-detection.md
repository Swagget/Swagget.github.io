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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH4QKA4V%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T105045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHXHkEnQN%2FwMlczYpfODCOyoq7h%2B9EBM2FMX4RV9TrM8AiEA%2BZFtS47Zmz4OAiwX08xpmQl9RVznEbt1XlBXW%2FCHxNkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyIPOcwfIB8j9RBmircAzZglga2BF%2BvMGOACVBAjfsnqDxG3q1hFkLVIQJ8gnju7qdS9OA6LQcBbIyuFNAqmM7kDlljb6F49Ur8P8bObU%2BOsb05jzf%2FhQH0g%2BFV2t%2BcVzrrSIYzBaI80VWjN2gl1i%2FPzbVGac4Qvrl9rkqilrf%2BFtWqvQsQnWBO0S8g%2BoqqWonQgKTSTUvRj5mvF9cSVyy%2BHW9pnqxdYyapHtoQHcquLSn7LZGJF%2FAL3Br0dromzfOoQ%2FyLcxnuZiw6bSXhWrA8CMNuD5XVjpHKJeLw3eWo37GPkYpzYjGi08soCdmV0aDas%2F15gJzhfo79cLyGF11eZiGpkesnOz5KVFFUdW4DrW9cNcKZxF8mhEFfMufF0HEt8vE7RvphpDxuO7QSINyTF3QqOwdygVOFAAYl7OV6jXYIhiRN%2F5Wprx4P04JzbXuvgUFaRbaHoKBoSoNa6NzhTvKyMyFsmSoxFR%2Fi7Nx%2BYWoIuVjR5of8MUm9aFieF4sD%2BTbQkJZ1CNwaOSgRgYP%2BEtxIxHgcikGWXpwZKPzkBU%2FUUPbT7DBxa8jCGhKcXhFUnia1GhHAKt0Yecqht6SZY7vVAO%2BE54KmV%2Fuuow3YpOPySKFq%2BI2%2FKFBuGD7RGQivPcjRUoRZsngdMPOjyNIGOqUBktK%2FqjB7Yrz0Dqfa%2B6Jcg41KDQzc7Se%2ByVVBcXG0jUywZlaDGNVItZ6SvqtsMiGcB8bHJ9yL4nnTZ%2F1%2Bh6g4qUYfmJ0gk9GA76hrQsczcpXgJuVoUrHkHOva%2BHbQzkNfpFt31KxcWMcUW8SWY%2Fb9xTKw6Dm8TjejPlaAIgWgKDIAp9D6K4UJTLD4aBZFAkEpFADTZDL0YoaRDmjxRaG9T0QYpz9P&X-Amz-Signature=608762a615bbc5a02084fc017d89ae74867e70e68c633bc002c5df5df064b2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


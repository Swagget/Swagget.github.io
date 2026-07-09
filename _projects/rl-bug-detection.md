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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EWUYJ3I%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T161939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3PykfOyRUAot5TYLNu51EbAHT0tlFzcqeaTcKKnJ68AiBPgU1G1VsWXj6SXLRsDaO0KawMxVyHCG%2FbQ%2Fd%2Bmemn%2BSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM65tfG76QkJ3Z8LMIKtwDzfFLuilNq3w8OP14ijB8PZojH0vH39Utjb5Tvqnv7CTk1x6gKl9hbPJkoA8%2F3qCkxNWmNe6Oz5IkHqDGt4oz9kWXNZjPjb8G11pvDTzMm%2BktHfOvb8WI6lR%2BM4hXzHyF1kIRqna4n29MOUfLeFkZn0gJ1LisH8ciEdGvOpiPRfHRSH3jcAxfWVoBD%2BLSpT5quU5ixSr6xUhm%2Fa2YJx3A5Vz5l7Ta%2Fzp%2BrqHiARt3t%2FcE8dzmZiQ3%2FKjGn9F01HMBGhGT71vYqoTNyCA2E%2FN%2BWl%2BCqNABKSr%2FrLfdUT288jph%2BqW3p2lDMpcqkyQt3eoVR3ST%2F5TNRkKtAKGJVLLGtdxo%2FzfZHXvkFThI2MFubxn%2FsYeUvkdbCiv%2BdRw3yEZ5VYs%2FA%2FU5NnKxQ3v7FmrCfELjv8O47EbQMSkNSkRVUiJtR8Kj6yjbOPfnfWdRP27eX7g6Brl4OnXJJlcXwTiHKnGxnYXcHRdXo7I3d4N2B293eksOdnNXe4yBWXlRFdk6zWtucuCJz78yKDSJjhL%2BrQ%2FFn5m0JVgkVr0CuSn4ZRJeQPWEn%2Bagb6Xvh5D1dTjcXnatoXA3UpkrX1VXATdLIMsCPA8HI4J8lIy5AOTaErg4RDGegy%2FZeDH4czAw3Oy%2B0gY6pgGQet2uR8S3vVzyzRUiWCRtzxYBWykLuWZUWmSp%2FazmGp9GFMLXNmTCUVGwUFDJ5xx0Eueyr7AJUGylnnBqrdx4H%2F4dZnQWNDXz6nGYPj%2FiT8JnDWAxHUI2NyMQoSMZIxhWKUmIKB4rd55pVIcM7ejSm1P00IGbt%2FT1wb1JDV%2Fyz2OMwGHB4VKY5X0UEv9RGfZVSHva9FkfP3lEMis6tCjlSw%2FpD2xt&X-Amz-Signature=02e1e803e797f332030b695438b86c68975d1267ecee2882ada7b35b0139842e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


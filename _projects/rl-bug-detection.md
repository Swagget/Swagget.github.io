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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBFXTIXB%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T011944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsGn%2FVWdcJLFCRMlv3dRw0f%2FN1RldSBGiPXprySEQlWAiATx0fKfnq5%2FuQMOHUy4y1kV%2F5f4R220szsiiivXfpd%2FCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq7VGuZAjUVsNnIsKtwDrLgqfh2igXwJxFIMHk%2BHO2QdbkbvB1k9S54iftSXT33mZxAwhitUFCJRxPkubHAOpRDrzw1Z%2FFAqKtxJYEa5DMjxy%2BuFtNm0yBq6tOyZm1bPaWsO%2B2GPZuktINHxdvjIovICWu6%2FK7VY17Lxe0KnYMDvG9VjIasX%2Fjbog4BkcrH0yu%2BU4Nm7%2BH0V3uvi53GY%2FffNHBEUaXdaEYxFH%2BORlID0gmY8tesuPH%2FvrfRxpOlcTXSUp1py%2F68U3DlqdkIKenKW6DvCBVcXnqFOZ82D8HjIUHlkwPRTssVIgpAaU%2BrUZ7dL9ZBT14JNozJOfr%2F7ZV1hJMfHx34pQoTHxvxyi4Xkqe77oTeABWVwz6gh7bfLaOjwzmLW9ygSfkV1ZH3X%2Br%2FqOZok5G5TiZu4thbyhOxmmTNpxo6N33R0mSpszivdhVYzixJ2dzEICSG%2Bizf9lUFC0zrojUJsB0yVJ6asmu%2FfzIknIB2V0fv1RZz2eKvNnJ8s18ieqPV906sBf5Ac%2Bz7dGlugzPq%2FPSoqry%2BPDAaVO77EpNSaOepjUlNIdJITI4tKTVV%2BntjltbjhrxkSBR7wk%2FHiI8opp1OIKDSAGT2%2F93lyZ%2FX5QL5KvFEl913U%2F6w4lI7HEMOSBbIw6bz60gY6pgFk%2FqyreNLg4Yg%2BWA374J2oOXLf1JHpkj8JOG7iagcrZzM%2FMJ91vJBdCnnY1RyW5ZSccsptq%2Busv9PItWfEADPArzTivMjfxyUNFwyTfMoxsTWr5iR4n4n49vhMphwVTgnlxWicrRVdmF%2F9UPYNPsJ5QQjhn%2BL9IV0QWrUkwFJhluF22YKKoGK8rDnvZJQNEpUG93UQKM7r1V4ZzO1aDwX6FiJmEc7F&X-Amz-Signature=19ffd9ff85f99c7b4f6e65c13f80d81b05fc62748fe2cfa38399113e7a5fedf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


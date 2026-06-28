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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MH6KDTZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T165503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjOo2zHrhEn0xYHH184GApKVPmaIU2C7RLNuZjeKRYnAIgMmygqcgnCfeNRbpPOSlgR%2BDQR19NnZJkf4BXIraIH9oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKozNFJp8judIXlD1ircA9sOYO3%2FFy4dK1JSAbQdTxunl1twM8pNm96%2BV5B2ko9SB4n6CUo0TvaHQyDtsZmm1ljOfX8cdJzI0jszqZdtx%2B1M0%2BoXpbQM6il22urmAJMApQexWvXW2rQOin10oLAsApStH74wgulqAVzIuAGa7xpySnIyigfwLm3tLW%2B9vkn5OuUWkpTLSY%2BcR2%2F65Eu%2FpiX2UaWgoLCmzN8fW%2FUE9xWRcsvoN%2FaSScvpBqOEnPTc2YEo%2FWrKW6N1MW5Jau39bXwg%2FvqOrad0HspehzmaJKSt2pF9lPsHduGN3GGV%2FdUu3AJO8ELs69g3PHhMC%2BWSAdB4stIzLfiU4%2B3rKeoNp11KERxaMOL%2FHzlSHG7k8tHOcmCRXBaYndzINfQhHpa4i9jczRtLjJNASlLp15bZcuoyEoiStr75suoFZGJezXJT%2BubyY9PQQ49alXzqH8EomTckMvZD28tsmMTUgp4RxE7WiLol4FVWXmaFfSF0kPTi%2BRQYHkfuNREACqMnONwHBIkSvDwgeVvYHgW%2FAqhCEM9uR0xoSr6yv4jjvznhwm7CNr2PsXdQ3TA%2BxR2XPzlVJvhdZXG6FMaBYYoVJdawznTeFucTLICThKD5YDKCaTybBaCw%2BRk0322j0RmpMJWchdIGOqUBzHNHNaWyPMACYn5PLov4i1BUaBWfyDYZn6wT0cuOeKH2lQhYoOIIC7m%2FLMzpvqaL8ioD29ChnvbSf7qNRasbOBB38JnfuyqFlgCq7VSpHGhYrdNqxkEcizQ%2FG3GuXbBnJutlY4H%2F86QwSri8w3RA5iWShE67WKqeQ1YnzgsbDTNZbs71XDZvzamZ12nLb88vaAZky9a05nHlRbrj%2F21%2F4eoD9GIe&X-Amz-Signature=1a780486d85f76af40261d8882f35e665a0bfbe4585609b3420c17dd14ed51f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


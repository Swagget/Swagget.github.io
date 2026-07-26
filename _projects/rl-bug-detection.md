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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HMW3EO%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T175115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFACGhBshS43%2BCGwE0bSgcCrFZgeieFm7nLq98P3YNjiAiBg1L9GXzFZQsYntwWdWFTMJY5u75YvzwYqS8h4YciJWCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMxfgyRDNrhSJv4GwKKtwD%2FuI%2FJvy5yUfAwS0z6K2LfCG0WnJXInufChXweJ%2B%2FPUsxh0jtjbyw81RvmM3NcHPG5YQbZ9SoT5oAlyBvX8tUjbPcBG%2B9dTjSQrFg1i8mv35hyWcmdvvSBwQAtqyaYDoDoixhziNpm4hXcIwoAgzZ%2BQkO2Qx3nLI59delkub8S2e33rIA%2B3k%2FfPR%2FXCK9YVVyB2J2dtzrZHq9zcV17qY%2Fei%2BM6GxWcQu7lXsLxBpTNtg9%2Bn3QEJB7qHGx3ZlpumY5wBWaEfiAW0GCVKvT0AFSG1hQlr5A65HDAbBV6PP0otRPoBWUB1UQrFEgfUR7svPE3vwb3Lvy8E80jEQW7pvra%2BmGdSsQPwo88JWn7XbRlMl9oWTcaeJ7uUQ71qao3wAKZW0PDGGA5LEwImHwgQ%2FANmCuWp3Di7xHoIpR%2BNPXFae92Rq8R%2BrtwLWrTPAYqsx84XaNoyXJ%2ByZD6JyufyYRURU0xBedgF2RC7jLlmYyVoujp36ylw24Li3zUW4V4%2Bv9lMuVdPSUZ%2Baqvg16QPj4VbQT4Al8EoBT5Nd8U1ROoqBeYTUgmhUUb2W9F80JB9QDu5gsLe3L2GmelsP7Ldbrgddxtq4axArtO6pcV2hQJQ9f4tdIG1xLMU77Xrkwt%2BiY0wY6pgFReFX6nYYos7pmcUGIeIEAoj2gaG3A4t2ZD9VNAgRkn4q8fyPCMsB4FR106%2FPh1gWnECoFUUGkzMLmmyI1fTUL9RJM%2Bl1W8SprCeTkHmAmDSs6eLjUh1h0YJ0j9WAYu7fX2Y%2FrFUG2SHxOsVkeTrM8OgrAOPOriondvjUj1ryBEi%2FbUHgmDDVgDdRGiBwhBiSNyXD4EygwCBzhv%2BdJ%2Bw24LfXfs14X&X-Amz-Signature=03b92f50e835e05083b95fd413652f47eab66ab0bfcd059acdb3d1b206515551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


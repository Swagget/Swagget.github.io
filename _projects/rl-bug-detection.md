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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVDHJMH%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T111352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1zm1UOX14ngcSxm9KoFnRBnEHUkJ%2Fa8Fwkf%2F5Y4jxdQIhAKWqOz5aTnmb%2FVVmGy5e%2BDQWSFQ%2B%2FG%2BGkE2x6H7G4LbSKv8DCEMQABoMNjM3NDIzMTgzODA1IgzsQzGbQmRO9dlj%2BnAq3AOKXRRisj40WS6Z2lqUkvRVcLdWldd11k%2F4ok7FGxaVhSmRXu4Lp%2F5TqsrJP5xGZzTzUDu1QhFBxCNrkDD6Los32SGLSZXA9vcmEOK7SeaRuw0l8R7Fq6IN%2Bonk5niUKu%2B0trNwqza1oyc5QWJrmrZzCYOmCsKFPv1RTDRWcwWS0YopOSwZY9jq%2FI3eNVuCgoB%2B6MQwHZBmOkAKElqIHm1lIqLFz%2BWeOwzTVfwA2Qrtuxfuvqq2GboQAtx1lKfrHfsehJAsG4ZXWQ4WQfopWH1X3ag4raXcwJ9HxA8y1Yt383lRU1chOPYSGxaBEmgSmpdJslWVP8SplNghSQp2XQPdvPVVbEjzuADGoIwyfjzVbN16p2jRe0ggSqRlzyMt8STBflbZIYMipKrc32JDxYRwtfHjEsCWlnP%2BXvXrC0qaTcuOcyMOOYXUZfdaP3%2FC34DRCcvJHNpIopjbVSH3heGBM42S8o7kaf4e5moz5Vkbv2VrDvsdpd8MhqlNDoDOxEFm3VQhI%2BC6%2BFJr7yiZ5Z9M8zcFFOK9pYsj08fdbxrYILDA6I5PGmQ0cpXMkKLc3WP9jGG64t%2BQtWt7YpadsXyfUYsFNCaKmVa5AMN5Yq40cHWn9dHlTXj%2BCpQ2VzCJwovUBjqkAQ2WuVqXIyfXkPSC6qLy149TCzLLUb%2B9mckDIQv54vBi%2FDwLUrMkLCcegYg1BMs%2FdAkK928du4L2ay%2BkIka3PE%2FRMzTBeUDVhueaHaKlNXPJGoc%2BhMMLL%2F43Vg8jtL9H0C5sLjtbd%2BtYCNN5pNiC%2Fy4QrPcfIn8pocNVaIz7uZA7YlyLDFsrkJyO7JqhgIDhjyllumoIIHiRB3CTlI3Fp%2B7hdT85&X-Amz-Signature=5c7038e0e6c3dd81fb69b727d0d1ca14d2edb6d0d4b3ddd8a1f8feb675ed454f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


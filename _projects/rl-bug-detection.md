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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URHF5T5%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T062352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDHZTAe%2FqX3IBIQlllNqu2CqV4pWd1%2BIu99iZ6FTNIv3gIhAKrQrHK%2FcIJeMkI1TP6q0ptEQJ7QZU%2Bf%2F3W5XSi2667mKv8DCAYQABoMNjM3NDIzMTgzODA1Igxf1ngml%2Fs8%2Fc5Q3PEq3AMlNXUf7M5IXHBh5gndgeCX7nYIxcig5QalZIpltuF4CRTZx6vTwB5m0Epe6ecvGIdWEsMX2CO5KZFR4AmarPoN5D6W6E265gGcF8j%2Bq7IyrKvyQEHU%2B5wNKdlrLABBAEO2no1ZjEqF60mNAao4l1wGMZJsURctubzja%2F9dgMjNG6v9JGlcmX4WdQ%2FEoNJvTwfccZKnDnUShNPdrLkP0MvlAk16uczOAcRKOSy6vH%2F0dwmMfZiUjUyam79PIcAtBQX2zDTeXvlvOM7LJkbSnasKOQjwG0M6NpnwsZmx2%2BMWA7gEm3Uj9uWtKJR4X2X%2FxTFIOlQ3cbWHokVFAIGY9GztwKjYg8aSehoMpjTonPaJT9fPXuI%2BLKpIYxOwj3vzzTvcomDssaoF52uP07dANgtug9oZsUcEAd7bp4BEMJR1eTXtKcFn3HU9OuSYzvmPcQl8soJSQqLxugJJP4BevdWOuHfzoRxQl2qx8D0B0sQXkdQDxMf24ZRfmBJ2tjMo6NRzsvTjhf1yu1pZ6C3pk5oCmdUe2JP1a5qxoIwrXZ5n0K%2FI1DOdWKK8MkkpIKfkUM%2Bx8QefOJPcA%2FvYXfvKf4225iOzyxiSuGOwBaHdMuomxSfkmvGbPDsJla6tRzCtue7UBjqkAblAXple50qCdgRFjhG1E%2F75kCpuyQ7uMbd2UDnWoBVUfMHi92CZvq9p%2Bi%2BEl%2BtcHv%2FSrSaeuFqCd%2FX74i9xLq43jYr5p8EAgK3ZfcjlxwAqt8UK9bxrmGBZQHVQWBbMjq6LyYr8OPy4RmJicv1ZuRtvjGJjvvgwMXDt9R54bxJROYYiJa4plRqIN9bOwVrkMA8Mk60xyXN6NWV03iYumSR%2FCvV0&X-Amz-Signature=a16deeaeb6cd3fd4870b2887df3c9315219f917db05adbf565ce2a1e958c87af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


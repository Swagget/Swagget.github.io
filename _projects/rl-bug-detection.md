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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGYUQTX%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDRCzvQl0yU0eNg57tTb8m9mNq%2BEjd%2FV9Mao6%2BW6ywwqAiBHkxHmkuVZ28GPTS%2FTOTxfFHrFQU1vPHY5EjXBv4iYAyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCBQJTbXYXT0KNhPWKtwDZlXJ2Tt7FWMUqXtlZp6L66NaXbed8xpxGnCxFwSXby8gFxhS%2Fj%2FLWfCg5Ave1dF9vMAvZpHbGOdv9DPMg89Fp6RDjiiMLTFVPMU62D8%2BPy5dV3J9qQBMAGx%2BTCbCIdBXAzMB2D3hsF9%2FpPsoa7Gciz2bMh403umBUns5Dw6peA4YSVShFDVe9g7cLtS%2BOLgH0eeew3YMfc%2BnAdGV%2BF1s6jnfxDfe%2FJBwcNblhQXnwN9QwERoPaYfCifdF7foiNktzSx5S5WgpCovS6w8ruPIroNRl0ksJsWAiYk%2B0qUQIf4vMEouiQKTY46ysz1D8aPpUpnxgTh0ZQiaJwLRgDsgoi39qOAGNJR5pg7VwcjGxQXljlHsSa1pMxYcDfKzhI4gEVwJyFbMRa7v9MErVL%2Ba9CfaeNNrItditrM%2FtXXnXNaumaHSopgAvFOGmXa8pjVtJXS6E2kbvfqurQzCLCRGJig3BQ74Q0kHUiT2SGFVCbFzF230JMsjH%2B%2FNCJOfq6Khg2VUuP8HR0lfUdocghvFIecrG1y%2FFFkfvMtcq2QtmUHKlxzXHA4HukQZrdg%2FpDr2eY%2BY8QWSyTMPi176nksms5zoYK9IrEsVmvSWAQs0bTauqORUcUc2iUdcZtkw6qWX0gY6pgH0qYmBmFrQysLJJ%2F3j54mYRtAbu36m4LoMmLI6rQpyq9nROgdm7UOuzk5pgoZzF%2FVdLCv%2Bhrhb63L9hJFUpYOiujcQZwgC3wbQMx8uyWm7CqhV%2BeG8vpvnBkfQdA2ZSCV4RXq8bjGMip8y3XmzobNOawLGmY52kB7bHoIfrgagsNI4LCAFGStDByJbN45uwck91pTzoF%2BySqt6oX73oIgRlnaF9VaM&X-Amz-Signature=e1ba73341218588358c8904c8c23ff0da4be538d60cd454f9c9fa601c7a44960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


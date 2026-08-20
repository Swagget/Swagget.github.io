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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4RDSEW%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T211608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICggwiIgAUiOlYnrBcMdldZoz8dXOfPsuDs5LmWTa3%2BdAiBakXcSjSd88NtxPV9wWAoVfF0o86SAxgh342Ma%2BROB%2FSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGfRLQwdMONiO1ftSKtwD9TtKQY913cAFKOnGmoqfUice%2FlMKXgsxpsjfVSri2k5nmZTbBJALr7lt6x0Ty45Vojv%2BjQQ7LgsvUtq6z9STxKuiVu8w2S81rVLkpYGaEg3f6oXPNIRExsdE6lK8sSUHzCOqNfBaz7guA9fCfwa4mojxw6oT62o3Z19ihta%2BWrO6Ia6xaXBoq0nOwdCHB8tcwUnpA9OZQIBvxqX5raMM7nI8wGR2uCiMp7d4nFbtYyaOMfCtw5UiHOXAAIfxlZ0TC%2BjtqLTV1yzgfERuj4C%2Fc7Szq18KCYUf3z204KGsAi17uPmIFUP50oPUxKRQu9lxV9fmOLLCgz67dPOyZGSSjtT97WplO%2BNCWDXAYBcSud%2Frn7YLzq4FTGNt6FK%2BMuOGyHYHTax%2FFDYpjwYKyjrfFzl6P2BKAagz6V5qEnlRP60OgSBDTp8BByWPgDU2aUq5Lt02BAb0jHJhG%2FfIbh7mTHqs8YT5R%2F%2B1E%2F1e5aZ4So6r2gJ5V6AqChxRgP9pJNtaraHChlod%2B5LoyGv1kf%2FvA7tVbtJ3n6uFLkgDYpki5TpzHHk646OedIajDOn5hcWCCY%2BUnetY5wIAQuOqzxCyY5ZeuklDzY1QoecmaQRqUbBRuhrFMPX5pdoDLqYw5KWd1AY6pgH%2F1RT8%2BF2RcVXp%2BhlMz7YBjtY9SVv0WnBtwWVM7TYAX4hlp%2FkR4Szn5xr8aStunU9WkTws8cu96t1N%2BFpPRGuJ2zGomuhfGxJZaMBGM8aaAE3ZerlVZhQvpZaeDwYWh2pDPW6nljzGy1jOfjLDEOYJsnjqiso82JleNc4FoBsrqoGo%2F0RLHcb%2B3kkjpPyCNsL2GYsOP2GsrQxQdzhPHdU9Emz5x6oC&X-Amz-Signature=983cb093ce8e5d1ab120452d5fa850bf1d2aee5b1ce6a3a31ea2e63ba74154ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


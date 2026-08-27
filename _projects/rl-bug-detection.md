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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGINR337%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T131253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIC8dPvc8jVbh%2BfOYfkkM9TPlE2KKi04Rb13yz9Sd2SCzAiBIqwBm39RGbRnp7HszVCOPg5tHcnaQ49G%2B8nTSQ6ZmAir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMWF5d1ltyaMB%2BPBQTKtwDEggra908MO5HnOEvSRSXf7%2FhrObIKVoxaj7xvn0ZljlUNZLzwCeKQMPWti%2FVrxSUxe8KtB4c9fCAY5QFYuCR2taDHO7aviUihgt0yX5pGCsgQDiCDxituctlo%2BkLKvGUJKWaiYQIepR3SPjTddmQqzrcwKrQyXIUcayv%2FbH4hMXxvr4tX9e1GI9mA%2Bk4mw6NDZcoCYv7KpygjMnKswPCCIlJhA70wiknPBQtYSR%2FhlOjs78SfL02LZ7Sk8kTLEGWbMnlFTOCJWZtd6UV5%2FQYTkL524he11gSJrYReMioewOY%2F8q4PkTf6v9rnYTap1HtRsQhLpHMMm4ClPgq4NY9ZcnhEM4mimycDVKdZVm%2BBfdy%2B8UNqL4Tjn9joCU5%2Fe35TQiiqOSecvU9FDx6tRdzc9TMsCDfIHK%2Fkizml423frW826wW0QrNB%2Bv8EXAjzx%2FHtcdrtV6O22LSbCAUVN9bFBjs1d7RdH%2FBmnIN7LHnGCmr1uEfWpt1T1D1%2Ba7NdP81WR0a1QQYSaxzuC%2F8DdKQ4srqATeahQQ%2Fd9KfkPVsoMNMoj5i9z8NzoRmzYeACypRiQ3Vzil30liwQT0UIuBlPVooY6F01qRd0WQzHosFdkfA4JmzR1vsJTP1U7Yw18%2FA1AY6pgFWVf8VWRttEfIcikyxsGKfEB9T1d7V%2BrCyPNOUdoxmkogKrl35AEPFtmk8X7UUliI3sON4IxFmOYjgA9p6I9G5AT0zKfDtM%2FzoLbKuJBn8EEKxBl1lljveV8IJnKYFOyQT4ZOcvIpyEmxl%2FjuFA9oxB8a6LiVE%2BvXzoLg%2BFS1DUScHGxds5NRPI%2Bq2PYTcJH1CK95A4e8X0frxohjebtfbYPJEihwD&X-Amz-Signature=f249e5e39179f73403909fde4295330a4b1b9f88be2ec13f643582cc8c54fb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


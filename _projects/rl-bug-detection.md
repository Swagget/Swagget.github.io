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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYIKRUPH%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T175933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCx9ZjpiSDsY4YvHz03YmyZleMwCPcULKuBlYItRXu1PQIhAKz8S%2FhNFYeT%2BaSq0HkcYJRYDC0XGTxmW0NL3gxuixVoKv8DCCsQABoMNjM3NDIzMTgzODA1IgypO8E%2B%2FGPuHh8QFfkq3APfrr3WAlEUjyADq2e8FkDo26fjZjYXCK%2FKsshTucHIlXA9QCOofwji1gukhBZh79%2FLFANmFhYHoqHh%2FatPeE%2BVhkkUPrK8ZZnL67oid6V1U%2FroQMdt8ROlxwguBgKaqnTSheUlOIhFywG%2FcdyOlUrbWMo%2BcbSb6p3PiP%2Fq0SFA12skZGIGY0lhpm%2FKieBihMZqIPL3mCoYpIIky9mhWPND6gu6s5XY13GEkcotP%2FGltT7p%2BjXI8Vh4Sz05CSfgiEcOSxj029%2BtNZjwhkJVErI37jkkStrefT6QPEQhguzDcTtEH8L7Sr0ohSAoibcbfZfnYiAYQiZh8%2BcbJSXGiF%2Bmw8s7SCGazw7HRgXmYVjf3dNPNhAG7uHqh1On%2F6WvTcbRlodDZzdMxQOvfe6uS7m5Xjv1mozx4a5l%2FOlstkB8ZAgXK0foCWYeG6hqXtsOTPprlRC4Z083a1rF2sXSvtEck0eySPtxCMc19wn0JfC%2FWC4xWATd4blEvCZp%2B9CnWVZJ1bNSLQoQOX94ewN288F4kJDoiWr3PK6ajVuYRPHoIEEFMnoeifwuH8zPRPq7%2BhSvXFArYexAvZuWbO3skrhYEHQZTSGGGqzu3gLAUlRLhG8RcIwvxYLG3CorfTCzr%2FzQBjqkAd0up%2FIhBIjmrrE6Xxxw1daStp4fkSU%2BDaWHSUilbPVV%2BXrluScsSs0yMAkKqNkQDuG84IKN%2Fme3QHYxvXB0JU7RifGwDubras7lPHt4aS5uH3lyNOwixfIQMmTtptv0bvzvvlxpq0%2FAJCLehMOrJx5dcU%2BRgyqtKaCTlOFUsBET5S4NDg1lcP6Dvx1qRMUoErhAT57I5dytvrR4B67Sd4jbpkXG&X-Amz-Signature=f69b0bb9021bf156e6642292d799e6e6801a60027a1b76c18129c3016dcae403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


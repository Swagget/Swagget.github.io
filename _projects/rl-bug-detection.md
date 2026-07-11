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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQU5KKG%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T045022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvWx%2BGprCGEWppl1d37sPwG7yz%2Bf0JIHkdaRfaRuLFnwIge%2Bvp%2FRxjhUkR4VKvY0kSHfQEc0PBVSiJ%2FebBk6MySgQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRzCsbVfcwMxhX1sSrcA1EHGVH0cpPyM8OScW4zOo814R8QlouodKPuyHMlOA7totPz9y88GrmnSY4DINnOlaU8xI%2FtWXdaalLJtqxjfKBgDPgxO%2Fu84LoSp10HsgLgrNGcLwZKIFG6PyClsMNg01%2FbuXdf%2FGrGK1pVlDF6fhRTU8coRADQ7kLW0iJ%2BHz9Ie7JGio%2BWaI90dqYsiFIqceAIpA572G7q4mcBSd7GAWU9k2%2Btz%2BkQDToy4PiLQKS7vXa6haj6kQQR9SKQw3aoEeMTkqYWLQ2hAc0NPqWuhdKG21e3KmFPsQfqt6oKwapgzKTg4v%2BxVsdbxC6txIx7a6afT2KsD7m2fCngelT6vyyFB5mAgvQfepYPb031LGZOwgqbayEZ9LFN%2FRwa%2FLStO9aYYR37%2BLFawlPD8F%2BXDD0SOCGRJ%2FjCypmBvfjTfH7Dw8cTLQoVc2yt0nhTJ7OzlLZTBgdjOgxdAQC1FGv7B8YVttB7Ur2FH7Rzpl9TnedcvPkeVlZl%2B9BxGgu0P5%2F1CSVjwdUWD%2BWeB3eO8%2Bin6hkc4CYkfDTlJ9%2F3sl1sboiyfRa0V0Prjz3%2FGtv%2F1USMfEAnZa7DZMXveOS%2FFUKOC1%2ByrMOML9VnfSTB1oFtMwWTJsv0wDhLLjOvkaUeMMjOxtIGOqUBajT2barqK87C2Ot1nhVOJOFGkgWXgbr89pXr5SW0r%2FxqlGbPxyCqZVYAhWmM0WUx5jJkHjHFj%2FlsXgPX2DWFVKwOWGS5yLAZlr76AibBVTOAdFqmrN5NHovM7eJrUh4lXnn%2Fg50AM5nEQKPBANJBXZMLTplzZw8fmEpgOe01%2Bn3ojBye7vvsDCriXpXnK7xtD71iREbrsvjzWlmlhQ0g4B%2Fg8sBN&X-Amz-Signature=f9ac694d0cab67c693921103598ba87d0dd39f28590757c292b52565e2895d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

